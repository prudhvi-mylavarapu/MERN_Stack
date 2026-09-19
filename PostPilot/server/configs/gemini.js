import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main(prompt) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: `${prompt} Generate a blog content for this topic in simple text format.`
      }
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content;
}

export default main;