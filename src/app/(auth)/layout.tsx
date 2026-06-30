import { TooltipProvider } from '@/components/ui/tooltip';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <TooltipProvider>{children}</TooltipProvider>
    </main>
  );
}
