<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;

	$: ({ Test } = data)
</script>

<div
	class="dark:bg-dim-900 sticky top-0 flex items-center justify-between border-b border-l border-r border-gray-200 bg-white px-4 py-3 dark:border-gray-700"
>
	<h2 class="font-sm font-bold text-gray-800 dark:text-gray-100">For you</h2>
</div>

{$Test.data?.helloWorld.helloWorld}
