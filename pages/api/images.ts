import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const imagesDirectory = path.join(process.cwd(), 'public/carousel-images');
  const filenames = fs.readdirSync(imagesDirectory).filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
  res.status(200).json(filenames);
};
