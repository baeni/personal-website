<template>
  <div class="col-6">
    <a :href="project.destination" target="_blank">
      <q-card class="bg-transparent" flat>
        <q-img :src="project.thumbnail" />
      </q-card>
    </a>
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
