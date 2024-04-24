import { SubscriptionModalProvider } from '@/lib/providers/subscription-modal-provider';
import { getActiveProductsWithPrice } from '@/lib/supabase/queries';
import React from 'react';
import { redirect } from 'next/navigation'

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = async ({ children, params }) => {
  const { data: products, error } = await getActiveProductsWithPrice();
  if (error) {
    redirect('/dashboard')
  }
  return (
    <main className="flex over-hidden h-screen">
      <SubscriptionModalProvider products={products}>
        {children}
      </SubscriptionModalProvider>
    </main>
  );
};

export default Layout;
