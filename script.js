const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.border = "2px solid #5F27CD";
    });

    card.addEventListener("mouseleave", () => {
        card.style.border = "none";
    });
});
