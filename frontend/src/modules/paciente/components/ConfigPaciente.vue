<script setup lang="ts">
import useAuthStore from '@/stores/useAuthStore';
import { storeToRefs } from 'pinia';


const store = useAuthStore()
const { currentUser } = storeToRefs(store)
const email = ref(currentUser.value.email)
const name = ref(currentUser.value.name)
</script>
<template>
  <div>
    <Card>
      <template #content>
        <div class="flex flex-col gap-2">
          <Card>
            <template #title>
              Configuraciones
            </template>
            <template #content>
              <div class="flex items-center flex-wrap w-11/11">
                <div class="mt-3 p-2 flex flex-col">
                  <label class=" m-1 text-gray-1"
                    for="nombre">Nombre</label>
                  <InputText id="nombre"
                    v-model="name"
                    type="text"
                    name="nombre"
                    autofocus />
                </div>
                <div class="mt-3 p-2 flex flex-col">
                  <label class=" m-1 text-gray-1"
                    for="email">Email</label>
                  <InputText id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    autofocus />
                </div>
                <div class="mt-3 p-2 flex flex-col">
                  <label class=" m-1 text-gray-1"
                    for="email">Email</label>
                  <InputText id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    autofocus />
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </Card>
  </div>
  <footer>
    <Card>
      <template #content>
        <div></div>
      </template>
    </Card>
  </footer>
</template>