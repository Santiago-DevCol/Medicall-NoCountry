<script setup lang="ts">
import { useHead } from '@unhead/vue';
import ProfilePaciente from './ProfilePaciente.vue';
import AgendaPaciente from './AgendaPaciente.vue';
import ConfigPaciente from './ConfigPaciente.vue';
const title = 'Paciente';
const componentName = ref('Profile')

const dynamicComponent = computed(() => componentName.value === 'Profile' ? ProfilePaciente : componentName.value === 'Book' ? AgendaPaciente : ConfigPaciente)

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
  <div class="flex flex-col justify-center items-center gap-2">
    <div>
      <ProfileLayout @change="changeComponent" />
    </div>
    <keep-alive>
      <component :is="dynamicComponent"></component>
    </keep-alive>
  </div>
</template>