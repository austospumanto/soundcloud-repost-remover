(async () => {
function typeTextInsideInputElement(inputSelector, textToType) {
	var inputEvent = new Event('input');
	var changeEvent = new Event('change');
	var inputField = document.querySelector(inputSelector);
	inputField.value = textToType;
	inputField.dispatchEvent(inputEvent);
	inputField.dispatchEvent(changeEvent);
}

async function getAllMoreButtons() {
	await waitUntilPresent('li.soundList__item .sound__soundActions .sc-button-more')
	return [...document.querySelectorAll('li.soundList__item .sound__soundActions .sc-button-more')]
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitUntilGone(sel) {
	while (document.querySelector(sel)) {
		await sleep(100);
	}
}

async function waitUntilPresent(sel) {
	while (!document.querySelector(sel)) {
		await sleep(100);
	}
}

// The first

(await getAllMoreButtons())[0].click()
await waitUntilPresent('.sc-button-addtoset');
document.querySelector('.sc-button-addtoset').click()
await waitUntilPresent('div.addToPlaylistTabs ul li:nth-child(2) > a');
document.querySelector('div.addToPlaylistTabs ul li:nth-child(2) > a').click()
await waitUntilPresent('div.createPlaylist__title > div.textfield__inputWrapper > input.textfield__input');
typeTextInsideInputElement(
	'div.createPlaylist__title > div.textfield__inputWrapper > input.textfield__input', 
	"Release Radar"
)
document.querySelector('button.createPlaylist__saveButton').click()
document.querySelector('button.modal__closeButton').click();
await waitUntilGone('button.modal__closeButton');



// The rest

var allMoreButtons = await getAllMoreButtons();
var idx = 1;
while (idx < allMoreButtons.length) {
	allMoreButtons = await getAllMoreButtons();
	allMoreButtons[idx].click();
	idx = idx + 1;
	await waitUntilPresent('.sc-button-addtoset');
	document.querySelector('.sc-button-addtoset').click();
	await waitUntilPresent('li.addToPlaylistList__item:nth-child(1) button.addToPlaylistButton');
	document.querySelector('li.addToPlaylistList__item:nth-child(1) button.addToPlaylistButton').click()
	document.querySelector('button.modal__closeButton').click();
	await waitUntilGone('button.modal__closeButton');
}
}
)()
