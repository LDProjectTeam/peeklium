const translations = {
  ru: {
    'meta.title': `Peeklium — Twitch-чат поверх игры`,
    'meta.description': `Peeklium показывает Twitch-чат поверх игры. Настрой расположение, оформление и подключение в одном приложении для Windows.`,
    'a11y.home': `Peeklium — на главную`,
    'a11y.menu': `Открыть меню`,
    'a11y.mainNav': `Основная навигация`,
    'a11y.lang': `Язык`,
    'a11y.ticker': `О Peeklium`,
    'a11y.lightbox': `Просмотр скриншота`,
    'a11y.close': `Закрыть`,
    'a11y.skip': `К основному содержимому`,
    'nav.features': `Возможности`,
    'nav.interface': `Интерфейс`,
    'nav.faq': `Вопросы`,
    'nav.download': `Скачать`,
    'hero.platform': `Peeklium для Windows`,
    'hero.title': `Читай Twitch-чат,<br class="hero-break"> <span>не сворачивая игру.</span>`,
    'hero.lead': `Peeklium закрепляет чат поверх игры в оконном режиме. Размести оверлей, настрой его вид и оставайся в потоке стрима.`,
    'hero.download': `Скачать для Windows`,
    'hero.secondary': `Возможности`,
    'hero.meta.os': `Windows 10/11 · x64`,
    'hero.meta.build': `Автономная сборка`,
    'hero.meta.readonly': `Только чтение`,
    'hero.visualLabel': `Настройки оформления чата`,
    'hero.visualFoot1': `Предпросмотр из приложения`,
    'img.heroAlt': `Настройки чата и предпросмотр оформления в Peeklium`,
    'ticker.1': `Twitch-чат поверх игры`,
    'ticker.2': `Режим только для чтения`,
    'ticker.3': `Quick Connect или вход через Twitch`,
    'features.eyebrow': `Что умеет Peeklium`,
    'features.title': `Настрой чат<br><span>под свою игру.</span>`,
    'features.lead': `Управляй положением окна и оформлением чата, не меняя привычный способ играть.`,
    'feature1.tag': `Оверлей`,
    'feature1.title': `Размести окно там, где удобно`,
    'feature1.body': `Выбери одну из девяти позиций, измени размер или перетащи окно вручную. Always on Top удерживает чат поверх игры, а Click Through пропускает клики сквозь оверлей.`,
    'feature1.tagA': `9 позиций`,
    'feature1.tagB': `Always on Top`,
    'feature1.tagC': `Click Through`,
    'feature2.tag': `Оформление`,
    'feature2.title': `Настрой шрифт и цвета`,
    'feature2.body': `Выбери пресет и настрой шрифт, цвет, прозрачность и интервалы. Предпросмотр обновляется во время редактирования.`,
    'feature3.tag': `Подключение`,
    'feature3.title': `Два способа открыть чат`,
    'feature3.body': `Quick Connect подключает публичный чат без аккаунта. Для входа через Twitch авторизуйся в браузере.`,
    'feature4.tag': `Горячие клавиши`,
    'feature4.title': `Управляй с клавиатуры`,
    'feature4.body': `Показывай чат, переключай Click Through, открывай настройки или блокируй окно с помощью глобальных сочетаний клавиш.`,
    'feature4.key': `показать или скрыть чат`,
    'preview.eyebrow': `Интерфейс Peeklium`,
    'preview.title': `Настройки и чат<br><span>в одном окне.</span>`,
    'preview.lead': `Главная страница, оформление оверлея и подключение Twitch.`,
    'preview.caption1': `01 · Обзор`,
    'preview.caption2': `Статус и быстрые действия`,
    'img.overviewAlt': `Главная страница Peeklium: подключение Twitch, быстрые настройки и предпросмотр чата`,
    'shot1.title': `Оформление чата`,
    'shot1.sub': `Шрифт и цвета`,
    'shot1.aria': `Посмотреть настройки чата`,
    'shot1.alt': `Настройки оформления чата Peeklium`,
    'shot2.title': `Настройки оверлея`,
    'shot2.sub': `Позиция и размер`,
    'shot2.aria': `Посмотреть настройки оверлея`,
    'shot2.alt': `Настройки расположения оверлея Peeklium`,
    'shot3.title': `Подключение Twitch`,
    'shot3.sub': `Quick Connect и вход`,
    'shot3.aria': `Посмотреть страницу подключения`,
    'shot3.alt': `Страница подключения Twitch в Peeklium`,
    'download.eyebrow': `Скачать Peeklium`,
    'download.title': `Чат поверх игры.<br><span>Настройки под рукой.</span>`,
    'download.lead': `Автономная сборка для Windows x64.`,
    'download.cta': `Скачать Peeklium`,
    'download.note': `Windows 10/11 · x64 · .exe · .NET Runtime не требуется`,
    'faq.eyebrow': `Вопросы и ответы`,
    'faq.title': `О Peeklium<br><span>коротко.</span>`,
    'faq.lead': `Совместимость, подключение и поведение оверлея.`,
    'faq.q1': `На каких системах работает Peeklium?`,
    'faq.a1': `Приложение предназначено для Windows 10 и 11, x64. Сборка автономная: отдельно устанавливать .NET Runtime не нужно.`,
    'faq.q2': `Нужен ли Twitch-аккаунт для подключения?`,
    'faq.a2': `Нет. Quick Connect подключает публичный чат без аккаунта и Client ID. Для подключения с аккаунтом можно войти через Twitch прямо из приложения.`,
    'faq.q3': `Можно ли отправлять сообщения из Peeklium?`,
    'faq.a3': `Нет. Приложение показывает чат только для чтения и не отправляет сообщения.`,
    'faq.q4': `Почему оверлей не виден в игре?`,
    'faq.a4': `Оверлей рассчитан на режим Borderless Windowed или оконный режим. Эксклюзивный полноэкранный режим некоторых игр может скрывать сторонние окна.`,
    'footer.about': `О проекте`
  },
  en: {
    'meta.title': `Peeklium — Twitch chat over your game`,
    'meta.description': `Peeklium keeps Twitch chat on top of your game. Set its position, appearance and connection from one Windows app.`,
    'a11y.home': `Peeklium — back to top`,
    'a11y.menu': `Open menu`,
    'a11y.mainNav': `Main navigation`,
    'a11y.lang': `Language`,
    'a11y.ticker': `About Peeklium`,
    'a11y.lightbox': `Screenshot preview`,
    'a11y.close': `Close`,
    'a11y.skip': `Skip to content`,
    'nav.features': `Features`,
    'nav.interface': `Interface`,
    'nav.faq': `FAQ`,
    'nav.download': `Download`,
    'hero.platform': `Peeklium for Windows`,
    'hero.title': `Read Twitch chat,<br class="hero-break"> <span>stay in your game.</span>`,
    'hero.lead': `Peeklium pins chat over your game in windowed mode. Place the overlay, tune its look and stay with the stream.`,
    'hero.download': `Download for Windows`,
    'hero.secondary': `Features`,
    'hero.meta.os': `Windows 10/11 · x64`,
    'hero.meta.build': `Self-contained build`,
    'hero.meta.readonly': `Read-only`,
    'hero.visualLabel': `Chat appearance settings`,
    'hero.visualFoot1': `Preview from the app`,
    'img.heroAlt': `Chat settings and appearance preview in Peeklium`,
    'ticker.1': `Twitch chat over your game`,
    'ticker.2': `Read-only mode`,
    'ticker.3': `Quick Connect or sign in with Twitch`,
    'features.eyebrow': `What Peeklium does`,
    'features.title': `Set up chat<br><span>for your game.</span>`,
    'features.lead': `Move the window and style the chat without changing how you play.`,
    'feature1.tag': `Overlay`,
    'feature1.title': `Put the window where you want it`,
    'feature1.body': `Pick one of nine positions, resize it or drag the window by hand. Always on Top keeps chat above the game, and Click Through passes clicks through the overlay.`,
    'feature1.tagA': `9 positions`,
    'feature1.tagB': `Always on Top`,
    'feature1.tagC': `Click Through`,
    'feature2.tag': `Appearance`,
    'feature2.title': `Set the font and colors`,
    'feature2.body': `Choose a preset and adjust font, color, opacity and spacing. The preview updates while you edit.`,
    'feature3.tag': `Connection`,
    'feature3.title': `Two ways to open chat`,
    'feature3.body': `Quick Connect joins a public chat with no account. To sign in with Twitch, authorize in your browser.`,
    'feature4.tag': `Hotkeys`,
    'feature4.title': `Control it from the keyboard`,
    'feature4.body': `Show chat, toggle Click Through, open settings or lock the window with global shortcuts.`,
    'feature4.key': `show or hide chat`,
    'preview.eyebrow': `Peeklium interface`,
    'preview.title': `Settings and chat<br><span>in one window.</span>`,
    'preview.lead': `The main page, overlay appearance and Twitch connection.`,
    'preview.caption1': `01 · Overview`,
    'preview.caption2': `Status and quick actions`,
    'img.overviewAlt': `Peeklium main page: Twitch connection, quick settings and chat preview`,
    'shot1.title': `Chat appearance`,
    'shot1.sub': `Font and colors`,
    'shot1.aria': `View chat settings`,
    'shot1.alt': `Peeklium chat appearance settings`,
    'shot2.title': `Overlay settings`,
    'shot2.sub': `Position and size`,
    'shot2.aria': `View overlay settings`,
    'shot2.alt': `Peeklium overlay position settings`,
    'shot3.title': `Twitch connection`,
    'shot3.sub': `Quick Connect and sign-in`,
    'shot3.aria': `View the connection page`,
    'shot3.alt': `Twitch connection page in Peeklium`,
    'download.eyebrow': `Download Peeklium`,
    'download.title': `Chat over your game.<br><span>Settings within reach.</span>`,
    'download.lead': `Self-contained build for Windows x64.`,
    'download.cta': `Download Peeklium`,
    'download.note': `Windows 10/11 · x64 · .exe · no .NET Runtime required`,
    'faq.eyebrow': `Questions and answers`,
    'faq.title': `Peeklium<br><span>in short.</span>`,
    'faq.lead': `Compatibility, connection and overlay behavior.`,
    'faq.q1': `Which systems does Peeklium run on?`,
    'faq.a1': `Windows 10 and 11, x64. The build is self-contained: you do not need to install the .NET Runtime separately.`,
    'faq.q2': `Do I need a Twitch account to connect?`,
    'faq.a2': `No. Quick Connect joins a public chat without an account or Client ID. To connect with an account, sign in with Twitch from the app.`,
    'faq.q3': `Can I send messages from Peeklium?`,
    'faq.a3': `No. The app shows chat as read-only and never sends messages.`,
    'faq.q4': `Why is the overlay not visible in my game?`,
    'faq.a4': `The overlay works in Borderless Windowed or windowed mode. Exclusive fullscreen in some games can hide third-party windows.`,
    'footer.about': `About the project`
  },
  uk: {
    'meta.title': `Peeklium — Twitch-чат поверх гри`,
    'meta.description': `Peeklium показує Twitch-чат поверх гри. Налаштуй розташування, вигляд і підключення в одному застосунку для Windows.`,
    'a11y.home': `Peeklium — на головну`,
    'a11y.menu': `Відкрити меню`,
    'a11y.mainNav': `Основна навігація`,
    'a11y.lang': `Мова`,
    'a11y.ticker': `Про Peeklium`,
    'a11y.lightbox': `Перегляд скриншота`,
    'a11y.close': `Закрити`,
    'a11y.skip': `До основного вмісту`,
    'nav.features': `Можливості`,
    'nav.interface': `Інтерфейс`,
    'nav.faq': `Питання`,
    'nav.download': `Завантажити`,
    'hero.platform': `Peeklium для Windows`,
    'hero.title': `Читай Twitch-чат,<br class="hero-break"> <span>не згортаючи гру.</span>`,
    'hero.lead': `Peeklium закріплює чат поверх гри у віконному режимі. Розмісти оверлей, налаштуй його вигляд і залишайся в потоці стриму.`,
    'hero.download': `Завантажити для Windows`,
    'hero.secondary': `Можливості`,
    'hero.meta.os': `Windows 10/11 · x64`,
    'hero.meta.build': `Автономна збірка`,
    'hero.meta.readonly': `Лише читання`,
    'hero.visualLabel': `Налаштування вигляду чату`,
    'hero.visualFoot1': `Попередній перегляд із застосунку`,
    'img.heroAlt': `Налаштування чату й попередній перегляд вигляду в Peeklium`,
    'ticker.1': `Twitch-чат поверх гри`,
    'ticker.2': `Режим лише читання`,
    'ticker.3': `Quick Connect або вхід через Twitch`,
    'features.eyebrow': `Що вміє Peeklium`,
    'features.title': `Налаштуй чат<br><span>під свою гру.</span>`,
    'features.lead': `Керуй положенням вікна та виглядом чату, не змінюючи звичний спосіб грати.`,
    'feature1.tag': `Оверлей`,
    'feature1.title': `Розмісти вікно там, де зручно`,
    'feature1.body': `Обери одну з дев'яти позицій, зміни розмір або перетягни вікно вручну. Always on Top утримує чат поверх гри, а Click Through пропускає кліки крізь оверлей.`,
    'feature1.tagA': `9 позицій`,
    'feature1.tagB': `Always on Top`,
    'feature1.tagC': `Click Through`,
    'feature2.tag': `Оформлення`,
    'feature2.title': `Налаштуй шрифт і кольори`,
    'feature2.body': `Обери пресет і налаштуй шрифт, колір, прозорість та інтервали. Попередній перегляд оновлюється під час редагування.`,
    'feature3.tag': `Підключення`,
    'feature3.title': `Два способи відкрити чат`,
    'feature3.body': `Quick Connect підключає публічний чат без акаунта. Для входу через Twitch авторизуйся у браузері.`,
    'feature4.tag': `Гарячі клавіші`,
    'feature4.title': `Керуй з клавіатури`,
    'feature4.body': `Показуй чат, перемикай Click Through, відкривай налаштування або блокуй вікно за допомогою глобальних сполучень клавіш.`,
    'feature4.key': `показати або сховати чат`,
    'preview.eyebrow': `Інтерфейс Peeklium`,
    'preview.title': `Налаштування і чат<br><span>в одному вікні.</span>`,
    'preview.lead': `Головна сторінка, оформлення оверлея і підключення Twitch.`,
    'preview.caption1': `01 · Огляд`,
    'preview.caption2': `Статус і швидкі дії`,
    'img.overviewAlt': `Головна сторінка Peeklium: підключення Twitch, швидкі налаштування й попередній перегляд чату`,
    'shot1.title': `Оформлення чату`,
    'shot1.sub': `Шрифт і кольори`,
    'shot1.aria': `Переглянути налаштування чату`,
    'shot1.alt': `Налаштування оформлення чату Peeklium`,
    'shot2.title': `Налаштування оверлея`,
    'shot2.sub': `Позиція і розмір`,
    'shot2.aria': `Переглянути налаштування оверлея`,
    'shot2.alt': `Налаштування розташування оверлея Peeklium`,
    'shot3.title': `Підключення Twitch`,
    'shot3.sub': `Quick Connect і вхід`,
    'shot3.aria': `Переглянути сторінку підключення`,
    'shot3.alt': `Сторінка підключення Twitch у Peeklium`,
    'download.eyebrow': `Завантажити Peeklium`,
    'download.title': `Чат поверх гри.<br><span>Налаштування під рукою.</span>`,
    'download.lead': `Автономна збірка для Windows x64.`,
    'download.cta': `Завантажити Peeklium`,
    'download.note': `Windows 10/11 · x64 · .exe · .NET Runtime не потрібен`,
    'faq.eyebrow': `Питання та відповіді`,
    'faq.title': `Про Peeklium<br><span>коротко.</span>`,
    'faq.lead': `Сумісність, підключення та поведінка оверлея.`,
    'faq.q1': `На яких системах працює Peeklium?`,
    'faq.a1': `Застосунок призначений для Windows 10 і 11, x64. Збірка автономна: окремо встановлювати .NET Runtime не потрібно.`,
    'faq.q2': `Чи потрібен Twitch-акаунт для підключення?`,
    'faq.a2': `Ні. Quick Connect підключає публічний чат без акаунта і Client ID. Для підключення з акаунтом можна увійти через Twitch прямо із застосунку.`,
    'faq.q3': `Чи можна надсилати повідомлення з Peeklium?`,
    'faq.a3': `Ні. Застосунок показує чат лише для читання і не надсилає повідомлень.`,
    'faq.q4': `Чому оверлей не видно у грі?`,
    'faq.a4': `Оверлей розрахований на режим Borderless Windowed або віконний режим. Ексклюзивний повноекранний режим деяких ігор може приховувати сторонні вікна.`,
    'footer.about': `Про проєкт`
  }
};

