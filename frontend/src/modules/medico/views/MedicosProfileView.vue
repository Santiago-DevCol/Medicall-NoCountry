<script setup lang="ts">
import AgendaMedico from '../components/AgendaMedico.vue';
import ConfigMedico from '../components/ConfigMedico.vue';
import ProfileMedico from '../components/ProfileMedico.vue';


//import { useCitaStore } from '@/stores/useCitaStore';
const title = 'Medicos';
const { push } = useRouter();
//const store = useCitaStore();

const componentName = ref('Profile')

const dynamicComponent = computed(() => componentName.value === 'Profile' ? ProfileMedico : componentName.value === 'Book' ? AgendaMedico : ConfigMedico)

useHead({
    title: title,
    meta: [
        {
            name: 'description',
            content: 'Medicos Profile'
        }
    ]
});

const goVidecall = () => {
    push({ name: 'videocall', query: { roomId: 'cita37437' } });
};

const changeComponent = (component: string) => {
    console.log(component);
}
</script>
<template>
    <ProfileLayout @change="changeComponent" />
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Medicos</h1>
                    <Button @click="goVidecall">Go Cita</Button>
                </div>
            </div>
        </div>
        <keep-alive>
            <component :is="dynamicComponent"/>
        </keep-alive>
    </section>
</template>