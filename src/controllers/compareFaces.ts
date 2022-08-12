import { Request, Response } from "express";
import AWS from "aws-sdk";
import { CompareFacesRequest } from "aws-sdk/clients/rekognition";

type compareFaceProps = {
  bucket: string;
  photo_source: string;
  photo_target: string;
  bytes_source: string;
  bytes_target: string;
}

async function compareFaces(req: Request, res: Response) {
  const { bucket, photo_source, photo_target, bytes_source, bytes_target }: compareFaceProps = req.body;

  const aws = new AWS.Config({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  })

  const client = new AWS.Rekognition();

  const params: CompareFacesRequest = {
    SourceImage: {
      // Bytes: bytes_source,
      S3Object: {
        Bucket: bucket,
        Name: photo_source
      },
    },
    TargetImage: {
      // Bytes: bytes_target,
      S3Object: {
        Bucket: bucket,
        Name: photo_target
      },
    },
    SimilarityThreshold: 70
  }

  client.compareFaces(params, function (err, response) {
    console.log(params)
    if (err) {
      console.error(err, err.stack);
      return res.status(200).json({
        err
      });
    } else {
      return res.status(200).json({
        response
      });
    }
  });
}

export { compareFaces };