// Filter JS
$(document).ready(function() {
	$(".filter-item").click(function() {
		const value = $(this).attr("data-filter")
		if (value == "all") {
			$(".blog-box").show("1000");
		} else {
			$(".blog-box")
				.not("." + value)
				.hide("1000");
			$(".blog-box")
				.filter("." + value)
				.show("1000");
		}
	});
	// Add active to button
	$(".filter-item").click(function() {
		$(this).addClass("active-filter").siblings().removeClass("active-filter");
	});
});
//Header Background Change On Scroll
let header = document.querySelector("header");
window.addEventListener('scroll', () => {
	header.classList.toggle('shadow', window.scrollY > 0);
});