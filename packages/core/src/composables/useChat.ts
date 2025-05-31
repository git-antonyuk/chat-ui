import { ref, readonly, computed } from 'vue';
import service from '@/services';
import { SERVICE_OLLAMA } from '@/services/constants';
import { type StoreMessage, type Sender, type SendMessageParams } from './types';
import { v4 as uuidv4 } from 'uuid';

export const useChat = () => {
  const loading = ref(false);
  const messages = ref<StoreMessage[]>([]);
  const errorMessage = ref<string | null>(null);

  const createNewMessage = (content: string, sender: Sender): StoreMessage => {
    return {
      id: uuidv4(),
      sender,
      content,
      timestamp: new Date().toISOString(),
    };
  };

  const sendMessageStreaming = async () => {
    const responseMessage: StoreMessage = createNewMessage(
      "",
      'receiver'
    );
    messages.value.push(responseMessage);
    
    await service.fetchMessageResponse({
      stream: true,
      service: SERVICE_OLLAMA,
      messages: messages.value,
      onChunk: (chunk) => {
        messages.value[messages.value.length - 1].content += chunk.message.content;
      },
    });
  }
  const sendMessageDefault = async () => {
    const response = await service.fetchMessageResponse({
      stream: false,
      service: SERVICE_OLLAMA,
      messages: messages.value,
    });
  
    if (response?.message) {
      const responseMessage: StoreMessage = createNewMessage(
        response.message.content,
        'receiver'
      );
      messages.value.push(responseMessage);
    }
  }

  const sendMessage = async ({ content, streaming }: SendMessageParams) => {
    errorMessage.value = null;
    const newMessage: StoreMessage = createNewMessage(content, 'sender');
    messages.value.push(newMessage);

    try {
      if (streaming) {
        await sendMessageStreaming();
      } else {
        await sendMessageDefault();
      }
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : 'An unknown error occurred';
    } finally {
      loading.value = false;
    }
  };

  return {
    loading: readonly(loading),
    errorMessage: readonly(errorMessage),
    messages: computed(() => messages.value),
    sendMessage,
  };
};
