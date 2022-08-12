import { Request, Response } from "express";

async function home(req: Request, res: Response) {
  return res.status(200).json({ status: 'Server Started' });
}

export { home };