<template>
  <div class="row q-col-gutter-md">
    <project-list-item
      v-for="(project, i) in projects"
      :key="i"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectListItem from 'components/ProjectListItem';

export default {
  name: 'ProjectList',
  components: {
    ProjectListItem
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>
