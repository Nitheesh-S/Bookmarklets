// copy this 👇 without // and add it as a bookmark
// javascript: const overlay={css:".overlay-messager{width:100vw;height:100vh;background:#111;display:none;justify-content:center;position:fixed;z-index:99999999;top:0;left:0}.overlay-messager *{font-family:monospace}.overlay-messager.active{display:flex}.overlay-messager .main-container{max-width:800px;width:100%;display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-end;position:relative}.overlay-messager .msg-container{width:100%;height:calc(100% - 47px);background:0 0;color:#999;display:flex;flex-wrap:wrap;align-content:flex-end}.overlay-messager .msg-container span.msg{padding:10px 5px;display:flex;width:100%}.overlay-messager .msg-container span.msg.out{justify-content:flex-end}.overlay-messager textarea{width:100%;background:0 0;border:1px solid #999;padding:5px 10px;color:#999;outline:0;margin:10px 0}.overlay-messager.show-article .article-container{display:block}.overlay-messager .article-container{position:absolute;width:100%;height:100%;z-index:999999999999;background:#111;color:#eee;font-family:sans-serif;display:none}.overlay-messager .article-container *{font-family:sans-serif}.overlay-messager .article-container h4{font-size:16px;font-weight:700;margin:16px 0}.overlay-messager .article-container p{font-size:16px;margin:16px 0}.overlay-notification{position:fixed;z-index:999999991;top:10px;right:0;color:#fff;font-family:sans-serif;font-size:12;background:#090;padding:5px 10px}",html:'<div class="overlay-messager active">\n\t\t\t\t<div class="main-container">\n\t\t\t\t\t<div class="msg-container"></div><textarea type="text" autofocus></textarea>\n\t\t\t\t</div>\n\t\t\t</div>'},transparentImg="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E",whatsappForOffice={init(){this.createOverLay(),this.overlay=document.querySelector(".overlay-messager"),this.messageContainer=this.overlay.querySelector(".msg-container"),this.sendInput=this.overlay.querySelector("textarea"),this.whatsappSendInput=document.querySelector("footer .copyable-area .copyable-text"),this.prevMessage="",this.whatsappMessageContainer=document.querySelector('.copyable-area [data-tab="2"][aria-label]'),this.sendInput.addEventListener("keyup",e=>{13==e.keyCode&&0==e.shiftKey&&(this.sendMessage(e.target.value),this.sendInput.value="")}),document.body.addEventListener("keyup",e=>{console.log("e :",e),27==e.keyCode&&(this.overlay.classList.toggle("active"),this.updateAllMessages())},!1),this.startChecking()},startChecking(){document.body.removeEventListener("click",this.startChecking),this.messageCheckInterval=setInterval(this.checkForMessages.bind(this),500)},createOverLay(){const e=new CSSStyleSheet;e.replaceSync(overlay.css),document.adoptedStyleSheets=[e],document.body.insertAdjacentHTML("beforeend",overlay.html)},addMessage(e,t){let a=document.createElement("span");a.className=`msg ${t}`,a.innerHTML=e,this.messageContainer.appendChild(a)},updateAllMessages(){this.messageContainer.innerHTML="",document.querySelectorAll("#main .copyable-area .message-in, #main .copyable-area .message-out").forEach(e=>{if(e.classList.contains("message-in")||e.classList.contains("message-out")){let t=e.querySelector(".copyable-text");this.addMessage(t?t.innerText:e.innerText,e.classList.contains("message-in")?"in":"out")}})},showPrompt(e="Please Select a Chat To Begin"){let t=document.createElement("div");t.className="overlay-notification",t.innerHTML=e,this.body.appendChild(e),setTimeout(()=>{t.remove()},1e3)},removeTitle(){document.title="New Tab",document.querySelector('link[rel="shortcut icon"]').href=transparentImg},checkForMessages(){console.log("in checkForMessages");let e=this.whatsappMessageContainer.querySelectorAll(".message-in .copyable-text");if(!e.length)return this.showPrompt(),!1;let t=e[e.length-1];if(t.innerText===this.prevMessage)return!1;this.prevMessage=t.innerText,this.addMessage(t.innerText,"in"),this.removeTitle()},sendMessage(e){window.InputEvent=window.Event||window.InputEvent;let t=new InputEvent("input",{bubbles:!0});this.whatsappSendInput.textContent=e,this.whatsappSendInput.dispatchEvent(t);let a=document.querySelector('footer button span[data-testid="send"]');a&&a.click(),this.addMessage(e,"out"),this.removeTitle()}};whatsappForOffice.init();
const overlay = {
	css: `.overlay-messager{width:100vw;height:100vh;background:#111;display:none;justify-content:center;position:fixed;z-index:99999999;top:0;left:0}.overlay-messager *{font-family:monospace}.overlay-messager.active{display:flex}.overlay-messager .main-container{max-width:800px;width:100%;display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-end;position:relative}.overlay-messager .msg-container{width:100%;height:calc(100% - 47px);background:0 0;color:#999;display:flex;flex-wrap:wrap;align-content:flex-end}.overlay-messager .msg-container span.msg{padding:10px 5px;display:flex;width:100%}.overlay-messager .msg-container span.msg.out{justify-content:flex-end}.overlay-messager textarea{width:100%;background:0 0;border:1px solid #999;padding:5px 10px;color:#999;outline:0;margin:10px 0}.overlay-messager.show-article .article-container{display:block}.overlay-messager .article-container{position:absolute;width:100%;height:100%;z-index:999999999999;background:#111;color:#eee;font-family:sans-serif;display:none}.overlay-messager .article-container *{font-family:sans-serif}.overlay-messager .article-container h4{font-size:16px;font-weight:700;margin:16px 0}.overlay-messager .article-container p{font-size:16px;margin:16px 0}.overlay-notification{position:fixed;z-index:999999991;top:10px;right:0;color:#fff;font-family:sans-serif;font-size:12;background:#090;padding:5px 10px}`,
	html:  `<div class="overlay-messager active">
				<div class="main-container">
					<div class="msg-container"></div><textarea type="text" autofocus></textarea>
				</div>
			</div>`
}

