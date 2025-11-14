"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function USResidentsSection() {
  return (
    <section className="mb-12" id="uslaws">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
      </motion.h2>

      <div className="space-y-6 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> If you are a resident of California,
            Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
            Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey,
            Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may
            have the right to request access to and receive details about the
            personal information we maintain about you and how we have processed
            it, correct inaccuracies, get a copy of, or delete your personal
            information. You may also have the right to withdraw your consent to
            our processing of your personal information. These rights may be
            limited in some circumstances by applicable law. More information is
            provided below.
          </em>
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Categories of Personal Information We Collect
          </h3>
          <p className="mb-4">
            The table below shows the categories of personal information we have
            collected in the past twelve (12) months. The table includes
            illustrative examples of each category and does not reflect the
            personal information we collect from you. For a comprehensive
            inventory of all personal information we process, please refer to
            the section{" "}
            <Link href="#infocollect" className="text-primary hover:underline">
              WHAT INFORMATION DO WE COLLECT?
            </Link>
            .
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">
                    Category
                  </th>
                  <th className="border border-border p-3 text-left">
                    Examples
                  </th>
                  <th className="border border-border p-3 text-left">
                    Collected
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">A. Identifiers</td>
                  <td className="border border-border p-3">
                    Contact details, such as real name, alias, postal address,
                    telephone or mobile contact number, unique personal
                    identifier, online identifier, Internet Protocol address,
                    email address, and account name
                  </td>
                  <td className="border border-border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    B. Personal information as defined in the California
                    Customer Records statute
                  </td>
                  <td className="border border-border p-3">
                    Name, contact information, education, employment, employment
                    history, and financial information
                  </td>
                  <td className="border border-border p-3">YES</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    C. Protected classification characteristics under state or
                    federal law
                  </td>
                  <td className="border border-border p-3">
                    Gender, age, date of birth, race and ethnicity, national
                    origin, marital status, and other demographic data
                  </td>
                  <td className="border border-border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    D. Commercial information
                  </td>
                  <td className="border border-border p-3">
                    Transaction information, purchase history, financial
                    details, and payment information
                  </td>
                  <td className="border border-border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    E. Biometric information
                  </td>
                  <td className="border border-border p-3">
                    Fingerprints and voiceprints
                  </td>
                  <td className="border border-border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    F. Internet or other similar network activity
                  </td>
                  <td className="border border-border p-3">
                    Browsing history, search history, online behavior, interest
                    data, and interactions with our and other websites,
                    applications, systems, and advertisements
                  </td>
                  <td className="border border-border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    G. Geolocation data
                  </td>
                  <td className="border border-border p-3">Device location</td>
                  <td className="border border-border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    H. Audio, electronic, sensory, or similar information
                  </td>
                  <td className="border border-border p-3">
                    Images and audio, video or call recordings created in
                    connection with our business activities
                  </td>
                  <td className="border border-border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    I. Professional or employment-related information
                  </td>
                  <td className="border border-border p-3">
                    Business contact details in order to provide you our
                    Services at a business level or job title, work history, and
                    professional qualifications if you apply for a job with us
                  </td>
                  <td className="border border-border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    J. Education Information
                  </td>
                  <td className="border border-border p-3">
                    Student records and directory information
                  </td>
                  <td className="border border-border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    K. Inferences drawn from collected personal information
                  </td>
                  <td className="border border-border p-3">
                    Inferences drawn from any of the collected personal
                    information listed above to create a profile or summary
                    about, for example, an individual&apos;s preferences and
                    characteristics
                  </td>
                  <td className="border border-border p-3">NO</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    L. Sensitive personal Information
                  </td>
                  <td className="border border-border p-3"></td>
                  <td className="border border-border p-3">NO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <p className="mb-4">
            We may also collect other personal information outside of these
            categories through instances where you interact with us in person,
            online, or by phone or mail in the context of:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Receiving help through our customer support channels;</li>
            <li>Participation in customer surveys or contests; and</li>
            <li>
              Facilitation in the delivery of our Services and to respond to
              your inquiries.
            </li>
          </ul>
          <p className="mt-4">
            We will use and retain the collected personal information as needed
            to provide the Services or for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
            <li>Category B - 6 months</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Sources of Personal Information
          </h3>
          <p>
            Learn more about the sources of personal information we collect in{" "}
            <Link href="#infocollect" className="text-primary hover:underline">
              WHAT INFORMATION DO WE COLLECT?
            </Link>
            .
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            How We Use and Share Personal Information
          </h3>
          <p>
            Learn more about how we use your personal information in the
            section,{" "}
            <Link href="#infouse" className="text-primary hover:underline">
              HOW DO WE PROCESS YOUR INFORMATION?
            </Link>
            .
          </p>
        </div>

        <div>
          <strong className="text-foreground">
            Will your information be shared with anyone else?
          </strong>
          <p className="mt-2">
            We may disclose your personal information with our service providers
            pursuant to a written contract between us and each service provider.
            Learn more about how we disclose personal information to in the
            section,{" "}
            <Link href="#whoshare" className="text-primary hover:underline">
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </Link>
            .
          </p>
          <p className="mt-2">
            We may use your personal information for our own business purposes,
            such as for undertaking internal research for technological
            development and demonstration. This is not considered to be
            &quot;selling&quot; of your personal information.
          </p>
          <p className="mt-2">
            We have not sold or shared any personal information to third parties
            for a business or commercial purpose in the preceding twelve (12)
            months.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Your Rights
          </h3>
          <p className="mb-4">
            You have rights under certain US state data protection laws.
            However, these rights are not absolute, and in certain cases, we may
            decline your request as permitted by law. These rights include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Right to know</strong> whether or not we are processing
              your personal data
            </li>
            <li>
              <strong>Right to access</strong> your personal data
            </li>
            <li>
              <strong>Right to correct</strong> inaccuracies in your personal
              data
            </li>
            <li>
              <strong>Right to request</strong> the deletion of your personal
              data
            </li>
            <li>
              <strong>Right to obtain a copy</strong> of the personal data you
              previously shared with us
            </li>
            <li>
              <strong>Right to non-discrimination</strong> for exercising your
              rights
            </li>
            <li>
              <strong>Right to opt out</strong> of the processing of your
              personal data if it is used for targeted advertising (or sharing
              as defined under California&apos;s privacy law), the sale of
              personal data, or profiling in furtherance of decisions that
              produce legal or similarly significant effects
              (&quot;profiling&quot;)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            How to Exercise Your Rights
          </h3>
          <p>
            To exercise these rights, you can contact us by submitting a{" "}
            <Link
              href="https://app.termly.io/dsar/88b1a9ed-cd18-4b1c-ad6c-615e467afd55"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              data subject access request
            </Link>
            , by emailing us at{" "}
            <Link
              href="mailto:support@clamby.id"
              className="text-primary hover:underline"
            >
              support@clamby.id
            </Link>
            , or by referring to the contact details at the bottom of this
            document.
          </p>
          <p className="mt-4">
            Under certain US state data protection laws, you can designate an
            authorized agent to make a request on your behalf. We may deny a
            request from an authorized agent that does not submit proof that
            they have been validly authorized to act on your behalf in
            accordance with applicable laws.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Request Verification
          </h3>
          <p>
            Upon receiving your request, we will need to verify your identity to
            determine you are the same person about whom we have the information
            in our system. We will only use personal information provided in
            your request to verify your identity or authority to make the
            request. However, if we cannot verify your identity from the
            information already maintained by us, we may request that you
            provide additional information for the purposes of verifying your
            identity and for security or fraud-prevention purposes.
          </p>
          <p className="mt-4">
            If you submit the request through an authorized agent, we may need
            to collect additional information to verify your identity before
            processing your request and the agent will need to provide a written
            and signed permission from you to submit such request on your
            behalf.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Appeals
          </h3>
          <p>
            Under certain US state data protection laws, if we decline to take
            action regarding your request, you may appeal our decision by
            emailing us at{" "}
            <Link
              href="mailto:support@clamby.id"
              className="text-primary hover:underline"
            >
              support@clamby.id
            </Link>
            . We will inform you in writing of any action taken or not taken in
            response to the appeal, including a written explanation of the
            reasons for the decisions. If your appeal is denied, you may submit
            a complaint to your state attorney general.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            California &quot;Shine The Light&quot; Law
          </h3>
          <p>
            California Civil Code Section 1798.83, also known as the &quot;Shine
            The Light&quot; law, permits our users who are California residents
            to request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us by using the contact
            details provided in the section{" "}
            <Link href="#contact" className="text-primary hover:underline">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
