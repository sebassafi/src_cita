import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';

//import routes
import postsRoutes from './routes/postsRoutes'


class Server{

    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    public config():void{
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(compression());
    }

    public routes():void{
        this.app.use('/api/post', postsRoutes);
        
    }

    public start():void{
        this.app.listen(this.app.get('port'),() =>{
            console.log('server is listening on port', this.app.get('port'));
        });
    }
}

export {Server};