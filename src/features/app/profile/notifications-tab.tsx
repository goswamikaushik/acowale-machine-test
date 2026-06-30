import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const emailNotifications = [
  { label: 'Product Updates', description: 'News about product and feature updates.' },
  { label: 'Security Alerts', description: 'Get notified about unusual activity.' },
  { label: 'Weekly Digest', description: 'A summary of your activity each week.' },
  { label: 'Marketing Emails', description: 'Promotions, offers, and announcements.' }
];

const pushNotifications = [
  { label: 'New Messages', description: 'Get notified when you receive a message.' },
  { label: 'Task Assignments', description: 'When a task is assigned to you.' },
  { label: 'Mentions', description: 'When someone mentions you in a comment.' },
  { label: 'System Alerts', description: 'Important system status notifications.' }
];

function NotificationRow({
  label,
  description,
  defaultChecked
}: {
  label: string;
  description: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-muted-foreground text-xs">{description}</span>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}

export function NotificationsTab() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Choose which emails you want to receive.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {emailNotifications.map((item, i) => (
            <div key={item.label}>
              <NotificationRow {...item} defaultChecked={i < 2} />
              {i < emailNotifications.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>Control in-app and browser notifications.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {pushNotifications.map((item, i) => (
            <div key={item.label}>
              <NotificationRow {...item} defaultChecked={i < 3} />
              {i < pushNotifications.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-end lg:col-span-2">
        <Button>Save Preferences</Button>
      </div>
    </div>
  );
}
