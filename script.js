var anzahlFaecher = 13;         //Alle F�cher
var anzahlKFaecher = 4;         //Kernf�cher


var berechnen = function (){                                // Funktion zur Berechnung des Durchschnitts
    var list = [];                      // Liste f�r Grundf�cher
    var kfaecher = [];                  // Liste f�r Kernf�cher
    var summe = 0;
    var error = 0;
    var bestanden = "leer";
    var note1 = document.getElementById("n1").value;        // Werte der Eingaben erhalten
    if (note1 <1 || note1 >6){                              // Pr�fen, ob der eingetragene Wert g�ltig ist
        alert("Der Wert in Eingabe 1 ist falsch");
    }
    var note2 = document.getElementById("n2").value;
    if (note2 <1 || note2 >6){
        alert("Der Wert in Eingabe 2 ist falsch");
    }
    var note3 = document.getElementById("n3").value;
    if (note3 <1 || note3 >6){
        alert("Der Wert in Eingabe 3 ist falsch");
    }
    var note4 = document.getElementById("n4").value;
    if (note4 <1 || note4 >6){
        alert("Der Wert in Eingabe 4 ist falsch");
    }
    var note5 = document.getElementById("n5").value;
    if (note5 <1 || note5 >6){
        alert("Der Wert in Eingabe 5 ist falsch");
    }
    var note6 = document.getElementById("n6").value;
    if (note6 <1 || note6 >6){
        alert("Der Wert in Eingabe 6 ist falsch");
    }
    var note7 = document.getElementById("n7").value;
    if (note7 <1 || note7 >6){
        alert("Der Wert in Eingabe 7 ist falsch");
    }
    var note8 = document.getElementById("n8").value;
    if (note8 <1 || note8 >6){
        alert("Der Wert in Eingabe 8 ist falsch");
    }
    var note9 = document.getElementById("n9").value;
    if (note9 <1 || note9 >6){
        alert("Der Wert in Eingabe 9 ist falsch");
    }
    var note10 = document.getElementById("n10").value;
    if (note10 <1 || note10 >6){
        alert("Der Wert in Eingabe 10 ist falsch");
    }
    var note11 = document.getElementById("n11").value;
    if (note11 <1 || note11 >6){
        alert("Der Wert in Eingabe 11 ist falsch");
    }
    var note12 = document.getElementById("n12").value;
    if (note12 <1 || note12 >6){
        alert("Der Wert in Eingabe 12 ist falsch");
    }
    var note13 = document.getElementById("n13").value;
    if (note13 <1 || note13 >6){
        alert("Der Wert in Eingabe 13 ist falsch");
    }
    if (1>note1>6 || 1>note2>6){
        alert("Fehler bei der Eingabe, bitte nur Zahlen von 1 - 6 eintragen");
    }
    var summe = parseInt(note1, 10) + parseInt(note2, 10) + parseInt(note3, 10) + parseInt(note4, 10)           // Werte der Eingabe in Zahlen formatieren, um sie verrechnen zu k�nnen
                + parseInt(note5, 10) + parseInt(note6, 10) + parseInt(note7, 10) + parseInt(note8, 10)
                + parseInt(note9, 10) + parseInt(note10, 10) + parseInt(note11, 10) + parseInt(note12, 10)
                + parseInt(note13, 10);
    var erg = summe / anzahlFaecher;            // Das Ergebniss durch die Anzahl der F�cher teilen
    let rund = erg.toFixed(2);                  // Auf 2 Nachkommerstellen runden
    alert("Notendurchschnitt: " + rund);        // Den gerundeten Wert ausgeben
    for (var x=1;x<=anzahlFaecher;x++) {            // Array mit Listeneintr�gen f�llen
        var tempvar = "#n" + x;
        var temp = document.querySelector(tempvar);
        list.push(parseInt(temp.value, anzahlFaecher));
    }
    kfaecher = list.splice (0, anzahlKFaecher);      //alert("Ausgabe" + list.length); =Listentest      Aufspalten in zwei Listen K&G F�cher

    var kc5 = 0;
    var kc6 = 0;
    var gc5 = 0;
    var gc6 = 0;

    for(var i = 0; i < kfaecher.length; ++i){       // F�nfen und Sechsen in der Kernf�cherliste z�hlen
        if(kfaecher[i] === 5) {
            kc5++;
        }
        if(kfaecher[i] === 6) {
            kc6++;
        }
    };
    for(var i = 0; i < list.length; ++i){           // F�nfen und Sechsen in der Grundf�cherliste z�hlen
        if(list[i] === 5) {
            gc5++;
        }
        if(list[i] === 6) {
            gc6++;
        }
    }
    if ((kc6 > 0) || (gc6 > 1) || (kc5 > 1) || ((kc5 > 0) && (gc5 >1)) || (gc5 > 2)) {      // direkte Nichtversetzung
        bestanden = "nicht versetzt";
    }
    else {
        ausgleichen(kfaecher);                      // Funktion zum Ausgleichen in den Kernf�chern
        ausgleichen(list);                          // Funktion zum Ausgleichen in den Grundf�chern

        var kc5 = 0;
        var kc6 = 0;

        for(var i = 0; i < kfaecher.length; ++i){           // Z�hlen der F�nfen und Sechsen
            if(kfaecher[i] === 5) {
                kc5++;
            }
            if(kfaecher[i] === 6) {
                kc6++;
            }
        }

        if (kc5 === 0 && kc6 === 0) {

            while (list.indexOf(1) !== -1) {                // Ausschneiden der Einsen, Zweien und Dreien
                list.splice(list.indexOf(1),1);
            }

            while (list.indexOf(2) !== -1) {
                list.splice(list.indexOf(2),1);
            }

            while (list.indexOf(3) !== -1) {
                list.splice(list.indexOf(3),1);
            }


            var merged = kfaecher.concat(list);                 // Zusammengef�gte Liste der F�nfen und Sechsen
            ausgleichen(merged);

            var mc5 = 0;
            var mc6 = 0;

            for(var i = 0; i < merged.length; ++i){
                if(merged[i] === 5) {
                    kc5++;
                }
                if(merged[i] === 6) {
                    kc6++;
                }
            }

            if (mc5 < 2 && mc6 === 0) {                         // Eine F�nf und keine Sechs
                bestanden = "versetzt";
            }
            else {
                bestanden = "nicht versetzt";
            }
        }
        else {
            bestanden = "nicht versetzt";
        }
    }                                                           // Ausabe der Versetzung
    if (error === 0) {
        var erg = (summe / list.length);
        alert("Du wirst " + bestanden);
       }
       else {
        alert(error + " Fehler in der Eingabe. Bitte nur Zahlen von 1 - 6 eingeben!");
       }
};


