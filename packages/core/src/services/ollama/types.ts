export type OllamaMessageResponse = {
  created_at: string;
  done: boolean;
  done_reason: string;
  eval_count: number;
  eval_duration: number;
  load_duration: number;
  message: { role: 'assistant'; content: string };
  model: string;
  prompt_eval_count: number;
  prompt_eval_duration: number;
  total_duration: number;
};

export type OllamaMessageRole = 'user' | 'assistant'

export type OllamaMessage = {
  role: OllamaMessageRole
  content: string
}

export type OllamaSendMessageParams = {
  stream: boolean
  messages: OllamaMessage[]
  onChunk?: (chunk: OllamaMessageResponse) => void
}
