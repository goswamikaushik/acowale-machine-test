import { Card, CardContent } from '@/components/ui/card';
import { TermsSections } from './terms-sections';

const TermsOfService = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-muted/50 border-b px-4 py-12 text-center md:py-16 lg:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
        <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-base">
          Last updated: January 1, 2024
        </p>
        <p className="text-muted-foreground mx-auto mt-2 max-w-xl text-sm">
          Please read these terms carefully before using our platform. By using our services, you
          agree to be bound by these terms.
        </p>
      </div>
      <div className="mx-auto w-full max-w-4xl px-4 py-10 lg:px-6">
        <Card>
          <CardContent className="pt-6">
            <TermsSections />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
