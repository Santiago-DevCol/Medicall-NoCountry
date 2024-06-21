<script setup lang="ts">
import { computed } from 'vue'
import useAuthStore from '@/stores/useAuthStore';
import { storeToRefs } from 'pinia';
import AdminProfileView from '@/modules/admin/views/AdminProfileView.vue'
import MedicoProfileView from '@/modules/medico/views/MedicosProfileView.vue'
import PacienteProfileView from '@/modules/profile/components/PacienteProfileView.vue'

const store = useAuthStore()
const { currentUser } = storeToRefs(store)
const customComponent = computed(() => currentUser.value?.type_profile === 1 ? PacienteProfileView : currentUser.value?.type_profile === 2 ? MedicoProfileView : AdminProfileView)
</script>

<template>
  <div class="h-[calc(100vh-10em)] overflow-hidden">
    <component :is="customComponent" />
  </div>
</template>