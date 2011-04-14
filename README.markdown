# deferLinks: a jQuery plugin

deferLinks is a simple plugin that will refer all your external links to
http://dereferer.org/ for anonymizing.

## Usage

First, load jQuery and the plugin:

    <script src="jquery.min.js" type="text/javascript"></script>
    <script src="jquery.deferlinks.js" type="text/javascript"></script>

Now, let's defer some links.

    $(document).ready(function(){
        $('a[href]').deferLinks();
    });

This will replace all external links on your page with something like this.

    http://www.dereferer.org/?http://www.google.com

## Author

[Greg Fitzgerlad](http://www.gregf.org)

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2011, Greg Fitzgerald
