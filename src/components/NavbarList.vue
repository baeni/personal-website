<template>
  <q-toolbar class="text-white">
    <navbar-list-item :label="$t('indexPage.landing.heading')" targetHash="landing" />
    <navbar-list-item :label="$t('indexPage.projects.heading')" targetHash="projects" />
  </q-toolbar>
</template>

<script>
import NavbarListItem from './NavbarListItem'

export default {
  name: 'NavbarList',
  components: {
    NavbarListItem
  }
}
</script>
