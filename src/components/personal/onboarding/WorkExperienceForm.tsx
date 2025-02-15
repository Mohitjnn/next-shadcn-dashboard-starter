'use client';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const workExperienceSchema = z.object({
  professionalSummary: z
    .string()
    .min(50, 'Please provide more detail about your current role'),
  pastRoles: z
    .string()
    .min(50, 'Please provide more detail about your past experience'),
  skills: z.string().min(20, 'Please list your relevant skills'),
  industryExperience: z
    .string()
    .min(50, 'Please provide more detail about your industry experience')
});

export function WorkExperienceForm({
  onSubmit
}: {
  onSubmit: (data: any) => void;
}) {
  const form = useForm({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
      professionalSummary: '',
      pastRoles: '',
      skills: '',
      industryExperience: ''
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='professionalSummary'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Professional Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Describe your current role...'
                  className='min-h-[100px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='pastRoles'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Past Roles and Achievements</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Outline your work experience...'
                  className='min-h-[100px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='skills'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Relevant Skills & Expertise</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='List your key skills...'
                  className='min-h-[100px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='industryExperience'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry Experience</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Discuss your industry experience...'
                  className='min-h-[100px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          Continue
        </Button>
      </form>
    </Form>
  );
}
