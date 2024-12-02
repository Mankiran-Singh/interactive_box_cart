const boxes = document.querySelectorAll('.interactive-box');

boxes.forEach(box => {
  box.addEventListener('click', (event) => {
    if (event.target.tagName !== 'SELECT') {
      const isActive = box.classList.contains('active');

      boxes.forEach(b => b.classList.remove('active'));
      
      if (!isActive) {
        box.classList.add('active');
      }
    }
  });

  const dropdowns = box.querySelectorAll('select');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
      event.stopPropagation(); 
    });
  });
});
