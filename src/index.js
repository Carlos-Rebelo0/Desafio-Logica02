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

let saldoVitorias = saldo
let nivel = nivelHeroi

console.log('O Herói tem de saldo de '+ saldoVitorias + " está no nível de " + nivel)