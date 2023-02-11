const mode = document.getElementById('mode_icon')

mode.addEventListener('click', () => {
    const form = document.getElementById('login') //criamos essa variável para pegar o login
    if(mode.classList.contains('fa-moon')){ //está pegando o mode e está vendo se está com a classe 'fa-moon'.
        mode.classList.remove('fa-moon') //se estiver com a classe 'fa-moon' ele vai remover esse icone.
        mode.classList.add('fa-sun') //irá mudar para o icone de sol que está nomeado como 'fa-sun'

        form.classList.add('dark') //quando clicarmos em 'fa-moon' , vai adicionar a classe dark. E com isso , irá modificar o conteúdo do login, input e icones .

        return //como se fosse um else, chegamos no if e viu que teve return, ele não irá avançar. Pois teve a condição.
    } 

    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')
    form.classList.remove('dark') 
    // caso não tenha a condição de cima.. ele vai vir para cá e fazer essa condição.
})

