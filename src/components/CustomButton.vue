<template>
  <div>
    <button>{{ prefix }} {{ text }}</button>
  </div>
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
