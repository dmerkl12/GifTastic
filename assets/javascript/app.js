let topicsArr = ["Pizza", "Cake", "Hamburger", "Pho", "Chocolate"];

const numberOfGIFs = 10;

const gifRating = "pg";

  function renderButtons(topics) {
   document.getElementById("buttons-view").innerHTML = "";

    for (let i = 0; i < topics.length; i++) {
 
      const a = document.createElement("button");
      // Adding a class of food to our button
      a.classList.add("food");
      
      a.setAttribute("data-name", topics[i]);
    
      a.innerHTML = topics[i];
    
      document.getElementById("buttons-view").append(a);

    }
  }
  renderButtons(topicsArr);

  document.getElementById("add-food").addEventListener("click", function (event) {
    event.preventDefault();
    const foodQuery = document.getElementById("food-input").value.trim();
    topicsArr.push(foodQuery);
    renderButtons(topicsArr);

  });







  document.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function () {
      const food = this.getAttribute("data-name");
      const queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        food + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&rating=PG&limit=10";

      fetch(queryURL).then(function (response) {
        console.log(response)
          return response.json();
        })
        .then(function (responseJson) {

          const results = responseJson.data;
          for (let i = 0; i < results.length; i++){

            const foodDiv = document.createElement("div");

            const rating = results[i].rating;

          const p = document.createElement("p");
          p.innerHTML = "Rating: " + rating;

          const foodImage = document.createElement("img");
          foodImage.setAttribute("src", results[i].images.fixed_height.url);

          foodDiv.append(p);
          foodDiv.append(foodImage);

          document.getElementById("gifArea").prepend(foodDiv);

          }
        });
    });
  });





document.querySelectorAll(".gif").forEach(function (img) {
    img.addEventListener("click", function () {

      const state = this.getAttribute("data-state")

      console.log(state)

      if (state === 'still'){
        this.setAttribute("src", this.getAttribute("data-animate"));
        this.setAttribute("data-state", "animate");
      }
      else{
        this.setAttribute("src", this.getAttribute("data-animate"));
        this.setAttribute("data-state", "still")
      }
    });
  });



