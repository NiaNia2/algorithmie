let esp = ''

for (let i = 0; i <= 25; i++) {

    for (j = 1; j <= i; j++) {
        esp += j + ' ';
    }
    console.log(esp);
    esp = ''
}
