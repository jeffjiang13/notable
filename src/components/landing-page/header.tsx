'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../../public/cypresslogo.svg';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import LogoutButton from '../global/logout-button';
//@ts-ignore
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ModeToggle from '@/components/global/mode-toggle';

const routes = [
  { title: 'Features', href: '#features' },
  { title: 'Reasources', href: '#resources' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Testimonials', href: '#testimonial' },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '#featrues',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '#features',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '#features',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '#features',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '#features',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '#features',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

interface HeaderProps {
  isLoggedIn: boolean;
}
const Header = ({ isLoggedIn }: HeaderProps) => {
  const [path, setPath] = useState('#products');
  const router = useRouter();
  console.log(isLoggedIn)
  return (
    <header className="p-4 flex justify-center items-center">
      {/* Logo  (Home Page Link) */}
      <Link href="/" className="w-full items-center flex">
        <Image
          src="/logo.webp"
          alt="logo"
          width={45}
          height={45}
        />
        <span className="font-semibold dark:text-white">Notable.</span>
      </Link>
      {/* Nav Bar on the right handside */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-6">
          {/*
          First tab: Resources
          */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath('#resources')}
              className={cn({
                'dark:text-white': path === '#resources',
                'dark:text-white/40': path !== '#resources',
                'font-normal': true,
                'text-xl': true,
              })}
            >
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <span className="font-bold flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    Welcome
                  </span>
                </li>
                <ListItem href="#resources" title="Introduction">
                  Discover reusable components crafted with Radix UI and Tailwind CSS for ultimate design flexibility and efficiency.
                </ListItem>
                <ListItem href="#resources" title="Installation">
                  Step-by-step guide to seamlessly install dependencies and configure your app&apos;s structure for optimal development.
                </ListItem>
                <ListItem href="#resources" title="Typography">
                  Explore a comprehensive guide to styling text elements, from headings to paragraphs and lists, for clear and attractive layouts.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/*
          NextPart: Pricing tab
          */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath('#pricing')}
              className={cn({
                'dark:text-white': path === '#pricing',
                'dark:text-white/40': path !== '#pricing',
                'font-normal': true,
                'text-xl': true,
              })}
            >
              Pricing
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:grid-rows-2">
              <ListItem title="Pro Plan" href="#pricing">
                Unlock comprehensive capabilities and superior collaboration tools designed for scaling teams and advanced projects.
              </ListItem>
              <ListItem title="Free Plan" href="#pricing">
                Ideal for startups and small teams just starting out, providing all the essential tools you need to get going.
              </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/*
          Features section link
          */}
          <NavigationMenuItem>
          <NavigationMenuTrigger
              onClick={() => setPath('#features')}
              className={cn({
                'dark:text-white': path === '#features',
                'dark:text-white/40': path !== '#features',
                'font-normal': true,
                'text-xl': true,
              })}
            >
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/*
          Testimonials section link
          */}
          <NavigationMenuItem>
            <NavigationMenuLink
              onClick={() => router.push('#testimonial')}
              className={cn(navigationMenuTriggerStyle(), {
                'dark:text-white': path === '#testimonials',
                'dark:text-white/40': path !== '#testimonials',
                'font-normal': true,
                'text-xl': true,
                'cursor-pointer': true,
              })}
            >
              Testimonial
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/*
      LOGIN SIGN UP LINK
      */}
      <aside className="flex w-full gap-4 justify-end">
        {!isLoggedIn ? (
          <>
            <Link href="/login">

              <Button
                //@ts-ignore

                variant="btn-secondary" className="px-3 py-2 hidden sm:block hover:bg-accent">
                Login
              </Button>
            </Link>
            <Link href="/signup">

              <Button
                //@ts-ignore
                variant="btn-primary" className="whitespace-nowrap">
                Sign Up
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard">
              <Button
                //@ts-ignore

                variant="btn-secondary" className="hover:bg-accent px-3 py-2 sm:block">
                Dashboard
              </Button>
            </Link>
            <LogoutButton>
              <LogOut />
            </LogoutButton>
          </>
        )}
        <ModeToggle />
      </aside>
    </header>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'group block select-none space-y-1 font-medium leading-none'
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">
            {title}
          </div>
          <p className="group-hover:text-gray-500 line-clamp-2 text-sm leading-snug text-gray-300">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';
