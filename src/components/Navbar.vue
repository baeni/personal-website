<template>
  <q-header>
    <q-toolbar class="container">
      <q-btn
        class="text-h2"
        label="baeni"
        :to="{ path: '/' }"
        no-caps
        flat
        stretch
      />

      <q-space />

      <q-btn
        class="text-bold"
        :label="$t('indexPage.portfolio.heading')"
        no-caps
        flat
        @click="toId('/', 'portfolio')"
      />
      <q-btn
        class="text-bold"
        :label="$t('indexPage.contact.heading')"
        no-caps
        flat
        @click="toId('/', 'contact')"
      />

      <q-separator
        size="2px"
        spaced
        dark
        vertical
        inset
      />

      <q-select
        v-model="locale"
        :model-value="locale"
        :options="localeOptions"
        behavior="menu"
        transition-show="scale"
        transition-hide="fade"
        color="accent"
        hide-dropdown-icon
        emit-value
        map-options
        options-dense
        dense
        dark
        standout
        flat
      >
        <template v-slot:append>
          <q-icon name="fas fa-globe-europe" size="16px" />
        </template>
      </q-select>
    </q-toolbar>
  </q-header>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Navbar',
  methods: {
    async toId(path, hash) {
      await this.$router.push(path);
      document.getElementById(hash).scrollIntoView();
    }
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' });

    return {
      locale,
      localeOptions: [
        { label: 'English', value: 'en' },
        { label: 'Deutsch', value: 'de' }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background: transparentize($dark, .65);
  backdrop-filter: blur(15px);
  overflow: hidden;
}
</style>
