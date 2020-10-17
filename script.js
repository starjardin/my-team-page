const pictureContainer = document.querySelector(".image__container");
const pictures = Array.from(pictureContainer.querySelectorAll("div"));

for (let i = 1; i < pictures.length; i = i + 3) {
  let middlePicture = pictures[i]
  middlePicture.classList.add('add');
  console.log(middlePicture);
}