var myApp = angular.module('myApp', []);

myApp.controller('BoardController', function(BoardService) {
  console.log('messageBoard.js');
  var vm = this;

  vm.getPostings = function() {
    console.log('get postings!!!');
    BoardService.checkPostings().then(function() {
      console.log(BoardService.eachListing);
      vm.allMessages = BoardService.eachListing;
      console.log(vm.allMessages);
    });
  }; // get postings


  vm.postaMessage = function() {
    console.log('post messages!!!');
    var newComment = {
      name: vm.nameIn,
      message: vm.messageIn
    }; // end new posting
    console.log(newComment);
    BoardService.postnewMessage(newComment);
    vm.getPostings();

  }; // post message


}); // end of controller
