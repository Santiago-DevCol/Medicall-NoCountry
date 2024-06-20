<script setup lang="ts">
import { useHead } from '@unhead/vue';
import ProfileAdmin from '../components/ProfileAdmin.vue';
import AgendaAdmin from '../components/AgendaAdmin.vue';
import ConfigAdmin from '../components/ConfigAdmin.vue';
const title = 'Admin';
const componentName = ref('Profile')

const dynamicComponent = computed(() => componentName.value === 'Profile' ? ProfileAdmin : componentName.value === 'Book' ? AgendaAdmin : ConfigAdmin)

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: 'Paciente'
    }
  ]
});

const changeComponent = (component: string) => {
  componentName.value = component
}
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div>
      <ProfileLayout @change="changeComponent" />
    </div>
    <keep-alive>
      <component :is="dynamicComponent"></component>
    </keep-alive>
    <h1>{{ componentName }}</h1>
  </div>
</template>