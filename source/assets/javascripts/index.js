import 'jquery';
import 'bootstrap';

const current = document.location.pathname.split('/')[1];

const tabs = document.querySelectorAll('.tab');

Array.from(tabs).forEach(function(el) {
  const truncatedHref = el.href.split('/')[3];
  if (truncatedHref === current) {
    el.classList.add('active');
  }
});

function initMap() {
  const cabinet = { lat: 43.477026, lng: -1.506039 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: cabinet,
  });
  const marker = new google.maps.Marker({
  position: cabinet,
  map,
  });
}

global.initMap = initMap;
