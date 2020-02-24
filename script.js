class HOVER {
    constructor(element) {
        if(typeof element == 'string') {
            this.el = document.querySelector(element)
        } else if(element instanceof HTMLElement) {
            this.el = element;
        }
        this.el.addEventListener('mouseover', () => this.move());
    }
    move() {
        this.el.style.marginTop = this.random(0, window.innerHeight / 2) + 'px';
        this.el.style.marginRight = this.random(0, window.innerWidth / 2) + 'px';
    }
    random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
}
const hover = new HOVER('.header__move-no');
