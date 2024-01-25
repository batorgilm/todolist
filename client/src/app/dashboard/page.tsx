'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { SizeEnum, Title } from '@/components/Title';

const Page = () => {
  const router = useRouter();
  const [todo, setTodo] = useState();

  // const m = password.match(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/);

  const fetchTodos = async (token: string) => {
    const res = await axios.get('http://localhost:8000/todo', {
      headers: {
        token,
      },
    });
    setTodo(res.data.todos);
    console.log(res);
  };

  useEffect(() => {
    const rawJson: string | null = localStorage.getItem('token');
    const token = rawJson && JSON.parse(rawJson);

    if (!token) {
      router.push('/login');
      return;
    }

    fetchTodos(token);
  }, []);
  return (
    <div>
      <Title size={SizeEnum.L}>Dashboard</Title>
      <div>{JSON.stringify(todo, null, 2)}</div>
    </div>
  );
};

export default Page;
