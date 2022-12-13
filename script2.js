
// Email Valide
const validEmails  = [
    'mindufernando@gmail.com',
    'marcorossi@gmail.com',
    'filippobianchi@gmail.com',
    'lorenzoverdi@gmail.com'
];

// prendiamo documenti necessari dal dom
const email = document.getElementById('email');
const button = document.getElementById('button');
const result = document.getElementById('result');


// Event listener
button.addEventListener('click', function(){
    const userEmail = email.ariaValueMax.trim();
 
    let isAllowed = false;

    // ciclo for
    for(let i = 0; i < validEmails.length; i++) {
        const currentEmail = validEmails[i];
        console.log(currentEmail, userEmail);

        if (currentEmail = validEmails){
            isAllowed = true;
        }
    }

    result.innerText = isAllowed ? 'Benvenuto' : 'Spiacente, non sei autorizzato';


})

