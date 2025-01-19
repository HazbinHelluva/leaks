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
        media: "leaks/ep2/animatics/LilithsGarden.mp4",
        preview: "preview/LilithsGarden.jpg"
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
        media: "leaks/ep2/animatics/LuteAndSera1.mp4",
        preview: "preview/LuteAndSera1.jpg"
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
        media: "leaks/ep2/animatics/LuteAndSera2.mp4",
        preview: "preview/LuteAndSera2.jpg"
    },
    {
        title: {
            en: "Pentious backstory",
            ru: "Предыстория Пентиуса" 
        },
        description: {
            en: "Pentious tells his story to the Speaker of God. We learn about his human life, why he went to hell and how he was redeemed",
            ru: "Пентиус рассказывает Говорящей Бога свою историю. Мы узнаем про его человечкую жизнь, за что он попал в ад и как он искупился"
        },
        tags: ["Episode 2", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/animatics/SirPentiousBackstory.mp4",
        preview: "preview/SirPentiousBackstory.jpg"
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
        media: "leaks/ep2/animatics/SirPentiousEmilyLuteSera.mp4",
        preview: "preview/SirPentiousEmilyLuteSera.jpg"
    },
    {
        title: {
            en: "Pentious misses his friends",
            ru: "Пентиус скучает по друзьям" 
        },
        description: {
            en: "End of episode 2. Pentious realises he can't return to his friends and cries. The picture on the wall has been drawn by Emily and she has also created angel eggs, but Pentious wants to see his friends in person",
            ru: "Конец 2 эпизода. Пентиус понимает, что не сможет вернуться к друзьям и плачет. Рисунок на стене нарисовала Эмили и также создала ангельских яиц, но Пентиус хочет увидеться с друзьями вживую"
        },
        tags: ["Episode 2", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/animatics/SirPentiousMissesFriends.mp4",
        preview: "preview/SirPentiousMissesFriends.jpg"
    },
    {
        title: {
            en: "Pentius in court",
            ru: "Пентиус в суде" 
        },
        description: {
            en: "A 10 minute clip from the beginning of episode 2. In it, the angels try to figure out how Pentious got into heaven. Sera changes her mind and believes in redemption, as does everyone else. Lute disagrees and doesn't believe Pentious. It shows his backstory and 2 new characters (Abel and Speaker of God)",
            ru: "10 минутный отрывок из начала 2 эпизода. В нем ангелы пытаются понять как Пентиус попал в рай. Сера меняет свою точку зрения и верит в искупление, как и все остальные. Лют не согласна и не верит Пентиусу. Здесь показана его предыстория и 2 новых персонажа (Авель и Говорящая Бога)"
        },
        tags: ["Episode 2", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/animatics/SirPentiousOnCourt.mp4",
        preview: "preview/SirPentiousOnCourt.jpg"
    },
    {
        title: {
            en: "Like Gravity - Lute and Adam's song",
            ru: "Like Gravity - песня Лют и Адама" 
        },
        description: {
            en: "In this song, Adam appears as Lute's hallucination. Lute sings about her intention to revenge Adam's death",
            ru: "В этой песне Адам появляется как галюцинация Лют. Лют поет о своем намерении отомстить за смерть Адама"
        },
        tags: ["Episode 2", "Song", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/songs/Gravity.mp4",
        preview: "preview/Gravity.jpg"
    },
    {
        title: {
            en: "Demo version of Like Gravity song",
            ru: "Демо версия песни Like Gravity" 
        },
        description: {
            en: "The lyrics and voices are exactly the same, but the processing is different. Only half of the song is in the demo version",
            ru: "Текст песни и голоса точно такой же, но обработка другая. В демо версии только половина песни"
        },
        tags: ["Episode 2", "Song", "Video",, "Hazbin Hotel", "Other"],
        media: "leaks/ep2/songs/GravityDemo.mp4",
        preview: "preview/GravityDemo.jpg"
    },
    {
        title: {
            en: "Emily, Abel, Pentius and St Peter's Song in heaven",
            ru: "Песня Эмили, Авеля, Пентиуса и Святого Петра в раю" 
        },
        description: {
            en: "Emily shows Pentious heaven and what there is to do here. Abel and St Peter join the song. Pentious sings about wanting to go back to hell to his friends",
            ru: "Эмили показывает Пентиусу рай и чем тут можно заняться. К песне подключаются Авель и Святой Петр. Пентиус поет о том, что хочет вернуться обратно в ад к своим друзьям"
        },
        tags: ["Episode 2", "Song", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/songs/HeavenSong.mp4",
        preview: "preview/HeavenSong.jpg"
    },
    {
        title: {
            en: "Emily, Abel, Pentius and St Peter's Song in heaven with English subtitles",
            ru: "Песня Эмили, Авеля, Пентиуса и Святого Петра в раю с английскими субтитрами" 
        },
        description: {
            en: "The subtitles are made by me, each character has a different subtitle colour",
            ru: "Субтитры сделаны мной, у каждого персонажа свой цвет субтитров"
        },
        tags: ["Episode 2", "Song", "Video", "English subs", "Hazbin Hotel"],
        media: "leaks/ep2/songs/heaven en @hazbinleak.mp4",
        preview: "preview/heaven en @hazbinleak.jpg"
    },
    {
        title: {
            en: "Emily, Abel, Pentius and St Peter's Song in heaven with Russian subtitles",
            ru: "Песня Эмили, Авеля, Пентиуса и Святого Петра в раю с русскими субтитрами" 
        },
        description: {
            en: "The subtitles are made by me, each character has a different subtitle colour",
            ru: "Субтитры сделаны мной, у каждого персонажа свой цвет субтитров"
        },
        tags: ["Episode 2", "Song", "Video", "Russian subs", "Hazbin Hotel"],
        media: "leaks/ep2/songs/heaven rus @hazbinleak.mp4",
        preview: "preview/heaven rus @hazbinleak.jpg"
    },
    {
        title: {
            en: "Like Gravity - Lute and Adam's song with English subtitles",
            ru: "Like Gravity - песня Лют и Адама с английскими субтитрами" 
        },
        description: {
            en: "The subtitles are made by me, each character has a different subtitle colour",
            ru: "Субтитры сделаны мной, у каждого персонажа свой цвет субтитров"
        },
        tags: ["Episode 2", "Song", "Video", "English subs", "Hazbin Hotel"],
        media: "leaks/ep2/songs/lute en @hazbinleak.mp4",
        preview: "preview/lute en @hazbinleak.jpg"
    },
    {
        title: {
            en: "Like Gravity - Lute and Adam's song with Russian subtitles",
            ru: "Like Gravity - песня Лют и Адама с русскими субтитрами" 
        },
        description: {
            en: "The subtitles are made by me, each character has a different subtitle colour",
            ru: "Субтитры сделаны мной, у каждого персонажа свой цвет субтитров"
        },
        tags: ["Episode 2", "Song", "Video", "Russian subs", "Hazbin Hotel"],
        media: "leaks/ep2/songs/lute rus @hazbinleak.mp4",
        preview: "preview/lute rus @hazbinleak.jpg"
    },
    {
        title: {
            en: "Sera and Speaker of God song",
            ru: "Песня Серы и Говорящей Бога" 
        },
        description: {
            en: "Sera realised she was wrong about redemption and regretted allowing the exterminations to happen. She wants to make things right, but doesn't know how",
            ru: "Сера поняла, что ошибалась насчет искупления и жалеет о том, что допустила истребления. Она хочет все исправить, но не знает как"
        },
        tags: ["Episode 2", "Song", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/songs/Sera and Speaker of God Song.mp4",
        preview: "preview/Sera and Speaker of God Song.jpg"
    },
    {
        title: {
            en: "Sera and Speaker of God song with English subtitles",
            ru: "Песня Серы и Говорящей Бога с английскими субтитрами" 
        },
        description: {
            en: "The subtitles are made by me, each character has a different subtitle colour",
            ru: "Субтитры сделаны мной, у каждого персонажа свой цвет субтитров"
        },
        tags: ["Episode 2", "Song", "Video", "English subs", "Hazbin Hotel"],
        media: "leaks/ep2/songs/sera en @hazbinleak.mp4",
        preview: "preview/sera en @hazbinleak.jpg"
    },
    {
        title: {
            en: "Sera and Speaker of God song with Russian subtitles",
            ru: "Песня Серы и Говорящей Бога с русскими субтитрами" 
        },
        description: {
            en: "The subtitles are made by me, each character has a different subtitle colour",
            ru: "Субтитры сделаны мной, у каждого персонажа свой цвет субтитров"
        },
        tags: ["Episode 2", "Song", "Video", "Russian subs", "Hazbin Hotel"],
        media: "leaks/ep2/songs/sera rus @hazbinleak.mp4",
        preview: "preview/sera rus @hazbinleak.jpg"
    },
    {
        title: {
            en: "Episode 2 - Storyteller",
            ru: "Эпизод 2 - Storyteller (Рассказчик)" 
        },
        description: {
            en: 'The full 25 minute episode. Watermark removed by Ryth1m from half of the episode. All events occur in Heaven. The title "Storyteller" is confirmed',
            ru: 'Полный 25 минутный эпизод. Водяной знак удален Ryth1m с половины эпизода. Все события происходят в Раю. Название "Storyteller" подтверждено'
        },
        tags: ["Episode 2", "Full episode", "Video", "Hazbin Hotel"],
        media: "leaks/ep2/full2Ep.mp4",
        preview: "preview/full2Ep.jpg"
    },
    {
        title: {
            en: "Episode 2 - Storyteller with Russian subtitles",
            ru: "Эпизод 2 - Storyteller (Рассказчик) с русскими субтитрами" 
        },
        description: {
            en: "Full 25 minute episode with Russian subtitles. Unfortunately I couldn't find the author, this video was sent to my telegram chat, but it was forwarded, moreover from a user with a closed profile",
            ru: "Полный 25 минутный эпизод с русскими субтитрами. К сожалению, я не смогла найти автора, это видео отправили в мой телеграм чат, но оно было переслано, к тому же от пользователя с закрытым профилем"
        },
        tags: ["Episode 2", "Full episode", "Video", "Russian subs", "Hazbin Hotel"],
        media: "leaks/ep2/ep2rus.mp4",
        preview: "preview/ep2rus.jpg"
    },
    {
        title: {
            en: "Alastor's backstory",
            ru: "Предыстория Аластора" 
        },
        description: {
            en: "We see Alastor's human life and his death. It is also shown how he met Rosie and the essence of their deal is revealed, but not completely",
            ru: "Мы видим человеческую жизнь Аластора и его смерть. Также показано, как он познакомился с Рози и раскрывается суть их сделки, но не полностью"
        },
        tags: ["Episode 4", "Video", "Hazbin Hotel"],
        media: "leaks/ep4/animatics/alastor backstory.mp4",
        preview: "preview/alastor backstory.jpg"
    },
    {
        title: {
            en: "Charlie is preparing to speak on the news",
            ru: "Чарли готовится выступать в новостях" 
        },
        description: {
            en: "Charlie prepares for speaking on 666 News again. Niffty encourages her and shows the word cards",
            ru: "Чарли готовится снова выступать на 666 News. Ниффти поддерживает ее и показывает карточки с текстом"
        },
        tags: ["Episode 4", "Video", "Hazbin Hotel"],
        media: "leaks/ep4/animatics/charlie in news.mp4",
        preview: "preview/charlie in news.jpg"
    },
    {
        title: {
            en: "The beginning scene of episode 4",
            ru: "Начальная сцена 4 эпизода" 
        },
        description: {
            en: "A short clip from the beginning of episode 4 without the watermark",
            ru: "Короткий отрывок из начала 4 эпизода без водяного знака"
        },
        tags: ["Episode 4", "Video", "Hazbin Hotel", "Other"],
        media: "leaks/ep4/animatics/start.mp4",
        preview: "preview/start.jpg"
    },
    {
        title: {
            en: "You are my pet - Alastor and Rosie's song",
            ru: "You are my pet - Песня Аластора и Рози" 
        },
        description: {
            en: `Rosie reminds Alastor that his soul belongs to her and we learn that it was at her behest that he disappeared for 7 years. Alastor asks Rosie to fix the staff, but she says she will do it in "due time". The song looks cut off, but that's all there is`,
            ru: 'Рози напоминает Аластору о том, что его душа принадлежит ей и мы узнаем, что он пропал на 7 лет именно по ее приказу. Аластор просит Рози починить посох, но она говорит что сделает это в "свое время". Песня выглядит обрезанной, но это все что есть'
        },
        tags: ["Episode 4", "Song", "Video", "Hazbin Hotel"],
        media: "leaks/ep4/songs/YouAreMyPet.mp4",
        preview: "preview/YouAreMyPet.jpg"
    },
    {
        title: {
            en: "You are my pet - Alastor and Rosie's song with English subtitles",
            ru: "You are my pet - Песня Аластора и Рози с английскими субтитрами" 
        },
        description: {
            en: "The subtitles are made by me, each character has a different subtitle colour",
            ru: "Субтитры сделаны мной, у каждого персонажа свой цвет субтитров"
        },
        tags: ["Episode 4", "Song", "Video", "English subs", "Hazbin Hotel"],
        media: "leaks/ep4/songs/rosie en sub @hazbinleak.mp4",
        preview: "preview/rosie en sub @hazbinleak.jpg"
    },
    {
        title: {
            en: "You are my pet - Alastor and Rosie's song with Russian subtitles",
            ru: "You are my pet - Песня Аластора и Рози с русскими субтитрами" 
        },
        description: {
            en: "The subtitles are made by me, each character has a different subtitle colour",
            ru: "Субтитры сделаны мной, у каждого персонажа свой цвет субтитров"
        },
        tags: ["Episode 4", "Song", "Video", "Russian subs", "Hazbin Hotel"],
        media: "leaks/ep4/songs/rosie rus sub @hazbinleak.mp4",
        preview: "preview/rosie rus sub @hazbinleak.jpg"
    },
    {
        title: {
            en: "Episode 4 - It's a Deal",
            ru: "Эпизод 4 - It's a Deal (Договорились)" 
        },
        description: {
            en: `It's not actually a full episode, just the first 10 minutes. But it's the biggest leaked snippet of this episode, so I decided to mark it as full so it doesn't get lost among the other snippets. The title "It's a Deal" is confirmed.`,
            ru: `На самом деле это не полный эпизод, а только первые 10 минут. Но это самый большой слитый отрывок этой серии, и я решила отметить его как полный, чтобы он не затерялся среди других отрывков. Название "It's a Deal" подтверждено`
        },
        tags: ["Episode 4", "Full episode", "Video", "Hazbin Hotel"],
        media: "leaks/ep4/full4.mp4",
        preview: "preview/full4.jpg"
    },
    {
        title: {
            en: "Episode 4 - It's a Deal with Russian subtitles",
            ru: "Эпизод 4 - It's a Deal (Договорились) с русскими субтитрами" 
        },
        description: {
            en: "The subtitles are made by me and I also added my channel watermark over the leaker's watermark. Where there was no watermark, I didn't add one",
            ru: "Субтитры сделаны мной и я также добавила водяной знак своего канала поверх водяного знака сливщика. Где водяного знака не было, я не добавляла"
        },
        tags: ["Episode 4", "Full episode", "Video", "Russian subs", "Hazbin Hotel"],
        media: "leaks/ep4/full 4 with subtitles @hazbinleak.mp4",
        preview: "preview/full 4 with subtitles @hazbinleak.jpg"
    },
    {
        title: {
            en: "Beginning of Episode 6 - Weapon of Mass Distraction",
            ru: "Начало 6 эпизода - Weapon of Mass Distraction (Оружие массового отвлечения)" 
        },
        description: {
            en: 'This 15 second snippet from the beginning of the episode is all we have on episode 6. All the other clips are fake. The title "Weapon of Mass Distraction" is confirmed.',
            ru: 'Этот 15 секундный отрывок из начала эпизода - все что у нас есть по 6 эпизоду. Все остальные отрывки фейк. Название "Weapon of Mass Distraction" подтверждено'
        },
        tags: ["Episode 6", "Video", "Hazbin Hotel"],
        media: "leaks/ep6/episode6vox.mp4",
        preview: "preview/episode6vox.jpg"
    },
    {
        title: {
            en: "Beginning of Episode 6 - Weapon of Mass Distraction with English subtitles",
            ru: "Начало 6 эпизода - Weapon of Mass Distraction (Оружие массового отвлечения) с английскими субтитрами" 
        },
        description: {
            en: "Subtitles made by me. Also this episode was leaked in 3 excerpts and the second one was unofficially coloured (unfortunately I don't know by whom) and I used the coloured version",
            ru: "Субтитры сделаны мной. Также этот эпизод был слит в 3 отрывках и второй был неофициально раскрашен (к сожалению не знаю кем), и я использовала раскрашенный вариант"
        },
        tags: ["Episode 6", "Video", "English subs", "Hazbin Hotel"],
        media: "leaks/ep6/ep6 en sub @hazbinleak.mp4",
        preview: "preview/ep6 en sub @hazbinleak.jpg"
    },
    {
        title: {
            en: "Beginning of Episode 6 - Weapon of Mass Distraction with Russian subtitles",
            ru: "Начало 6 эпизода - Weapon of Mass Distraction (Оружие массового отвлечения) с русскими субтитрами" 
        },
        description: {
            en: "Subtitles made by me. Also this episode was leaked in 3 excerpts and the second one was unofficially coloured (unfortunately I don't know by whom) and I used the coloured version",
            ru: "Субтитры сделаны мной. Также этот эпизод был слит в 3 отрывках и второй был неофициально раскрашен (к сожалению не знаю кем), и я использовала раскрашенный вариант"
        },
        tags: ["Episode 6", "Video", "Russian subs", "Hazbin Hotel"],
        media: "leaks/ep6/ep6 rus sub @hazbinleak.mp4",
        preview: "preview/ep6 rus sub @hazbinleak.jpg"
    },
    {
        title: {
            en: "Fan coloured excerpt from episode 6",
            ru: "Раскрашенный фанатом отрывок из 6 серии" 
        },
        description: {
            en: "Unfortunately I don't know the author, but perhaps the watermark on the extract is his. Subtitles by me",
            ru: "К сожалению не знаю автора, но возможно водяной знак на отрывке его. Субтитры мои"
        },
        tags: ["Episode 6", "Video", "English subs", "Hazbin Hotel", "Other"],
        media: "leaks/ep6/FanColored.mp4",
        preview: "preview/FanColored.jpg"
    },
    {
        title: {
            en: "FAKE | Blitz and Andrealphus' deal in season 3 of Helluva Boss",
            ru: "ФЕЙК | Сделка Блица и Андреальфуса в 3 сезоне Адского Босса" 
        },
        description: {
            en: "The video is spread in tiktok, the bottom of which is covered with a caption. In this section, the author of the animatics (https://www.youtube.com/@GatsbyBlueArt) wrote that they are fan made",
            ru: "Видео распространяется в тиктоке, нижняя часть которого закрыта надписью. В этой части автор аниматиков (https://www.youtube.com/@GatsbyBlueArt) писал, что они фанатские"
        },
        tags: ["Video", "Helluva Boss", "Fake"],
        media: "leaks/Fake/BlitzAndAndre.mp4",
        preview: "preview/BlitzAndAndre.jpg"
    },
    {
        title: {
            en: "FAKE | Octavia and Stella's new outfits and Goetia's party in season 3 of Helluva Boss",
            ru: "ФЕЙК | Новые наряды Октавии и Стеллы и вечеринка Гоетии в 3 сезоне Адского Босса" 
        },
        description: {
            en: "The video is spread in tiktok, the bottom of which is covered with a caption. In this section, the author of the animatics (https://www.youtube.com/@GatsbyBlueArt) wrote that they are fan made",
            ru: "Видео распространяется в тиктоке, нижняя часть которого закрыта надписью. В этой части автор аниматиков (https://www.youtube.com/@GatsbyBlueArt) писал, что они фанатские"
        },
        tags: ["Video", "Helluva Boss", "Fake"],
        media: "leaks/Fake/Octavia.mp4",
        preview: "preview/Octavia.jpg"
    },
    {
        title: {
            en: "FAKE | Striker's song in season 3 of Helluva Boss",
            ru: "ФЕЙК | Песня Страйкера в 3 сезоне Адского Босса" 
        },
        description: {
            en: "The video is spread in tiktok, the bottom of which is covered with a caption. In this section, the author of the animatics (https://www.youtube.com/@GatsbyBlueArt) wrote that they are fan made",
            ru: "Видео распространяется в тиктоке, нижняя часть которого закрыта надписью. В этой части автор аниматиков (https://www.youtube.com/@GatsbyBlueArt) писал, что они фанатские"
        },
        tags: ["Song", "Video", "Helluva Boss", "Fake"],
        media: "leaks/Fake/StrikerSong.mp4",
        preview: "preview/StrikerSong.jpg"
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
        media: "leaks/ep4/songs/.mp4",
        preview: "preview/.jpg"
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
        media: "leaks/ep4/songs/.mp4",
        preview: "preview/.jpg"
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
            const videoContainer = document.createElement('div');
            videoContainer.className = 'video-container';

            // Загружаем превью-картинку вместо видео
            const preview = document.createElement('img');
            preview.src = item.preview;
            preview.className = 'video-preview';
            preview.alt = 'Video preview';

            const playButton = document.createElement('i');
            playButton.className = 'fas fa-play play-btn';

            const stopButton = document.createElement('i');
            stopButton.className = 'fas fa-stop stop-btn hidden';

            // Контейнер для видео
            const video = document.createElement('video');
            video.className = 'card-img-top';
            video.setAttribute('controls', '');
            video.dataset.src = item.media;

            // При клике загружаем видео и начинаем воспроизведение
            videoContainer.addEventListener('click', function () {
                video.src = item.media;
                video.play();
                preview.remove();
                playButton.remove();
                
                const stopButton = document.createElement('button');
                stopButton.className = 'stop-btn';
                stopButton.innerHTML = '<i class="fas fa-stop"></i> Stop';
                
                stopButton.addEventListener('click', function (event) {
                    event.stopPropagation(); // Чтобы не кликалось на видео
                    video.pause();
                    video.src = '';
                    videoContainer.innerHTML = '';
                    videoContainer.appendChild(preview);
                    videoContainer.appendChild(playButton);
                });
            
                videoContainer.appendChild(stopButton);
                videoContainer.appendChild(video);
            });
            

            // Остановка видео и возврат к превью
            stopButton.addEventListener('click', function (event) {
                event.stopPropagation(); // Не запускаем видео заново
                video.pause();
                video.src = ''; // Очищаем src, чтобы не грузить видео
                video.remove();
                videoContainer.appendChild(preview);
                playButton.classList.remove('hidden');
                stopButton.classList.add('hidden');
            });

            videoContainer.appendChild(preview);
            videoContainer.appendChild(playButton);
            videoContainer.appendChild(stopButton);
            card.appendChild(videoContainer);
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

    // Устанавливаем высоту элемента в зависимости от количества колонок
    let height;
    switch (count) {
        case "1":
            height = "350px";
            break;
        case "2":
            height = "250px";
            break;
        case "3":
            height = "200px";
            break;
        default:
            height = "200px";
    }
    document.documentElement.style.setProperty('--item-height', height);
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