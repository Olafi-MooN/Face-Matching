import AWS from "aws-sdk";
import { v4 } from 'uuid';

const uploadImageToS3 = async (base64File: string) => {
  const s3 = new AWS.S3({ apiVersion: "2006-03-01", region: process.env.AWS_REGION });

  const params: AWS.S3.PutObjectRequest = {
    Bucket: process.env.AWS_S3_BUCKET as string,
    Key: v4(),
    Body: base64File,
  };

  const data = await s3.upload(params).promise();
  return data;
}

export { uploadImageToS3 };