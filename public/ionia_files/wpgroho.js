/* global WPGroHo:true, Gravatar */
WPGroHo = jQuery.extend(
	{
		my_hash: '',
		data: {},
		renderers: {},
		syncProfileData: function( hash, id ) {
			if ( ! WPGroHo.data[ hash ] ) {
				WPGroHo.data[ hash ] = {};
				jQuery( 'div.grofile-hash-map-' + hash + ' span' ).each( function() {
					WPGroHo.data[ hash ][ this.className ] = jQuery( this ).text();
				} );
			}

			WPGroHo.appendProfileData( WPGroHo.data[ hash ], hash, id );
		},
		appendProfileData: function( data, hash, id ) {
			for ( var key in data ) {
				if ( jQuery.isFunction( WPGroHo.renderers[ key ] ) ) {
					return WPGroHo.renderers[ key ]( data[ key ], hash, id, key );
				}

				jQuery( '#' + id )
					.find( 'h4' )
					.after( jQuery( '<p class="grav-extra ' + key + '" />' ).html( data[ key ] ) );
			}
		},
	},
	WPGroHo
);

jQuery( document ).ready( function() {
	if ( 'undefined' === typeof Gravatar ) {
		return;
	}

	Gravatar.profile_cb = function( h, d ) {
		WPGroHo.syncProfileData( h, d );
	};

	Gravatar.my_hash = WPGroHo.my_hash;
	Gravatar.init( 'body', '#wpadminbar' );
} );

/*
     FILE ARCHIVED ON 02:17:55 May 28, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:16:15 May 12, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 15.604
  PetaboxLoader3.resolve: 88.802
  esindex: 0.026
  captures_list: 281.282
  exclusion.robots.policy: 0.289
  load_resource: 280.191
  CDXLines.iter: 37.243 (3)
  LoadShardBlock: 197.94 (3)
  PetaboxLoader3.datanode: 340.019 (4)
  exclusion.robots: 0.309
*/