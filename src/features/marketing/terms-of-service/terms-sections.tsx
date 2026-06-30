import { Separator } from '@/components/ui/separator';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using any part of the Kaushik platform, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the platform or use any services. These Terms of Service apply to all visitors, users, and others who access or use the service. We reserve the right to update and change these Terms of Service from time to time without notice. Continued use of the platform after any such changes shall constitute your consent to such changes.`
  },
  {
    title: '2. Use of the Service',
    body: `You may use the service only for lawful purposes and in accordance with these Terms. You agree not to use the service in any way that violates any applicable local, national, or international law or regulation, or to transmit any unsolicited or unauthorized advertising or promotional material. You agree not to impersonate or attempt to impersonate Kaushik, a Kaushik employee, another user, or any other person or entity. You also agree not to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the service, or which may harm Kaushik or users of the service.`
  },
  {
    title: '3. Accounts and Registration',
    body: `When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of these Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.`
  },
  {
    title: '4. Intellectual Property',
    body: `The service and its original content, features, and functionality are and will remain the exclusive property of Kaushik and its licensors. The service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Kaushik. You acknowledge that you have no right, title, or interest in or to the service or any content in the service other than the limited right to use the service in accordance with these Terms.`
  },
  {
    title: '5. Payment and Billing',
    body: `Certain aspects of the service may be provided for a fee or other charge. If you elect to use paid aspects of the service, you agree to the pricing and payment terms, as we may update them from time to time. Kaushik may add new services for additional fees and charges, or amend fees and charges for existing services, at any time in its sole discretion. Any change to our pricing or payment terms shall become effective in the billing cycle following notice of such change to you. All fees are exclusive of applicable taxes, levies, or duties.`
  },
  {
    title: '6. Termination',
    body: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service or contact us to request account deletion. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.`
  },
  {
    title: '7. Disclaimer of Warranties',
    body: `The service is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Kaushik does not warrant that the service will function uninterrupted, secure, or available at any particular time or location, that any errors or defects will be corrected, that the service is free of viruses or other harmful components, or that the results of using the service will meet your requirements.`
  },
  {
    title: '8. Limitation of Liability',
    body: `In no event shall Kaushik, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) the service, any conduct or content of any third party on the service, any content obtained from the service, or unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort, or any other legal theory.`
  },
  {
    title: '9. Governing Law',
    body: `These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`
  },
  {
    title: '10. Contact Us',
    body: `If you have any questions about these Terms of Service, please contact us at legal@Kaushik.com or by mail at Kaushik Technologies, 123 Tech Park, Ahmedabad, Gujarat, India 380015. We will make every effort to resolve any concerns you may have. For urgent legal matters, please mark your correspondence as "URGENT — LEGAL" and we will prioritize your inquiry accordingly.`
  }
];

export function TermsSections() {
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
