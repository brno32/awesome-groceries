<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Awe',
  methods: {
    ...mapActions('settings', ['retrieveSettings']),
    ...mapActions('auth', ['handleAuthStateChange'])
  },
  computed: { ...mapGetters('settings', ['settings']) },
  mounted () {
    this.retrieveSettings()
    this.handleAuthStateChange()

    const settings = this.settings

    this.$q.dark.set(settings.darkMode)
  }
}
</script>

<style>
.text-strikethrough {
  text-decoration: line-through;
}
</style>
