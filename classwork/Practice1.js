var myWinamp = (function () {
    var musicCollection = [];
    var currentTrack = null;
    var pauseTrack = false;
    var volume = null;

    function addTrack(artist, title) {
        var newTrack = {
            artist: artist,
            title: title
        };
        musicCollection.push(newTrack);
    };
    function filterByArtist(artist) {
        return musicCollection.filter(function (track) {
            return track.artist == artist;
        })
    };
    function findByMatch(str) {
        return musicCollection.filter(function (track) {
            return track.title.includes(str);
        })
    };
    function getIndexOf(artist, title) {
        return musicCollection.findIndex(function (track) {
            return track.artist == artist && track.title == title;
        })
    }
    function play(index) {
        currentTrack = musicCollection[index];
        pauseTrack = false;
        console.log('Track' + currentTrack.artist + '-' + currentTrack.title + 'now playing');
    }
    function playingNow() {
        if (currentTrack != null) {
            console.log('Track' + currentTrack.artist + '-' + currentTrack.title + 'now playing')
        }
        console.log('Трек не выбран');
    }
    function stop() {
        return currentTrack = null;
    }
    function pause() {
        pauseTrack = true;
        console.log('Track' + currentTrack.artist + '-' + currentTrack.title + 'on pause')
    }
    function volumeUp() {
        volume = volume + 1;
        console.log(volume);
    }
    function volumeDown() {
        volume = volume - 1;
        console.log(volume);
    }
    function status() {
        if (pauseTrack != true) {
            console.log('Current track is on pause');
        }
        else if (currentTrack != null) { console.log('Current status : play') }
        else console.log('No track');

        console.log('Current volume:' + volume);
    }
    return {}
})()

