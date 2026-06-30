'use client';

import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar';
import {
  GalleryVerticalEndIcon,
  AudioLinesIcon,
  TerminalIcon,
  TerminalSquareIcon,
  BotIcon,
  BookOpenIcon,
  FrameIcon,
  PieChartIcon,
  MapIcon
} from 'lucide-react';
import { SITE_ROUTES } from '@/constants';

const { APP, AUTH, MARKETING } = SITE_ROUTES;

// This is sample data.
const data = {
  user: {
    name: 'Kaushik',
    email: 'Kaushik.com',
    avatar: '/avatars/shadcn.jpg'
  },
  teams: [
    {
      name: 'Kaushik',
      logo: <GalleryVerticalEndIcon />,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: <AudioLinesIcon />,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: <TerminalIcon />,
      plan: 'Free'
    }
  ],
  navMain: [
    {
      title: 'Auth Pages',
      url: '#',
      icon: <TerminalSquareIcon />,
      isActive: true,
      items: [
        {
          title: 'Sign In',
          url: AUTH.SIGN_IN
        },
        {
          title: 'Sign Up',
          url: AUTH.SIGN_UP
        },
        {
          title: 'Forgot Password',
          url: AUTH.FORGOT_PASSWORD
        }
      ]
    },
    {
      title: 'App Pages',
      url: '#',
      icon: <BotIcon />,
      items: [
        {
          title: 'Dashboard',
          url: APP.DASHBOARD
        },
        {
          title: 'Profile',
          url: APP.PROFILE
        },
        {
          title: 'Charts',
          url: APP.CHARTS
        }
      ]
    },
    {
      title: 'Marketing Pages',
      url: '#',
      icon: <BookOpenIcon />,
      items: [
        {
          title: 'Contact',
          url: MARKETING.CONTACT_US
        },
        {
          title: 'Terms of Service',
          url: MARKETING.TERMS_OF_SERVICE
        },
        {
          title: 'Privacy Policy',
          url: MARKETING.PRIVACY_POLICY
        }
      ]
    }
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: <FrameIcon />
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: <PieChartIcon />
    },
    {
      name: 'Travel',
      url: '#',
      icon: <MapIcon />
    }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
