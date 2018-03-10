"use strict";

var content = [{
    "day": "0",
    "photo": "images/day-0.jpg",
    "label": "Dia chuvoso no Aeroporto do Rio"
}, {
    "day": "1",
    "photo": "images/day-1.jpg",
    "label": "Foto: Noite em Madrid - Paroquia de San Manuel e San Benito"
}, {
    "day": "2",
    "photo": "images/day-2.jpg",
    "label": "Foto: Templo de Debod - Madrid"
}, {
    "day": "3",
    "photo": "images/day-3.jpg",
    "label": "Foto: Estación Santa Justa - Sevilla"
}, {
    "day": "4",
    "photo": "images/day-4.jpg",
    "label": "Foto: Gato brincando com mini drone - Niebla"
}, {
    "day": "5",
    "photo": "images/day-5.jpg",
    "label": "Foto: Navio no Canal Afonso XIII - Sevilla"
}, {
    "day": "6",
    "photo": "images/day-6.jpg",
    "label": "Foto: Las Setas - Sevilla"
}, {
    "day": "7",
    "photo": "images/day-7.jpg",
    "label": "Foto: Torre Schindler - Sevilla"
}, {
    "day": "8",
    "photo": "images/day-8.jpg",
    "label": "Foto: Terreno de Finca Real - Niebla"
}, {
    "day": "9",
    "photo": "images/day-9.jpg",
    "label": "Foto: El Muelle del Tinto - Huelva"
}, {
    "day": "10",
    "photo": "images/day-10.jpg",
    "label": "Foto: Entardecer numa rua qualquer - Huelva"
}, {
    "day": "11",
    "photo": "images/day-11.jpg",
    "label": "Foto: Puente Nuevo - Ronda"
}, {
    "day": "12",
    "photo": "images/day-12.jpg",
    "label": "Foto: El Tajo Gorge - Ronda"
}, {
    "day": "13",
    "photo": "images/day-13.jpg",
    "label": "Foto: Centre Pompidou - Malága"
}, {
    "day": "14",
    "photo": "images/day-14.jpg",
    "label": "Foto: Visto do Castillo de Gibraltar - Malága"
}, {
    "day": "15",
    "photo": "images/day-15.jpg",
    "label": "Foto: Muelle Uno - Malága"
}, {
    "day": "16",
    "photo": "images/day-16.jpg",
    "label": "Foto: Alhambra/Alcazar - Granada"
}, {
    "day": "17",
    "photo": "images/day-17.jpg",
    "label": "Foto: Reflexo da Torre de Alhambra - Granada"
}, {
    "day": "18",
    "photo": "images/day-18.jpg",
    "label": "Foto: Luminárias em Lojas Árabes  - Granada"
}, {
    "day": "19",
    "photo": "images/day-19.jpg",
    "label": "Foto: Мonumento a las culturas del Mediterraneo - Torrevieja"
}, {
    "day": "20",
    "photo": "images/day-20.jpg",
    "label": "Foto: Laguna Rosa - Torrevieja"
}, {
    "day": "21",
    "photo": "images/day-21.jpg",
    "label": "Foto: Pier y Farola - Torrevieja"
}, {
    "day": "22",
    "photo": "images/day-22.jpg",
    "label": "Foto: Cliffs perto de La Mata - Torrevieja"
}, {
    "day": "23",
    "photo": "images/day-23.jpg",
    "label": "Foto: L'Hemisferic - Valencia"
}, {
    "day": "24",
    "photo": "images/day-24.jpg",
    "label": "Foto: L'Umbracle - Valencia"
}, {
    "day": "25",
    "photo": "images/day-25.jpg",
    "label": "Foto: Estrela do Mar no Oceanografic - Valencia"
}, {
    "day": "26",
    "photo": "images/day-26.jpg",
    "label": "Foto: Museu Guggenhein e Ponte de La Salve - Bilbao"
}, {
    "day": "27",
    "photo": "images/day-27.jpg",
    "label": "Foto: Estádio San Mamés Zelaia - Bilbao"
}, {
    "day": "28",
    "photo": "images/day-28.jpg",
    "label": "Foto: Puppy Guggenhein - Bilbao"
}, {
    "day": "29",
    "photo": "images/day-29.jpg",
    "label": "Foto: Gaztelugatxe - Bakio"
}, {
    "day": "30",
    "photo": "images/day-30.jpg",
    "label": "Foto: Feliz 6 meses sua chatinha! <3"
}, {
    "day": "31",
    "photo": "images/day-31.jpg",
    "label": "Foto: Aviso no Airbnb - Santander"
}, {
    "day": "32",
    "photo": "images/day-32.jpg",
    "label": "Foto: Vitrine diferente - Madrid (num tem pé =p)"
}, {
    "day": "33",
    "photo": "images/day-33.jpg",
    "label": "Foto: Pinguim Estiloso - Santander"
}, {
    "day": "34",
    "photo": "images/day-34.jpg",
    "label": "Foto: Cabo Mayor - Santander"
}, {
    "day": "35",
    "photo": "images/day-35.jpg",
    "label": "Foto: Cabo Mayor - Santander"
}, {
    "day": "36",
    "photo": "images/day-36.jpg",
    "label": "Foto: Lagos de Covadonga - Covadonga"
}, {
    "day": "37",
    "photo": "images/day-37.jpg",
    "label": "Foto: Santuário de Covadonga envolto em névoa - Covadonga"
}, {
    "day": "38",
    "photo": "images/day-38.jpg",
    "label": "Foto: Amigão - Oviedo"
}, {
    "day": "39",
    "photo": "images/day-39.jpg",
    "label": "Foto: Estátua da Mafalda - Oviedo"
}, {
    "day": "40",
    "photo": "images/day-40.jpg",
    "label": "Foto: Estande simpática no Airbnb - Santiago de Compostela"
}, {
    "day": "41",
    "photo": "images/day-41.jpg",
    "label": "Foto: Ruas estreitas - Santiago de Compostela"
}, {
    "day": "42",
    "photo": "images/day-42.jpg",
    "label": "Foto: Só trabalhei hoje, volte amanhã - Santiago de Compostela"
}, {
    "day": "43",
    "photo": "images/day-43.jpg",
    "label": "Foto: Uma das mil igrejas - Santiago de Compostela"
}, {
    "day": "44",
    "photo": "images/day-44.jpg",
    "label": "Foto: Sacada do meu Airbnb - Vigo"
}, {
    "day": "45",
    "photo": "images/day-45.jpg",
    "label": "Foto: Trabalhando num Starbucks qualquer - Vigo"
}, {
    "day": "46",
    "photo": "images/day-46.jpg",
    "label": "Foto: Mais um dia chuvoso - Vigo"
}, {
    "day": "47",
    "photo": "images/day-47.jpg",
    "label": "Foto: It's me Mario! - Vigo"
}, {
    "day": "48",
    "photo": "images/day-48.png",
    "label": "Foto: Só o que fiz no dia todo - Vigo/Madrid"
}, {
    "day": "49",
    "photo": "images/day-49.jpg",
    "label": "Foto: Templo de Debod - Madrid"
}, {
    "day": "50",
    "photo": "images/day-50.jpg",
    "label": "Foto: Sabre de Luz na Gran Via - Madrid"
}];

