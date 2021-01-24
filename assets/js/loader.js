window.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.wrapper');
    const loader = document.querySelector('#loader');
    setTimeout(() => {
        loader.style.display = 'none';
        wrapper.style.display = 'block';
    }, 0);
});
