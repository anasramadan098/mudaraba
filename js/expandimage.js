const imgs = document.querySelectorAll('.expand');

imgs.forEach(img => {
    img.addEventListener('click', () => {
        const holder = document.createElement('div');
        holder.classList.add('holder_imgs');

        const closeBtn = document.createElement('span');
        closeBtn.textContent = 'CLOSE'
        closeBtn.addEventListener('click' , () => {
            holder.remove();
        })

        const imgClone = document.createElement('img');
        imgClone.src = img.src;
        

        holder.appendChild(closeBtn);
        holder.appendChild(imgClone);

        document.body.appendChild(holder);
    })

})