myApp.service('BoardService', function($http) {
  console.log('BoardService.js');

  var sv = this;

  sv.checkPostings = function() {
    console.log('in checkListings');
    return $http.get('/posts').then(function(res) {
      console.log('back from server with:', res);
      sv.eachListing = res.data;
      return sv.eachListing;
    });
  }; // end checkPostings

  sv.postnewMessage = function(newComment) {
    console.log('in postMessages:', newComment);
    $http.post('/posts', newComment).then(function(res) {
      console.log('adding to server with:', res);
      sv.messageObject = res;
    });
  }; //end postMessage

}); // end of boardService
