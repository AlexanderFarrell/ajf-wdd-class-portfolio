export let MainContent = document.getElementById('MainContent');

export function ReplaceMainContent(element){
	MainContent.innerHTML = '';
	MainContent.appendChild(element);
}