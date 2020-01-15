import AWS from "aws-sdk";

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.Converter();

  return dynamoDb[action](params).promise();
}
