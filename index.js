require("dotenv").config();
const express = require("express");
const cors = require("cors");


const authRoutes = require("./routes/auth.routes");
const booksRoutes = require("./routes/books.routes");

// Db connection
const DbConnect = require("./utils/dbConnect");
DbConnect();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", booksRoutes);

const port = process.env.PORT || 5500;
app.listen(port, function () {
    console.log("Server running on localhost:" + port);
});
