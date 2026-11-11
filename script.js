document.addEventListener("DOMContentLoaded", function () {

    console.log("Jurassic Nightmare iniciado...");


    /*
    =====================================
    GLITCH ALEATÓRIO
    =====================================
    */

    const glitch =
        document.querySelector(".glitch");

    function ativarGlitch() {

        if (!glitch) return;

        glitch.classList.add("ativo");

        setTimeout(function () {

            glitch.classList.remove("ativo");

        }, 350);
    }

    function glitchAleatorio() {

        const tempo =
            Math.random() * 9000 + 5000;

        setTimeout(function () {

            ativarGlitch();

            glitchAleatorio();

        }, tempo);
    }

    glitchAleatorio();


    /*
    =====================================
    JUMPSCARE
    =====================================
    */

    const jumpscare =
        document.getElementById("jumpscare");

    function ativarSusto() {

        if (!jumpscare) return;

        jumpscare.classList.add("ativo");

        setTimeout(function () {

            jumpscare.classList.remove("ativo");

        }, 900);
    }


    /*
    =====================================
    SUSTO ALEATÓRIO
    =====================================
    */

   function loopSusto() {

    const tempo = Math.random() * 40000 + 20000;

    setTimeout(function () {

        if (Math.random() > 0.5) {
            ativarSusto();
        }

        loopSusto();

    }, tempo);
}

loopSusto();


    /*
    =====================================
    BOTÃO DO TRAILER
    =====================================
    */

    const botao =
        document.getElementById("playTrailer");

    if (botao) {

        botao.addEventListener("click", function () {

            ativarGlitch();
                 window.open("https://youtu.be/lPLb_sZ4DMo", "_blank");
            

        });

    }


    /*
    =====================================
    EFEITO NOS LINKS
    =====================================
    */

    const links =
        document.querySelectorAll("nav a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            ativarGlitch();

        });

    });


    /*
    =====================================
    EFEITO NAS FOTOS
    =====================================
    */

    const fotos =
        document.querySelectorAll(".foto");

    fotos.forEach(function (foto) {

        foto.addEventListener("click", function () {

            ativarGlitch();

            foto.style.filter =
                "brightness(1.5)";

            setTimeout(function () {

                foto.style.filter = "";

            }, 500);

        });

    });

});
function iniciarJogo() {
    window.location.href = "https://midnight-offspring.itch.io/jurassic-nightmare";
}
