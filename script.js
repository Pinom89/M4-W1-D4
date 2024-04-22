
let eminem = document.getElementById("eminem");
let queen = document.getElementById("queen");
let metallica = document.getElementById("metallica");







// test estrazione fech singole
fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`)
    .then(response => {
        // Controlla se la risposta è stata ricevuta correttamente (codice di stato HTTP 200-299)
        if (!response.ok) {
            throw new Error('Errore nella richiesta');
        }
        // Parsifica la risposta JSON
        return response.json();
    })
    .then(data => {
        // Esegui azioni con i dati ottenuti
        console.log(data);
    })
    .catch(error => {
        // Gestisci gli errori
        console.error('Si è verificato un errore:', error);
    });


    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica`)
    .then(response => {
        // Controlla se la risposta è stata ricevuta correttamente (codice di stato HTTP 200-299)
        if (!response.ok) {
            throw new Error('Errore nella richiesta');
        }
        // Parsifica la risposta JSON
        return response.json();
    })
    .then(data => {
        // Esegui azioni con i dati ottenuti
        console.log(data);
    })
    .catch(error => {
        // Gestisci gli errori
        console.error('Si è verificato un errore:', error);
    });

    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`)
    .then(response => {
        // Controlla se la risposta è stata ricevuta correttamente (codice di stato HTTP 200-299)
        if (!response.ok) {
            throw new Error('Errore nella richiesta');
        }
        // Parsifica la risposta JSON
        return response.json();
    })
    .then(data => {
        // Esegui azioni con i dati ottenuti
        console.log(data);
    })
    .catch(error => {
        // Gestisci gli errori
        console.error('Si è verificato un errore:', error);
    });
 
// fine test 

    //Selezioni tutte le row dove mostrerò il contenuto di default
const artistiPresenti = document.querySelectorAll('.mostrarisultati');
 console.log(artistiPresenti);
function search(){  
    
    //Prendo il valore 
    const input = document.getElementById('searchField').value;
        // verifico cosa ha inserito l'utente nella barra di ricerca
        console.log(input);
        fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${input}`)
        //trasformo il risutat in json
        .then(response => response.json())
        .then(data => {
            // Estraggo i dati necessari dal JSON
            const canzoni = data.data;
            const container = document.getElementById('searchSection');
            canzoni.forEach(canzone => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${canzone.album.cover}" alt="${canzone.title}">
                <h3 style= color:white;>${canzone.title}</h3>
                <p style= color:white;>${canzone.artist.name}</p>
                <p style= color:white;>${canzone.album.title}</p>
                `;
            container.appendChild(card);
            document.getElementById('found').classList.remove('d-none');
            });
        });
    
    artistiPresenti.forEach(artista => {
      //Estraggo da ogni risultato mi estraggo l'id dato che equivale al nome dell'artista
       let nomeArtista= artista.id;
       document.getElementById(nomeArtista).classList.add('d-none');
    });  
}

//Elaboro gli elementi che ho ottenuto
artistiPresenti.forEach(artista => {
    
    //Estraggo da ogni risultato mi estraggo l'id dato che equivale al nome dell'artista
     let nomeArtista= artista.id;
     
     //Inietto il nome dell'artista 
     fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${nomeArtista}`)
     
     //trasformo il risutati in oggetto
     .then(response => response.json())

      //Do un nome all'oggetto chiamandolo 'braniOttenuti' e lo elaboro
     .then(braniOttenuti => {

        //Dall'oggetto braniOttenuti prendo i "data"
        let canzoni = braniOttenuti.data;

        //Prendo il nome nomeArtista+'Section' e lo unisco ottenendo il nome dell'id
        let container = document.getElementById(nomeArtista+'Section');
        canzoni.forEach(canzone => {

          //Per ogni card elaboro il contenuto
          let card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
            <img src="${canzone.album.cover}" alt="${canzone.title}">
            <h3>${canzone.title}</h3>
            <p>${canzone.artist.name}</p>
            <p>${canzone.album.title}</p>
            `;
          container.appendChild(card);
          document.getElementById(nomeArtista).classList.remove('d-none');
        });
      })
});

function cancella () {
   // Rimuovi tutti gli elementi all'interno del contenitore dei risultati
   const container = document.getElementById('searchSection');
   container.innerHTML = '';
   // Nascondi l'elemento che mostra i risultati trovati
   document.getElementById('found').classList.add('d-none');
   // 
  // cancello valore presente nel placeholder "search"
  const searchField = document.getElementById('searchField');
  searchField.value = "";
  // riattivo le classi rimosse 
  
  if (eminem.classList.contains('mostrarisultati')) {
      eminem.classList.remove('d-none');
}

if (queen.classList.contains('mostrarisultati')) {
    queen.classList.remove('d-none');
}
if (metallica.classList.contains('mostrarisultati')) {
    metallica.classList.remove('d-none');
}
}

