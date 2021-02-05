<template>
  <div>
    Hello {{ msg }}!
    <neka-confirm-plugin />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'world'
    };
  }
};
</script>

<style>
</style>
