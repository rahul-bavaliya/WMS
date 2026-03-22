import { init, trace, span, SpanStatusCode } from '@opentelemetry/api';
import Anthropic from '@anthropic-ai/sdk';

const ANTHROPIC_MODEL = 'claude-sonnet-4-20250514';

interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AIOptions {
  system?: string;
  maxTokens?: number;
  temperature?: number;
  cache?: boolean;
}

class ClaudeClient {
  private client: Anthropic;

  constructor() {
    this.client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  async complete(prompt: string, options: AIOptions = {}): Promise<string> {
    const {
      system = 'You are a helpful AI assistant.',
      maxTokens = 1024,
      temperature = 0.7,
    } = options;

    const response = await this.client.messages.create({
      model: ANTHROPIC_MODEL,
      max_tokens: maxTokens,
      temperature,
      system,
      messages: [{ role: 'user', content: prompt }],
    });

    return response.content[0].type === 'text' ? response.content[0].text : '';
  }

  async stream(prompt: string, options: AIOptions = {}): Promise<AsyncIterable<string>> {
    const {
      system = 'You are a helpful AI assistant.',
      maxTokens = 1024,
      temperature = 0.7,
    } = options;

    const stream = await this.client.messages.stream({
      model: ANTHROPIC_MODEL,
      max_tokens: maxTokens,
      temperature,
      system,
      messages: [{ role: 'user', content: prompt }],
    });

    return stream;
  }

  async completeStructured<T>(
    prompt: string,
    schema: object,
    options: AIOptions = {}
  ): Promise<T> {
    const {
      system = 'You are a helpful AI assistant. Always respond with valid JSON.',
      maxTokens = 2048,
      temperature = 0.3,
    } = options;

    const response = await this.client.messages.create({
      model: ANTHROPIC_MODEL,
      max_tokens: maxTokens,
      temperature,
      system: `${system}\n\nRespond ONLY with JSON matching this schema: ${JSON.stringify(schema)}`,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = response.content[0].type === 'text' ? response.content[0].text : '';
    return JSON.parse(text) as T;
  }
}

export const claude = new ClaudeClient();
export default claude;
