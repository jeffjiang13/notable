import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import React from 'react';

import Header from '@/components/landing-page/header';
import Footer from '@/components/landing-page/footer';

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
      <Footer />
    </main>
  );
};

export default HomePageLayout;
