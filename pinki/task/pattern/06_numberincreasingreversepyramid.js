let n = 5;
let string = '';
for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n - i; j++){
        string += j;
    }
    string += '\n';
}
console.log(string);
// 1234
// 123
// 12
// 1