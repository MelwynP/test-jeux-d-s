let jeux = 0;
let lancer = 0;
let sommeJ1 = 0;
let sommeJ2 = 0;
let scoreTotalJ1
let scoreTotalJ2 

function laMainJ1(){
  jeux = 1;
  document.getElementById('laMainJ2').style.visibility='hidden';
  document.getElementById('laMainJ1').style.visibility='visible';
}

function laMainJ2(){
  jeux = 2;
  document.getElementById('laMainJ1').style.visibility='hidden';
  document.getElementById('laMainJ2').style.visibility='visible';
}

function joueur1 () {
  if (lancer == 2) {
    document.getElementById('imageDes').src = '/des/dice-2.png';
    laMainJ1 ()
    sommeJ1 = sommeJ1 + lancer;
    document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
  }
  else if (lancer == 3) {
    document.getElementById('imageDes').src = '/des/dice-3.png';
    laMainJ1 ()
    sommeJ1 = sommeJ1 + lancer;
    document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
  }
  else if (lancer == 4) {
    document.getElementById('imageDes').src = '/des/dice-4.png';
    laMainJ1 ()
    sommeJ1 = sommeJ1 + lancer;
    document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
  }
  else if (lancer == 5) {
    document.getElementById('imageDes').src = '/des/dice-5.png';
    laMainJ1 ()
    sommeJ1 = sommeJ1 + lancer;
    document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
  }
  else if (lancer == 6) {
    document.getElementById('imageDes').src = '/des/dice-6.png';
    laMainJ1 ()
    sommeJ1 = sommeJ1 + lancer;
    document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
  }
  else {
    document.getElementById('imageDes').src = '/des/dice-1.png';
    laMainJ2 ()
    sommeJ1 = 0;
    document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
    joueur2()
  }
}

function joueur2 () {
  if (lancer == 2) {
    document.getElementById('imageDes').src = '/des/dice-2.png';
    laMainJ2()
    sommeJ2 = sommeJ2 + lancer;
    document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
  }
  else if (lancer == 3) {
    document.getElementById('imageDes').src = '/des/dice-3.png';
    laMainJ2()
    sommeJ2 = sommeJ2 + lancer;
    document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
  }
  else if (lancer == 4) {
    document.getElementById('imageDes').src = '/des/dice-4.png';
    laMainJ2()
    sommeJ2 = sommeJ2 + lancer;
    document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
  }
  else if (lancer == 5) {
    document.getElementById('imageDes').src = '/des/dice-5.png';
    laMainJ2()
    sommeJ2 = sommeJ2 + lancer;
    document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
  }
  else if (lancer == 6) {
    document.getElementById('imageDes').src = '/des/dice-6.png';
    laMainJ2()
    sommeJ2 = sommeJ2 + lancer;
    document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
  }
  else {
    document.getElementById('imageDes').src = '/des/dice-1.png';
    sommeJ2 = 0;
    document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
    laMainJ1()
    joueur1()
  }
}



function nouvellePartie() {
  laMainJ1 ()
  sommeJ1 = 0;
  sommeJ2 = 0;
  scoreTotalJ1 = 0;
  scoreTotalJ2 = 0;
  document.getElementById('scoreTempoJ1').innerHTML =  0;
  document.getElementById('scoreTempoJ2').innerHTML =  0;
  document.getElementById('scoreTotalJ1').innerHTML =  0;
  document.getElementById('scoreTotalJ2').innerHTML =  0;
  document.getElementById('imageDes').src = "/des/dice-0.png";
}

function lancerDes() {
    lancer = Math.floor(Math.random() * 6) + 1;
    if (jeux == 1) {
      joueur1 ();
    }
    else {
      joueur2 ();
    }
}

function hold() {
  if(jeux == 1){
    scoreTotalJ1 = sommeJ1 + scoreTotalJ1;
    document.getElementById('scoreTotalJ1').innerHTML = scoreTotalJ1;
    sommeJ1 = 0;
    document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
    laMainJ2()
    victoire ()
  }
  else {
    scoreTotalJ2 = sommeJ2 + scoreTotalJ2;
    document.getElementById('scoreTotalJ2').innerHTML = scoreTotalJ2;
    sommeJ2 = 0;
    document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
    laMainJ1()
    victoire ()
  }
}

//inversion des messages d'alertes ??
function victoire () {
  if (scoreTotalJ1 >= 10) {
    alert ('Le joueur 1 gagne avec un score total de ' + scoreTotalJ1 + ' points');
    alert ('FIN DE LA PARTIE \nCLIQUER SUR "NEW GAME" POUR RECOMMENCER');
  }
  else if (scoreTotalJ2 >= 10) {
    alert ('Le joueur 2 gagne  avec un score total de ' + scoreTotalJ2 + ' points');
    alert ('FIN DE LA PARTIE \nCLIQUER SUR "NEW GAME" POUR RECOMMENCER');
  }
}