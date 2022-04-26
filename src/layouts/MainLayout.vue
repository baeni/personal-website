<template>
  <q-layout view="hHh Lpr fff">
    <navbar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <footr />
  </q-layout>
</template>

<script>
import Navbar from 'components/Navbar';
import Footr from 'components/Footer';

export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Footr
  }
}
</script>
