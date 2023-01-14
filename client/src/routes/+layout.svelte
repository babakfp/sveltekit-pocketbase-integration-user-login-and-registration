<script>
	import { applyAction, enhance } from "$app/forms"
	import { currentUser, pb } from "$lib/pocketbase"
	import "../app.postcss"
</script>

<header class="border-b border-gray-100">
	<div class="container px-0 flex justify-between h-20">
		<a class="flex items-center h-full px-4" href="/">Home</a>
		<div class="flex">
			{#if $currentUser}
				<form method="POST" action="/logout" use:enhance={() => {
					return async ({ result }) => {
						pb.authStore.clear()
						await applyAction(result)
					}
				}}>
					<button class="flex items-center h-full px-4">Logout</button>
				</form>
			{:else}
				<a class="flex items-center h-full px-4" href="/login">Login</a>
				<a class="flex items-center h-full px-4" href="/register">Register</a>
			{/if}
		</div>
	</div>
</header>

<main class="container pt-8 pb-20">
	<slot />
</main>
