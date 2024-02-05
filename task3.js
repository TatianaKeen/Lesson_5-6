document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('fullscreenElement');
    const toggleFullscreen = document.getElementById('toggleFullscreen');

    toggleFullscreen.addEventListener('click', function() {
         if (document.fullscreenElement) {
             document.exitFullscreen()
             element.style.background = '#dfedaf'

         } else {
            element.requestFullscreen()
            element.style.background = '#afe4ed'
         }
    });
});
