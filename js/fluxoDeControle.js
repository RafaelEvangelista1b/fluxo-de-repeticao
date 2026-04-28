const menu = 1;

switch (menu) {
    case 1: 
        console.log("Exercício 1 selecionando. Executando...");
        ex1();
        break;

    case 2: 
    console.log("Exercício 2 selecionado. Executando...\n");
    ex2();
    break;

    case 3:
    console.log("Exercício 3 selecionado. Executando...\n");
    ex3();
    break;

    case 4:
    console.log("Exercício 4 selecionado. Executando...\n");
    ex4();
    break;

    case 5:
    console.log("Exercício 5 selecionado. Executando...\n");
    ex5();
    break;

    case 6:
    console.log("Exercício 6 selecionado. Executando...\n");
    ex6();
    break;

    case 7:
    console.log("Exercício 7 selecionado. Executando...\n");
    ex7();
    break;

    case 8:
    console.log("Exercício 8 selecionado. Executando...\n");
    ex8();
    break;

    case 9:
    console.log("Exercício 9 selecionado. Executando...\n");
    ex9();
    break;

    case 10:
    console.log("Exercício 10 selecionado. Executando...\n");
    ex10();
    break;

    case 11:
    console.log("Exercício 11 selecionado. Executando...\n");
    ex11();
    break;

    case 12:
    console.log("Exercício 12 selecionado. Executando...\n");
    ex12();
    break;

    case 13:
    console.log("Exercício 13 selecionado. Executando...\n");
    ex13();
    break;

    case 14:
    console.log("Exercício 14 selecionado. Executando...\n");
    ex14();
    break;

    case 15:
    console.log("Exercício 15 selecionado. Executando...\n");
    ex15();
    break;

    case 16:
    console.log("Exercício 16 selecionado. Executando...\n");
    ex16();
    break;

    case 17:
    console.log("Exercício 17 selecionado. Executando...\n");
    ex17();
    break;

    case 18:
    console.log("Exercício 18 selecionado. Executando...\n");
    ex18();
    break;

    case 19:
    console.log("Exercício 19 selecionado. Executando...\n");
    ex19();
    break;

    case 20:
    console.log("Exercício 20 selecionado. Executando...\n");
    ex20();
    break;
}

function ex1(){
    const num = 2;
    const positivo = num > 0
    ? "Positivo"
    : "Negativo";

    console.log(positivo)
}


function ex2(){
    const num = 2;
    const par = num % 2 == 0
    ? "Par"
    : "Ímpar";

    console.log(par)
}

function ex3(){
    const turno = "M";
    if(turno === "M") {
        console.log("Bom dia");
    } else if (turno === "T") {
        console.log("Boa tarde")
    } else if (turno === "N") {
        console.log("Boa noite")
    } else {
        console.log("Inválido");
    }
   
}

function ex4(){
    const num1 = 1;
    const num2 = 6;
    if (num1 > num2){
        console.log(num1)
    } else {
        console.log(num2);
    }
}

function ex5(){
    const num = 2;
    const positivo = num > 0
    ? "Positivo"
    : "Negativo";

    console.log(positivo)
}

function ex6(){
    const opcoes = 1;
    switch(opcoes){
        case 1:
        console.log("Ínicio");
        break;

        case 2:
        console.log("Sobre");
        break;

        case 3:
        console.log("Sair");
        break;

    }
}

function ex7(){
    let i =  1;
    while (i <= 5) {
        console.log(i);
        i++
    }
}

function ex8(){
    let i = 5;
    do {
        console.log(i);
        i--
    }while (i >= 1)
}

function ex9(){
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}

function ex10(){
    let soma = 0;
    for(let i =1; i<=10;i++){
        soma += i;
    }
    console.log(soma);
}

function ex11(){
    const array = ["sol", "lua", "estrela"];

    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

function ex12(){
    const array = ["Morango", "Melancia", "Kiwi"];
    for (let fruit of frutas){
        console.log(`fruta: ${fruit}`);
    }
}

function ex13(){
    const usuario = {
        nome:"Rafael",
        idade: 17,
        curso: "Desenvolvimento de Sistemas"
    };

    for(let chave in usuario){
        console.log(`${chave}: ${usuario}`);
    }
}

function ex14(){
    for(let i = 1; i<=10; i++){
        if(i == 6) break;
        console.log(i);
    }
}

function ex15(){
    for(let i =1; i<=10;i++){
        if(i === 7) continue;
        console.log(i);
    }
}

function ex16(){
    const nota = 8;
     if(nota < 6)
        console.log("Reprovado");
    else if(nota < 8)
        console.log("Recuperação")
    else
        console.log("Aprovado");
}

function ex17(){
    const numero = 2;

    for(let i = 1;i<=10;i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

function ex18(){
    const arr = [1, "a", 2, true, 3, 4, 5];
    let count = 0;
    for (let v of arr) {
        if (typeof v === "number") count++;
    }
    console.log(count);
}

function ex19 (){
    const palavra = "socos";

    const reserva = palavra.split("").reverse().join("");

    if (palavra === reversa) {
        console.log("Palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

