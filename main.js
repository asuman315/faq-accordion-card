
faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((faqItem) => {
    faqItem.addEventListener('click', e => {
        
        faqItems.forEach(item => {
            console.log(faqItem, item);
            if (faqItem !== item) {
                item.firstElementChild.classList.remove('open');
                item.lastElementChild.classList.remove('open');
            }
        })
          
           faqItem.firstElementChild.classList.toggle('open');
           faqItem.lastElementChild.classList.toggle('open');
    });
      
});
