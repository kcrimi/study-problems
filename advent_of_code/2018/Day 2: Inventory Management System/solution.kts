import java.io.File

val file = File(args[0])
var double = 0
var triple = 0

file.forEachLine { line ->
    val letters: HashMap<Char, Int> = hashMapOf()
    var doubles = 0
    var triples = 0
    line.forEach { char ->
        var newCount = 1
        if (letters.containsKey(char)) {
            newCount += letters.get(char)!!
            when (newCount) {
                4 -> {
                    triples--
                }
                3 -> { 
                    triples++ 
                    doubles--
                }
                2 -> { doubles++ }
                else -> {}
            }
        }
        letters.put(char, newCount)
    }
    double += if (doubles > 0) 1 else 0
    triple += if (triples > 0) 1 else 0
}

println("doubles: $double, triples: $triple, answer: ${double * triple}")

