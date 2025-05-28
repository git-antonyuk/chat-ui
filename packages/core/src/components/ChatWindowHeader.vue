<script lang="ts">
  export type Props = {
    title?: string;
    subtitle?: string;
  };
</script>

<script lang="ts" setup>
  import { CardTitle, CardDescription } from '@/components/ui/card';
  import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
  import { Separator } from '@/components/ui/separator'
  const { title = 'Environmental Agent', subtitle = 'Online' } =
    defineProps<Props>();
</script>

<template>
  <header>
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <!-- first column -->
      </div>
      <div class="col-span-8 text-center">
        <CardTitle>{{ title }}</CardTitle>
        <CardDescription>{{ subtitle }}</CardDescription>
      </div>
      <div class="col-span-2 flex justify-end">
        <Avatar>
          <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
    <Separator class="my-2" />
  </header>
</template>