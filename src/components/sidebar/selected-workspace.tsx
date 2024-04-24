'use client';
import { workspace } from '@/lib/supabase/supabase.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface SelectedWorkspaceProps {
  workspace: workspace;
  onClick?: (option: workspace) => void;
}

const SelectedWorkspace: React.FC<SelectedWorkspaceProps> = ({
  workspace,
  onClick,
}) => {
  const supabase = createClientComponentClient();
  const [workspaceLogo, setWorkspaceLogo] = useState('/logo.webp');
  useEffect(() => {
    if (workspace.logo) {
      const path = supabase.storage
        .from('workspace-logos')
        .getPublicUrl(workspace.logo)?.data.publicUrl;
      setWorkspaceLogo(path);
    }
  }, [workspace]);
  return (
    <Link
      href={`/dashboard/${workspace.id}`}
      onClick={() => {
        if (onClick) onClick(workspace);
      }}
      className="flex
      rounded-md
      hover:bg-muted
      transition-all
      flex-row
      p-2
      justify-center
      cursor-pointer
      items-center
      my-2
      font-bold
      "
    >
      <Image
        src={workspaceLogo}
        alt="workspace logo"
        width={40}
        height={40}
        objectFit="cover"
      />
      <div className="flex flex-col">
        <p
          className="text-lg
        w-[170px]
        overflow-hidden
        overflow-ellipsis
        whitespace-nowrap"
        >
          {workspace.title}
        </p>
      </div>
    </Link>
  );
};

export default SelectedWorkspace;
