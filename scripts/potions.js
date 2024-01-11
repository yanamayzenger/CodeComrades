// Axios Request Boilerplate
// axios.get(URL_ENDPOINT); <- this returns a response from the URL_ENDPOINT
//Inserting an image
const POTTER_BASE_URL = "https://api.potterdb.com/v1/potions";
const insertImage = (imageInfo) => {
  const name = document.createElement("h2");
  //insert random number from array
  const randomPotionNumber = Math.floor(
    Math.random() * imageInfo.data.length + 1
  );
  console.log(randomPotionNumber);
  // refresh with new photo
  const potionDiv = document.querySelector(".potion-info");
  potionDiv.innerHTML = "";
  //   const imageDataInfo = imageInfo.data
  name.textContent = imageInfo.data[randomPotionNumber].attributes.name;
  const image = document.createElement("img");
  image.src = imageInfo.data[randomPotionNumber].attributes.image;
  image.alt = "potion image";
  image.classList.add("img--potion");
  potionDiv.appendChild(name);
  potionDiv.appendChild(image);
};
const getPotionImage = async () => {
  try {
    const potionResponse = await axios.get(`${POTTER_BASE_URL}`);
    console.log(typeof potionResponse.data);
    console.log(potionResponse.data);
    //note how there is no JSON.parse - because axios does that for us.
    insertImage(potionResponse.data);
  } catch (err) {
    console.log("oh no, next time", err);
  }
  console.log("hi there");
};
