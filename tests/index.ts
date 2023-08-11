import { expect } from 'chai';
import { Preview as PreviewDll, icons } from '../src';
import Preview from '../src/preview';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 Preview DLL', () => {
	it( 'exports Preview', () => {
		expect( PreviewDll ).to.equal( Preview );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
