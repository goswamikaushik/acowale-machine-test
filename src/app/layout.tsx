import { Metadata } from 'next';
import './globals.css';
import { METADATA } from '@/constants';
import { headers } from 'next/headers';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import { ReduxProvider } from '@/redux/provider';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const path = headerList.get('x-current-path') ?? '/';
  return METADATA[path];
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn('h-full', 'antialiased', 'font-sans', geist.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
