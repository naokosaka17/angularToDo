angular
    .module('toDo.list') // No array, as we are "extending" the module
    .controller('ListCtrl', ListCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function ListCtrl() {
     // vm stands for View Model - anything on "the vm" is exposed to the view

}
