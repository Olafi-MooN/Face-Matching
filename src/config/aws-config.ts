const config: (_config?: AWS.S3.ClientConfiguration) => AWS.S3.ClientConfiguration = (_config) => {
  return {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    ..._config
  } as AWS.S3.ClientConfiguration
}

export { config };