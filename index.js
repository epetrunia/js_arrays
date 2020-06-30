// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// /**
//  *
//  * @type {number[]}
//  */
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// /**
//  *
//  * @type {number[]}
//  */
// const array = [1, 2, 3];
// const reversed = array.reverse();

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// /**
//  *
//  * @type {number[]}
//  */
// const array = [1, 2, 3];
// array.push(4, 5, 6);
// alert(array);

// 4.  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// /**
//  *
//  * @type {number[]}
//  */
// const array = [1, 2, 3];
// array.unshift(4, 5, 6);
// alert(array);

// 5.  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// /**
//  *
//  * @type {string[]}
//  */
// const array = ['js', 'css', 'jq'];
// alert(array.shift());

// 6.  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// /**
//  *
//  * @type {string[]}
//  */
// const array = ['js', 'css', 'jq'];
// alert(array.pop());

// 7.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// /**
//  *
//  * @type {number[]}
//  */
// const array1 = [1, 2, 3, 4, 5];
// const array2 = array1.slice(0, 3);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// /**
//  *
//  * @type {number[]}
//  */
// const array1 = [1, 2, 3, 4, 5];
// const array2 = array1.slice(3);

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// /**
//  *
//  * @type {number[]}
//  */
// const array = [1, 2, 3, 4, 5];
// array.splice(1, 2);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// /**
//  *
//  * @type {number[]}
//  */
// const array1 = [1, 2, 3, 4, 5];
// const array2 = array1.splice(1, 3);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// /**
//  *
//  * @type {number[]}
//  */
// const array1 = [1, 2, 3, 4, 5];
// array1.splice(3, 0, 'a', 'b', 'c');

//12.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// /**
//  *
//  * @type {number[]}
//  */
// const array1 = [1, 2, 3, 4, 5];
// array1.splice(1, 0, 'a', 'b');
// array1.splice(6, 0, 'c');
// array1.splice(8, 0, 'e');

//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// /**
//  *
//  * @type {number[]}
//  */
// const array = [3, 4, 1, 2, 7];
// array.sort();

// 14.  Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
/**
 *
 * @type {{css: string, jq: string, js: string}}
 */
const obj = {js: 'test', jq: 'hello', css: 'world'};
alert(Object.keys(obj));