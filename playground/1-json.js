const fs = require('fs')
// const book = {
//   title: 'Ego is my Enemy',
//   author: 'pavan'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseJSON = JSON.parse(bookJSON)
// console.log(parseJSON.title)

// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.name)

data.name = 'pavab';
data.age = '23';

const detailsJSON = JSON.stringify(data)

console.log(detailsJSON)
fs.writeFileSync('1-json.json', detailsJSON)