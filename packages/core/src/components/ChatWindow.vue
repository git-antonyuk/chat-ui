<script lang="ts">
  import type { ChatConfig } from '@/types';
  export type Props = {
    chatConfig: ChatConfig;
  };
</script>

<script setup lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
  } from '@/components/ui/card';
  import ChatWindowHeader from './ChatWindowHeader.vue';
  import ChatHistory from './ChatHistory.vue';
  import ChatInput from './ChatInput.vue';
  import { provide } from 'vue';
  import { PROVIDER_KEY_CHAT_CONFIG } from '@/utils/constants';

  const emit = defineEmits<{
    (e: 'sendMessage', message: string): void;
  }>();

  const { chatConfig } = defineProps<Props>();
  provide<ChatConfig>(PROVIDER_KEY_CHAT_CONFIG, chatConfig);
</script>

<template>
  <Card class="mx-auto flex flex-col">
    <CardHeader>
      <ChatWindowHeader />
    </CardHeader>
    <CardContent>
      <ChatHistory />
    </CardContent>
    <CardFooter>
      <ChatInput @send-message="emit('sendMessage', $event)" />
    </CardFooter>
  </Card>
</template>
