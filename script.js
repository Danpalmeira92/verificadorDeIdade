function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './images/homembebe.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', './images/homemjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './images/homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', './images/homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './images/mulherbebe.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', './images/mulherjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './images/mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', './images/mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}