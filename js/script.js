var tables = document.querySelectorAll('.post-content > table')
for (var i = 0; i < tables.length; i++) {
  tables[i].setAttribute('class','pure-table pure-table-bordered')
}

var imgs = document.querySelectorAll('.post-content img')
for (var i = 0; i < imgs.length; i++) {
  imgs[i].setAttribute('class','pure-img')
}

// Shorthand for $( document ).ready()
$(function() {
  var attachFastClick = Origami.fastclick;
  attachFastClick(document.body);

  var $sidebarTrigger = $('.js-sidebar-trigger'),
      $layout = $('#layout');

  $sidebarTrigger.on('click', function() {
    $layout.toggleClass('is-withSidebar');
  });
});
