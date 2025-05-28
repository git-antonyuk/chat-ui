<script lang="ts">
export type Sender = 'sender' | 'receiver'

export type Message = {
  id: number
  sender: Sender
  content: string
  timestamp: string
}

export type Props = {
  sender: Sender
  content: string
  timestamp: string
  senderLabel?: string
  receiverLabel?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const { 
  sender, 
  content, 
  timestamp, 
  senderLabel = 'You', 
  receiverLabel = 'Environmental Agent' 
} = defineProps<Props>()

const isFromSender = sender === 'sender'
const displayLabel = isFromSender ? senderLabel : receiverLabel

const classes = computed(() => {
  return cn(
            'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
            sender === 'sender' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted',
          )
})
</script>

<template>
  <div
    :class="[
      'flex',
      isFromSender ? 'justify-end' : 'justify-start'
    ]"
  >
    <div
      :class="classes"
    >
      <div class="font-medium text-xs opacity-70 mb-1">
        {{ displayLabel }}
      </div>
      {{ content }}
      <div class="text-xs opacity-70 mt-1">{{ timestamp }}</div>
    </div>
  </div>
</template> 