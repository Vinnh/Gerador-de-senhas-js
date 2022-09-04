var senha = document.getElementById('senha')

function genSenha() {
    var chars =
        '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^*-_ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    var senhaLength = 12
    var senha = ''

    for (var i = 0; i < senhaLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length)
        senha += chars.substring(randomNumber, randomNumber + 1)
    }

    document.getElementById('senha').value = senha

}

function copSenha() {
    var copTexto = document.getElementById('senha')
    copTexto.select()
    copTexto.setSelectionRange(0, 999)
    document.execCommand('copy')
}
