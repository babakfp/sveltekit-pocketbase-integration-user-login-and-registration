<script>
  import "../app.postcss"
</script>

<header class="border-b border-gray-100">
	<div class="container px-0 flex justify-between h-20">
		<a class="flex items-center h-full px-4" href="/">
			SkitBase
		</a>
		<div class="flex">
			<a class="flex items-center h-full px-4" href="/">
				Login
			</a>
			<a class="flex items-center h-full px-4" href="/">
				Register
			</a>
		</div>
	</div>
</header>

<main class="container pt-8 pb-20">
	<slot />
</main>
