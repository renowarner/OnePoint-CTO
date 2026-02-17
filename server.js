import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from current directory
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

const ASSISTANT_ID = process.env.VITE_OPENAI_ASSISTANT_ID;

console.log('--- Server Starting ---');
console.log('Assistant ID Loaded:', ASSISTANT_ID);

// Create a thread
app.post('/api/chat/thread', async (req, res) => {
  try {
    const thread = await openai.beta.threads.create();
    console.log('Thread Created Successfully:', thread.id);
    res.json({ threadId: thread.id });
  } catch (error) {
    console.error('Error creating thread:', error);
    res.status(500).json({ error: error.message });
  }
});

// Send a message and get response
app.post('/api/chat/message', async (req, res) => {
  const { threadId, message } = req.body;
  console.log('--- Chat Request Received ---');
  console.log('Thread ID:', threadId);
  console.log('Message:', message);

  if (!threadId || !message) {
    console.error('Missing threadId or message');
    return res.status(400).json({ error: 'threadId and message are required' });
  }

  try {
    // 1. Add message to thread
    console.log(`Adding message to thread: ${threadId}`);
    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: message,
    });

    // 2. Run the assistant using createAndPoll
    console.log(`Running assistant ${ASSISTANT_ID} on thread ${threadId}`);
    const run = await openai.beta.threads.runs.createAndPoll(threadId, {
      assistant_id: ASSISTANT_ID,
    });

    console.log('Run Status:', run.status);

    if (run.status === 'completed') {
      const messages = await openai.beta.threads.messages.list(threadId);
      const lastMessage = messages.data[0];
      const responseText = lastMessage.content[0].text.value;
      console.log('Response Fetched Successfully!');
      res.json({ response: responseText });
    } else {
      console.error('Run failed with status:', run.status);
      res.status(500).json({ error: `Assistant run failed with status: ${run.status}`, details: run.last_error });
    }
  } catch (error) {
    console.error('CRITICAL ERROR in /api/chat/message:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
