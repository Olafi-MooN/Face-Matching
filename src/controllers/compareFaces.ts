import AWS from "aws-sdk";
import { Request, Response } from "express";
import { CompareFacesRequest } from "aws-sdk/clients/rekognition";

type compareFaceProps = {
  bucket: string;
  photo_source: string;
  photo_target: string;
}

async function compareFaces(req: Request, res: Response) {
  const { bucket, photo_source, photo_target }: compareFaceProps = req.body;

  const client = new AWS.Rekognition();

  const params: CompareFacesRequest = {
    SourceImage: {
      S3Object: {
        Bucket: bucket,
        Name: photo_source
      },
    },
    TargetImage: {
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