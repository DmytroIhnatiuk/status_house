import {getElement} from "../core/index.js";

class Modal {
    constructor(element) {
        this.modal = element;
        this.modalBody = this.modal.querySelector(".modal__body");
        this.scrollPosition = scrollY || document.documentElement.scrollTop;
        this.static = this.modal.dataset.static;
    }

    openModal() {
        this.scrollPosition = scrollY || document.documentElement.scrollTop;
        this.modal.classList.add("show");
        this.modal.classList.remove("hide");
        document.body.classList.add("overlay");
        this.attachModalEvents(this.modal);
    }

    attachModalEvents() {
        if (this.modal.querySelector(".modal__close")) {
            this.modal
                .querySelectorAll(".modal__close").forEach(closeBtn => {
                closeBtn.addEventListener("click", () => {
                    this.closeModal(this.modal);
                });
            })

        }
        this.attachModalCloseBtns();


        document.addEventListener("keydown", (e) => {
            this.handleEscape(e);
        });
        this.disableScrollAndSwipes();
        this.modal.addEventListener("click", (e) => {
            this.handleOutside(e);
        });
    }

    attachModalCloseBtns() {
        if (this.modal.querySelector("[data-modal-close]")) {
            this.modal
                .querySelectorAll("[data-modal-close]").forEach(closeBtn => {
                closeBtn.addEventListener("click", () => {
                    this.closeModal(this.modal);
                });
            })

        }
    }

    closeModal() {
        this.enableScrollAndSwipes()
        setTimeout(() => {
            this.modal.classList = "modal";
            this.modal.classList.add("hide");
            this.modal.classList.remove("show");
            // getElement('.modal__content', this.modal).classList = 'modal__content w-100';
            document.body.classList.remove("overlay");
        }, 0);

        this.detachModalEvents(this.modal);
        if (!this.static) {
            setTimeout(() => {
                getElement('.modal__content .wrapper', this.modalBody).innerHTML = ``;
            }, 250);
        }

    }

    detachModalEvents() {

        if (this.modal.querySelector(".modal__close")) {
            this.modal
                .querySelectorAll(".modal__close").forEach(closeBtn => {
                closeBtn.removeEventListener("click", () => {
                    this.closeModal(this.modal);
                });
            });
        }
        document.removeEventListener("keydown", (e) => {
            this.handleEscape(e);
        });

        this.modal.removeEventListener("click", (e) => {
            this.handleOutside(e);
        });
    }

    handleEscape(event) {
        if (event.key === "Escape") {
            this.closeModal(this.modal);
        }
    }

    handleOutside(event) {
        const isClickOutside = !!event.target.closest(".modal__body");
        if (!isClickOutside) {
            this.closeModal(this.modal);
        }
    }

    disableScrollAndSwipes() {
        // document.body.style.position = 'fixed';
        document.body.style.overflow = 'hidden';
        // document.body.style.top = `-${this.scrollPosition}px`;
    }

    enableScrollAndSwipes() {
        // document.body.style.position = 'relative';
        // document.body.style.top = '0';\
        document.body.style.overflow = 'auto';
        // window.scrollTo(0, this.scrollPosition);

    }


}


export default Modal;