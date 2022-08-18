import { Request, Response } from "express";
import { RecognitionService } from "../../services/recognition-service";

type compareFaceProps = {
  bucket: string;
  photo_source: string;
  photo_target: string;
}

async function compareFaces(req: Request, res: Response) {
  const compareFace: compareFaceProps = req.body;
  const result = RecognitionService.compareFacesAsync(compareFace);
  return res.status(200).json(result);
}

export { compareFaces };