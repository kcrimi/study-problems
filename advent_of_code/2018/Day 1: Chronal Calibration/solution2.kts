import java.io.File

val input: File  = File(args[0])
var total: Int = 0
var finished = false
val map: HashMap<Int, Boolean> = hashMapOf(0 to true)
while (true) {
    for (line in input.readLines()) {
        total += line.toInt()
        if (map.get(total)?: false) {
            finished = true
            break
        }
        map.put(total, true)
    }
    if (finished) break
}
println(total)