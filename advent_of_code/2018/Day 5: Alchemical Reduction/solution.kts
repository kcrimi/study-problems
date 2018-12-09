import java.io.File

val file = File(args[0])

var input = file.readLines()[0]
var iteration = 0
while (true) {
    val output = StringBuilder()
    var start = 0
    var cursor = 0
    var removed = 0
    iteration++
    while (input.length - 1 > cursor) {
        val currentChar = input[cursor]
        val nextChar = input[cursor+1]
        if (currentChar != nextChar && currentChar.toLowerCase() == nextChar.toLowerCase()) {
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
println("\n ${input.length} chars")