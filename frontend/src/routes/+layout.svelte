<script lang="ts">
	import '../app.pcss';

	import AppLayout from '$lib/components/layout/AppLayout.svelte';
	import SidebarLogo from '$lib/components/layout/SidebarLogo.svelte';
	import Nav from '$lib/components/layout/navigation/Nav.svelte';
	import SidebarProfile from '$lib/components/layout/SidebarProfile.svelte';
</script>

<AppLayout>
	<svelte:fragment slot="headerLeft">
		<SidebarLogo />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<Nav />
	</svelte:fragment>

	<svelte:fragment slot="footerLeft">
		<SidebarProfile />
	</svelte:fragment>

	<slot />
</AppLayout>
