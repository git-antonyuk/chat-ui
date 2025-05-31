import type { Ref, ComputedRef } from 'vue';
import type { StoreMessage } from './composables/types';

type RefOrComputedRef<T> = Ref<T> | ComputedRef<T>;

type ChatConfig = {
  chatTitle: string;
  chatSubtitle: string;
  chatAvatar: string;
  senderLabel: string;
  receiverLabel: string;
  streaming: boolean;
  loading: RefOrComputedRef<boolean>;
  messages: RefOrComputedRef<StoreMessage[]>;
  errorMessage: RefOrComputedRef<string | null>;
}

export type { ChatConfig };