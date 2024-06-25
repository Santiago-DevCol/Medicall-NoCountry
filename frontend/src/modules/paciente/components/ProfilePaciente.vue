<script setup lang="ts">
import useAuthStore from '@/stores/useAuthStore';
import { storeToRefs } from 'pinia';
const store = useAuthStore();
const { currentUser } = storeToRefs(store);
const historial = ref([
    {
        title: 'Cita con Ortopeda',
        date: '2021-10-10 06:00',
        icon: 'pi pi-calendar',
        status: 'success',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec',
        doctor: 'Dr. Morillo',
        especialidad: 'Ortopeda'
    },
    {
        title: 'Historial 2',
        date: '2021-10-08 17:00',
        icon: 'pi pi-calendar',
        status: 'pendiente',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec',
        doctor: 'Dra. Fernandez',
        especialidad: 'Psicologo'
    },
    {
        title: 'Historial 3',
        date: '2021-10-05 06:00',
        icon: 'pi pi-calendar',
        status: 'success',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec',
        doctor: 'Dr. Morillo',
        especialidad: 'Ortopeda'
    },
    {
        title: 'Historial 4',
        date: '2021-10-11 06:00',
        icon: 'pi pi-calendar',
        status: 'danger',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec',
        doctor: 'Dra. Fernandez',
        especialidad: 'Psicologo'
    },

])

const historialMedico = ref([
    {
        especialidad: 'Ortopeda',
        medico: 'Dr. Morillo',
        fecha: '2021-10-10 06:00',
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec',
    },
    {
        especialidad: 'Psicologo',
        medico: 'Dra. Fernandez',
        fecha: '2021-10-08 17:00',
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec',
    },
    {
        especialidad: 'Ortopeda',
        medico: 'Dr. Morillo',
        fecha: '2021-10-05 06:00',
        diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec jnfwdnjiwdjwdicwdhicijwdcncdjwcjn ud jasndjsndjkasndjkasnjdk  sajdnasjdnjaskndjkasndjks asjdnjsndjksandjksnjkd ksajdnjsn jas njdkas',
    },

])

const personalInfo = reactive({
    alergias: ['mani', 'aspirinas', 'polen de la flor de sol'],
    antecedentesFamiliar: 'Ipertencion',
    antecedentesPersonal: 'Lesion Espalda'
})
</script>
<template>
    <div class="justify-center items-center m-0 p-0 w-11/12 bg-transparent">
        <ProfileMainLayout>
            <template #main>
                <div class="w-full flex flex-col justify-center items-center lg:flex-row p-4 gap-4">
                    <div class=" flex flex-col items-center gap-2">
                        <h3 class="font-semibold text-2xl text-blue-25 ">Personal</h3>
                        <Card style="width: 30rem; height: 40rem;">
                            <template #content>
                                <div class="flex flex-col gap-4">
                                    <div class="w-full flex flex-col justify-center items-center flex-1 gap-2">
                                        <img :src="currentUser?.profile_photo_url"
                                            class="rounded-full w-36" />
                                        <span class=" font-semibold text-2xl">{{ currentUser?.name }}</span>
                                        <span>
                                            {{ currentUser?.type_profile === 1 ? 'Paciente' : currentUser?.type_profile
                                            === 2 ? 'Doctor'
                                            : 'Admin' }}
                                        </span>
                                    </div>
                                    <Panel class="gap-2"
                                        header="Alergias">
                                        <Tag v-for="(tag, index) in personalInfo.alergias"
                                            :key="index"
                                            :value="tag"
                                            style="font-size: 14px;"
                                            severity="secondary"
                                            rounded />
                                    </Panel>
                                    <Panel header="Antecedentes Personales">
                                        <p>{{ personalInfo.antecedentesPersonal }}</p>
                                    </Panel>
                                    <Panel header="Antecedentes Familiares">
                                        <p>{{ personalInfo.antecedentesFamiliar }}</p>
                                    </Panel>
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <h3 class="font-semibold text-blue-25 text-2xl">Historial Medico/Diagnosticos</h3>
                        <Card style="width: 30rem; height: 40rem; overflow-y: auto;">
                            <template #content>
                                <div class="gap-2 overflow-y-auto">
                                    <Card style="margin: 2px auto 2px;"
                                        v-for="(diagnosty, index) in historialMedico"
                                        :key="index">
                                        <template #title>
                                            <span> {{ diagnosty.medico }}</span>
                                        </template>
                                        <template #subtitle>
                                            <span>{{ diagnosty.especialidad }}</span>
                                        </template>
                                        <template #content>
                                            <p>{{ diagnosty.diagnostico }}</p>
                                        </template>
                                    </Card>
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <h3 class="font-semibold text-blue-25 text-2xl">Historial de Consultas</h3>
                        <Card style="width: 30rem; height: 40rem; overflow-y: auto;">
                            <template #content>
                                <Timeline :value="historial"
                                    align="alternate">
                                    <template #marker="slotProps">
                                        <i
                                            :class="[slotProps.item.icon, slotProps.item.status === 'success' ? 'primary' : 'danger']"></i>
                                    </template>
                                    <template #content="slotProps">
                                        <Card style="height: auto">
                                            <template #title>
                                                <span class="font-semibold text-sm">{{ slotProps.item.title }}</span>
                                            </template>
                                            <template #subtitle>
                                                <div class="flex flex-col">
                                                    <span class="text-sm">
                                                        {{ useDateFormat(slotProps.item.date, 'D/MM/YY h:mm A').value }}
                                                    </span>
                                                    <span class="text-sm"
                                                        :class="slotProps.item.status === 'success' ? 'primary' : 'danger'">
                                                        {{ slotProps.item.status }}
                                                    </span>
                                                </div>
                                            </template>
                                            <template #content>
                                                <div class="flex flex-col">
                                                    <span>{{ slotProps.item.doctor }}</span>
                                                    <span>{{ slotProps.item.especialidad }}</span>
                                                </div>
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
