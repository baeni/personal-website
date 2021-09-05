<template>
  <q-layout view="lHh Lpr lFf">
    <navbar />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from 'components/Navbar';

export default {
  name: 'MainLayout',
  components: {
    Navbar
  }
}
</script>
