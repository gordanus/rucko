const ingredients = [];
const recipes = [
{
name: "Sarma",
ingredients: ["mleveno meso", "pirinač", "crni luk", "listići kiselog kupusa","kiseli kupus", "aleva paprika", "so", "biber", "ulje", "dimljeno meso"],
details: "Sastojci: <br>500g mlevenog mesa, 100g pirinča, 1 glavica crnog luka, 1 glavica kiselog kupusa (listovi), 1 kašičica aleve paprike, so i biber po ukusu, 2 kašike ulja, 200g dimljenog mesa. Propržiti crni luk, pomešati sa mlevenim mesom, pirinčem i začinima. Uviti u listiće kiselog kupusa, ređati sa dimljenim mesom, preliti vodom i kuvati 2-3 sata."
},
{
name: "Ćevapi",
ingredients: ["mlevena junetina", "mlevena svinjetina", "beli luk", "soda bikarbona", "so", "biber"],
details: "Sastojci: <br>500g mlevene junetine, 100g mlevene svinjetine, 2 čena belog luka, 1 kašičica sode bikarbone, so i biber po ukusu. Sve sastojke izmešati, oblikovati u male kobasice i ostaviti u frižideru. Peći na roštilju dok ne porumene."
},
{
name: "Prebranac",
ingredients: ["beli pasulj", "crni luk", "beli luk", "aleva paprika", "lovorov list", "ulje", "so", "biber"],
details: "Sastojci: <br>500g belog pasulja, 2 glavice crnog luka, 2 čena belog luka, 1 kašičica aleve paprike, 1 lovorov list, 100ml ulja, so i biber po ukusu. Potopiti pasulj preko noći, kuvati dok ne omekša. Propržiti crni i beli luk sa alevom paprikom, ređati sa pasuljem i peći na 200°C 30 minuta."
},
{
name: "Ajvar",
ingredients: ["crvene paprike", "ljute paprike", "ulje", "so"],
details: "Sastojci: <br>10kg crvenih paprika, 2-3 ljute paprike, 1l ulja, so po ukusu. Ispeći i oljuštiti paprike, samleti ih, kuvati uz mešanje, postepeno dodavati ulje i sipati vruće u tegle."
},
{
name: "Punjene Paprike",
ingredients: ["paprike babure", "mleveno meso", "pirinač", "crni luk", "beli luk", "aleva paprika", "so", "biber", "paradajz sos"],
details: "Sastojci: <br>8 paprika babura, 500g mlevenog mesa, 100g pirinča, 1 glavica crnog luka, 1 čen belog luka, 1 kašičica aleve paprike, so i biber po ukusu, 1l paradajz sosa. Napuniti paprike mešavinom mesa, pirinča i začina. Kuvati u paradajz sosu 1,5 sat."
},
{
name: "Karađorđeva Šnicla",
ingredients: ["teleće ili svinjsko meso", "kajmak", "jaja", "brašno", "prezle", "so", "biber", "ulje"],
details: "Sastojci: <br>4 teleće ili svinjske šnicle, 200g kajmaka, 2 jaja, 100g brašna, 100g prezli, so i biber po ukusu, ulje za prženje. Istucati meso, napuniti kajmakom, uviti, uvaljati u brašno, jaje i prezle, pa ispržiti do zlatne boje."
},
{
name: "Musaka",
ingredients: ["mleveno meso", "krompir", "crni luk", "jaja", "mleko", "ulje", "so", "biber"],
details: "Sastojci: <br>500g mlevenog mesa, 1kg krompira, 1 glavica crnog luka, 2 jaja, 200ml mleka, 2 kašike ulja, so i biber po ukusu. Ređati krompir i meso u pleh, preliti mešavinom jaja i mleka, peći na 200°C 40 minuta."
},
{
name: "Leskovačka Mućkalica",
ingredients: ["svinjetina", "crni luk", "paprike", "paradajz", "ljuta paprika", "aleva paprika", "so", "biber", "ulje"],
details: "Sastojci: <br>500g svinjetine, 2 glavice crnog luka, 2 paprike, 2 paradajza, 1 ljuta paprika, 1 kašičica aleve paprike, so i biber po ukusu, 100ml ulja. Kuvati svinjetinu, luk, paprike i paradajz sa začinima na tihoj vatri dok ne omekšaju."
},
{
name: "Gravče na Tavče",
ingredients: ["beli pasulj", "crni luk", "šargarepa", "aleva paprika", "brašno", "so", "biber", "ulje"],
details: "Sastojci: <br>500g belog pasulja, 2 glavice crnog luka, 1 šargarepa, 1 kašičica aleve paprike, 1 kašika brašna, so i biber po ukusu, 100ml ulja. Skuvati pasulj, pomešati sa proprženim lukom i šargarepom, peći na 200°C 30 minuta."
},
{
name: "Proja",
ingredients: ["kukuruzno brašno", "belo brašno", "jogurt", "jaja", "prašak za pecivo", "sir"],
details: "Sastojci: <br>2 šolje kukuruznog brašna, 1 šolja belog brašna, 1 šolja jogurta, 2 jaja, 1 prašak za pecivo, 100g sira. Pomešati sve sastojke, sipati u podmazan pleh i peći na 200°C dok ne porumeni."
},
{
name: "Podvarak",
ingredients: ["kiseli kupus", "svinjsko meso", "crni luk", "mast", "aleva paprika", "so", "biber"],
details: "Sastojci: <br>1kg kiselog kupusa, 500g svinjskog mesa, 2 glavice crnog luka, 2 kašike masti, 1 kašičica aleve paprike, so i biber po ukusu. Propržiti luk na masti, dodati kupus i meso, pa peći u rerni na 180°C 2 sata."
},
{
name: "Čorbast Pasulj",
ingredients: ["pasulj", "crni luk", "šargarepa", "paradajz", "suvo meso", "aleva paprika", "so", "biber"],
details: "Sastojci: <br>500g pasulja, 2 glavice crnog luka, 2 šargarepe, 2 paradajza, 300g suvog mesa, 1 kašičica aleve paprike, so i biber po ukusu. Kuvati pasulj sa mesom i povrćem dok ne omekša."
},
{
name: "Pasulj sa Kobasicom",
ingredients: ["pasulj", "kobasica", "crni luk", "šargarepa", "aleva paprika", "so", "biber", "lovorov list"],
details: "Sastojci: <br>500g pasulja, 300g kobasice, 2 glavice crnog luka, 2 šargarepe, 1 kašičica aleve paprike, so i biber po ukusu, 1 lovorov list. Kuvati pasulj dok ne omekša, dodati proprženi luk, šargarepu i kobasicu, i začiniti."
},
{
name: "Šopska Salata",
ingredients: ["paradajz", "krastavac", "paprika", "crni luk", "feta sir", "ulje", "so"],
details: "Sastojci: <br>3 paradajza, 2 krastavca, 2 paprike, 1 glavica crnog luka, 200g feta sira, 2 kašike ulja, so po ukusu. Iseckati povrće, posuti sirom i začiniti uljem i solju."
},
{
name: "Pileći Paprikaš",
ingredients: ["piletina", "crni luk", "paradajz", "paprika", "aleva paprika", "ulje", "so", "biber"],
details: "Sastojci: <br>500g piletine, 2 glavice crnog luka, 3 paradajza, 2 paprike, 1 kašičica aleve paprike, 3 kašike ulja, so i biber po ukusu. Propržiti piletinu, dodati povrće i kuvati dok ne omekša."
},
{
name: "Krompir Paprikaš",
ingredients: ["krompir", "crni luk", "paprika", "aleva paprika", "ulje", "so", "biber"],
details: "Sastojci: <br>1kg krompira, 2 glavice crnog luka, 2 paprike, 1 kašičica aleve paprike, 3 kašike ulja, so i biber po ukusu. Kuvati krompir sa lukom i paprikom dok ne omekša."
},
{
name: "Punjene Tikvice",
ingredients: ["tikvice", "mleveno meso", "pirinač", "crni luk", "paradajz sos", "so", "biber"],
details: "Sastojci: <br>4 tikvice, 300g mlevenog mesa, 100g pirinča, 1 glavica crnog luka, 1 šolja paradajz sosa, so i biber po ukusu. Tikvice izdubiti, napuniti filom i peći u rerni na 200°C."
},
{
name: "Riblja Čorba",
ingredients: ["riba", "crni luk", "šargarepa", "celer", "paradajz", "aleva paprika", "so", "biber"],
details: "Sastojci: <br>500g ribe, 2 glavice crnog luka, 2 šargarepe, 1 celer, 2 paradajza, 1 kašičica aleve paprike, so i biber po ukusu. Kuvati ribu sa povrćem i začiniti po ukusu."
},
{
name: "Pohovani Kačkavalj",
ingredients: ["kačkavalj", "brašno", "jaja", "prezle", "ulje", "so"],
details: "Sastojci: <br>300g kačkavalja, 100g brašna, 2 jaja, 100g prezli, ulje za prženje, so po ukusu. Kačkavalj pohovati u brašnu, jajima i prezlama, pa pržiti dok ne porumeni."
},
{
name: "Svinjski Gulaš",
ingredients: ["svinjetina", "crni luk", "paradajz", "paprika", "aleva paprika", "so", "biber"],
details: "Sastojci: <br>500g svinjetine, 2 glavice crnog luka, 2 paradajza, 2 paprike, 1 kašičica aleve paprike, so i biber po ukusu. Kuvati meso sa povrćem dok ne omekša."
},
{
name: "Tikvice na Žaru",
ingredients: ["tikvice", "maslinovo ulje", "beli luk", "so", "biber"],
details: "Sastojci: <br>3 tikvice, 3 kašike maslinovog ulja, 2 čena belog luka, so i biber po ukusu. Tikvice ispeći na žaru i preliti uljem sa belim lukom."
},
{
name: "Rolat od Mesa",
ingredients: ["mleveno meso", "jaja", "kisela pavlaka", "prezle", "so", "biber"],
details: "Sastojci: <br>500g mlevenog mesa, 2 jaja, 2 kašike kisele pavlake, 100g prezli, so i biber po ukusu. Oblikovati rolat i peći u rerni na 200°C."
},
{
name: "Pita sa Povrćem",
ingredients: ["kore za pitu", "spanać", "sir", "jaja", "jogurt", "ulje"],
details: "Sastojci: <br>500g kora za pitu, 300g spanaća, 200g sira, 2 jaja, 1 šolja jogurta, 2 kašike ulja. Ređati kore i filovati, pa peći u rerni na 200°C."
},
{
name: "Grilovane Paprike",
ingredients: ["paprike", "maslinovo ulje", "beli luk", "sirće", "so"],
details: "Sastojci: <br>6 paprika, 3 kašike maslinovog ulja, 2 čena belog luka, 1 kašika sirćeta, so po ukusu. Ispeći paprike, oljuštiti i preliti marinadom."
},
{
name: "Domaći Hleb",
ingredients: ["brašno", "kvasac", "voda", "so"],
details: "Sastojci: <br>500g brašna, 1 kesica suvog kvasca, 300ml vode, 1 kašičica soli. Zamesiti testo, ostaviti da naraste, pa peći na 200°C."
},
{
name: "Pilav",
ingredients: ["pirinač", "piletina", "crni luk", "šargarepa", "ulje", "so", "biber"],
details: "Sastojci: <br>300g pirinča, 500g piletine, 2 glavice crnog luka, 2 šargarepe, 3 kašike ulja, so i biber po ukusu. Kuvati pirinač sa piletinom i povrćem dok ne omekša."
},
{
name: "Punjene Paprike sa Povrćem",
ingredients: ["paprike", "pirinač", "šargarepa", "crni luk", "paradajz", "so", "biber"],
details: "Sastojci: <br>6 paprika, 200g pirinča, 2 šargarepe, 1 glavica crnog luka, 2 paradajza, so i biber po ukusu. Napuniti paprike i kuvati u paradajz sosu."
}
];

