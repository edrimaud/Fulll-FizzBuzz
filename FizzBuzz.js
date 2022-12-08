// Conteneur de l'affichage de nos itérations
var fizzBuzzContent = document.getElementById("fizzBuzzContent");

// Fonction qui calcule nos itérations et les affiche
function FizzBuzz(n) {
    clear();

    var iter3 = 0;
    var iter5 = 0;
    for (var i = 1; i <= n; i++) {
        var message = "";

        iter3++;
        iter5++;
        // A chaque fois que iter3 = 3, on a un multiple de 3
        if (iter3 == 3) {
            iter3 = 0;
            message += "Fizz";
        }
        // A chaque fois que iter3 = 3, on a un multiple de 3
        if (iter5 == 5) {
            iter5 = 0;
            message += "Buzz"
        }

        // Si mon message est vide, on a un multiple ni de 3 et ni de 5, donc on affiche le nombre
        if (!message) message += i;

        // On crée un élément span avec notre message
        var span = document.createElement("span");
        var text = document.createTextNode(message);
        span.appendChild(text);

        // Et on l'ajoute à fizzBuzzContent
        fizzBuzzContent.appendChild(span);
    }
}

// Fonction qui supprime tous les enfants de fizzBuzzContent un par un
function clear() {
    var child = fizzBuzzContent.firstChild;
    while (child) {
        child.remove();
        child = fizzBuzzContent.firstChild;
    }
}

// On récupère l'élément du formulaire et l'élément du champ à remplir
var form = document.getElementById("form");
var input = document.getElementById("input");

// Quand on appuie sur OK, ou la touche entrée, on soumet le formulaire
form.addEventListener("submit", (e) => {

    // On annule le comportement par défaut de la soumission
    e.preventDefault();

    // Lors de la soumission, on récupère le nombre et on l'envoie dans notre fonction FizzBuzz
    var number = parseInt(input.value);
    if (number && number > 0) FizzBuzz(number);
    else window.alert("Veuillez rentrer un numéro entier positif !!");
});