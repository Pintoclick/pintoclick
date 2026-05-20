// Pintoclick Product Database Array
const products = [
    {
        id: "tiktok-viral-find-01",
        title: "Viral Transparent Mechanical Keyboard",
        description: "The sleek, crystal-clear aesthetic mechanical keyboard taking over TikTok desk setups. Features customized RGB backlighting and silent linear switches.",
        price: "49.99",
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop",
        link: "https://vt.tiktok.com/ZS9YSyBuHdu9e-Kl2ns/",
        category: "Tech & Gadgets"
    },
    {
        id: "smart-desk-mat-02",
        title: "Minimalist Felt Desk Pad",
        description: "Premium anti-slip office desk mat that instantly anchors your workspace while protecting your surface and improving mouse tracking.",
        price: "24.50",
        image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=600&auto=format&fit=crop",
        link: "#",
        category: "Tech & Gadgets"
    },
    {
        id: "ergonomic-lumbar-03",
        title: "Therapeutic Lumbar Alignment Cushion",
        description: "High-density memory foam support engineered for office chairs to maximize posture comfort during long hours at the desk.",
        price: "34.99",
        image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=600&auto=format&fit=crop",
        link: "#",
        category: "Health & Fitness"
    },
    {
        id: "aesthetic-tumbler-04",
        title: "Matte Insulated Travel Tumbler",
        description: "Double-wall stainless steel flask keeping your office coffee piping hot or your water ice-cold all day long.",
        price: "19.95",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop",
        link: "#",
        category: "Home & Kitchen"
    }
];

// Automatically render cards into the grid when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("product-grid");
    
    if (productGrid) {
        // Clear any old placeholders
        productGrid.innerHTML = "";
        
        // Loop through array and build the light theme card layouts
        products.forEach(product => {
            const card = document.createElement("div");
            card.setAttribute("data-item-category", product.category);
            
            card.innerHTML = `
                <div class="relative group h-full flex flex-col justify-between p-4">
                    <div>
                        <!-- Image Container -->
                        <div class="w-full h-48 rounded-xl bg-slate-100 overflow-hidden mb-4 relative border border-slate-100">
                            <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <span class="absolute top-2 right-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 rounded-md shadow-sm">
                                ${product.category}
                            </span>
                        </div>
                        <!-- Product Info -->
                        <h3 class="font-bold text-slate-900 text-base mb-1 tracking-tight line-clamp-1">${product.title}</h3>
                        <p class="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">${product.description}</p>
                    </div>
                    <!-- Action Row -->
                    <div class="flex items-center justify-between pt-2 border-t border-slate-50 mt-auto">
                        <span class="text-base font-extrabold text-slate-900">$${product.price}</span>
                        <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-sm">
                            View Drop
                        </a>
                    </div>
                </div>
            `;
            
            productGrid.appendChild(card);
        });
    }
});
