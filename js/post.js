var $imgView = $('#image-view img'),
    $body = document.body;

$$('article img').forEach(function (element) {
    element.onclick = function () {
        $imgView.src = this.src;
        $('#image-view').removeClass('hidden');
        $body.style.overflow = 'hidden';
        $body.style.paddingRight = '17px';
        if ($imgView.naturalWidth < $imgView.naturalHeight) {
        	$imgView.style.maxWidth = '60vw';
        	$imgView.style.maxHeight = $imgView.naturalHeight + 'px';
        } else {
        	$imgView.style.maxHeight = '100vh';
        	$imgView.style.maxWidth = $imgView.naturalWidth + 'px';
        }
    }
})

$imgView.addEventListener('click', function () {
    $('#image-view').addClass('hidden');
    $body.style.overflow = 'auto';
    $body.style.paddingRight = '0';
})