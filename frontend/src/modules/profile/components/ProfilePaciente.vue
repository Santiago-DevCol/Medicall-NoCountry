<script setup lang="ts">
import useAuthStore from '@/stores/useAuthStore';
import { storeToRefs } from 'pinia';
import Card from 'primevue/card';
const store = useAuthStore();
const { currentUser } = storeToRefs(store);
const historial = ref([
    {
        title: 'Historial 1',
        date: '2021-10-10 06:00',
        icon: 'pi pi-calendar',
        status: 'success',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec'
    },
    {
        title: 'Historial 2',
        date: '2021-10-10 06:00',
        icon: 'pi pi-calendar',
        status: 'pendiente',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec'
    },
    {
        title: 'Historial 3',
        date: '2021-10-10 06:00',
        icon: 'pi pi-calendar',
        status: 'success',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec'
    },
    {
        title: 'Historial 4',
        date: '2021-10-10 06:00',
        icon: 'pi pi-calendar',
        status: 'danger',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec'
    },
    {
        title: 'Historial 5',
        date: '2021-10-10 06:00',
        icon: 'pi pi-calendar',
        status: 'success',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec'
    },
    {
        title: 'Historial 6',
        date: '2021-10-10 06:00',
        icon: 'pi pi-calendar',
        status: 'pendiente',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec'
    },
    {
        title: 'Historial 7',
        date: '2021-10-10 06:00',
        icon: 'pi pi-calendar',
        status: 'success',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec'
    },
    {
        title: 'Historial 8',
        date: '2021-10-10 06:00',
        icon: 'pi pi-calendar',
        status: 'danger',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec'
    },
    {
        title: 'Historial 9',
        date: '2021-10-10 06:00',
        icon: 'pi pi-calendar',
        status: 'success',
        content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec'
    }
])
</script>
<template>
    <div class="justify-center items-center m-0 p-0 w-11/12 bg-transparent">
        <ProfileMainLayout>
            <template #aside>
                <div class="w-full flex flex-col justify-center items-center flex-1 gap-2">
                    <img :src="currentUser?.profile_photo_url"
                        class="rounded-full w-36" />
                    <span class=" font-semibold text-2xl">{{ currentUser?.name }}</span>
                    <span>
                        {{ currentUser?.type_profile === 1 ? 'Paciente' : currentUser?.type_profile === 2 ? 'Doctor'
                            : 'Admin' }}
                    </span>
                </div>
                <Divider />
                <div class="w-full flex flex-col justify-start rounded-lg flex-1">
                    <span class="p-2">{{ currentUser?.email }}</span>
                    <span class="p-2">{{ currentUser?.created_at }}</span>
                </div>
            </template>
            <template #main>
                <div class="w-full flex p-4 gap-4">
                    <div class="text-center text-[#334155] gap-2">
                        <h3 class="font-semibold text-2xl">Personal</h3>
                        <Card style="width: 30rem;">
                            <template #content>
                                <div v-for="con in 5"
                                    :key="con">{{ con }}</div>
                            </template>
                        </Card>
                    </div>
                    <div class="text-center gap-2">
                        <h3 class="font-semibold text-[#334155] text-2xl">Diagnosticos</h3>
                        <Card style="width: 30rem;">
                            <template #content>
                                <div v-for="con in 5"
                                    :key="con">{{ con }}</div>
                            </template>
                        </Card>
                    </div>
                    <div class="text-center gap-2">
                        <h3 class="font-semibold text-[#334155] text-2xl">Historial</h3>
                        <Card style="width: 30rem; height: 40rem; overflow-y: scroll;">
                            <template #content>
                                <Timeline :value="historial"
                                    align="alternate">
                                    <template #marker="slotProps">
                                        <i
                                            :class="[slotProps.item.icon, slotProps.item.status === 'success' ? 'primary' : 'danger']"></i>
                                    </template>
                                    <template #content="slotProps">
                                        <Card style="height: 10rem">
                                            <template #title>
                                                {{ slotProps.item.title }}
                                            </template>
                                            <template #subtitle>
                                                {{ slotProps.item.date }}
                                            </template>
                                            <template #content>
                                                {{ slotProps.item.content }}
                                            </template>
                                        </Card>
                                    </template>
                                </Timeline>
                            </template>
                        </Card>
                    </div>
                </div>
            </template>
            <template #footer>
                <Card style="width: 100%; height: 3rem; padding: 0.5rem;">
                    <template #content>
                        <div class="flex justify-center items-center gap-4 p-0">
                            <span class="p-0 m-0"
                                v-for="con in 5"
                                :key="con">{{ con }}</span>
                        </div>
                    </template>
                </Card>
            </template>

        </ProfileMainLayout>
    </div>
</template>
<style scope>
.p-card .p-card-body {
    padding: 0.5rem;
}
</style>
