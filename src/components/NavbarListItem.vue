<template>
  <q-btn
    class="text-bold"
    :label="label"
    no-caps
    flat
    @click="toId(targetPath != undefined ? targetPath : '/', targetHash)"
  />
</template>

<script>
export default {
  name: 'NavbarListItem',
  props: {
    label: {
      type: String,
      required: true
    },
    targetPath: {
      type: String
    },
    targetHash: {
      type: String,
      required: true
    }
  },
  methods: {
    async toId(path, hash) {
      await this.$router.push(path);
      await document.getElementById(hash).scrollIntoView();
    }
  }
}
</script>
