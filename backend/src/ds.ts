import mongoose, { model } from "mongoose";
import { describe } from "node:test";
import { Schema } from "mongoose";
import { Model } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const uri: string = process.env.URI as string;

mongoose.connect(uri)

const todoSchema = new Schema({
    title: String,
    description: String,
    done: Boolean
})

const Todo = model("Todo", todoSchema)

export{Todo}


