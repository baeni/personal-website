<template>
  <q-page>
    <!-- landing -->
    <section class="flex window-height">
      <!-- <q-img class="absolute-top window-width window-height" style="z-index: -99; opacity: .075;" src="~assets/squares.gif" /> -->
      <video class="absolute-top window-width window-height" style="z-index: -99; opacity: .175;" src="~assets/waves.mp4" autoplay loop />
      <div class="container q-py-xl row q-col-gutter-x-lg">
        <q-img class="col-2" fit="contain" src="~assets/logo.png" />
        <div class="col-10 q-my-auto">
          <div class="text-subtitle1 text-lightest">
            <span class="text-h1 text-white text-hammersmith-one">{{ $t('indexPage.landing.heading') }}</span>
            {{ $t('indexPage.landing.subtitle') }}
          </div>
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
    <section id="contact">
      <div class="container">
        <div class="text-h3 text-light text-uppercase text-center q-pb-lg">{{ $t('indexPage.contact.heading') }}</div>
        <contact-list :contacts="contacts" />
      </div>
    </section>
  </q-page>
</template>

<script>
import ProjectList from "components/ProjectList";
import ContactList from 'components/ContactList';

const contacts = [
  {
    thumbnail: '/contacts/discord.png',
    title: 'Discord',
    description: 'Lorem ipsum dolar sit amet',
    destination: 'https://discord.com/invite/AJr2d8Z'
  },
  {
    thumbnail: '/contacts/facebook.png',
    title: 'Facebook',
    description: 'Lorem ipsum dolar sit amet',
    destination: 'https://www.facebook.com/benjamin.saalfeld.1/'
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
    destination: 'https://instagram.com/benny.sfd'
  }
];

export default {
  name: 'IndexPage',
  components: {
    ProjectList,
    ContactList
  },
  data() {
    return {
      contacts: contacts
    }
  },
  computed: {
    projects() {
      return this.$store.getters['GithubModule/getRepositories']
    }
  }
}
</script>
