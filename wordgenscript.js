// Word lists for each category
const words = {
  Movies: [
    "Titanic", "Avatar", "Batman", "Harry Potter", "Star Wars",
    "Frozen", "The Lion King", "Jurassic Park", "The Godfather", "Spider-Man",
    "The Lord of the Rings", "Pirates of the Caribbean", "Toy Story", "Finding Nemo", 
    "Aladdin", "Shrek", "Gladiator", "The Matrix", "Iron Man", "Moana", 
    "James Bond", "Kung Fu Panda", "The Incredibles", "Forrest Gump", 
    "Pulp Fiction", "Cast Away"
  ],
  Jobs: [
    "Architect", "Astronaut", "Barber", "Carpenter", "Athlete",
    "Electrician", "Fashion Designer", "Gardener", "Judge", "Lawyer",
    "Magician", "Painter", "Plumber", "Soldier", "Tailor",
    "Taxi Driver", "Translator", "Zookeeper", "Accountant", "Baker",
    "Doctor", "Teacher", "Firefighter", "Chef", "Police Officer",
    "Artist", "Farmer", "Pilot", "Programmer", "Nurse",
    "Scientist", "Construction Worker", "Librarian", "Musician", "Actor",
    "Mechanic", "Photographer", "Veterinarian", "Dentist", "Writer"
  ],
  Activities: [
    "Swimming", "Cooking", "Dancing", "Running", "Singing",
    "Fishing", "Reading", "Drawing", "Cycling", "Shopping",
    "Gardening", "Skiing", "Painting", "Surfing", "Camping",
    "Hiking", "Bowling", "Chess", "Sewing", "Watching TV",
    "Doing Laundry"
  ],
  Countries: [
    "USA", "Canada", "Mexico", "Brazil", "England",
    "France", "Germany", "Italy", "Spain", "Russia",
    "China", "Japan", "South Korea", "India", "Australia",
    "New Zealand", "South Africa", "Egypt", "Turkey", "Saudi Arabia",
    "Thailand", "Indonesia", "Philippines", "North Korea", "Netherlands",
    "Sweden", "Norway", "Ireland", "Cuba", "Greece",
    "Vietnam", "Scotland", "Malaysia", "Kenya"
  ]
};

// DOM elements
const tabButtons = document.querySelectorAll('.tab-button');
const generateButton = document.getElementById('generate-button');
const generatedWordText = document.getElementById('generated-word');

let selectedCategory = 'Movies'; // Default category

// Tab button click event
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Add 'active' class to clicked tab
    button.classList.add('active');
    // Update selected category
    selectedCategory = button.dataset.category;
    // Reset the generated word text
    generatedWordText.textContent = 'Click "New word"';
  });
});

// Generate a random word
generateButton.addEventListener('click', () => {
  if (selectedCategory) {
    const categoryWords = words[selectedCategory];
    const randomIndex = Math.floor(Math.random() * categoryWords.length);
    generatedWordText.textContent = categoryWords[randomIndex];
  } else {
    generatedWordText.textContent = 'Click "New word"';
  }
});
