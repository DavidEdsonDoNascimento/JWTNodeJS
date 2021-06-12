
import bodyParser from 'body-parser';
import usersRoutes from './usersRoutes';
import cors from 'cors';

export const routes = app => {
    
    app.use(cors());
    app.use(bodyParser.json() ,bodyParser.urlencoded({ extended: true }));

    app.use(usersRoutes);

    app.get('/', (req, res) => {
        return res.status(200).json({ message: 'API utilizando babel ativa.'});
    });
    
}