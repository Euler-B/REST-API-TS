import { Schema, Types, model, Models } from "mongoose";
import { Storage } from "../interfaces/storage";

const StorageSchema = new Schema<Storage>(
    {
        filename: {
            type: String,
        },
        idUser: {
            type: String,
        },
        path: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const StorageModel = model("storage", StorageSchema);

export default StorageModel;