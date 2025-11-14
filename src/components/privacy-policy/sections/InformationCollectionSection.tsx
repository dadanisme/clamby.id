"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function InformationCollectionSection() {
  return (
    <section className="mb-12" id="infocollect">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        1. WHAT INFORMATION DO WE COLLECT?
      </motion.h2>

      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3
            className="text-xl font-semibold mb-4 text-foreground"
            id="personalinfo"
          >
            Personal information you disclose to us
          </h3>
          <p className="mb-4">
            <em>
              <strong>In Short:</strong> We collect personal information that
              you provide to us.
            </em>
          </p>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </p>

          <div className="mb-4">
            <strong className="text-foreground">
              Personal Information Provided by You.
            </strong>{" "}
            The personal information that we collect depends on the context of
            your interactions with us and the Services, the choices you make,
            and the products and features you use. The personal information we
            collect may include the following:
          </div>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>email addresses</li>
            <li>names</li>
          </ul>
        </div>

        <div id="sensitiveinfo">
          <strong className="text-foreground">Sensitive Information.</strong> We
          do not process sensitive information.
        </div>

        <div>
          <strong className="text-foreground">Payment Data.</strong> We may
          collect data necessary to process your payment if you choose to make
          purchases, such as your payment instrument number, and the security
          code associated with your payment instrument. All payment data is
          handled and stored by Apple. You may find their privacy notice link(s)
          here:{" "}
          <Link
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
          </Link>
          .
        </div>

        <div>
          <strong className="text-foreground">Social Media Login Data.</strong>{" "}
          We may provide you with the option to register with us using your
          existing social media account details, like your Facebook, X, or other
          social media account. If you choose to register in this way, we will
          collect certain profile information about you from the social media
          provider, as described in the section called{" "}
          <Link href="#sociallogins" className="text-primary hover:underline">
            HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </Link>{" "}
          below.
        </div>

        <div>
          <strong className="text-foreground">Application Data.</strong> If you
          use our application(s), we also may collect the following information
          if you choose to provide us with access or permission:
          <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
            <li>
              <em>Geolocation Information.</em> We may request access or
              permission to track location-based information from your mobile
              device, either continuously or while you are using our mobile
              application(s), to provide certain location-based services. If you
              wish to change our access or permissions, you may do so in your
              device&apos;s settings.
            </li>
            <li>
              <em>Mobile Device Access.</em> We may request access or permission
              to certain features from your mobile device, including your mobile
              device&apos;s camera and other features. If you wish to change our
              access or permissions, you may do so in your device&apos;s
              settings.
            </li>
            <li>
              <em>Push Notifications.</em> We may request to send you push
              notifications regarding your account or certain features of the
              application(s). If you wish to opt out from receiving these types
              of communications, you may turn them off in your device&apos;s
              settings.
            </li>
          </ul>
          <p className="mt-2">
            This information is primarily needed to maintain the security and
            operation of our application(s), for troubleshooting, and for our
            internal analytics and reporting purposes.
          </p>
        </div>

        <p>
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Information automatically collected
          </h3>
          <p className="mb-4">
            <em>
              <strong>In Short:</strong> Some information — such as your
              Internet Protocol (IP) address and/or browser and device
              characteristics — is collected automatically when you visit our
              Services.
            </em>
          </p>
          <p className="mb-4">
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </p>

          <p className="mb-4">The information we collect includes:</p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <em>Device Data.</em> We collect device data such as information
              about your computer, phone, tablet, or other device you use to
              access the Services. Depending on the device used, this device
              data may include information such as your IP address (or proxy
              server), device and application identification numbers, location,
              browser type, hardware model, Internet service provider and/or
              mobile carrier, operating system, and system configuration
              information.
            </li>
            <li>
              <em>Location Data.</em> We collect location data such as
              information about your device&apos;s location, which can be either
              precise or imprecise. How much information we collect depends on
              the type and settings of the device you use to access the
              Services. For example, we may use GPS and other technologies to
              collect geolocation data that tells us your current location
              (based on your IP address). You can opt out of allowing us to
              collect this information either by refusing access to the
              information or by disabling your Location setting on your device.
              However, if you choose to opt out, you may not be able to use
              certain aspects of the Services.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Google API
          </h3>
          <p>
            Our use of information received from Google APIs will adhere to{" "}
            <Link
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google API Services User Data Policy
            </Link>
            , including the{" "}
            <Link
              href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Limited Use requirements
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
