import { FC, PropsWithChildren } from 'react';

const CenterPageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="h-full pt-10 w-full items-center justify-center flex">
      {children}
    </section>
  );
};

export default CenterPageWrapper;
