
function _createModal(options){
    const modal = document.createElement("div")
    modal.classList.add("amodal")
    modal.insertAdjacentHTML("afterbegin",`
    <div class="modal-overlay">
        <div class="modal-window" id="modal-window">
            <div class="modal-header">
                <span class="modal-title" id="header">Header</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p id="p_body">Lorem ipsuqwm dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}

// title: string  ++
// closable: boolean 
// content: string  ++
// width: string('400px')
// destroy(): void
// Вікно повинне закриватись
// --------------------
// setContent(html: string): void | PUBLIC
// onClose(): void
// onOpen(): void
// beforeClose(): boolean
// animate.css
$.modal = function (options){
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    return{
         open() {
            !closing && $modal.classList.add(`open`)
         },
         close() {
             closing = true
            $modal.classList.remove(`open`)
            $modal.classList.add('hide')
            setTimeout(()=>{
                $modal.classList.remove('hide')
                closing = false
            },ANIMATION_SPEED)
         },
         destroy() {},
         setOptions(title,content,width) {
            document.getElementById('header').textContent = `${title}`
            document.getElementById('p_body').textContent = `${content}`
            // document.getElementById('modal-window').style.width

         }

    }
}

