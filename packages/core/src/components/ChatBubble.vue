<script lang="ts">
import { type Sender } from '@/composables/types'

export type Props = {
  sender?: Sender
  content?: string
  timestamp?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { useChatConfig } from '@/composables/useChatConfig';
import type { ChatConfig } from '@/types';

const { 
  sender, 
  content, 
  timestamp = new Date().toISOString(), 
} = defineProps<Props>()

const {
  senderLabel,
  receiverLabel,
}: ChatConfig = useChatConfig();

const isFromSender = sender === 'sender'
const displayLabel = isFromSender ? senderLabel : receiverLabel

const classes = computed(() => {
  return cn(
            'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
            sender === 'sender' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted',
          )
})

const humanizeTimestamp = computed(() => {
  const date = new Date(timestamp)
  return date.toLocaleString()
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
      <slot>
        <div class="font-medium text-xs opacity-70 mb-1">
          {{ displayLabel }}
        </div>
        {{ content }}
        <div class="text-xs opacity-70 mt-1">{{ humanizeTimestamp }}</div>
      </slot>
    </div>
  </div>
</template> 