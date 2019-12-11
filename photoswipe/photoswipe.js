var strVar="";
strVar += "<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">";
strVar += "    <div class=\"pswp__bg\"><\/div>";
strVar += "    <div class=\"pswp__scroll-wrap\">";
strVar += "        <div class=\"pswp__container\">";
strVar += "            <div class=\"pswp__item\"><\/div>";
strVar += "            <div class=\"pswp__item\"><\/div>";
strVar += "            <div class=\"pswp__item\"><\/div>";
strVar += "        <\/div>";
strVar += "        <div class=\"pswp__ui pswp__ui--hidden\">";
strVar += "            <div class=\"pswp__top-bar\">";
strVar += "                <div class=\"pswp__counter\"><\/div>";
strVar += "                <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"><\/button>";
strVar += "                <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in\/out\"><\/button>";
strVar += "                <div class=\"pswp__preloader\">";
strVar += "                    <div class=\"pswp__preloader__icn\">";
strVar += "                        <div class=\"pswp__preloader__cut\">";
strVar += "                            <div class=\"pswp__preloader__donut\"><\/div>";
strVar += "                        <\/div>";
strVar += "                    <\/div>";
strVar += "                <\/div>";
strVar += "            <\/div>";
strVar += "            <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">";
strVar += "                <div class=\"pswp__share-tooltip\"><\/div>";
strVar += "            <\/div>";
strVar += "            <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">";
strVar += "            <\/button>";
strVar += "            <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">";
strVar += "            <\/button>";
strVar += "            <div class=\"pswp__caption\">";
strVar += "                <div class=\"pswp__caption__center\"><\/div>";
strVar += "            <\/div>";
strVar += "        <\/div>";
strVar += "    <\/div>";
strVar += "<\/div>";

$("#photo").html(strVar);
$("#content img").each(function(obj){
	$(this).click(function(){
		toBigPic(obj);
	})
	
});

function toBigPic(pos) {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	var items = [];
	var getItems = function() {
		$("#content img").each(function(){
			var image = new Image();
            image.src = $(this).attr("src")||$(this).attr("data-src");
			var item = {
				src: image.src,
				w: image.naturalWidth,
				h: image.naturalHeight
			};
			items.push(item);
		})
	};

	getItems();

	// define options (if needed)
	var options = {
		// history & focus options are disabled on CodePen
		// history & focus options are disabled on CodePen
		history: false,
		focus: false,
		index: pos,
		showAnimationDuration: 0,
		hideAnimationDuration: 0

	};

	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
}