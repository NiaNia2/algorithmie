let result = ''

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++)
        if (i % 2 == 0) {
            result += '⬛' + '⬜'
        } else {
            result += '⬜' + '⬛'
        }
    result += "\n"
}

console.log(result);
