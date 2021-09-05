<template>
  <div class="col-4">
    <q-card class="bg-transparent" flat>
      <q-img :src="contact.thumbnail" />
      <q-card-section>
        <div class="text-h3 text-white">{{ contact.title }}</div>
        <div class="text-caption text-lightest">{{ contact.description }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ContactListItem',
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
}
</script>
