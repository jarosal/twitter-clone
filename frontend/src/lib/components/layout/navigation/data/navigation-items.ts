import type NavigationItem from '../types/navigation-item';

import HomeRegularIcon from 'virtual:icons/ri/home-line';
import HomeActiveIcon from 'virtual:icons/ri/home-fill';

import ExploreRegularIcon from 'virtual:icons/ri/search-line';
import ExploreActiveIcon from 'virtual:icons/ri/search-fill';

import NotificationsRegularIcon from 'virtual:icons/ri/notification-2-line';
import NotificationsActiveIcon from 'virtual:icons/ri/notification-2-fill';

import ProfileRegularIcon from 'virtual:icons/ri/user-line';
import ProfileActiveIcon from 'virtual:icons/ri/user-fill';

import SettingsRegularIcon from 'virtual:icons/ri/settings-3-line';
import SettingsActiveIcon from 'virtual:icons/ri/settings-3-fill';

export const navigationItems: NavigationItem[] = [
	{
		text: 'Home',
		href: '/',
		activeIcon: HomeActiveIcon,
		regularIcon: HomeRegularIcon
	},
	{
		text: 'Explore',
		href: '/explore',
		activeIcon: ExploreActiveIcon,
		regularIcon: ExploreRegularIcon
	},
	{
		text: 'Notifications',
		href: '/notifications',
		activeIcon: NotificationsActiveIcon,
		regularIcon: NotificationsRegularIcon
	},
	{
		text: 'Profile',
		href: '/profile',
		activeIcon: ProfileActiveIcon,
		regularIcon: ProfileRegularIcon
	},
	{
		text: 'Settings',
		href: '/settings',
		activeIcon: SettingsActiveIcon,
		regularIcon: SettingsRegularIcon
	}
];
