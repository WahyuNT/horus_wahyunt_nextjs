import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const secret = 'q8C06viMMrzWNWFd2kr8KCDz8ihw5ajazS1hWsFZFlbaRO4wkjO9nsdARmc18VRI'; // Ganti dengan kunci rahasia Anda

export function verifyToken(req: NextApiRequest, res: NextApiResponse, next: () => void) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    // Menyimpan decoded token di request untuk penggunaan lebih lanjut
    req.body.decoded = decoded;
    next();
  });
}
