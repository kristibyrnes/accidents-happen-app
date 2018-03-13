(function () {
  var formComponent = {
    template: `
        <div id="mainForm" >
        <a class="xbut homeButton" href="#!/home"><i class="material-icons">home</i></a>
        <h1 class="formTitle">Accidents Happen</h1>
        <div class = "formButtons">
          <a class="mainButton fender-bender imgButton" href="#!/accident"><span class="imageBackgroundText">Car Accident</span></a>
          <a class="mainButton har imgButton" href="#!/hitandrun"><span class="imageBackgroundText">Hit and Run</span></a>
          <a class="mainButton theft imgButton" href="#!/theft"><span class="imageBackgroundText">Theft</span></a>
          <a class="mainButton witness imgButton" href="#!/witness"><span class="imageBackgroundText">Witness</span></a>
        </div>
        </div>

    `,
    controller: function () {
      var $ctrl = this;
    }

  };


  angular.module("app")
    .component("formComponent", formComponent)
}());
