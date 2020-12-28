try {
    const video = Array.from(document.querySelectorAll('.videoplayer video'));
    const playpause = Array.from(document.querySelectorAll('.videoplayer .playpause img'));


    const changeButtonState = function(type, video, playpause) {
        if (type == 'playpause') {
            if (video.paused || video.ended) {
                playpause.setAttribute('data-state', 'play');
            } else {
                playpause.setAttribute('data-state', 'pause');
            }
        }
    }

    video.forEach((el) => {
        el.addEventListener('play', function() {
            changeButtonState('playpause', video, el.closest('.videoplayer').querySelector('.playpause'));
            el.setAttribute('controls', true);

        }, false);

        el.addEventListener('pause', function() {
            changeButtonState('playpause', video, el.closest('.videoplayer').querySelector('.playpause'));

        }, false);

        el.addEventListener('ended', function() {
            el.closest('.videoplayer').querySelector('.playpause').classList.remove('hide');
            el.removeAttribute('controls');
            changeButtonState('playpause', video, el.closest('.videoplayer').querySelector('.playpause'));

        }, false);
    })

    playpause.forEach((el) => {
        el.addEventListener('click', function(e) {

            const currentVideo = e.target.closest('.videoplayer').querySelector('video');

            if (currentVideo.paused || currentVideo.ended) {
                currentVideo.play();
                el.closest('.playpause').classList.add('hide');
            } else {
                currentVideo.pause();
                el.closest('.playpause').classList.remove('hide');
            }
        });

    })


} catch (e) {}