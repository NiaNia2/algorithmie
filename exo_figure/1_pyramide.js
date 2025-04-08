let esp = ' '

for (let i = 0; i <= 10; i++) {

    for (j = 0; j <= i; j++) {
        esp += '⬛';
    }
    console.log(esp);
    esp = '⬛'
}