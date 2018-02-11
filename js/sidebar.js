hNav.init({
    article: 'article',    //css selector of article element
    sidebar: '.sidebar'     //css selector of sidebar element(navigation will be rendered here
});

window.addEventListener('scroll', function () {
    const backRate = 0.2;
    if (document.documentElement.scrollTop / document.body.scrollHeight >= backRate) {
        $('#back-to-top').style.display = 'block';
    } else {
        $('#back-to-top').style.display = 'none';
    }
});

$('#nav').addEventListener('click', function () {
    $('.sidebar').style.display = ($('.sidebar').style.display === 'block') ? 'none' : 'block';
});