const openItem = item => {
    const container = item.closest('.team__item');
    const contentBlock = container.find('.team__content');
    const textBlock = contentBlock.find('.team__content-block');
    const regHeight = textBlock.height();
   
    container.addClass("active");
    contentBlock.height(regHeight);

}

const closeEveryItem = container => {
    const items = container.find('.team__content');
    const itemContainer = container.find('.team__item');
    const item = container.closest('.team__title');
   
    item.removeClass('up')
    itemContainer.removeClass("active");
    items.height(0);
};


$('.team__title').click(e => {
    $('.team__title').not(this).removeClass('up');

    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    const elemContainer = $this.closest('.team__item');
 
    $this.addClass('up');

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
        closeEveryItem($this);
    } else {
        closeEveryItem(container);
        openItem($this);
     };
});
