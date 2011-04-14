/**
 * jQuery's deferLinks Plugin
 *
 * Defers all links that do not match the servers hostname to http://www.dereferer.org/
 *
 * @author Greg Fitzgerald 
 * @version 0.1
 * @copyright Copyright(c) 2011. Greg Fitzgerald
 * @license http://www.opensource.org/licenses/mit-license The MIT License
 * @date 2011-04-14
 * @lastmodified 20011-04-14 11:54
 *
 * @example $('a[href]').deferLinks().attr('target', '_blank');
*/

(function( $ ){
  $.fn.deferLinks = function() {
    
    return this.each(function(){
      
      // Find links that do not match our hostname
      if (this.hostname && this.hostname !== location.hostname) {
        $(this).attr('href', 'http://www.dereferer.org/?'+encodeURI(this.href)); // Redirect them to http://www.dereferer.org/?
      }
    
    });
  };
})( jQuery );
