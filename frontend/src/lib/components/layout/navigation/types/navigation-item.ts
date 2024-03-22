import type { ComponentType, SvelteComponent } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

export default interface NavigationItem {
	text: string;
	href: string;
	activeIcon: ComponentType<SvelteComponent<SvelteHTMLElements['svg']>>;
	regularIcon: ComponentType<SvelteComponent<SvelteHTMLElements['svg']>>;
}
