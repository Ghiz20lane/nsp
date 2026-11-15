const PHOTOS={"viking": "images/viking.jpg","voyager1": "images/voyager1.jpg","pioneer": "images/pioneer.jpg","near": "images/near.jpg","dawn": "images/dawn.jpg","mer": "images/mer.jpg","lrv": "images/lrv.jpg","lm": "images/lm.jpg", "surveyor3": "images/surveyor3.jpg", "lm_bp": "images/lm_bp.jpg", "alsep": "images/alsep.jpg", "sojourner": "images/sojourner.jpg", "viking_bp": "images/viking_bp.jpg", "phoenix-insight": "images/phoenix-insight.jpg", "kepler": "images/kepler.jpg", "ingenuity": "images/ingenuity.jpg"};
const ZONES = [
 { id:"moon", tab:"On the Moon", text:"Six crewed landings and a few robots left their things behind.", items:[
  { n:"Lunar Module descent stages", s:"Apollo landers · 1969–1972",
    v:"I am the bottom half of a lunar lander. When the astronauts flew home, my top half carried them up. I stayed behind, and I was their launch pad.",
    f:["Apollo 11’s lander, Eagle, touched down on July 20, 1969.","Each of the six Apollo landings left a descent stage on the Moon."],
    l:"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C" },
  { n:"Lunar Roving Vehicles", s:"The Moon buggies · Apollo 15, 16, 17",
    v:"There were three of us, one for each of the last three Apollo missions. We carried astronauts and moon rocks, then we were parked for good.",
    f:["First drive: July 31, 1971, by David Scott and James Irwin.","Top speed about 13 km/h. The Apollo 17 rover drove 35.9 km."],
    l:"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C" },
  { n:"ALSEP science stations", s:"Apollo Lunar Surface Experiments Packages",
    v:"We are science stations that kept working after the astronauts left. We listened to the Moon’s shaking, and our nuclear generators kept us powered.",
    f:["Set up by Apollo 12, 14, 15, 16 and 17.","Switched off on September 30, 1977.","Mirrors left by Apollo crews still reflect laser light from Earth."],
    l:"https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C" },
  { n:"Surveyor 3", s:"Robot lander · landed April 20, 1967",
    v:"I landed before any human could. In 1969, Apollo 12 astronauts walked up to me and took my camera and scoop home.",
    f:["Surveyor landers proved that soft Moon landings were possible.","Scientists studied the parts that came back to see how the Moon aged them."],
    l:"https://science.nasa.gov/mission/surveyor-3/" }
 ]},
 { id:"mars", tab:"On Mars", text:"Rovers, landers and a helicopter, each stopped where it ended.", items:[
  { n:"Sojourner", s:"The first rover on Mars · 1997",
    v:"I rode to Mars inside the Pathfinder lander. I was small, about the size of a microwave oven, but I was the first wheeled explorer on another planet.",
    f:["Landed on July 4, 1997.","Planned for 7 Martian days. It worked for 83.","Pathfinder’s last signal came on September 27, 1997."],
    l:"https://science.nasa.gov/mission/mars-pathfinder/" },
  { n:"Spirit & Opportunity", s:"Twin rovers · landed January 2004",
    v:"We were twins, built for 90 Martian days. Spirit got stuck in sand and went quiet in 2010. I, Opportunity, kept going for about 14 and a half years.",
    f:["Opportunity drove about 45 km and found signs of past water.","A huge dust storm hid its sunlight. Last contact: June 10, 2018.","NASA declared the mission complete on February 13, 2019."],
    l:"https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/" },
  { n:"Viking 1 & 2 landers", s:"First U.S. landers to work on Mars · 1976",
    v:"We landed in 1976 and have stayed exactly where we touched down. We sent back photos and tested Martian soil, searching for signs of life.",
    f:["Viking 1 landed on July 20, 1976.","The landers worked for years, long after their first mission."],
    l:"https://science.nasa.gov/mission/viking-1/" },
  { n:"Phoenix & InSight", s:"Landers · 2008 and 2018",
    v:"Phoenix dug into the ground near the north pole and found water ice, then the dark winter came. InSight listened for marsquakes until dust covered its solar panels.",
    f:["Phoenix landed on May 25, 2008.","InSight landed on November 26, 2018 and ended in December 2022."],
    l:"https://science.nasa.gov/mission/insight/" },
  { n:"Ingenuity", s:"The first helicopter on another planet · 2021–2024",
    v:"I was only meant to prove that flying on Mars was possible. I flew 72 times. Then my rotor blades were damaged, and I stayed where I landed.",
    f:["First flight: April 19, 2021.","It was planned for 5 flights."],
    l:"https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/" }
 ]},
 { id:"deep", tab:"Deep space", text:"Machines that are still drifting, orbiting or resting far away.", items:[
  { n:"Dawn", s:"Asteroid and dwarf planet orbiter · launched 2007",
    v:"I visited two worlds, the giant asteroid Vesta and the dwarf planet Ceres. When my fuel ran out in 2018, I stayed in orbit around Ceres.",
    f:["Launched on September 27, 2007.","Both Vesta and Ceres are in the asteroid belt between Mars and Jupiter."],
    l:"https://science.nasa.gov/mission/dawn/" },
  { n:"NEAR Shoemaker", s:"Asteroid explorer · 2000–2001",
    v:"I was built to orbit the asteroid Eros. At the end, my team tried something new: I landed. I was not designed for it, but I sent signals from the surface.",
    f:["Orbit of Eros began in February 2000.","Landing: February 12, 2001. Signals continued for about two weeks."],
    l:"https://science.nasa.gov/mission/near-shoemaker/" },
  { n:"Pioneer 10 & 11", s:"Early deep-space probes · 1972 and 1973",
    v:"We were the first to cross the asteroid belt and visit Jupiter. Each of us carries a metal plaque showing where we came from, in case anyone finds us.",
    f:["Pioneer 10 launched in 1972. Pioneer 11 launched in 1973.","Pioneer 11 was the first to fly by Saturn, in 1979."],
    l:"https://science.nasa.gov/mission/pioneer-10/" },
  { n:"Kepler Space Telescope", s:"Planet hunter · launched March 2009",
    v:"I watched stars for tiny dips in their light. Each dip could be a planet passing in front. When my fuel ran out in 2018, I was retired, still drifting behind Earth.",
    f:["It helped find thousands of planets around other stars.","It now drifts in an Earth-trailing orbit around the Sun."],
    l:"https://science.nasa.gov/mission/kepler/" },
  { n:"Voyager 1", s:"Space probe · launched September 5, 1977",
    v:"I was sent to Jupiter and Saturn, but I never turned back. In August 2012, I became the first human-made object in interstellar space. I carry a Golden Record.",
    f:["More than 15 billion miles (25 billion km) from Earth.","Its signals take about one day to reach us. It still sends data."],
    l:"https://science.nasa.gov/mission/voyager1" }
 ]}
];

