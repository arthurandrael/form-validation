const usuario = document.querySelector('#usuario')
const senha = document.querySelector('#senha')




function enviar() {
  const user = usuario.value.trim()
  const password = senha.value.trim()
  
  
  var span1 = document.querySelector('#span1')
  var span2 = document.querySelector('#span2')


  
  if(user.length === 0) {
    span1.innerHTML = 'Este campo não pode estar vazio.*'
  }
  if(password.length === 0) {
    span2.innerHTML = 'Este campo não pode estar vazio.*'
  }
  else {
    span1.innerHTML = ''
    span2.innerHTML = ''
    
    
    if(password === user) {
    span2.innerHTML = 'A senha não deve ser igual ao usuario.*'
    }
    if(password.length < 8) {
      span2.innerHTML = 'Senha deve ter pelo menos 8 caracteres.*'
    }
  }

}
