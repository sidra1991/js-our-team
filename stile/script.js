// Viene fornito un layout di base. 
// ---------------
const post = [
    {
        "cover" :"img/wayne-barnett-founder-ceo.jpg",
        "name" : "Wayne Barnett",
        "role" : "Founder & CEO",
    },
    {
        "cover" :"img/angela-caroll-chief-editor.jpg",
        "name" : "Angela Caroll",
        "role" : "chief editor",
    },
    {
        "cover" :"img/walter-gordon-office-manager.jpg",
        "name" : "Walter Gordon",
        "role" : "Office manager",
    },
    {
        "cover":"img/angela-lopez-social-media-manager.jpg",
        "name" : "Angela Loperz",
        "role" : "Social Media Manager",
    },    
    {
        "cover" :"img/scott-estrada-developer.jpg",
        "name" : "Scot estrada",
        "role" : "Developer",
    },
    {
        "cover" :"img/barbara-ramos-graphic-designer.jpg",
        "name" : "Barbara ramos",
        "role" : "Graphic Designer",
    },
]


// Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

const container = document.querySelector(`.team-container`);

for (let i = 0; i < post.length; i++) {
    container.innerHTML +=
        `<div class="team-card">
            <div class="card-image">
                <img
                    src=${post[i].cover}
                    alt=${post[i].name}
                />
            </div>
            <div class="card-text">
                <h3>${post[i].name}</h3>
                <p>${post[i].role}</p>
            </div>
        </div>`
    ;

}


// Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.


// BONUS:
// Utilizziamo gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall'utente.





// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.