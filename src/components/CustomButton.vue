<template>
  <div>
    <button>{{ prefix }} {{ label }}</button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    name: String
  },
  data() {
    return {
      prefix: "カスタムボタン:",
    };
  },
}
</script>
