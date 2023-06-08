const displayRandomImgButton = document.querySelector(".img-btn");
displayRandomImgButton.addEventListener("click", displayRandomImg);

function displayRandomImg() {
  const img = document.createElement("img");
  const imgContainer = document.querySelector(".img-container");

  const randomImgIndex = Math.floor(Math.random() * 9) + 1;

  if (imgContainer.hasChildNodes()) {
    imgContainer.replaceChild(img, imgContainer.firstChild);
  } else {
    imgContainer.appendChild(img);
  }

  img.setAttribute("src", `img/${randomImgIndex}.jpg`);
}
