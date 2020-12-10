// Select element

const select = element => document.querySelector(element);

const messageElement = select(".message");
const notificationElement = select(".notification");
const notificationDropdown = select(".notification-dropdown");
const messageDropdown = select(".message-dropdown");
const closeDropdown = document.querySelectorAll(".close-dropdown");

const toggleDropdown = (parentElement, className) => {
	parentElement.classList.toggle(className);
};

messageElement.addEventListener("click", () => {
	toggleDropdown(messageDropdown, "show-dropdown");
});

notificationElement.addEventListener("click", () => {
	toggleDropdown(notificationDropdown, "show-dropdown");
});

[...closeDropdown].forEach(element => {
	element.addEventListener("click", e => {
		const dropdown = e.currentTarget.parentElement.parentElement;
		dropdown.classList.toggle("show-dropdown");
	});
});
