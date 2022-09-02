console.log('js is ok')


console.log('JS OK');

// Collego button 
const button = document.getElementById('button-griglia');

button.addEventListener('click', function(){
    console.log('mi hai cliccato');
    // collego elemento alla griglia

    const addgrid = document.getElementById('griglia');
    addgrid.innerHTML = '';

    // Creo celle con numero progressivo da 1 a 100
    for (let i = 1; i <= 100; i++) {
        
        const addCellElement = document.createElement('div');  
        
        addCellElement.className = 'cella';

        addCellElement.innerHTML = i; // inserisco numeri creati
        
        griglia.append(addCellElement);

        // genero click su cella

        addCellElement.addEventListener('click', function () {
            console.log('cella click', i)
            
            const cheNumero = pariODispari(i)
            
            if (cheNumero) {
            addCellElement.classList.add ('pari')
            } else {
            addCellElement.classList.add ('dispari')
            }
        })

     
        griglia.append(addCellElement);
    }





})

function pariODispari(numero) {
return numero%2===0
}