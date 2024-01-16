let botao_calcular = window.document.getElementById('button')
let botao_limpar = window.document.getElementById('button2')
botao_calcular.addEventListener('click',calcular)
botao_limpar.addEventListener('click',limpar)

function calcular(){
    let peso = window.document.getElementById('peso').value
    let altura = window.document.getElementById('altura').value
    let imc = peso / (altura * altura)   
    let diagnostico = ''
   


    if (String(altura).length == 0 || String(peso).length == 0){
        alert('Preencha todos os campos!')
        return
    }else if (String(altura).length > 4 || String(altura).length < 3){
        alert('Preencha o campo altura corretamente!')
        return
    }else if (String(altura).indexOf('.',1) == -1 && String(altura).indexOf(',',1) == -1){
        alert('Preencha o campo altura corretamente!')
        return
    }else if (String(altura).indexOf(',') != 1 && String(altura).indexOf('.') != 1 ){
        alert('Preencha o campo altura corretamente!')
        return
    }
 
    if (imc < 18.5){
        diagnostico = 'Baixo peso'
    }else if ( imc > 18.5 && imc <= 24.9 ){
        diagnostico = 'Normal'
    }else if (imc > 24.9 && imc <= 29.99){
        diagnostico = 'Sobrepeso'
    }else if (imc > 29.99 && imc <= 34.99){
        diagnostico = 'Obesidade[1]'
    }else if (imc > 34.99 && imc <=39.99){
        diagnostico = 'Obesidade[2]'
    }else{
        diagnostico = 'Obesidade[3]'
    }
    document.getElementById('valor_imc').innerHTML = `<strong>Seu IMC: ${imc.toFixed(2)}    ${diagnostico}</strong>`
}



function limpar(){
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
    document.getElementById('valor_imc').innerText = ''
}


