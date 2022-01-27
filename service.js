import TrackPlayer, {TrackPlayerEvents} from 'react-native-track-player';

module.exports = async function () {

    TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PLAY, () =>
        TrackPlayer.play(),
    );
    TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PAUSE, () =>
        TrackPlayer.pause(),
    );
    TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_NEXT, () =>
        TrackPlayer.skipToNext(),
    );
    TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_STOP, () =>
        TrackPlayer.skipToPrevious(),
    );
    TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_STOP, () =>
        TrackPlayer.destroy(),
    );
    TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_SEEK, ({position}) =>
        TrackPlayer.seekTo(position),
    );
};
