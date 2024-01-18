<template>
    <Body>
        <NavBar />
        <slot />
    </Body>
</template>
<script setup>
import NavBar from '../components/NavBar.vue'
</script>