import express from 'express';
import path from 'path';
const app = express(); //express
const PORT = process.env.PORT || 8655;

// app.use(express.static(path.join(__dirname, 'public', 'build')))
app.use(express.static(path.join(__dirname, '..', 'public', 'build')));

try {
    app.listen(PORT, () => {
        console.log(`Server listen on http://localhost:${PORT}`)
    })
} catch (err) {
    console.log(err)
}