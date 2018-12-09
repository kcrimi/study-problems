import java.io.File

val file = File(args[0])

var source = file.readLines()[0]
var iteration = 0
var smallest: Int? = null
('a'..'z').forEach { char -> 
    val chainLength = react(source, char)
    if (smallest == null || smallest!! > chainLength) smallest = chainLength
    println("$char reduces $chainLength")
}
println("smallest is $smallest")

fun react(source: String, problemChar: Char): Int {
    var input = source
    while (true) {
        val output = StringBuilder()
        var start = 0
        var cursor = 0
        var removed = 0
        iteration++
        while (input.length - 1 > cursor) {
            val currentChar = input[cursor]
            val nextChar = input[cursor+1]

            if (currentChar.toLowerCase() == problemChar) {
                removed++
                output.append(input.substring(start, cursor))
                start = cursor + 1
                cursor = start
            } else if (currentChar != nextChar && currentChar.toLowerCase() == nextChar.toLowerCase()) {
                // println("$currentChar $nextChar")
                output.append(input.substring(start, cursor))
                start = cursor + 2
                cursor = start
                removed +=2
            } else {
                cursor++
            }
        }
        output.append(input.substring(start, input.length))
        // println("input: ${input.length} output: ${output.length} removed: $removed")
        if (removed == 0) break
        input = output.toString()
    }
    return input.length
}
