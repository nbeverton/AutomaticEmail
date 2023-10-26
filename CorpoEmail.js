// Função para construir o assunto do e-mail.
function assuntoDoEmail() {
    return "Fique por dentro das últimas novidades da CarStore!";
}
const subject = assuntoDoEmail();

// Função para construir o corpo do e-mail.
function corpoDoEmail() {
    return `
    Na CarStore, é hora de iniciar a semana com emoção automobilística! 
    
    Seu interesse em nossa loja no último mês nos encheu de alegria, e agora queremos compartilhar 
    as últimas novidades com você. Descubra os veículos mais cobiçados e os best-sellers do momento, 
    tudo com condições de aquisição que farão seu coração acelerar. 
    
    Não perca a chance de dar uma olhada e transformar seu trajeto diário em uma experiência CarStore. 
    Aguardamos ansiosamente sua visita!

    Com entusiasmo,
    A Equipe CarStore
    `;
}
const body = corpoDoEmail();

    
module.exports = {
    assuntoDoEmail,
    corpoDoEmail
}