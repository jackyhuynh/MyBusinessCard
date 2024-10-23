// Remove 'is-loading' class after page load
window.addEventListener('load', () => {
    document.body.classList.remove('is-loading');
    if (navigator.userAgent.match(/(MSIE|rv:11\.0)/)) {
        document.body.classList.add('is-ie');
    }
});

// Event listener for opening links in a popup
document.querySelectorAll('.icons a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const url = link.getAttribute('href');
        window.open(
            url,
            '_blank',
            'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1'
        );
    });
});
