let lists = document.querySelectorAll(".items");
lists.forEach((item, index) => {
	item.innerHTML = "Updated item " + (index + 1);
});
