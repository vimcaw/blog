var $imgView = $('#image-view img'),
    $body = document.body;

$$('article img').forEach(function (element) {
    element.onclick = function () {
        $imgView.src = this.src;
        $('#image-view').removeClass('hidden');
        $body.style.overflow = 'hidden';
        $body.style.paddingRight = '17px';
        if ($imgView.naturalWidth < $imgView.naturalHeight) {
        	$imgView.style.maxWidth = '90vw';
        	$imgView.style.maxHeight = $imgView.naturalHeight + 'px';
            if ($imgView.offsetHeight <= window.innerHeight) {
                $imgView.id = 'inner';
            } else {
                $imgView.id = 'scroll-y';
            }
        } else {
        	$imgView.style.maxHeight = '90vh';
        	$imgView.style.maxWidth = $imgView.naturalWidth + 'px';
            if ($imgView.offsetWidth <= window.innerWidth) {
                $imgView.id = 'inner';
            } else {
                $imgView.id = 'scroll-x';
            }
        }
    }
})

$('#image-view').addEventListener('click', function () {
    this.addClass('hidden');
    this.scrollLeft = 0;
    this.scrollTop = 0;
    $imgView.scr = '';
    $body.style.overflow = 'auto';
    $body.style.paddingRight = '0';
})