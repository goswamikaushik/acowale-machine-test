import { Separator } from '@/components/ui/separator';

const sections = [
  {
    title: '1. Information We Collect',
    body: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, postal address, phone number, and payment information. We also collect information automatically when you use our services, including log data, device information, and usage data such as pages visited, time spent, and links clicked. Additionally, we may receive information about you from third parties, such as social media platforms or analytics providers, when you choose to connect those services to our platform.`
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions. We may also use your information to send promotional communications, such as information about products, services, and events offered by Kaushik, subject to your preferences. We analyze usage data to understand how our services are used and to detect, investigate, and prevent fraudulent transactions and other illegal activities, and to protect the rights and property of Kaushik and others.`
  },
  {
    title: '3. Sharing of Information',
    body: `We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this policy. We may share your information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We may disclose your information if we believe disclosure is in accordance with, or required by, any applicable law or legal process. In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.`
  },
  {
    title: '4. Data Retention',
    body: `We retain personal information we collect from you where we have an ongoing legitimate business need to do so — for example, to provide you with a service you have requested or to comply with applicable legal, tax, or accounting requirements. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.`
  },
  {
    title: '5. Security',
    body: `We take reasonable measures, including administrative, technical, and physical safeguards, to protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption technologies when transferring and receiving data. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`
  },
  {
    title: '6. Cookies',
    body: `We use cookies and similar tracking technologies to track activity on our services and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services. We use both session cookies, which expire when you close your browser, and persistent cookies, which remain until you delete them or they expire.`
  },
  {
    title: '7. Your Rights',
    body: `Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the personal information we hold about you, the right to restrict or object to our processing of your personal information, and the right to data portability. To exercise any of these rights, please contact us at privacy@Kaushik.com. We will respond to your request within 30 days. Please note that we may ask you to verify your identity before responding to such requests.`
  },
  {
    title: '8. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of our services after we post any modifications to the Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide by the modified policy.`
  },
  {
    title: '9. Contact Us',
    body: `If you have any questions about this Privacy Policy, please contact us at privacy@Kaushik.com or by mail at Kaushik Technologies, 123 Tech Park, Ahmedabad, Gujarat, India 380015. We are committed to resolving any complaints about our collection or use of your personal information. We will acknowledge your inquiry within 48 hours and endeavor to resolve any issues as quickly as possible.`
  }
];

export function PolicySections() {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((section, i) => (
        <div key={section.title}>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{section.body}</p>
          </div>
          {i < sections.length - 1 && <Separator className="mt-8" />}
        </div>
      ))}
    </div>
  );
}
