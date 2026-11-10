const destinations = [
 {id:"amalfi",name:"Amalfi Coast",country:"Italy",region:"Europe",category:"Coast",tag:"The coastal dream",image:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1100&q=85",description:"A ribbon of pastel villages clinging to dramatic cliffs, with winding lanes, lemon groves and deep-blue Mediterranean views. Explore the atmosphere of southern Italy's celebrated coastline.",best:"May – June",known:"Cliffside villages",fact:"UNESCO-listed coast"},
 {id:"kyoto",name:"Kyoto",country:"Japan",region:"Asia",category:"Culture",tag:"Quiet traditions",image:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1100&q=85",description:"A city of wooden machiya streets, peaceful gardens, temple gates and seasonal beauty. Kyoto offers a window into centuries of Japanese art, architecture and everyday rituals.",best:"March – May",known:"Temples & gardens",fact:"Historic cultural capital"},
 {id:"maldives",name:"The Maldives",country:"Maldives",region:"Asia",category:"Coast",tag:"Beyond the blue",image:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1100&q=85",description:"An Indian Ocean archipelago known for clear lagoons, coral atolls and island horizons. Discover the fragile beauty of a world shaped by the sea.",best:"November – April",known:"Atolls & lagoons",fact:"Low-lying island nation"},
 {id:"taj",name:"Taj Mahal",country:"Agra, India",region:"Asia",category:"Culture",tag:"A monument to love",image:"https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1100&q=85",description:"An extraordinary white-marble mausoleum on the banks of the Yamuna. Its symmetry, gardens and intricate craftsmanship make it one of India's most recognisable landmarks.",best:"October – March",known:"Mughal architecture",fact:"UNESCO World Heritage Site"},
 {id:"banff",name:"Banff National Park",country:"Canada",region:"North America",category:"Nature",tag:"Into the wild",image:"https://images.unsplash.com/photo-1503614472-8c93d56cd6b0?auto=format&fit=crop&w=1100&q=85",description:"A mountain landscape of turquoise lakes, evergreen forests and dramatic peaks in the Canadian Rockies. A place to pause and take in the scale of nature.",best:"June – September",known:"Alpine lakes",fact:"Canada's oldest national park"},
 {id:"paris",name:"Paris",country:"France",region:"Europe",category:"City",tag:"The art of wandering",image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1100&q=85",description:"Boulevards, riverside walks, grand museums and neighbourhood cafés create the unmistakable rhythm of Paris. Discover its architecture and creative spirit.",best:"April – June",known:"Art & architecture",fact:"City on the Seine"},
 {id:"petra",name:"Petra",country:"Jordan",region:"Middle East",category:"Culture",tag:"The rose-red city",image:"https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?auto=format&fit=crop&w=1100&q=85",description:"Carved into rose-coloured sandstone, Petra reveals the ingenuity of the ancient Nabataean civilisation. Its monumental façades sit within a dramatic desert landscape.",best:"March – May",known:"Rock-cut architecture",fact:"Ancient Nabataean city"},
 {id:"santorini",name:"Santorini",country:"Greece",region:"Europe",category:"Coast",tag:"Blue & white",image:"https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1100&q=85",description:"Whitewashed villages, volcanic cliffs and the Aegean Sea define this island's striking scenery. Explore its winding lanes and celebrated caldera views.",best:"April – October",known:"Volcanic caldera",fact:"Cycladic island"}
];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let saved = JSON.parse(localStorage.getItem("globego-saved") || "[]");
let current = null, activeFilter = "All", toastTimer;
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2200)}
function go(page){$$(".page").forEach(p=>p.classList.toggle("active",p.id===`page-${page}`));$$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));window.scrollTo({top:0,behavior:"smooth"});renderSaved()}
function card(d,i){return `<article class="destination-card" data-open="${d.id}"><div class="card-image"><img loading="lazy" src="${d.image}" alt="${d.name}"><span class="card-number">0${i+1} / GLOBEGO</span><button class="bookmark ${saved.includes(d.id)?"saved":""}" data-save="${d.id}" aria-label="Save ${d.name}">${saved.includes(d.id)?"♥":"♡"}</button></div><div class="card-meta"><span>${d.category}</span><span>${d.region}</span></div><h3 class="card-title">${d.name}</h3><p class="card-subtitle">${d.country}</p></article>`}
function renderFeatured(){ $("#featuredGrid").innerHTML=destinations.slice(0,6).map(card).join("");}
function renderExplore(){let list=destinations.filter(d=>activeFilter==="All"||d.category===activeFilter);$("#allGrid").innerHTML=list.map(card).join("")||"<p>No destinations in this category yet.</p>";}
function renderMap(){ $("#mapGrid").innerHTML=destinations.slice(0,6).map(card).join("");}
function renderSaved(){let list=destinations.filter(d=>saved.includes(d.id));$("#savedGrid").innerHTML=list.map(card).join("");$("#savedCount").textContent=list.length;$("#emptySaved").classList.toggle("show",list.length===0)}
function renderFilms(){const filmIds=["amalfi","kyoto","maldives","taj","banff","paris"];$("#filmList").innerHTML=filmIds.map(id=>{let d=destinations.find(x=>x.id===id);let q=encodeURIComponent(`${d.name} travel cinematic 4K official tourism`);return `<article class="film-card"><img loading="lazy" src="${d.image}" alt="${d.name}"><div class="film-card-body"><p class="eyebrow">${d.country.toUpperCase()} · VISUAL JOURNAL</p><h3>${d.name}</h3><p>${d.tag}</p><a href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener">FIND TRAVEL FILMS ↗</a></div></article>`}).join("")}
function openDestination(id){current=destinations.find(d=>d.id===id);if(!current)return;$("#modalImage").src=current.image;$("#modalImage").alt=current.name;$("#modalLocation").textContent=`${current.country.toUpperCase()} · ${current.region.toUpperCase()}`;$("#modalCategory").textContent=`${current.category.toUpperCase()} · ${current.tag.toUpperCase()}`;$("#modalTitle").textContent=current.name;$("#modalDescription").textContent=current.description;$("#modalFacts").innerHTML=`<div class="fact"><b>${current.best}</b>Suggested season</div><div class="fact"><b>${current.known}</b>Known for</div><div class="fact"><b>${current.fact}</b>Did you know?</div>`;$("#saveButton").textContent=saved.includes(id)?"♥ Saved to your atlas":"♡ Save place";$("#destinationModal").classList.add("open");$("#destinationModal").setAttribute("aria-hidden","false")}
function closeModal(id){$(id).classList.remove("open");$(id).setAttribute("aria-hidden","true")}
function toggleSave(id){saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];localStorage.setItem("globego-saved",JSON.stringify(saved));renderFeatured();renderExplore();renderMap();renderSaved();if(current&&current.id===id)$("#saveButton").textContent=saved.includes(id)?"♥ Saved to your atlas":"♡ Save place";toast(saved.includes(id)?"Added to your atlas":"Removed from saved places")}
function openTour(){if(!current)return;$("#tourTitle").textContent=current.name+" — look around";$("#panoramaImage").src=current.image;$("#panoramaImage").style.transform="translateX(0) scale(1.2)";closeModal("#destinationModal");$("#tourModal").classList.add("open");$("#tourModal").setAttribute("aria-hidden","false");panX=0}
let panX=0,dragStart=null,startX=0;
const panorama=$("#panoramaWindow");
function panMove(e){if(dragStart===null)return;let x=e.clientX??e.touches?.[0]?.clientX;if(x==null)return;panX=Math.max(-250,Math.min(0,startX+(x-dragStart)));$("#panoramaImage").style.transform=`translateX(${panX}px) scale(1.2)`}
panorama.addEventListener("pointerdown",e=>{dragStart=e.clientX;startX=panX;panorama.setPointerCapture(e.pointerId)});panorama.addEventListener("pointermove",panMove);panorama.addEventListener("pointerup",()=>dragStart=null);panorama.addEventListener("pointercancel",()=>dragStart=null);
$("#panReset").addEventListener("click",()=>{panX=0;$("#panoramaImage").style.transform="translateX(0) scale(1.2)"});
document.addEventListener("click",e=>{let page=e.target.closest("[data-page]");if(page){e.preventDefault();go(page.dataset.page);return}let save=e.target.closest("[data-save]");if(save){e.stopPropagation();toggleSave(save.dataset.save);return}let open=e.target.closest("[data-open]");if(open){openDestination(open.dataset.open);return}let map=e.target.closest("[data-map]");if(map){openDestination(map.dataset.map);return}let filter=e.target.closest("[data-filter]");if(filter){activeFilter=filter.dataset.filter;$$(".filter-chip").forEach(b=>b.classList.toggle("selected",b.dataset.filter===activeFilter));renderExplore();go("explore")}});
$("#modalClose").addEventListener("click",()=>closeModal("#destinationModal"));$("#tourClose").addEventListener("click",()=>closeModal("#tourModal"));$("#tourButton").addEventListener("click",openTour);$("#saveButton").addEventListener("click",()=>current&&toggleSave(current.id));
["#destinationModal","#tourModal"].forEach(sel=>$(sel).addEventListener("click",e=>{if(e.target===$(sel))closeModal(sel)}));
$("#searchToggle").addEventListener("click",()=>{$("#searchPanel").scrollIntoView({behavior:"smooth",block:"center"});$("#searchInput").focus()});
$("#clearSearch").addEventListener("click",()=>{$("#searchInput").value="";renderFeatured()});
$("#searchInput").addEventListener("input",e=>{let q=e.target.value.toLowerCase().trim();let list=destinations.filter(d=>(d.name+" "+d.country+" "+d.category+" "+d.region).toLowerCase().includes(q));$("#featuredGrid").innerHTML=list.map(card).join("");if(q)$("#featuredGrid").scrollIntoView({behavior:"smooth",block:"nearest"})});
$("#profileButton").addEventListener("click",()=>toast("Your travel journal is ready — no account needed in this demo."));
$$(".filter-chip").forEach(b=>b.addEventListener("click",()=>{$$(".filter-chip").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");activeFilter=b.dataset.filter;renderExplore()}));
renderFeatured();renderExplore();renderMap();renderFilms();renderSaved();
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));


// GlobeGo Version 5: lightweight sample itinerary builder
const planIdeas = {
  amalfi: {
    balanced: [["Arrive & take in the coast","Settle into the area, enjoy a relaxed viewpoint and explore the lanes of a nearby village."],["Villages & sea views","Choose a coastal village to explore, pause for a scenic walk and enjoy an unhurried afternoon."],["A slower final day","Visit a garden or local market, then leave time for one last sea view."]],
    culture: [["A first look at local history","Explore the architecture and story of a historic coastal town."],["Churches, lanes & craft","Discover local churches, small galleries and traditional craft shops."],["Coastal heritage","Learn about the region's maritime history and enjoy a final village walk."]],
    nature: [["Coastal viewpoints","Find a public viewpoint and take a gentle scenic walk."],["A day outdoors","Choose a marked walking route appropriate to your ability and check local conditions."],["Garden pause","Spend a quiet day among gardens and coastal scenery."]],
    food: [["Local flavours","Explore a market and learn about regional ingredients."],["A taste of the coast","Look for a locally run food experience and seasonal dishes."],["Cafe culture","Take a slow morning and discover neighbourhood cafes."]]
  },
  kyoto: {
    balanced: [["Historic streets","Explore a traditional neighbourhood and nearby temple grounds."],["Gardens & crafts","Visit a garden, browse craft shops and take a relaxed riverside break."],["A quiet finale","Choose one cultural site and leave time to wander." ]],
    culture: [["Temples & tradition","Explore a historic temple area and learn about its cultural context."],["Art & architecture","Visit a museum or heritage street and notice traditional design details."],["Living heritage","Discover local crafts and customs respectfully." ]],
    nature: [["Garden morning","Spend time in a traditional garden and enjoy the seasonal landscape."],["Forest paths","Choose a suitable public nature path and check conditions."],["River pause","Enjoy a relaxed riverside walk and a quiet final afternoon." ]],
    food: [["Market discovery","Explore a public food market and learn about Kyoto ingredients."],["Tea & tradition","Look for a reputable cultural tea experience."],["Neighbourhood flavours","Discover local cafes and regional dishes." ]]
  },
  maldives: {
    balanced: [["Island arrival","Get oriented on your chosen island and learn local visitor guidelines."],["Lagoon day","Enjoy a supervised, locally approved water or shoreline activity."],["Island culture","Explore local community spaces respectfully and enjoy a relaxed sunset." ]],
    culture: [["Island life","Learn about local island traditions and community history."],["Heritage & craft","Discover local crafts and cultural spaces where visitors are welcome."],["Respectful exploration","Learn about island conservation and local customs." ]],
    nature: [["Coastal ecology","Learn about coral reef ecosystems from a responsible local guide."],["Nature discovery","Choose a supervised, environmentally responsible activity."],["Ocean conservation","Explore local conservation stories and enjoy the shoreline." ]],
    food: [["Island flavours","Discover local ingredients and traditional dishes."],["Local cafe day","Explore visitor-friendly local eateries."],["Food stories","Learn about island food traditions and seasonal produce." ]]
  },
  taj: {
    balanced: [["The monument","Learn about the Taj Mahal's history and architecture; check official visitor guidance."],["Agra heritage","Explore another heritage site with time for a relaxed break."],["Local culture","Discover local crafts and food traditions from reputable sources." ]],
    culture: [["Architecture & history","Study the design, materials and history of the Taj Mahal."],["Mughal heritage","Explore another accessible heritage site in Agra."],["Craft traditions","Learn about local stonework and artisan traditions." ]],
    nature: [["Garden perspectives","Explore the public garden areas and the monument's landscape design."],["Riverside history","Learn about the Yamuna river setting and heritage conservation."],["Slow exploration","Choose a calm public space and reflect on the visit." ]],
    food: [["Agra flavours","Discover regional food traditions and local ingredients."],["Market discovery","Explore a visitor-friendly market with local guidance."],["Sweet traditions","Learn about Agra's well-known sweet-making traditions." ]]
  },
  banff: {
    balanced: [["Mountain welcome","Get oriented and check park alerts, weather and visitor guidance."],["Lake landscapes","Visit an accessible viewpoint and follow marked public paths."],["Nature learning","Explore a visitor centre or a suitable short trail." ]],
    culture: [["Park stories","Learn about the area's Indigenous histories and national park story."],["Mountain heritage","Visit a local museum or interpretive centre."],["Conservation day","Learn about wildlife protection and responsible visiting." ]],
    nature: [["Lakes & viewpoints","Choose an accessible viewpoint and check current trail conditions."],["Forest walk","Pick a marked trail suited to your experience and weather."],["Wildlife from a distance","Enjoy nature observation while keeping a safe distance from wildlife." ]],
    food: [["Local cafe stop","Explore local cafes and regional ingredients."],["Town discovery","Browse local shops and visitor information."],["Relaxed mountain day","Enjoy a slow morning and scenic public viewpoints." ]]
  },
  paris: {
    balanced: [["A first Paris walk","Explore a neighbourhood and enjoy riverside architecture."],["Art & gardens","Choose a museum or public garden and allow time to explore."],["Neighbourhood day","Discover local streets, bookshops and cafes." ]],
    culture: [["Landmarks & history","Explore a major historic area and learn its story."],["Museum day","Choose a museum and check its official opening information."],["Architecture walk","Notice the city's architectural styles and public spaces." ]],
    nature: [["Garden morning","Spend time in a public garden."],["Riverside stroll","Enjoy a walk along a public riverside route."],["Park pause","Discover a neighbourhood park and relax." ]],
    food: [["Market morning","Explore a public food market and seasonal produce."],["Bakery discoveries","Learn about French baking traditions."],["Cafe culture","Spend time in a neighbourhood cafe and explore nearby streets." ]]
  },
  petra: {
    balanced: [["Discover the story","Start with visitor information and learn about Petra's history."],["Ancient pathways","Explore permitted visitor routes and follow site guidance."],["Culture & conservation","Learn about conservation work and local heritage." ]],
    culture: [["Nabataean history","Discover the people and trade networks behind Petra."],["Rock-cut architecture","Study the site's distinctive carved structures."],["Living heritage","Learn about local communities and heritage protection." ]],
    nature: [["Desert landscape","Learn about the area's geology and desert ecology."],["Guided exploration","Choose an approved route with current site guidance."],["Conservation focus","Discover how fragile heritage landscapes are protected." ]],
    food: [["Local food stories","Learn about Jordanian food traditions."],["Community discovery","Explore visitor-friendly local businesses."],["A relaxed finish","Enjoy a calm final day and learn about regional ingredients." ]]
  },
  santorini: {
    balanced: [["Island orientation","Explore a village and enjoy a public viewpoint."],["History & coastline","Learn about the island's volcanic story and coastal landscape."],["A relaxed finale","Browse local crafts and enjoy a quiet village walk." ]],
    culture: [["Village architecture","Explore traditional village lanes and local history."],["Island past","Learn about the island's archaeological and volcanic history."],["Craft & culture","Discover local creative traditions." ]],
    nature: [["Volcanic landscape","Learn about the island's geology from safe public viewpoints."],["Coastal scenery","Choose a suitable public coastal walk."],["Slow island day","Enjoy a relaxed village and landscape day." ]],
    food: [["Local produce","Discover island ingredients and food traditions."],["Market & cafes","Explore visitor-friendly local food spots."],["Regional flavours","Learn about local produce and seasonal dishes." ]]
  }
};
const plannerDest = document.querySelector("#plannerDestination");
const plannerDays = document.querySelector("#plannerDays");
const plannerMood = document.querySelector("#plannerMood");
const planResult = document.querySelector("#itineraryResult");
const planDays = document.querySelector("#itineraryDays");
let currentSamplePlan = null;
function createSamplePlan(){
  const id = plannerDest.value;
  const days = Number(plannerDays.value);
  const mood = plannerMood.value;
  const destination = destinations.find(d => d.id === id);
  const ideas = (planIdeas[id] && planIdeas[id][mood]) || planIdeas[id].balanced;
  currentSamplePlan = {id, name:destination.name, country:destination.country, days, mood, created:new Date().toISOString(), itinerary:Array.from({length:days},(_,i)=>({day:i+1,title:ideas[i % ideas.length][0],detail:ideas[i % ideas.length][1]}))};
  $("#itineraryTitle").textContent = `${days}-day inspiration for ${destination.name}`;
  planDays.innerHTML = currentSamplePlan.itinerary.map(day=>`<article class="itinerary-day"><span class="day-number">DAY ${day.day}</span><div><h4>${day.title}</h4><p>${day.detail}</p></div></article>`).join("");
  $("#savedPlanStatus").textContent = "";
  planResult.hidden = false;
  planResult.scrollIntoView({behavior:"smooth",block:"start"});
}
$("#generatePlan")?.addEventListener("click",createSamplePlan);
$("#savePlan")?.addEventListener("click",()=>{
  if(!currentSamplePlan)return;
  const plans = JSON.parse(localStorage.getItem("globego-plans") || "[]");
  plans.unshift(currentSamplePlan);
  localStorage.setItem("globego-plans",JSON.stringify(plans.slice(0,10)));
  $("#savedPlanStatus").textContent = "Saved on this device. It is not synced to an account or other devices.";
  toast("Itinerary saved on this device");
});
