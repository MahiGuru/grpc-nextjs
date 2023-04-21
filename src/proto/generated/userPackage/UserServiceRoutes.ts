// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _userPackage_Empty, Empty__Output as _userPackage_Empty__Output } from '../userPackage/Empty';
import type { UserListResponse as _userPackage_UserListResponse, UserListResponse__Output as _userPackage_UserListResponse__Output } from '../userPackage/UserListResponse';
import type { UserReqId as _userPackage_UserReqId, UserReqId__Output as _userPackage_UserReqId__Output } from '../userPackage/UserReqId';
import type { UserRequest as _userPackage_UserRequest, UserRequest__Output as _userPackage_UserRequest__Output } from '../userPackage/UserRequest';
import type { UserResponse as _userPackage_UserResponse, UserResponse__Output as _userPackage_UserResponse__Output } from '../userPackage/UserResponse';

export interface UserServiceRoutesClient extends grpc.Client {
  addUser(argument: _userPackage_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  addUser(argument: _userPackage_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  addUser(argument: _userPackage_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  addUser(argument: _userPackage_UserRequest, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  addUser(argument: _userPackage_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  addUser(argument: _userPackage_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  addUser(argument: _userPackage_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  addUser(argument: _userPackage_UserRequest, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  
  deleteUser(argument: _userPackage_UserReqId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserReqId__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserReqId, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserReqId__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserReqId, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserReqId__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserReqId, callback: grpc.requestCallback<_userPackage_UserReqId__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserReqId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserReqId__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserReqId, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserReqId__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserReqId, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserReqId__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _userPackage_UserReqId, callback: grpc.requestCallback<_userPackage_UserReqId__Output>): grpc.ClientUnaryCall;
  
  editUser(argument: _userPackage_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  editUser(argument: _userPackage_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  editUser(argument: _userPackage_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  editUser(argument: _userPackage_UserRequest, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  editUser(argument: _userPackage_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  editUser(argument: _userPackage_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  editUser(argument: _userPackage_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  editUser(argument: _userPackage_UserRequest, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  
  getAllUsers(argument: _userPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _userPackage_Empty, callback: grpc.requestCallback<_userPackage_UserListResponse__Output>): grpc.ClientUnaryCall;
  
  getUser(argument: _userPackage_UserReqId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserReqId, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserReqId, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserReqId, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserReqId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserReqId, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserReqId, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _userPackage_UserReqId, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceRoutesHandlers extends grpc.UntypedServiceImplementation {
  addUser: grpc.handleUnaryCall<_userPackage_UserRequest__Output, _userPackage_UserResponse>;
  
  deleteUser: grpc.handleUnaryCall<_userPackage_UserReqId__Output, _userPackage_UserReqId>;
  
  editUser: grpc.handleUnaryCall<_userPackage_UserRequest__Output, _userPackage_UserResponse>;
  
  getAllUsers: grpc.handleUnaryCall<_userPackage_Empty__Output, _userPackage_UserListResponse>;
  
  getUser: grpc.handleUnaryCall<_userPackage_UserReqId__Output, _userPackage_UserResponse>;
  
}

export interface UserServiceRoutesDefinition extends grpc.ServiceDefinition {
  addUser: MethodDefinition<_userPackage_UserRequest, _userPackage_UserResponse, _userPackage_UserRequest__Output, _userPackage_UserResponse__Output>
  deleteUser: MethodDefinition<_userPackage_UserReqId, _userPackage_UserReqId, _userPackage_UserReqId__Output, _userPackage_UserReqId__Output>
  editUser: MethodDefinition<_userPackage_UserRequest, _userPackage_UserResponse, _userPackage_UserRequest__Output, _userPackage_UserResponse__Output>
  getAllUsers: MethodDefinition<_userPackage_Empty, _userPackage_UserListResponse, _userPackage_Empty__Output, _userPackage_UserListResponse__Output>
  getUser: MethodDefinition<_userPackage_UserReqId, _userPackage_UserResponse, _userPackage_UserReqId__Output, _userPackage_UserResponse__Output>
}