const IDS=["lm","lrv","alsep","surveyor3","sojourner","mer","viking","phoenix-insight","ingenuity","dawn","near","pioneer","kepler","voyager1"];
const ALT={lm:["lm_bp","Blueprint"],viking:["viking_bp","Orbiter blueprint"]};
const QUERY=["Apollo 11 lunar module Eagle on the Moon","Apollo 15 lunar roving vehicle","Apollo ALSEP deployed on the Moon","Surveyor 3 Apollo 12 Conrad","Sojourner rover Mars Pathfinder","Opportunity rover Mars","Viking 1 lander Mars","Phoenix lander Mars","Ingenuity helicopter Mars","Dawn spacecraft Ceres","NEAR Shoemaker Eros","Pioneer 10 spacecraft","Kepler space telescope","Voyager 1 spacecraft"];
const SKY={moon:["#0e2a5a","#5d86c4"],mars:["#ff9a62","#7a2d6b"],deep:["#06183a","#2f6fd0"]};
const met=new Set(),flat=[],cache={};
ZONES.forEach((z,zi)=>z.items.forEach(it=>flat.push({...it,zone:z.id,zi,tab:z.tab})));
flat.forEach((it,i)=>{it.id=IDS[i];it.q=QUERY[i];it.yr=(it.s.match(/\d{4}/)||[""])[0]});
document.getElementById("total").textContent=flat.length;

