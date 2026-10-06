import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Famous Letterpress",
  description:
    "Privacy Policy governing website use, intellectual property, submissions, communications, and client data protection at Famous Letterpress.",
};

export default function PrivacyPolicyPage() {
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
              <span className="text-black font-medium">Privacy Policy</span>
            </div>
            <p className="k mb-2">Legal &bull; Privacy &amp; Intellectual Property Protection</p>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Privacy <i>Policy.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed">
              Welcome to Famous Letterpress. Access to, and use of, this Website is subject to the following privacy terms and conditions governing your information and intellectual property.
            </p>
          </div>
        </div>
      </section>

      {/* ── Privacy Content Body ── */}
      <section className="py-16 md:py-24">
        <div className="w max-w-[860px]">
          <div className="bg-white border border-[rgba(14,14,14,0.12)] p-8 sm:p-12 md:p-16 rounded-xs shadow-[0_12px_28px_-16px_rgba(0,0,0,0.06)] space-y-12">
            {/* Welcome */}
            <div className="border-b border-[rgba(14,14,14,0.08)] pb-8 space-y-4">
              <p className="text-sm sm:text-base text-[#333] font-light leading-relaxed">
                Welcome to the Famous Letterpress Website (the &ldquo;Website&rdquo;). Access to, and use of, this Website is subject to the following terms and conditions. Please review these basic terms as they govern your use of our Website and the purchase of bespoke stationery, letterpress goods, and related property from us. Please note that use of our Website constitutes your agreement to follow and be bound by the terms and conditions contained herein.
              </p>
              <p className="text-sm sm:text-base text-[#333] font-light leading-relaxed">
                We welcome you to browse through our Website in order to gather information about our company and the projects we are developing. However, we specifically prohibit the distribution, modification, transmission, re-use, reproduction or other use of the contents of this Website without Famous Letterpress&rsquo; express prior written consent. Any unauthorized use of any of the materials contained herein is strictly prohibited.
              </p>
            </div>

            {/* General */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                General Provisions
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                We may from time to time change the terms that govern your use of our Website. Your use of our Website following any such change constitutes your agreement to follow and be bound by the terms as changed.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                We may change, move or delete portions of, or may add to, our Website from time to time without prior disclosure or warning. Any persons dealing with or purchasing products from Famous Letterpress should be aware of this fact.
              </p>
            </div>

            {/* Website Contents */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Website Contents &amp; Intellectual Property
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                Unless otherwise noted, all materials, including images, illustrations, designs, floor plans, icons, photographs, video clips, and written and other materials that appear as part of this Website (collectively the &ldquo;Contents&rdquo;) are copyrights, trademarks, trade dress and/or other intellectual properties owned, controlled or licensed by Famous Letterpress Ltd. or its subsidiaries and affiliates (collectively &ldquo;Famous Letterpress&rdquo;). The Website as a whole is protected by copyright and all worldwide right, title and interest in and to same are owned by Famous Letterpress and all other Famous Letterpress trademarks appearing at this Website are trademarks of Famous Letterpress.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                The Contents of our Website, and the Website as a whole, are intended solely for personal, noncommercial use by the users of our Website. You may download or copy the Contents and other downloadable materials displayed on the Website for your personal use only. No right, title or interest in any downloaded materials or software is transferred to you as a result of any such downloading or copying. You may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivative works from, sell or participate in any sale of, or exploit in any way, in whole or in part, any of the Contents, the Website, or any related software.
              </p>
            </div>

            {/* User Comments, Feedback, Submissions */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                User Comments, Feedback, Postcards, and Other Submissions
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                All comments, feedback, postcards, suggestions, ideas, and other submissions disclosed, submitted or offered to Famous Letterpress on or by this Website or otherwise disclosed, submitted or offered in connection with your use of this Website or any Project Site (collectively &ldquo;Comments&rdquo;) shall be and remain Famous Letterpress property. Such disclosure, submission or offer of any Comments shall constitute an assignment to Famous Letterpress of all worldwide right, title and interest in all copyrights and other intellectual properties in the Comments.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                Thus, Famous Letterpress will own exclusively all such right, title and interest and shall not be limited in any way in its use, commercial or otherwise, of any Comments. Famous Letterpress is and shall be under no obligation:
              </p>
              <ul className="space-y-1.5 text-sm sm:text-[15px] text-[#444] font-light list-disc pl-5">
                <li>To maintain any Comments in confidence;</li>
                <li>To pay to user any compensation for any Comments; or</li>
                <li>To respond to any user Comments.</li>
              </ul>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed pt-2">
                You agree that no Comments submitted by you to the Website will violate any right of any third party, including copyright, trademark, privacy or other personal or proprietary right(s). You further agree that no Comments submitted by you to the Website will be or contain libelous or otherwise unlawful, abusive or obscene material. You are and shall remain solely responsible for the content of any Comments you make.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                You agree that Famous Letterpress may use and/or disclose information about your demographics and use of the Website in any manner that does not reveal your identity. By participating in Website sweepstakes, contests, promotions, and/or requesting promotional information or product updates, you agree that Famous Letterpress may use your information for marketing and promotional purposes.
              </p>
            </div>

            {/* Communications */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Famous Letterpress Communications to You
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                By interacting with any portion of this Website or any link to any one of our project sites (a &ldquo;Project Site&rdquo;) you hereby agree that Famous Letterpress may send electronic mail to you for the purpose of providing marketing, sales or other information to you in connection with one or more Projects and the products or services being developed, crafted and offered for sale in connection therewith, and for such similar uses in respect of other Famous Letterpress projects.
              </p>
            </div>

            {/* Product Information */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Product Information &amp; Dimensions
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                The unit dimensions and specifications displayed on this Website or on any particular Project Site may not be exactly as shown therein, and may from time to time be changed or modified by Famous Letterpress in our sole and absolute discretion without notice to you or any particular purchaser in the event that we feel such a change is necessary for the overall use, marketing, or craft integrity of the particular project.
              </p>
            </div>

            {/* External Links */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Links to Other Websites and Services
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                To the extent that this Website contains links to outside services and resources, the availability and content of which Famous Letterpress does not control, any concerns regarding any such service or resource, or any link thereto, should be directed to the particular outside service or resource.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="space-y-3 bg-[#FAF8F5] border border-[rgba(14,14,14,0.08)] p-6 rounded-xs">
              <h2 className="font-serif font-medium text-xl text-black">
                Warranty &amp; Liability Disclaimer
              </h2>
              <p className="text-xs sm:text-[13.5px] text-[#444] font-light leading-relaxed uppercase tracking-wider">
                THIS WEBSITE AND ALL CONTENTS OF THE WEBSITE ARE PROVIDED ON AN &ldquo;AS IS&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. YOU ACKNOWLEDGE, BY YOUR USE OF THE WEBSITE, THAT YOUR USE OF THE WEBSITE IS AT YOUR SOLE RISK, THAT YOU ASSUME FULL RESPONSIBILITY FOR ALL COSTS ASSOCIATED WITH ALL NECESSARY SERVICING OR REPAIRS OF ANY EQUIPMENT YOU USE IN CONNECTION WITH YOUR USE OF OUR WEBSITE, AND THAT FAMOUS LETTERPRESS SHALL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND RELATED TO YOUR USE OF THIS WEBSITE.
              </p>
            </div>

            {/* Inaccuracy Disclaimer */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Inaccuracy Disclaimer
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                From time to time there may be information on our Website or a Project Site that contains typographical errors, inaccuracies, or omissions that may relate to product descriptions, pricing, and availability. We reserve the right to correct any errors, inaccuracies or omissions and to change or update information at any time without prior notice (including after you have submitted your order). We apologize for any inconvenience this may cause you.
              </p>
            </div>

            {/* Waiver and Indemnification */}
            <div className="space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Waiver and Indemnification
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                You hereby waive and release Famous Letterpress from any actions, causes of actions, demands, losses or suits of any nature or kind, whether at law, in equity or otherwise, and you agree to defend, indemnify and hold Famous Letterpress harmless from and against any and all claims, damages, costs and expenses, including attorneys&rsquo; fees, which in any way relate to, or connect with, arise from or related to your use of this Website or any Project Site. Famous Letterpress shall not be liable for any direct, incidental, consequential, indirect or punitive damages arising out of access to or use of any of the contents on this Website or any Project Site, regardless of the accuracy or completeness of any such contents.
              </p>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                Famous Letterpress assumes no liability for the use or interpretation of any information contained herein.
              </p>
            </div>

            {/* Governing Law */}
            <div className="border-t border-[rgba(14,14,14,0.08)] pt-8 space-y-3">
              <h2 className="font-serif font-medium text-2xl text-black">
                Governing Law &amp; Jurisdiction
              </h2>
              <p className="text-sm sm:text-[15px] text-[#444] font-light leading-relaxed">
                The use of this Website shall be construed in accordance with the laws of <strong>Nagaland, INDIA</strong>, without regard to any conflict of law provisions. Any dispute arising out of the use of this Website shall be resolved exclusively by the courts of the state of Nagaland, India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <section className="py-16 md:py-20 text-center border-t border-[rgba(14,14,14,0.08)] bg-white">
        <div className="max-w-xl mx-auto px-6">
          <p className="k mb-2">Famous Letterpress Studio</p>
          <h2 className="d text-[clamp(28px,5vw,44px)] leading-[1.05] font-serif text-black mb-4">
            Questions regarding our <i>policies?</i>
          </h2>
          <p className="text-xs sm:text-sm text-[#555] max-w-md mx-auto mb-6 font-light leading-relaxed">
            Reach out to our studio team directly for any clarifications regarding privacy, client files, or ordering procedures.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="/contact" className="btn">
              Contact Studio
            </Link>
            <Link href="/terms-conditions" className="ln">
              View Terms &amp; Conditions &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
