
import { S3, PutObjectCommand } from "@aws-sdk/client-s3";
const s3Client = new S3({
    forcePathStyle: false, // Configures to use subdomain/virtual calling format.
    endpoint: "https://fra1.digitaloceanspaces.com",
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.SPACES_KEY,
      secretAccessKey: process.env.SPACES_SECRET
    }
});

export async function uploadToBucket(key, body) {
    const bucketParams = {
        Bucket: "frame0",
        Key: key,
        Body: body,
        ACL: "public-read",
        ContentType: "image/png",
    };
    try {
        await s3Client.send(new PutObjectCommand(bucketParams));
    } catch (err) {
        console.log("Error", err);
    }
}