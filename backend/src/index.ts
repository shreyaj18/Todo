import express from "express";
import cors from "cors"
import { Todo } from "./ds";
const app = express()

app.use(cors())
app.use(express.json())

app.post("/todo",async (req,res)=>{
    const body= req.body

    await Todo.create({
        title: body.title,
        description: body.description,
        done: false

    })
    res.json({
        msg:"todo createdd"
    })
})

app.get("/todos", async(req,res)=>{
    const todos = await Todo.find({})
    res.json({
        todos
    })
})

app.put("/done", async(req,res)=>{
    
    await Todo.updateOne({
        _id: req.body.id
    }, {
        done: true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.delete("/:id",async(req,res)=>{
    const del = await Todo.findByIdAndDelete(req.params.id);

    if(!del) {
        res.status(404).json({
            msg:"not found"
        })
    }

    res.status(200).json({
        msg: "deleted"
    })

    
})

app.listen(3000)