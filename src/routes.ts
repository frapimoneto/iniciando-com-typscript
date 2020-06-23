import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'frapimoneto@gmail.com',
    password: '1234567',
    techs: ['Node', 
    'ReactJs', 
    'React Native',
    { title: 'Javascript', experience: 100 }
  ]
  });

  return response.json({ message: 'Hello World' });
}