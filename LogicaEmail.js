// Importa a função EnviaEmail
const enviarEmail = require('./EnviaEmail');
const {assuntoDoEmail, corpoDoEmail} = require('./CorpoEmail');



// Array com lista de endereço de e-mail de clientes.
const listaDeEmails = [
    { email: "cliente1@email.com", status: true },
    { email: "cliente2@email.com", status: true },
    { email: "cliente3@email.com", status: false },
    { email: "cliente4@email.com", status: true }
];


// Função para verificar o dia da semana. Se segunda -> enviar email.
function verificarDiaDaSemana() {
    const date = new Date();
    return date.getDay() === 1; // 1 representa segunda-feira
}


// Função para definir os destinatários.
const addressee = destinatariosDoEmail();
function destinatariosDoEmail() {
    const validEmails = [];
    for (const i of listaDeEmails) {
        if (i.status === true) {
            validEmails.push(i.email);
        }
    }    
    return validEmails;
}



// Verifique se é segunda-feira para enviar o e-mail:
if (verificarDiaDaSemana()) {
    const addressee = destinatariosDoEmail();

    const body = corpoDoEmail();
    const subject = assuntoDoEmail();

    // Envie email para cada destinatário
    for (const addressees of addressee) {
        try {
            const resultadoEnvio = enviarEmail(addressee, subject, body);
            console.log(resultadoEnvio.message); // Exiba o resultado do envio    
        } catch (error) {
            console.error("Erro ao enviar email para", addressee, error.message); // Exiba a mensagem de er
        }
        
    }
} else {
    console.log("Aguarde até a próxima segunda para receber novidades da CarStore!");
}
