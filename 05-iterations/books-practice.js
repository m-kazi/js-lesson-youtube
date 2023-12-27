const books = [
    {
        title: "Book One",
        genre: "History",
        publish: 1987,
        edition: 2010,
    },
    {
        title: "Book Two",
        genre: "Science",
        publish: 2011,
        edition: 2016,
    },
    {
        title: "Book Three",
        genre: "History",
        publish: 1990,
        edition: 2012,
    },
    {
        title: "Book Four",
        genre: "Fiction",
        publish: 2015,
        edition: 2019,
    },
    {
        title: "Book Five",
        genre: "Science",
        publish: 2015,
        edition: 2017,
    },
    {
        title: "Book Six",
        genre: "Fiction",
        publish: 2015,
        edition: 2020,
    },
];

// let userBooks = books.filter((bk) => bk.genre === "History");
userBooks = books.filter((bk) => {
    return bk.edition >= 2019;
});

console.log(userBooks);
