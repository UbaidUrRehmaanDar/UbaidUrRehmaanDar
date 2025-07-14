
document.addEventListener('DOMContentLoaded', function() {

    const funBtn = document.getElementById('funButton');
    if(funBtn) {
        funBtn.addEventListener('click', function() {
            const messages = [
                "🚀 Ready to build the future with code!",
                "💡 Innovation starts with curiosity!",
                "🌟 Every line of code is a step forward!",
                "🎯 Learning React Native next - mobile here I come!",
                "🔥 MERN stack developer in the making!",
                "✨ Creativity meets technology!",
                "🏆 Internship opportunity? Let's connect!",
                "🌈 Making the web more beautiful, one project at a time!"
            ];
            const result = document.getElementById('funResult');
            result.textContent = messages[Math.floor(Math.random()*messages.length)];
            
            // Add a fun animation
            result.style.transform = 'scale(1.1)';
            result.style.transition = 'transform 0.2s ease';
            setTimeout(() => {
                result.style.transform = 'scale(1)';
            }, 200);
        });
    }

    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e){
            e.preventDefault();
            const successMsg = document.getElementById('contactSuccess');
            successMsg.style.display = 'block';
            contactForm.reset();
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        });
    }
});