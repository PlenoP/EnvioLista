function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}


function EditarEnvio(){
    criar_textbox.readOnly = false
}
function SalvarEnvio(){
    criar_textbox.readOnly = true
    console.log(criar_textbox.readOnly)
}
function BotaoSalvar(){
    const botao_salvar = document.createElement('button')
    botao_salvar.classList.add("btn", "btn-success")
    botao_salvar.type = "button"
    botao_salvar.innerHTML = "Salvar"
    botao_salvar.addEventListener("click", SalvarEnvio() )
    return botao_salvar
}

function BotaoEdit(){
    const botao_edit = document.createElement('button')
    botao_edit.classList.add("btn", "btn-warning")
    botao_edit.type = "button"
    botao_edit.innerHTML = "  Editar  "
    botao_edit.addEventListener("click", EditarEnvio )
    return botao_edit
}

function BotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Deletar"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);
    return botao_delete
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')
    criar_textbox = document.createElement('input')
    criar_textbox.type = 'text'
    criar_textbox.readOnly = true
//////////////////////////////////////////////////
    novo_item_lista = document.createElement("li")
    lista.appendChild(novo_item_lista)
    criar_textbox.value = valor.value
//////////////////////////////////////////////////
    novo_item_lista.appendChild(criar_textbox)
    novo_item_lista.appendChild(BotaoEdit())
    novo_item_lista.appendChild(BotaoSalvar())
    novo_item_lista.appendChild(BotaoDelete())
//////////////////////////////////////////////////
    document.getElementById("item").value = ""
}
