<template>
  <div :class="$q.screen.gt.xs ? 'col-3' : 'col-6'">
    <a :href="contact.destination" target="_blank">
      <q-card class="bg-transparent" flat>
        <q-img :src="contact.thumbnail" />
      </q-card>
    </a>
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
