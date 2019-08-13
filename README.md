# GifTastic

This has the gifs go from still to moving
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


      document.querySelectorAll("button").forEach(function (button) {
      button.addEventListener("click", function () {
        const animal = this.getAttribute("data-animal");
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        fetch(queryURL)
          .then(function (response) {
            return response.json();
          })
          .then(function (responseJson) {

            const results = responseJson.data;
            for (let i = 0; i < results.length; i++){

              const animalDiv = document.createElement("div");

              const rating = results[i].rating;

            const p = document.createElement("p");
            p.innerHTML = "Rating: " + rating;

            const animalImage = document.createElement("img");
            animalImage.setAttribute("src", results[i].images.fixed_height.url);

            animalDiv.append(p);
            animalDiv.append(animalImage);

            document.getElementById("gifs-appear-here").prepend(animalDiv);

            }

            console.log(responseJson);



          });
      });
    });

        <!-- <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Meal Time Giphy Search</span>
        <form class="form-inline my-2 my-lg-0" id="Search">
                <label for="food-input" id="instructions">Recipes</label>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="add-food">
                <button class="btn btn-outline-info" type="submit" id="addTopic">Search</button>
              </form>
    </nav> -->


    // Generic function for capturing the food type from the data-attribute
// function alertfoodType() {
//     const foodType = this.getAttribute("data-name");
//     // function alertfoodType(event) {
//     // const foodType = event.target.getAttribute("data-name"); these are the same

//     alert(foodType);



//   }