// app.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Todo = require("./models/todo");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "HH99";
const User = require("./models/user")

mongoose.connect("mongodb://localhost/todo-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

app.use("/api", bodyParser.json(), router);
app.use("/api", express.urlencoded({ extended: false }), router);
app.use(express.static("./assets"));
app.use(cookieParser());

router.get("/", (req, res) => {
  res.send("Hi!");
});

router.post("/todos", async (req, res) => {
  const { value } = req.body;
  const maxOrderTodo = await Todo.find().sort("-order").exec();
  //const maxOrderTodo = await Todo.findOne().sort("-order").exec();
  let order = 1;

  if(maxOrderTodo){
    order = maxOrderTodo.order + 1;
  }

  const todo = new Todo({value, order});
  await todo.save();

  res.send({ todo });
})

router.patch("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const { order } = req.body;
  
  const currentTodo = await Todo.findById(todoId);
  if(!currentTodo){ throw new Error("존재하지 않는 todo data입니다.") };
  if(order){
    const targetTodo = await Todo.findOne({order}).exec();
    if(targetTodo){
      targetTodo.order = currentTodo.order;
      await targetTodo.save();
    }
    currentTodo.order = order;
  }
  await currentTodo.save();
});

router.delete("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  
  const todo = await Todo.findById(todoId).exec();
  await todo.delete();

  res.send({msg: "target deleted"});
})

router.put("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const { order, value, done } = req.body;

  const todo = await Todo.findById(todoId);

  if(order){
    const targetTodo = await Todo.findOne({order}).exec();
    if(targetTodo){
      targetTodo.order = todo.order;
      await targetTodo.save();
    }

    todo.order = order;
  } else if(value) {
    todo.value = value;
  } else if (done !== undefined){
    todo.doneAt = done ? new Date() : null;
  }

  await todo.save();
  res.send({});
})

router.get("/todos", async (req, res) => {
  const todos = await Todo.find().sort("-order").exec();
  res.send ({ todos });
})

let session = {}
router.get("/set", (req, res) => {
  const name = "sparta";
  const uniqueKey = Date.now();

  session[uniqueKey] = name;
  req.cookies('sessionKey', uniqueKey);
  return res.status(200).end();
})

router.get("/get", (req, res) => {
  const { sessionKey } = req.cookies;
  const name = session[sessionKey];
  return res.status(200).json({name});
})

function createAccessToken(id){
  const accessToken = jwt.sign(
    {id : id},
    SECRET_KEY,
    { expiresIn : '10s'}
  );
  return accessToken;
}

function createRefreshToken(){
  const refreshToken = jwt.sign(
    {},
    SECRET_KEY,
    { expiresIn : '7d'}
  );

  return refreshToken;
}

mytoken = {};

router.get("/set_token/:id", (req, res) => {
  const id = req.params.id;
  const at = createAccessToken(id);
  const rt = createRefreshToken();

  mytoken[refreshToken] = id;
  res.cookie('accessToken', at);
  res.cookie('refreshToken', rt);

  return res.status(200).send({"msg" : "token is created"})
})

router.get("get_token", (req, res) => {
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

})

app.listen(8080, () => {
  console.log("서버가 켜졌어요!");
});