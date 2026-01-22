document.addEventListener("DOMContentLoaded", () => {
    
    // 1. LOGIQUE DU MODE SOMBRE & ICÔNES
    const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    toggleBtn.innerHTML = (savedTheme === 'light') ? moonIcon : sunIcon;

    toggleBtn.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = (current === 'light') ? 'dark' : 'light';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        toggleBtn.innerHTML = (next === 'light') ? moonIcon : sunIcon;
    });

    // 2. CHARGEMENT DES ARTICLES
    const listContainer = document.getElementById('articles-list');
    
    fetch('articles.json')
        .then(res => res.json())
        .then(articles => {
            listContainer.innerHTML = '';
            articles.forEach(article => {
                let imgHTML = article.image ? `<img src="img/${article.image}" class="img-couverture">` : '';
                
                let galleryHTML = '';
                if (article.gallery && article.gallery.length > 0) {
                    galleryHTML = '<div class="row g-3 mt-4">';
                    article.gallery.forEach(img => {
                        galleryHTML += `<div class="col-4"><img src="img/${img}" class="thumb-gallery" onclick="window.open(this.src)"></div>`;
                    });
                    galleryHTML += '</div>';
                }

                let fileHTML = article.file ? `<a href="files/${article.file}" target="_blank" class="download-link">📂 Voir le document PDF</a>` : '';

                listContainer.innerHTML += `
                    <article class="card">
                        ${imgHTML}
                        <div class="card-body">
                            <span style="color:var(--primary); font-weight:700; font-size:0.85rem; letter-spacing:1px;">// ${article.date}</span>
                            <h2 class="card-title">${article.title}</h2>
                            <div class="article-content">${article.content}</div>
                            ${galleryHTML}
                            ${fileHTML}
                        </div>
                    </article>`;
            });
        })
        .catch(err => {
            listContainer.innerHTML = '<p class="text-center p-5">Erreur lors du chargement des articles.</p>';
        });
});