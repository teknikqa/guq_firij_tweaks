(function($) {
  $(document).ready(function() {
    var disqus_shortname = 'guqtest';
    var disqus_identifier = ''; //made of post id and guid
    var disqus_url = ''; //post permalink

    /*jQuery(".guq-disqus-wrapper").inlineDisqussions({
      identifier: 'disqussion',
      displayCount: true,
      highlighted: false,
      position: 'right',
      background: 'white',
      maxWidth: 9999
    });*/
    jQuery('.show-comments').on('click', function() {
      // Init DISQUS.
      var disqus_identifier = jQuery(this).data('disqus-identifier');
      var disqus_url = jQuery(this).attr('href');
      var disqus_title = jQuery(this).data('title');
      var id = jQuery(this).attr('id');

      if (window.DISQUS) {
        DISQUS.reset({
          reload: true,
          config: function() {
            this.page.identifier = disqus_identifier;
            this.page.url = disqus_url;
            this.page.title = disqus_title;
          }
        });
      } else {
        //append the Disqus embed script to HTML
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        jQuery('head').append(dsq);
      }

      // hide the button once comments load
      jQuery(this).fadeOut();

      jQuery('<div id="disqus_thread"></div>').insertAfter(jQuery('#' + id));
    });
  });
})(jQuery);
