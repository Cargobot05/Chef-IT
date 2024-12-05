import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Recipe from './models/Recipe.js';

dotenv.config();

const app = express();

app.use(express.json());

app.post("/api/recipes", async (req, res) => {
    const recipe = req.body;

    if (!recipe.name || !recipe.author || !recipe.image) {
        return res.status(400).json({ success: false, message:"Please provide all fields" });
    }

    const newRecipe = new Recipe(recipe);

    try {
        await newRecipe.save();
        res.status(201).json({success: true, data: newRecipe});
    } catch (error) {
        console.error("Error in Creating product: ", error);
        res.status(500).json({ success: false, message: "Server Error"});
    }
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});