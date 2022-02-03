document.addEventListener('DOMContentLoaded', function() {

    //button


    var elems = document.querySelector('.tap-target');
    var instances = M.TapTarget.init(elems, {});

    var instance = M.TapTarget.getInstance(elems);

    menu.onclick = () => {
        instance.open()
    }

    //img js
    var elems1 = document.querySelectorAll('.materialboxed');
    var instances1 = M.Materialbox.init(elems1, {
        inDuration: 1500,
        outDuration:1500
    });

    //slider element 2
    var elems2 = document.querySelectorAll('.slider');
    var instances2 = M.Slider.init(elems2, {
        interval:1000,
        indicators:false
    });

    //model element 3
    var elems3 = document.querySelectorAll('.modal');
    var instances3 = M.Modal.init(elems3, {
        opacity:0.3,
        preventScrolling:true,
        dismissible:false
    });

    var elems4 = document.querySelectorAll('.parallax');
    var instances4 = M.Parallax.init(elems4, {});



//pushpin element 5 scrollspy
    var elems5 = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems5, {});
//pushpin element 6 sidenav

    var elems6 = document.querySelectorAll('.sidenav');
    var instances6 = M.Sidenav.init(elems6, {
        edge:'right',
        draggable:false
    });
//pushpin element 7 tabs
var elems8 = document.querySelectorAll('.tabs');
    var instances7 = M.Tabs.init(elems8, {

    });
//pushpin element 8 tosts
document.getElementById('tost').onclick =() => {
    M.toast({html: 'Hellow world!'})
}

   
//pushpin element 9 
    var elems9 = document.querySelectorAll('.tooltipped');
    var instances9 = M.Tooltip.init(elems9, {
        margin:100,
        position:'top'
    });


//pushpin element 8 cheps

    var elems10 = document.querySelectorAll('.chips');
    var instances10 = M.Chips.init(elems10, {});


//pushpin element 10 picers



    var elems11 = document.querySelectorAll('.datepicker');
    var instances11 = M.Datepicker.init(elems11, {});

//pushpin element 11 picers
    var elems12 = document.querySelectorAll('.timepicker');
    var instances12 = M.Timepicker.init(elems12, {});

//pushpin element 11 select
    var elems13 = document.querySelectorAll('select');
    var instances13 = M.FormSelect.init(elems13, {});


  });
  //pushpin element 4
  $('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });





  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://www.youtube.com/watch?v=ekgUjyWe1Yc',
        "Barna": null,
        "Roman": null,


      },
    });
  });