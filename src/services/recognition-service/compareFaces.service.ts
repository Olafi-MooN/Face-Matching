import AWS from "aws-sdk";
import { CompareFacesRequest } from "aws-sdk/clients/rekognition";
import { ICompareFaceProps } from "../../models/recognition";

async function compareFacesAsync({bucket, photo_source, photo_target}: ICompareFaceProps) {

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

  return new Promise((resolve, reject) => { 
    client.compareFaces(params, function (err, response) {
      if (err) reject(err);
      else resolve(response);
    });
  })
}

export { compareFacesAsync };