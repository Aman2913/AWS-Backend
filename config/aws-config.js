const AWS = require("aws-sdk");

// Directly setting credentials (not via .env)
AWS.config.update({
  region: "eu-north-1",
  accessKeyId: "AKIASFJ3WPGPKQ2RZQVM",
  secretAccessKey: "y9XFauN6gM5mpvQp9dViwK705HztepBfYe03JhWS",
});

const s3 = new AWS.S3();
const S3_BUCKET = "sampleaman-01bucket";

module.exports = { s3, S3_BUCKET };
