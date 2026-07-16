const searchBox = document.getElementById("searchBox");
const materialFilter = document.getElementById("materialFilter");
const brandFilter = document.getElementById("brandFilter");
const amsOnly = document.getElementById("amsOnly");
const compareBtn = document.getElementById("compareMode");

const cards = document.querySelectorAll(".filament-card");

let compareMode = false;

/* =========================
   FILTER FUNCTION
========================= */

function filter() {
  const search = searchBox.value.toLowerCase();
  const material = materialFilter.value;
  const brand = brandFilter.value;
  const ams = amsOnly.checked;

  cards.forEach(card => {
    const name = card.dataset.name;
    const m = card.dataset.material;
    const b = card.dataset.brand;
    const a = card.dataset.ams === "true";

    let show = true;

    if (search && !name.includes(search)) show = false;
    if (material !== "all" && m !== material) show = false;
    if (brand !== "all" && b !== brand) show = false;
    if (ams && !a) show = false;

    card.style.display = show ? "block" : "none";
  });
}

/* =========================
   EVENT LISTENERS
========================= */

searchBox.addEventListener("input", filter);
materialFilter.addEventListener("change", filter);
brandFilter.addEventListener("change", filter);
amsOnly.addEventListener("change", filter);

/* =========================
   COMPARE MODE
========================= */

compareBtn.addEventListener("click", () => {
  compareMode = !compareMode;

  document.querySelectorAll(".compare-select").forEach(cb => {
    cb.classList.toggle("hidden");
  });

  compareBtn.classList.toggle("active");
});