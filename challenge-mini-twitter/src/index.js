let tweetBtn = document.getElementById("btn")
let userInput = document.getElementById("user-input");

let tweetPlace = document.getElementById("tweetsPlace");

let deleteIcon = document.querySelectorAll(".deleteIcon")
let tweet = document.querySelectorAll(".tweet")

let tweetId = 0;

function createTweet(event) {
    event.preventDefault();

    if ((userInput.value === "")) {
      alert("please write something");
      return;
    }
    else {
      // create list
      let newList = document.createElement("li");
      newList.id = `tweet-${tweetId}`;
      tweetId++;
      tweetPlace.appendChild(newList);

      // user detailes
      let userDetails = document.createElement("div");
      userDetails.classList.add("profileDetails");
      newList.appendChild(userDetails);

      let profilePicture = document.createElement("img");
      profilePicture.classList.add("profile");
      profilePicture.src =
        "/challenge-mini-twitter/img/profile-circle-svgrepo-com.svg";
      userDetails.appendChild(profilePicture);

      let userName = document.createElement("h4");
      userName.innerText = "username";
      userDetails.appendChild(userName);

      // input user

      let newParagraph = document.createElement("p");
      newParagraph.innerText = userInput.value;
      newList.appendChild(newParagraph);

      // add time
      
      let currentDate = new Date();
      let dateString = currentDate.toLocaleString();

    

      let tweetTime = document.createElement("div");
      tweetTime.classList.add("tweetTime");

      let dateItem = document.createElement("p");
      dateItem.classList.add("time");
      dateItem.innerText = dateString;

   

      tweetTime.appendChild(dateItem);
      newList.appendChild(tweetTime);

      //   icons
      let icons = document.createElement("div");
      icons.classList.add("icons");

      let iconReply = document.createElement("img");
      iconReply.classList.add("icon");
      iconReply.src =
        "/challenge-mini-twitter/img/bubble-circle-svgrepo-com.svg";

      let iconRetweet = document.createElement("img");
      iconRetweet.classList.add("icon");
      iconRetweet.src = "/challenge-mini-twitter/img/retweet-svgrepo-com.svg";

      let iconFave = document.createElement("img");
      iconFave.classList.add("icon");
      iconFave.src = "/challenge-mini-twitter/img/heart-svgrepo-com.svg";

      let iconShare = document.createElement("img");
      iconShare.classList.add("icon");
      iconShare.src = "/challenge-mini-twitter/img/share-2-svgrepo-com.svg";

      let iconDelete = document.createElement("img");
      iconDelete.classList.add("icon", "deleteIcon");
      iconDelete.src = "/challenge-mini-twitter/img/bin-svgrepo-com.svg";
      iconDelete.addEventListener("click", function () {
        document.getElementById(newList.id).remove();
      });

      icons.appendChild(iconReply);
      icons.appendChild(iconRetweet);
      icons.appendChild(iconFave);
      icons.appendChild(iconShare);
      icons.appendChild(iconDelete);
      newList.appendChild(icons);

      //   delete user input
      userInput.value = "";
      console.log(newList);
    }

}







tweetBtn.addEventListener("click", createTweet)
