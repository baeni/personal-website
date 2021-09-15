<template>
  <div :class="$q.screen.gt.xs ? 'col-6' : 'col-12'">
    <q-card class="full-height" dark>
      <q-card-section>
        <div class="row">
          <q-badge class="col-shrink" :label="language" color="light" />
          <div class="col text-caption text-light text-right">{{ $t('indexPage.projects.updated', { time: updated }) }}</div>
        </div>
        
        <div class="col text-h2 q-pt-md">{{ project.name }}</div>
        <div class="text-body1 text-grey">{{ description }}</div>
      </q-card-section>

      <q-card-section class="bg-darkest">
        <q-card-actions>
          <q-btn class="bg-lightest text-darkest text-bold" :label="$t('indexPage.projects.toSite')" :disable="!project.homepage" type="a" :href="project.homepage" target="_blank" flat />
          <q-btn icon="fab fa-github" type="a" :href="project.html_url" target="_blank" flat />
        </q-card-actions>
      </q-card-section>
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
  },
  computed: {
    language() {
      return this.project.language ? this.project.language : this.$t('indexPage.projects.noLanguage');
    },
    description() {
      return this.project.description ? this.project.description : this.$t('indexPage.projects.noDescription');
    },
    updated() {
      const now = new Date();
      const then = new Date(this.project.updated_at);
      const differenceMillis = now.getTime() - then.getTime();
      let divider = undefined;
      let short = undefined;

      if (differenceMillis / 86400000 >= 1) {
        divider = 86400000;
        short = 'd';
      }
      else if (differenceMillis / 3600000 >= 1) {
        divider = 3600000;
        short = 'h';
      }
      else if (differenceMillis / 60000 >= 1) {
        divider = 60000;
        short = 'min';
      }
      else if (differenceMillis / 1000 >= 1) {
        divider = 1000;
        short = 's';
      }

      const difference = differenceMillis / divider;

      return Math.round(difference)+short;
    }
  }
}
</script>
