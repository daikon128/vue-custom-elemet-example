<template>
  <del>{{ text }}</del>
</template>

<script>
export default {
  name: "StrikeText",
  props: {
    text: String
  }
}
</script>
