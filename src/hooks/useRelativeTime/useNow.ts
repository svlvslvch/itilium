import { useEffect, useState } from 'react';

export const useNow = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const getNow = () => {
      setNow(new Date());
    };

    const intervalId = setInterval(getNow, 1000 * 60);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return now;
};
