import { useFormatter } from 'next-intl';

import { useNow } from './useNow';

export const useRelativeTime = (dateAt: string) => {
  const now: any = useNow();
  const formatter = useFormatter();

  const date: any = new Date(dateAt);

  const secondsDifference = Math.floor((now - date) / 1000);

  if (secondsDifference < 60 * 60) {
    // Если прошло меньше часа отображаем относительное время
    return formatter.relativeTime(date, now);
  }

  const today = new Date(now);
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    // Если сегодняшняя дата, отображаем 'сегодня, HH:MM'
    const formattedTime = formatter.dateTime(date, {
      hour: 'numeric',
      minute: 'numeric',
    });

    return `сегодня, ${formattedTime}`;
  } else if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    // Если вчерашняя дата, отображаем 'вчера, HH:MM'
    const formattedTime = formatter.dateTime(date, {
      hour: 'numeric',
      minute: 'numeric',
    });

    return `вчера, ${formattedTime}`;
  }

  const formattedDateTime = formatter.dateTime(date, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  // return `dd.mm.yyyy HH:MM`;
  return formattedDateTime.replace(/,/g, '');
};
