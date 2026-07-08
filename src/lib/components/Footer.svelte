<footer>
	<nav>
		<ul>
			<li>
				<a href="/rss.xml" target="_blank" rel="noopener noreferrer">RSS</a>
			</li>
			<li>
				<a
					class="outline"
					target="_blank"
					rel="noopener noreferrer"
					href="https://linkedin.com/in/lukebsilver">LinkedIn</a
				>
			</li>
			<li>
				<a
					class="outline"
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/loks0n">GitHub</a
				>
			</li>
		</ul>
	</nav>

	<small>© {new Date().getFullYear()}</small>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	ul {
		display: flex;
		list-style: none;
		gap: 1em;
		flex-wrap: wrap;
	}

	a {
		letter-spacing: 0.05em;
		text-decoration: none;
	}
</style>
