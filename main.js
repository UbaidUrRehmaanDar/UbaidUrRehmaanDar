
document.addEventListener('DOMContentLoaded', function() {

    const funBtn = document.getElementById('funButton');
    if(funBtn) {
        funBtn.addEventListener('click', function() {
            const messages = [
                "You're awesome! ",
                "Keep learning, keep building!",
                "Hello from Obaid's Portfolio!",
                "Stay curious. ",
                "Hope you have a great day!"
            ];
            const result = document.getElementById('funResult');
            result.textContent = messages[Math.floor(Math.random()*messages.length)];
        });
    }

    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e){
            e.preventDefault();
            document.getElementById('contactSuccess').style.display = 'block';
            contactForm.reset();
        });
    }
});