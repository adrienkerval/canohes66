const ADMIN_PASSWORD = "admin";
let articlesData = [];

var quill = new Quill('#editor', {
    theme: 'snow',
    modules: { toolbar: [['bold', 'italic'], [{ 'header': 1 }, { 'header': 2 }], ['link', 'clean']] }
});

async function loadArticles() {
    try {
        const res = await fetch('articles.json');
        if (res.ok) articlesData = await res.json();
    } catch (e) { articlesData = []; }
    renderList();
}
loadArticles();

function checkLogin() {
    if (document.getElementById('password-input').value === ADMIN_PASSWORD) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
    } else { alert("Mot de passe incorrect"); }
}

function renderList() {
    const list = document.getElementById('admin-list');
    list.innerHTML = articlesData.map((a, i) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span><b>${a.title}</b> <small>(${a.date})</small></span>
            <button onclick="deleteArticle(${i})" class="btn btn-danger btn-sm">Supprimer</button>
        </li>`).join('');
}

function addArticle() {
    const title = document.getElementById('article-title').value;
    const gallery = document.getElementById('article-gallery').value;
    if(!title) return alert("Le titre est obligatoire");

    articlesData.push({
        id: Date.now(),
        title: title,
        image: document.getElementById('article-image').value,
        file: document.getElementById('article-file').value,
        gallery: gallery ? gallery.split(',').map(s => s.trim()).filter(s => s !== "") : [],
        content: quill.root.innerHTML,
        date: new Date().toLocaleDateString('fr-FR')
    });

    renderList();
    alert("Article ajouté à la liste locale ! Cliquez sur SAUVEGARDER pour générer le fichier.");
}

function deleteArticle(i) {
    if(confirm("Supprimer cet article ?")) {
        articlesData.splice(i, 1);
        renderList();
    }
}

function downloadJSON() {
    const blob = new Blob([JSON.stringify(articlesData, null, 2)], { type: "application/json" });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = "articles.json";
    a.click();
}