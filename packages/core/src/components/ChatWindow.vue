<script setup lang='ts'>
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card'
import ChatWindowHeader from './ChatWindowHeader.vue'
import ChatHistory from './ChatHistory.vue'
import ChatInput from './ChatInput.vue'
</script>

<template>
  <Card class="w-[600px] mx-auto flex flex-col">
    <CardHeader>
      <ChatWindowHeader />
    </CardHeader>
    <CardContent>
      <ChatHistory />
    </CardContent>
    <CardFooter>
      <ChatInput />
    </CardFooter>
  </Card>
</template>