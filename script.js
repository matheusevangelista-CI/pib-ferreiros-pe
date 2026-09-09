document.getElementById('btnOracao').addEventListener('click', function() {
    // Substitua pelo número real da igreja (com DDD)
    let numeroWhatsapp = "5581992964091"; 
    let mensagem = encodeURIComponent("Olá! Gostaria de deixar um pedido de oração.");
    
    // Abre a conversa diretamente no WhatsApp
    window.open(`https://wa.me/${numeroWhatsapp}?text=${mensagem}`, '_blank');
});