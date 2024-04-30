import TitleSection from '@/components/landing-page/title-section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import Banner from '../../../public/banner.png';
import Cal from '../../../public/cal.png';
import Diamond from '../../../public/icons/diamond.svg';
import CheckIcon from '../../../public/icons/check.svg';
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from '@/lib/constants';
import { randomUUID } from 'crypto';
import { twMerge } from 'tailwind-merge';
//@ts-ignore
import clsx from 'clsx';
import CustomCard from '@/components/landing-page/custom-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '#',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '#',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '#',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '#',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '#',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '#',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const HomePage = () => {
  return (
    <>
      <section
        className=" overflow-hidden
      px-4
      sm:px-6
      mt-10
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
      >
        <TitleSection
          pill="✨ Transform Your Workflow"
          title="The Ultimate Collaboration and Productivity Hub"
        />
        <div
          className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
        "
        >
          <Link href='/login'>
          <Button
          //@ts-ignore
            variant="btn-secondary"
            className=" w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-background
            hover:bg-brand-primaryPurple/50
            hover:text-white
          "
          >
            Get Notable Free
          </Button>
          </Link>
        </div>
        <div
          className="
          mt-10
          flex
          justify-center
          items-center
          relative
          shadow-xl shadow-washed-purple-300 rounded-2xl
          mb-20
        "
        >
          <Image
            src={Banner}
            alt="Application Banner"
            className='rounded-2xl '
            width={1200} // specify your desired width
            height={600} // specify your desired height
          />
          <div
            className="bottom-0
            top-[100%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
            rounded-2xl
          "
          ></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
                animate-slide
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative
      "
      >
        <div
          className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-10
          top-22
        "
        />
        <TitleSection
          title="Centralize Your Meetings: All Your Agendas in One Place"
          subheading="Effortlessly capture and organize your ideas, thoughts, and meeting notes to streamline collaboration and enhance productivity."
          pill="Features"
        />
        <div
          className="mt-10
          max-w-[450px]
          flex
          justify-center
          items-center
          relative
          sm:ml-0
          rounded-2xl
          border-8
          border-washed-purple-300
          border-opacity-10
        "
        >
          <Image
            src={Cal}
            alt="Banner"
            className="rounded-2xl"
          />
        </div>
      </section>
      <section
  id="features"
  className="px-4 sm:px-6 flex flex-col items-center mt-20"
>
  <TitleSection
    title="Powerful Features, Unparalleled Productivity"
    subheading="Discover the comprehensive suite of tools designed to streamline your workflow and boost efficiency."
    pill="More Features"
  />
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
    <CustomCard
      className="bg-white dark:bg-black/40 rounded-lg p-6 border-brand-primaryPurple/70"
      cardHeader={
        <CardTitle className="text-xl font-semibold">
          Real-Time Collaboration
        </CardTitle>
      }
      cardContent={
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Collaborate seamlessly with your team in real-time, enabling
          simultaneous editing and efficient communication.
        </CardDescription>
      }
    />
    <CustomCard
      className="bg-white dark:bg-black/40 rounded-lg p-6 border-brand-primaryPurple/70"
      cardHeader={
        <CardTitle className="text-xl font-semibold">
          Customizable Templates
        </CardTitle>
      }
      cardContent={
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Streamline your workflows with customizable templates tailored to your
          specific needs, saving time and ensuring consistency.
        </CardDescription>
      }
    />
    <CustomCard
      className=" rounded-lg p-6 border-brand-primaryPurple/70"
      cardHeader={
        <CardTitle className="text-xl font-semibold">
          Powerful Integrations
        </CardTitle>
      }
      cardContent={
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Seamlessly integrate with your favorite tools and services, creating a
          centralized hub for all your productivity needs.
        </CardDescription>
      }
    />
    {/* Add more feature cards as needed */}
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 ">
    {components.map((component) => (
      <CustomCard
        key={component.title}
        className="bg-white dark:bg-black/40 rounded-lg p-6 border-brand-primaryPurple/70"
        cardHeader={
          <CardTitle className="text-xl font-semibold">
            {component.title}
          </CardTitle>
        }
        cardContent={
          <CardDescription className="text-gray-500 dark:text-gray-400">
            {component.description}
          </CardDescription>
        }
      />
    ))}
  </div>
</section>
      <section
        id='testimonial'
        className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-100
          top-56
        "
        />
        <div
          className="mt-20
          px-4
          sm:px-6
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx('mt-10 flex flex-nowrap gap-6 self-start', {
                  'flex-row-reverse': index === 1,
                  'animate-[slide_250s_linear_infinite]': true,
                  'animate-[slide_250s_linear_infinite_reverse]': index === 1,
                  'ml-[100vw]': index === 1,
                }),
                'hover:paused'
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        id='pricing'
        className="mt-20
        px-4
        sm:px-6
      "
      >
        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />
        <div
          className="flex
        flex-col-reverse
        sm:flex-row
        gap-4
        justify-center
        sm:items-stretch
        items-center
        mt-10
        "
        >
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                'w-[300px] rounded-2xl dark:bg-black/40 background-blur-3xl relative',
                {
                  'border-brand-primaryPurple/70':
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle
                  className="text-2xl
                  font-semibold
              "
                >
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div
                        className="hidden dark:block w-full blur-[120px] rounded-full h-32
                        absolute
                        bg-brand-primaryPurple/80
                        -z-10
                        top-0
                      "
                      />
                      <Image
                        src={Diamond}
                        alt="Pro Plan Icon"
                        className="absolute top-6 right-6"
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span
                    className="font-normal
                    text-2xl
                "
                  >
                    ${card.price}
                  </span>
                  {+card.price > 0 ? (
                    <span className="dark:text-washed-purple-800 ml-1">
                      /mo
                    </span>
                  ) : (
                    ''
                  )}
                  <p className="dark:text-washed-purple-800">
                    {card.description}
                  </p>
                  <Link href={'/dashboard'}>
                  <Button
                  //@ts-ignore
                    variant="btn-primary"
                    className="whitespace-nowrap w-full mt-4"
                  >
                    {card.planType === PRICING_PLANS.proplan
                      ? 'Go Pro'
                      : 'Get Started'}
                  </Button>
                  </Link>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="font-normal
                  flex
                  mb-2
                  flex-col
                  gap-4
                "
                >
                  <small>{card.highlightFeature}</small>
                  {card.freatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex
                      items-center
                      gap-2
                    "
                    >
                      <Image
                        src={CheckIcon}
                        alt="Check Icon"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
      <section
  id="resources"
  className="px-4 sm:px-6 flex flex-col items-center mt-20"
>
  <TitleSection
    title="Explore Our Comprehensive Resources"
    subheading="Access a wealth of knowledge and tools to enhance your productivity."
    pill="Resources"
  />
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
  <CustomCard
    className="bg-white dark:bg-black/40 rounded-lg p-6 border-brand-primaryPurple/70"
    cardHeader={
      <CardTitle className="text-xl font-semibold">Introduction</CardTitle>
    }
    cardContent={
      <CardDescription className="text-gray-500 dark:text-gray-400">
        Discover reusable components crafted with Radix UI and Tailwind CSS for ultimate design flexibility and efficiency.
      </CardDescription>
    }
  />    <CustomCard
  className="bg-white dark:bg-black/40 rounded-lg p-6 border-brand-primaryPurple/70"
  cardHeader={
    <CardTitle className="text-xl font-semibold">Installation</CardTitle>
  }
  cardContent={
    <CardDescription className="text-gray-500 dark:text-gray-400">
      Step-by-step guide to seamlessly install dependencies and configure your app&apos;s structure for optimal development.
      platform.
    </CardDescription>
  }
  />
  <CustomCard
  className="bg-white dark:bg-black/40 rounded-lg p-6 border-brand-primaryPurple/70"
  cardHeader={
    <CardTitle className="text-xl font-semibold">Typography</CardTitle>
  }
  cardContent={
    <CardDescription className="text-gray-500 dark:text-gray-400">
      Explore a comprehensive guide to styling text elements, from headings to paragraphs and lists, for clear and attractive layouts.
    </CardDescription>
  }
/>
    <CustomCard
      className="bg-white dark:bg-black/40 rounded-lg p-6 border-brand-primaryPurple/70"
      cardHeader={
        <CardTitle className="text-xl font-semibold">Guides</CardTitle>
      }
      cardContent={
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Comprehensive guides to help you get started and make the most of our
          platform.
        </CardDescription>
      }
    />
    <CustomCard
      className="bg-white dark:bg-black/40 rounded-lg p-6 border-brand-primaryPurple/70"
      cardHeader={
        <CardTitle className="text-xl font-semibold">Tutorials</CardTitle>
      }
      cardContent={
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Step-by-step tutorials covering various features and use cases.
        </CardDescription>
      }
    />
    <CustomCard
      className="bg-white dark:bg-black/40 rounded-lg p-6 border-brand-primaryPurple/70"
      cardHeader={
        <CardTitle className="text-xl font-semibold">Community</CardTitle>
      }
      cardContent={
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Connect with other users, share knowledge, and get support from our
          vibrant community.
        </CardDescription>
      }
    />
    {/* Add more resource cards as needed */}
  </div>
</section>
      <br />
    </>
  );
};

export default HomePage;
