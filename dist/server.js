"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default(); //express
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 6565; //connect to port 6565
app.use('/', express_1.default.static(path_1.default.join(__dirname, '..', 'public', 'build')));
// app.get('/', (req, res) => {
//     try {
//         res.send('we get it')
//     } catch (error) {
//         res.send(`error from server: ${error}`)
//     }
// })
try {
    app.listen(PORT, () => {
        console.log(`Server listen on http://localhost:${PORT}`);
    });
}
catch (err) {
    console.log(err);
}
