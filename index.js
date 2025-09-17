const express = require("express");
const session = require("express-session");
const path = require("path");

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

const hbs = require("express-handlebars");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaiultLayout: "main",
    layoutsDir: __dirname + "/views/layouts/",
  })
);

app.use(express.static("public"));

const articleRouter = require("./routers/article");
const authorRouter = require("./routers/author");
const userRouter = require("./routers/user");

const adminRouter = require('./routers/admin/admin');
app.use('/admin', adminRouter);

app.use('/', articleRouter);
app.use('/author/', authorRouter);
app.use('/users/', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
