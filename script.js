// API key = f6908437b8fd7b2cc352c55d4f8089c1
const key = "f6908437b8fd7b2cc352c55d4f8089c1";
const base = `https://api.themoviedb.org/3/discover/movie?api_key=${key}`;
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${key}`;
const img = "https://image.tmdb.org/t/p/w500";

let data = [];
let page = 1;

async function getData() {
  let url = `${base}&page=${page}`;

  const sort = document.getElementById("sort").value;
  const rate = document.querySelector('input[name="rate"]:checked')?.value;

  if (sort === "rating") {
    url += "&sort_by=vote_average.desc";
  }

  if (sort === "date") {
    url += "&sort_by=release_date.desc";
  }

  if (rate && rate !== "all") {
    url += `&vote_average.gte=${rate}`;
  }

  const res = await fetch(url);
  const out = await res.json();

  data = out.results;
  show(data);

  document.getElementById("pageNum").innerText = `Page ${page}`;
}

function show(list) {
  const box = document.getElementById("container");
  box.innerHTML = "";

  list.forEach(el => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${el.poster_path ? img + el.poster_path : ""}">
      <h3>${el.title}</h3>
      <p>⭐ ${el.vote_average}</p>
      <p>${el.release_date}</p>
    `;

    box.appendChild(div);
  });
}

async function searchMovies(q) {
  const res = await fetch(`${searchUrl}&query=${q}`);
  const out = await res.json();
  show(out.results);
}

function update() {
  const q = document.getElementById("search").value.toLowerCase();

  if (q) {
    searchMovies(q);
  } else {
    page = 1;
    getData();
  }
}

document.getElementById("search").addEventListener("input", update);
document.getElementById("sort").addEventListener("change", () => {
  page = 1;
  getData();
});

document.querySelectorAll('input[name="rate"]').forEach(r => {
  r.addEventListener("change", () => {
    page = 1;
    getData();
  });
});

document.getElementById("next").onclick = () => {
  page++;
  getData();
};

document.getElementById("prev").onclick = () => {
  if (page > 1) {
    page--;
    getData();
  }
};

getData();