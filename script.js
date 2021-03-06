var scores,roundScores,active,gamePlaying;
 init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    var dice = Math.floor(Math.random()*6)+1;
    var diceDom = document.querySelector('.dice');
    diceDom.src = 'dice-' + dice +'.png';
    diceDom.style.display = 'block';
    
    if(dice !== 1){
        roundScores+=dice;
        document.querySelector('#current-'+active).textContent=roundScores;
        
    }
    else{
        nextPlayer();
    }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[active] += roundScores;
    
    document.querySelector('#score-'+active).textContent=scores[active];
    
    
    
    if(scores[active]>=100){
        document.querySelector('#name-'+active).textContent="Winner";
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+active+'-panel').classList.add('winner');
        document.querySelector('.player-'+active+'-panel').classList.remove('active');
        gamePlaying=false;
    }
    else{
        nextPlayer();
    }
    }
})
document.querySelector('.btn-new').addEventListener('click',init);


function init(){
 scores =[0,0];
 roundScores=0;
 active=0;
 gamePlaying=true;
// dice = Math.floor(Math.random()*6)+1;
//document.querySelector('#current-'+ active).textContent=dice;
document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');    
}
function nextPlayer(){
    active===0?active=1:active=0;
        roundScores=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
}