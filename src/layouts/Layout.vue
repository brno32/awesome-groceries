<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Groceries
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right"
        />

        <q-btn
          v-else
          @click="logoutUser"
          flat
          icon-right="account_circle"
          label="Logout"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="link in navLinks"
          :icon="link.icon"
          :label="link.title"
          :to="link.link"
          :key="link.link"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header> Navigation </q-item-label>
        <NavLink v-for="link in navLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavLink from 'components/NavLink.vue'
import { mapState, mapActions } from 'vuex'

const linksData = [
  {
    title: 'Groceries',
    icon: 'local_grocery_store',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  }
]

export default {
  name: 'MainLayout',
  components: { NavLink },
  data () {
    return {
      leftDrawerOpen: false,
      navLinks: linksData
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
