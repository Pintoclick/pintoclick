document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Function to render products
    function renderProducts(filter = 'All') {
        grid.innerHTML = ''; // Clear grid
        
        const filteredProducts = filter === 'All' 
            ? products 
            : products.filter(p => p.category === filter);

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/30 flex flex-col h-full relative z-10';
            card.id = product.id;
            // Trending Badge
            const badge = product.isTrending 
                ? `<div class="absolute top-3 right-3 bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded-full border border-red-500/30 backdrop-blur-md z-20">🔥 Trending</div>` 
                : '';

            card.innerHTML = `
                <div class="relative h-64 overflow-hidden">
                    ${badge}
                    <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#090A0F] to-transparent opacity-80"></div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <div class="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-2">${product.category}</div>
                    <h3 class="text-xl font-bold text-white mb-2 leading-tight">${product.title}</h3>
                    <p class="text-slate-400 text-sm mb-6 flex-grow">${product.hook}</p>
                    <a href="${product.affiliateLink}" target="_blank" rel="noopener noreferrer" class="w-full bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-white text-center py-3 rounded-xl font-medium transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                        Check Deal
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Initial Render
    renderProducts();

    // Category Filtering Logic
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active classes
            categoryButtons.forEach(b => {
                b.classList.remove('bg-purple-600', 'text-white', 'border-purple-500');
                b.classList.add('bg-slate-800/50', 'text-slate-300', 'border-white/5');
            });
            
            // Add active class to clicked
            e.target.classList.remove('bg-slate-800/50', 'text-slate-300', 'border-white/5');
            e.target.classList.add('bg-purple-600', 'text-white', 'border-purple-500');

            // Render
            renderProducts(e.target.dataset.category);
        });
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});
// Trivia Logic
const triviaFacts = [
    "The first product ever sold on Amazon was a book called 'Fluid Concepts and Creative Analogies'.",
    "TikTok's algorithm prioritizes watch time over follower count—that's why viral hits can come from anyone!",
    "The most expensive gadget ever made? It's often custom-built tech costing millions.",
    "Sunscreen is the #1 anti-aging product recommended by dermatologists globally.",
    "Desk setup aesthetics became a massive viral trend in 2020 as more people started working from home."
];

function refreshTrivia() {
    const triviaText = document.getElementById('trivia-text');
    if (triviaText) {
        const randomIndex = Math.floor(Math.random() * triviaFacts.length);
        triviaText.textContent = triviaFacts[randomIndex];
    }
}

// Initialize trivia when page loads
document.addEventListener('DOMContentLoaded', refreshTrivia);
