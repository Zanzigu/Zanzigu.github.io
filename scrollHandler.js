const cardsContainer = document.getElementsByClassName('cardsContainer')[0];

const cardWidth = cardsContainer.children[0].clientWidth + (cardsContainer.children[0].clientWidth / 100 * 6);
const cardMargin = parseInt(window.getComputedStyle(cardsContainer.children[0]).marginLeft);

// go to first card
cardsContainer.scrollTo({
    left: 0,
    behavior: 'smooth'
});

// Adjust horizontal scroll position

var timer = null;
var preventRecursion = false;
cardsContainer.addEventListener("scroll", function() {
        if (!preventRecursion) {
            if (timer !== null)
                clearTimeout(timer);

            timer = setTimeout(function() {
                
                // Adjust scroll position
                for (let index = cardsContainer.children.length-1; index >= 0; index--) {
                    if ( cardsContainer.scrollLeft > cardWidth * index - cardWidth / 2 ) {
                        cardsContainer.scrollTo({
                            left: cardsContainer.children[index].offsetLeft - cardMargin,
                            behavior: 'smooth'
                        });
                        
                        break;
                    }
                }

                setTimeout(() => {
                    preventRecursion = false;
                }, 800);

            }, 800);
            preventRecursion = true;
        }
    }, 
false);