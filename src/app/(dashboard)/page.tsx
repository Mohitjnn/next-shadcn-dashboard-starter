'use client';
import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import Link from 'next/link';

// Define the type for our card data
interface CardData {
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
}

interface NoteData {
  title: string;
  content: string;
  updated: boolean;
}

interface NotesDataType {
  [key: string]: NoteData;
}

// Mock data for notes (this would come from your backend in a real app)
const PREFILLED_NOTES: NotesDataType = {
  '2025-02-18': {
    title: 'Team Meeting',
    content: 'Discuss Q1 goals and project timeline',
    updated: false
  },
  '2025-02-20': {
    title: 'Client Presentation',
    content: 'Present the new product features to ABC Corp',
    updated: true
  },
  '2025-02-25': {
    title: 'Product Launch',
    content: 'Finalize details for the new product launch',
    updated: false
  }
};

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
  const [notesData, setNotesData] = useState(PREFILLED_NOTES);

  // Custom day renderer for the calendar
  // Modify the renderDay function:
  const renderDay = (day: Date) => {
    const dateKey = format(day, 'yyyy-MM-dd');
    const hasNote = notesData[dateKey] !== undefined;
    const isUpdated = hasNote && notesData[dateKey].updated;
    let bgColor = '';
    let textColor = '';

    if (hasNote) {
      if (isUpdated) {
        bgColor = 'bg-green-500';
        textColor = 'text-white';
      } else {
        bgColor = 'bg-black border-white border-2';
        textColor = 'text-white';
      }
    }

    return (
      <div
        className={`flex h-14 w-14 items-center justify-center ${bgColor} ${textColor} ${hasNote ? 'rounded-full' : ''}`}
      >
        <Link href={`/Reminders?date=${dateKey}`}>{day.getDate()}</Link>
      </div>
    );
  };

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
                  <div className='text-card-foreground'>{card.icon}</div>
                </CardHeader>
                <CardContent>
                  <p className='mt-4 text-sm text-white'>{card.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        <div className='rounded-lg border p-4'>
          <h3 className='mb-4 text-lg font-medium'>
            Current Phase: Launch & Execution 🚀
          </h3>
          <ul className='list-disc pl-5 text-card-foreground'>
            <li>
              <strong>Tasks Completed:</strong> 12 / 20
            </li>
            <li>
              <strong>Pending Tasks:</strong> 8 remaining
            </li>
            <li>
              <strong>Milestone Deadline:</strong> Feb 25, 2025
            </li>
            <li>
              <strong>Team Meetings Scheduled:</strong> 3 this week
            </li>
            <li>
              <strong>Client Interactions:</strong> 5 meetings completed
            </li>
            <li>
              <strong>Budget Utilized:</strong> 60% of allocated funds
            </li>
          </ul>
        </div>

        <div className='rounded-lg border p-4'>
          <h3 className='mb-4 text-lg font-medium'>Calendar</h3>
          <div className='mb-2 flex items-center space-x-4 text-sm text-gray-500'>
            <div className='flex items-center'>
              <div className='mr-2 h-3 w-3 rounded-full border-2 border-white bg-black'></div>
              <span>Has notes</span>
            </div>
            <div className='flex items-center'>
              <div className='mr-2 h-3 w-3 rounded-full bg-green-500'></div>
              <span>Recently updated</span>
            </div>
          </div>
          <Calendar
            className='min-h-[400px] w-full'
            mode='single'
            components={{
              Day: ({ date }) => renderDay(date)
            }}
          />
        </div>
      </div>
    </PageContainer>
  );
}
