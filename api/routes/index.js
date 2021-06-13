
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

    app.get('/', (req, res) => {
        return res.status(200).json({ message: 'API utilizando Babel ativa.'});
    });
    
}