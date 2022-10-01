var date = new Date();
let giorno = date.getDay() + parseInt(date.getHours() >= 12 ? 1 : 0)
if (giorno > 5) giorno = 1;

cardsContainer.scrollTo({
    left: cardsContainer.children[giorno-1].offsetLeft - cardMargin,
    behavior: 'smooth'
});