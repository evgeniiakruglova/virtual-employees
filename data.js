const SKILLS = [
  {
    id: "hormozi-offer",
    name: "Ассистент по офферам",
    description: "Офферы в стиле Алекса Хормози на $100M",
    detail: "Ваш персональный стратег по офферам, обученный на полной книге <strong>$100M Offers</strong> Алекса Хормози.<br><br>Анализирует ваш продукт, находит голодный рынок с покупательной способностью, формулирует <strong>уравнение ценности</strong> по 4 факторам: результат мечты, вероятность достижения, скорость и усилия клиента.<br><br>Генерирует полный пакет усилителей: дефицит, срочность, бонусы, гарантии. Создаёт цепляющие названия по формуле <strong>M-A-G-I-C</strong>. Включает 5 разделов методологии, примеры офферов для разных ниш и готовый шаблон продающей страницы.<br><br>Один такой оффер может изменить экономику всего бизнеса.",
    category: "product",
    categoryLabel: "Продукт",
    stream: "Вводный урок",
    type: "claude-project",
    instruction: {
      file: "instructions/hormozi-instruction.txt",
      label: "Инструкция для Claude Project"
    },
    materials: [
      { label: "Инструкция (настройка проекта)", type: "file", file: "instructions/hormozi-instruction.txt" },
      { label: "Полная методология $100M Offers (5 разделов)", type: "file", file: "instructions/hormozi-methodology.txt" },
      { label: "Всё в одном файле (инструкция + методология)", type: "file", file: "instructions/hormozi-offer.txt" }
    ],
    skillDownload: {
      label: "Hormozi Offer Skill",
      url: "https://github.com/yasikvlad/hormozi-offer"
    }
  },
  {
    id: "client-dna",
    name: "ДНК клиента",
    description: "Глубокий анализ целевой аудитории и болей",
    detail: "Лучший в мире специалист по глубинным исследованиям ЦА с опытом 50 лет. Авторская методология <strong>Влада Ясько</strong>, обкатанная на 220+ проектах и 3500+ студентах.<br><br>Проводит анализ из <strong>5 частей</strong>:<br>1. Идентичность, ценности и мировоззрение ЦА<br>2. Боли, страхи и триггеры к решению<br>3. Барьеры, прошлый опыт и почему клиент застрял<br>4. Магическая трансформация и ожидания рынка<br>5. Триггеры, точки принятия решений и механики влияния<br><br>Владеет языком клиента на уровне подсознания — знает все когнитивные искажения, скрытые мотивы, эмоциональные триггеры к покупке. После анализа вы будете знать о своём клиенте больше, чем он сам о себе.",
    category: "audience",
    categoryLabel: "Аудитория",
    stream: "Вводный урок",
    type: "claude-project",
    instruction: {
      file: "instructions/client-dna-role.txt",
      label: "Промпт для Claude (основная роль)"
    },
    materials: [
      { label: "Основная роль (системный промпт)", type: "file", file: "instructions/client-dna-role.txt" },
      { label: "Часть 1: Идентичность и ценности ЦА", type: "file", file: "instructions/client-dna-part1.txt" },
      { label: "Часть 2: Боли, страхи и триггеры", type: "file", file: "instructions/client-dna-part2.txt" },
      { label: "Часть 3: Барьеры и прошлый опыт", type: "file", file: "instructions/client-dna-part3.txt" },
      { label: "Часть 4: Трансформация и ожидания", type: "file", file: "instructions/client-dna-part4.txt" },
      { label: "Часть 5: Триггеры и механики влияния", type: "file", file: "instructions/client-dna-part5.txt" },
      { label: "Руководство к анализу", type: "file", file: "instructions/client-dna-guide.txt" },
      { label: "Всё в одном файле", type: "file", file: "instructions/client-dna.txt" }
    ],
    skillDownload: {
      label: "Client DNA v2 Skill (Claude Code)",
      url: "https://github.com/yasikvlad/client-dna-v2"
    }
  },
  {
    id: "ben-hunt-ladder",
    name: "Лестница Бена Ханта",
    description: "Потребности аудитории через лестницу осознанности",
    detail: "Мощнейший стратегический инструмент для запусков и прогревов.<br><br>Анализирует ваш продукт через <strong>6 уровней лестницы Ханта</strong> — от «не знаю, что проблема существует» до «готов покупать прямо сейчас».<br><br>Для каждого уровня выдаёт:<br>— что думает аудитория прямо сейчас<br>— какие иллюзии и возражения живут в их голове<br>— какие смыслы нужно посеять<br>— к каким выводам они должны прийти<br>— какой контент транслировать<br><br>На выходе — полная <strong>стратегия запуска</strong> с календарным планом прогрева. Включает формулу идеального прогрева, примеры логических цепочек трансформации и эталонный разбор.",
    category: "audience",
    categoryLabel: "Аудитория",
    stream: "Вводный урок",
    type: "claude-project",
    instruction: {
      file: "instructions/ben-hunt-instruction.txt",
      label: "Инструкция для Claude Project"
    },
    materials: [
      { label: "Инструкция (настройка проекта)", type: "file", file: "instructions/ben-hunt-instruction.txt" },
      { label: "Методология лестницы осознанности", type: "file", file: "instructions/ben-hunt-methodology.txt" },
      { label: "Шаблоны и примеры прогрева", type: "file", file: "instructions/ben-hunt-templates.txt" },
      { label: "Всё в одном файле", type: "file", file: "instructions/ben-hunt-ladder.txt" }
    ],
    skillDownload: {
      label: "Hunt Ladder Skill",
      url: "https://github.com/yasikvlad/hunt-ladder"
    }
  },
  {
    id: "ben-hunt-warmup",
    name: "Прогревы по Бену Ханту",
    description: "Прогревающие последовательности по этапам",
    detail: "Превращает холодную аудиторию в горячих покупателей через системный прогрев.<br><br><strong>Три фазы:</strong><br>— Теневой прогрев: пробуждение осознания проблемы<br>— Активный прогрев: позиционирование + социальные доказательства<br>— Финальный прогрев: продажи + срочность<br><br>Раскладывает смыслы по календарю, подбирает форматы контента под каждый этап, учитывает психологию перехода между уровнями осознанности. Работает на базе методологии Лестницы Бена Ханта.",
    category: "funnels",
    categoryLabel: "Воронки",
    stream: "Вводный урок",
    type: "claude-project",
    instruction: {
      file: "instructions/ben-hunt-ladder.txt",
      label: "Методология (общая с Лестницей Ханта)"
    },
    materials: [],
    skillDownload: null
  },
  {
    id: "creative-ads",
    name: "Конверсионные креативы",
    description: "Статика, видео, Reels — с AI-промтами под все платформы",
    detail: "Полный цикл создания рекламных креативов — от стратегии до готовых промтов для генерации. <strong>8-шаговый алгоритм</strong>, 3 методологии, 13 файлов базы знаний.<br><br><strong>Форматы:</strong> статика, видео, анимация, Reels/TikTok<br><strong>AI-инструменты:</strong> Midjourney, DALL-E, Nano Banana Pro, Higgsfield, Runway<br><strong>Платформы:</strong> Meta, TikTok, YouTube, любые рекламные площадки<br><br><strong>3 методологии:</strong><br>— ДНК Клиента (глубинные сегменты и боли ЦА)<br>— Лестница Бена Ханта (5 ступеней осознанности → разный тип креатива)<br>— Alex Hormozi $100M Offers (ценностное уравнение в каждом тексте)<br><br><strong>Модуль Reels/TikTok для вебинаров:</strong> 12 типов хуков, 4 категории CTA, система FOMO через незнание инструментов, формат «видео + структурированное описание». Построен на Deep Research (13 источников, 2025-2026).<br><br>Генерирует A/B вариации, ретаргетинг-цепочки (3 этапа), полные ad units ready-to-upload в Ads Manager.",
    category: "marketing",
    categoryLabel: "Маркетинг",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Creative Ads Skill",
      url: "https://github.com/yasikvlad/creative-ads"
    }
  },
  {
    id: "conversion-stories",
    name: "Конверсионные сторис",
    description: "Продающие сторис-последовательности",
    detail: "Создаёт продающие сторис-последовательности для Instagram, которые греют аудиторию и закрывают на покупку.<br><br><strong>Что умеет:</strong><br>— Структурирует прогревы по дням и смыслам<br>— Формулирует цепляющие хуки для каждого слайда<br>— Прописывает CTA с учётом этапа воронки<br><br><strong>Форматы:</strong> опросы, слайды с текстом, видео-говорящая голова, каруселные серии. Адаптирует подачу под нишу и стиль эксперта.",
    category: "content",
    categoryLabel: "Контент",
    stream: "",
    type: "coming-soon",
    instruction: null,
    materials: [],
    skillDownload: null
  },
  {
    id: "presentation-assistant",
    name: "Ассистент по презентациям",
    description: "Структура и контент для продающих презентаций",
    detail: "Создаёт структуру и контент для продающих презентаций — от первого слайда до финального призыва к действию.<br><br><strong>Форматы:</strong><br>— Вебинарная презентация (продажа через контент)<br>— Питч-дек (для инвесторов и партнёров)<br>— Коммерческое предложение (B2B-продажи)<br><br>Продумывает нарративную арку, визуальную иерархию, текстовые блоки и переходы между слайдами. На выходе — готовая структура с контентом для каждого слайда.",
    category: "product",
    categoryLabel: "Продукт",
    stream: "",
    type: "coming-soon",
    instruction: null,
    materials: [],
    skillDownload: null
  },
  {
    id: "vsl-video",
    name: "Ассистент VSL видео",
    description: "Генерация VSL-сценариев по 15-блочной структуре",
    detail: "Создаёт убийственные VSL-сценарии (Video Sales Letter) для продуктов на высокие чеки.<br><br><strong>15-блочная структура</strong>, выверенная на анализе лучших продающих видео-презентаций в рунете и на западе. От хука до финального CTA — каждый блок работает на конверсию.<br><br>Адаптирует тон, темп и эмоциональные триггеры под ценовой сегмент. Генерирует полный сценарий с таймкодами, визуальными указаниями и переходами.",
    category: "sales",
    categoryLabel: "Продажи",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "VSL High-Ticket Skill",
      url: "https://github.com/yasikvlad/vsl-high-ticket-skill"
    }
  },
  {
    id: "perfect-slides",
    name: "Perfect Slides",
    description: "Прототипы слайдов для презентаций",
    detail: "Генерирует прототипы слайдов для презентаций с продуманной структурой и визуальной иерархией.<br><br><strong>Возможности:</strong><br>— Готовые PPTX-файлы с текстами и макетами<br>— Автоматическая структура по типу презентации<br>— Визуальная иерархия и типографика<br><br>От идеи до готового файла — достаточно описать тему и формат, чтобы получить полностью оформленную презентацию.",
    category: "product",
    categoryLabel: "Продукт",
    stream: "",
    type: "coming-soon",
    instruction: null,
    materials: [],
    skillDownload: null
  },
  {
    id: "sales-star",
    name: "Vlad's Sales Star",
    description: "Менеджер по продажам с премиальным подходом",
    detail: "Ваш виртуальный менеджер по продажам с премиальным подходом. Не впаривает — продаёт через ценность.<br><br><strong>Что умеет:</strong><br>— SPIN-продажи и анализ болей клиента<br>— 3 варианта ответа на каждое сообщение<br>— Follow-up тайминги и стратегия дожима<br>— Отработка любых возражений<br><br>Обучен на методологии Софии Добрыниной и реальных успешных переписках. Анализирует диалог, находит точки влияния, формулирует ответы, которые двигают к оплате.",
    category: "sales",
    categoryLabel: "Продажи",
    stream: "",
    type: "claude-code-skill",
    instruction: {
      file: "instructions/sales-star.txt",
      label: "Полная инструкция + методология"
    },
    materials: [
      { label: "Методология продаж (SPIN)", type: "included" },
      { label: "Правила общения", type: "included" },
      { label: "Успешные переписки (примеры)", type: "included" }
    ],
    skillDownload: {
      label: "Sales Assistant Skill",
      url: "https://github.com/yasikvlad/sales-assistant"
    }
  },
  {
    id: "youtube-expert",
    name: "YouTube Expert Style",
    description: "Экспертные ролики в стиле Влада Ясько",
    detail: "Создаёт экспертные YouTube-ролики, которые приносят клиентов на миллионы. Обратный инжиниринг стиля <strong>Влада Ясько</strong>.<br><br><strong>Структура ролика:</strong><br>— Провокационное вступление с хуком<br>— Модульная подача из 6 элементов<br>— Техники удержания внимания на 30+ минут<br>— Встроенные диагностические инструменты<br>— Многоуровневые призывы к действию<br><br>Включает универсальный шаблон + полную транскрипцию эталонного видео для обучения AI.",
    category: "youtube",
    categoryLabel: "Ютуб",
    stream: "Вводный урок",
    type: "claude-project",
    instruction: {
      file: "instructions/youtube-expert.txt",
      label: "Инструкция + универсальный шаблон"
    },
    materials: [
      { label: "Транскрипция видео «Инфобизнес на 100+ млн в год»", type: "included" }
    ],
    skillDownload: null
  },
  {
    id: "youtube-ideas",
    name: "YouTube Ideas",
    description: "Идеи и заголовки для YouTube",
    detail: "Генерирует идеи для экспертных YouTube-роликов, которые привлекают целевую аудиторию и конвертируют в клиентов.<br><br><strong>Что делает:</strong><br>— Подбирает темы на основе анализа ниши и ЦА<br>— Формулирует цепляющие заголовки с высоким CTR<br>— Предлагает структуру превью (thumbnail)<br>— Оценивает потенциал виральности каждой идеи<br><br>Работает на пересечении SEO, психологии кликов и экспертного позиционирования.",
    category: "youtube",
    categoryLabel: "Ютуб",
    stream: "",
    type: "coming-soon",
    instruction: null,
    materials: [],
    skillDownload: null
  },
  {
    id: "offer-by-vlad",
    name: "Offer by Vlad",
    description: "Упаковка офферов в стиле Влада Ясько",
    detail: "Авторская методология упаковки офферов <strong>Влада Ясько</strong>, обкатанная на 220+ проектах.<br><br><strong>Отличие от Хормози:</strong><br>— Фокус на позиционировании эксперта, а не только на цене<br>— Уникальный механизм как ядро оффера<br>— Трансформация клиента вместо списка фич<br><br>Создаёт офферы, в которых клиент видит не услугу, а путь к результату. Идеально для экспертов, коучей и продюсеров.",
    category: "product",
    categoryLabel: "Продукт",
    stream: "",
    type: "coming-soon",
    instruction: null,
    materials: [],
    skillDownload: null
  },
  {
    id: "humanizer",
    name: "Очеловечивание текста",
    description: "Убирает AI-штампы, канцелярит и воду",
    detail: "Беспощадный редактор русского текста. Превращает казённый, водянистый текст в живой, конкретный и человечный.<br><br><strong>Вычищает:</strong> канцелярит, воду, штампы, пассивные конструкции, «важно отметить» и прочий AI-мусор.<br><br><strong>21 паттерн обнаружения</strong> + жёсткие негативные правила. После него текст не отличить от написанного профессиональным копирайтером. Скилл от @smixs.",
    category: "content",
    categoryLabel: "Контент",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Humanizer-RU Skill",
      url: "https://github.com/smixs/humanizer-ru"
    }
  },
  {
    id: "nanobanana-pro",
    name: "NanoBanana Pro",
    description: "Набор кастомных рабочих скиллов для Claude Code",
    detail: "Мастер промт-инжиниринга для AI-генерации изображений через <strong>Gemini 3 Pro Image</strong>.<br><br><strong>Возможности:</strong><br>— Инфографики, диаграммы, визуализация данных<br>— Слайды презентаций и дизайн-макеты<br>— Редактирование и колоризация фото<br>— 2D↔3D конвертация, сториборды<br>— Консистентные персонажи и продуктовая фотография<br><br>Набор из 9 специализированных reference-файлов. Превращает Claude Code в полноценную дизайн-студию.",
    category: "tools",
    categoryLabel: "Инструменты",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "NBP Skill",
      url: "https://github.com/yasikvlad/nbp-skill"
    }
  },
  {
    id: "quiz-funnel",
    name: "Квиз-воронка",
    description: "Персонализированные квиз-воронки для любого продукта",
    detail: "Генерирует полную квиз-воронку под ключ.<br><br><strong>Что создаёт:</strong><br>— 20+ экранов квиза с умным скорингом<br>— Калькулятор стоимости под ваш продукт<br>— Персонализированные результаты по сегментам<br>— Готовая техническая спецификация для Next.js<br><br>Анализирует продукт и ЦА, подбирает оптимальную структуру вопросов. Реверс-инжиниринг лучших квиз-воронок рынка.",
    category: "funnels",
    categoryLabel: "Воронки",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Quiz Funnel Skill",
      url: "https://github.com/yasikvlad/quiz-funnel"
    }
  },
  {
    id: "tone-of-voice",
    name: "Tone of Voice",
    description: "Обратный инжиниринг голоса спикера",
    detail: "Извлекает уникальный голос спикера из любого транскрипта — речь, подкаст, продающее видео, вебинар.<br><br><strong>На выходе — готовый документ-руководство:</strong><br>— Характерные обороты и словарь<br>— Ритм и темп речи<br>— Эмоциональные паттерны<br>— Запрещённые конструкции<br><br>После этого любой AI-текст звучит как ваш собственный голос. Незаменимый инструмент для делегирования контента.",
    category: "content",
    categoryLabel: "Контент",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Tone of Voice Reverse Skill",
      url: "https://github.com/anthropics/claude-code"
    }
  },
  {
    id: "narcissist",
    name: "Коммуникация с нарциссом",
    description: "Адаптация сообщений на основе психологии нарциссизма",
    detail: "Ваш персональный психолог-переговорщик для общения с нарциссами.<br><br><strong>Автоматически обнаруживает:</strong><br>— Газлайтинг и обесценивание<br>— DARVO (отрицание, атака, реверс)<br>— Манипулятивные паттерны в переписках<br><br>Адаптирует ваши ответы на основе глубокой базы знаний психологии НРЛ. Защищает от эмоциональных ловушек, сохраняя конструктивный диалог. Встроенная база знаний — работает полностью автономно.",
    category: "tools",
    categoryLabel: "Инструменты",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Narcissist Standalone Skill",
      url: "https://github.com/yasikvlad/narcissist-standalone"
    }
  },
  {
    id: "skill-conductor",
    name: "Skill Conductor",
    description: "Создание, редактирование и оценка скиллов",
    detail: "Мета-скилл для работы со скиллами Claude Code.<br><br><strong>Полный цикл:</strong><br>— Создание новых скиллов с нуля<br>— Редактирование и улучшение существующих<br>— Запуск эвалюаций для тестирования<br>— Бенчмаркинг производительности<br><br>От идеи до production-ready пакета. Скилл от @smixs.",
    category: "dev",
    categoryLabel: "Разработка",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Skill Conductor",
      url: "https://github.com/smixs/skill-conductor"
    }
  },
  {
    id: "creative-director",
    name: "Креативный директор",
    description: "AI-креативный директор для визуальных проектов",
    detail: "Ваш персональный креативный директор с навыками арт-дирекшна.<br><br><strong>Возможности:</strong><br>— Визуальная стратегия проекта<br>— Генерация мудбордов и стайл-гайдов<br>— Контроль консистентности бренда<br>— Арт-дирекшн для AI-генерации<br><br>Работает как связующее звено между идеей и визуальным воплощением. Скилл от @smixs.",
    category: "content",
    categoryLabel: "Контент",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Creative Director Skill",
      url: "https://github.com/smixs/creative-director-skill"
    }
  }
];

const CATEGORIES = [
  { id: "all", label: "Все" },
  { id: "product", label: "Продукт" },
  { id: "audience", label: "Аудитория" },
  { id: "funnels", label: "Воронки" },
  { id: "marketing", label: "Маркетинг" },
  { id: "content", label: "Контент" },
  { id: "sales", label: "Продажи" },
  { id: "youtube", label: "Ютуб" },
  { id: "tools", label: "Инструменты" },
  { id: "dev", label: "Разработка" }
];
