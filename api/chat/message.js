import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

const ASSISTANT_ID = process.env.VITE_OPENAI_ASSISTANT_ID;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { threadId, message } = req.body;

  if (!threadId || !message) {
    return res.status(400).json({ error: 'threadId and message are required' });
  }

  try {
    // 1. Add message to thread
    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: message,
    });

    // 2. Run the assistant and poll
    const run = await openai.beta.threads.runs.createAndPoll(threadId, {
      assistant_id: ASSISTANT_ID,
    });

    if (run.status === 'completed') {
      const messages = await openai.beta.threads.messages.list(threadId);
      const lastMessage = messages.data[0];
      return res.status(200).json({ response: lastMessage.content[0].text.value });
    } else {
      return res.status(500).json({ error: `Assistant run failed with status: ${run.status}` });
    }
  } catch (error) {
    console.error('Error in chat:', error);
    return res.status(500).json({ error: error.message });
  }
}
