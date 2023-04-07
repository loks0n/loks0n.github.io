<script>
	import Highlight from 'svelte-highlight';
	import { a11yDark } from 'svelte-highlight/styles';
	import { shell, typescript } from 'svelte-highlight/languages';

	const importSnippet = `import { DraughtsPlayer, DraughtsStatus } from 'rapid-draughts';
import {
  EnglishDraughts as Draughts,
  EnglishDraughtsComputerFactory as ComputerFactory,
} from 'rapid-draughts/english';`;

	const computerFactorySnippet = `const weakComputer = ComputerFactory.random();
const strongComputer = ComputerFactory.alphaBeta({ maxDepth: 7 });`;

	const gameSnippet = `while (draughts.status === DraughtsStatus.PLAYING) {
  console.log(draughts.asciiBoard());
  console.log(\`to_move = \${draughts.player}\`);

  const computerPlayer =
    draughts.player === DraughtsPlayer.LIGHT ? weakComputer : strongComputer;

  const move = await computerPlayer(draughts);
  if (move) draughts.move(move);
}
`;

	const winnerSnippet = `console.log(\`\${draughts.asciiBoard()}\`);
console.log(\`status = \${draughts.status}\`);
console.log(\`ended after \${draughts.history.moves.length} moves\`);
`;
</script>

<svelte:head>
	{@html a11yDark}
</svelte:head>

<article>
	<h1>rapid-draughts - <a href="https://github.com/loks0n/rapid-draughts">GitHub</a></h1>

	<p>
		Draughts (also known as checkers) is a popular strategy board game that has been played for
		centuries. The rapid-draughts library providing a fast and efficient TypeScript engine with move
		validation, AI, and game history.
	</p>

	<section>
		<h2>How it works</h2>
		<p>
			The rapid-draughts library uses bitboards to represent the game state. Bitboards are a compact
			and efficient data structure consisting of three unsigned integers (32 or 64 bits each) that
			represent the light pieces, dark pieces, and king pieces on the board.
		</p>
		<p>
			The use of bitboards enables rapid-draughts to generate moves quickly and with minimal memory
			usage, making it a highly efficient library for draughts games. The English draughts/American
			checkers engine included in the library follows the WCDF (World Checkers Draughts Federation)
			ruleset.
		</p>
	</section>

	<section>
		<h2>Tutorial</h2>
		<h3>Getting started</h3>
		<p>
			To get started, you'll first need to install the rapid-draughts library. Run the following
			command inside your Node.js project:
		</p>
		<Highlight language={shell} code={`npm install rapid-draughts`} />
		<p>Once installed, you can use the library by importing the required modules:</p>
		<Highlight language={typescript} code={importSnippet} />
		<h3>Setting up a game</h3>
		<p>To set up a game of draughts, you need to create an instance of the Draughts class:</p>
		<Highlight language={typescript} code={`const draughts = Draughts.setup();`} />
		<p>
			Now that you have an instance of the game, you can display the available moves and make a
			move:
		</p>
		<h3>Playing with AI</h3>
		<p>
			The rapid-draughts library comes with built-in AI opponents. To create computer players, use
			the ComputerFactory:
		</p>
		<Highlight language={typescript} code={computerFactorySnippet} />
		<p>With the AI players created, you can now play a game against them:</p>
		<Highlight language={typescript} code={gameSnippet} />
		<p>Now the game is over, let's announce the winner!</p>
		<Highlight language={typescript} code={winnerSnippet} />
	</section>
</article>
