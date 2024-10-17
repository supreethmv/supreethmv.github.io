AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects

const projects = [
  {
    title: "Square and Fair: The Role of Square Images in Deep Learning",
    cardImage: "assets/images/blogs/vgg16_square_devto.jpg",
    description: "Exploring the significance of square images in deep learning.",
    platform: "DEV.to",
    Previewlink: "https://dev.to/supreethmv/square-and-fair-the-role-of-square-images-in-deep-learning-2i7m",
  },
  {
    title: "Why Square Images Dominate Deep Learning and CNNs",
    cardImage: "assets/images/blogs/square_images_medium.webp",
    description: "An in-depth look at why square images are preferred in deep learning and CNNs.",
    platform: "Medium",
    Previewlink: "https://medium.com/@supreethmv/why-square-images-dominate-deep-learning-and-cnns-9a9bf7bf1c92",
  },
  {
    title: "Python Implementation: Quantum Algorithm for Maximum Discounts",
    cardImage: "assets/images/blogs/hashnode_bilpq.png",
    description: "A detailed guide on implementing quantum algorithms for finding maximum discounts.",
    platform: "Hashnode",
    Previewlink: "https://supreethmv.hashnode.dev/python-implementation-quantum-algorithm-for-maximum-discounts",
  },
  {
    title: "Quantum Algorithm for Coalition Structure Generation: Example and Implementation",
    cardImage: "assets/images/blogs/bilpq_medium.webp",
    description: "A practical guide to implementing a quantum algorithm for coalition structure generation.",
    platform: "Medium",
    Previewlink: "https://medium.com/@supreethmv/quantum-algorithm-for-coalition-structure-generation-example-and-implementation-ed65fe9614b5",
  },
  {
    title: "Quantum Algorithm Implementation: Finding the Best Deals",
    cardImage: "assets/images/blogs/bilpq.jpg",
    description: "How to implement quantum algorithms to find the best deals in smart shopping.",
    platform: "DEV.to",
    Previewlink: "https://dev.to/supreethmv/finding-the-best-deals-smart-shopping-with-quantum-algorithms-1na4",
  },
];


// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Previewlink}" target="_blank">${title}</a></h1>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
