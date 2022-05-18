import express from 'express';
const app = express(); //express

const PORT = process.env.PORT || 6565; //connect to port 6565

app.get('/', (req, res) => {
    try {
        res.send('we get it')
    } catch (error) {
        res.send(`error from server: ${error}`)
    }
})
try {
    app.listen(PORT, () => {
        console.log(`Server listen on http://localhost:${PORT}`)
    })
} catch (err) {
    console.log(err)
}