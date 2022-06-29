function sortString(word){
    word = word.split("")
    word.sort()
    return word.join("")
}
var a = "webmaster"
console.log(sortString(a))
