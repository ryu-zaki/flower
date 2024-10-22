
onload = () => {
    

    const customCon = document.querySelector('.custom-con');
    const modal = document.querySelector('.modal');
    const btn = document.querySelector('[data-btn]');
    btn.addEventListener('click', () => {
      customCon.classList.add('animate');

      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
      }, 1500);

      const m = setTimeout(() => {
        modal.classList.add("animate");
        clearTimeout(m);

        const revert = setTimeout(() => {
          modal.classList.remove("animate");
          clearTimeout(revert);
        }, 3500);
      }, 6500);
    })
  };
  