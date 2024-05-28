// 1. Створення базового об'єкту "Book":
function Book() {
    this.title = "Загальна Книга";
    this.author = "Анонім";
    this.pages = 0;
}

Book.prototype.read = function () {
    console.log(`Ви читаєте ${this.title} від ${this.author}`);
};

let book = new Book();

console.log("Завдання: 1 ==============================");
console.log("Об'єкт: Book", book);
console.log("Прототип Об'єкту: Book", Object.getPrototypeOf(book));
book.read();

// 2. Наслідування від базового об'єкту Book
function Novel() { }
Novel.prototype = Object.create(Book.prototype);
Novel.prototype.constructor = Novel;
Novel.prototype.genre = "Новела";

let novel = new Novel();

console.log("Завдання: 2 ==============================");
console.log("Об'єкт: Novel", novel);
console.log("Прототип Об'єкту: Novel", Object.getPrototypeOf(novel));

// 3. Створення нового об'єкту та зміна його прототипу
function Biography() {
    this.title = "Загальна Біографія";
    this.author = "Біограф";
    this.pages = 200;
}

Biography.prototype = Object.create(Novel.prototype);
Biography.prototype.constructor = Biography;

let biography = new Biography();

console.log("Завдання: 3 ==============================");
console.log("Об'єкт: Biography", biography);
console.log("Novel є прототипом Biography:", Novel.prototype.isPrototypeOf(biography));

// 4. Інкапсуляція властивості та додання властивості
function ScienceBook() {
    this.title = "Фізика 101";
    this.author = "Альберт Ейнштейн";
    let info = "написана в 1915 році";
    Object.defineProperty(this, 'info', {
        get: function () {
            return info;
        }
    });
}

let scienceBook = new ScienceBook();

console.log("Завдання: 4 ==============================");
console.log("Властивість info:", scienceBook.info);
console.log("Настройки властивості info:", Object.getOwnPropertyDescriptor(scienceBook, 'info'));

// 5. Поліморфізм: створення нового об'єкта та перевизначення його методу
function Textbook() {
    this.title = "Фізика у Вищій Школі";
    this.author = "Дж. Д. Джонс";
}

Textbook.prototype = Object.create(ScienceBook.prototype);
Textbook.prototype.constructor = Textbook;
Textbook.prototype.read = function () {
    console.log(`Ви читаєте підручник "${this.title}" від ${this.author}. ${this.info}`);
};

let textbook = new Textbook();

console.log("Завдання: 5 ==============================");
textbook.read();

// 6. Абстракція: створення об'єкта з загальними властивостями
function Media() {
    this.format = "Загальний Формат";
    this.length = 0;
}

Media.prototype.play = function () {
    console.log(`Зараз відтворюється медіа у форматі ${this.format} з тривалістю ${this.length} секунд`);
};

function Song() {
    this.artist = "Загальний Виконавець";
    this.title = "Загальна Пісня";
}

Song.prototype = Object.create(Media.prototype);
Song.prototype.constructor = Song;

let song = new Song();
song.format = "MP3";
song.length = 180;

console.log("Завдання: 6 ==============================");
song.play();
