    //Procurar o botao
    document.querySelector("#add-time")
    //Quando clicar no botao
    .addEventListener('click', cloneField)

    //Executar uma acao
    function cloneField() {
        //Duplicar os campos. Que campos?
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)  /* boolean: verdadeiro ou false */

        // pegar os campos. Que campos?
        const fields = newFieldContainer.querySelectorAll('input')
        
        // para cada campo,limpar
       fields.forEach(function(field) {
        // Pegar o field do momento elimpa ele
        field.value = ""
    })
        
        //Colocar na página: Onde?
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }





