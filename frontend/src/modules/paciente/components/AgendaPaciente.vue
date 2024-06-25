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
import { ref } from 'vue';


const { push } = useRouter()

interface CitaDatabase {
    id: number | string;
    medico: string;
    fechaHora: string;
    pacienteId: string;
    medicoId: string;
    estado: string;
    especialidad: string;
}


interface Cita {
    id: number;
    title: string;
    start: string;
    end: string;

}
const cita = ref<CitaDatabase | null>(null)
const citas = ref<Cita[]>([])
const today = ref(new Date().toISOString().split('T')[0])

const citasDatabase = ref<CitaDatabase[]>([
    {
        id: '3494lkk3k32',
        fechaHora: '2024-08-19 12:00',
        pacienteId: '14',
        medicoId: '6',
        medico: 'Dra. Grullon',
        estado: 'pendiente',
        especialidad: 'Ortopeda'
    },
    {
        id: '3494lkk3k37',
        fechaHora: `${today.value}  09:00`,
        pacienteId: '3459',
        medicoId: '6',
        medico: 'Dr. Guzman',
        estado: 'pendiente',
        especialidad: 'Cardiologo'
    },
    {
        id: 3,
        fechaHora: '2024-06-21 14:00',
        pacienteId: '64',
        medicoId: '6',
        medico: 'Dr. Pichardo',
        estado: 'pendiente',
        especialidad: 'Dermatologo'
    },
    {
        id: 4,
        fechaHora: '2024-07-22 12:00',
        pacienteId: '14',
        medicoId: '6',
        medico: 'Dra. Alciviades',
        estado: 'pendiente',
        especialidad: 'Medico General'
    },
    {
        id: 7,
        fechaHora: `${today.value} 08:00`,
        pacienteId: '5461',
        medicoId: '6',
        medico: 'Dr. Martinez',
        estado: 'pendiente',
        especialidad: 'Ginecologo'
    },
    {
        id: 8,
        fechaHora: '2024-06-27 11:00',
        pacienteId: '106',
        medicoId: '6',
        medico: 'Dr. Rodriguez',
        estado: 'pendiente',
        especialidad: 'Nutricionista'
    },

])


citas.value = citasDatabase.value.map(cita => {
    const fecha = cita.fechaHora.split(' ')[0]
    const date = new Date(cita.fechaHora)
    const hora = `${fecha} ${new Date(date.setHours(date.getHours() + 1)).toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', hour12: false }).replace('.', ':').replace(' ', 'am')}`
    return {
        id: cita.id,
        title: `Cita con ${cita.medico}`,
        start: cita.fechaHora,
        end: hora,
    }
})

const calendarApp = createCalendar({
    selectedDate: today.value,
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
    <div class="flex justify-center w-full gap-4 overflow-auto">
        <Card style="width: auto; height: auto; overflow: auto; padding: 4px;">
            <template #title>
                <h3 class="text-center text-blue-25">Iniciar Cita</h3>
            </template>
            <template #content>
                <div class="lg:w-72 flex flex-col items-center">
                    <div v-if="cita"
                        class="w-30 gap-4">
                        <h3 class="block m-1">{{ cita.medico }}</h3>
                        <h4 class="block m-1">{{ cita.especialidad }}</h4>
                        <p>Fecha de Cita: <span>{{ useDateFormat(cita.fechaHora, 'D/MM/YY HH:mm A').value }}</span></p>
                        <p>Estado: <span>{{ cita.estado }}</span></p>
                    </div>
                    <div>
                        <Button :disabled="!cita"
                            label="Iniciar video llamada"
                            @click="startCall" />
                    </div>
                </div>
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