
/* - gallery.js - */
// http://www.nomadsinoman.com/portal_javascripts/gallery.js?original=1
jQuery(document).ready(function($){var galleryMaxsize=400;var galleryMouseOpacity=0.67;var galleryPhoto=$('#galleryphoto');var galleryPhotoPosition=galleryPhoto.position();var galleryPhotoWidth=galleryPhoto.width();var galleryPhotoHeight=galleryPhoto.height();
function galleryResizePhoto(photo){if(!photo)return;var dw=photo.width()-galleryMaxsize;var dh=photo.height()-galleryMaxsize;if(dw>0||dh>0){if(dw>dh){photo.width(galleryMaxsize)}else{photo.height(galleryMaxsize)}}}
function galleryCenterPhoto(photo){if(!photo)return;var photoWidth=photo.width();var photoHeight=photo.height();var photoTop=parseInt(galleryPhotoPosition.top+(galleryPhotoHeight-photoHeight)/2);var photoLeft=parseInt(galleryPhotoPosition.left+(galleryPhotoWidth-photoWidth)/2);photo.parent().parent().css({'position':'absolute','top':photoTop+'px','left':photoLeft+'px'})}
if($('div#gallerythumbs').length==0){return}
if($('ul.thumbs li').length==0){return}
$('div#gallerythumbs').css({'display':'block'});$('a.thumb').css({'float':'left','margin-right':'5px','height':'80px','border-bottom':'none'});$('.thumbs li, #gallerypageprev, #gallerypagenext').opacityrollover({mouseOutOpacity:galleryMouseOpacity,mouseOverOpacity:1.0,fadeSpeed:'fast',exemptionSelector:'.selected'});var gallery=$('#gallerythumbs').galleriffic({delay:3000,numThumbs:5,enableTopPager:false,enableBottomPager:false,imageContainerSel:'#galleryphoto',captionContainerSel:'#gallerycaption',renderSSControls:false,renderNavControls:false,enableHistory:false,enableKeyboardNavigation:false,autoStart:true,syncTransitions:true,defaultTransitionDuration:500,onSlideChange: function(prevIndex,nextIndex){if(this.isSlideshowRunning){$('#galleryplay').hide();$('#gallerypause').show()} else{$('#gallerypause').hide();$('#galleryplay').show()}},onTransitionOut:undefined,onTransitionIn: function(newSlide,newCaption,isSync){$('.image-caption').hide();newSlide.fadeTo(this.getDefaultTransitionDuration(isSync),1.0);if(newCaption)
newCaption.fadeTo(this.getDefaultTransitionDuration(isSync),1.0);galleryResizePhoto(newSlide.find('img'));galleryCenterPhoto(newSlide.find('img'))},onPageTransitionOut:undefined,onPageTransitionIn:undefined,onImageAdded:undefined,onImageRemoved:undefined});if(gallery.autoStart){$('#galleryplay').hide();$('#gallerypause').show()} else{$('#gallerypause').hide();$('#galleryplay').show()}
$('#gallerypageprev').click(function(e){gallery.previousPage();e.preventDefault()});$('#gallerypagenext').click(function(e){gallery.nextPage();e.preventDefault()});$('#galleryprev').click(function(e){gallery.previous();e.preventDefault()});$('#gallerynext').click(function(e){gallery.next();e.preventDefault()});$('#galleryplay').click(function(e){$('#galleryplay').hide();gallery.play();e.preventDefault();$('#gallerypause').show()});$('#gallerypause').click(function(e){$('#gallerypause').hide();gallery.pause();e.preventDefault();$('#galleryplay').show()});$('#galleryphoto').tooltip({position:'center right',effect:'fade',relative:true})});
