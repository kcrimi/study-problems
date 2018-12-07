import java.io.File

val SIZE = 1000
val array = Array(SIZE, {IntArray(SIZE)})

val file = File(args[0])
var answer = 0
file.forEachLine() {
    val specs = it.replace(" ", "").split("@")[1].split(":")
    val startPoint = specs[0].split(",").map(String::toInt)
    val size = specs[1].split("x").map(String::toInt)

    for (x in 0..size[0]-1) {
        for (y in 0..size[1]-1) {
            array[x + startPoint[0]][y + startPoint[1]]++
            if (array[x + startPoint[0]][y + startPoint[1]] == 2) answer++
        }
    }
}

println("$answer overlapping spaces")