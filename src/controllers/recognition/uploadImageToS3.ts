import AWS from "aws-sdk";
import { Request, Response } from "express";
import { v4 } from 'uuid';

type compareFaceProps = {
  base64File: string;
}

async function uploadImageToS3(req: Request, res: Response) {
  const { base64File }: compareFaceProps = req.body;

  const s3 = new AWS.S3({ apiVersion: "2006-03-01", region: process.env.AWS_REGION });

  const params: AWS.S3.PutObjectRequest = {
    Bucket: process.env.AWS_S3_BUCKET as string,
    Key: v4(),
    Body: base64File,
  };

  const data = await s3.upload(params).promise();

  return res.status(200).json({
    data
  });
}

export { uploadImageToS3 };