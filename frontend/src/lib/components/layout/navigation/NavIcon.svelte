<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	export let activeIcon: ComponentType<SvelteComponent<SvelteHTMLElements['svg']>>;
	export let regularIcon: ComponentType<SvelteComponent<SvelteHTMLElements['svg']>>;

	export let isActive: boolean;

	const iconSize: string = 'h-7 w-7';
</script>

{#if isActive}
	<svelte:component this={activeIcon} class={iconSize} />
{:else}
	<svelte:component this={regularIcon} class={iconSize} />
{/if}
