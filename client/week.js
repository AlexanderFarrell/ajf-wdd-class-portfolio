import sanitizeHtml from 'sanitize-html';
import {ReplaceMainContent} from "./main_content";

export function DisplayWeek(item){
	fetch(item.url)
		.then(response => response.text())
		.then(data => {
			let element = document.createElement('div');
			element.innerHTML = sanitizeHtml(data);
			ReplaceMainContent(element);
		})
		.catch(err => {
			console.error(err);
			ReplaceMainContent("An error occurred getting the week data");
		})
}