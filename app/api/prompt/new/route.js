import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
	// extraction of data //
  const { userId, prompt, tag } = await req.json();

  // processing of data //
  try {
    await connectToDB();
	const newPrompt = new Prompt ({
		creator: userId,
		prompt,
		tag
	})

	// data stored in database //
	await newPrompt.save();
	return new Response(JSON.stringify(newPrompt), {status: 201 })
  } catch (error) {
	return new Response("Failed to create a new prompt", {status: 500})
  }
};
