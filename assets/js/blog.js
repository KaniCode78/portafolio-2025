//Paginacion 

function toggleText(button) {
    const post = button.parentElement;
    const fullText = post.querySelector('.full-text');
    fullText.classList.toggle('active');
    button.textContent = fullText.classList.contains('active') ? 'Leer menos' : 'Leer más';
}

const postsPerPage = 5;
let currentPage = 1;
const posts = document.querySelectorAll('.post');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showPage(page) {
    posts.forEach((post, index) => {
        post.classList.remove('active');
        if (index >= (page - 1) * postsPerPage && index < page * postsPerPage) {
            post.classList.add('active');
        }
    });
    prevButton.disabled = page === 1;
    nextButton.disabled = page === Math.ceil(posts.length / postsPerPage);
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
        currentPage++;
        showPage(currentPage);
    }
}

showPage(currentPage);

// comparte post

document.querySelectorAll('.share-buttons').forEach(container => {
    const postTitle = container.getAttribute('data-post-title');
    const postUrl = `https://example.com/blog/${encodeURIComponent(postTitle.toLowerCase().replace(/\s+/g, '-'))}`;

    const facebookLink = container.querySelector('.share-facebook');
    facebookLink.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;

    const xLink = container.querySelector('.share-x');
    xLink.href = `https://x.com/intent/post?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(`¡Mira este post increíble: ${postTitle}!`)}`;

    const linkedinLink = container.querySelector('.share-linkedin');
    linkedinLink.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;

    const emailLink = container.querySelector('.share-email');
    emailLink.href = `mailto:?subject=${encodeURIComponent(`Te comparto este post: ${postTitle}`)}&body=${encodeURIComponent(`Mira este post: ${postUrl}`)}`;
});

// dark mode

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateToggleIcon();
}

function updateToggleIcon() {
    const toggleButton = document.querySelector('.theme-toggle i');
    toggleButton.className = document.body.classList.contains('dark-mode') 
        ? 'fas fa-sun' 
        : 'fas fa-moon';
}

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}
updateToggleIcon();