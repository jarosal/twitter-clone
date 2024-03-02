<!-- container -->
<div id="app-layout" class="container mx-auto h-screen">
	<div class="flex flex-row justify-center">
		<!-- left sidebar -->
		<div id="left-sidebar" class="w-68 xs:w-88 xl:w-275 h-screen">
			<div class="w-68 xs:w-88 xl:w-275 fixed flex h-screen flex-col overflow-y-auto pr-8">
				{#if $$slots.headerLeft}
					<slot name="headerLeft" />
				{/if}

				{#if $$slots.sidebarLeft}
					<slot name="sidebarLeft" />
				{/if}

				{#if $$slots.footerLeft}
					<slot name="footerLeft" />
				{/if}
			</div>
		</div>

		<!-- content -->
		<div id="content" class="sm:w-600 h-screen w-full bg-slate-400">
			{#if $$slots.contentHeader}
				<slot name="contentHeader" />
			{/if}

			<main id="page-content"><slot /></main>

			{#if $$slots.contentFooter}
				<slot name="contentFooter" />
			{/if}
		</div>

		<!-- right sidebar -->
		<div id="right-sidebar" class="w-290 lg:w-350 hidden h-screen md:block">
			<div class="w-290 lg:w-350 fixed flex h-screen flex-col overflow-y-auto pl-8">
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
</div>
