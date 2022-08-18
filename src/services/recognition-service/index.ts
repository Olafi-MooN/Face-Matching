import { compareFacesAsync } from "./compareFaces.service";
import { getListImageBucketS3 } from "./getListImageBucketS3.service";
import { uploadImageToS3 } from "./uploadImageToS3.service";

const RecognitionService = {
  compareFacesAsync,
  uploadImageToS3,
  getListImageBucketS3
}

export { RecognitionService }