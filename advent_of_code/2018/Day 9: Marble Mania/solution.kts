val players = args[0].toInt()
val lastMarble = args[1].toInt()

val circle = mutableListOf(0)
var currentPlayer = 0
var currentIndex = 0
val scores = Array(players, {0})

for (marble in 1..lastMarble) {
    if (marble.rem(23) == 0) {
        var points = marble
        var takeIndex = (currentIndex - 7)
        while (0 > takeIndex) {
            takeIndex += circle.size
        }
        points += circle[takeIndex]
        circle.removeAt(takeIndex)
        currentIndex = takeIndex.rem(circle.size)
        scores[currentPlayer]+=points
        println("$currentPlayer got $points on move $marble")
    } else {
        val newIndex = (currentIndex + 2).rem(circle.size)
        circle.add(newIndex, marble)
        currentIndex = newIndex
    }
    // println(circle)
    currentPlayer = (currentPlayer + 1).rem(players)
}
(0..players-1).forEach{
    println("${it+1} : ${scores[it]}")
}
println("Winner is ${scores.indexOf(scores.max())+1} with ${scores.max()}")