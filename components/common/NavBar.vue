<template>
    <!-- Mid Screen Nav -->
    <UContainer v-if="!isMobile" class="md:flex hidden h-14 items-center justify-between mx-6 my-4" as="nav">
        <!-- Nav Right Section -->
        <div class="flex items-center gap-9">
            <!-- Nav Logo -->
            <NuxtLink to="/" class="flex items-center gap-2">
                <NuxtImg class="w-10 h-10" src="/images/logo.png" alt="Logo" />
                <h2 class="text-lg font-medium">
                    telehunt
                    <span class="text-primary font-extrabold">.xyz</span>
                </h2>
            </NuxtLink>

            <!-- Nav Links -->
            <div class="flex items-center gap-6">
                <ULink :to="href" :key="href" class="flex items-center gap-1" active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:duration-300 hover:transition-all hover:ease-in-out"
                    v-for="{ name, href, icon } in routes">
                    <Icon :name="icon" />
                    <span>{{ name }}</span>
                </ULink>
            </div>
        </div>
        <!-- Nav Buttons -->
        <div class="flex items-center gap-4">
            <DarkMode />
            <UButton>Login</UButton>
        </div>
    </UContainer>

    <!-- Mobile Nav -->
    <UContainer as="nav" v-if="isMobile"
        class="dark:bg-black bg-white flex justify-around w-full space-x-8 fixed bottom-0 left-0 right-0 py-4 border border-gray-400 dark:border-gray-800 backdrop-blur dark:supports-[backdrop-filter]:bg-black/40 supports-[backdrop-filter]:bg-white/40">
        <ULink :to="href" :key="href" active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:duration-300 hover:transition-all hover:ease-in-out"
            v-for="{ href, icon } in mobileNavRoutes">
            <Icon class="text-3xl text-inherit" :name="icon" />
        </ULink>
    </UContainer>
</template>
<script setup lang="ts">
import DarkMode from '../utils/DarkMode.vue';
import useMobile from '../../composables/useMobile'
const routes = reactive([
    { name: 'Home', href: '/', icon: 'material-symbols:house-outline' },
    { name: 'Explore', href: '/explore', icon: 'material-symbols:explore-outline' },
    { name: 'Bots', href: '/bots', icon: 'ri:robot-3-line' },
    { name: 'Groups', href: '/groups', icon: 'ri:group-2-line' },
    { name: 'Channels', href: '/channels', icon: 'ri:chat-quote-line' },

])

const mobileNavRoutes = reactive([
    { name: 'Home', href: '/', icon: 'material-symbols:house-outline' },
    { name: 'Explore', href: '/explore', icon: 'material-symbols:explore-outline' },
    { name: 'Menu', href: '/mobile-menu', icon: 'material-symbols:menu-open' },
    { name: 'Profile', href: '/profile', icon: 'material-symbols:person-2-outline' },

])


const isMobile = useMobile();

</script>

