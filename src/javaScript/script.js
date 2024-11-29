document.querySelectorAll(".kanban-card").forEach((card) => {
  card.addEventListener("dragstart", (e) => {
    e.currentTarget.classList.add("dragging");
  });
});