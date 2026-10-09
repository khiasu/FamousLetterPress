import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Terms & Conditions | Famous Letterpress",
  description:
    "Terms and conditions governing the use of Famous Letterpress website, services, orders, and studio craft policies.",
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen text-black select-none bg-[#FAF8F5]">
      {/* ── Breadcrumb & Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[rgba(14,14,14,0.08)] bg-white">
        <div className="w">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-black font-medium">Terms &amp; Conditions</span>
            </div>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Terms &amp; <i>Conditions.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed">
              Please review these terms and conditions carefully as they govern your visit to our website and the purchase of our letterpress prints, bespoke stationery, and services.
            </p>
          </div>
        </div>
      </section>

      {/* ── Terms Content Body ── */}
      <section className="py-16 md:py-24">
        <div className="w max-w-[860px]">
          <div className="bg-white border border-[rgba(14,14,14,0.12)] p-8 sm:p-12 md:p-16 rounded-xs shadow-[0_12px_28px_-16px_rgba(0,0,0,0.06)] space-y-12">
            {/* Introduction */}
            <div className="border-b border-[rgba(14,14,14,0.08)] pb-8">
              <p className="text-sm sm:text-base text-[#333] font-light leading-relaxed">
                Thank you for visiting <span className="font-medium text-black">www.famousletterpress.com</span>, a company incorporated under laws of India with our registered office at <strong>#415, Near Riverbelt Colony, Dimapur-797112</strong> (&ldquo;Company&rdquo;). Your visit to this website is subject to these Terms and Conditions and our Privacy Policy available here on this website.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                User Account, Password, and Security
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                You are responsible for maintaining the confidentiality of the password and account, and are fully responsible for all activities that occur under your password or account. You agree to immediately notify www.famousletterpress.com of any unauthorised use of your password or account or any other breach of security, and ensure that you exit from your account at the end of each session. www.famousletterpress.com cannot and will not be liable for any loss or damage arising from your failure to comply with this Section.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Services Offered
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                www.famousletterpress.com provides a number of Internet-based services through the Web Site (all such services, collectively, the &ldquo;Service&rdquo;). One such service enables users to purchase such as Fridge magnet, Cash envelope, Art-Print etc. (collectively, &ldquo;Products&rdquo;). Upon placing an order, www.famousletterpress.com shall ship the product to you and be entitled to its payment for the Services.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Credit Card Details
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                You agree, understand and confirm that the credit card details provided by you for availing of services on our website will be correct and accurate and you shall not use the credit card which is not lawfully owned by you. You further agree and undertake to provide the correct and valid credit card details when making payment on our website. We do not store any information related to your Credit Card/ Debit Card or Net Banking. In case we do not receive an authorization from the respective bank or the transaction gets interrupted due to any reason, the transaction will be treated as failed and no order will be processed for that transaction.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                In this case, if any amount has been deducted from your account, the same will be reverted to your account within 7-10 business days. We shall not be liable in any event, for any credit card fraud that occurs to you. The liability for use of a card fraudulently will be on you and the onus to &lsquo;prove otherwise&rsquo; shall be exclusively on you.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Our Disclosure of Your Information
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                Your personal information is an important part of our business and we are not in the business of selling it to others. www.famousletterpress.com shares your personal information only to categories of persons that are either subject to our Privacy Policy or follow practices at least as protective as those described in Privacy Policy as more particularly described below.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Pricing Information in Case of Sale by Company
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                We strive to provide you with the best prices possible on products and/or services you buy from Company; however, Company does not guarantee that the price will be the lowest in the city, region or geography. Prices and availability are subject to change without any prior notice. The prices mentioned on the Site are not subject to comparison with the same or similar product(s) and/or service(s) available through any online or offline sale. While Company strives to provide accurate product and pricing information, pricing or typographical errors may occur.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                In the event that a product is listed at an incorrect price or with incorrect information due to an error in pricing or product information, the Company may, at its discretion, either contact you for instructions or cancel your order and notify you of such cancellation. Company will have the right to modify the price of the product and contact you for further instructions using the e-mail address or telephone number provided by you during the time of registration, or cancel the order and notify you of such cancellation.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                The Sale Price is inclusive of all taxes and services such as packing, delivery, customer care, logistics and after sale services. The Company reserves the right to charge for the product and services separately in compliance with the tax laws of the Country however the total amount invoiced will not differ from the prices displayed and agreed with the buyer. In the event that Company accepts your order the same shall be debited to your credit card account. The payment may be processed prior to Company&rsquo;s dispatch of the product that you have ordered. If we have to cancel the order after we have processed the payment, the said amount will be reversed back to your account.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Payment
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                All payments must be received by us prior to shipping unless the order is placed by using Cash on delivery (COD) payment mode. We accept payment through Net-Banking, Credit Card, Debit Card, Paypal, and Google Pay.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Termination
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                www.famousletterpress.com may suspend or terminate your use of the website or any service if it believes, in its sole and absolute discretion that you have breached any of the Terms. If you or www.famousletterpress.com terminates your use of the website or any service, www.famousletterpress.com may delete any content or other materials relating to your use of the service and www.famousletterpress.com will have no liability to you or any third party for doing so. You shall be liable to pay for any service or product that you have already ordered till the time of termination by either party whatsoever. Further, you shall be entitled to your royalty payments as per the User License Agreement that has or is legally deemed accrued to you.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Fraudulent &amp; Declined Transactions
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                Our payment partners (being the Payment Gateways and facilitators and Banks) and our fraud detection team constantly monitors your account in order to avoid fraudulent accounts and transactions. Users availing discount coupons or vouchers fraudulently shall be liable for legal actions under law and we reserve the right to recover the cost of goods, collection charges and lawyers fees from persons using our website fraudulently.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                We reserve the right to initiate legal proceedings against such persons for fraudulent use of our website and any other unlawful acts or omissions in breach of these terms and conditions. In the event of detection of any fraudulent or declined transaction, prior to initiation of legal actions, we reserve the right to immediately delete such user account(s) and dishonor all past and pending orders without any liability. For the purpose of this clause, we shall owe no liability for any refunds.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Prohibited Uses of Our Website
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                You agree and confirm that you shall not use our website for any of the following purposes:
              </p>
              <ul className="space-y-2 pt-2 text-sm sm:text-[15px] text-[#444] font-light list-disc pl-5">
                <li>Disseminating any unlawful, harassing, libelous, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable material.</li>
                <li>Infringing the intellectual property rights of any third parties.</li>
                <li>Transmitting material that encourages conduct that constitutes a criminal offence, results in civil liability or otherwise breaches any relevant laws, regulations or code of practice.</li>
                <li>Gaining unauthorised access to other computer systems.</li>
                <li>Interfering with any other person&rsquo;s use or enjoyment of the website.</li>
                <li>Breaching any applicable laws, rules or regulations.</li>
                <li>Interfering or disrupting networks or web sites connected to the Website.</li>
                <li>Making, transmitting or storing electronic copies of materials protected by copyright without the permission of the copyright owner.</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Reviews, Feedback, Submissions
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                We are constantly aimed at increasing the quality of our services and open to your valuable reviews and feedbacks. All reviews, comments, feedback, postcards, suggestions, ideas, and other submissions disclosed, submitted or offered on or by our Website, submitted or offered in connection with your use of this website (collectively, the &ldquo;Comments&rdquo;) shall be and remain our property. Such disclosure, submission or offer of any comments shall constitute an assignment to us of all worldwide rights, titles and interests in all copyrights and other intellectual properties in the comments.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                Thus, we own exclusively all such rights, titles and interests and shall not be limited in any way in its use, commercial or otherwise, of any comments. We will be entitled to use, reproduce, disclose, modify, adapt, create derivative works from, publish, display and distribute any comments you submit for any purpose whatsoever, without restriction and without compensating you in any way.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay you any compensation for any comments of use of comments; or (3) to respond to any comments. You agree that any comments submitted by you to our Website shall not violate this policy or any right of any third party, including copyright, trademark, privacy or other personal or proprietary right(s), and shall not cause injury to any person or entity. You further agree that no comments submitted by you to our Website will be or contain libelous or otherwise unlawful, threatening, abusive or obscene material, or contain software viruses, bugs, worms, political campaigning, commercial solicitation, chain letters, mass mailings or any form of &ldquo;spam&rdquo;.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                We reserve the right (but not the obligation) to monitor and edit or remove any Comments submitted to our Website. You grant us the right to use the name that you submit in connection with any Comments. You undertake not to use a false email address, impersonate any person or entity, or otherwise mislead as to the origin of any Comments you submit. And You are and shall remain solely responsible for the content of any Comments that you make and you agree to indemnify us and our affiliates for all claims resulting from any Comments you submit. We and our affiliates take no responsibility and assume no liability for any Comments submitted by you or any third party.
              </p>
            </div>

            {/* Copyright */}
            <div className="border-t border-[rgba(14,14,14,0.08)] pt-8">
              <h3 className="font-serif font-medium text-lg text-black mb-2">
                Copyright Notice
              </h3>
              <p className="text-xs sm:text-sm text-[#666] font-light leading-relaxed">
                Copyright &copy; 2022&ndash;2026 www.famousletterpress.com. All rights reserved. This disclaimer/terms of service notification is subject to change without notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <section className="py-16 md:py-20 border-t border-[rgba(14,14,14,0.08)] bg-white">
        <div className="container-wide">
          <div className="max-w-xl">
            <p className="k mb-2">Famous Letterpress Studio</p>
            <h2 className="d text-[clamp(28px,5vw,44px)] leading-[1.05] font-serif text-black mb-4">
              Questions regarding our <i>terms?</i>
            </h2>
            <p className="text-xs sm:text-sm text-[#555] mb-6 font-light leading-relaxed">
              Our team is available to assist you with order inquiries, proofs, custom quotes, and legal disclosures.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20have%20a%20question%20regarding%20terms..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>CONTACT STUDIO</span>
              </a>
              <Link href="/privacy-policy" className="ln">
                VIEW PRIVACY POLICY
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
