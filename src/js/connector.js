console.log("Hello World!");

// Init
window.TrelloPowerUp.initialize({
  'card-badges': function(t, opts) {
        let items = document.getElementsByClassName('list-card-details');
        let progress = 51;
        let container = document.createElement('div');
        container.setAttribute('class', 'checklist-progress-bar');
        let pbar = document.createElement('span');
        //pbar.setAttribute('class', 'card-progressbar');
        //pbar.setAttribute('value', listCompletion[0]);
        //pbar.setAttribute('max', listCompletion[1]);
        //pbar.setAttribute('style', 'width: 95%; height: 10px; background: green;');
        pbar.setAttribute('class', 'checklist-progress-bar-current js-checklist-progress-bar');
        pbar.setAttribute('style', 'width: '+progress+'%; background:#61BD4F;');
        container.setAttribute('style', 'margin:0; height: 6px; background: #FFF6F6;');
        container.appendChild(pbar);
        items[0].insertBefore(container, items[0].childNodes[2]);
      /*
      return t.card('all')
      .then(function(card) {
          console.log(card);
          return [{
              text: card.idShort
          }];
      })
      */
  }
})
