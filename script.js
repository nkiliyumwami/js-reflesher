const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

/* function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// 01.Destructuring: Object
const books = getBooks();
const book = getBook(3);

// const title = book.title;
// const author = book.author;

const { title, author, genres, pages, publicationDate } = book;

//02.Destructuring array: here the genres
// const primaryGenres = genres[0]
// const secondaryGenres = genres[1]

const [primaryGenres, secondaryGenres] = genres;

primaryGenres;
secondaryGenres;

console.log(author, title, primaryGenres, secondaryGenres);

//Rest & Spread Operator
//01.Rest
const [firstGenre, secondSecond, ...otherGenres] = genres;
otherGenres;

//02. Spread Operator on the array
//Here we want to create a new array of all genres plus new additional genres(karate and judo)
const newGenres = [...genres, "karate", "judo"];
newGenres;

//03.Spread Operator on objects
//Here we create an updated book wthich have the current properties of the current book plus new properties
//Here we add moviePublicationDate
const updatedBook = { ...book, MoviePublicationDate: "2023-06-06" };
updatedBook;

//update properties: Here we change/update pages
const updatedBookPages = { ...updatedBook, pages: 500 };
console.log(updatedBookPages);

//04.Template litterals
const summary = `The ${title} has ${pages} pages, and has been published in ${
  publicationDate.split("-")[0]
}`;
summary;

// 05.Tenary operator
const getYear = (string) => string.split("-")[0];
const betterSummary = `The ${title} is a ${
  pages > 1000 ? "big" : "small"
} book as it has ${pages} pages. Thus it has been published in ${getYear(
  publicationDate
)}`;
betterSummary;

//06.Arroy functions
//Write a fx to format the year
// const getYear = (string) => string.split("-")[0];

console.log(getYear(publicationDate));

//Short Circuiting and logical operator
//When the first value is true, it will return the second
console.log(true && false);
console.log(true && "something");
//when the first value is false, it return false and deosn't look at the second
console.log(false && "something");

console.log(true || false);
console.log(true || false);
console.log(false || "something");
console.log(0 || "something");

//falsy: 0, " ", null, undefined : two trufy; you get the second one
console.log("something" && "peter");
console.log(0 && "something");

// console.log(book.reviews.librarything.reviewsCount);

// const wrongCount = book.reviews.librarything.reviewsCount || "no data";
// console.log(wrongCount);

//the above is wrong because the answer should be zero not 'no data'
//to solve that we use another JS expression: which is: ' ??'

// const realCount = book.reviews.librarything.reviewsCount ?? "no data";
// console.log(realCount);

//07.Optional chaining: ?
//our book array has 2 kinds of reviews: let us write a function to get the sum of those both reviews
const getTotalReviewCount = (book) => {
  console.log(book);
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount;
  console.log(librarything);
  return goodreads + librarything;
};

console.log(getTotalReviewCount(book));

const newData = [
  {
    id: 1,
    name: "Peter",
    checking: 500,
  },
  {
    id: 2,
    name: "John",
    checking: 100,
    savings: 900,
  },
];

function getPersons() {
  return newData;
}

function getPerson(id) {
  return newData.find((d) => d.id === id);
}

const persons = getPersons();
const person = getPerson(1);

console.log(person);

function getTotalBalance(person) {
  const saving = person?.savings ?? 0;
  const checking = person.checking;
  console.log(saving);
  console.log(checking);
  return saving + checking;
}

console.log(getTotalBalance(person));
//to solve this problem we use '??' to assign a default value to the person1.saving:
//if we remove the '?? 0' the answer will be 'NaN'
 */

//08 Functional Array Methods
function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//08.01.Map
//Get all books
const books = getBooks();

//create an array which has all books titles
const titles = books.map((book) => book.title);
console.log(titles);

//create an object containing essential date: titles and author: using parethesis to return an object
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
console.log(essentialData);

//08.02.Filter
//Create an array of books only have more than 500 pages and only have movie adaptation
const longbooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longbooksWithMovie);
longbooksWithMovie;

//Get  the title of adventures books only
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

//08.03.Reduce : Reduce will always reduce the entire array into a one single value
//Let say we want to read all books and we are curious of how many pages we would have to read
//i.e here the solutions will be to add together all pages in books array
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

//08.04.Sort:
//Sort an array: Be carefull be sort as it mutate the original array: it change the original array
const arrayX = [2, 9, 1, 3, 120, 19, 3456];
const sortedAsc = arrayX.sort((a, b) => a - b);
sortedAsc;
arrayX;

const sortedDesc = arrayX.sort((c, d) => d - c);
sortedDesc;
arrayX;

//Sort the entire books array by the number of pages
const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

//Working with Arrays
//How to Delete/Add/Update element on an array without changing the original onw
//01. Add a book object to the array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secret",
  author: "J.K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//02. Remove book object from books
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 2);
booksAfterDelete;

//better way to write the above (with a function)
const deleteBook = (id) => {
  const result = booksAfterAdd.filter((book) => book.id !== id);
  return result;
};

console.log(deleteBook(3));

//03. Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 67890 } : book
);
booksAfterUpdate;

//better way to write the above with a function
const updateBook = (id) => {
  const updatedBook = booksAfterDelete.map((book) =>
    book.id === id ? { ...book, pages: 4500 } : book
  );
  return updatedBook;
};
console.log(updateBook(6));
