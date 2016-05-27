/**
 * Created by martynasjankauskas on 10/04/16.
 */
import app from '../app';

function controller() {
  this.brand = 'C';
}

const template = `

<nav class="navbar navbar-default">
  <div class="container-fluid">
  
    <div class="navbar-header">
      <a class="navbar-brand" ng-link="['HomePage']" >{{$ctrl.brand}}</a>
      </a>
    </div>
    
    <ul class="nav navbar-nav">
      <li><a ng-link="['Cocktails']">Cocktails</a></li>
      <!--<li><a ng-link="['MenuMaker']">Menu Maker</a></li>-->
    </ul>
    
  </div>
</nav>

`;

const topBar = app.component('topBar', {
  template,
  controller
});

export default topBar;
