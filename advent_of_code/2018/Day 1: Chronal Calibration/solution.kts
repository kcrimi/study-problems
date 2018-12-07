import java.io.File

val input: File  = File(args[0])
var total: Int = 0
input.forEachLine {
    total += it.toInt()
    println("change: $it, total: $total")
}
println(total)