"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var MONGO_URI = 'mongodb+srv://safi:Prueba123@cluster0.qwhmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default.connect(MONGO_URI || process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
