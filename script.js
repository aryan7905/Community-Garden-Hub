// Initialize Particles.js with configuration
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100, // Number of particles
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#228b22" // Green color for particles
      },
      "shape": {
        "type": "circle", // Shape of particles
        "stroke": {
          "width": 0,
          "color": "#228b22"
        }
      },
      "opacity": {
        "value": 0.5, // Opacity of particles
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1
        }
      },
      "size": {
        "value": 3, // Size of the particles
        "random": true,
        "anim": {
          "enable": true,
          "speed": 40,
          "size_min": 0.1
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150, // Distance between linked particles
        "color": "#228b22",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6, // Speed of particle movement
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse" // Repulse effect on hover
        },
        "onclick": {
          "enable": true,
          "mode": "push" // Add particles on click
        }
      },
      "modes": {
        "repulse": {
          "distance": 100, // Distance for repulsion effect
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4 // Number of particles to push on click
        }
      }
    },
    "retina_detect": true
  });
// Add event listener for submit button
document.getElementById('submit-query').addEventListener('click', function() {
    // Get the value of the query
    var query = document.getElementById('query').value;
    
    // Check if the query is not empty
    if (query.trim() !== "") {
        // Display a confirmation message
        alert("Your query has been submitted!");
        
        // Clear the textarea after submission
        document.getElementById('query').value = "";
    } else {
        // If the textarea is empty, show a warning
        alert("Please type your query before submitting.");
    }
});
  