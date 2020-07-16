//==============================================
//-  Створити функцію конструктор для об'єкту який описує теги
//Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

function Tag(tag_name, action, atributes = []){
	this.tag_name = tag_name;
	this.action = action;
	this.atributes = atributes;
}

// Таким чином описати теги
// -a

let a_tag = new Tag('a', 
	`Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. 
	В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.`, 
	[
		{accesskey : 'Активация ссылки с помощью комбинации клавиш.'},
		{coords : 'Устанавливает координаты активной области.'},
		{download : 'Предлагает скачать указанный по ссылке файл.'},
		{href : 'Задает адрес документа, на который следует перейти.'},
		{hreflang : 'Идентифицирует язык текста по ссылке.'},
		{name : 'Устанавливает имя якоря внутри документа.'}
	])
	
console.log(a_tag);

// -div

let div_tag = new Tag('div', 
	`Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. 
	Как правило, вид блока управляется с помощью стилей.`, 
	[
		{align : 'Задает выравнивание содержимого тега <div>.'},
		{title : 'Добавляет всплывающую подсказку к содержимому.'}
	])
	
console.log(div_tag);
// -h1

let h1_tag = new Tag('h1', 
	`Тег <h1> представляет собой наиболее важный заголовок первого уровня.
	По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания`, 
	[
		{align : 'Определяет выравнивание заголовка.'},
	])
	
console.log(h1_tag);

// -span

let span_tag = new Tag('span', 
	`Тег <span> предназначен для определения строчных элементов документа. 
	С помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.`, 
	[
		{},
	])
	
console.log(span_tag);

// -input

