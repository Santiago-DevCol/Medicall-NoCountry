<script setup lang="ts">
const webrtc = ref(null);
const roomId = ref('public-room-v2');

const stateCall = computed(() => {
  return webrtc.value?.state;
});

const join = () => {
  webrtc.value?.join();
};

const leave = () => {
  webrtc.value?.leave();
};
</script>
<template>
  <InputText id="join-help"
    label="Room ID"
    v-model="roomId" />
  <VideoWebRTC ref="webrtc"
    socketURL="https://143.198.128.118:3000/"
    cameraHeight="500"
    :roomId="roomId"
    :enableLogs="true" />
  <Button label="Join"
    v-if="stateCall === 'disconnect'"
    @click="join"
    aria-labelledby="join-help"
    class="m-2" />
  <Button severity="danger"
    v-if="stateCall === 'connected'"
    label="Leave"
    @click="leave"
    class="m-2" />
</template>
<style scoped></style>