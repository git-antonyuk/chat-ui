<script lang="ts" setup>
  import { CardTitle, CardDescription } from '@/components/ui/card';
  import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
  import { Separator } from '@/components/ui/separator';
  import type { ChatConfig } from '@/types';
  import { useChatConfig } from '@/composables/useChatConfig';

  const {
    chatTitle: title,
    chatSubtitle: subtitle,
    chatAvatar: avatarSrc,
  }: ChatConfig = useChatConfig();
</script>

<template>
  <header>
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <!-- first column -->
      </div>
      <div class="col-span-8 text-center">
        <CardTitle>{{ title }}</CardTitle>
        <CardDescription v-if="subtitle">{{ subtitle }}</CardDescription>
      </div>
      <div class="col-span-2 flex justify-end">
        <Avatar class="w-12 h-12 dark:bg-white">
          <AvatarImage v-if="avatarSrc" :src="avatarSrc" :alt="title" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
    <Separator class="my-2" />
  </header>
</template>
