function enviarDados(){
    
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];


    function enviarForm(evento){
        evento.preventDefault();
    

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            altura: altura.value
        })
        
        resultado.innerHTML += `
        <br >
        <p><strong>Nome:</strong> ${nome.value}</p>
        <p><strong>Sobrenome:</strong> ${sobrenome.value}</p>
        <p><strong>Idade:</strong> ${idade.value}</p>
        <p><strong>Altura:</strong> ${altura.value}cm</p>
        <br >
        `
        
        
        console.log(pessoas);
    }   

    form.addEventListener('submit', enviarForm)

}

enviarDados();  