
import bodyParser from 'body-parser';
import cors from 'cors';
import usersRoutes from './usersRoutes';

export const routes = app => {
    
    app.use(
        cors(),
        bodyParser.json() ,
        bodyParser.urlencoded({ extended: true })
    );

    app.use(usersRoutes);

    app
    .get('/', (req, res) => {
        return res.status(200).json({ 
            message: 'API utilizando Babel ativa.',
            existing_routes: [
                'Rotas existentes:',
                 '/heartbeat via método GET: mostra o status da API',
                 '/sign via método POST contendo os parâmetros(email, password): faz o cadastro/assinatura',
                 '/login via método GET contendo o basic username e password no headers: faz o login devolvendo o token de resposta',
                 '/users via método GET contendo o Bearer Token: mostra os usuarios caso o token bater'
            ]
        });
    })
    .get('/heartbeat', (req, res) => {
        return res.status(200).json({ alive: true });
    })
}