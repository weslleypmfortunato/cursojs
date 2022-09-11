function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let formAno = document.getElementById('txtano')
  let res = document.getElementById('res')
  if (formAno.value.length == 0 || formAno.value > ano) {
    window.alert('[ERRO] Verifique os dados inputados!')
  } else {
    let formSex = document.getElementsByName('radsex')
    let idade = ano - Number(formAno.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (formSex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10){
        // bebe
        img.setAttribute('src', 'foto-bebe-m.png')
      } else if (idade < 21) {
        // jovem
        img.setAttribute('src', 'foto-jovem-m.png')
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', 'foto-adulto-m.png')
      } else {
        // idoso
        img.setAttribute('src', 'foto-idoso-m.png')
      }
    } else if (formSex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10){
        // bebe
        img.setAttribute('src', 'foto-bebe-f.png')
      } else if (idade < 21) {
        // jovem
        img.setAttribute('src', 'foto-jovem-f.png')
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', 'foto-adulto-f.png')
      } else {
        // idoso
        img.setAttribute('src', 'foto-idoso-f.png')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}