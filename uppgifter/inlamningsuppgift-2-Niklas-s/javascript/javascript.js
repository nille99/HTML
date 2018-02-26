//---------------------------------------------------
// funktion för att skapa en Multiplikationstabell 1 to 100
//---------------------------------------------------

function multiptable() {
    // varabel för innehållet till Multiplikationstabell
    var p = "";
    //var p =  document.getElementById("multiTable");
    //for sats för y axel
    for (var y = 1; y < 11; y++) {
        //ny rad efter varje y 
        p += "<tr>";
        //for sats för x axel
        for (var x = 1; x < 11; x++) {
            //multiplikation in i tabelen cell
            p += "<td>" + x * y + "</td>";
        }
        //slut på rad
        p += "</tr>";
    }
    // Hämta innehållet i varabel p till table multiTable
    document.getElementById("multiTable").innerHTML = p;
}

//---------------------------------------------------
// funktion som utför uträkningar till miniräknaren
//---------------------------------------------------
function sumFunction() {
    //  koppla textruta display värdet till varabeln input
    var input = document.getElementById("display").value;
    // Hänta uträkningen från input till p-tagen calculation
    document.getElementById("calculation").innerHTML = "Beräkning: " + input + "=" + eval(input);
    // räknar ut och hänta resultatet från variabeln input till textrutan display
    document.getElementById("display").value = eval(input); //eval räknat ut string
}
// Funktion kopplat till knappen + för att läggat till "+"
function add() {
    var input = document.getElementById("display").value;
    // Sista tecknet i stringen i input 
    var lastchar = (input.charAt(input.length - 1));
    // För att undvika flera matematiska uttryck efter varandra så ersätts den senaste med val matematiska uttryck
    if ((lastchar == "+") || (lastchar == "-") || (lastchar == "*") || (lastchar == "/")) {
        //Ta bort den sista tecknet i stringen i input
        input = input.slice(0, -1).trim();
        document.getElementById("display").value = input + "+";
    } else {
        document.getElementById("display").value += "+";
    }

}
// Funktion kopplat till knappen - för att läggat till "-"
function sub() {
    var input = document.getElementById("display").value;
    // Sista tecknet i stringen i input 
    var lastchar = (input.charAt(input.length - 1));
    // För att undvika flera matematiska uttryck efter varandra så ersätts den senaste med val matematiska uttryck
    if ((lastchar == "+") || (lastchar == "-") || (lastchar == "*") || (lastchar == "/")) {
        //Ta bort den sista tecknet i stringen i input
        input = input.slice(0, -1).trim();
        document.getElementById("display").value = input + "-";
    } else {
        document.getElementById("display").value += "-";
    }
}
// Funktion kopplat till knappen * för att läggat till "*"
function mul() {
    var input = document.getElementById("display").value;
    // Sista tecknet i stringen i input 
    var lastchar = (input.charAt(input.length - 1));
    // För att undvika flera matematiska uttryck efter varandra så ersätts den senaste med val matematiska uttryck
    if ((lastchar == "+") || (lastchar == "-") || (lastchar == "*") || (lastchar == "/")) {
        //Ta bort den sista tecknet i stringen i input
        input = input.slice(0, -1).trim();
        document.getElementById("display").value = input + "*";
    } else {
        document.getElementById("display").value += "*";
    }
}
// Funktion kopplat till knappen ÷ för att läggat till "/"
function dev() {
    var input = document.getElementById("display").value;
    // Sista tecknet i stringen i input 
    var lastchar = (input.charAt(input.length - 1));
    // För att undvika flera matematiska uttryck efter varandra så ersätts den senaste med val matematiska uttryck
    if ((lastchar == "+") || (lastchar == "-") || (lastchar == "*") || (lastchar == "/")) {
        //Ta bort den sista tecknet i stringen i input
        input = input.slice(0, -1).trim();
        document.getElementById("display").value = input + "/";
    } else {
        document.getElementById("display").value += "/";
    }
}
// Funktion kopplat till knappen 1 för att läggat till "1"
function one() {
    document.getElementById("display").value += "1";
}
// Funktion kopplat till knappen 3 för att läggat till "3"
function two() {
    document.getElementById("display").value += "2";
}
// Funktion kopplat till knappen 4 för att läggat till "4"
function three() {
    document.getElementById("display").value += "3";
}
// Funktion kopplat till knappen 5 för att läggat till "5"
function four() {
    document.getElementById("display").value += "4";
}
// Funktion kopplat till knappen 5 för att läggat till "5"
function five() {
    document.getElementById("display").value += "5";
}
// Funktion kopplat till knappen 6 för att läggat till "6"
function six() {
    document.getElementById("display").value += "6";
}
// Funktion kopplat till knappen 7 för att läggat till "7"
function seven() {
    document.getElementById("display").value += "7";
}
// Funktion kopplat till knappen 8 för att läggat till "8"
function eight() {
    document.getElementById("display").value += "8";
}
// Funktion kopplat till knappen 9 för att läggat till "9"
function nine() {
    document.getElementById("display").value += "9";
}
// Funktion kopplat till knappen , för att läggat till "."    
function comma() {
    document.getElementById("display").value += ".";
}
// Funktion kopplat till knappen 0 för att läggat till "0"
function zero() {
    document.getElementById("display").value += "0";
}
// Funktion kopplat till knappen c för att läggat tömma
function c() {
    document.getElementById("display").value = "";
    document.getElementById("calculation").innerHTML = "Beräkning: ";
}
