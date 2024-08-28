document.getElementById('play-song').addEventListener('click', function () {
    var iframe = document.getElementById('soundcloud-player');
    iframe.style.display = 'none'; // Ensure the iframe is hidden
    iframe.src += "&auto_play=true"; // Start the music
    iframe.play();
});

// Show the modal on page load
$(document).ready(function() {
    $('#audioPermissionModal').modal('show');
});

// Handle the audio permission button click
document.getElementById('allow-audio').addEventListener('click', function() {
    var iframe = document.getElementById('soundcloud-player');
    // Play the audio
    iframe.contentWindow.postMessage('{"method":"play"}', '*');
    // Hide the modal
    $('#audioPermissionModal').modal('hide');
    // Show the main content
    document.getElementById('main-content').style.display = 'flex';
});
