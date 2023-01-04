particlesJS('particles-js',  
  {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 2000
        }
      },
      "color": {
        "value": "#00c8df"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#810B25"
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
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 60,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 430,
        "color": "#810B25",
        "opacity": 0.4,
        "width": 3
      },
      "move": {
        "enable": true,
        "speed": 8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
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
          "distance": 1,
          "line_linked": {
            "opacity": 0
          }
        },
        "bubble": {
          "distance": 10,
          "size": 80,
          "duration": 10,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 150
        },
        "push": {
          "particles_nb": 1
        },
        "remove": {
          "particles_nb": 1
        }
      }
    },
    "retina_detect": true,
  }
);

