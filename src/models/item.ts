import { Schema, Types, model, Models } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
    {
        brand: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        gas: {
            type: String,
            enum: ["gasoline", "diesel", "electric"],
            equired: true,
        },
        year: {
            type: Number,
            equired: true,
        },
        description: {
            type: String,
            equired: true,
        },
        price: {
            type: Number,
            equired: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ItemModel = model("items", ItemSchema);

export default ItemModel;
