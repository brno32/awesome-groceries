<template>
  <div class="row q-mb-sm">
    <q-input
      v-select-all
      clearable
      outlined
      @input="$emit('update:name', $event)"
      :value="name"
      label="Item name"
      :rules="[(val) => !!val || 'Field is required']"
      lazy-rules
    >
    </q-input>
  </div>
</template>

<script>
import { selectAll } from 'src/directives/directive-select-all'

export default {
  props: ['name'],
  directives: { selectAll }
}
</script>
