(function () {
  $(function () {
    var collapseMyMenu, expandMyMenu, hideMenuTexts, showMenuTexts;
    expandMyMenu = function () {
      return $("aside.sidebar").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
    };
    collapseMyMenu = function () {
      return $("aside.sidebar").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
    };
    showMenuTexts = function () {
      return $("aside.sidebar ul a span.expanded-element").show();
    };
    hideMenuTexts = function () {
      return $("aside.sidebar ul a span.expanded-element").hide();
    };
    return $("#justify-icon").click(function (e) {
      if ($(this).parent("aside.sidebar").hasClass("sidebar-menu-collapsed")) {
        expandMyMenu();
        showMenuTexts();
        $(this).css({
          color: "#000"
        });
      } else if ($(this).parent("aside.sidebar").hasClass("sidebar-menu-expanded")) {
        collapseMyMenu();
        hideMenuTexts();
        $(this).css({
          color: "#FFF"
        });
      }
      return false;
    });
  });

}).call(this);

jQuery(document).ready(function($){
  $('table').DataTable({
    language: {
      // lengthMenu: "T'en veux _MENU_ par page",
      // info: "T'es bigleux ? c'est la page _PAGE_ sur _PAGES_",
      // search: "Cherche bouffon !",
      searchPlaceholder: "Search ..",
      paginate: {
        first:      "Premier",
        last:       "Précédent",
        next:       ">>",
        previous:   "<<"
      }
    }
  });
});