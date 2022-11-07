<template>
  <div>
    <button class="my-button" @click="$emit('click', $event)">{{ label }}</button>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
defineEmits(["click"]);
</script>

<style>
.my-button {
  background: #1411ba;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
