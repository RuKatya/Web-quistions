"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default(); //express
const PORT = process.env.PORT || 8655;
// app.use(express.static(path.join(__dirname, 'public', 'build')))
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public', 'build')));
try {
    app.listen(PORT, () => {
        console.log(`Server listen on http://localhost:${PORT}`);
    });
}
catch (err) {
    console.log(err);
}
