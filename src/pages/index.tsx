import { ClientService } from '../grpc/grpc-service';
import { GetServerSideProps } from 'next';
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

interface Props {
  user: {
    id: any;
    name: string;
    username: string;
    location: string;
    email: string;
    phone: string;
  }
  users: [{
    id: any;
    name: string;
    username: string;
    location: string;
    email: string;
    phone: string;
  }],
  serviceClient: any;
}

export default function Home({ users, user, serviceClient }: Props) {
  const [grpcService, setGrpcService] = useState(null); 
  const handleClick = () => {
    console.log(grpcService);

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-3">
      <h1 className='py-8 text-bold text-4xl font-bold'>The First gRPC with NextJS</h1>

      <section className='flex flex-row min-w-full'>

        <aside className='flex w-[300px] flex-col'>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Get All list elements</h2>

          {
            users && users.map((usr, i) => {
              return (
                <div className='block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200' key={'listitem_' + i}
                  onClick={handleClick}
                >
                  <p>{usr.id} - {usr.name}</p>
                  <p>{usr.location}, {usr.phone}</p>
                  <p>{usr.email}</p>
                </div>
              )
            })
          }
        </aside>
        <article className='flex-1 flex flex-col p-10'>
          <h1 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">User details</h1>
          {user ? (
            <div className="container">
              <p>Id: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Location: {user.location}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          ) : null}

        </article>
      </section>

    </main>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const authService = new ClientService();
    const { client, error } = await authService.getClient("3");
    console.log("CLIENT === ", client);
    console.log("Error === ", error);

    const allClients: any = await authService.getAllClients();
    console.log("AuthService === ", authService);
    console.log({
      props: {  user: client, users: allClients.users, error }
    })
    return {
      props: {  user: client, users: allClients.users, error },
    };
  } catch (error) {
    console.log("getServersideProps catch error :: \n\n\n\n");
    return {
      props: { error },
    };
  }
};
