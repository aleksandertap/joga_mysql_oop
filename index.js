const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3025;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "thisismysecretkey",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
    resave: false,
  })
);

const articleRouter = require("./routers/article");
const authorRouter = require("./routers/author");
const userRouter = require("./routers/user");

app.use("/", authorRouter);
app.use("/", articleRouter);
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
