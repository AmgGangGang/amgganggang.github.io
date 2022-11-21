layui.use("element", function () {
  var element = layui.element;

  element.on("nav(demo)", function (elem) {
    layer.msg(elem.text());
  });
});
layui.use("jquery", function () {
  var $ = layui.$;

  window.showMain = function (obj) {
    var arr = ["research", "teaching", "misc"];
    arr.splice(arr.indexOf(obj), 1);
    $("#about").hide();
    var id = "#" + obj;
    $(id).show();
    for (var a of arr) {
      var temp = "#" + a;
      $(temp).hide();
    }
  };

  window.openPdf = function (uul) {
    layui.use("layer", function () {
      var layer = layui.layer;
      layer.open({
        type: 2,
        title: "Curriculum Vitae",
        area: ["1000px", "750px"],
        fixed: false,
        maxmin: true,
        content: uul,
      });
    });
  };

  $(".nav-item").on("click", function () {
    $(".nav-item").children().css("color", "white");
    $(this).children().css("color", "#49AAD4");
  });

  $(".menu-icon").on("click", function () {
    $("#side-menu").css("transform", "translateX(0px)");
    $(".layui-icon-close").addClass("layui-anim-loop");
    setTimeout(() => {
      $(".layui-icon-close").removeClass("layui-anim-loop");
    }, 500);
  });

  $("body * :not(body div div)").on("click", function () {
    $("#side-menu").css("transform", "translateX(calc(-100% + 0px))");
  });
  if ($(document).scrollTop() >= 100) {
    $("#header").removeClass("header").addClass("scrollHeader");
  } else {
    $("#header").removeClass("scrollHeader").addClass("header");
  }
  $(window).scroll(function () {
    if ($(document).scrollTop() >= 100) {
      $("#header").removeClass("header").addClass("scrollHeader");
    } else {
      $("#header").removeClass("scrollHeader").addClass("header");
    }
  });
});
