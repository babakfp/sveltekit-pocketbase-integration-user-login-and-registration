<script>
	import { enhance, applyAction } from '$app/forms'
	import { pb } from '$lib/pocketbase'
</script>

<form class="grid gap-4" method="POST" use:enhance={() => {
	return async ({ result }) => {
		pb.authStore.loadFromCookie(document.cookie)
		await applyAction(result)
	}
}}>
	<input class="w-full h-14 px-4 bg-gray-100 rounded" type="email" name="email" id="email" placeholder="Email" />
	<input class="w-full h-14 px-4 bg-gray-100 rounded" type="password" name="password" id="password" placeholder="Password" />
	<button class="h-16 bg-gray-900 rounded text-white">Login</button>
</form>
