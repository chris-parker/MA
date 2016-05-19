introGame.controller('introGameController', function() {
  var self = this;
  var albumId = '10v912xgTZbjAtYfyKWJCS'
  var spotifyApi = new SpotifyWebApi();

  spotifyApi.getAlbum(albumId)
  .then(function(data) {
    console.log(data)
  });

});
