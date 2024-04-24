import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import React from 'react';

import Header from '@/components/landing-page/header';

const HomePageLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLoggedIn = !!user;

  return (
    <main>
      <Header isLoggedIn={isLoggedIn} />
      {children}
    </main>
  );
};

export default HomePageLayout;
