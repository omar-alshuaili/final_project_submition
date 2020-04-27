const selectElemnt = (element) => document.querySelector(element);

selectElemnt('.mobile-menu').addEventListener('click', () => {
    selectElemnt('header').classList.toggle('active');

});
