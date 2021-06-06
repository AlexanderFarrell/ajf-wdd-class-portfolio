import {DisplayWeek} from "./week";

export function GetLinks(){
	let element = document.getElementById("TableOfContents");
	element.innerHTML = "Loading Weeks...";
	fetch('/weeks')
		.then(response => response.json())
		.then(data => {
			element.innerHTML = '';
			element.appendChild(BuildWeeks(data));
		})
		.catch(err => {
			console.error(err);
			element.innerHTML = "Error getting weeks!";
		})
}

function BuildWeeks(weeks, onPress){
	return BuildMany(weeks, "WeekContainer", (week) => {
		let element = document.createElement('div');
		element.innerHTML = week.label;
		element.classList.add('WeekLink');
		element.classList.add('Button');
		element.addEventListener('mouseup', () => {
			DisplayWeek(week);
		})
		return element;
	})
}

function RenderWeeks(weeks){
	return RenderMany(weeks, "WeekContainer", (week) => {
		return `<li><a href="${week.url}">${week.label}</a></li>`
	})
}

//Engine Code
export function RenderMany(items, classAttribute, singleRender){
	let html = `<div class="${classAttribute}">`;
	items.forEach(item => {html += singleRender(item)})
	html += '</div>';
	return html;
}

export function BuildMany(items, classAttribute, singleBuild){
	let element = document.createElement('div');
	element.classList.add(classAttribute);
	items.forEach(item => {element.appendChild(singleBuild(item)) })
	return element;
}