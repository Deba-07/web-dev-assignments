const books = [
    {
        title: "The Great Gatesby",
        author: "F. Scott Fitzgerald",
        year: 1925,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
    },
    {
        title: "Who are You?",
        author: 'George Orwell',
        year: 1949,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813
    },
];
function sortTitles(titles){
    titles.sort();
    console.log(titles.join(", "));
}
function extractTitle(books, callback){
    const titles = books.map((book) => book.title);
    callback(titles);
}
extractTitle(books, sortTitles);