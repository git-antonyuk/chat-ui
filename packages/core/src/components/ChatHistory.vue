<script lang="ts">
import type { Sender, Message } from './ChatBubble.vue'

export type Props = {
  mexHeight?: number
}

// Re-export types for convenience
export type { Sender, Message }

const MESSAGES: Message[] = [
  {
    id: 1,
    sender: 'sender',
    content: "Hi, I've been reading about Teflon and I'm concerned about its environmental impact. Can you tell me more?",
    timestamp: '10:15 AM'
  },
  {
    id: 2,
    sender: 'receiver',
    content: "Hello! Your concern is well-founded. Teflon contains PFOA (perfluorooctanoic acid) and other PFAS chemicals that are extremely persistent in the environment. They're often called 'forever chemicals' because they don't break down naturally.",
    timestamp: '10:16 AM'
  },
  {
    id: 3,
    sender: 'sender',
    content: "Forever chemicals? That sounds alarming. How do they get into the environment?",
    timestamp: '10:17 AM'
  },
  {
    id: 4,
    sender: 'receiver',
    content: "PFAS chemicals enter the environment through manufacturing waste, landfill leachate, and even when non-stick cookware is heated above 500°F. They've been found in drinking water supplies worldwide, including remote Arctic regions.",
    timestamp: '10:18 AM'
  },
  {
    id: 5,
    sender: 'sender',
    content: "Wait, they're even in the Arctic? How is that possible?",
    timestamp: '10:19 AM'
  },
  {
    id: 6,
    sender: 'receiver',
    content: "PFAS chemicals can travel through air and water currents globally. They bioaccumulate in wildlife and have been detected in polar bears, seals, and fish in pristine environments thousands of miles from any industrial source.",
    timestamp: '10:20 AM'
  },
  {
    id: 7,
    sender: 'sender',
    content: "This is really concerning. What about health effects? Should I throw away my non-stick pans?",
    timestamp: '10:21 AM'
  },
  {
    id: 8,
    sender: 'receiver',
    content: "PFAS exposure has been linked to cancer, liver damage, decreased fertility, and immune system problems. While you don't need to panic, consider replacing old or scratched non-stick cookware with alternatives like cast iron, stainless steel, or ceramic.",
    timestamp: '10:22 AM'
  },
  {
    id: 9,
    sender: 'sender',
    content: "I had no idea it was this serious. Are there any regulations being put in place?",
    timestamp: '10:23 AM'
  },
  {
    id: 10,
    sender: 'receiver',
    content: "Yes, regulations are evolving. The EPA has set drinking water limits for some PFAS, and several states have banned PFAS in food packaging. The EU is considering a comprehensive PFAS restriction. However, enforcement and cleanup remain challenging.",
    timestamp: '10:24 AM'
  },
  {
    id: 11,
    sender: 'sender',
    content: "What about the companies that made these chemicals? Are they being held accountable?",
    timestamp: '10:25 AM'
  },
  {
    id: 12,
    sender: 'receiver',
    content: "There have been significant lawsuits. DuPont and 3M have paid billions in settlements for PFAS contamination. The documentary 'Dark Waters' highlighted how DuPont knew about PFOA dangers for decades but continued production.",
    timestamp: '10:26 AM'
  },
  {
    id: 13,
    sender: 'sender',
    content: "That's infuriating. Is there any way to remove PFAS from contaminated water?",
    timestamp: '10:27 AM'
  },
  {
    id: 14,
    sender: 'receiver',
    content: "PFAS removal is expensive and challenging. Activated carbon filters, reverse osmosis, and ion exchange can help, but they're not 100% effective. The best approach is prevention - stopping PFAS at the source.",
    timestamp: '10:28 AM'
  },
  {
    id: 15,
    sender: 'sender',
    content: "What can I do as an individual to reduce my exposure and help with this problem?",
    timestamp: '10:29 AM'
  },
  {
    id: 16,
    sender: 'receiver',
    content: "Great question! Avoid non-stick cookware, microwave popcorn bags, and stain-resistant treatments. Choose PFAS-free products when possible. Support legislation for PFAS regulation and consider water filtration systems.",
    timestamp: '10:30 AM'
  },
  {
    id: 17,
    sender: 'sender',
    content: "Are there any promising technologies for breaking down these forever chemicals?",
    timestamp: '10:31 AM'
  },
  {
    id: 18,
    sender: 'receiver',
    content: "Researchers are developing promising methods like supercritical water oxidation, plasma treatment, and electrochemical oxidation. Some bacteria and enzymes show potential for PFAS degradation, but these technologies are still in development.",
    timestamp: '10:32 AM'
  },
  {
    id: 19,
    sender: 'sender',
    content: "This has been really eye-opening. Any final thoughts on this issue?",
    timestamp: '10:33 AM'
  },
  {
    id: 20,
    sender: 'receiver',
    content: "The PFAS crisis shows how important it is to thoroughly test chemicals before widespread use. While the situation is serious, increased awareness and research give me hope. Every person who learns about this and makes informed choices helps drive positive change.",
    timestamp: '10:34 AM'
  }
]
</script>


<script setup lang='ts'>
import { ref, useTemplateRef, onMounted } from 'vue'
import ChatBubble from './ChatBubble.vue'


const { mexHeight = 500 } = defineProps<Props>()
const messages = ref<Message[]>(MESSAGES)
const messagesContainerRef = useTemplateRef('messagesContainerRef')

onMounted(() => {
  if (messagesContainerRef.value) {
    messagesContainerRef.value.scrollTop = messagesContainerRef.value.scrollHeight
  }
})

</script>

<template>
  <div ref="messagesContainerRef" class="space-y-4 overflow-hidden overflow-y-auto" :style="{ height: `${mexHeight}px` }">
    <ChatBubble
      v-for="message in messages"
      :key="message.id"
      :sender="message.sender"
      :content="message.content"
      :timestamp="message.timestamp"
    />
  </div>
</template> 