const transparentImg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E`;

const whatsappForOffice = {
	init() {
		this.createOverLay();
		this.overlay = document.querySelector('.overlay-messager');
		this.messageContainer = this.overlay.querySelector('.msg-container');
		this.sendInput = this.overlay.querySelector('textarea');
		this.whatsappSendInput = document.querySelector('footer .copyable-area .copyable-text');
		this.prevMessage = '';

		this.whatsappMessageContainer = document.querySelector(`.copyable-area [data-tab="2"][aria-label]`);

		this.sendInput.addEventListener('keyup', (e) => {
			if (e.keyCode == 13 && e.shiftKey == false) {
				this.sendMessage(e.target.value);
				this.sendInput.value = '';
			}
		})
		document.body.addEventListener('keyup', (e) => {
			console.log('e :', e);
			if (e.keyCode == 27) {
				this.overlay.classList.toggle('active');
				this.updateAllMessages();
			}
		}, false);
		this.startChecking()
	},
	startChecking() {
		document.body.removeEventListener('click', this.startChecking);
		this.messageCheckInterval = setInterval(this.checkForMessages.bind(this), 500);
	},
	createOverLay() {
		// Insert Css
		const sheet = new CSSStyleSheet();
		sheet.replaceSync(overlay.css);
		document.adoptedStyleSheets = [sheet];
		
		// Insert HTML
		document.body.insertAdjacentHTML('beforeend', overlay.html);
	},
	addMessage(content, direction) {
		let message = document.createElement('span');
		message.className = `msg ${direction}`;
		message.innerHTML = content;
		this.messageContainer.appendChild(message)
	},
	updateAllMessages() {
		this.messageContainer.innerHTML = '';
		var allMessages = document.querySelectorAll('#main .copyable-area .message-in, #main .copyable-area .message-out');
		allMessages.forEach(el => {
			if (el.classList.contains('message-in') || el.classList.contains('message-out')){
				let textEl = el.querySelector('.copyable-text')
				this.addMessage(textEl ? textEl.innerText : el.innerText, el.classList.contains('message-in') ? 'in' : 'out');
			}
		})
	},
	showPrompt(message = 'Please Select a Chat To Begin') {
		let notification = document.createElement('div');
		notification.className = `overlay-notification`;
		notification.innerHTML = message;
		this.body.appendChild(message);
		setTimeout(() => {
			notification.remove();
		}, 1000);
	},
	removeTitle() {
		document.title = 'New Tab';
		document.querySelector('link[rel="shortcut icon"]').href = transparentImg;
	},
	checkForMessages() {
		console.log('in checkForMessages');
		let messageList = this.whatsappMessageContainer.querySelectorAll('.message-in .copyable-text');
		if(!messageList.length) {
			this.showPrompt();
			// clearInterval(this.messageCheckInterval);
			// document.addEventListener('click', this.startChecking)

			return false;
		}

		let message = messageList[messageList.length - 1];
		if(message.innerText === this.prevMessage) return false;

		this.prevMessage = message.innerText;
		this.addMessage(message.innerText, 'in');
		this.removeTitle();
	},
	sendMessage(message) {
		window.InputEvent = window.Event || window.InputEvent;
		let event = new InputEvent('input', { bubbles: true });

		this.whatsappSendInput.textContent = message;
		this.whatsappSendInput.dispatchEvent(event);
		let whatsappSendButton = document.querySelector('footer button span[data-testid="send"]');
		if(whatsappSendButton) whatsappSendButton.click();

		this.addMessage(message, 'out');
		this.removeTitle();
	}
}
whatsappForOffice.init()