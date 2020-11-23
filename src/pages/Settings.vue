<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>Notifications</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Dark Mode</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="isDarkMode" val="battery" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return { isDarkMode: true }
  }
}
</script>

<style>
</style>
