<script lang="ts">
	import Dots from 'virtual:icons/ri/more-line';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<div class="relative">
			<button
				class="group flex w-full items-center justify-between rounded-full p-3 outline-none transition duration-300 hover:bg-accent focus-visible:ring-2 focus-visible:ring-accent-foreground"
			>
				<div class="flex gap-3 truncate">
					<Avatar.Root>
						<Avatar.Image alt="Lorem Ipsum" />
						<Avatar.Fallback class="transition duration-300 group-hover:bg-white"
							>LI</Avatar.Fallback
						>
					</Avatar.Root>

					<div class="hidden truncate text-start leading-5 xl:block">
						<h1 class="text-sm font-bold text-gray-800 dark:text-white">Lorem ipsum</h1>
						<p class="text-sm text-gray-400">@LoremIpsum</p>
					</div>
				</div>
				<Dots class="hidden h-5 w-5 xl:block" />
			</button>
		</div>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content sameWidth>
		<DropdownMenu.Group>
			<DropdownMenu.Item class="text-m font-bold">Log out @LoremIpsum</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
