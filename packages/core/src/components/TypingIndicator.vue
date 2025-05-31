<script setup lang="ts">
import { Ellipsis } from 'lucide-vue-next';
</script>

<template>
  <Ellipsis class="typing-indicator" />
</template>

<style scoped>
@keyframes typing-dots {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-2px);
    opacity: 1;
  }
}

.typing-indicator {
  animation: typing-pulse 1.5s ease-in-out infinite;
}

.typing-indicator :deep(circle:nth-child(1)) {
  animation: typing-dots 1.5s ease-in-out infinite;
  animation-delay: 0s;
}

.typing-indicator :deep(circle:nth-child(2)) {
  animation: typing-dots 1.5s ease-in-out infinite;
  animation-delay: 0.2s;
}

.typing-indicator :deep(circle:nth-child(3)) {
  animation: typing-dots 1.5s ease-in-out infinite;
  animation-delay: 0.4s;
}

@keyframes typing-pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}
</style> 