import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: false
        }
    }, 
    {
        timestamps: true
    }
);

const Recipe = mongoose.model('Recipe', productSchema);

export default Recipe;