<script setup lang="ts">
  import ChatWindow from './components/ChatWindow.vue';
  import Container from './components/Container.vue';
  import Settings from './components/Settings.vue';
  import { useChat } from '@/composables/useChat';
  import type { ChatConfig } from '@/types';

  // Init chat composable
  const { sendMessage, messages, loading, errorMessage } = useChat();

  // Init chat config
  const chatConfig: ChatConfig = {
    chatTitle: 'Ollama Chat',
    chatSubtitle: 'Online',
    chatAvatar: '/images/ollama-logo.svg',
    senderLabel: 'You',
    receiverLabel: 'Ollama',
    streaming: true,
    messages,
    loading,
    errorMessage,
  };

  // Handle send message event
  const handleSendMessage = (message: string) => {
    sendMessage({ content: message, streaming: chatConfig.streaming });
  };
</script>

<template>
  <Settings />
  <Container paddingY="lg">
    <ChatWindow :chat-config="chatConfig" @send-message="handleSendMessage" class="max-w-[620px]" />
  </Container>
</template>
