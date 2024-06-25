<script setup lang="ts">
import ProfilePaciente from '../components/ProfilePaciente.vue';
import AgendaPaciente from '../components/AgendaPaciente.vue';
import ConfigPaciente from '../components/ConfigPaciente.vue';

const componentName = ref('Profile')

const dynamicComponent = computed(() => componentName.value === 'Profile' ? ProfilePaciente : componentName.value === 'Book' ? AgendaPaciente : ConfigPaciente)


const changeComponent = (component: string) => {
  componentName.value = component
}
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-2">
    <div>
      <SelectMenuProfile @change="changeComponent" />
    </div>
    <keep-alive>
      <component :is="dynamicComponent"></component>
    </keep-alive>
  </div>
</template>