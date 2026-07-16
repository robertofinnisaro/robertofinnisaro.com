document.addEventListener("DOMContentLoaded", function () {

  const search = document.getElementById("search");
  const rows = document.querySelectorAll("#filamentTable tbody tr");

  if (!search) return;

  search.addEventListener("input", function () {

    const q = this.value.toLowerCase();

    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(q) ? "" : "none";
    });

  });

});