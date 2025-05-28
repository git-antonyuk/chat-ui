<script setup lang="ts">
  import { ref } from 'vue';
  import { Separator } from '@/components/ui/separator';
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';

  const chatMessage = ref('');

  const onSubmit = (values: any) => {
    console.log('Form submitted!', values);
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
          placeholder="Type your message..."
          v-model="chatMessage"
          focus-on-mount
        />
      </div>
      <Button type="submit"> Submit </Button>
    </form>
  </div>
</template>
