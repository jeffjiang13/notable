import React from 'react';
import { Subscription } from '@/lib/supabase/supabase.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import db from '@/lib/supabase/db';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import CypressProfileIcon from '../icons/cypressProfileIcon';
import ModeToggle from '../global/mode-toggle';
import { LogOut } from 'lucide-react';
import LogoutButton from '../global/logout-button';

interface UserCardProps {
  subscription: Subscription | null;
}

const UserCard: React.FC<UserCardProps> = async ({ subscription }) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error('User not found');
    return null;
  }

  const response = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.id, user.id),
  });

  if (!response) {
    console.error('User profile not found');
    return null;
  }

  const profile = {
    ...response,
    avatarUrl: response.avatarUrl || '',
  };


  return (
    <article className="hidden sm:flex justify-between items-center px-4 py-2 dark:bg-Neutrals/neutrals-12 rounded-3xl">
      <aside className="flex justify-center items-center gap-2">
        <Avatar className='w-10 h-10'>
          <AvatarImage src={profile.avatarUrl} />
          <AvatarFallback>
            <CypressProfileIcon />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-muted-foreground">
            {subscription?.status === 'active' ? 'Pro Plan' : 'Free Plan'}
          </span>
          <small className="w-[100px] overflow-hidden overflow-ellipsis">
            {profile.email}
          </small>
        </div>
      </aside>
      <div className="flex items-center justify-center">
        <LogoutButton>
          <LogOut />
        </LogoutButton>
        <ModeToggle />
      </div>
    </article>
  );
};

export default UserCard;
