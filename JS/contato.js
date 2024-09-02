function validarCampos() {
    var nome = document.getElementById("campo_nome").value;
    var email = document.getElementById("campo_email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome == "") {
        alert("O Campo nome está vazio!")
    } else if (email == "") {
        alert("O Campo email está vazio!")
    } else if (mensagem == "") {
        alert("O Campo mensagem está vazio!")
    } else {
        alert("Enviado Com Sucesso!")
    }









}








