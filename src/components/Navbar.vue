<template>
  <q-header>
    <div class="container row">
      <q-toolbar class="q-px-none col">
        <q-btn
          class="text-h2 text-hammersmith-one"
          label="baeni"
          :to="{ path: '/' }"
          flat
          stretch
        />
      </q-toolbar>

      <navbar-list class="q-px-none col-shrink" />

      <q-toolbar class="q-px-none col-shrink">
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
            <q-icon name="fas fa-language" size="16px" />
          </template>
        </q-select>
      </q-toolbar>
    </div>
  </q-header>
</template>

<script>
import { useI18n } from 'vue-i18n';

import NavbarList from 'components/NavbarList';

export default {
  name: 'Navbar',
  components: {
    NavbarList
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' });

    return {
      locale,
      localeOptions: [
        { label: 'English', value: 'en' },
        { label: 'Deutsch', value: 'de' },
        //{ label: 'Svenska', value: 'se' }
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
