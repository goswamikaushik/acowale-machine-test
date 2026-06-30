'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BellIcon, LockIcon, UserIcon } from 'lucide-react';
import { ProfileHeader } from './profile-header';
import { PersonalInfoTab } from './personal-info-tab';
import { SecurityTab } from './security-tab';
import { NotificationsTab } from './notifications-tab';

const Profile = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col gap-6 px-4 py-6 lg:px-6">
        <ProfileHeader />
        <Tabs defaultValue="personal" className="w-full">
          <TabsList>
            <TabsTrigger value="personal" className="gap-2">
              <UserIcon className="size-4" />
              Personal Info
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <LockIcon className="size-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <BellIcon className="size-4" />
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personal" className="mt-6">
            <PersonalInfoTab />
          </TabsContent>
          <TabsContent value="security" className="mt-6">
            <SecurityTab />
          </TabsContent>
          <TabsContent value="notifications" className="mt-6">
            <NotificationsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
