<template>
  <div class="row q-col-gutter-lg">
    <contact-list-item
      v-for="(contact, i) in contacts"
      :key="i"
      :contact="contact"
    />
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
