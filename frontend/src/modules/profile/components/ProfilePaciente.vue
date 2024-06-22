<script setup lang="ts">
import useAuthStore from '@/stores/useAuthStore';
import { storeToRefs } from 'pinia';
const store = useAuthStore();
const { currentUser } = storeToRefs(store);
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
                    <Card style="width: 30rem;">
                        <template #title>
                            Personal
                        </template>
                        <template #content>
                            <div v-for="con in 5"
                                :key="con">{{ con }}</div>
                        </template>
                    </Card>
                    <Card style="width: 30rem;">
                        <template #title>
                            Diagnosticos
                        </template>
                        <template #content>
                            <div v-for="con in 5"
                                :key="con">{{ con }}</div>
                        </template>
                    </Card>
                    <Card style="width: 30rem; height: 40rem;">
                        <template #title>
                            Historial
                        </template>
                        <template #content>
                            <div v-for="con in 5"
                                :key="con">{{ con }}</div>
                        </template>
                    </Card>
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
