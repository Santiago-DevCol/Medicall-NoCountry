<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
    createCalendar,
    viewDay,
    viewWeek,
    viewMonthGrid,
    viewMonthAgenda,
} from '@schedule-x/calendar'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import '@schedule-x/theme-default/dist/index.css'
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';


const { push } = useRouter()

interface CitaDatabase {
    id: number | string;
    nombre: string;
    fechaHora: string;
    pacienteId: string;
    medicoId: string;
    estado: string;
}

const citasDatabase = ref<CitaDatabase[]>([
    {
        id: '3494lkk3k32',
        fechaHora: '2024-12-19 12:00',
        pacienteId: '14',
        medicoId: '6',
        nombre: 'Ana maria',
        estado: 'pendiente',
    },
    {
        id: '3494lkk3k32',
        fechaHora: '2024-12-20 09:00',
        pacienteId: '3459',
        medicoId: '6',
        nombre: 'Juan',
        estado: 'pendiente',
    },
    {
        id: 3,
        fechaHora: '2024-12-21 14:00',
        pacienteId: '64',
        medicoId: '6',
        nombre: 'Pedro',
        estado: 'pendiente',
    },
    {
        id: 4,
        fechaHora: '2024-12-22 12:00',
        pacienteId: '14',
        medicoId: '6',
        nombre: 'Maria',
        estado: 'pendiente',
    },
    {
        id: '3494lkk3k32',
        fechaHora: '2024-12-23 17:00',
        pacienteId: '9402',
        medicoId: '6',
        nombre: 'Jose',
        estado: 'pendiente',
    },
    {
        id: '3494lkk3k32',
        fechaHora: '2024-12-24 12:00',
        pacienteId: '3494lkk3k32',
        medicoId: '6',
        nombre: 'Luis Enrique',
        estado: 'pendiente',
    },
    {
        id: 7,
        fechaHora: '2024-12-25 08:00',
        pacienteId: '5461',
        medicoId: '6',
        nombre: 'Carlos Martinez',
        estado: 'pendiente',
    },
    {
        id: 8,
        fechaHora: '2024-12-26 11:00',
        pacienteId: '106',
        medicoId: '6',
        nombre: 'Josefa Rodriguez',
        estado: 'pendiente',
    },
    {
        id: 9,
        fechaHora: '2024-12-27 09:00',
        pacienteId: '1',
        medicoId: '6',
        nombre: 'Juan Perez',
        estado: 'pendiente',
    },
    {
        id: 10,
        fechaHora: '2024-12-28 14:00',
        pacienteId: '2343',
        medicoId: '6',
        nombre: 'Mariela Perez',
        estado: 'pendiente',
    },
    {
        id: 11,
        fechaHora: '2024-12-29 16:00',
        pacienteId: '348',
        medicoId: '6',
        nombre: 'Aderson Perez',
        estado: 'pendiente',
    }
])


interface Cita {
    id: number;
    title: string;
    start: string;
    end: string;

}
const cita = ref<CitaDatabase | null>(null)
const citas = ref<Cita[]>([])

citas.value = citasDatabase.value.map(cita => {
    const fecha = cita.fechaHora.split(' ')[0]
    const date = new Date(cita.fechaHora)
    const hora = `${fecha} ${new Date(date.setHours(date.getHours() + 1)).toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', hour12: false }).replace('.', ':').replace(' ', 'am')}`
    return {
        id: cita.id,
        title: `Cita con ${cita.nombre}`,
        start: cita.fechaHora,
        end: hora,
    }
})


const calendarApp = createCalendar({
    selectedDate: '2024-12-20',
    views: [viewMonthGrid, viewMonthAgenda, viewWeek, viewDay],
    defaultView: viewWeek.name,
    events: citas.value,
    plugins: [
        createEventModalPlugin()
    ],
    callbacks: {
        onEventClick: (calendarEvent) => {
            console.log('onEventClick', calendarEvent);
            cita.value = citasDatabase.value.find(c => c.id === calendarEvent.id) as CitaDatabase
        },
    },
})

const startCall = () => {
    console.log('startCall', cita.value)
    push({ name: 'videocall', query: { roomId: cita.value?.id } })
}
</script>
<template>
    <div class="flex justify-center w-full gap-4">
        <Card style="width: 20rem; overflow: hidden; padding: 4px;">
            <template #title>
                Iniciar Cita
            </template>
            <template #content>
                <div v-if="cita">
                    <h4>{{ cita.nombre }}</h4>
                    <p>{{ cita.fechaHora }}</p>
                    <p>{{ cita.estado }}</p>
                </div>
                <Button :disabled="!cita"
                    label="Iniciar video llamada"
                    @click="startCall"></Button>
            </template>
        </Card>
        <div id="calendar"
            class="w-8/12">
            <ScheduleXCalendar :calendar-app="calendarApp" />
        </div>
    </div>

</template>
<style scoped>
.sx-vue-calendar-wrapper {
    width: 100%;
    height: 800px;
    max-height: 90vh;
}
</style>