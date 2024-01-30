const apiURL = "https://api.quotable.io/random";
const btnEle = document.getElementById("btn");
btnEle.addEventListener("click", async () => {
  try {
    btnEle.innerText = "Loading...";
    btnEle.disabled = true;
    document.getElementById("quote").innerText = "updating.......";
    document.getElementById("author").innerText = "updating.......";
    const respone = await fetch(apiURL);
    const data = await respone.json();
    document.getElementById("quote").innerText = data.content;
    document.getElementById("author").innerText = "~" + data.author;
    btnEle.innerText = "Loading...";
    btnEle.disabled = false;
    console.log(data);
  } catch (error) {
    document.getElementById("quote").innerText =
      "An error happened,try again later";
    document.getElementById("author").innerText = "An error happened";
    btnEle.innerText = "Loading...";
    btnEle.disabled = false;
  }
});
