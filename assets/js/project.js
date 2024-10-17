AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Q(AI)² : Quantum Artificial Intelligence for the Automotive Industry",
    cardImage: "assets/images/project-page/qai2.jpg",
    description: "Quantum AI algorithms to solve Industry 4.0 and autonomous vehicle-related problems.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "https://www.quantentechnologien.de/forschung/foerderung/quanteninformatik-algorithmen-software-anwendungen/qai2.html",
    Githublink: "https://www.qai2.de/",
  },
  {
    title: "KIKI",
    cardImage: "assets/images/project-page/kiki.webp",
    description: "Computer vision project for automatic defect detection of sewer pipes using annotated video data.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "https://www.aws-institut.de/research/kiki-ki-basierte-kanalinstandhaltung/",
    Githublink: "",
  },
  {
    title: "DatEnKoSt",
    cardImage: "assets/images/project-page/datenkost.jpg",
    description: "Detection of road quality using smartphone sensors and time series pattern recognition.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "https://bmdv.bund.de/SharedDocs/DE/Artikel/DG/mfund-projekte/datenkost.html",
    Githublink: "",
  },
  {
    title: "Anomaly Detection of Industrial Machines",
    cardImage: "assets/images/project-page/anomaly_detection.webp",
    description: "Machine learning project to detect anomalies in industrial machines using time series data.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "https://www.aws-institut.de/research/anomaly-detection/",
    Githublink: "",
  },
  {
    title: "MYOW (Make Your Own Wearable)",
    cardImage: "assets/images/project-page/myow.png",
    description: "NLP-based recommender system for custom wearable accessories with sensors and actuators.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "https://www.aws-institut.de/research/myow/",
    Githublink: "",
  },
  {
    title: "KAMeri",
    cardImage: "assets/images/project-page/kameri.jpg",
    description: "EEG-based cognitive safety system for human-machine interaction in industrial environments.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "https://www.aws-institut.de/research/kameri/",
    Githublink: "",
  },
  {
    title: "AURIX 1G MCAL",
    cardImage: "assets/images/project-page/aurix1g.webp",
    description: "Automation scripts for AURIX 1G MCAL and memory map extractions, tool development in Python.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "https://www.infineon.com/cms/en/product/microcontroller/32-bit-tricore-microcontroller/",
    Githublink: "",
  },
  {
    title: "SafeTLib",
    cardImage: "assets/images/project-page/safetlib.png",
    description: "Developed tools for verifying program flow monitoring and register integrity for AURIX Microcontrollers.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "https://www.infineon.com/cms/en/product/microcontroller/microcontroller-safety-products-pro-sil-iso26262/?redirId=112670",
    Githublink: "",
  },
  {
    title: "SafeTMon and SafeTCore",
    cardImage: "assets/images/project-page/safetmon_safetcore.jpg",
    description: "Safety computing platform tests and maintenance tasks for various industrial clients.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "https://www.infineon.com/dgdl/Safety-Computing-Platform-XC2300-CIC61508-Product-Brief.pdf?fileId=db3a3043353fdc16013543303497315d",
    Githublink: "",
  },
  {
    title: "CD MAT Tool",
    cardImage: "assets/images/project-page/cdmat.webp",
    description: "Developed tool for analyzing data from Google Cloud and automating report generation.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "https://www.motorola.com/",
    Githublink: "",
  },
  {
    title: "Location based Wireless Sensor Network",
    cardImage: "assets/images/project-page/location_based_wsn.webp",
    description: "IoT project for retrieving sensor data and geo-boundary-based access control in mobile apps.",
    tagimg: "", // or a placeholder icon if you have it
    Previewlink: "http://www.nie.ac.in/",
    Githublink: "",
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
