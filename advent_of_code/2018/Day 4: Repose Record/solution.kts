import java.io.File


class Guard (val id: Int, var sleepMinutes: Int = 0, val sleepMinuteMap: HashMap<Int, Int> = hashMapOf(), var sleepyMinute: Int = 0) {}

class Entry (val line: String) {
    enum class Action {
        START,
        SLEEP,
        WAKE
    }
    val action: Action = when {
        line.contains("asleep") -> Action.SLEEP
        line.contains("wakes") -> Action.WAKE
        else -> Action.START
    }
    val timeCode = line.split("]")[0].replace("[","")
    private val dateParts = line.split("]")[0].replace("[","").split(" ")[0].split("-").map(String::toInt)
    val year = dateParts[0]
    val month = dateParts[1]
    val day = dateParts[2]
    private val timeParts = line.split("]")[0].split(" ")[1].split(":").map(String::toInt)
    val hour = timeParts[0]
    val minute = timeParts[1]
    val guardId = if (action == Action.START) line.split("#")[1].split(" ")[0].toInt() else -1
}

val file = File(args[0])
var sleepiestGuard: Guard? = null
var currentGuard: Guard? = null
val guardMap = hashMapOf<Int, Guard>()
var asleepAt = 0
val sortedEntries: List<Entry> = file.readLines().map{ line -> Entry(line) }.sortedWith(compareBy({ it.timeCode }))

sortedEntries.forEach{ entry ->
    println(entry.line)
    when (entry.action) {
        Entry.Action.START -> {
            currentGuard = guardMap.get(entry.guardId)?: Guard(entry.guardId)
            guardMap.put(entry.guardId, currentGuard!!)
        }
        Entry.Action.SLEEP -> {
            asleepAt = if (entry.hour == 23) entry.minute - 60 else entry.minute
        }
        Entry.Action.WAKE -> {
            currentGuard!!.sleepMinutes += (entry.minute - asleepAt)
            for (m in asleepAt..entry.minute-1) {
                val newCount = (currentGuard!!.sleepMinuteMap.get(m)?: 0) + 1
                if (newCount > currentGuard!!.sleepMinuteMap.get(currentGuard!!.sleepyMinute)?: 0) {
                    currentGuard!!.sleepyMinute = m
                }
                currentGuard!!.sleepMinuteMap.put(m, newCount)
                if (sleepiestGuard == null || sleepiestGuard!!.sleepMinutes < currentGuard!!.sleepMinutes) {
                    sleepiestGuard = currentGuard
                }
            }
        }
    }
}
(0..59).forEach{
    print("$it ".padStart(3))
}
print("\n")
guardMap.toSortedMap().forEach { id, guard -> 
    var totalMins = 0
    (0..59).forEach{
        val minutes = (guard.sleepMinuteMap.get(it)?:0)
        print("${(minutes)} ".padStart(3))
        totalMins += minutes
    }
    print("$id ${guard.sleepyMinute} ${guard.sleepMinutes} : ${totalMins}\n")
}
println ("Sleepiest guard is ${sleepiestGuard!!.id} with ${sleepiestGuard!!.sleepMinutes}")
println ("Answer = ${sleepiestGuard!!.id * sleepiestGuard!!.sleepyMinute}")


