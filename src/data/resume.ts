export type Lang = 'uk' | 'en'

export const EMAIL = 'mxmv@airlance.org'

export const t = {
  uk: {
    title: 'Юра Максимов — Full Stack Developer, Резюме',
    label: 'Резюме',
    first: 'Юра',
    last: 'Максимов',
    intro:
      'Full Stack Developer з понад 13 роками досвіду: від фронтенд-верстки до проєктування складних систем. Створюю вебдодатки, E-commerce платформи та корпоративні рішення на PHP (Symfony, Yii2, Laravel) і Go, будую сервісну архітектуру на gRPC та PostgreSQL. Маю досвід міграції інтернет-магазинів з Magento 1.9 на Magento 2, інтеграції платіжних систем (Stripe, Authorize.Net) та створення інтерфейсів на React і Vue.js. Також розробляю застосунки для iOS та iPadOS на Swift і UIKit, налаштовую Docker та CI/CD.',
    contact: 'Написати мені',
    pdf: 'Завантажити PDF',
    skills: 'Ключові навички',
    experience: 'Досвід роботи',
    achievements: 'Досягнення',
    footer: 'Відкритий до пропозицій',
  },
  en: {
    title: 'Yura Maksymov — Full Stack Developer, Resume',
    label: 'Resume',
    first: 'Yura',
    last: 'Maksymov',
    intro:
      'Full Stack Developer with 13+ years of experience, from front-end markup to designing complex systems. I build web applications, E-commerce platforms and enterprise solutions in PHP (Symfony, Yii2, Laravel) and Go, with service architecture on gRPC and PostgreSQL. I have experience migrating online stores from Magento 1.9 to Magento 2, integrating payment systems (Stripe, Authorize.Net) and building interfaces with React and Vue.js. I also develop iOS and iPadOS applications in Swift and UIKit, and set up Docker and CI/CD.',
    contact: 'Contact me',
    pdf: 'Download PDF',
    skills: 'Key skills',
    experience: 'Work experience',
    achievements: 'Achievements',
    footer: 'Open to offers',
  },
} satisfies Record<Lang, Record<string, string>>

export type SkillGroup = { title: Record<Lang, string>; items: string[] }

