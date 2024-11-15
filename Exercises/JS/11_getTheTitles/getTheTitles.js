const getTheTitles = function(books) {
    let array = [];
    for (let i = 0; i < books.length; i++)
    {
        array.push(books[i]["title"]);
    }
    return array;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
