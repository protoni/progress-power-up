console.log("Hello World!");

// Init
window.TrelloPowerUp.initialize({
  'card-badges': function(t, opts) {
        var container = document.createElement('div');
        container.setAttribute('class', 'checklist-progress-bar');
        var pbar = document.createElement('span');
        //pbar.setAttribute('class', 'card-progressbar');
        //pbar.setAttribute('value', listCompletion[0]);
        //pbar.setAttribute('max', listCompletion[1]);
        //pbar.setAttribute('style', 'width: 95%; height: 10px; background: green;');
        pbar.setAttribute('class', 'checklist-progress-bar-current js-checklist-progress-bar');
        pbar.setAttribute('style', 'width: '+progress+'%; background:#61BD4F;');
        container.setAttribute('style', 'margin:0; height: 6px; background: #FFF6F6;');
        container.appendChild(pbar);
        cards[0].insertBefore(container, cards[i].childNodes[2]);
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

window.addEventListener ("load", Greasemonkey_main, false);
function Greasemonkey_main () {
  var cards = document.getElementsByClassName('list-card-details');
  for (i = 0; i < cards.length; i++) {
    var checklistBadges = cards[i].getElementsByClassName('icon-checklist');
    if (checklistBadges.length > 0) {
      if (checklistBadges[0].parentNode.childNodes.length > 0) {
        var listCompletion = checklistBadges[0].parentNode.childNodes[1].innerHTML.split('/');
        var progress = 100*listCompletion[0]/listCompletion[1];
        if (progress == 100) return;
        var container = document.createElement('div');
        container.setAttribute('class', 'checklist-progress-bar');
        var pbar = document.createElement('span');
        //pbar.setAttribute('class', 'card-progressbar');
        //pbar.setAttribute('value', listCompletion[0]);
        //pbar.setAttribute('max', listCompletion[1]);
        //pbar.setAttribute('style', 'width: 95%; height: 10px; background: green;');
        pbar.setAttribute('class', 'checklist-progress-bar-current js-checklist-progress-bar');
        pbar.setAttribute('style', 'width: '+progress+'%; background:#61BD4F;');
        container.setAttribute('style', 'margin:0; height: 6px; background: #FFF6F6;');
        container.appendChild(pbar);
        cards[i].insertBefore(container, cards[i].childNodes[2]);
      }
    }
  }
}