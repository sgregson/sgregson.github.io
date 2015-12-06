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

  $("h2[id]").click(function() {
    window.location.hash = "#"+$(this).attr("id");
  });

  //SVG
  var s = Snap('#logo');
  Snap.load("/img/svgomg.svg", function(f) {
    var sChar = f.select('#sChar'),
        gChar = f.select('#gChar'),
        sMatrix = new Snap.Matrix(),
        gMatrix = new Snap.Matrix();

    var duration = 1750,
    animations = {
      split: function() {
        sMatrix.translate(0,-17);
        sChar.stop().animate({transform: sMatrix}, duration * .8, mina.easeinout);

        gMatrix.translate(0,17);
        gChar.stop().animate({transform: gMatrix}, duration * .8, mina.easeinout);
      },
      rotate: function() {
        sMatrix.rotate(-90,36,53);
        sMatrix.rotate(90,36,36);
        sMatrix.translate(6,0);
        sChar.stop().animate({transform: sMatrix}, duration * .8, mina.easeinout);

        gMatrix.rotate(-90,36,19);
        gMatrix.rotate(90,36,36);
        gMatrix.translate(-6,0);
        gChar.stop().animate({transform: gMatrix}, duration * .8, mina.easeinout);
      },
      merge: function() {
        sMatrix.translate(11,0);
        sChar.stop().animate({transform: sMatrix}, duration * .8, mina.easeinout);
        gMatrix.translate(-11,0);
        gChar.stop().animate({transform: gMatrix}, duration * .8, mina.easeinout);
      },
      series: function() {
        setTimeout(animations.split, 0);
        setTimeout(animations.rotate, duration);
        setTimeout(animations.merge, duration * 2);
      }
    }

    animations.series();
    setInterval(animations.series, duration * 3);

    s.append(f);
  });
});
