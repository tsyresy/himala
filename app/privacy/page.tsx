import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-luxury font-bold text-gold-gradient">
              Privacy Policy
            </h1>
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs mt-2 font-light">Effective Date: May 5, 2026</p>
          </div>
        </div>

        <div className="prose prose-invert prose-gold max-w-none space-y-16 font-light text-white/70 leading-relaxed text-lg">
          <section className="space-y-6">
            <p>
              Maison Himala ("Maison Himala", "we", "our" or "us") is committed to protecting your privacy. This Privacy
              Policy applies to Maison Himala services, including but not limited to the Maison Himala website at maisonhimala.com
              ("Website"), and any other product or service to which we apply this Privacy Policy
              (collectively, "Service"), and details how we access, collect and use personal data (personal
              information) shared by you ("you" or "your").
            </p>
            <p className="font-bold text-white tracking-wide italic">
              BY CLICKING "I AGREE" OR SIMILAR CONFIRMATION, OR BY USING THE SERVICE YOU ARE AGREEING
              TO THE TERMS OF THIS PRIVACY POLICY.
            </p>
            <p className="bg-white/5 p-8 border-l-2 border-primary/30 italic text-sm md:text-base">
              IF YOU ARE USING THE SERVICE ON BEHALF OF AN ORGANIZATION, YOU
              REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND THE ORGANIZATION
              TO THIS PRIVACY POLICY AND ARE AGREEING TO THIS PRIVACY POLICY
              FOR THAT ORGANIZATION. WHERE YOU ARE USING THE SERVICE ON
              BEHALF OF AN ORGANIZATION "YOU" AND "YOUR" REFERS TO THE
              ORGANIZATION.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">1. Description of the Service</h2>
            <p>
              The Service provides individuals with the opportunity to engage with businesses providing select
              products, brands and services, enabling individual users to search, review and obtain discounts,
              promotions and related benefits. The Service also provides businesses and entrepreneurs the
              opportunity to connect with potential customers while promoting or advertising their goods and
              services. In order to provide the Service to both individual and business users, Maison Himala may require
              access to your personal data. This Privacy Policy describes how we access, collect and use
              personal data regarding our users, including you.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">2. How We Obtain Personal Data</h2>
            <p>
              The Service involves accessing, collecting and processing personal data, which is information
              about you or that can be used to identify you. We obtain your personal data when you choose to
              provide it directly to us, such as when you register an account on the Service, or indirectly, when
              you use certain aspects of the Service, such as the Website. Your provision of personal data is
              governed by this Privacy Policy and our Terms of Service ("Terms"), which you must agree to
              in order to access or use the Service.
            </p>
            <p>
              Subject to our legal, contractual and technical requirements, you may choose not to provide
              Maison Himala with certain personal data and/or request the deletion of personal data we have collected
              about you. Note that opting out of certain data collection or requesting the deletion of your data
              may impact essential operations of the Service. If you have any questions or concerns about the
              collection or disclosure of your personal data, please contact Maison Himala using the contact information
              found below.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">3. Personal Data We Collect</h2>
            <p>
              The following is a description of the personal data that we may access, collect, use and process
              in connection with the operation of the Service:
            </p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>your full name, username, email address, mailing address, telephone number, contact preferences
                and other contact, account or authentication information;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>your payment data, if you make purchases on the Service, which is processed solely by
                authorized third-parties such as Stripe and encrypted through the Payment Card Industry
                Data Security Standard (PCI-DSS);</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>cookies and similar tracking technologies to track activities on the Service; and</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>derivative and usage data, including geolocation data, information about your computer,
                phone, mobile device, web-connected device or other devices used to connect to the
                Service, your Internet Protocol address (i.e. IP address), web-browser type, operating
                system, access times, page history, transaction and purchase history, and website
                analytics.</span>
              </li>
            </ul>
            <p>
              Maison Himala may also collect anonymous data that does not identify you, including but not limited to
              responses to anonymous surveys and feedback requests, metrics and other types of statistical
              data, which could be derived from your use of the Service and analytical data concerning the
              Service. Maison Himala may also aggregate, anonymize and/or de-identify the personal data it collects
              about you. We have implemented commercially reasonable security measures to properly
              encrypt, anonymize and/or de-identify such data. Maison Himala does not attempt to re-identify any
              previously anonymized or de-identified data.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">4. Processing of Personal Data</h2>
            <p>We process your personal data for our legitimate business purposes. These uses include but are not limited to:</p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>providing the Service to you, including tailoring certain aspects of the Service to your specific
                needs and preferences;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>facilitating account creation, authentication and management;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>contacting you for various reasons, including when providing customer support for the Service
                and sending administrative information to you;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>sending promotional and marketing communications to you, if this is in accordance with your
                marketing and communication preferences and you have not changed those preferences;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>delivering personalized advertising and targeted promotions tailored to your interests, location
                and preferences;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>understanding your needs in order to improve the quality of the Service, including by using your
                support and feedback, providing you additional support, analyzing functionality and technical
                issues, tracking use of the Service and generating internal reports and data models to facilitate
                updates and improvements;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>using cookies and third-party data website analytics software to understand use of the Service
                and activity within the Service;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>protecting and supporting the security and integrity of the Service and users, including by
                detecting illegal, improper, suspicious or dangerous activity and taking steps to protect you,
                Maison Himala and third-parties against fraud, theft, piracy, error and other risks;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>for contractual, legal, regulatory or audit obligations, including responding to requests from law
                enforcement or a government agency asserting lawful authority to obtain the data or where Maison Himala
                has reasonable grounds to believe the data could be useful in the investigation of unlawful
                activity, complying with a subpoena or warrant or an order made by a court, person or body with
                jurisdiction to compel the production of data, complying with court rules regarding the
                production of records and data, defending Maison Himala in a legal, regulatory or administrative
                proceeding or in a contractual dispute or providing information to our legal counsel.</span>
              </li>
            </ul>
            <p>
              We may disclose personal data to our parent companies, affiliates, subsidiaries, employees and
              contractors for the same purposes described above. Personal data shared with such persons and
              entities is shared only where the parties are subject to strict confidentiality obligations.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">5. Third-Party Services</h2>
            <p>
              This Privacy Policy only applies to the personal data that Maison Himala accesses, collects, processes and
              discloses itself and does not extend to the access, collection, processing and disclosure of data by
              third parties through third-party services, including Stripe, Google, Meta/Facebook, Web
              Hosting Canada and Persona, which may be broader than set forth in this Privacy Policy, and that
              may be embedded into the Service. Maison Himala uses these third party services for the same purposes as
              described in Section 4 above and such third parties act as a data processor, subject to the terms of
              data processing agreements. In many cases, third parties may collect personal data about online
              activities over time and across different websites and services. We strongly encourage you to
              read each third-party privacy policy carefully before using the Service. Please contact us directly
              using the information found below to learn more about third-party data practices.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">6. Cookies and Tracking Technologies</h2>
            <p>
              The Service uses tracking technologies, such as cookies, pixels and Google Analytics, to collect
              personal data, such as IP addresses and device information. Based on this data, third-parties may
              be able to resolve identities across multiple devices. This data is collected, used and disclosed in
              accordance with the terms of this Privacy Policy and the applicable third-party privacy policies.
              Certain Service features may rely on tracking technologies and by declining to accept cookies or
              by changing certain settings on a device, these features may stop working. You have the
              right to opt-in and opt-out of certain cookies that are not necessary for the operations of the
              Service, including third-party cookies, and may do so by managing your cookie preferences
              directly on the Website or by contacting Maison Himala using the information below.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">7. Obtaining, Rectifying and Controlling Personal Data</h2>
            <p>
              You may contact Maison Himala to obtain a copy of any personal data we have collected about you, the
              production of which may be subject to a fee as permitted by applicable law. You may also
              contact Maison Himala to correct inaccurate personal data or to complete incomplete personal data.
            </p>
            <p>
              You may be able to opt-out of some or all of the ways in which personal data is processed, or
              request the deletion of certain personal data, except where the personal data is necessary or vital
              for:
            </p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>the performance of our contractual obligations, such as the Terms or any other agreement
                between you and Maison Himala;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>to comply with our legal obligations;</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>protecting your interests or those of another person; and</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-primary mt-1">●</span>
                <span>our legitimate interests or the legitimate interests of a third-party,</span>
              </li>
            </ul>
            <p>
              and may do so by requesting deletion by contacting us using the contact information found
              below. In the event you are not satisfied with Maison Himala's response to your exercise of a privacy right,
              you may submit an appeal to Maison Himala for further information concerning our decision or to seek re-
              consideration of your request.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">8. Data Storage and Retention</h2>
            <p>
              While Maison Himala is a Canadian company, the personal data provided through the Service may be
              stored and processed by third parties in countries around the world. By using the Service, you
              authorize Maison Himala and third parties acting on our behalf to process personal data in any country of
              their choosing, which may cause the data that we access, including personal data, to be subject to
              privacy protections and legal rights that may not be equivalent to those in your country.
            </p>
            <p>
              Personal data that is retained by Maison Himala is only retained until you request its deletion, until Maison Himala
              no longer requires such data for the purpose for which it was collected, or as long as required by
              applicable law. Maison Himala may aggregate, anonymize and/or de-identify personal data, and retain
              such de-identified data for purposes and time periods permitted by applicable law.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">9. Children</h2>
            <p>
              Maison Himala complies with the U.S. Children's Online Privacy Protection Act and other applicable
              laws and regulations concerning children and the Internet. The Service and Website are not
              directed to children under the age of 18 and we do not knowingly solicit or collect any personal
              data from children under the age of 18. If Maison Himala is made aware of the fact that we may have
              inadvertently collected data from children under the age of 18, we will promptly take measures
              to delete the data from our records. If you are the parent or guardian of a child who you believe
              may have provided Maison Himala with personal data without your consent, please contact us using the
              information below.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">10. Do Not Track Disclosure</h2>
            <p>
              Do Not Track ("DNT") is a web or device setting that allows you to request that receivers of
              personal data stop their tracking activities. When you choose to turn on the DNT setting in your
              browser or device or use alternative consumer choice mechanisms, your browser or device sends
              a special signal to websites, analytics companies, advertising networks, plug-in providers and
              other web services you encounter to stop tracking your activity. Currently, there are no DNT
              technology standards and, as a result, we do not respond to DNT requests.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">11. California "Shine the Light" Right</h2>
            <p>
              If you are a California resident, California Civil Code 1798.83 grants you the right to request
              disclosure of the categories of personal data we control and provide to third parties, and the
              names and addresses of these third parties, for direct marketing purposes during the preceding
              calendar year. If you are a California resident and would like to make this request, please contact
              us using the contact information set forth below.
            </p>
            <p>Please note that you may only make this request once per year.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">12. Your California Privacy Rights</h2>
            <p>
              If you are a California resident, California Civil Code Section 1798.120 permits you to opt-out of
              the sale and sharing of your personal information to third parties. Currently, Maison Himala does not sell
              or share your personal information to third parties except for those third-party services directly
              embedded within the Service and acting as a data processor of Maison Himala. Although Maison Himala does not
              sell or share your personal information to third parties without consent, Maison Himala does provide a
              general opt-out right to all of our users. If you have any other questions about our privacy
              practices, please email us using the contact information below.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">13. Change of Ownership or Business Transition</h2>
            <p>
              In the event of, or in preparation for, a change of ownership or control of Maison Himala or a business
              transition such as the sale of some or all Maison Himala's assets, we may disclose and/or transfer your
              personal and anonymous data to third-parties who will have the right to continue to collect and
              use such data in the manner set forth in this Privacy Policy.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">14. Security</h2>
            <p>
              We are committed to ensuring that your data is secure. To prevent unauthorized access,
              disclosure, or breach, we have put in place suitable and commercially reasonable physical,
              electronic, and administrative procedures to safeguard and secure the data we collect and
              process, including appropriate protections for any sensitive personal data we access, process or
              collect. Despite Maison Himala's efforts to adequately protect your personal data, no electronic
              transmission can be guaranteed to be fully secure. As a result, our security measures may be
              compromised by hackers, cybercriminals and other unauthorized third parties attempting to
              improperly collect, access, steal and/or modify your information. You acknowledge and agree
              that the transmission of personal data to and from the Service is at your own risk and that you
              should only access the Service from a secure environment.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">15. Contact Preferences</h2>
            <p>
              We will communicate with you through the Website, your email address and/or phone, to
              respond to support requests or comments. If you have provided us with your email address and
              would like to change the email preferences we associate with you (for example, unsubscribing
              from receiving certain types of email) you may do so by clicking a link within certain types of
              emails that we send to you or, if no link is available, by replying with "unsubscribe" in the email
              title or body. On rare occasions, some types of email are necessary for the Service and cannot be
              unsubscribed from if you continue to use the Service.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">16. Updates</h2>
            <p>
              Maison Himala reserves the right, in its sole discretion, to modify this Privacy Policy at any time (each, an
              "Update") and shall make each Update available on the Website. You are deemed to accept an
              Update by continuing to use the Service. Unless Maison Himala states otherwise, an Update is
              automatically effective 30 days after posting on the Website, except in such case where an
              Update is immaterial to any of your legal rights or legal obligations of Maison Himala and such Update is
              made only to correct a typographical, formatting or grammar inaccuracy, and in such case, an
              Update is effective immediately after posting on the Website.
            </p>
          </section>

          <section className="pt-16 border-t border-white/10">
            <h2 className="text-3xl font-luxury text-white mb-12 uppercase tracking-widest">17. Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Privacy Team</p>
                <p className="text-primary text-xl">contact@maisonhimala.com</p>
              </div>
              <div className="space-y-4">
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Our Headquarters</p>
                <p className="text-white/80 leading-relaxed">
                  Maison Himala<br />
                  13345 115 Ave Surrey<br />
                  British Columbia, Canada<br />
                  V3R 0R8
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

