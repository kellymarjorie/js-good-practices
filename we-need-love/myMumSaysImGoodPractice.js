var MenuStyler = (function(){

  function _init(menuItems) {
      /**
       * Apply CSS styles to each menu item
       */
      for (let index = 0; index < menuItems.length; index++) {
        var cssStyle = menuItems[i].style;

        cssStyle.color = 'red';
        cssStyle.backgroundColor = 'blue';
        cssStyle.border = '2px solid #000';
        cssStyle.paddingLeft = '3px';
        cssStyle.marginTop = '3px';
        cssStyle.fontSize = '1.2em';
        cssStyle.fontStyle = 'italic';
      }
  };

  return {
    init: function() {
      var menuItems = document.getElementsByTagName('li');
      _init(menuItems);
    }
  }

})();