import { ContactForm } from './contact-form';
import { ContactInfo } from './contact-info';

const ContactUs = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-muted/50 border-b px-4 py-12 text-center md:py-16 lg:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
        <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-base">
          Have a question or want to work together? We&apos;d love to hear from you.
        </p>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 py-10 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
