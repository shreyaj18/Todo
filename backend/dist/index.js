"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ds_1 = require("./ds");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    yield ds_1.Todo.create({
        title: body.title,
        description: body.description,
        done: false
    });
    res.json({
        msg: "todo createdd"
    });
}));
app.get("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield ds_1.Todo.find({});
    res.json({
        todos
    });
}));
app.put("/done", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield ds_1.Todo.updateOne({
        _id: req.body.id
    }, {
        done: true
    });
    res.json({
        msg: "Todo marked as completed"
    });
}));
app.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const del = yield ds_1.Todo.findByIdAndDelete(req.params.id);
    if (!del) {
        res.status(404).json({
            msg: "not found"
        });
    }
    res.status(200).json({
        msg: "deleted"
    });
}));
app.listen(3000);
