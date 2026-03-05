const motivos = [
"Seu sorriso.",
"O jeito que você me abraça.",
"As nossas conversas.",
"Porque você me faz rir (MUITO).",
"Porque você é meu lugar favorito.",
"Porque você é a melhor parte dos meus dias.",
"Sua personalidade apaixonante.",
"O jeito que você me olha.",
"Os seus belíssimos olhos me hipnotizam.",
"A sua dicção (ou falta dela).",
"Amo como a sua franja combina com o seu sorriso.",
"Amo suas lindas e desenhadas costas.",
"Adoro a sua presença.",
"Porque você me faz querer ser melhor.",
"Porque você é única.",
"Porque você é a história que eu mais gosto de viver.",
"Porque sua felicidade importa muito pra mim.",
"Porque eu amo te conhecer a cada dia.",
"Porque eu escolheria você de novo, de novo e de novo.",
"Porque você me inspira.",
"Amo as suas aleatoriedades.",
"Amo os nossos silêncios.",
"Porque você me faz sentir coisas que nunca senti.",
"Eu amo o seu jeito único de ser.",
"Não acredito, mozão. Você chegou até o final… mas ainda faltariam milhares de motivos para explicar o quanto eu amo você"
];

const container = document.getElementById("cards");
const finalPopup = document.getElementById("final-popup");
const closePopup = document.getElementById("close-popup");
const heartsContainer = document.getElementById("hearts-container");

const introScreen = document.getElementById("intro-screen");
const startBtn = document.getElementById("start-btn");

// Tela inicial
startBtn.onclick = () => {
    introScreen.style.display = "none";
    initCards();
};

// Criar cards
function initCards() {
    motivos.forEach((motivo, i) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">Motivo ${i+1}</div>
                <div class="card-back">${motivo}</div>
            </div>
        `;

        card.onclick = () => {
            card.classList.toggle("flip");

            // Último card: mostrar popup e corações
            if (i === motivos.length - 1) {
                setTimeout(() => {
                    finalPopup.classList.add("show");
                    createHearts();
                }, 6000);
            }
        };

        container.appendChild(card);
    });
}

// Fechar popup
closePopup.onclick = () => {
    finalPopup.classList.remove("show");
};

// Função para criar corações caindo
function createHearts() {
    for (let i = 0; i < 150; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = 3 + Math.random() * 2 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}