var ausgleichen = function(l) {                         // Funktion zur Ausgleichsberechnung

        var c1 = 0;                                     // Z�hlen der Noten, die Vier wird nicht ben�tigt
        var c2 = 0;
        var c3 = 0;
        var c5 = 0;
        var c6 = 0;
        for(var i = 0; i < l.length; ++i){
            if(l[i] === 1) {
                c1++;
            }
            if(l[i] === 2) {
                c2++;
            }
            if(l[i] === 3) {
                c3++;
            }
            if(l[i] === 5) {
                c5++;
            }
            if(l[i] === 6) {
                c6++;
            }
        }

        if ((c6 > 0) && ((c2 >= 2) || (c1 >= 1))) {             // Ausgleichen einer Sechs
            l.splice(l.indexOf(6),1);
            if (c2 >= 2) {
                l.splice(l.indexOf(2),1);
                l.splice(l.indexOf(2),1);
            }
            else {
                l.splice(l.indexOf(1),1);
            }
            ausgleichen(l);                                     // Neuer durchlauf
        }
        else if ((c5 > 0) && ((c3 >= 2) || (c2 >= 1) || (c1 >= 1))) {       //Ausgleich einer F�nf
            l.splice(l.indexOf(5), 1);
            if (c3 >= 2) {
                l.splice(l.indexOf(3),1);
                l.splice(l.indexOf(3),1);
            }
            else if (c2 >= 1) {
                l.splice(l.indexOf(2),1);
            }
            else {
                l.splice(l.indexOf(2),1);
            }
            ausgleichen(l);
        }
        else {
            return l;
        }
};
