<template>
  <q-banner dense class="text-white text-center" :class="bgColor"
    ><span class="text-bold text-subtitle-1"><slot></slot></span
  ></q-banner>
</template>

<script>
export default { props: ['bgColor'] }
</script>

<style>
.q-banner {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
