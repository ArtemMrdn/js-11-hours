import sumNumbers from './moduleOne.mjs'   // импорт из другого файла
import {name, mult} from './moduleOne.mjs' // импорт нескольких, имена должны совпадать
const res1 = sumNumbers(10, 2);
console.log(res1);
console.log(mult(7, 10));
console.log(name)


    