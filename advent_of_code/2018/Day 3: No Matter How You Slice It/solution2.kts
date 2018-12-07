import java.io.File

val SIZE = 1000
val array = Array(SIZE, { Array(SIZE, { mutableListOf<Int>() })})

val file = File(args[0])
val validClaims = mutableListOf<Int>()
var answer = 0
file.forEachLine() {
    val specs = it.replace(" ", "").split("@")
    val id = specs[0].replace("#","").toInt()
    val startPoint = specs[1].split(":")[0].split(",").map(String::toInt)
    val size = specs[1].split(":")[1].split("x").map(String::toInt)
    var clear = true

    for (x in 0..size[0]-1) {
        for (y in 0..size[1]-1) {
            val tags = array[x + startPoint[0]][y + startPoint[1]]
            if (tags.size > 0) {
                clear = false
                if (tags.size == 1) {
                    validClaims.remove(tags[0])
                }
            }
            tags.add(id)
        }
    }
    if (clear) validClaims.add(id)
}

println("Valid Ids: $validClaims ")