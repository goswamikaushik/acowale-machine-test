import { BarChart3, Heart, User } from 'lucide-react';
import { SITE_ROUTES } from '@/constants';
import FeatureCard from './feature-card';

const Home = () => {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Customer Feedback
          <br />
          <span className="text-gradient-brand">System</span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
          Collect valuable customer feedback and gain meaningful insights through our analytics
          dashboard.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-16 md:grid-cols-2">
        <FeatureCard
          icon={<User className="text-brand-blue h-7 w-7" strokeWidth={2} />}
          title="Submit Feedback"
          description="Share your experience and help us improve our products and services."
          ctaLabel="Continue"
          href={SITE_ROUTES.FEEDBACK}
        />
        <FeatureCard
          icon={<BarChart3 className="text-brand-purple h-7 w-7" strokeWidth={2} />}
          title="Analytics Dashboard"
          description="View customer insights, trends and analytics with interactive charts."
          ctaLabel="View Dashboard"
          href={SITE_ROUTES.DASHBOARD}
        />
      </section>

      <footer className="mx-auto max-w-5xl px-6 pb-12 text-center">
        <div className="text-muted-foreground inline-flex items-center gap-2 text-sm">
          <Heart className="fill-rose text-rose h-4 w-4" />
          Thank you for helping us improve
        </div>
      </footer>
    </div>
  );
};

export default Home;
