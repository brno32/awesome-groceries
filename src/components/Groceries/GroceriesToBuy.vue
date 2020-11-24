<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header :bgColor="$q.dark.isActive ? 'bg-orange-10' : 'bg-orange-4'"
        >To Buy</list-header
      >
      <q-list bordered separator>
        <grocery
          v-for="(grocery, key) in groceriesToBuy"
          :key="key"
          :grocery="grocery"
          :id="key"
        >
        </grocery>
      </q-list>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['groceriesToBuy'],
  components: {
    grocery: require('components/Groceries/Grocery').default,
    'list-header': require('components/Shared/ListHeader.vue').default
  }
}
</script>
