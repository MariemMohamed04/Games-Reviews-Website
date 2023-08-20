async function GetGames() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a27da97175msh85eeeb317dfdbbbp1536b2jsn1ea7a5539264",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const api = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
    options
  );
  const response = await api.json();
  console.log(response);

  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452";  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

GetGames();
