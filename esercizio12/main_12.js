// - Crea una piccola calcolatrice con le 4 operazioni di base:
//     - due campi input per far inserire all’utente i numeri.
//     - un campo select (oppure un altro modo) che permetta di selezionare il tipo di operazione
//     - un pulsante che permetta di far eseguire l’operazione

// Al click sul bottone far apparire il risultato a schermo e svuotare i due campi input

// EXTRA Al click sul tasto per ottenere il risultato svuotare gli input e inserire nel primo input il valore del risultato in modo tale da far continuare all’utente i calcoli

let num1= document.querySelector('#num1');
let num2= document.querySelector('#num2');
let petSelect= document.querySelector('#pet-select');
let calcola= document.querySelector('#calcola');
let total=document.querySelector('#total')

function addizioni (valore1,valore2) {
    let sommatoria= Number(valore1) + Number(valore2) ;
    return sommatoria;
    // console.log(sommatoria);
}
function sottrazioni (valore1,valore2) {
    let sottrazione= Number(valore1) - Number(valore2);
    return sottrazione;
}
function moltiplicazioni (valore1,valore2) {
    let moltiplicazione= Number(valore1) * Number(valore2);
    return moltiplicazione;
}
function divisioni (valore1,valore2) {
    let divisione= Number(valore1) / Number(valore2);
    return divisione;
}

 calcola.addEventListener('click',()=>{
    
     if(petSelect.value== 'dog'){
        total.value=  addizioni(num1.value,num2.value) ;
        num1.value = '';
        num2.value= '';
        num1.value= Number(total.value);
     }else if ( petSelect.value=='cat'){
        total.value= sottrazioni(num1.value,num2.value);
        num1.value = '';
        num2.value= '';
        num1.value= Number(total.value);
     } else if (petSelect.value=='hamster'){
        total.value = moltiplicazioni(num1.value,num2.value);
        num1.value = '';
        num2.value= '';
        num1.value= Number(total.value);
     }else if (petSelect.value=='parrot'){
        total.value=divisioni(num1.value,num2.value);
        num1.value = '';
        num2.value= '';
        num1.value= Number(total.value);
     } 
})