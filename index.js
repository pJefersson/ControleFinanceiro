
function verificar() {
  var input = document.getElementById("email")
  var inputSenha = document.getElementById("senha")
  if (!input.value) {
    inputSenha.style.display = "none"
    document.getElementById('entrar').style.display = "none"
    document.getElementById('senhaLabel').style.display = "none"
  } else {
    inputSenha.style.display = 'flex'
    document.getElementById('senhaLabel').style.display = "flex"
    document.getElementById('entrar').style.display = "block"
    console.log(inputSenha)
  }
}
verificar()

