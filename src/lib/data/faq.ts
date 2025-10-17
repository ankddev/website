export interface QAEntry {
	question: string;
	answer: string;
}

export const FAQ: QAEntry[] = [
	{
		question: "What's your favourite programming language?",
		answer: "My favourite is Rust, very like Gleam also, now learning Zig, it's nice too"
	},
	{
		question: "What's your favourite coding font?",
		answer: "Some time ago I used JetBrains Mono, but now I use Maple Mono, it's wonderful!"
	},
	{
		question: 'What are your hobbies excluding programming?',
		answer: 'I really like reading books, playing chess and running!'
	},
	{
		question: 'Which IDE are you using?',
		answer:
			'I use Neovim with custom config and Zed. Zed is really nice. Both faster\
			and lighter than VS Code and JB IDEs.'
	},
	{
		question: 'Which theme are you using?',
		answer:
			"I very like Catppuccin theme, especially in Mocha variant. I'm trying to\
			use it everywhere to decrease context switching."
	},
	{
		question: 'Which shell are you using?',
		answer:
			"My main shell everywhere is Nushell, but on Linux I often use POSIX-compliant shells\
			like ZSH and Bash and on Windows I often use CMD. For scripts I sometimes use\
			PowerShell, but I think that it's not a good choice for everyday shell."
	},
	{
		question: 'What languages do you speak?',
		answer: "I speak Russian (native), English and I'm currently learning some Chinese"
	},
	{
		question: 'Do you use GPT and AI at work?',
		answer:
			'I use ChatGPT to search information and sometimes to explain error\
		message or some information before test. Also I use it to create\
		quizzes to check my knowledge. I tried to write code via Cursor and Copilot,\
		but found that with it I write code slower, write hard to read code, do more\
		mistakes, have less codebase and technology knowledge and so on. So, I prefer\
		to write code myself.'
	}
];
