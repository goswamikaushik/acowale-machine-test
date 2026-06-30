import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CameraIcon } from 'lucide-react';

export function ProfileHeader() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-6 pt-6 sm:flex-row sm:items-start">
        <div className="relative shrink-0">
          <Avatar className="border-background size-24 border-4 shadow-md">
            <AvatarImage src="" alt="Profile picture" />
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-semibold">
              KG
            </AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="outline"
            className="absolute -right-1 -bottom-1 size-8 rounded-full shadow-sm"
          >
            <CameraIcon className="size-4" />
            <span className="sr-only">Change avatar</span>
          </Button>
        </div>
        <div className="flex flex-1 flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <h1 className="text-2xl font-bold tracking-tight">Kaushik Goswami</h1>
            <Badge variant="secondary">Admin</Badge>
          </div>
          <p className="text-muted-foreground text-sm">Kaushik.com</p>
          <p className="text-muted-foreground text-sm">Member since January 2024</p>
        </div>
        <Button variant="outline" className="shrink-0 self-center sm:self-start">
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
}
