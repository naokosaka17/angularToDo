angular
    .module('toDo.create') // No array, as we are "extending" the module
    .controller('CreateCtrl', CreateCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function CreateCtrl($scope, $http, library) {
    var vm = this;
}
