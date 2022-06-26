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
import { useI18n } from 'vue-i18n'

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
      const { t } = useI18n()

      const now = new Date();
      const then = new Date(this.project.pushed_at);

      let diffInMillis = now.getTime() - then.getTime();
      let diffInUnit = undefined;
      let unit = undefined;

      if(diffInMillis >= 31556952000) {
        diffInUnit = diffInMillis/31556952000;
        unit = "y";
      } else if(diffInMillis >= 2629746000) {
        diffInUnit = diffInMillis/2629746000;
        unit = "mo";
      } else if(diffInMillis >= 604800000) {
        diffInUnit = diffInMillis/604800000;
        unit = "w";
      } else if(diffInMillis >= 86400000) {
        diffInUnit = diffInMillis/86400000
        unit = "d";
      } else if(diffInMillis >= 3600000) {
        diffInUnit = diffInMillis/3600000
        unit = "h";
      } else if(diffInMillis >= 60000) {
        diffInUnit = diffInMillis/60000;
        unit = "min";
      }

      return unit != undefined ? Math.floor(diffInUnit)+unit : t('indexPage.projects.lessThanAMin') ;
    }
  }
}
</script>
