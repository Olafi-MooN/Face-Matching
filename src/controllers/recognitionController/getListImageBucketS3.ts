import { Request, Response } from "express";
import { RecognitionService } from "../../services/recognition-service";

async function getListImageBucketS3(req: Request, res: Response) {
  const result = await RecognitionService.getListImageBucketS3();
  return res.status(200).json(result);
}

export { getListImageBucketS3 };