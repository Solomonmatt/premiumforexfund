/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area":200
        }
      },
      "color": {
        "value": "#14c0a6"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 1
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.5,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 6,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 40, 
        "color": "#14c0a6",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 500,
          "rotateY": 500
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 100,
          "size": 100,
          "duration": 2,
          "opacity": 5,
          "speed": 3
        },
        "repulse": {
          "distance": 300
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#ffff",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);