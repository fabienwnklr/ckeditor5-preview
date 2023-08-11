import type { Preview } from './index';

declare module '@ckeditor/ckeditor5-core' {
	interface PluginsMap {
		[ Preview.pluginName ]: Preview;
	}
}
