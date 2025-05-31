import type { StoreMessage } from '@/composables/types';
import type { OllamaMessageResponse } from './ollama/types';
import { SERVICE_OPENAI, SERVICE_OLLAMA } from './constants';

export type Services = typeof SERVICE_OPENAI | typeof SERVICE_OLLAMA;
export type FetchMessageResponseParams = {
  service: Services;
  messages: StoreMessage[];
  onChunk?: (chunk: OllamaMessageResponse) => void;
  stream: boolean;
};