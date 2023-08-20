import { UI } from "./ui.module.js";

export class Games {
  constructor() {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        this.linking(link);
        const category = link.dataset.category;
        this.GetGames(category);
      });
    });
    this.loader = document.querySelector(".loading");
    this.details = document.getElementById("details");
    this.games = document.getElementById("games");
    this.ui = new UI();
    
    this.GetGames("MMORPG");
  }  

  linking(link) {
    document.querySelector(".navbar-nav .nav-item .active").classList.remove("active");
    link.classList.add("active");
  }

  async GetGames(cat) {
    this.loader.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a27da97175msh85eeeb317dfdbbbp1536b2jsn1ea7a5539264",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
    const response = await api.json();
    this.loader.classList.add("d-none");    
    console.log(response)
    this.ui.display(response);
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", ()=> {
        this.details.classList.remove("d-none");
        this.games.classList.add("d-none");
        this.details
      });
    });
  }
}
