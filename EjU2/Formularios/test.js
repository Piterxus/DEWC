// let ciudades = document.getElementById("ciudad");
// let municipios = document.getElementById("municipio");

// document.localities.cities.options.length=0;
// document.localities.cities.options[0]=new Option("Alicante","Alicante",true,false);
// document.localities.cities.options[1]=new Option("Castellón","Castellón",true,false);
// document.localities.cities.options[]=new Option("Valencia","Valencia",true,false);

let citieslist = document.localities.cities;
let municipilist = document.localities.municipality;

let municipalities = new Array();

municipalities[0] = "";
municipalities[1] = [
  "Alicante Capital|alicantecapitalvalue",
  "ELche|elchevalues",
  "Orihuela|orihuelavalue",
];
municipalities[2] = [
  "Castellón Capital|castelloncapitalvalue",
  "Oropesa|oropesacapital",
  "Vinaroz|vinarozcapital",
];
municipalities[3] = [
  "Valencia Capital|valenciacapitalvalue",
  "Torrent|torrentvalue",
  "Mislata|mislatavalue",
];

function updatecities(selectedcitygroup) {
  municipilist.options.length = 0;
  if (selectedcitygroup > 0) {
    for (i = 0; i < municipalities[selectedcitygroup].length; i++)
      municipilist.options[municipilist.options.length] = new Option(
        municipalities[selectedcitygroup][i].split("|")[0],
        municipalities[selectedcitygroup][i].split("|")[1]
      );
  }
}
