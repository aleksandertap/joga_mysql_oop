const express = require('express');
const db = require('./utils/db'); // Adjust path if needed

const app = express();
const PORT = 3025;
app.use(express.json());

const articleRouter = require('./routers/article');
const authorRouter = require('./routers/author');

app.use('/', authorRouter);
app.use('/', articleRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});