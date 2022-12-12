const targetElement = document.getElementById('target');
const buttonElement = document.getElementById('button');
let userBet = document.getElementById('user-bet');
let  cpuBet = document.getElementById('cpu-bet');
let winner = document.getElementById('winner')


buttonElement.addEventListener('click', function(){

    let randomNumberUser = Math.floor(Math.random() * 6) + 1;
    userBet.innerText = 'Numero :' + randomNumberUser;
    console.log(randomNumberUser);

    let randomNumberCpu = Math.floor(Math.random() * 6) + 1;
    cpuBet.innerText = 'Numero :' + randomNumberCpu;
    console.log(randomNumberCpu);


    let winner = '';

    if (randomNumberUser === randomNumberCpu){
        winner = 'Pareggio!';
    } 

    else if (randomNumberUser > randomNumberCpu){
        winner = 'Hai vinto User!';
    }
    
    else if (randomNumberUser < randomNumberCpu){
        winner = 'Hai vinto CPU!';
    }

    

    console.log(winner);
})


winner.innerText += 'winner';
