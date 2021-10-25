import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://safi:Prueba123@cluster0.qwhmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);
mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
});