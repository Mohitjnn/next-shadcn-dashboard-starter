'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const businessPlanSchema = z.object({
  businessIdea: z
    .string()
    .min(50, 'Please provide more detail about your business idea'),
  marketOpportunity: z
    .string()
    .min(50, 'Please provide more detail about your target market'),
  businessModel: z
    .string()
    .min(50, 'Please provide more detail about your business model'),
  goals: z.string().min(50, 'Please provide more detail about your goals'),
  challenges: z.string().optional()
});

export function BusinessPlanForm({
  onSubmit
}: {
  onSubmit: (data: any) => void;
}) {
  const form = useForm({
    resolver: zodResolver(businessPlanSchema),
    defaultValues: {
      businessIdea: '',
      marketOpportunity: '',
      businessModel: '',
      goals: '',
      challenges: ''
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='businessIdea'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Idea Overview</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Describe your business idea...'
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
          name='marketOpportunity'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Market Opportunity & Target Audience</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Explain your target market...'
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
          name='businessModel'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Model & Strategy</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Detail your revenue model...'
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
          name='goals'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Goals and Milestones</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Outline your goals...'
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
          name='challenges'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Thoughts or Challenges</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Share any challenges...'
                  className='min-h-[100px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          Complete Onboarding
        </Button>
      </form>
    </Form>
  );
}
