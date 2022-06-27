<template>
  <q-page>
    <section>
      <div class="container">
        <div class="text-h1 text-white">{{ $t('imprintPage.imprint.heading') }}</div>

        <div class="text-h2 text-white">{{ $t('imprintPage.imprint.subtitleParagraph') }}</div>
        <div class="text-body1 text-lightest q-pb-xl">
          Benjamin Saalfeld<br>
          Bursweg 4<br>
          26632 Ihlow<br>
          {{ $t('imprintPage.imprint.country') }}
        </div>

        <div class="text-h2 text-white">{{ $t('imprintPage.imprint.subtitleContact') }}</div>
        <div class="text-body1 text-lightest q-pb-xl">
          E-Mail: baeni.saa@gmail.com<br>
          Internet: www.baeni.de
        </div>

        <div class="text-h1 text-white">{{ $t('imprintPage.privacyPolicy.heading') }}</div>
        <div class="text-body1 text-lightest q-pb-xl">
          At baeni's personal website, accessible from https://baeni.de and https://dev.baeni.de, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by baeni's personal website and how we use it.

          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

          This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in baeni's personal website. This policy is not applicable to any information collected offline or via channels other than this website.
        </div>

        <div class="text-h2 text-white">{{ $t('imprintPage.privacyPolicy.subtitleConsent') }}</div>
        <div class="text-body1 text-lightest q-pb-xl">
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </div>

        <div class="text-h2 text-white">{{ $t('imprintPage.privacyPolicy.subtitleCollect') }}</div>
        <div class="text-body1 text-lightest q-pb-xl">
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

          When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
        </div>

        <div class="text-h2 text-white">{{ $t('imprintPage.privacyPolicy.subtitleUse') }}</div>
        <div class="text-body1 text-lightest q-pb-xl">
          We use the information we collect in various ways, including to:

          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
        </div>

        <div class="text-h2 text-white">{{ $t('imprintPage.privacyPolicy.subtitleLog') }}</div>
        <div class="text-body1 text-lightest q-pb-xl">
          baeni's personal website follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
        </div>

        <div class="text-h2 text-white">{{ $t('imprintPage.privacyPolicy.subtitleCookies') }}</div>
        <div class="text-body1 text-lightest q-pb-xl">
          Like any other website, baeni's personal website uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.

          For more general information on cookies, please head over to https://www.cookiesandyou.com.
        </div>

        <div class="text-h2 text-white">{{ $t('imprintPage.privacyPolicy.subtitlePartners') }}</div>
        <div class="text-body1 text-lightest q-pb-xl">
          You may consult this list to find the Privacy Policy for each of the advertising partners of baeni's personal website.

          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on baeni's personal website, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

          Note that baeni's personal website has no access to or control over these cookies that are used by third-party advertisers.
        </div>

        <div class="text-h2 text-white">{{ $t('imprintPage.privacyPolicy.subtitleThirdParty') }}</div>
        <div class="text-body1 text-lightest q-pb-xl">
          baeni's personal website's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

          You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
        </div>

        <div class="text-h2 text-white">{{ $t('imprintPage.privacyPolicy.subtitleChildren') }}</div>
        <div class="text-body1 text-lightest">
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

          baeni's personal website does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'TermsOfServicePage'
}
</script>
