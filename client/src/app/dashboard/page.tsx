'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    const rawJson: string | null = localStorage.getItem('user');
    const user = rawJson && JSON.parse(rawJson);

    if (!user) {
      router.push('/login');
      return;
    }

    const { _id, username, password } = user;

    if (!_id || !username || !password) {
      router.push('/login');
      return;
    }
  }, []);
  return <div>Dashboard</div>;
};

export default Page;
