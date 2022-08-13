const AWS = require("aws-sdk");
export default async function handler(req, res) {
  const s3 = new AWS.S3();
  const params = {
    Bucket: "let-me-see-if-i-can-upload",
    Key: "i-am-bucket",
  };
  let url = await s3.getSignedUrlPromise("putObject", params);
  return res.status(200).json({ url: url });
}
