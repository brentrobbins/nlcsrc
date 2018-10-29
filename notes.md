### Tech Stack
CHARTIST.JS SIMPLE RESPONSIVE CHARTS
https://gionkunz.github.io/chartist-js/index.html
csv sheet template: https://docs.google.com/spreadsheets/d/1mFvWMNFR1w8pATm2SjEhZ4dWXUAZO_nCEBi9BMTVIiE/edit#gid=0
csv to json: 
https://medium.com/@michaelmangial1/csv-to-json-to-chartist-js-7c5c9e2c37c4
https://github.com/pintux/CSV2JSON

Tilt images
https://micku7zu.github.io/vanilla-tilt.js/
https://github.com/micku7zu/vanilla-tilt.js/

How to test if an element is in the viewport with vanilla JavaScript
https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/

Rellax is a buttery smooth, super lightweight (1021bytes gzipped), vanilla javascript parallax library. Update: Rellax now works on mobile (v1.0.0).
https://github.com/dixonandmoe/rellax

css only parallax
https://keithclark.co.uk/articles/pure-css-parallax-websites/

LAZY LOAD IMAGES?
https://davidwalsh.name/lazyload-image-fade

scroll animations:
https://scrollrevealjs.org/

Count Up:
http://inorganik.github.io/countUp.js/
https://github.com/inorganik/countUp.js

var options = {
  useEasing: true, 
  useGrouping: true, 
  separator: ',', 
  decimal: '.', 
};
var demo = new CountUp('myTargetElement', 0, 2.2, 1, 2.5, options);


Anime.js
https://github.com/juliangarnier/anime
http://animejs.com/documentation/
https://codeburst.io/create-a-revealing-animation-with-anime-js-25a49bc98cd7

Keyframe Animation css3:
https://css-tricks.com/snippets/css/keyframe-animation-syntax/

PAGE ANIMATIONS:
https://github.com/luruke/barba.js/ http://barbajs.org/
https://github.com/minimill/pangea.js
https://github.com/miguel-perez/smoothState.js/

simple page fade in: 
https://alligator.io/js/simple-page-fade-in/

<script>
  document.body.className = 'fade';
</script>

<script>
  document.body.classList.add('fade');
</script>

document.addEventListener("DOMContentLoaded", function(e) {
    document.body.className = '';
});

document.addEventListener("DOMContentLoaded", function(e) {
    document.body.classList.remove('fade');
});


Cloudinary:
Cloud name:	
nlc
API Key:	
482284375569523
 Copy to clipboard
API Secret:	
46ekun1wXkQEtYs1vh1tUIZfg3c
 Copy to clipboard


# To Do List:
- [] page nav state/styles
- [] fix/adjust the header margin/padding
- [] initial ie11 fixes 
 - [] fix header
 - [] aside number boxes
 - [] sub page background bottom paper expanding page
 


- [] GLOBAL:
- [] Mobile/Responsive: header & menu
- [x] Mobile/Responsive: footer

- [] FRONT:
- [] Desktop: front page 'hero'
- [] Mobile/Responsive: front page 'hero'
- [] Desktop: front page 'graph'
- [] Mobile/Responsive: front page 'graph'
- [] Desktop: front page 'facts'
- [] Mobile/Responsive: front page 'facts'

- [] The Challenge:
- 

- [] RECOMMENDATIONS:
- 

- [] CASE STUDIES (list view):
- 

- [] CASE STUDIES (full nodes):
- 

- [] ANIMATIONS:
- [] Tilt Images
- [] Lazy Load
- [] Parallax
- []

.fill {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
}
.fill img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
}


window.addEventListener("resize", function(){
   if(window.innerWidth < 768){
      console.log('narrow');
   }
   else{
       console.log('wide');
   }
});




### Global
Site Width: 1238px ?


### Colors
- #6A6C6E 'Nevada' or gray
- #904799 'Affair' or purple/pink
- #0055B8 'Endeavour' or blue
- #4DBFAA 'Puerto Rico' or teal
- #009E7E 'Free Speech Aquamarine' or aquamarine

### Fonts

Front page title (h1):
- same as Page Title, but #fff

Front page sub Title (h2):
- same as: Page Sub Title, but #fff


Section header h3:
- Gotham Black, Regular
- size: 60, lh: 66
- Colors:
  - 'Puerto Rico' theme
  - 'Affair' theme
  - 'Endeavour' theme
  - 'Nevada' theme (for graph)
Section header p:
- same as: Page Paragraphs
Section header CTA link:
- Gotham Black, Regular
- size: 20, lh: 32
- Colors:
  - 'Puerto Rico' theme
  - 'Affair' theme
  - 'Endeavour' theme
Section data number (span):

Section data suffix (span):

Section data text (p):



Graph Section h3:
- Gotham Black, Regular
- size: 60, lh: 66
- Color: Nevada theme
Section p:
- same as: Page Paragraphs
Section small p:
- same as: Page Paragraphs

Site Navigation Links: 
- Gotham Black, Regular
- size: 16, lh: auto/15
- #6A6C6E 'Nevada' or gray

Page Title (h1):
- Gotham Black, Regular
- size: 72, lh: 80
- Colors:
  - Case Studies: 'Affair'
  - The Challenge: 'Endeavour'

Page Sub Title (h2):
- Klinic Slab, Book
- size: 36, lh: 44
  - Case Studies: 'Affair'
  - The Challenge: 'Endeavour'

Page Heading Title (h3):
- Gotham Black, Regular
- size: 48, lh: 80
  - Case Studies: 'Affair'
  - The Challenge: 'Endeavour'

Page Heading Title (h4):
- Gotham Black, Regular
- size: 30, lh: 66
  - Case Studies: 'Affair'
  - The Challenge: 'Endeavour'

Page Paragraphs:
- Gotham Book, Regular
- size: 20, lh: 32
- Color: 'Nevada'

Page Quote:
- Klinic Slab, Book
- size: 36, lh: 44
- Indented (approx: 97px)
  - Case Studies: 'Affair'
  - The Challenge: 'Endeavour'

Small p (Small text for copyright and other places):
- Gotham Book, Regular
- size: 12, lh: 32
- Color: 'Nevada'