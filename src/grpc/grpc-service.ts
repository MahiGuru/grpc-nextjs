import { UserServiceRoutes } from './grpc-client';
import { promisify } from 'util';
import * as grpc from '@grpc/grpc-js';

const target = 'localhost:50051';

export class ClientService extends UserServiceRoutes {
    constructor() {
        super(target, grpc.credentials.createInsecure());
    }

    public async getClient(id: string) {
        const clientInfo = promisify(this.getUser).bind(this);
        return clientInfo({ id })
            .then((client) => {
                console.log("GRPC service ", client)
                return { client, error: null }
            })
            .catch((error) => {
                console.log("ERRROOOOOOR ", error);
                return { error, client: null }
            });
    }

    
    public async getAllClients() {
        const clientInfo = promisify(this.getAllUsers).bind(this);
        return clientInfo({})
            .then((client: any) => {
                console.log("GRPC All service ", client)
                return { users: client.users, error: null }
            })
            .catch((error) => {
                console.log("ERRROOOOOOR ", error);
                return { error, client: null }
            });
    }
}
