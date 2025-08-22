function insta()
{
     window.open("https://www.instagram.com/yakolooool?igsh=MTlxN2hoNXdqdDlxNQ==", "_blank");
}

function yout()
{
     window.open("https://youtube.com/@yako.mp3?si=gMitpGYOClnWkKpV", "_blank");
}

function spot()
{
     window.open("https://open.spotify.com/artist/4k9wW7jawT299RXCDI7Yfd?si=u7q_YhYGRqGEsU9ooLEmgA", "_blank");
}

function sobre()
{
const t1 = "🎵 Sobre mim";

const sobreMim = ``;

Swal.fire({
title: t1,
text: sobreMim,
});
}

function mudarImagemDeFundo() {
    const body = document.body;
    const switchBtn = document.getElementById("trocar-fundo");

    if (switchBtn.checked) {
        body.style.backgroundImage = "url('/imagens/bg-desktop-light.jpg')";
        body.classList.add("modo-claro");
    } else {
        body.style.backgroundImage = "url('/imagens/bg-desktop.jpg')";
        body.classList.remove("modo-claro");
    }
}
