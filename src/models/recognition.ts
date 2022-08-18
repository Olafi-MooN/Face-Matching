type IUploadImageProps = {
  base64File: string;
}

type ICompareFaceProps = {
  bucket: string;
  photo_source: string;
  photo_target: string;
}

export {
  ICompareFaceProps,
  IUploadImageProps
}