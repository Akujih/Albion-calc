const frm = document.querySelector("form")
const resulttable = document.querySelector("#result_table")

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
    
}else{
    c_lucro = (((Valor_plus*Qtde)*0.895)-c_total) //sem premium

}


//cria uma nova linha 
const new_line = document.createElement("tr")

const cells = [
    Qtde,
    Name_item,
    Valor_item,
    Rune_item,
    Valor_rune,
    c_qtde,
    c_totalrune,
    c_total,
    Valor_plus,
    c_lucro
];

//adiciona novas linhas
cells.forEach(cellValue => {
    const cell = document.createElement("td");
    cell.innerText = cellValue;
    new_line.appendChild(cell);
});

// Adicionar a nova linha à tabela
resulttable.appendChild(new_line)

// Limpar o formulário para novos dados
frm.reset()

})