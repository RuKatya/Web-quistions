const express = require('express');
const app = express(); //express
const path = require('path')

const PORT = process.env.PORT || 6565; //connect to port 6565

app.use(express.static(path.join(__dirname, 'public', 'build')));
// app.get('/', (req, res) => {
//     try {
//         res.send('we get it')
//     } catch (error) {
//         res.send(`error from server: ${error}`)
//     }
// })

try {
    app.listen(PORT, () => {
        console.log(`Server listen on http://localhost:${PORT}`)
    })
} catch (err) {
    console.log(err)
}