document.addEventListener('DOMContentLoaded', function(){
  var startBtn = document.getElementById('start-challenge');
  var modal = document.getElementById('challenge-modal');
  var closeBtn = document.getElementById('modal-close');
  var acceptBtn = document.getElementById('accept-challenge');
  var declineBtn = document.getElementById('decline-challenge');

  if(startBtn){
    startBtn.addEventListener('click', function(){
      modal.setAttribute('aria-hidden', 'false');
    });
  }
  if(closeBtn){
    closeBtn.addEventListener('click', function(){
      modal.setAttribute('aria-hidden', 'true');
    });
  }
  if(declineBtn){
    declineBtn.addEventListener('click', function(){
      modal.setAttribute('aria-hidden', 'true');
    });
  }
  if(acceptBtn){
    acceptBtn.addEventListener('click', function(){
      modal.setAttribute('aria-hidden', 'true');
      var cups = Number(localStorage.getItem('fingrow_cups') || 234);
      cups += 50;
      localStorage.setItem('fingrow_cups', cups);
      updateCups(cups);
      showToast('+50 кубков начислено');
    });
  }

  function updateCups(value){
    var el = document.getElementById('stat-cups');
    if(el) el.textContent = value;
    var pb = document.getElementById('progress-bar');
    if(pb){
      var percent = Math.min(100, Math.round(value/300*100));
      pb.style.width = percent + '%';
    }
  }

  function showToast(text){
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = text;
    Object.assign(t.style,{
      position:'fixed',
      right:'20px',
      bottom:'20px',
      background:'#111827',
      color:'#fff',
      padding:'10px 14px',
      borderRadius:'10px',
      boxShadow:'0 8px 24px rgba(2,6,23,0.12)',
      zIndex:9999
    });
    document.body.appendChild(t);
    setTimeout(function(){ t.style.opacity='0'; t.style.transform='translateY(12px)'; },2200);
    setTimeout(function(){ document.body.removeChild(t); },3000);
  }

  updateCups(Number(localStorage.getItem('fingrow_cups') || 234));
});

function likePost(btn){
  var current = parseInt((btn.textContent || '').replace(/\D/g,'')) || 0;
  current++;
  btn.textContent = '❤ ' + current;
}

function startMiniGame(key){
  if(key==='economize'){
    var awarded = Math.floor(Math.random()*30)+10;
    var cups = Number(localStorage.getItem('fingrow_cups')||234);
    cups += awarded;
    localStorage.setItem('fingrow_cups', cups);
    alert('Ты заработал ' + awarded + ' кубков!');
    location.href = 'levels.html';
  } else if(key==='quiz'){
    alert('Викторина запущена (демо).');
  } else if(key==='budget'){
    alert('Бюджетная игра открыта (демо).');
  }
}