const ok=u=>new Promise(r=>{const i=new Image();i.onload=()=>r(true);i.onerror=()=>r(false);i.src=u});
function nasa(it){return cache[it.id]||(cache[it.id]=fetch("https://images-api.nasa.gov/search?media_type=image&q="+encodeURIComponent(it.q)).then(r=>r.json()).then(d=>{const x=d.collection.items.find(i=>i.links&&i.links[0]);return x?x.links[0].href:null}).catch(()=>null))}
// order: your own images/<id>.jpg -> real photo built in -> NASA library -> blueprint
async function paint(box,it,forceAlt){
  const [a,b]=SKY[it.zone];box.style.backgroundImage="linear-gradient("+a+","+b+")";
  const alt=ALT[it.id]&&PHOTOS[ALT[it.id][0]];
  if(forceAlt&&alt){box.style.backgroundImage="url('"+alt+"')";return}
  for(const get of [async()=>"images/"+it.id+".jpg",async()=>PHOTOS[it.id],()=>nasa(it),async()=>alt]){
    const u=await get();if(u&&await ok(u)){box.style.backgroundImage="url('"+u+"')";return}
  }
}
let typer;
function typeText(el,t){clearInterval(typer);el.textContent="";let i=0;typer=setInterval(()=>{el.textContent=t.slice(0,++i);if(i>=t.length)clearInterval(typer)},18)}
const dlg=document.getElementById("dlg");
document.getElementById("close").onclick=()=>dlg.close();
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
dlg.addEventListener("close",()=>clearInterval(typer));
function openCard(it){
  const mart=document.getElementById("mart");mart.innerHTML="";
  const h=document.createElement("div");h.className="art";mart.appendChild(h);paint(h,it);
  if(ALT[it.id]&&PHOTOS[ALT[it.id][0]]){
    const v=document.createElement("div");v.className="view";
    v.innerHTML="<button class='on'>Photo</button><button>"+ALT[it.id][1]+"</button>";
    [...v.children].forEach((b,k)=>b.onclick=()=>{[...v.children].forEach(x=>x.classList.toggle("on",x===b));paint(h,it,k===1)});
    mart.appendChild(v);
  }
  const nx=flat[(flat.indexOf(it)+1)%flat.length];
  document.getElementById("mbody").innerHTML="<div class='rx'>INCOMING TRANSMISSION</div><h2>"+it.n+"</h2><div class='sub'>"+it.s+"</div><p class='voice' id='voice'></p><ul class='facts'>"+it.f.map((x,i)=>"<li style='animation-delay:"+(.4+i*.25)+"s'>"+x+"</li>").join("")+"</ul><button class='next' id='nx'>Next machine: "+nx.n+" →</button>";
  document.getElementById("nx").onclick=()=>{show(nx.zi);openCard(nx)};
  typeText(document.getElementById("voice"),"“"+it.v+"”");
  if(!dlg.open)dlg.showModal();
  met.add(it.id);
  document.querySelectorAll(".card[data-id='"+it.id+"']").forEach(c=>c.classList.add("seen"));
  document.getElementById("count").textContent=met.size;
  document.getElementById("fill").style.width=met.size/flat.length*100+"%";
  if(met.size===flat.length)document.getElementById("win").style.display="block";
}
function show(zi){
  const z=ZONES[zi];
  [...document.getElementById("planets").children].forEach((b,k)=>b.classList.toggle("on",k===zi));
  document.getElementById("zone").textContent=z.text;
  const g=document.getElementById("grid");g.innerHTML="";
  flat.filter(it=>it.zi===zi).forEach((it,k)=>{
    const c=document.createElement("button");c.dataset.id=it.id;
    c.className="card"+(met.has(it.id)?" seen":"");c.style.animationDelay=k*.08+"s";
    c.innerHTML="<div class='art'></div><span class='chip'>"+(it.yr||"")+"</span><span class='star'>⭐</span><div class='fade'><h3>"+it.n+"</h3><small>"+it.s+"</small></div><span class='go'>→</span>";
    paint(c.firstChild,it);
    c.onclick=()=>openCard(it);
    c.onpointermove=e=>{const r=c.getBoundingClientRect();c.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*10+"deg");c.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*10+"deg")};
    c.onpointerleave=()=>{c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")};
    g.appendChild(c);
  });
}
const BALL=["b-moon","b-mars","b-deep"];
ZONES.forEach((z,i)=>{const b=document.createElement("button");b.className="planet";b.innerHTML="<span class='ball "+BALL[i]+"'></span><span class='t'>"+z.tab.toUpperCase()+"</span>";b.onclick=()=>show(i);document.getElementById("planets").appendChild(b)});
show(0);

// Switch between the three chapters of the experience.
function navigatePage(name){
  document.querySelectorAll(".page").forEach(page=>page.classList.toggle("active",page.id==="page-"+name));
  document.querySelectorAll(".nav-link").forEach(button=>button.classList.toggle("active",button.dataset.page===name));
  if(name==="explore") show(0);
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-page]").forEach(control=>control.addEventListener("click",event=>{
  event.preventDefault(); navigatePage(control.dataset.page);
}));

// soft blue bokeh dots drifting upward + shooting stars
(function(){
  const cv=document.getElementById("sky"),x=cv.getContext("2d");let w,h,S=[],sh=null;
  function size(){w=cv.width=innerWidth;h=cv.height=innerHeight;S=Array.from({length:Math.round(w*h/9000)},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()<.15?Math.random()*5+3:Math.random()*2+.5,p:Math.random()*6,v:Math.random()*.12+.03}))}
  size();addEventListener("resize",size);
  (function loop(t){
    x.clearRect(0,0,w,h);
    S.forEach(s=>{s.y-=s.v;if(s.y<-8){s.y=h+8;s.x=Math.random()*w}
      x.globalAlpha=(s.r>3?.16:.3)+.3*Math.abs(Math.sin(t/1800+s.p));x.fillStyle="#c3ddff";x.beginPath();x.arc(s.x,s.y,s.r,0,7);x.fill()});
    if(!sh&&Math.random()<.003)sh={x:Math.random()*w,y:Math.random()*h*.4,l:0};
    if(sh){x.globalAlpha=1-sh.l/40;x.strokeStyle="#9fd0ff";x.lineWidth=2;x.beginPath();x.moveTo(sh.x+sh.l*9,sh.y+sh.l*5);x.lineTo(sh.x+sh.l*9-70,sh.y+sh.l*5-38);x.stroke();if(++sh.l>40)sh=null}
    requestAnimationFrame(loop);
  })(0);
})();
