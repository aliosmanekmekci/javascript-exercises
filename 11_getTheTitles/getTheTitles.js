const getTheTitles = function (books) {
    let map = books.map(book => book.title);
    return map;
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const result = getTheTitles(books);

console.log(result);

// Do not edit below this line
module.exports = getTheTitles;
