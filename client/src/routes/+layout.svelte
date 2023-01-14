<script>
  import "../app.postcss"
  import { currentUser } from '$lib/pocketbase'
</script>

<header class="border-b border-gray-100">
	<div class="container px-0 flex justify-between h-20">
		<a class="flex items-center h-full px-4" href="/">
			SkitBase
		</a>
		<div class="flex">
			{#if $currentUser}
				<a class="flex items-center h-full px-4" href="/logout">
					Logout
				</a>
			{:else}
				<a class="flex items-center h-full px-4" href="/login">
					Login
				</a>
				<a class="flex items-center h-full px-4" href="/register">
					Register
				</a>
			{/if}
		</div>
	</div>
</header>

<main class="container pt-8 pb-20">
	<slot />
</main>
