<template>
  <div :class="$q.screen.gt.xs ? 'col-2' : 'col-6'">
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

<style lang="scss" scoped>
.q-card {
  transition: border-radius .25s ease-in-out;

  &:hover {
    border-radius: 15px;
  }
}
</style>