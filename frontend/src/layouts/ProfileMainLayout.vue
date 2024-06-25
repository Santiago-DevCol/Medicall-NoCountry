<template>
    <div id="container"
        class="relative gap-2">
        <aside class="[grid-area:aside] flex flex-col items-center overflow-y-auto">
            <slot name="aside" />
        </aside>

        <main class="[grid-area:main]  rounded-lg overflow-x-auto">
            <slot name="main" />
        </main>

        <footer class="[grid-area:footer] w-auto rounded-lg min-h-[50px]">
            <slot name="footer" />
        </footer>
    </div>

</template>
<style scope>
#container {
    display: grid;
    grid-template-areas:
        "main main main"
        "main main main"
        "footer footer footer";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr auto;
}
</style>