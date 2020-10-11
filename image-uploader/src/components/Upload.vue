<template>
  <h1>{{ msg }}</h1>
  <p>File should be Jpeg, Png …</p>
  <img alt="Vue logo" src="../assets/image.svg" />
  <p>Drag & Drop your image here</p>
  <p>or</p>
  <button>Choose a file</button>
</template>

<script lang='ts'>
export default {
  name: 'Upload',
  props: {
    msg: String
  },
  data() {
  }
}
</script>
