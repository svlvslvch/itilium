import { NextResponse } from 'next/server';

import { IUser } from '@shared/types/user/user.types';

interface IUsers {
  [key: string]: IUser;
}

const users: IUsers = {
  user1: {
    password: '123456',
    username: 'user1',
  },
  user2: {
    password: '654321',
    username: 'user2',
  },
};

export async function POST(request: Request) {
  const { login, password } = await request.json();

  if (users[login] && users[login].password === password) {
    return NextResponse.json({ success: true, user: users[login] });
  }

  if (users[login]) {
    return NextResponse.json(
      { success: false, message: 'Wrong password' },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { success: false, message: 'User not found' },
    { status: 400 }
  );
}
