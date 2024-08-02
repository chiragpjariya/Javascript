// Create Largest Word Finder prototype
let str = "ajcncnjdn sncjncj   naskjkcnjcjnfcf ancjjcnjec ncn";


String.prototype.LargestWord = function () {
    let strToArray = this.split(" ")
    let strArrayEachElementLengthStore = [];
    let maximumLengthFromElement;
    let largestWord;

    strToArray.forEach((word) => {
        strArrayEachElementLengthStore.push(word.length)
    })

    maximumLengthFromElement = Math.max(...strArrayEachElementLengthStore)

    strToArray.forEach((items) => {
        if (items.length === maximumLengthFromElement) {
            largestWord = items
        }
    })

    return largestWord


}

console.log(str.LargestWord())