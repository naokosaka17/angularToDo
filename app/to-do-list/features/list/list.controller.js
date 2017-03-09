angular
    .module('toDo.list') // No array, as we are "extending" the module
    .controller('ListCtrl', ListCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function ListCtrl($http) {
  var vm = this;
  vm.data = {
    text: '',
    date: ''
  };

     $http.get('/api/todos').then(function(data){
       console.log(data);
     });
}
