Given a string A representing JSON object. Return an array of strings denoting JSON object with proper indentation.

Rules for proper indentation:
Every inner brace should increase one indentation to the following lines.
Every close brace should decrease one indentation to the same line and the following lines.
The indents can be increased with an additional '\t'

Note:
[] and {} are only acceptable braces in this case.
Assume for this problem that space characters can be done away with.


Problem Constraints
1 <= |A| <= 103


Input Format
The only argument given is the integer array A.


Output Format
Return a list of strings, where each entry corresponds to a single line. The strings should not have "\n" character in them.


Example Input
Input 1:
    A = "{A:"B",C:{D:"E",F:{G:"H",I:"J"}}}"
Input 2:

    A = ["foo", {"bar":["baz",null,1.0,2]}]


Example Output
Output 1:
    { 
        A:"B",
        C: 
        { 
            D:"E",
            F: 
            { 
                G:"H",
                I:"J"
            } 
        } 
    }
Output 2:
   [
        "foo", 
        {
            "bar":
            [
                "baz", 
                null, 
                1.0, 
                2
            ]
        }
    ]
