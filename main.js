// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//     console.log('callback - particles.js config loaded');
//   });
  
const navslide = () =>{
    const hamburger = document.querySelector(".burger-menu");
    const navlinks = document.querySelector(".navi");

    hamburger.addEventListener("click", () => {
        navlinks.classList.toggle("open")
        })
}

navslide()
