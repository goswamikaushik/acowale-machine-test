import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';

const info = [
  {
    icon: MapPinIcon,
    label: 'Office Address',
    lines: ['Kaushik Technologies', '123 Tech Park, Ahmedabad', 'Gujarat, India 380015']
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    lines: ['+91 79 1234 5678', '+91 98765 43210']
  },
  {
    icon: MailIcon,
    label: 'Email',
    lines: ['hello@Kaushik.com', 'support@Kaushik.com']
  },
  {
    icon: ClockIcon,
    label: 'Business Hours',
    lines: ['Monday – Friday: 9am – 6pm IST', 'Saturday: 10am – 2pm IST', 'Sunday: Closed']
  }
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardContent className="flex flex-col gap-6 pt-6">
          {info.map((item, i) => (
            <div key={item.label}>
              <div className="flex gap-4">
                <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                  <item.icon className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">{item.label}</span>
                  {item.lines.map((line) => (
                    <span key={line} className="text-muted-foreground text-sm">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
              {i < info.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="bg-muted flex h-48 items-center justify-center rounded-lg">
            <div className="flex flex-col items-center gap-2 text-center">
              <MapPinIcon className="text-muted-foreground size-8" />
              <span className="text-muted-foreground text-sm">Map placeholder</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
