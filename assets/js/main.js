document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');
    
    // 1. Product Rendering Logic
    function renderProducts() {
        grid.innerHTML = ''; 
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] flex flex-col h-full relative';
            card.innerHTML = `
                <div class="relative h-64 overflow-hidden">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-white mb-2">${product.title}</h3>
                    <p class="text-slate-400 text-sm mb-6 flex-grow">${product.hook}</p>
                    <a href="${product.affiliateLink}" target="_blank" class="w-full bg-white/5 hover:bg-purple-600 border border-white/10 text-white text-center py-3 rounded-xl font-medium transition-all">
                        Check Deal
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    renderProducts();

    // 2. Trivia Logic
    refreshTrivia();
});

const triviaFacts = [
    "The first product ever sold on Amazon was a book called 'Fluid Concepts and Creative Analogies'.",
    "TikTok's algorithm prioritizes watch time over follower count.",
    "Sunscreen is the #1 anti-aging product recommended by dermatologists globally.",
    "Desk setup aesthetics became a massive viral trend in 2020."
];

function refreshTrivia() {
    const triviaText = document.getElementById('trivia-text');
    if (triviaText) {
        const randomIndex = Math.floor(Math.random() * triviaFacts.length);
        triviaText.textContent = triviaFacts[randomIndex];
    }
}
