<script setup lang="ts">

const emit = defineEmits<{
    (event: 'change', component: string): void
}>()

const items = ref([
    {
        label: 'Profile',
        icon: 'pi pi-user',
        component: 'Profile'
    },
    {
        label: 'Agenda',
        icon: 'pi pi-address-book',
        component: 'Book'
    },
    {
        label: 'Config',
        icon: 'pi pi-cor',
        component: 'Config'
    }
])



</script>
<template>
    <div class="card">
        <TabMenu :model="items">
            <template #item="{ item, props }">
                <a v-ripple
                    v-bind="props.action"
                    @click="emit('change', item.component)"
                    class="items-center text-blue-25">
                    <span class="font-bold">{{ item.label }}</span>
                </a>
            </template>
        </TabMenu>
    </div>
</template>
<style scoped></style>