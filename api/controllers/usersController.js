import DB from "../models";
import crypto from 'crypto';
import * as jwt from './../config/jwt';

export default class UsersController 
{
    static async sign(req, res)
    {
        try{
            
            const { email, password } = req.body;
            const encryptPassword = crypto.createHash('md5').update(password).digest('hex');
            
            const result = await DB.Users.create({ email: email, password: encryptPassword });
            
            const token = jwt.sign({ user: result.id });
            
            return res.status(200).json({ user: result, token: token });
        }
        catch(err){
            return res.status(400).json(err.message);
        }
    }

    static async login(req, res)
    {
        try{
            
            const [ hashType, hash ] = req.headers.authorization.toString().split(' ');
            
            const [ email, password ] = Buffer.from(hash, 'base64').toString().split(':');

            const encryptPassword = crypto.createHash('md5').update(password).digest('hex');

            const user = await DB.Users.findOne({ email: email, password: encryptPassword});
            const token = jwt.sign({ user: user.id });

            return res.status(200).json({ user: user, token: token });
        }   
        catch(err){
            return res.status(400).json(err.message);
        }
    }

    static async users(req, res)
    {
        try {
            
            const users = await DB.Users.findAll();
            return res.status(200).json({ users: users});
            
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
}