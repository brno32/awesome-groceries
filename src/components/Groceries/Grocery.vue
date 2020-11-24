<template>
  <q-item
    v-touch-hold:500.mouse="showEditGroceryModal"
    clickable
    @click="updateGrocery({ id, updates: { completed: !grocery.completed } })"
    :class="
      grocery.completed
        ? $q.dark.isActive
          ? 'bg-green-6'
          : 'bg-green-1'
        : $q.dark.isActive
        ? 'bg-orange-6'
        : 'bg-orange-1'
    "
  >
    <q-item-section side top>
      <q-checkbox :value="grocery.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{
          'text-strikethrough': grocery.completed,
        }"
        >{{ grocery.name }}</q-item-label
      >
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditGrocery = true"
          flat
          round
          dense
          color="primary"
          icon="edit"
        />
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete"
        />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditGrocery">
      <edit-grocery
        @close="showEditGrocery = false"
        :grocery="grocery"
        :id="id"
      ></edit-grocery>
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['grocery', 'id'],
  data () {
    return { showEditGrocery: false }
  },
  methods: {
    ...mapActions('groceries', ['updateGrocery', 'deleteGrocery']),
    promptToDelete (id) {
      this.$q
        .dialog({
          title: 'Confirm',
          message: 'Delete this item?',
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteGrocery(id)
        })
    },
    showEditGroceryModal () {
      this.showEditGrocery = true
    }
  },
  components: {
    'edit-grocery': require('components/Groceries/Modals/EditGrocery.vue')
      .default
  }
}
</script>

<style scoped>
</style>