let input_tag = new Tag('input', 
	`Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы 
	интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания 
	текстовых полей, различных кнопок, переключателей и флажков. `, 
	[
		{accept : 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
		{accesskey : 'Переход к элементу с помощью комбинации клавиш.'},
		{align : 'Определяет выравнивание изображения.'},
		{alt : 'Альтернативный текст для кнопки с изображением.'},
		{autocomplete : 'Включает или отключает автозаполнение.'},
		{autofocus : 'Устанавливает фокус в поле формы.'},
		{border : 'Толщина рамки вокруг изображения.'},
		{checked : 'Предварительно активированный переключатель или флажок.'},
		{disabled : 'Блокирует доступ и изменение элемента.'},
		{form : 'Связывает поле с формой по её идентификатору.'},
		{formaction : 'Определяет адрес обработчика формы.'},
		{formenctype : 'Устанавливает способ кодирования данных формы при их отправке на сервер.'},
	])
	
console.log(input_tag);

// -form
let form_tag = new Tag('form', 
	`Тег <form> устанавливает форму на веб-странице. 
	Форма предназначена для обмена данными между пользователем и сервером. 
	Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов 
	можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.`, 
	[
		{'accept-charset' : 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
		{action : 'Адрес программы или документа, который обрабатывает данные формы.'},
		{autocomplete : 'Включает автозаполнение полей формы.'},
		{enctype : 'Способ кодирования данных формы.'},
		{method : 'Метод протокола HTTP.'},
		{name : 'Имя формы.'},
		{novalidate : 'Отменяет встроенную проверку данных формы на корректность ввода.'},
		{target : 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
	])
	
console.log(form_tag);

// -option

let option_tag = new Tag('option', 
	`Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. 
	Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. 
	Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. 
	Это также необходимо, когда к данным списка идет обращение через скрипты.`, 
	[
		{disabled : 'Заблокировать для доступа элемент списка.'},
		{label : 'Указание метки пункта списка.'},
		{selected : 'Заранее устанавливает определенный пункт списка выделенным.'},
		{value : 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
	])
	
console.log(option_tag);

// -select

let select_tag = new Tag('select', 
	`Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, 
	а также список с одним или множественным выбором, как показано далее. 
	Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка.`, 
	[
		{accesskey : 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
		{autofocus : 'Устанавливает, что список получает фокус после загрузки страницы.'},
		{disabled : 'Блокирует доступ и изменение элемента.'},
		{form : 'Связывает список с формой.'},
		{multiple : 'Позволяет одновременно выбирать сразу несколько элементо списка.'},
		{name : 'Имя элемента для отправки на сервер или обращения через скрипты.'},
		{required : 'Список обязателен для выбора перед отправкой формы.'},
		{size : 'Количество отображаемых строк списка.'},
		{tabindex : 'Определяет последовательность перехода между элементами при нажатии на клавишу TAB'}
	])
	
console.log(select_tag);

// Приклад результату
//   {
//        titleOfTag: 'area',
//        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//        attrs: [
//        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//        {/*some props and values*/},
//        {/*...*/},
//        {/*...*/},
//        ]
//
//   }
//==============================================


//==============================================
//-  Створити класс  для об'єкту який описує теги
//Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

class TagClass {
	constructor(tag_name, action, atributes = []){
		this.tag_name = tag_name;
		this.action = action;
		this.atributes = atributes;
	}
}

// Таким чином описати теги
// -a

let tag_a = new TagClass('a', 
	`Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. 
	В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.`, 
	[
		{accesskey : 'Активация ссылки с помощью комбинации клавиш.'},
		{coords : 'Устанавливает координаты активной области.'},
		{download : 'Предлагает скачать указанный по ссылке файл.'},
		{href : 'Задает адрес документа, на который следует перейти.'},
		{hreflang : 'Идентифицирует язык текста по ссылке.'},
		{name : 'Устанавливает имя якоря внутри документа.'}
	])
	
console.log(tag_a);
	
// -div

let tag_div = new TagClass('div', 
	`Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. 
	Как правило, вид блока управляется с помощью стилей.`, 
	[
		{align : 'Задает выравнивание содержимого тега <div>.'},
		{title : 'Добавляет всплывающую подсказку к содержимому.'}
	])
	
console.log(tag_div);

// -h1

let tag_h1 = new TagClass('h1', 
	`Тег <h1> представляет собой наиболее важный заголовок первого уровня.
	По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания`, 
	[
		{align : 'Определяет выравнивание заголовка.'},
	])
	
console.log(tag_h1);

// -span

let tag_span = new TagClass('span', 
	`Тег <span> предназначен для определения строчных элементов документа. 
	С помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.`, 
	[
		{},
	])
	
console.log(tag_span);

// -input

let tag_input = new TagClass('input', 
	`Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы 
	интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания 
	текстовых полей, различных кнопок, переключателей и флажков. `, 
	[
		{accept : 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
		{accesskey : 'Переход к элементу с помощью комбинации клавиш.'},
		{align : 'Определяет выравнивание изображения.'}
	])

console.log(tag_input);


// -form

let tag_form = new TagClass('form', 
	`Тег <form> устанавливает форму на веб-странице. 
	Форма предназначена для обмена данными между пользователем и сервером. 
	Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов 
	можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.`, 
	[
		{'accept-charset' : 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
		{action : 'Адрес программы или документа, который обрабатывает данные формы.'},
		{autocomplete : 'Включает автозаполнение полей формы.'}
	]);
	
console.log(tag_form);


// -option

let tag_option = new TagClass('option', 
	`Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. 
	Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. 
	Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. 
	Это также необходимо, когда к данным списка идет обращение через скрипты.`, 
	[
		{disabled : 'Заблокировать для доступа элемент списка.'},
		{label : 'Указание метки пункта списка.'},
		{selected : 'Заранее устанавливает определенный пункт списка выделенным.'},
	])
	
console.log(tag_option);

// -select

let tag_select = new TagClass('select', 
	`Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, 
	а также список с одним или множественным выбором, как показано далее. 
	Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка.`, 
	[
		{accesskey : 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
		{autofocus : 'Устанавливает, что список получает фокус после загрузки страницы.'},
		{disabled : 'Блокирует доступ и изменение элемента.'},
	])
	
console.log(tag_select);

// Приклад результату
//  {
//        titleOfTag: 'area',
//        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//        attrs: [
//        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//        {/*some props and values*/},
//        {/*...*/},
//        {/*...*/},
//        ]
//
//   }
//==============================================



//==============================================
//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//==============================================
let car_obj = {
	model : 'x6', 
	brand : 'BMW', 
	year : 1759, 
	max_speed : 468, 
	engine : 12, 
	drive : function(){
		console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
	},
	
	info : function(){
		console.log(`Інформація про машину: 
			модель - ${this.model}, 
			виробник - ${this.brand}, 
			рік випуску - ${this.year}, 
			максимальна швидкість - ${this.max_speed}, 
			об'єм двигуна - ${this.engine}`);
	},
	
	increaseMaxSpeed : function(newSpeed){
		this.max_speed = newSpeed;
	},
	
	changeYear : function(newValue){
		this.year = newValue;
	},
	
	addDriver : function(driver){
		this.driver = driver;
	}
};

car_obj.drive();
car_obj.info();
car_obj.increaseMaxSpeed(2847);
car_obj.changeYear(3847);
car_obj.addDriver({name:'Max', age:23, job:'marketing'});
console.log(car_obj);
//==============================================
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//==============================================

function CarFunc(model, brand, year, max_speed, engine){
	this.model = model;
	this.brand = brand;
	this.year = year;
	this.max_speed = max_speed;
	this.engine = engine;
	
	this.drive = function drive(){
	console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
	}
	
	this.info = function info(){
		console.log(`Інформація про машину: 
		модель - ${this.model}, 
		виробник - ${this.brand}, 
		рік випуску - ${this.year}, 
		максимальна швидкість - ${this.max_speed}, 
		об'єм двигуна - ${this.engine}`);
	}
	
	this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed){
		this.max_speed = newSpeed;
	}
	
	this.changeYear = function changeYear(newValue){
		this.year = newValue;
	}
	
	this.addDriver = function addDriver(driver){
		this.driver = driver;
	}
}

let testcar2 = new CarFunc('x6', 'BMW', 1974, 450, 4);

testcar2.drive();
testcar2.info();
testcar2.increaseMaxSpeed(500);
testcar2.changeYear(1469);
testcar2.addDriver({name:'Max', age:23, job:'marketing'});
console.log(testcar2);
	

//==============================================
//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//==============================================


class CarClass {
	constructor(model, brand, year, max_speed, engine){
		this.model = model;
		this.brand = brand;
		this.year = year;
		this.max_speed = max_speed;
		this.engine = engine;
	}
	
	drive(){
	console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
	}
	
	info(){
		console.log(`Інформація про машину: 
		модель - ${this.model}, 
		виробник - ${this.brand}, 
		рік випуску - ${this.year}, 
		максимальна швидкість - ${this.max_speed}, 
		об'єм двигуна - ${this.engine}`);
	}
	
	increaseMaxSpeed (newSpeed){
		this.max_speed = newSpeed;
	}
	
	changeYear (newValue){
		this.year = newValue;
	}
	
	addDriver (driver){
		this.driver = driver;
	}
}

let testcar = new CarClass('x6', 'BMW', 1974, 450, 4);

testcar.drive();
testcar.info();
testcar.increaseMaxSpeed(500);
testcar.changeYear(1469);
testcar.addDriver({name:'Max', age:23, job:'marketing'})
console.log(testcar);

//==============================================
//-створити класс попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//==============================================

class Cinderella{
	constructor(name, age, size){
		this.name = name;
		this.age = age;
		this.size = size;
	}
}

class Prince{
	constructor(name, age, find_size){
		this.name = name;
		this.age = age;
		this.find_size = find_size;
	}
	findCinderella(arr_cinderella){
		for (let c of arr_cinderella){
			if(this.find_size === c.size){
			console.log(c);
			}
		}
	}
}
	
let cinderella1 = new Cinderella('Anna', 23, 35);
let cinderella2 = new Cinderella('Marie', 26, 41);
let cinderella3 = new Cinderella('Lili', 20, 38);
let cinderella4 = new Cinderella('Kate', 18, 34);
let cinderella5 = new Cinderella('Ola', 21, 36);
let cinderella6 = new Cinderella('Lisa', 40, 39);
let cinderella7 = new Cinderella('Chris', 15, 32);
let cinderella8 = new Cinderella('Sofi', 27, 37);
let cinderella9 = new Cinderella('Sasha', 29, 29);
let cinderella10 = new Cinderella('Nina', 35, 40);

let prince1 = new Prince('Oleg', 26, 34)

let arr_cinderella = [cinderella1, 
	cinderella2, 
	cinderella3, 
	cinderella4, 
	cinderella5, 
	cinderella6, 
	cinderella7,
	cinderella8,
	cinderella9,
	cinderella10]
	
prince1.findCinderella(arr_cinderella);
//==============================================
//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//==============================================
function CinderellaFunc(name, age, size){
		this.name = name;
		this.age = age;
		this.size = size;
}

function PrinceFunc(name, age, find_size){
		this.name = name;
		this.age = age;
		this.find_size = find_size;
		
		this.findCinderella1 = function	findCinderella1(arr_cinderella1){
		for (let c1 of arr_cinderella1){
			if(this.find_size === c1.size){
			console.log(c1);
			}
		}
	}
}
	
		
	
let cinderella11 = new CinderellaFunc('Anna', 23, 35);
let cinderella21 = new CinderellaFunc('Marie', 26, 41);
let cinderella31 = new CinderellaFunc('Lili', 20, 38);
let cinderella41 = new CinderellaFunc('Kate', 18, 34);
let cinderella51 = new CinderellaFunc('Ola', 21, 36);
let cinderella61 = new CinderellaFunc('Lisa', 40, 39);
let cinderella71 = new CinderellaFunc('Chris', 15, 32);
let cinderella81 = new CinderellaFunc('Sofi', 27, 37);
let cinderella91 = new CinderellaFunc('Sasha', 29, 29);
let cinderella101 = new CinderellaFunc('Nina', 35, 40);

let prince11 = new PrinceFunc('Oleg', 26, 34)

let arr_cinderella1 = [cinderella11, 
	cinderella21, 
	cinderella31, 
	cinderella41, 
	cinderella51, 
	cinderella61, 
	cinderella71,
	cinderella81,
	cinderella91,
	cinderella101]
	

prince11.findCinderella1(arr_cinderella1);
