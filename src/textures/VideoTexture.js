/**
 * @author mrdoob / http://mrdoob.com/
 */

import { Texture } from './Texture.js';

function VideoTexture( video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {

	Texture.call( this, video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

	this.generateMipmaps = false;

	var scope = this;

	// fires when the first frame of the media has finished loading (now there are valid texture data)

	video.addEventListener( 'loadeddata', function onLoaded() {

		scope.needsUpdate = true;

		video.removeEventListener( 'loadeddata', onLoaded, false );

	}, false );

}

VideoTexture.prototype = Object.assign( Object.create( Texture.prototype ), {

	constructor: VideoTexture,

	isVideoTexture: true,

	update: function () {

		var video = this.image;

		if ( video.readyState >= video.HAVE_CURRENT_DATA ) {

			this.needsUpdate = true;

		}

	}

} );


export { VideoTexture };
