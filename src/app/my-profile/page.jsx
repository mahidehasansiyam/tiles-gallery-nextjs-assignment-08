"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import Modal from '../components/ModalForm';

const MyProfile = () => {

  const { data: session } = authClient.useSession();
  // console.log(session);
  

  return (
    <div className=" my-20 flex justify-center items-center text-center">
      <div className="shadow-2xl rounded-2xl  p-8">
        <div className="flex justify-center items-center mb-3">
          <Image
            src={session?.user.image}
            height={100}
            width={100}
            alt="Logo"
            className="h-24 w-24 rounded-full ring-4 ring-green-500"
          ></Image>
        </div>
        <h2 className="font-bold">{session?.user.name}</h2>
        <h2 className="text-muted mb-6">{session?.user.email}</h2>
        <div className='flex justify-center'>
          <Modal></Modal>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;