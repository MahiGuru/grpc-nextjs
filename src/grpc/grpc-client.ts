import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/generated/user';
import path from 'path';

const PROTO_PATH = path.join(process.cwd(), './src/proto/user.proto');

console.log(PROTO_PATH);

// suggested options for similarity to loading grpc.load behavior
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  defaults: true,
  oneofs: true,
});

const clientService = (
  grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
).userPackage;

export const { UserServiceRoutes } = clientService;
