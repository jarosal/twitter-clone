<script lang="ts">
	import NavItem from '$lib/components/layout/navigation/NavItem.svelte';
	import NavPost from './NavPost.svelte';
	import { navigationItems } from './data/navigation-items';
</script>

<nav class="xs:justify-center items-center justify-around xl:block">
	{#each navigationItems as navItem}
		<NavItem {navItem} />
	{/each}

	<NavPost />
</nav>
