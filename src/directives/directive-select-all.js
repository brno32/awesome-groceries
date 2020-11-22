export const selectAll = {
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
