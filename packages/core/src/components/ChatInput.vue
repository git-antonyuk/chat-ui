<script setup lang="ts">
  import { ref } from 'vue';
  import { Separator } from '@/components/ui/separator';
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { ArrowUp } from 'lucide-vue-next';
  import { useChatConfig } from '@/composables/useChatConfig';

  const { loading } = useChatConfig();

  const chatMessage = ref<string>('');

  const emit = defineEmits<{
    (e: 'sendMessage', message: string): void;
  }>();

  const onSubmit = () => {
    emit('sendMessage', chatMessage.value);
    chatMessage.value = '';
  };
</script>

<template>
  <div class="w-full">
    <Separator class="mb-4" />
    <form @submit.prevent="onSubmit" class="w-full flex gap-2">
      <div class="flex-1">
        <Input
          ref="chatMessageInputRef"
          type="text"
          placeholder="Type your message and press Enter to send..."
          v-model="chatMessage"
          focus-on-mount
        />
      </div>
      <Button type="submit" :disabled="loading" :loading="loading">
        <ArrowUp v-if="!loading" />
      </Button>
    </form>
  </div>
</template>
