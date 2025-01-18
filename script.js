// Массив со сливами
const items = [
    {
        title: {
            en: "Lilith's Garden - Episode 2",
            ru: "Сад Лилит - отрывок из 2 серии" 
        },
        description: {
            en: "Lilith sits in her garden and receives a message, then leaves. This is a scene from episode 2",
            ru: "Лилит сидит в своем саду и получает сообщение, после чего уходит. Это сцена из 2 серии"
        },
        tags: ["Episode 2", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/animatics/LilithsGarden.mp4"
    },
    {
        title: {
            en: "Lute and Sera's argument after the Pentious court case",
            ru: "Ссора Лют и Серы после суда над Пентиусом" 
        },
        description: {
            en: "It was decided at the court that Sir Pentious remains in heaven. Lute disagrees with this decision",
            ru: "На суде было принято решение, что Сэр Пентиус остается в раю. Лют не согласна с этим решением"
        },
        tags: ["Episode 2", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/animatics/LuteAndSera1.mp4"
    },
    {
        title: {
            en: "The Pentious court scene, Speaker of God and Abel appearance",
            ru: "Сцена суда над Пентиусом, появление Говорящей Бога и Авеля" 
        },
        description: {
            en: "The angels are trying to figure out how Pentious got into heaven. Lute wants action. The Speaker of God and Abel appear here for the first time",
            ru: "Ангелы пытаются понять, как Пентиус попал в рай. Лют хочет действий. Впервые здесь появляется Говорящая Бога и Авель"
        },
        tags: ["Episode 2", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/animatics/LuteAndSera2.mp4"
    },
    {
        title: {
            en: "Pentious backstory",
            ru: "Предыстория Пентиуса" 
        },
        description: {
            en: "Пентиус рассказывает Говорящей Бога свою историю. Мы узнаем про его человечкую жизнь, за что он попал в ад и как он искупился",
            ru: "Pentious tells his story to the Speaker of God. We learn about his human life, why he went to hell and how he was redeemed"
        },
        tags: ["Episode 2", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/animatics/SirPentiousBackstory.mp4"
    },
    {
        title: {
            en: "The scene after court with Emily, Pentious, Sera and Lute",
            ru: "Сцена после суда с Эмили, Пентиусом, Серой и Лют" 
        },
        description: {
            en: "Emily is going to show Pentious heaven, while Lute tries to convince Sera to change her mind, mentioning that she told Lilith to stop her daughter",
            ru: "Эмили собирается показать Пентиусу рай, в то время как Лют пытается убедить Серу изменить решение, упоминая, что сказала Лилит остановить дочь"
        },
        tags: ["Episode 2", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/animatics/SirPentiousEmilyLuteSera.mp4"
    },
    {
        title: {
            en: "Pentious misses his friends",
            ru: "Пентиус скучает по друзьям" 
        },
        description: {
            en: "",
            ru: ""
        },
        tags: ["Episode 2", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/animatics/SirPentiousMissesFriends.mp4"
    },
    {
        title: {
            en: "",
            ru: "" 
        },
        description: {
            en: "",
            ru: ""
        },
        tags: ["Episode 2", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/animatics/SirPentiousOnCourt.mp4"
    },
    {
        title: {
            en: "",
            ru: "" 
        },
        description: {
            en: "",
            ru: ""
        },
        tags: ["Episode 2", "Episode 4", "Episode 6", "Full episode", "Song", "Photo", "Video", "Ref sheet", "BG", "Russian subs", "English subs",
            "Hazbin Hotel", "Helluva Boss", "Fake", "Obsolete", "Other"
        ],
        media: "leaks/ep2/animatics/.mp4"
    },
    {
        title: {
            en: "",
            ru: "" 
        },
        description: {
            en: "",
            ru: ""
        },
        tags: ["Episode 2", "Episode 4", "Episode 6", "Full episode", "Song", "Photo", "Video", "Ref sheet", "BG", "Russian subs", "English subs",
            "Hazbin Hotel", "Helluva Boss", "Fake", "Obsolete", "Other"
        ],
        media: "leaks/ep2/animatics/.mp4"
    },
    {
        title: {
            en: "",
            ru: "" 
        },
        description: {
            en: "",
            ru: ""
        },
        tags: ["Episode 2", "Episode 4", "Episode 6", "Full episode", "Song", "Photo", "Video", "Ref sheet", "BG", "Russian subs", "English subs",
            "Hazbin Hotel", "Helluva Boss", "Fake", "Obsolete", "Other"
        ],
        media: "leaks/ep2/animatics/.mp4"
    },
    {
        title: {
            en: "",
            ru: "" 
        },
        description: {
            en: "",
            ru: ""
        },
        tags: ["Episode 2", "Episode 4", "Episode 6", "Full episode", "Song", "Photo", "Video", "Ref sheet", "BG", "Russian subs", "English subs",
            "Hazbin Hotel", "Helluva Boss", "Fake", "Obsolete", "Other"
        ],
        media: "leaks/ep2/animatics/.mp4"
    }
];

// Язык, по умолчанию англ
let currentLanguage = localStorage.getItem('language') || 'en';

// Отображение элементов в галерее
function renderItems(itemsToRender) {
    const gallery = document.getElementById('gallery');
    let resultCount = document.getElementById('result-count')
    gallery.innerHTML = '';
    resultCount.textContent = '';
    resultCount.textContent = `${currentLanguage === 'en' ? 'Items found:' : 'Найдено элементов:'} ${itemsToRender.length}`;

    itemsToRender.forEach(item => {
        const div = document.createElement('div');
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
            img.alt = item.title[currentLanguage];
            img.className = 'card-img-top';
            card.appendChild(img);
        }
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const h2 = document.createElement('h5');
        h2.className = 'card-title';
        h2.textContent = item.title[currentLanguage];
        cardBody.appendChild(h2);
        const p = document.createElement('p');
        p.className = 'card-text';
        p.textContent = item.description[currentLanguage];
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
        a.href = `${item.media}`;
        a.download = `${item.title[currentLanguage]}${item.tags.includes("Video") ? ".mp4" : ".jpg"}`;
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
        filteredItems = filteredItems.filter(item => 
            item.title[currentLanguage].toLowerCase().includes(searchInput) ||
            item.description[currentLanguage].toLowerCase().includes(searchInput)
        );
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

// Функция для установки колонок
function setColumns(count) {
    document.documentElement.style.setProperty('--columns-count', count);
    localStorage.setItem('galleryColumns', count);
}

// Загрузка сохраненного значению, по умолчанию 3
document.addEventListener('DOMContentLoaded', function () {
    const savedColumns = localStorage.getItem('galleryColumns') || "3";
    document.getElementById('columns-select').value = savedColumns;
    setColumns(savedColumns);
});

document.getElementById('columns-select').addEventListener('change', function() {
    setColumns(this.value);
});

// Массив с заголовками на двух языках
const titles = {
    en: {
        header: "Hazbin and Helluva leaks web archive",
        telegram: "My telegram channel",
        project: "Project GitHub",
        contact: "Contact me",
        filters: "Filters",
        episodeNumber: "Episode number",
        typeOfLeak: "Type of leak",
        subtitles: "Subtitles",
        show: "Show",
        other: "Other",
        searchPlaceholder: "Search by title...",
        perRow: "per row",
        languageToggle: "RUS"
    },
    ru: {
        header: "Архив сливов Отеля Хазбин и Адского Босса",
        telegram: "Мой телеграм канал",
        project: "GitHub проекта",
        contact: "Связаться со мной",
        filters: "Фильтры",
        episodeNumber: "Номер эпизода",
        typeOfLeak: "Тип слива",
        subtitles: "Субтитры",
        show: "Шоу",
        other: "Другое",
        searchPlaceholder: "Поиск по названию...",
        perRow: "в ряд",
        languageToggle: "ENG"
    }
};

// Функция смены языка
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    const t = titles[lang];

    document.getElementById('header-title').textContent = t.header;
    document.getElementById('telegram-link').textContent = t.telegram;
    document.getElementById('project-link').textContent = t.project;
    document.getElementById('contact-link').textContent = t.contact;
    document.getElementById('filters-title').textContent = t.filters;
    document.getElementById('episode-number-title').textContent = t.episodeNumber;
    document.getElementById('type-of-leak-title').textContent = t.typeOfLeak;
    document.getElementById('subtitles-title').textContent = t.subtitles;
    document.getElementById('show-title').textContent = t.show;
    document.getElementById('other-title').textContent = t.other;
    document.getElementById('search-input').placeholder = t.searchPlaceholder;
    document.getElementById('language-toggle').textContent = t.languageToggle;
    
    const select = document.getElementById('columns-select');
    select.options[0].text = `1 ${t.perRow}`;
    select.options[1].text = `2 ${t.perRow}`;
    select.options[2].text = `3 ${t.perRow}`;
}

// Загрузка сохраненного языка
document.addEventListener('DOMContentLoaded', function () {
    const savedLanguage = localStorage.getItem('language') || "en";
    document.getElementById('language-toggle').textContent = titles[savedLanguage].languageToggle;
    setLanguage(savedLanguage);
});

// Переключение языка
document.getElementById('language-toggle').addEventListener('click', () => {
    const newLang = localStorage.getItem('language') === "en" ? "ru" : "en";
    setLanguage(newLang);
    renderItems(items);
    location.reload();
});

renderItems(items);