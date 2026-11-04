(() => {
const KEY="gdgTechArcade_v1";
function read(){try{return JSON.parse(localStorage.getItem(KEY))||{player:"",results:[],sound:true}}catch(e){return {player:"",results:[],sound:true}}}
function write(data){try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){console.warn("Could not save arcade data",e)}}
window.ArcadeStore={
 get:read,
 player(){return read().player},
 setPlayer(name){const d=read();d.player=name;write(d)},
 saveResult(result){const d=read();d.results.push({...result,id:Date.now()+Math.random()});write(d);return d},
 results(){return read().results},
 sound(){return read().sound!==false},
 setSound(v){const d=read();d.sound=v;write(d)},
 leaderboard(){const d=read(),map={};d.results.forEach(r=>{const n=r.player||"PLAYER";if(!map[n])map[n]={player:n,total:0,games:0,best:0,byGame:{}};map[n].total+=r.score;map[n].games++;map[n].best=Math.max(map[n].best,r.score);map[n].byGame[r.gameId]=Math.max(map[n].byGame[r.gameId]||0,r.score)});return Object.values(map).sort((a,b)=>b.total-a.total||b.games-a.games)}
};
})();