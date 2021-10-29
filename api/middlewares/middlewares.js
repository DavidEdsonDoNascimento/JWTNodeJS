import * as jwt from '../config/jwt';
import DB from '../models';

export default class Middlewares 
{

    static async authentication(req, res, next) 
    {
        try {
        
            if (!req?.headers?.authorization) {
                throw new Error("Headers authorization não enviado na requisição.")
            }
            
            const [, token] = req.headers.authorization.split(' ');
            
            console.log(req.headers.authorization);

            const payload = jwt.verify(token);
            const user = await DB.Users.findOne({ id: payload.user })

            if(!user){
                throw new Error(`Usuário de token ${token} não encontrado.`);
            }
            
            next();

        } catch (error) {
            return res.status(400).json({ error: error.message});
        }
    }
}