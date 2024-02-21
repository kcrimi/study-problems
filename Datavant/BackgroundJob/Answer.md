Overview
The basic steps of the workflow we're trying to build a system for ae

An admin can use our admin web client to initiate a customer onboarding
The client will send a request to our onboarding creation api
The Api will add the request to a message queue
Requests will be picked off the queue by workers to manage scheduling
Assumptions
These are some assumptions I am making in this proposal…

Order of the onboarding tasks is important (eg "Onboarding Call" must be done before "Set up Product Integration")
We foresee the need to scale up this process in the future (ie more customers)
Onboarding must be initiated through a web client
System Components
The top-level components of the system that will handle this are…

Component	Functionality	Possible Technologies
Admin Client	Allow admins and CSRs to initiate onboardings and view scheduled tasks	React-based Next.js web client or 3rd party admin tool (eg Retool / Zapier+Google Forms)
Onboarding Creation API	Protected endpoint exposed to our client	whatever we currently have (eg Simple REST-based rails app, Node service behind GraphQL federation, etc)
Onboarding Message Queue	Queue to receive onboarding requests. Likely not guaranteed to be FIFO	Likely only need RabbitMQ, or SQS if we're on Amazon
Scheduling Workers	These retrieve the requests from the message queue and run the long-running assignment processes	EC2 or dynamically scaling ECS or K8s cluster to allow dynamic scaling
Dead letter queue	For the messages that fail to be picked up, they can be retried for later or analyzed	RabbitMQ or similar
Happy Path
If all goes according to plan, here's how the system would work…

A customer needs to be onboarded
Internal admin logs into the admin client
Admin selects all tasks required for onboarding and submits request
Client submits request to API (with tasks in sequential order)
Onboarding Creation Service validates and stores record of request
API server now passes the request along to our Onboarding Message Queue
API receives information and optimistically returns a 201 response to acknowledge
Client displays success message to admin
Onboarding request is then picked off of the queue by one of the Scheduling Worker
Scheduling worker iterates through tasks and assigns them based on CSR availability
Upon completion, worker sends a completion signal and is free for next request
Completion signal can be consumed by other services (eg sending confirmation emails, etc)
Failure Resilience
Here are some thoughts about how to ensure the system stays running smoothly. When things go wrong, we can minimize the damage by..
| Possible Failure | Mitigation Strategy |
| --- | --- |
| Client sends improperly bad request | Onboarding Creation API returns 400-level error |
| Onboarding Creation Service fails during processing | API returns 500-level error |
| Message Queue unavailable when service sends request | Service can failback to recording request to DB or other storage to be replayed once MQ is back online |
| Message not picked up off Queue | Can send to dead letter queue for analysis / retry after a certain timelimit |
| Worker encounters error during processing request | Can send to dead letter queue for analysis / retry |

Data Integrity
To ensure that all of our data is clean, let's…

Protect all API endpoints to only be accessible internally
