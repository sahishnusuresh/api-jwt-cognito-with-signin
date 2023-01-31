import { APIGatewayProxyHandlerV2WithJWTAuthorizer } from "aws-lambda";

export const main= async () => {
  return {
    statusCode: 200,
    body: `Hello user!`,
  };
};