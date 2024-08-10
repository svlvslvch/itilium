import MainContainer from '@components/MainContainer/MainContainer';

import { Tabs } from '@modules/Requests';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContainer>
      <div className="relative pb-10 pt-8">
        <div
          id="requests-sidebar"
          className="mb-6 flex flex-col justify-between gap-4 overflow-hidden md:flex-row-reverse"
        >
          <Tabs />
        </div>

        {children}
      </div>
    </MainContainer>
  );
}
