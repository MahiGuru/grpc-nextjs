import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceRoutesClient as _userPackage_UserServiceRoutesClient, UserServiceRoutesDefinition as _userPackage_UserServiceRoutesDefinition } from './userPackage/UserServiceRoutes';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  userPackage: {
    Empty: MessageTypeDefinition
    UserListResponse: MessageTypeDefinition
    UserReqId: MessageTypeDefinition
    UserRequest: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
    UserServiceRoutes: SubtypeConstructor<typeof grpc.Client, _userPackage_UserServiceRoutesClient> & { service: _userPackage_UserServiceRoutesDefinition }
  }
}

