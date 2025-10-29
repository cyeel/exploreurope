const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close");
    const festivalDay = document.querySelector(".festival");

    festivalDay.onclick = () => popup.style.display = "flex";
    closeBtn.onclick = () => popup.style.display = "none";
    popup.onclick = (e) => {
      if (e.target === popup) popup.style.display = "none";
    };