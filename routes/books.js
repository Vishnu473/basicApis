const express = require("express");
const router = express.Router();

const books = [
  {
    id: 1,
    title: "Whispers of Eternity",
    desc: "An eternal journey through mystical realms.",
    year: 2003,
    price: 15.99,
  },
  {
    id: 2,
    title: "The Timekeeper's Quest",
    desc: "A thrilling adventure across time.",
    year: 2005,
    price: 12.99,
  },
  {
    id: 3,
    title: "Shadows of the Forgotten",
    desc: "Secrets of the ancient world uncovered.",
    year: 2008,
    price: 14.5,
  },
  {
    id: 4,
    title: "Echoes of the Past",
    desc: "History's secrets come to life.",
    year: 2010,
    price: 16.0,
  },
  {
    id: 5,
    title: "Beyond the Horizon",
    desc: "Exploring the mysteries of the universe.",
    year: 2013,
    price: 18.2,
  },
  {
    id: 6,
    title: "Whispers of the Night",
    desc: "A haunting tale of love and loss.",
    year: 2016,
    price: 13.75,
  },
  {
    id: 7,
    title: "The Last Guardian",
    desc: "The final battle for the world's fate.",
    year: 2018,
    price: 19.99,
  },
  {
    id: 8,
    title: "Embers of Dawn",
    desc: "Rising from the ashes of a fallen world.",
    year: 2019,
    price: 17.49,
  },
  {
    id: 9,
    title: "Chronicles of the Future",
    desc: "A vision of what lies ahead.",
    year: 2021,
    price: 20.0,
  },
  {
    id: 10,
    title: "Voyage to the Stars",
    desc: "An epic journey through space.",
    year: 2024,
    price: 21.5,
  },
];

//Get a specific book by id
router.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);
  if (isNaN(parsedId))
    return res.status(400).send("Bad Request. Enter Correct ID");
  const findBook = books.find((book) => book.id === parsedId);
  if (!findBook) {
    return res.status(404).send(`Book didnot found with id: ${parsedId}`);
  } else {
    return res.status(200).send(findBook);
  }
});

//Get a book by search word in title/desc, by <price, by ==year
router.get("/books", (req, res) => {
  console.log(req.query);
  const {
    query: { search, year, price },
  } = req;

  const parsedYear = parseInt(year);
  const parsedPrice = parseFloat(price);
  if (!search && isNaN(parsedYear) && isNaN(parsedPrice))
    return res.status(200).send(books);

  let filteredBooks = [];
  if (search) {
    filteredBooks = filteredBooks.concat(
      books.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.desc.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  if (!isNaN(parsedYear)) {
    filteredBooks = filteredBooks.concat(
      books.filter((book) => book.year === parsedYear)
    );
  }

  if (!isNaN(parsedPrice)) {
    filteredBooks = filteredBooks.concat(
      books.filter((book) => book.price <= parsedPrice)
    );
  }
  filteredBooks = [...new Set(filteredBooks)];
  res.status(200).send(filteredBooks);
});

router.post("/books", (req, res) => {
  const { body } = req;

  const newBook = { id: books.length + 1, ...body };
  books.push(newBook);
  return res.status(201).send(newBook);
});

router.patch("/books/:id", (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return res.status(400).send("Bad Request");
  }
  const findIndex = books.findIndex(book => book.id === parsedId);
  if(findIndex === -1){
    return res.status(404).send('No record matched with the id')
  }
  else{
    books[findIndex] = [{...books[findIndex], ...body}];
    return res.status(200).send({msg:"Successfully updated"});
  }
});

router.delete('/books/:id', (req,res) => {
    const {id} = req.params;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)){
        return res.status(400).send("Bad Request")
    }
    const findBookIndex = books.findIndex(book => book.id === parsedId);
    if(findBookIndex === -1) return res.status(404).send('No book with given id')
    books.splice(findBookIndex,1);
    return res.status(200).send({msg:"deleted Successfully"});
})

module.exports = router;
