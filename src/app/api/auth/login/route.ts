import { NextResponse } from 'next/server';

import { IUser } from '@shared/types/user/user.types';

interface IUsers {
  [key: string]: IUser;
}

const users: IUsers = {
  user1: {
    image:
      'https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964616.jpg',
    password: '123456',
    username: 'user1',
  },
  user2: {
    image:
      'https://img.freepik.com/free-photo/close-up-elder-cartoon-character-portrait_23-2150964401.jpg',
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
