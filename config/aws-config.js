const AWS = require("aws-sdk");

// Directly setting credentials (not via .env)
AWS.config.update({region: "eu-north-1"});

const s3 = new AWS.S3();
const S3_BUCKET = "sampleaman-01bucket";

module.exports = { s3, S3_BUCKET };
