import { Request, Response } from "express";
import AWS from "aws-sdk";
import { ListObjectsV2Request } from "aws-sdk/clients/s3";

async function home(req: Request, res: Response) {
  const s3 = new AWS.S3({ apiVersion: '2006-03-01', region: process.env.AWS_REGION });

  const params: ListObjectsV2Request = {
    Bucket: process.env.AWS_S3_BUCKET as string,
  };

  const result = await s3.listObjectsV2(params).promise();

  return res.status(200).json({ 
    status: 'Server Started',
    result: result?.Contents?.map(item => item.Key)
  });
}

export { home };