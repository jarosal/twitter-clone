<script lang="ts">
	import { page } from '$app/stores';
	import NavIcon from './NavIcon.svelte';
	import type NavigationItem from './types/navigation-item';

	export let navItem: NavigationItem;

	let isActive: boolean;
	$: isActive = $page.url.pathname === navItem.href;
</script>

<!--
	- styling
	- notification badge
-->

<a href={navItem.href} class="group flex py-1 outline-none">
	<div
		class="flex items-center justify-center gap-4 self-start rounded-full p-3 transition duration-300 group-hover:bg-accent group-focus-visible:ring-2 group-focus-visible:ring-accent-foreground xl:pr-5"
	>
		<NavIcon {isActive} activeIcon={navItem.activeIcon} regularIcon={navItem.regularIcon} />

		<span class="hidden text-xl xl:block" class:active={isActive}>
			{navItem.text}
		</span>
	</div>
</a>

<style lang="postcss">
	.active {
		@apply font-bold;
	}
</style>
