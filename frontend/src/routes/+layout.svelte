<script lang="ts">
	import '../app.pcss';

	import AppLayout from '$lib/components/layout/AppLayout.svelte';
	import SidebarLogo from '$lib/components/layout/SidebarLogo.svelte';
	import Nav from '$lib/components/layout/navigation/Nav.svelte';
	import SidebarProfile from '$lib/components/layout/SidebarProfile.svelte';

	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'

	import SignIn from 'clerk-sveltekit/client/SignIn.svelte'
</script>

<!-- This is probably not secure but auth is not the objective of this project right now -->
<SignedIn let:user>
	<AppLayout>
		<svelte:fragment slot="headerLeft">
			<SidebarLogo />
		</svelte:fragment>
	
		<svelte:fragment slot="sidebarLeft">
			<Nav />
		</svelte:fragment>
	
		<svelte:fragment slot="footerLeft">
			<SidebarProfile {user} />
		</svelte:fragment>
	
		<slot />
	</AppLayout>
</SignedIn>

<SignedOut>
	<div class="flex h-screen justify-center">
		<div class="content-center">
			<SignIn redirectUrl="/" />
		</div>
	</div>
</SignedOut>


