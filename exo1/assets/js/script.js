$(function(){
//déclaration du contexte et lien avec la zone du canvas
let canvas = document.getElementById('canvas1');
let context = canvas.getContext('2d');

//toit
context.fillStyle = '#CD853F';
context.beginPath();
context.moveTo(200,20);
context.lineTo(80,120);
context.lineTo(320,120);
context.lineTo(200, 20);
context.fill();
//façade
context.fillStyle = '#ADD8E6';
context.beginPath();
context.moveTo(80,120);
context.lineTo(80,360);
context.lineTo(320,360);
context.lineTo(320,120);
context.fill();
//fenetre de gauche
context.fillStyle = '#CACACA';
context.beginPath();
context.moveTo(100,140);
context.lineTo(140,140);
context.lineTo(140,180);
context.lineTo(100,180);
context.fill();
//fenetre de droite
context.fillStyle = '#CACACA';
context.beginPath();
context.moveTo(300,140);
context.lineTo(300,180);
context.lineTo(260,180);
context.lineTo(260,140);
context.fill();
//porte
context.fillStyle = '#CACACA';
context.beginPath();
context.moveTo(160,240);
context.lineTo(240,240);
context.lineTo(240,360);
context.lineTo(160,360);
context.fill();
});
