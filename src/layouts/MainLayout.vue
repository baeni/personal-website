<template>
  <q-layout view="lHr lpr lfr">
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