// LET LAST ITEM INSERT IN CONTENT TO TRANSFORM THIS IN SELECTED LABEL AT HTML TEMPLATE
var lastItemContent = content.length - 1;

var actualToday = content.length;

// TRY IF YOUR BROWSER SUPPORT HTML TEMPLATE CHECKING THE "CONTENT" ATTRIBUTE AT TEMPLATE ELEMENT
if ('content' in document.createElement('template')) {

    var label = document.querySelector('#photoLabel'),
        p = label.content.querySelector('.label-photo');
    p.textContent = content[lastItemContent].label;

    document.querySelector('.label-photo').appendChild(p);
}
//IF HTML TEMPLATE IS NOT SUPORTED USE THIS
else {

        // ALTERNATIVE METHOD TO INSERT LABEL AT PAGE
        document.querySelector('.label-photo').textContent = content[lastItemContent].label;
    }

// INSERT LAST NODE PHOTO VALUE IN BODY BACKGROUND
document.body.style.backgroundImage = "url(" + content[lastItemContent].photo + ")";

// REMOVE TEMPLATE FROM PAGE AFTER LOAD
function removeTemplate() {

    document.querySelector('template').remove();
}

window.onload = removeTemplate;
"use strict";
'use strict';

function containsSelector(selector) {
    return document.querySelector(selector) != null;
}

// INITIATE SLIDE PHOTOS FUNCTIONALITY
if (content.length > 1) {

    var nextPhoto = document.createElement('button');

    nextPhoto.classList.add('photo-next');

    nextPhoto.innerHTML = "next";

    var prevPhoto = document.createElement('button');

    prevPhoto.classList.add('photo-prev');

    prevPhoto.innerHTML = "prev";

    document.body.appendChild(prevPhoto);
}

if (containsSelector('.photo-prev')) {
    prevPhoto.addEventListener('click', function () {

        var dayShowed = actualToday -= 1;

        document.body.style.backgroundImage = "url(" + content[dayShowed - 1].photo + ")";

        document.querySelector('.label-photo').textContent = content[dayShowed - 1].label;

        document.body.appendChild(nextPhoto);

        if (dayShowed == 1) {

            prevPhoto.remove();
        }
    });

    nextPhoto.addEventListener('click', function () {

        var dayShowed = actualToday += 1;

        document.body.style.backgroundImage = "url(" + content[dayShowed - 1].photo + ")";

        document.querySelector('.label-photo').textContent = content[dayShowed - 1].label;

        document.body.appendChild(prevPhoto);

        if (dayShowed >= content.length) {

            nextPhoto.remove();
        }
    });
}
