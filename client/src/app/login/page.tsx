'use client';
import { Button } from '@/components/Button';
import { SizeEnum, Title } from '@/components/Title';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import jwt from 'jsonwebtoken';

const Page = () => {
  const router = useRouter();

  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const BASE_URL = 'http://localhost:8000/auth/login';

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(BASE_URL, {
        ...input,
      });

      localStorage.setItem('token', JSON.stringify(data.token));

      router.push('/dashboard');
    } catch (error: any) {
      console.log(error);
      setError(JSON.stringify(error));
    }
  };

  return (
    <div className="max-w-[960px] mx-20 mt-10">
      <Title size={SizeEnum.S}>Login</Title>
      <form className="flex flex-col gap-4">
        <label>
          Username
          <input
            onChange={(e) =>
              setInput((prev) => ({ ...prev, username: e.target.value }))
            }
            className="ml-2"
            placeholder="Enter your username"
            type="text"
          />
        </label>
        <label className="">
          Password
          <input
            onChange={(e) =>
              setInput((prev) => ({ ...prev, password: e.target.value }))
            }
            className="ml-2"
            placeholder="Enter your username"
            type="password"
          />
        </label>
        {error && <p className="text-red-600 my-2">{error}</p>}

        <Button onClick={submitHandler}>Login</Button>
      </form>
    </div>
  );
};

export default Page;
