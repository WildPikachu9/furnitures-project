//gallery

lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail, lgZoom, lgFullscreen],
    download: false,
    controls: true,
    thumbWidth: 100,
    counter: true,
})

//filter

function filterGallery(category) {
    const galleryItems = document.querySelectorAll('#lightgallery a');

    galleryItems.forEach(function(item) {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}