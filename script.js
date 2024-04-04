
function countWords(str) {
    return str.trim().split(/\s+/).filter((item) => item).length;
}


function countCharacters(str) {
    return str.length;
}


function countSentences(str) {
    return str.match(/[.!?]+/g) ? str.match(/[.!?]+/g).length : 0;
}


function countParagraphs(str) {
    return str.match(/\n\s*\n/g) ? str.match(/\n\s*\n/g).length + 1 : 1;
}


function countSpaces(str) {
    return str.match(/\s/g) ? str.match(/\s/g).length : 0;
}


function updateCounts(str) {
    document.getElementById("word-count").textContent = countWords(str);
    document.getElementById("charac-count").textContent = countCharacters(str);
    document.getElementById("sentence-count").textContent = countSentences(str);
    document.getElementById("paragraph-count").textContent = countParagraphs(str);
    document.getElementById("space-count").textContent = countSpaces(str);
}


document.getElementById("input-textarea").addEventListener("input", function() {
    let inputText = this.value;
    updateCounts(inputText);
});