export const skillGroups: SkillGroup[] = [
  {
    title: { uk: 'Бекенд', en: 'Backend' },
    items: ['PHP', 'Go', 'gRPC', 'Symfony', 'Yii2', 'Laravel', 'Node.js'],
  },
  {
    title: { uk: 'Мобільна розробка', en: 'Mobile' },
    items: ['Swift', 'UIKit', 'iOS', 'iPadOS'],
  },
  {
    title: { uk: 'Фронтенд', en: 'Frontend' },
    items: ['JavaScript', 'React', 'Vue.js', 'jQuery', 'AJAX', 'Sass/SCSS', 'LESS', 'BEM', 'Email templates'],
  },
  {
    title: { uk: 'E-commerce та CMS', en: 'E-commerce & CMS' },
    items: ['Magento', 'OpenCart', 'PrestaShop', 'WordPress', 'WooCommerce'],
  },
  {
    title: { uk: 'Платежі', en: 'Payments' },
    items: ['Stripe', 'Authorize.Net'],
  },
  {
    title: { uk: 'Бази даних', en: 'Databases' },
    items: ['MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    title: { uk: 'Інструменти', en: 'Tools' },
    items: ['Git', 'Docker', 'CI/CD'],
  },
]

export type Job = {
  role: string
  company: string
  area: Record<Lang, string>
  duration: Record<Lang, string>
  period: Record<Lang, string>
  items: Record<Lang, string[]>
}

export const jobs: Job[] = [
  {
    role: 'Full Stack Developer', company: 'Freelancer',
    area: { uk: 'Інтернет', en: 'Internet' },
    duration: { uk: '4 роки 9 місяців', en: '4 years 9 months' },
    period: { uk: '02.2022 — по поточний час', en: '02.2022 — present' },
    items: {
      uk: [
        'Проєктування та розробка складних систем на Go з використанням gRPC, PostgreSQL та Docker.',
        'Розробка застосунків для iOS та iPadOS на Swift з використанням UIKit.',
        'Розробка та підтримка вебдодатків і кастомних рішень на Symfony та WordPress.',
        'Проєктування та кастомізація інтернет-магазинів на OpenCart.',
        'Оптимізація продуктивності існуючих проєктів, впровадження нових бізнес-логік та сторонніх API.',
      ],
      en: [
        'Designing and building complex systems in Go using gRPC, PostgreSQL and Docker.',
        'Developing applications for iOS and iPadOS in Swift using UIKit.',
        'Developing and maintaining web applications and custom solutions on Symfony and WordPress.',
        'Designing and customizing online stores on OpenCart.',
        'Optimizing performance of existing projects, implementing new business logic and third-party APIs.',
      ],
    },
  },
  {
    role: 'Full Stack Developer', company: 'Above Bits, LLC',
    area: { uk: 'IT', en: 'IT' },
    duration: { uk: '4 роки 2 місяці', en: '4 years 2 months' },
    period: { uk: '01.2018 — 02.2022', en: '01.2018 — 02.2022' },
    items: {
      uk: [
        'Міграція та модернізація інтернет-магазинів з Magento 1.9 на Magento 2, розробка кастомних модулів.',
        'Проєктування та розробка бекенд-архітектури на Yii2 та WordPress для E-commerce платформ і корпоративних рішень.',
        'Створення SPA-інтерфейсів на Vue.js та React.',
        'Інтеграція платіжних систем Stripe та Authorize.Net.',
        "Оптимізація баз даних, проведення код-рев'ю.",
      ],
      en: [
        'Migrated and modernized online stores from Magento 1.9 to Magento 2, built custom modules.',
        'Designed and developed backend architecture on Yii2 and WordPress for E-commerce platforms and enterprise solutions.',
        'Built SPA interfaces with Vue.js and React.',
        'Integrated payment systems Stripe and Authorize.Net.',
        'Optimized databases and conducted code reviews.',
      ],
    },
  },
  {
    role: 'Full Stack Developer', company: 'Adbee',
    area: { uk: 'IT', en: 'IT' },
    duration: { uk: '10 місяців', en: '10 months' },
    period: { uk: '04.2017 — 01.2018', en: '04.2017 — 01.2018' },
    items: {
      uk: [
        'Розробка бекенду та API на Yii2: реалізація бізнес-логіки, проєктування схем БД, написання та оптимізація SQL-запитів.',
        'Кастомізація та підтримка інтернет-магазинів на Magento 1.9–2.0: налаштування каталогу, інтеграція сторонніх модулів, виправлення багів.',
        'Розробка та доопрацювання проєктів на WordPress / WooCommerce, OpenCart 2.1 та PrestaShop.',
        'Підтримка серверної частини вебсайтів та інтернет-магазинів.',
      ],
      en: [
        'Built backend logic and APIs on Yii2: implemented business logic, designed database schemas, wrote and optimized SQL queries.',
        'Customized and maintained online stores on Magento 1.9–2.0: catalog setup, third-party module integration, bug fixing.',
        'Developed and extended projects on WordPress / WooCommerce, OpenCart 2.1 and PrestaShop.',
        'Maintained the server side of websites and online stores.',
      ],
    },
  },
  {
    role: 'Front-end Developer', company: 'Andersen',
    area: { uk: 'IT', en: 'IT' },
    duration: { uk: '3 роки 2 місяці', en: '3 years 2 months' },
    period: { uk: '02.2014 — 03.2017', en: '02.2014 — 03.2017' },
    items: {
      uk: [
        'Розробка лендингів із використанням React та Vue.',
        'Верстка email-шаблонів, сумісних з основними поштовими клієнтами.',
        'Робота з препроцесорами стилів (Sass / SCSS, LESS) та сучасними методологіями організації CSS (наприклад, БЕМ).',
        'Інтеграція верстки у популярні CMS та фреймворки (WordPress тощо), забезпечення коректного відображення на мобільних пристроях, планшетах і десктопах.',
        'Оптимізація швидкості завантаження сторінок, валідність та чистота коду відповідно до сучасних вебстандартів.',
      ],
      en: [
        'Building landing pages with React and Vue.',
        'Coding responsive email templates compatible with major email clients.',
        'Working with CSS preprocessors (Sass / SCSS, LESS) and modern CSS methodologies (e.g. BEM).',
        'Integrating layouts into popular CMSs and frameworks (WordPress, etc.), ensuring correct display on mobile, tablet and desktop.',
        'Optimizing page load speed, keeping code valid and clean according to modern web standards.',
      ],
    },
  },
  {
    role: 'Front-end Developer', company: 'W3 Ukraine',
    area: { uk: 'IT', en: 'IT' },
    duration: { uk: '1 рік 2 місяці', en: '1 year 2 months' },
    period: { uk: '01.2013 — 02.2014', en: '01.2013 — 02.2014' },
    items: {
      uk: [
        'Навчання front-end розробці та практична робота верстальником.',
        'Реалізація інтерактивних та динамічних елементів інтерфейсу за допомогою JavaScript та jQuery.',
      ],
      en: [
        'Training in front-end development alongside hands-on work as a layout developer.',
        'Implementing interactive and dynamic UI elements with JavaScript and jQuery.',
      ],
    },
  },
]
