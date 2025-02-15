import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';

// Define the type for our card data
interface CardData {
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
}

const dashboardCards: CardData[] = [
  {
    title: 'Idea Validation & Research',
    description:
      'Assess and refine your business idea using data-driven market research and competitor insights.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className='h-4 w-4 text-muted-foreground'
      >
        <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
      </svg>
    ),
    backgroundImage: '/ideation_research.jpg'
  },
  {
    title: 'Planning and Strategy Development',
    description:
      'Develop a robust business plan with strategic insights and actionable steps for success.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className='h-4 w-4 text-muted-foreground'
      >
        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
        <circle cx='9' cy='7' r='4' />
        <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
      </svg>
    ),
    backgroundImage: '/planning.jpg'
  },
  {
    title: 'Launch & Execution',
    description:
      'Transform your plans into action with clear roadmaps, operational workflows, and measurable milestones.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className='h-4 w-4 text-muted-foreground'
      >
        <rect width='20' height='14' x='2' y='5' rx='2' />
        <path d='M2 10h20' />
      </svg>
    ),
    backgroundImage: '/ideation_research.jpg'
  },
  {
    title: 'Legal Foundations & Finance',
    description:
      'Establish a solid legal framework and secure the financial resources to support your business growth.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className='h-4 w-4 text-muted-foreground'
      >
        <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
      </svg>
    ),
    backgroundImage: '/ideation_research.jpg'
  }
];

export default function Page() {
  return (
    <PageContainer>
      <div className='flex flex-1 flex-col space-y-2'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-2xl font-bold tracking-tight'>
            Hi, Welcome back 👋
          </h2>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {dashboardCards.map((card, index) => (
            <Card key={index} className='relative overflow-hidden'>
              {/* Background Image */}
              <Image
                src={card.backgroundImage}
                alt={`${card.title} background`}
                fill
                className='z-0 object-cover'
                priority={index < 2} // Priority loading for first 2 cards
              />

              {/* Add an overlay div for better text visibility */}
              <div className='absolute inset-0 z-10 bg-black/30' />

              {/* Wrap content in relative div to appear above overlay */}
              <div className='relative z-20'>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-m font-medium text-white'>
                    {card.title}
                  </CardTitle>
                  <div className='text-white'>{card.icon}</div>
                </CardHeader>
                <CardContent>
                  <p className='mt-4 text-sm text-white'>{card.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
