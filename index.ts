type UniqueId = number;

interface Author {
  id: UniqueId;
  firstName: string;
  lastName: string;
}

interface Book {
  id: UniqueId;
  title: string;
  author: Author;
  isAvailale: boolean;
}

const author01:Author = {
  id:1,
  firstName: "John",
  lastName: "Wick"
}

const book01:Book = {
  id:1,
  title: "How to care for dogs",
  author: author01,
  isAvailale: true
}

const checkAvailable = (book:Book) => {
  return book.isAvailale ? "available" : "currently out on loan";
}

console.log (`The book ${book01.title} by author ${book01.author.lastName},${book01.author.firstName[0]} is ${checkAvailable(book01)}`);