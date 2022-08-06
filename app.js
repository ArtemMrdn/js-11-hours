//Вызовы функции (БЕЗ инструкции return функция вернет undefined)

function myFn(a, b) {    
    let c;           //обьявляются переменная с
    a = a + 1;       // значение а увеличивается на 1
    c = a + b;       // сумма значение а и b присваивается с
    return c;        // возвращается значение с
}
myFn(2, 3)   // при вызове параметрами a и b становятся 2 и 3


//Передача значение по ссылке 

const personOne2 = {
    name: 'Bob',
    age: 25,
}

function increasePersonAge2(person) {       //функция мутирует внушний обьект
    person.age += 1;
    return person;
}

increasePersonAge2(personOne2); //Передача обьекта по ссылке
console.log(personOne2.age); //26


// (НЕ рекомендовано, желательно использовать копии обьекта) Например:
const personOne = {
    name: 'Bob',
    age: 25,
}

function increasePersonAge(person) {       //создаем копию обьекта
    const updatedPerson = Object.assign({}, person);
    updatedPerson.age += 1;
    return updatedPerson;
}
const updatedPersonOne = increasePersonAge(personOne);
console.log(personOne.age)  //25    
console.log(updatedPersonOne.age)  //26

//Коллбэк функции (функция вызывается в другой функции)
function myName() {
    console.log('Artem')
}
//setTimeout(myName, 2000);   //в данном примере функцией коллбэк является myName


// || &&
'Artem' && 'Artem' //работает только когда все true, выводит последний правильный операнд

'Value' || ''      // работает если один аргумент true, выводит первый правильный операнд

//Оператор ... - оператор разделения обьекта на свойства
const button = {
    text: 'Buy',
    width: 200,
}
const buttonRed = {
    ...button,
    color: 'red',
}
console.table(buttonRed)




//Функциональное выражение

const myFunction = function(a, b) {
    let c
    a = a + 1
    c = a + b 
    return c 
}
myFunction(2, 5) //8

//Использование функционального выражение как callback
setTimeout(function(){
    console.log('Отложенное сообщение')
}, 2000)



//Стрелочная функция c именем
const myFunc = (a, b) => {   //анонимное функц. выражение
    let c
    a = a + 1
    c = a + b 
    return c  
}
myFunc(2, 5) //8

setTimeout(() => {  //Использование стрелочной функции как callback
    console.log('Отложенное сообщение №2')
}, 3000)



//Значение параметров функции по умолчанию 
function mulByFactor(value, multiplier = 1) {     //Значение по умолчанию, если всего один аргумент
    return value * multiplier;
}
mulByFactor(10, 2)  //20
mulByFactor(5)  //5

//Пример 2 
const newPost = (post, addedAt = Date()) => ({   //мы хотим вернуть обьект неявно, если напишем без () то JS подумает что это тело функции, если мы хотим вернуть его неявно то необходимо использовать ()
    ...post,
    addedAt,      //сокращенная запись вместо addedAt: addedAt, если оно повторяется, достаточно выывести написать только свойство
})
const firstPost = {
    id: 1,
    author: 'Artem',
}
newPost(firstPost)



//try/catch  -  ловля ошибки, для того чтобы после ошибки код выполнялся дальше 
const fnWithError = () => {
    throw new Error()('Some error')
}
try {                    //в try записывается выполнение блока кода
    fnWithError()  
} catch(error) {         // этот блок выполняется в случае возникновения ошибок в блоке try 
    console.error('error');
    console.log(some.error);
}
console.log('Continue') //выполнения кода продолжится 



//Метод ForEach - перебор елементов массива и выполнение определенныъ действий с каждым елементом, возвращать он ничего не должен

const myArray = [1, 2, 3];
console.log(myArray);
//forEach будет вызывать колбек функцию для каждого елемента массива, в качестве значения для параметра будет передаваться значение определенного елемента массива
myArray.forEach(el => console.log(el*2));       // создание функции с параметром el, 
console.log(myArray)
     


//Метод map - так же перебол всех елементов, но вызывает новый массив и формирует его из резульатов колбек функции
const myArray2 = [1, 2, 3];
console.log(myArray);

const newArray = myArray2.map(el => console.log(el * 3));       
console.log(myArray2)
console.log(newArray)


//Деструктуризация обьектов - обьявленние новых переменных и присваивание значений на основе значений обьекта
const userProfile = {
    name2: 'Artem',
    commentsQty: 23,
    hasSignedAgreement: false,
}
const {name2, commentsQty} = userProfile;
const {hasSignedAgreement} = userProfile;

console.log(name2) // Artem
console.log(commentsQty) // 23


//деструктуризация массивов
const fruits = ['Banana', 'Apple'];

const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne); // Banana
console.log(fruitTwo); // Apple


//деструктуризация в функциях

const userInfo = ({name2, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name2} has no comments`
    }
    return `User ${name2} has ${commentsQty} comments`
}
userInfo(userProfile); // User Artem has 23 comments



//Циклы в массиве сравнение с forEach

const myArr = ['first', 'second', 'third'];   //сложный синтаксис, в котором можно легко допустить ошибку
for(let i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
}

const myArr2 = ['first', 'second', 'third'];     //рекомендуемый метод 
myArr2.forEach((element, index) => {
    console.log(element, index)       //получаем елементы и индексы
})




//цикл for in - перебор всех свойств обьектов 

const myObject = {
    x: 10,
    y: true,
    z: 'adc'
}
for(let key in myObject) {
    console.log(key, myObject[key])
}


//цикл for of - перебор всех елементов
const myString = 'Artem';

for(let letter of myString) {
    console.log(letter); //вывод каждого символа с новой строки из myString 
}














