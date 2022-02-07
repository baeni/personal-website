<template>
  <q-page>
    <!-- landing -->
    <section class="flex flex-center window-height">
      <q-img class="absolute-top full-width window-height" style="z-index: -99; opacity: .65;" src="~assets/kermit.gif" autoplay loop />
      <div class="container text-center">
        <div class="text-h1 text-uppercase text-lightest">{{ $t('error404Page.heading') }}</div>
        <div class="text-subtitle1 text-lightest">{{ $t('error404Page.description') }}</div>

        <q-btn class="text-bold bg-lightest q-mt-xl" :label="$t('indexPage.name')" flat @click="$router.push('/')" />
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'Error404Page'
}
</script>

<style lang="scss" scoped>
video {
  z-index: -99;
}
</style>
