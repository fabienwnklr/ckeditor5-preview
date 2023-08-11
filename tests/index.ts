import { expect } from 'chai';
import { Preview as PreviewDll, icons } from '../src';
import Preview from '../src/preview';

import preview from './../theme/icons/preview.svg';

describe( 'CKEditor5 Preview DLL', () => {
	it( 'exports Preview', () => {
		expect( PreviewDll ).to.equal( Preview );
	} );

	describe( 'icons', () => {
		it( 'exports the "preview" icon', () => {
			expect( icons.preview ).to.equal( preview );
		} );
	} );
} );
