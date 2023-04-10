

class Modal extends HTMLElement{

    connectedCallback() {
      this.innerHTML = ` <dialog id="favDialog">
        <div class="modalContent">
        <button class="btnClose btn-close shadow-none " 
                aria-label="Close" 
                type="reset" 
                onClick="CloseModal()">
        </button>

        <form method="dialog">
        ${this.getAttribute('children')}
          
            <button class="btn btn-outline-info confirmBtn" 
                    type="submit"
                    onClick="ModalConfirmClick(event)">
                    Confirm
            </button>
        
        </form>
        </div>
      </dialog>`;
  }
}


function ModalConfirmClick(event) {
    CallbackFromModals();
  const dialog = document.getElementById('favDialog');
  dialog.close(null);

}

function CloseModal() {
  const dialog = document.getElementById('favDialog');
  dialog.close(null);
}

customElements.define('modal-component', Modal);