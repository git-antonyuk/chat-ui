import { type OllamaMessageResponse, type OllamaMessage, type OllamaSendMessageParams } from './types';

export const sendMessageNonStreaming = async (messages: OllamaMessage[]): Promise<OllamaMessageResponse | null> => {
  const response = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3',
      messages: messages,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json() as OllamaMessageResponse;
};

export const sendMessageStreaming = async (messages: OllamaMessage[], onChunk?: (chunk: OllamaMessageResponse) => void) => {
  const response = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3',
      messages: messages,
      stream: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error('No reader available');
  }

  const decoder = new TextDecoder();
  let finalResponse: OllamaMessageResponse | null = null;
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      
      for (const line of lines) {
        if (line.trim() === '') continue;
        
        try {
          const chunk: OllamaMessageResponse = JSON.parse(line);
          if (onChunk) {
            onChunk(chunk);
          }
          if (chunk.done) {
            finalResponse = chunk;
          }
        } catch (parseError) {
          console.error('Error parsing JSON chunk:', parseError, 'Line:', line);
        }
      }
    }
  } finally {
    reader.releaseLock();
  }

  return finalResponse;
}

export const sendMessage = async (payload: OllamaSendMessageParams): Promise<OllamaMessageResponse | null> => {
  if (payload.stream) {
    return await sendMessageStreaming(payload.messages, payload.onChunk);
  } else {
    return await sendMessageNonStreaming(payload.messages);
  }
};
