<template>
  <button>{{ prefix }} {{ text }}</button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    text: String
  },
  data() {
    return {
      prefix: "🆗",
    };
  },
}
</script>
