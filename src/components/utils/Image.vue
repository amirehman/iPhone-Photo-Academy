<script setup>
    const props = defineProps({
        src: {
            type: String,
            required: true
        },
        classes: {
            type: String,
            required: true
        },
        alt: {
            type: String,
        },
    })
</script>

<template>
    <img :src="`/images/${props.src}`" :alt="props.alt" :class="props.classes">
</template>