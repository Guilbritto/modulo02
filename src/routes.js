import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Guilherme brito',
    email: 'guilhermebritto.prof@gmail.com',
    password_hash: '12313123123',
  });

  return res.json(user);
});

export default routes;
