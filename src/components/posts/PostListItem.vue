<template>
  <li>
    <div>{{ post.title }}</div>
    <div>{{ post.contents }}</div>
    <div>{{ post.createdAt }}</div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
