<template>
  <div class="row q-col-gutter-lg items-center">
    <contact-list-item
      v-for="(contact, i) in contacts"
      :key="i"
      :contact="contact"
    />
    <a class="text-light text-h4" style="text-decoration: none;" href="mailto:hello@baeni.de?subject=Hi baeni!">{{ $t('indexPage.landing.mailMe') }}</a>
  </div>
</template>

<script>
import ContactListItem from 'components/ContactListItem';

export default {
  name: 'ContactList',
  components: {
    ContactListItem
  },
  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
}
</script>
