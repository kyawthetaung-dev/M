// var n = 6;
// var arr = [];
// for (let index = 0; index < n; index++) {
//     arr.push(n - index);
// }
// var result = 1;
// arr.forEach((a) => {
//     result = a * result
// })
// console.log(result)
var ala = 'abcdefghijklmnopqrstuvwxyz'.split('');
var text = "gdhm rnd".split('');

var result = '';
text.forEach((l) => {
    var s = ala.findIndex(rank => rank === l)
    result = `${result}${s == -1 ? ' ' : ala[s + 1]}`;
})
console.log(result)