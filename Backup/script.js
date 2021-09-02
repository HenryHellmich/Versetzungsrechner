var anzahlFaecher = 13;
var anzahlKFaecher = 4;


var berechnen = function () {
    var list = [];
    var summe = 0;
    var error = 0;
    var kfaecher = [];
    var bestanden = "leer";
    for (var x=1;x<=anzahlFaecher;x++) {
        var tempvar = "#n" + x;
        var temp = document.querySelector(tempvar);
        list.push(parseInt(temp.value, 10));
    };
    for (var x = list.length - 1; x>=0; x--) {
        if (list[x] < 0) {
            error++;
            }
        else if (list[x] > 6) {
            error++;
            }
        else if (isNaN(list[x])) {
            error++;
        }
    }
    
    kfaecher = list.splice(0, anzahlKFaecher);

    var kc5 = 0;  
    var kc6 = 0;
    
    var gc5 = 0;
    var gc6 = 0;
    
    for(var i = 0; i < kfaecher.length; ++i){
        
            if(kfaecher[i] === 5) {
                kc5++;
            }
            if(kfaecher[i] === 6) {
                kc6++;
            }
            
        }
        
    for(var i = 0; i < list.length; ++i){
        
            if(list[i] === 5) {
                gc5++;
            }
            if(list[i] === 6) {
                gc6++;
            }
            
        }
        
    if ((kc6 > 0) || (gc6 > 1) || (kc5 > 1) || ((kc5 > 0) && (gc5 >1)) || (gc5 > 2)) {
        bestanden = "nicht versetzt";
    }
    else {
        ausgleichen(kfaecher);
        ausgleichen(list);
        
        kc5 = 0;
        kc6 = 0;
        
        for(var i = 0; i < kfaecher.length; ++i){
            if(kfaecher[i] === 5) {
                kc5++;
            }
            if(kfaecher[i] === 6) {
                kc6++;
            }
        }

        if (kc5 === 0 && kc6 === 0) {

            while (list.indexOf(1) !== -1) {
                list.splice(list.indexOf(1),1);
            }

            while (list.indexOf(2) !== -1) {
                list.splice(list.indexOf(2),1);
            }

            while (list.indexOf(3) !== -1) {
                list.splice(list.indexOf(3),1);
            }


            var merged = kfaecher.concat(list);    
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

            if (mc5 < 2 && mc6 === 0) {
                bestanden = "versetzt";
            }
            else {
                bestanden = "nicht versetzt";
            }
        }
        else {
            bestanden = "nicht versetzt";
        }
    }
    
    if (error === 0) {
        var erg = (summe / list.length);
        alert("Du wirst " + bestanden);
       }
       else {
        alert(error + " Fehler in der Eingabe. Bitte nur Zahlen von 1 - 6 eingeben!");
       }
     
    };
    
var ausgleichen = function(l) {
    
        var c1 = 0;
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
        
        if ((c6 > 0) && ((c2 >= 2) || (c1 >= 1))) {
            l.splice(l.indexOf(6),1);
            if (c2 >= 2) {
                l.splice(l.indexOf(2),1);
                l.splice(l.indexOf(2),1);
            }
            else {
                l.splice(l.indexOf(1),1);
            }
            ausgleichen(l);
        }
        else if ((c5 > 0) && ((c3 >= 2) || (c2 >= 1) || (c1 >= 1))) {
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