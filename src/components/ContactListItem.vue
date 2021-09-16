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

<style lang="scss" scoped>
.q-card {
  // transition out
  transition: transform .175s ease-in-out;

  // transition and transform in
  &:hover {
    transition: transform .5s ease-in-out;
    transform: scale(1.015);
  }

  // transition and transform click
  &:active {
    transition: transform .175s ease-in-out;
    transform: scale(.99);
  }
}
</style>