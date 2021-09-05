<template>
  <q-input class="q-pb-xl" v-model="searchQuery" :label="$t('indexPage.portfolio.formSearch')" bottom-slots dark dense standout clearable clear-icon="close">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>

    <template v-slot:hint>
      {{ $t('indexPage.portfolio.formSearchHint') }}
    </template>
  </q-input>

  <div class="row q-col-gutter-md">
    <project-list-item
      v-for="(project, i) in queryProjects"
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
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    queryProjects() {
      if (this.searchQuery) {
        const words = this.searchQuery.toLowerCase().split(', ').join(',').split(",").filter(word => {
          if (word) return word;
        });

        return this.projects.filter(project => {
          return project.tags.some(tag => {
            return words.some(word => {
              return tag.includes(word);
            })
          });
        });
      } else {
        return this.projects;
      }
    }
  }
}
</script>
