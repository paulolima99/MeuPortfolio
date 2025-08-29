document.addEventListener('DOMContentLoaded', function() {

            // --- Lógica para o menu mobile ---
            const mobileBtn = document.getElementById('mobile-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Fecha o menu mobile ao clicar em um link
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });


            // --- Efeito máquina de escrever  para o subtítulo ---
            const subtitle = document.getElementById('subtitle');
            if (subtitle) {
                const texts = ["Desenvolvedor Full-Stack", "Criador de Soluções Web"];
                let textIndex = 0;
                let charIndex = 0;
                let isDeleting = false;

                function typeWriter() {
                    const currentText = texts[textIndex];
                    if (isDeleting) {
                        // Deleta caracteres
                        subtitle.textContent = currentText.substring(0, charIndex - 1);
                        charIndex--;
                    } else {
                        // Adiciona caracteres
                        subtitle.textContent = currentText.substring(0, charIndex + 1);
                        charIndex++;
                    }

                    if (!isDeleting && charIndex === currentText.length) {
                        // Pausa no final da palavra
                        setTimeout(() => isDeleting = true, 2000);
                    } else if (isDeleting && charIndex === 0) {
                        isDeleting = false;
                        textIndex = (textIndex + 1) % texts.length;
                    }
                    
                    const typingSpeed = isDeleting ? 50 : 120;
                    setTimeout(typeWriter, typingSpeed);
                }
                
                typeWriter();
            }

        });

        const voltaraotopo = document.getElementById("voltaraotopo");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
            voltaraotopo.classList.remove("hidden");
            } else {
            voltaraotopo.classList.add("hidden");
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        const botaoTopo = document.getElementById("voltaraotopo");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
            botaoTopo.classList.remove("hidden");
            } else {
            botaoTopo.classList.add("hidden");
            }
        });

        // função para visualizar o certificado na tela 
        function openModal() {
        document.getElementById('modal').classList.remove('hidden');
    }
    function closeModal() {
        document.getElementById('modal').classList.add('hidden');
    }