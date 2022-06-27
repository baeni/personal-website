<template>
  <q-page>
    <!-- landing -->
    <section id="landing" class="flex window-height">
      <q-img class="absolute-top full-width window-height" style="z-index: -99; opacity: .075;" src="~assets/background.jpg" />
      <div class="container row q-col-gutter-x-xl">
        <q-img v-if="$q.screen.gt.xs" class="col-2" fit="contain" src="https://brand.baeni.de/logo-blue@256.png" />
        <div class="col-10 q-my-auto">
          <div class="text-h1 text-white text-hammersmith-one">{{ $t('indexPage.landing.heading') }}</div>
          <div class="text-subtitle1 text-lightest">
            {{ $t('indexPage.landing.subtitle') }}
          </div>
          <contact-list class="q-pt-lg" :contacts="contacts" />
        </div>
      </div>
    </section>

    <!-- projects -->
    <section id="projects">
      <div class="container">
        <div class="text-h3 text-light text-uppercase text-center q-pb-lg">{{ $t('indexPage.projects.heading') }}</div>
        <project-list :projects="projects" />
      </div>
    </section>

    <!-- contact -->
    <!--
    <section id="contact">
      <div class="container">
        <div class="text-h3 text-light text-uppercase text-center q-pb-lg">{{ $t('indexPage.contact.heading') }}</div>
        <contact-list :contacts="contacts" />
      </div>
    </section>
    -->
  </q-page>
</template>

<script>
import ProjectList from "components/ProjectList";
import ContactList from 'components/ContactList';

const contacts = [
  {
    thumbnail: '/contacts/discord.png',
    title: 'Discord',
    destination: 'https://discord.com/invite/AJr2d8Z'
  },
  {
    thumbnail: '/contacts/github.png',
    title: 'Github',
    destination: 'https://github.com/baeni'
  },
  {
    thumbnail: '/contacts/instagram.png',
    title: 'Instagram',
    destination: 'https://instagram.com/benny.sfd'
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
      contacts: contacts
    }
  },
  computed: {
    projects() {
      return this.$store.getters['GithubModule/getRepositories'];
    }
  }
}
</script>
