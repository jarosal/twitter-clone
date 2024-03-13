<script lang="ts">
	import Dots from 'virtual:icons/ri/more-line';
	import * as Avatar from "$lib/components/ui/avatar";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

	let openDropdown = false;
</script>

<!--
	- extract props
	- context menu
	- click animation
-->


<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<div class="relative">
			<button
				class="group hover:bg-accent flex w-full items-center justify-between rounded-full p-3 transition duration-300 focus-visible:ring-2 focus-visible:ring-accent-foreground outline-none"
			>
				<div class="flex gap-3 truncate">
					<Avatar.Root>
						<Avatar.Image alt="Lorem Ipsum"/>
						<Avatar.Fallback class="group-hover:bg-white transition duration-300">LI</Avatar.Fallback>
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

