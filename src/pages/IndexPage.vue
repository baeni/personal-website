<template>
  <q-page>
    <!-- landing -->
    <section class="window-height flex flex-center">
      <!-- <video class="absolute-top window-width window-height" src="~assets/waves.mp4" autoplay loop /> -->
      <div class="container row q-col-gutter-x-lg">
        <q-img class="col-3" fit="contain" src="~assets/logo.png" />
        <div class="col-9 q-my-auto">
          <div class="text-subtitle1 text-lightest">
            <span class="text-h1 text-white">{{ $t('indexPage.landing.heading') }}</span>
            {{ $t('indexPage.landing.subtitle') }}
          </div>
        </div>
      </div>
    </section>

    <!-- contact -->
    <section id="contact">
      <div class="container">
        <div class="text-h3 text-light text-uppercase text-center q-pb-lg">{{ $t('indexPage.contact.heading') }}</div>
        <contact-list :contacts="contacts" />
      </div>
    </section>

    <!-- portfolio -->
    <section id="portfolio">
      <div class="container">
        <div class="text-h3 text-light text-uppercase text-center q-pb-lg">{{ $t('indexPage.portfolio.heading') }}</div>
        <project-list :projects="projects" />
      </div>
    </section>
  </q-page>
</template>

<script>
import ContactList from 'components/ContactList';
import ProjectList from "components/ProjectList";

const contacts = [
  {
    thumbnail: '/contacts/discord.png',
    title: 'Discord',
    description: 'Lorem ipsum dolar sit amet',
    destination: 'https://discord.com'
  },
  {
    thumbnail: '/contacts/facebook.png',
    title: 'Facebook',
    description: 'Lorem ipsum dolar sit amet',
    destination: 'https://facebook.com'
  },
  {
    thumbnail: '/contacts/github.png',
    title: 'Github',
    description: 'Lorem ipsum dolar sit amet',
    destination: 'https://github.com/baeni'
  },
  {
    thumbnail: '/contacts/instagram.png',
    title: 'Instagram',
    description: 'Lorem ipsum dolar sit amet',
    destination: 'https://facebook.com'
  }
];

const projects = [
  {
    thumbnail: "projects/moovy.png",
    tags: [
      "moovy",
      "movie finder"
    ],
    destination: "https://moovy.baeni.de"
  },
  {
    thumbnail: "projects/shortener.png",
    tags: [
      "link shortener",
      "url shortener"
    ],
    destination: "/#/shortener"
  }
];

export default {
  name: 'IndexPage',
  components: {
    ContactList,
    ProjectList
  },
  data() {
    return {
      projects: projects,
      contacts: contacts
    }
  }
}
</script>

<style lang="scss" scoped>
video {
  z-index: -99;
  filter: brightness(.25);
}
</style>
