'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const otpSchema = z.object({
  otp: z
    .string()
    .min(6, { message: 'OTP must be 6 digits' })
    .max(6, { message: 'OTP must be 6 digits' })
    .regex(/^\d+$/, { message: 'OTP must contain only numbers' })
});

type OtpFormValue = z.infer<typeof otpSchema>;

interface OtpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OtpDialog({ open, onOpenChange }: OtpDialogProps) {
  const router = useRouter();
  const form = useForm<OtpFormValue>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: ''
    }
  });

  const onSubmit = async (data: OtpFormValue) => {
    try {
      console.log('OTP submitted:', data.otp);
      // Add your OTP verification logic here

      toast.success('OTP verified successfully!');
      onOpenChange(false); // Close the dialog
      router.push('/onboarding'); // Navigate to onboarding
    } catch (error) {
      toast.error('Invalid OTP. Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Enter Verification Code</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='otp'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>6-digit code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter verification code'
                      {...field}
                      maxLength={6}
                      className='text-center text-lg tracking-widest'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Verify & Continue
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
