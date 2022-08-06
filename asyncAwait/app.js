/*
//Асинхронная функция 
async function asyncFn() {               //если использовать такой синтаксис то необходимо ставить async перед словом function
    //Всегда возвращает промис
}

const asyncFn1 = async () => {           //async стоит перед началом стрелочной функции, т.е перед ()
    //всегда возвращает промис 
}
*/

//Пример 1
const asyncFn = async () => {
  return "Success";
};
asyncFn();

//Пример 2
const asyncFn2 = async () => {
  return "Success";
};

asyncFn2().then((value) => console.log(value)); //значением переменной value будет строка 'Seccess'

//Пример 3 с ошибкой
const asyncFn3 = async () => {
  throw new Error("There was an error");
};
asyncFn3()
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message)); //there was an error

//AWAIT
/*
const asyncFnc = async () => {         //внутри ассинхронных функций можно ожидать результатов промисов
    await <Promise>     
}
*/

const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFnc2 = async () => {
  console.log("Timer starts");
  const startTime = performance.now(); //засекает время
  await timerPromise(); // на этом шаге мы ожидаем и не двигаемся дальше
  const endTime = performance.now();
  console.log("Timer ended", (endTime = startTime));
};

/* then chain VS async/await */

const makeSmthAsync = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(Object.keys(data));
      return Object.keys(data);
    })
    .then((array) => array.filter((item) => item.length < 6))
    .catch((error) => console.log(error.message));
};

const makeSmthAsync2 = async () => {
  let data;

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    data = await response.json();
  } catch (error) {
    console.log(error.message);
  }

  const array = Object.keys(data);
  const result = array.filter((item) => item.length < 6);
  console.log(result);
};

makeSmthAsync2();