function addIngredient() {
    const ingredientInput = document.getElementById('ingredient');
    const ingredient = ingredientInput.value.trim().toLowerCase();

    if (ingredient && !ingredients.includes(ingredient)) {
        ingredients.push(ingredient);
        updateIngredientList();
    };

    ingredientInput.value = '';
}

function updateIngredientList() {
    const ingredientList = document.getElementById('ingredient-list');
    ingredientList.innerHTML = '';

    ingredients.forEach((ingredient, index) => {
        const li = document.createElement('li');
        li.textContent = ingredient;

        const removeButton = document.createElement('span');
        removeButton.textContent = '✖';
        removeButton.className = 'remove';
        removeButton.onclick = () => removeIngredient(index);

        li.appendChild(removeButton);
        ingredientList.appendChild(li);
    });
}

function removeIngredient(index) {
    ingredients.splice(index, 1);
    updateIngredientList();
}

function resetIngredients() {
    ingredients.length = 0;
    updateIngredientList();
}

function suggestRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    const matchingRecipes = recipes.filter(recipe => 
        recipe.ingredients.some(ing => ingredients.some(inputIng => ing.includes(inputIng)))
    );

    if (matchingRecipes.length > 0) {
        matchingRecipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe.name;
            li.className = 'recipe-item';
            li.onclick = () => showRecipeDetails(recipe);
            recipeList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "Nisu pronadjeni recepti sa dodatim sastojcima.";
        recipeList.appendChild(li);
    }
    document.getElementById('scroll-to').scrollIntoView();

}

function showRecipeDetails(recipe) {
    const recipeDetails = document.getElementById('recipe-details');
    recipeDetails.style.display = 'block';
    recipeDetails.innerHTML = `<h3>${recipe.name}</h3><p>${recipe.details}</p>`;
    document.getElementById('recipe-details').scrollIntoView();
}