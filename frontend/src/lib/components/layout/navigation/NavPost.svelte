<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<!-- TODO:
  - active/focus styling
  - modal

-->

<Dialog.Root>
	<Dialog.Trigger
		class="rounded-full bg-accent-blue text-lg font-bold text-white outline-none transition
  hover:brightness-90 active:brightness-75 xl:w-11/12"
	>
		<svg class="block h-6 w-6 xl:hidden" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
			<g>
				<path
					d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"
				/>
			</g>
		</svg>
		<p class="hidden xl:block">Post</p>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Post</Dialog.Title>
			<Dialog.Description>Post</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
