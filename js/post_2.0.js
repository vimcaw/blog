var $imgView = $('#image-view img'),
    $body = document.body,
    sidebar = $('.sidebar'),
    shade = $('.shade'),
    nav = $('#nav');

// $$('h1 a, h2 a, h3 a, h4 a, h5 a').forEach(function (a) {
//     a.className = "fa fa-link";
// });

function switchSidebar() {
    if (sidebar.style.display === 'block') {
        sidebar.style.display = shade.style.display = 'none';
        nav.className = 'fa fa-bars';
    } else {
        sidebar.style.display = shade.style.display = 'block';

        nav.className = 'fa fa-times';
    }
}

tocbot.init({
    // Where to render the table of contents.
    tocSelector: '.sidebar',
    // Where to grab the headings to build the table of contents.
    contentSelector: 'article',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h1, h2, h3',
    onClick: function () {
        if (shade.style.display === 'block') {
            switchSidebar();
        }
    }
});

window.addEventListener('scroll', function () {
    const backRate = 0.2;
    if (document.documentElement.scrollTop / document.body.scrollHeight >= backRate) {
        $('#back-to-top').style.display = 'block';
    } else {
        $('#back-to-top').style.display = 'none';
    }
});

shade.addEventListener('click', function (ev) {
    switchSidebar();
});

nav.addEventListener('click', function () {
    switchSidebar();
});


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
});

$('#image-view').addEventListener('click', function () {
    this.addClass('hidden');
    this.scrollLeft = 0;
    this.scrollTop = 0;
    $imgView.scr = '';
    $body.style.overflow = 'auto';
    $body.style.paddingRight = '0';
});