<template>
  <div class="col-6">
    <q-card class="bg-transparent" flat>
      <q-img :src="project.thumbnail" />
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ProjectListItem',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
