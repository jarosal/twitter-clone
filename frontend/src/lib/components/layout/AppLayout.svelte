<!-- App container -->
<div id="app-layout" class="flex w-full justify-center gap-0 lg:gap-4">
	<!-- left sidebar -->
	<header
		id="left-sidebar"
		class="xs:w-20 flex md:w-24 lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end"
	>
		<div
			class="border-bg-accent xs:top-0 xs:h-full xs:w-auto xs:border-0 xs:bg-transparent xs:pt-2 bottom-0 z-10 flex w-full flex-col justify-between border-t px-2 py-3 md:px-4 xl:w-72"
		>
			<div class="xs:items-center flex flex-col justify-center gap-2 xl:items-stretch">
				{#if $$slots.headerLeft}
					<slot name="headerLeft" />
				{/if}

				{#if $$slots.sidebarLeft}
					<slot name="sidebarLeft" />
				{/if}
			</div>

			{#if $$slots.footerLeft}
				<slot name="footerLeft" />
			{/if}
		</div>
	</header>

	<!-- Page content -->
	<div id="content" class="h-screen w-full bg-slate-400 sm:w-600">
		{#if $$slots.contentHeader}
			<slot name="contentHeader" />
		{/if}

		<main id="page-content"><slot /></main>

		{#if $$slots.contentFooter}
			<slot name="contentFooter" />
		{/if}
	</div>

	<!-- Right sidebar -->
	<div id="right-sidebar" class="hidden h-screen w-290 md:block lg:w-350">
		<div class="fixed flex h-screen w-290 flex-col overflow-y-auto pl-8 lg:w-350">
			{#if $$slots.headerRight}
				<slot name="headerRight" />
			{/if}

			{#if $$slots.sidebarRight}
				<slot name="sidebarRight" />
			{/if}

			{#if $$slots.footerRight}
				<slot name="footerRight" />
			{/if}
		</div>
	</div>
</div>
