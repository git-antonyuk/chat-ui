<script setup lang="ts">
  import { useTemplateRef, onMounted, watch, nextTick, computed } from 'vue';
  import ChatBubble from './ChatBubble.vue';
  import TypingIndicator from './TypingIndicator.vue';
  import { useChatConfig } from '@/composables/useChatConfig';
  import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
  import { AlertCircle } from 'lucide-vue-next';

  const { messages, loading, streaming, errorMessage } = useChatConfig();

  const mexHeight = 500;

  const messagesContainerRef = useTemplateRef('messagesContainerRef');

  const scrollToButton = async () => {
    await nextTick();
    if (messagesContainerRef.value) {
      messagesContainerRef.value.scrollTo({
        top: messagesContainerRef.value.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  onMounted(scrollToButton);

  const lastMessage = computed(() => {
    return messages.value[messages.value.length - 1];
  });
  const isMessageContentEmpty = computed<boolean>(() => {
    return lastMessage.value?.content === '';
  });
  const isLoading = computed<boolean>(() => {
    if (streaming) {
      return isMessageContentEmpty.value;
    }
    return loading.value;
  });

  watch(
    () => messages.value.length,
    (newLength, oldLength) => {
      if (newLength > oldLength) {
        scrollToButton();
      }
    }
  );

  watch(
    () => lastMessage.value?.content,
    (newContent, oldContent) => {
      if (newContent !== oldContent) {
        scrollToButton();
      }
    }
  );
</script>

<template>
  <div
    ref="messagesContainerRef"
    class="space-y-4 overflow-hidden overflow-y-auto"
    :style="{ height: `${mexHeight}px` }"
  >
    <Alert v-if="errorMessage" variant="destructive">
      <AlertCircle class="w-4 h-4" />
      <AlertTitle>Oh no!</AlertTitle>
      <AlertDescription>
        {{ errorMessage }}
      </AlertDescription>
    </Alert>
    <template v-else>
      <template v-for="message in messages" :key="message.id">
        <ChatBubble
          v-if="message.content"
          :sender="message.sender"
          :content="message.content"
          :timestamp="message.timestamp"
        />
      </template>
      <ChatBubble v-if="isLoading">
        <TypingIndicator />
      </ChatBubble>
    </template>
  </div>
</template>
