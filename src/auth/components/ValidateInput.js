
import { addClass, removeClass, hasClass } from "./functions";
import { INVALID_INPUT_CLASS } from "./constants";


export default class ValidateInput {

    constructor(element, errorContainer) {
        this.element = element;
        this.errorContainer = errorContainer;
        this.isValid = true;
        let self = this;
        this.element.addEventListener('input', (e) => {
            if(e.target.value !== '') {
                self.hideFeedback();
                if(hasClass(self.element, INVALID_INPUT_CLASS))
                    removeClass(self.element, INVALID_INPUT_CLASS);
            }
        });
    }

    showFeedback() {
        this.errorContainer.style.visibility = "visible";
        this.errorContainer.style.opacity = "1";
    }

    hideFeedback() {
        this.errorContainer.style.visibility = "hidden";
        this.errorContainer.style.opacity = "0";
    }

    validate() {
        let hasCls = hasClass(this.element, INVALID_INPUT_CLASS);
        if(this.element.value === '') {
            this.showFeedback();
            if(!hasCls)
                addClass(this.element, INVALID_INPUT_CLASS);
            this.isValid = false;
        } else {
            this.hideFeedback();
            if(hasCls)
                removeClass(this.element, INVALID_INPUT_CLASS);
            this.isValid = true;
        }
        return this.isValid;
    }

    isValid() {
        return this.isValid;
    }

    hide() {
        this.hideFeedback();
        if(hasClass(this.element, INVALID_INPUT_CLASS))
            removeClass(this.element, INVALID_INPUT_CLASS);
    }
}
