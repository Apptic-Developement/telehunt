import { ref, onMounted, onUnmounted } from 'vue';

const useMobile = () => {
    const isMobile = ref<boolean>(false);

    const update = () => {
        isMobile.value = window.innerWidth <= 768
    }
    onMounted(() => { window.addEventListener('resize', update), update() })
    onUnmounted(() => window.removeEventListener('resize', update))

    return isMobile
}

export default useMobile;