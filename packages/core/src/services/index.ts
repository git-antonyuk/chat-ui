import { sendMessage as sendMessageOllama } from './ollama';
import { type OllamaMessageResponse, type OllamaMessage } from './ollama/types';
import { SERVICE_OLLAMA } from './constants';
import { type FetchMessageResponseParams } from './types'

export const fetchMessageResponse = async ({
  service,
  messages,
  onChunk,
  stream,
}: FetchMessageResponseParams): Promise<OllamaMessageResponse | null> => {
  switch (service) {
    case SERVICE_OLLAMA:
      const ollamaMessages: OllamaMessage[] = messages.map((message) => ({
        role: message.sender === 'sender' ? 'user' : 'assistant',
        content: message.content,
      }));
      return sendMessageOllama({
        stream,
        messages: ollamaMessages,
        onChunk,
      });
    default:
      throw new Error(`Service ${service} not found`);
  }
};

export default {
  fetchMessageResponse,
};
