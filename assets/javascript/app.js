let topics = ["Pizza", "Cake", "Hamburger", "Pho", "Chocolate", "S'mores", "Burrito", "Hot Dog", "Peanut Butter"];

const numberOfGIFs = 10;

  function renderButtons(topics) {
   document.getElementById("buttons-view").innerHTML = "";

    for (let i = 0; i < topics.length; i++) {
 
      const a = document.createElement("button");
      a.classList.add("food");
      
      a.setAttribute("data-name", topics[i]);
    
      a.innerHTML = topics[i];
    
      document.getElementById("buttons-view").append(a);

    }

    document.querySelectorAll(".food").forEach(function (button) {
      button.addEventListener("click", function () {
        console.log("here")
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

              const foodURL = results[i].images.fixed_height_still.url;
  
              const rating = results[i].rating;
  
            const p = document.createElement("p");
            p.innerHTML = "Rating: " + rating;
  
            const foodImage = document.createElement("img");
            
            foodImage.setAttribute("src", foodURL);
            foodImage.setAttribute("data-animate-url", results[i].images.fixed_height.url);
            foodImage.setAttribute("data-still-url", results[i].images.fixed_height_still.url);
            foodImage.setAttribute("data-state", "still");

            foodImage.addEventListener("click", function(){

              if(foodImage.getAttribute("data-state") === "still"){
                let animateGIF = foodImage.getAttribute("data-animate-url");
                foodImage.setAttribute("src", animateGIF);
                foodImage.setAttribute("data-state", "animate");
              }
              else{
                let stillGIF = foodImage.getAttribute("data-still-url")
                foodImage.setAttribute("src", stillGIF);
                foodImage.setAttribute("data-state", "still")
              }
            } )


            foodDiv.append(foodImage);
            foodDiv.prepend(p);
  
            document.getElementById("gifArea").prepend(foodDiv);
  
            }
          });
      });
    });
  }
  renderButtons(topics);

  document.getElementById("add-food").addEventListener("click", function (event) {
    event.preventDefault();
    const foodQuery = document.getElementById("food-input").value.trim();
    topics.push(foodQuery);
    renderButtons(topics);
    console.log(topics)

  });