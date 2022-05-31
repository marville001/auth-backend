const Books = require("../models/books.models");
const catchAsync = require("../utils/catchAsync");

module.exports = {
    getBooksController: catchAsync(async (req, res) => {
        const books = await Books.find();

        res.send({ success: true, books });
    }),

	addBookController: catchAsync(async (req, res) => {
		
		const { name, pages, author, image} = req.body;

        if (!pages || !name || !author || !image)
            return res
                .status(400)
				.send({ success: false, message: "All fields are required" });
		
        const book = await Books.create(req.body);

        await book.save({ validateBeforeSave: false });

        res.send({
            success: true,
            book,
            message: "Book added successfully!",
        });
    }),
};
