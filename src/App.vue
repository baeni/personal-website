<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('GithubModule/fetchRepositories');
  }
}
</script>
