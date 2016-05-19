songs = Genius::Song.search(params[:Song])
artists = []
songs.each do |song|
  artists << song.primary_artist.name
end
p artists
