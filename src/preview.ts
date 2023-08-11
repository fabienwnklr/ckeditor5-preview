import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import type { PreviewOptions } from '../typings/ckeditor5-preview';
import previewIcon from '../theme/icons/ckeditor.svg';

export default class Preview extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'Preview' as const;
	}

	public init(): void {
		const editor = this.editor;
		const t = editor.t;
		const previewOptions = editor.config.get( 'preview' ) as PreviewOptions;
		editor.ui.componentFactory.add( 'preview', locale => {
			// The button will be an instance of ButtonView.
			const button = new ButtonView( locale );

			button.set( {
				label: t( 'Preview' ),
				tooltip: true,
				icon: previewIcon
			} );

			// Execute a callback function when the button is clicked
			button.on( 'execute', () => {
				const content = '';
				const myWindow = window.open( '', '_blank' );

				if ( myWindow ) {
					myWindow.document.write(
						'<html><head><title>Preview</title>'
					);
					myWindow.document.write(
						'<base href="' +
							location.origin +
							location.pathname +
							'">'
					);

					if ( previewOptions?.injectCkeCSS ) {
						const ckeCss = document.querySelector(
							'style[data-cke=true]'
						);
						myWindow.document.write(
							'<style>' + ckeCss?.innerHTML + '</style>'
						);
					}
					if ( previewOptions?.contentCSS ) {
						myWindow.document.write(
							'<style>' + previewOptions.contentCSS + '</style>'
						);
					}
					if ( previewOptions?.srcCSS ) {
						myWindow.document.write(
							'<link href=' + previewOptions.srcCSS + '></style>'
						);
					}
					myWindow.document.write( '</head><body>' );
					myWindow.document.write( content );
					myWindow.document.write( '</body></html>' );

					myWindow.document.close();
					myWindow.moveTo( 0, 0 );
					myWindow.resizeTo( screen.width, screen.height );
				}
			} );

			return button;
		} );
	}
}
