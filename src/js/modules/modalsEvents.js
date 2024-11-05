import { modal} from "../core/elementsNodeList.js";
import Form from "./Form.js";
import {translateFields} from "./base.js";
import {getElement} from "../core/index.js";



export default function modalsEvents(target) {
    if (!modal) return;
    switch (target) {
        case 'callback':
            renderCallbackModal();
            new Form('.callback-form').init();
            break;
    }


}


function renderCallbackModal() {
    getElement('.modal__content .wrapper').innerHTML = `
                
                <div class="md:flex text-center md:text-left items-center mb-32 pb-16 md:pb-24 border-white gap-x-24 border-b border-solid text-white">
                    <h3 class="max-w-[4.65rem] mb-12 md:mb-0">Почніть будувати свою мрію разом із Status House</h3>
                    <div class="text-m md:text-l">Залиште свої контактні дані і наші менеджери дадуть відповідь на всі Ваші
                        запитання
                    </div>
                </div>
                <form class="grid callback-form gap-x-16 gap-y-20 md:gap-y-32 md:grid-cols-2 lg:grid-cols-3">
                    <div class=" form-item text-white  ">
                        <label for="callback-name" class="text-s mb-4"> Ім’я</label>
                        <input type="text" name="name" id="callback-name"
                               class="text-l h-[.54rem] border border-solid bg-transparent p-12 flex items-center rounded-30"
                        >
                        <div class="form-item__message"></div>
                    </div>
                    <div class="form-item text-white ">
                        <label for="callback-phone" class="text-s mb-4">
                            Номер телефона</label>
                        <input type="text" name="phone" id="callback-phone"
                               class="text-l h-[.54rem] border border-solid bg-transparent p-12 flex items-center rounded-30"
                              >
                    </div>
                    <div class="form-item text-white">
                        <label for="callback-mail" class="text-s mb-4"> E-mail</label>
                        <input type="text" name="email" id="callback-mail"
                               class="text-l h-[.54rem] border border-solid bg-transparent p-12 flex items-center rounded-30"
                          >
                    </div>
                    <button class="text-s lg:col-start-3  flex items-center justify-center uppercase rounded-30 h-[.54rem] px-16 py-12 text-white font-medium bg-black border-black border border-solid lg:hover:bg-transparent transition-colors lg:hover:text-black mt-auto"
                           >
                        <span>залишити заявку</span>
                    </button>
                </form>
         
    `
}

function renderAnswerModal(answer, type) {
    let {formErrorText, formErrorTitle} = translateFields;
    let title = '';
    let text = '';
    switch (type) {
        case 'callback':
            title = translateFields.formSuccessCallbackTitle['ua'];
            text = translateFields.formSuccessCallbackText['ua'];
            break;
        case 'review':
            title = translateFields.formSuccessReviewTitle['ua'];
            text = translateFields.formSuccessReviewText['ua'];
            break;
    }
    getElement('[data-modal="dynamic"] .modal__content').innerHTML = `
          <div class="p-24 md:p-32  bg-white rounded-24 modal-callback">
                <div class="flex items-center mb-8">
                
                    <svg class="w-32 h-32 mr-8">
                        <use xlink:href="${answer ? '#valid-form' : '#invalid-form'}"></use>
                    </svg>
                    <h3 class=" font-semibold">${answer ? title : formErrorTitle['ua']}</h3>
                </div>

                <div class="text-s mb-[.4rem] w-full md:w-[80%]">
                ${answer ? text : formErrorText['ua']}
                
                </div>
                <a href="/" data-modal-close class=" rounded-8  bg-black py-6 px-16 flex items-center
                                hover:bg-accent group  relative w-full
                                border border-solid border-br-color h-48 transition-colors
                                flex-shrink-0 justify-center text-center
                        ">
                    <span class="font-medium text-m text-white">На головну</span>
                </a>
            </div>
    `
}

export {renderAnswerModal}



