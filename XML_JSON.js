// Задание 1.

// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

//  XML:

// <list>
//   <student>
//     <name lang="en">
//       <first>Ivan</first>
//       <second>Ivanov</second>
//     </name>
//     <age>35</age>
//     <prof>teacher</prof>
//   </student>
//   <student>
//     <name lang="ru">
//       <first>Петр</first>
//       <second>Петров</second>
//     </name>
//     <age>58</age>
//     <prof>driver</prof>
//   </student>
// </list>
// JS-объект:

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }

const parse = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student2>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student2>
</list>
`;

const xmlDom = parse.parseFromString(xmlString, 'text/xml');

const listNode = xmlDom.querySelector('list');
const studentNode = listNode.querySelector('student');
const nameNode = studentNode.querySelector('name');
const firstNode = nameNode.querySelector('first');
const secondNode = nameNode.querySelector('second');
const ageNode = studentNode.querySelector('age');
const profNode = studentNode.querySelector('prof');

const student2Node = listNode.querySelector('student2');
const name2Node = student2Node.querySelector('name');
const first2Node = name2Node.querySelector('first');
const second2Node = name2Node.querySelector('second');
const age2Node = student2Node.querySelector('age');
const prof2Node = student2Node.querySelector('prof');

// Получим аттрибуты
const langAttr = nameNode.getAttribute('lang');
const lang2Attr = name2Node.getAttribute('lang');

const result = {
   list: [
      { name: firstNode.textContent + ' ' + secondNode.textContent, age: Number(ageNode.textContent), prof: profNode.textContent, lang: langAttr },
      {name: first2Node.textContent + ' ' + second2Node.textContent, age: Number(age2Node.textContent), prof: prof2Node.textContent, lang: lang2Attr}
   ]
}

console.log('result', result)


// Задание 2.

// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

// JSON:

// {
//  "list": [
//   {
//    "name": "Petr",
//    "age": "20",
//    "prof": "mechanic"
//   },
//   {
//    "name": "Vova",
//    "age": "60",
//    "prof": "pilot"
//   }
//  ]
// }
// JS-объект:

// {
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic' },
//     { name: 'Vova', age: 60, prof: 'pilot' },
//   ]
// }

const jsonString = `{
  "list": [
    {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
    },
    {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
    }
  ]
}`;

// console.log('jsonString', jsonString)

const data = JSON.parse(jsonString);
const list = data.list;

const resultJson = {
  list: [
    {
      name: list[0].name,
      age: Number(list[0].age),
      prof: list[0].prof,
    },
    {
      name: list[1].name,
      age: Number(list[1].age),
      prof: list[1].prof
    }
  ]
}
console.log('resultJson', resultJson);