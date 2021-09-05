<template>
  <q-header class="flex" bordered>
    <q-toolbar class="container">
      <q-btn
        id="main-btn"
        class="text-h1"
        label="baeni"
        :to="{ path: '/' }"
        no-caps
        flat
      />

      <q-space />

      <q-btn
        class="text-bold"
        :label="$t('indexPage.name')"
        :to="{ path: '/' }"
        flat
      />
      <q-btn
        class="text-bold"
        :label="$t('indexPage.contact.heading')"
        flat
        @click="toId('/', 'contact')"
      />
      <q-btn
        class="text-bold"
        :label="$t('indexPage.portfolio.heading')"
        flat
        @click="toId('/', 'portfolio')"
      />

      <q-separator
        class="q-ml-xs q-mr-md"
        vertical
        inset
        dark
      />

      <q-btn
        class="text-bold"
        :label="locale"
        flat
      >
        <q-menu
          :offset="[0, 10]"
          transition-show="scale"
          transition-hide="scale"
          dark
        >
          <q-list>
            <q-item
              v-for="(localeOption, i) in localeOptions"
              :key="i"
              clickable
              dense
              v-close-popup
              @click="locale = localeOption"
            >
              <q-item-section
                class="text-uppercase"
                v-bind:class="{'text-bold text-underline':locale === localeOption}"
              >
                {{ localeOption }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
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
        'en',
        'de'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kristi&display=swap');

header {
  min-height: 75px;
  background: transparentize($darkest, .65);
  backdrop-filter: blur(15px);
  overflow: hidden;
}

#main-btn {
  font-family: 'Kristi', sans-serif;
}
</style>
