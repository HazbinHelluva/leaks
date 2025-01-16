// Массив со сливами
const items = [
    {
        title: "Episode 2 - Scene 1",
        description: "Scene from Episode 2.",
        tags: ["Episode 2", "Video"],
        media: "https://www.pexels.com/video/video-of-forest-854982/",
        download: "leaks/test.jpg"
    },
    {
        title: "Episode 4 - Photo 1",
        description: "Photo from Episode 4.",
        tags: ["Episode 4", "Photo"],
        media: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
        download: "https://images.pexels.com/photos/15286/pexels-photo.jpg"
    },
    {
        title: "Episode 4 - Photo 1",
        description: "Photo from Episode 4.",
        tags: ["Episode 4", "Photo"],
        media: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
        download: "https://images.pexels.com/photos/15286/pexels-photo.jpg"
    },
    {
        title: "Episode 4 - Photo 1",
        description: "Photo from Episode 4.",
        tags: ["Episode 4", "Photo"],
        media: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
        download: "https://images.pexels.com/photos/15286/pexels-photo.jpg"
    },
    {
        title: "Episode 4 - Photo 1",
        description: "Photo from Episode 4.",
        tags: ["Episode 4", "Photo"],
        media: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
        download: "https://images.pexels.com/photos/15286/pexels-photo.jpg"
    }
];

// Отображение элементов в галерее
function renderItems(itemsToRender) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    itemsToRender.forEach(item => {
        const div = document.createElement('div');
        div.className = 'col-md-4';
        const card = document.createElement('div');
        card.className = 'card item';
        if (item.tags.includes("Video")) {
            const video = document.createElement('video');
            video.src = item.media;
            video.controls = true;
            video.className = 'card-img-top';
            card.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = item.media;
            img.alt = item.title;
            img.className = 'card-img-top';
            card.appendChild(img);
        }
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const h2 = document.createElement('h5');
        h2.className = 'card-title';
        h2.textContent = item.title;
        cardBody.appendChild(h2);
        const p = document.createElement('p');
        p.className = 'card-text';
        p.textContent = item.description;
        cardBody.appendChild(p);
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'tags';
        item.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag ' + tag.replace(/\s+/g, '-');
            span.textContent = tag;
            tagsDiv.appendChild(span);
        });
        cardBody.appendChild(tagsDiv);
        const a = document.createElement('a');
        a.href = `${item.download}`;
        a.download = `${item.title}${item.tags.includes("Video") ? ".mp4" : ".jpg"}`;
        a.className = 'btn btn-download';
        const icon = document.createElement('i');
        icon.className = 'fas fa-download me-2';
        a.appendChild(icon);
        a.appendChild(document.createTextNode('Download'));
        cardBody.appendChild(a);
        card.appendChild(cardBody);
        div.appendChild(card);
        gallery.appendChild(div);
    });
}

// Функция фильтра и поиска
function filterItems() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filters = Array.from(document.querySelectorAll('.filter:checked')).map(filter => filter.value);
    let filteredItems = items;
    if (searchInput) {
        filteredItems = filteredItems.filter(item => item.title.toLowerCase().includes(searchInput));
    }
    if (filters.length > 0) {
        filteredItems = filteredItems.filter(item => 
            filters.every(tag => item.tags.includes(tag))
        );
    }
    renderItems(filteredItems);
}

document.getElementById('search-input').addEventListener('input', filterItems);
document.querySelectorAll('.filter').forEach(filter => 
    filter.addEventListener('change', filterItems)
);

// Светлая и темная тема
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});

renderItems(items);