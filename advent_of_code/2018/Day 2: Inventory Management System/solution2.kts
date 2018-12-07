import java.io.File

val file = File(args[0])
var double = 0
var triple = 0
val lines = file.readLines()
for (i in 0..lines.size - 1) {
    val line = lines.get(i)
    for (j in i..lines.size-1) {
        val line2 = lines.get(j)
        if (line.length != line2.length) break
        var difference = -1
        for (c in 0..line.length - 1) {
            if (line.get(c) != line2.get(c)) {
                if (difference >= 0) {
                    difference = -1
                    break
                }
                difference = c
            }
        }
        if (difference >= 0) {
            val answer = line.removeRange(difference, difference+1)
            println("$difference Found boxes: $line and $line2. Answer: $answer")
        }
    }
}

