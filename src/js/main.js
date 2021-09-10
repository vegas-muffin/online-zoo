import * as $ from "jquery";
import "popper.js";
// import "slick-carousel";
import "../scss/main.scss";
import "../scss/_slick.scss";
import "../scss/_slick-theme.scss";
import "../index.html";
import "../zoos.html";

// global.jQuery = $;
// global.$ = $;

const AnimalTitle = document.querySelector(".animal__title");
const AnimalCamera = document.querySelector(".animal__camera-frame");
const AnimalFrame = document.querySelectorAll(".animal__frame");
const ProfileAnswer = document.querySelector(".profile__answer");
const ProfileContent = document.querySelectorAll(".profile__content");
const ProfilePhoto = document.querySelector(".profile__photo");
const ProfileText = document.querySelector(".profile__text");
const ZooLink = document.querySelector("#zoo-link");
const SidebarItem = document.querySelectorAll(".sidebar__item");

// Zoos
const SidebarCircles = document.querySelectorAll(".sidebar__circle");

SidebarCircles.forEach((sidebarCircle) => {
  sidebarCircle.addEventListener("click", (event) => {
    buildZooPage(event.target.id);
  });
});

const Animals = [
  {
    name: "panda",
    titlePage: "live panda cams",
    content: [
      "Giant Panda",
      "Ailuropoda melanoleuca",
      "Herbivore",
      "4 to 5 feet",
      "Omnivore",
      "Forests",
      "Eastern Asia",
    ],
    youknow:
      "Pandas are often seen eating in a relaxed sitting posture, with their hind legs stretched out before them. They may appear sedentary, but they are skilled tree-climbers and efficient swimmers.",
    photo: "profile__photo panda",
    text: "Giant pandas are very unusual animals that eat almost exclusively bamboo, which is very low in nutrients. Because of this, they have many unique adaptations for their low-energy lifestyle. Giant pandas are solitary. They have a highly developed sense of smell that males use to avoid each other and to find females for mating in the spring. After a five-month pregnancy, females give birth to a cub or two, though they cannot care for both twins. The blind infants weigh only 5 ounces at birth and cannot crawl until they reach three months of age. They are born white, and develop their much loved coloring later. Habitat loss is the primary threat to this species. Its popularity around the world has helped the giant panda become the focus of successful conservation programs.",
    cams: [
      "https://www.youtube.com/embed/OObOQ2GElhA",
      "https://www.youtube.com/embed/D0eqnda8dOk",
      "https://www.youtube.com/embed/65JHo3Cy2tY",
    ],
  },
  {
    name: "eagles",
    titlePage: "Bald Eagle cams",
    content: [
      "Bald Eagle",
      "Haliaeetus Leucocephalus",
      "Birds",
      "Body: 34 to 43 inches; wingspan: 6 to 8 feet",
      "Carnivore",
      "Seacoasts, rivers, large lakes or marshes",
      "Continental United States",
    ],
    youknow:
      "Because of its role as a symbol of the US, but also because of its being a large predator, the bald eagle has many representations in popular culture. Not all of these representations are accurate. In particular, the movie or television bald eagle typically has a bold, powerful cry. The actual eagle has a much softer, chirpy voice, not in keeping with its popular image.",
    photo: "profile__photo eagles",
    text: 'The bald eagle, with its snowy-feathered (not bald) head and white tail, is the proud national bird symbol of the United States—yet the bird was nearly wiped out there. For many decades, bald eagles were hunted for sport and for the "protection" of fishing grounds.  These powerful birds of prey use their talons to fish, but they get many of their meals by scavenging carrion or stealing the kills of other animals. They live near water and favor coasts and lakes where fish are plentiful, though they will also snare and eat small mammals. Bald eagles are believed to mate for life. A pair constructs an enormous stick nest—one of the bird-world\'s biggest—high above the ground and tends to a pair of eggs each year. Immature eagles are dark, and until they are about five years old, they lack the distinctive white markings that make their parents so easy to identify.',
    cams: [
      "https://www.youtube.com/embed/RmmAzrAkKqI",
      "https://www.youtube.com/embed/eTAsANPVqB8",
      "https://www.youtube.com/embed/XfoUF8YkB7A",
    ],
  },
  {
    name: "gorilla",
    titlePage: "gorillas cams",
    content: [
      "Western lowland gorillas",
      "Gorilla gorilla gorilla",
      "Mammals",
      "Standing height, four to six feet",
      "Omnivore",
      "Rainforests",
      "Western Africa",
    ],
    youknow:
      "In addition to having distinctive fingerprints like humans do, gorillas also have unique nose prints. Gorillas are the largest of the great apes, but the western lowland gorilla is the smallest of the subspecies.",
    photo: "profile__photo gorilla",
    text: "Western lowland gorillas are the smallest of the four subspecies. They live in thick tropical rainforests, where they find plenty of food for their vegetarian diet. They eat roots, shoots, fruit, wild celery, and tree bark and pulp. Gorillas can climb trees, but they’re usually found on the ground in communities—known as troops. Troops are led by one dominant, older adult male, often called a silverback because of the swath of silver hair that adorns his otherwise dark fur. Troops also include several other young males, some females, and their offspring. The leader organizes troop activities, such as eating, nesting in leaves, and moving about the group's home range. Gorillas prefer traveling on all fours, pushing themselves forward with their knuckles and soles of their feet. Female gorillas give birth to one infant after a pregnancy of nearly nine months. These infants ride on their mothers’ backs from the age of four months through the first two or three years of their lives.",
    cams: [
      "https://www.youtube.com/embed/rgXWDk7rh4w",
      "https://www.youtube.com/embed/672cUSe69J0",
      "https://www.youtube.com/embed/rgXWDk7rh4w",
    ],
  },
  {
    name: "lemur",
    titlePage: "lemurs cams",
    content: [
      "Ring-Tailed Lemur",
      "Lemur catta",
      "Mammals",
      "Head and body: 17.75 inches; tail: 21.75 inches",
      "Herbivore",
      "Arid, open areas and forests",
      "Southeast Asia",
    ],
    youknow:
      'A ring-tailed lemur mob will gather in open areas of the forest to sunbathe. They sit in what some call a "yoga position" with their bellies toward the sun and their arms and legs stretched out to the sides.',
    photo: "profile__photo lemur",
    text: "Ring-tailed lemurs are named for the 13 alternating black and white bands that adorn their tails. Unlike most other lemurs, ringtails spend 40 percent of their time on the ground, moving quadrupedally along the forest floor. Ring-tailed lemurs live in southwestern Madagascar, in arid, open areas and forests in territories that range from 15 to 57 acres (0.06 to 0.2 square kilometers) in size. As with all lemurs, olfactory communication is important for ringtails. Ring-tailed lemurs have scent glands on their wrists and chests that they use to mark their foraging routes. Ringtails eat leaves, flowers and insects. They can also eat fruit, herbs and small vertebrates. Females usually give birth to their first baby when they are three years old, and usually once a year every year after that. All adult females participate in raising the offspring of the group. The median life expectancy for a ring-tailed lemur is about 16 years.",
    cams: [
      "https://www.youtube.com/embed/_5_oHPJDDOM",
      "https://www.youtube.com/embed/eMe89SxutTU",
      "https://www.youtube.com/embed/2eJOvJ1VddA",
    ],
  },
];

function buildZooPage(wildAnimal) {
  for (let i = 0; i < Animals.length; i += 1) {
    if (wildAnimal === Animals[i].name) {
      AnimalTitle.textContent = Animals[i].titlePage;
      AnimalCamera.src = Animals[i].cams[0];
      ProfileAnswer.textContent = Animals[i].youknow;
      ProfilePhoto.className = Animals[i].photo;
      ProfileText.textContent = Animals[i].text;
      for (let k = 0; k < AnimalFrame.length; k += 1) {
        AnimalFrame[k].src = Animals[i].cams[k];
      }
      for (let j = 0; j < ProfileContent.length; j += 1) {
        ProfileContent[j].textContent = Animals[i].content[j];
      }
    }
  }
}

ZooLink.onclick = buildZooPage("panda");

//Zoos
// SidebarItem.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     console.log(element.id);
//     buildZooPage(element.id);
//   });
// });

// slider
// $(document).ready(function () {
//   $(".your-class").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   });
// });

$(document).ready(function () {
  $(".hello-btn").click(function () {
    $("hello").css("background-color", "yellow");
  });
});
