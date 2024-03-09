<script lang="ts">
	import NavItem from '$lib/components/layout/navigation/NavItem.svelte';
	import { navigationItems } from './data/navigation-items';
</script>

<nav class="xs:flex-col xs:justify-center flex items-center justify-around xl:block">
	{#each navigationItems as navItem}
		<NavItem {navItem} />
	{/each}
</nav>
