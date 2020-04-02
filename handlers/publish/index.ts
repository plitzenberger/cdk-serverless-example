import * as aws from "aws-sdk";
const sqs = new aws.SQS();

exports.handler = async (_event: any) => {
  const randomInt = Math.floor(Math.random() * Math.floor(10000)).toString();

  const params = {
    QueueUrl: process.env.QUEUE_URL as string,
    MessageBody: randomInt
  };

  await sqs.sendMessage(params).promise();

  return {
    statusCode: 200,
    body: `Successfully pushed message ${randomInt}!!`
  };
};