const LANGUAGES = ['en', 'ru', 'uk'];
const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'peeklium.lang';

const getStoredLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(saved) ? saved : null;
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    /* storage may be unavailable */
  }
};

const translate = (language, key) => {
  const dictionary = translations[language] ?? translations[DEFAULT_LANGUAGE];
  return dictionary[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key;
};

function applyLanguage(language, { persist = false } = {}) {
  if (!translations[language]) language = DEFAULT_LANGUAGE;

  document.documentElement.lang = language;
  document.title = translate(language, 'meta.title');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = translate(language, element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = translate(language, element.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', translate(language, element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', translate(language, element.dataset.i18nAlt));
  });
  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    element.setAttribute('content', translate(language, element.dataset.i18nContent));
  });
  document.querySelectorAll('[data-title-key]').forEach((element) => {
    element.dataset.title = translate(language, element.dataset.titleKey);
  });
  document.querySelectorAll('.lang-switch button').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });

  if (persist) storeLanguage(language);
}

applyLanguage(getStoredLanguage() ?? DEFAULT_LANGUAGE);

document.querySelector('.lang-switch')?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-lang]');
  if (!button) return;
  applyLanguage(button.dataset.lang, { persist: true });
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation?.classList.toggle('open', !expanded);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('p');

document.querySelectorAll('.shot-card').forEach((card) => {
  card.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    lightboxImage.src = card.dataset.image;
    lightboxImage.alt = card.querySelector('img')?.alt ?? '';
    lightboxCaption.textContent = card.dataset.title ?? '';
    lightbox.showModal();
  });
});

lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
