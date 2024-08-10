import { NextResponse } from 'next/server';

import { IAppeal } from '@shared/types/appeals/appeals.types';

interface IAppeals {
  [key: string]: IAppeal[];
}

const appeals: IAppeals = {
  user1: [
    {
      awaiting: false,
      createdAt: '2024-07-10T08:00:00.000Z',
      composition: 'Почта',
      deadlineAt: '2024-07-11T08:00:00.000Z',
      description: 'Прошу сделать переадресацию на время отпуска',
      solution: '',
      number: 95708,
      service: 'Интернет',
      state: 'В работе',
      stateKey: 'inWork',
      topic: 'Электронная почта',
      updatedAt: '2024-07-10T14:00:00.000Z',
    },
    {
      awaiting: false,
      createdAt: '2024-07-10T09:20:00.000Z',
      composition: 'Настройка ПО',
      deadlineAt: '2024-07-11T09:20:00.000Z',
      description: 'Прошу установить платформу 8.3.34',
      solution: '',
      number: 95802,
      service: 'Поддержка рабочих мест',
      state: 'Зарегистрировано',
      stateKey: 'registered',
      topic: 'Установка платформы',
      updatedAt: '2024-07-10T13:10:00.000Z',
    },
    {
      awaiting: false,
      createdAt: '2024-07-10T12:12:00.000Z',
      composition: 'Доступ',
      deadlineAt: '2024-07-11T12:12:00.000Z',
      description: 'Нужен доступ к serversoft',
      solution: '',
      number: 95803,
      service: 'Интернет',
      state: 'На согласовании',
      stateKey: 'agreement',
      topic: 'Подключение к сети',
      updatedAt: '2024-07-10T14:00:00.000Z',
    },
    {
      awaiting: true,
      createdAt: '2024-07-11T07:15:00.000Z',
      composition: 'Настройка ПО',
      deadlineAt: '2024-07-11T07:15:00.000Z',
      description: 'Для нашего сотрудника нужна IDE',
      solution: 'Софт установлен',
      number: 95804,
      service: 'Поддержка рабочих мест',
      state: 'Выполнено. Требует подтверждения',
      stateKey: 'confirmation',
      topic: 'Установка ПО на ПК',
      updatedAt: '2024-07-11T10:45:00.000Z',
    },
    {
      awaiting: false,
      createdAt: '2024-07-11T12:24:00.000Z',
      composition: 'Доступ',
      deadlineAt: '2024-07-12T12:24:00.000Z',
      description: 'Не заходит на внешние сайты при включенном впн',
      solution: '',
      number: 95901,
      service: 'Интернет',
      state: 'Зарегистрировано',
      stateKey: 'registered',
      topic: 'Проблема с сетью',
      updatedAt: '2024-07-12T10:34:00.000Z',
    },
    {
      awaiting: false,
      createdAt: '2024-07-13T10:11:00.000Z',
      composition: 'Настройка оборудования',
      deadlineAt: '2024-07-14T10:11:00.000Z',
      description: 'В ауд. 312',
      solution: 'Проектор установлен',
      number: 95902,
      service: 'Поддержка рабочих мест',
      state: 'Закрыто',
      stateKey: 'close',
      topic: 'Установка проектора',
      updatedAt: '2024-07-13T11:08:00.000Z',
    },
    {
      awaiting: true,
      createdAt: '2024-07-14T11:47:00.000Z',
      composition: 'Настройка ПО',
      deadlineAt: '2024-07-15T11:47:00.000Z',
      description: 'Требуется офис на выездном ноутбуке',
      solution: 'Активирован 2016',
      number: 95903,
      service: 'Поддержка рабочих мест',
      state: 'На согласовании',
      stateKey: 'agreement',
      topic: 'Активация Office',
      updatedAt: '2024-07-14T13:30:00.000Z',
    },
    {
      awaiting: false,
      createdAt: '2024-07-15T13:21:00.000Z',
      composition: 'Настройка оборудования',
      deadlineAt: '2024-07-16T13:21:00.000Z',
      description: 'В каб. 111',
      solution: '',
      number: 95918,
      service: 'Поддержка рабочих мест',
      state: 'В работе',
      stateKey: 'inWork',
      topic: 'Замена картриджа',
      updatedAt: '2024-07-15T13:30:00.000Z',
    },
    {
      awaiting: true,
      createdAt: '2024-07-15T15:13:00.000Z',
      composition: 'Почта',
      deadlineAt: '2024-07-16T15:13:00.000Z',
      description: 'Нет доступа к корпоративной почте',
      solution: 'Выдан доступ',
      number: 95716,
      service: 'Интернет',
      state: 'Закрыто',
      stateKey: 'close',
      topic: 'Электронная почта',
      updatedAt: '2024-07-15T15:37:00.000Z',
    },
  ],
  user2: [
    {
      awaiting: false,
      createdAt: '2024-07-10T08:00:00.000Z',
      composition: 'Почта',
      deadlineAt: '2024-07-11T08:00:00.000Z',
      description: 'Прошу сделать переадресацию на время отпуска',
      solution: '',
      number: 95708,
      service: 'Интернет',
      state: 'В работе',
      stateKey: 'inWork',
      topic: 'Электронная почта',
      updatedAt: '2024-07-10T14:00:00.000Z',
    },
    {
      awaiting: false,
      createdAt: '2024-07-10T09:20:00.000Z',
      composition: 'Настройка ПО',
      deadlineAt: '2024-07-11T09:20:00.000Z',
      description: 'Прошу установить платформу 8.3.34',
      solution: '',
      number: 95802,
      service: 'Поддержка рабочих мест',
      state: 'Зарегистрировано',
      stateKey: 'registered',
      topic: 'Установка платформы',
      updatedAt: '2024-07-10T13:10:00.000Z',
    },
    {
      awaiting: false,
      createdAt: '2024-07-10T12:12:00.000Z',
      composition: 'Доступ',
      deadlineAt: '2024-07-11T12:12:00.000Z',
      description: 'Нужен доступ к serversoft',
      solution: '',
      number: 95803,
      service: 'Интернет',
      state: 'На согласовании',
      stateKey: 'agreement',
      topic: 'Подключение к сети',
      updatedAt: '2024-07-10T14:00:00.000Z',
    },
  ],
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const username = searchParams.get('username') || '';
  const number = searchParams.get('number');

  if (appeals[username]) {
    if (number) {
      const appeal = appeals[username].find(
        (appeal) => appeal.number === Number(number)
      );

      return NextResponse.json({
        success: true,
        appeals: appeal ? [appeal] : [],
      });
    }

    return NextResponse.json({ success: true, appeals: appeals[username] });
  }

  return NextResponse.json(
    { success: false, message: 'No appeals found for this user' },
    { status: 404 }
  );
}
