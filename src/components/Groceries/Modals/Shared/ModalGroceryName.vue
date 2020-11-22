<template>
  <div class="row q-mb-sm">
    <q-input
      v-select-all
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
  props: ['name'],
  directives: {
    selectAll: {
      bind (el) {
        const input = el.querySelector('.q-field__native')

        input.addEventListener('focus', () => {
          console.log(input)
          if (input.value.length > 0) {
            input.select()
          }
        })
      }
    }
  }
}
</script>
