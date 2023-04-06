
/// <reference types="@types/google.maps" />

//https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import

// import { User } from './User';
// import { Company } from './Company';
// const user = new User();
// console.log(user);
// const company = new Company();
// console.log(company);

const mapElement = document.getElementById('map');
if (mapElement) {
new google.maps.Map(mapElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});
  console.log('Map element found')
} else {
  console.error('No map element found');
}
