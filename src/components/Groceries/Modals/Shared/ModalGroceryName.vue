<template>
  <div class="row q-mb-sm">
    <q-input
      clearable
      autofocus
      outlined
      @input="$emit('update:name', $event)"
      :value="name"
      label="Item name"
      :rules="[(val) => !!val || 'Field is required']"
    >
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>
