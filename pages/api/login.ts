import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const secret = 'q8C06viMMrzWNWFd2kr8KCDz8ihw5ajazS1hWsFZFlbaRO4wkjO9nsdARmc18VRI'; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
  
    const { username, password } = req.body;

    if (username  && password ) {
    
      const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
