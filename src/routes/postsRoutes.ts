import { Router, Request, Response } from 'express';

import Post from '../models/Post';

class postsRoutes{
    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public async getPosts(req: Request, res: Response) : Promise<void>{

        const post = await Post.find();
        res.json({Post : post});
    }

    public async postPosts(req: Request, res: Response): Promise<void>{

        
        const newPost = new Post(req.body);
        await newPost.save();

        res.json({status: res.status, data:newPost});
    }

    public async putPosts(req: Request, res: Response): Promise<void>{

        const {email}= req.body;
        const post = await Post.findOneAndUpdate({email}, req.body);
        res.json({status: res.status, data:post});
    }

    public async deletePosts(req: Request, res: Response): Promise<void>{
        const {email}= req.body;
        const post = await Post.findOneAndRemove({email}, req.body);
        res.json({status: res.status, data:post});
    }

    routes(){
        this.router.get('/', this.getPosts);
        this.router.post('/', this.postPosts);
        this.router.put('/', this.putPosts);
        this.router.delete('/', this.deletePosts);
    }
}

const postRoutes = new postsRoutes();

export default postRoutes.router;