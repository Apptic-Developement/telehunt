<template>
    <section class="flex flex-col items-center text-center justify-center md:my-8 my-10 space-y-3">
        <h1 class="md:text-3xl text-2xl font-bold">
            Explore modern telegram
            <span class="bg-gradient-to-l from-primary-500 to-sky-400 bg-clip-text text-transparent">
                bots, channels, groups!
            </span>

        </h1>
        <UInput class="w-[80%]" padded icon="i-heroicons-magnifying-glass-20-solid" size="lg" trailing
            placeholder="Search..." :v-model="search" >
            <template #trailing>
                <UButton variant="ghost">
                    <Icon name="ic:outline-search" class="text-2xl cursor-pointer" />
                </UButton>
            </template>
        </UInput>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const search = ref('');
</script>