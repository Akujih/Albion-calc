const frm = document.querySelector("form")
const resulttable = document.querySelector("#result_table")
//pego do form as respostas e exporta as saidas na tabela

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('inPremium');
    const premiumIcon = document.getElementById('premiumicone');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            premiumIcon.classList.add('nofilter'); // Adiciona a classe quando marcado
        } else {
            premiumIcon.classList.remove('nofilter'); // Remove a classe quando desmarcado
        }
    });
});

frm.addEventListener("submit" , (e)=>{
    e.preventDefault()
    
//pegar valores de entrada 
    const Qtde = Number(frm.inQtde.value)
    const Name_item = frm.inName_item.value
    const Valor_item = Number(frm.inValor_item.value)
    const Rune_item = Number(frm.inRune_item.value)
    const Valor_rune = Number(frm.inValor_rune.value)
    const Valor_plus = Number(frm.inValor_plus.value)
    const Premium = frm.inPremium.checked


//calculos

const c_qtde = (Qtde*Rune_item)
const c_totalrune = (Valor_rune*c_qtde)
const c_total = ((Qtde*Valor_item)+c_totalrune)
let c_lucro //verificador se tem premium ou não
if(Premium == true){
    c_lucro = (((Valor_plus*Qtde)*0.925)-c_total) //com premium
    premiumIcon.classList.add("nofilter")
}else{
    c_lucro = (((Valor_plus*Qtde)*0.895)-c_total) //sem premium
    premiumIcon.classList.remove("nofilter")
}


//cria uma nova linha 
const new_line = document.createElement("tr")

//adiciona celulas a tabela
const qtdecell = document.createElement("td")
qtdecell.innerText = Qtde
//quantidade
const namecell = document.createElement("td")
namecell.innerText = Name_item
//nome do item
const valoritemcell = document.createElement("td")
valoritemcell.innerText = Valor_item
//valor pago
const runeitemcell = document.createElement("td")
runeitemcell.innerText = Rune_item
//runa por item
const valorRuneCell = document.createElement("td")
valorRuneCell.innerText = Valor_rune
//valor das runas
const qtdeRuneCell = document.createElement("td")
qtdeRuneCell.innerText = c_qtde
//quantidade de runas
const totalrunecell = document.createElement("td")
totalrunecell.innerText = c_totalrune
//valor total das runas
const valorTotalCell = document.createElement("td")
valorTotalCell.innerText = c_total
//valor total
const valorpluscell = document.createElement("td")
valorpluscell.innerText = Valor_plus

//valor do item aprimorado
const lucroCell = document.createElement("td")
lucroCell.innerText = c_lucro
//lucro

//adiciona novas linhas
new_line.appendChild(qtdecell)
new_line.appendChild(namecell)
new_line.appendChild(valoritemcell)
new_line.appendChild(runeitemcell)
new_line.appendChild(valorRuneCell)
new_line.appendChild(qtdeRuneCell)
new_line.appendChild(totalrunecell)
new_line.appendChild(valorTotalCell)
new_line.appendChild(valorpluscell)
new_line.appendChild(lucroCell)

// Adicionar a nova linha à tabela
resulttable.appendChild(new_line)

// Limpar o formulário para novos dados
frm.reset()

})