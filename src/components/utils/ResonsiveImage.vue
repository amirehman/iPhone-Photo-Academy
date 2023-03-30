<script setup>
    const props = defineProps({
        image: {
            type: Object,
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
    <picture :class="props.classes">
        <source media="(min-width: 120em)" :srcset="`/images/${props.image.xxl}`">
        <source media="(min-width: 38em)" :srcset="`/images/${props.image.xl}`">
        <img :src="`/images/${props.image.lg}`" class="w-full" :alt="props.alt">
    </picture>
</template>