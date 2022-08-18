import { Request, Response } from "express";
import { IUploadImageProps } from "../../models/recognition";
import { RecognitionService } from "../../services/recognition-service";

async function uploadImageToS3(req: Request, res: Response) {
  const { base64File }: IUploadImageProps = req.body;
  const uploadResult = await RecognitionService.uploadImageToS3(base64File);
  return res.status(200).json({
    uploadResult
  });
}

export { uploadImageToS3 };