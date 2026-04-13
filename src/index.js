function saldo(winsPlayer,lossPlayer){
    let calc = winsPlayer-lossPlayer
    return calc
}

function nivelHeroi(saldo){

    if (saldo <= 10){
        return 'Ferro'
    }

    else if (saldo >= 11 && saldo <= 20){
        return 'Bronze'
    }

    else if (saldo >= 21 && saldo <= 50){
        return 'Prata'
    }

    else if (saldo >= 51 && saldo <= 80){
        return 'Ouro'
    }

    else if (saldo >= 81 && saldo <= 90){
        return 'Diamante'
    }

    else if (saldo >= 91 && saldo <= 100){
        return 'Lendário'
    }

    else{
        return 'Imortal'
    }

}

let saldoVitorias = saldo(86,7)
let nivel = nivelHeroi(saldoVitorias)

console.log('O Herói tem de saldo de '+ saldoVitorias + " está no nível de " + nivel)

let novoSaldo = saldoVitorias
let missao = "Não"
let contador = 0

while(missao = "SIM" || contador === 3){
    novoSaldo++
    console.log('\nO Herói saiu para uma missão!')
    console.log('O Herói adquiriu mais uma vitória! e está atualmente com ' + novoSaldo)

    contador++
    if(contador >= 3) {
        console.log('\nO herói está cansado e voltou para casa!')

    saldo = novoSaldo
    novoNivel = nivelHeroi(novoSaldo)

    console.log('\nO Herói alcançou o nível ' + novoNivel)
    break;
    }
}