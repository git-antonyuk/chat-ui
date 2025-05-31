import { inject, ref } from 'vue';
import { PROVIDER_KEY_CHAT_CONFIG } from '@/utils/constants';
import type { ChatConfig } from '@/types';
import type { StoreMessage } from '@/composables/types';

export const useChatConfig = (): ChatConfig => {
  const defaultConfig: ChatConfig = {
    chatTitle: '',
    chatSubtitle: '',
    chatAvatar: '',
    senderLabel: '',
    receiverLabel: '',
    messages: ref<StoreMessage[]>([]),
    loading: ref<boolean>(false),
    streaming: false,
    errorMessage: ref<string | null>(null),
  };
  return inject<ChatConfig>(PROVIDER_KEY_CHAT_CONFIG) || defaultConfig;
};