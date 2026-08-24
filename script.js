const SVG_ICONS = {
  ruins: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h2m-2 4h2m4-4h2m-4 4h2"/></svg>`,
  house: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  hospital: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6v12m-6-6h12"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
  industrial: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M4 20V10l4 2V8l4 2V4l8 4v12"/></svg>`,
  bunker: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  entertainment: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 000 20M2 12h20"/></svg>`,
  military: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  castle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21V11l-2-2-2 2V5l-2-2-2 2v6L7 9 5 11v10M3 21h18"/></svg>`,
  underground: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"/></svg>`,
  vehicles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z"/><path d="M15 9l-2-4H7L5 9M3 11h18v4H3z"/></svg>`,
  infrastructure: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 18l8-14 8 14M2 18h20M8 11h8"/></svg>`
};

const CATEGORIES = {
  ruins: { name: "Ruinen", color: "#c9a24c", icon: SVG_ICONS.ruins },
  house: { name: "Häuser & Villen", color: "#c96b9a", icon: SVG_ICONS.house },
  hospital: { name: "Krankenhäuser", color: "#c94c4c", icon: SVG_ICONS.hospital },
  industrial: { name: "Industrie & Fabriken", color: "#3d9a6a", icon: SVG_ICONS.industrial },
  bunker: { name: "Bunker & Stollen", color: "#6b7bc9", icon: SVG_ICONS.bunker },
  entertainment: { name: "Freizeit & Kultur", color: "#8b6bc9", icon: SVG_ICONS.entertainment },
  military: { name: "Militäranlagen", color: "#8bc94c", icon: SVG_ICONS.military },
  castle: { name: "Schlösser & Burgen", color: "#c98a3d", icon: SVG_ICONS.castle },
  underground: { name: "Unterirdisch", color: "#6b7580", icon: SVG_ICONS.underground },
  vehicles: { name: "Fahrzeugfriedhöfe", color: "#3d9ac9", icon: SVG_ICONS.vehicles },
  infrastructure: { name: "Infrastruktur", color: "#4c7bc9", icon: SVG_ICONS.infrastructure }
};

const MOCK_PLACES = [
  {
    id: 1,
    name: "Stahlwerk Hoffnungsthal",
    category: "industrial",
    latitude: 50.1109,
    longitude: 8.6821,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&q=80",
    description: "Riesiger Industriekomplex aus den 1920ern mit alten Turbinenhallen.",
    security: { security: true, alarm: false, cameras: true, dogs: false },
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df515122519?w=300&q=80"
    ]
  },
  {
    id: 2,
    name: "Sanatorium Waldfrieden",
    category: "hospital",
    latitude: 50.1250,
    longitude: 8.6700,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=700&q=80",
    description: "Verlassene Lungenheilanstalt tief im Forst.",
    security: { security: false, alarm: false, cameras: false, dogs: false },
    gallery: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=300&q=80"
    ]
  },
  {
    id: 3,
    name: "Atombunker Nord",
    category: "bunker",
    latitude: 50.1500,
    longitude: 8.7000,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=700&q=80",
    description: "Unterirdischer Bunker aus den Zeiten des Kalten Krieges.",
    security: { security: true, alarm: true, cameras: true, dogs: true },
    gallery: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&q=80"
    ]
  }
];

const TILE_LAYERS = {
  street: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }),
  satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18 }),
  dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 })
};

let currentLayer = TILE_LAYERS.street;
let currentCat = 'all';
let searchQuery = '';
let map, clusterGroup;
let activePlace = null;
const spotStore = { get: () => JSON.parse(localStorage.getItem('urbexSpots') || '[]'), set: value => localStorage.setItem('urbexSpots', JSON.stringify(value)) };
const subscriptionStore = { get: () => JSON.parse(localStorage.getItem('urbexSubscriptions') || '[]'), set: value => localStorage.setItem('urbexSubscriptions', JSON.stringify(value)) };
const userStore = { get: () => JSON.parse(localStorage.getItem('urbexUser') || '{"xp":120,"level":2}'), set: value => localStorage.setItem('urbexUser', JSON.stringify(value)) };
const reportStore = { get: () => JSON.parse(localStorage.getItem('urbexReports') || '[]'), set: value => localStorage.setItem('urbexReports', JSON.stringify(value)) };

function grantXP(amount) { const user = userStore.get(); user.xp += amount; user.level = user.xp >= 700 ? 5 : user.xp >= 400 ? 3 : user.xp >= 100 ? 2 : 1; userStore.set(user); }
function canPost(key, waitSeconds) { const now = Date.now(), last = Number(localStorage.getItem(`urbexLast${key}`) || 0); if (now - last < waitSeconds * 1000) return false; localStorage.setItem(`urbexLast${key}`, String(now)); return true; }

function toggleMapTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('urbexTheme', next);
  const button = document.querySelector('.theme-toggle');
  button.classList.remove('is-switching');
  void button.offsetWidth;
  button.classList.add('is-switching');
  button.innerHTML = `<span class="theme-glyph">${next === 'dark' ? '☀︎' : '☾'}</span>`;
}

const uploadStore = {
  get: () => JSON.parse(localStorage.getItem('urbexUploads') || '[]'),
  set: (value) => localStorage.setItem('urbexUploads', JSON.stringify(value))
};
const commentStore = {
  get: () => JSON.parse(localStorage.getItem('urbexComments') || '{}'),
  set: (value) => localStorage.setItem('urbexComments', JSON.stringify(value))
};

function initMap() {
  const theme = localStorage.getItem('urbexTheme') || 'dark';
  document.documentElement.dataset.theme = theme;
  document.querySelector('.theme-toggle').innerHTML = `<span class="theme-glyph">${theme === 'dark' ? '☀︎' : '☾'}</span>`;
  map = L.map('map', { zoomControl: false, attributionControl: false }).setView([50.1109, 8.6821], 12);
  currentLayer.addTo(map);

  clusterGroup = L.markerClusterGroup({
    showCoverageOnHover: false,
    maxClusterRadius: 35,
    iconCreateFunction: function(cluster) {
      return L.divIcon({
        html: `<div>${cluster.getChildCount()}</div>`,
        className: 'marker-cluster-custom',
        iconSize: L.point(32, 32)
      });
    }
  });

  map.addLayer(clusterGroup);
  renderFilterDropdown();
  renderMarkers();

  document.getElementById('search-input').addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderMarkers();
  });

  map.on('click', closeCategoryMenu);
}

function switchTileLayer(type) {
  map.removeLayer(currentLayer);
  currentLayer = TILE_LAYERS[type];
  currentLayer.addTo(map);
  document.querySelectorAll('.layer-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`layer-${type}`).classList.add('active');
}

function renderFilterDropdown() {
  const container = document.getElementById('category-menu');
  let html = `<button onclick="setCategory('all')" id="cat-btn-all" class="cat-item-btn active" style="grid-column: span 2;"><span>🌐</span> <span>Alle Kategorien</span></button>`;
  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    html += `<button onclick="setCategory('${key}')" id="cat-btn-${key}" class="cat-item-btn"><span class="category-icon" style="color:${cat.color};">${cat.icon}</span><span>${cat.name}</span></button>`;
  });
  container.innerHTML = html;
}

function toggleCategoryMenu(e) {
  e.stopPropagation();
  const menu = document.getElementById('category-menu');
  menu.style.display = menu.style.display === 'grid' ? 'none' : 'grid';
}

function closeCategoryMenu() {
  document.getElementById('category-menu').style.display = 'none';
}

function setCategory(catKey) {
  currentCat = catKey;
  document.querySelectorAll('.cat-item-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`cat-btn-${catKey}`);
  if (activeBtn) activeBtn.classList.add('active');
  const label = catKey === 'all' ? 'Alle Kategorien' : CATEGORIES[catKey].name;
  document.getElementById('selected-cat-label').innerText = label;
  closeCategoryMenu();
  renderMarkers();
}

function createCustomPinSVG(color, iconSvg) {
  return `
    <div class="custom-urbex-pin" style="--marker-color:${color}" aria-label="Spot auf Karte"><span class="map-pin-icon">${iconSvg}</span></div>
  `;
}

function renderMarkers() {
  clusterGroup.clearLayers();
  const filtered = [...MOCK_PLACES, ...spotStore.get()].filter(place => {
    const matchesCat = currentCat === 'all' || place.category === currentCat;
    const matchesSearch = !searchQuery || place.name.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  filtered.forEach(place => {
    const cat = CATEGORIES[place.category] || { color: "#3d9a6a", icon: SVG_ICONS.industrial };
    const pinHtml = createCustomPinSVG(cat.color, cat.icon);
    const icon = L.divIcon({
      html: pinHtml,
      className: '',
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
    const marker = L.marker([place.latitude, place.longitude], { icon: icon });
    marker.on('click', () => {
      map.flyTo([place.latitude, place.longitude], 15, { duration: 0.6 });
      showDetails(place);
    });
    clusterGroup.addLayer(marker);
  });
}

function showDetails(place) {
  activePlace = place;
  const panel = document.getElementById('details-panel');
  const cat = CATEGORIES[place.category] || { name: "Lost Place", color: "#3d9a6a" };

  document.getElementById('detail-img').src = place.image;
  document.getElementById('detail-title').innerText = place.name;
  document.getElementById('detail-desc').innerText = place.description;
  document.getElementById('detail-cat').innerText = cat.name;
  document.getElementById('detail-cat').style.color = cat.color;
  document.getElementById('detail-cat').style.borderColor = cat.color + "55";
  document.getElementById('detail-coords').innerText = `${place.latitude.toFixed(4)}, ${place.longitude.toFixed(4)}`;

  let bell = document.getElementById('spot-subscribe-button');
  if (!bell) { bell = document.createElement('button'); bell.id = 'spot-subscribe-button'; bell.className = 'spot-subscribe'; document.querySelector('.tag-group').appendChild(bell); }
  const subscribed = subscriptionStore.get().includes(place.id);
  bell.innerHTML = subscribed ? '🔔 Benachrichtigungen an' : '🔕 Spot beobachten';
  bell.classList.toggle('is-active', subscribed);
  bell.onclick = () => toggleSubscription(place.id);
  let creator = document.getElementById('spot-creator');
  if (!creator) { creator = document.createElement('span'); creator.id = 'spot-creator'; creator.className = 'spot-creator'; document.querySelector('.tag-group').appendChild(creator); }
  creator.textContent = `Von ${place.author || 'URBEX MAP'}`;
  let report = document.getElementById('spot-report-button');
  if (!report) { report = document.createElement('button'); report.id = 'spot-report-button'; report.className = 'spot-report'; document.querySelector('.tag-group').appendChild(report); }
  report.textContent = '⚑ Melden'; report.onclick = () => openReportModal(place);

  updateSecurityBadge('sec-security', place.security?.security);
  updateSecurityBadge('sec-alarm', place.security?.alarm);
  updateSecurityBadge('sec-cameras', place.security?.cameras);
  updateSecurityBadge('sec-dogs', place.security?.dogs);

  const galleryList = document.getElementById('gallery-list');
  let galleryHtml = '';
  const approvedUploads = uploadStore.get().filter(upload => upload.spot === place.name && upload.status === 'approved').map(upload => upload.url);
  const visibleGallery = [...(place.gallery || []), ...approvedUploads];
  if (visibleGallery.length > 0) {
    visibleGallery.forEach(imgUrl => {
      galleryHtml += `<img class="gallery-thumb" src="${imgUrl}" onclick="openModal('Foto Ansicht', '<img src=\\'${imgUrl}\\' style=\\'width:100%; border-radius:6px;\\'>')" />`;
    });
  }
  galleryHtml += `<button class="btn-add-photo" onclick="openPhotoModal()"><span>📷</span><span>+ Foto</span></button>`;
  galleryList.innerHTML = galleryHtml;

  renderComments(place);

  document.getElementById('detail-route-btn').onclick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`, '_blank');
  };

  panel.style.display = 'flex';
}

function renderComments(place) {
  const comments = commentStore.get()[place.id] || [];
  document.getElementById('comment-list').innerHTML = comments.length
    ? comments.map(comment => `<div class="comment"><b>${comment.author}</b><p>${comment.text}</p></div>`).join('')
    : '<p class="empty-comment">Noch keine Kommentare. Teile hilfreiche Hinweise, ohne sensible Zugänge preiszugeben.</p>';
}

function saveComment(event) {
  event.preventDefault();
  const field = document.getElementById('comment-input');
  const text = field.value.trim();
  if (!text || !activePlace) return;
  if (!canPost('Comment', 30)) { openModal('Bitte kurz warten', '<p style="color:var(--text-muted);font-size:13px">Zum Schutz vor Spam ist ein Kommentar alle 30 Sekunden möglich.</p>'); return; }
  const comments = commentStore.get();
  comments[activePlace.id] = [...(comments[activePlace.id] || []), { author: 'Felix S.', text }];
  commentStore.set(comments);
  grantXP(5);
  field.value = '';
  renderComments(activePlace);
}

function updateSecurityBadge(elementId, isActive) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.className = isActive ? 'security-item active' : 'security-item clear';
}

function closeDetails() {
  document.getElementById('details-panel').style.display = 'none';
  activePlace = null;
}

function openSecurityModal() {
  if (!activePlace) return;
  const bodyHtml = `
    <form id="sec-form" style="display:flex; flex-direction:column; gap:12px;">
      <p style="font-size:13px; color:var(--text-muted);">Welche Sicherheitsvorkehrungen sind dir bei <b>${activePlace.name}</b> aufgefallen?</p>
      <div class="form-checkbox-group">
        <label class="checkbox-label"><input type="checkbox" id="check-sec" ${activePlace.security?.security ? 'checked' : ''}> 👮 Security vor Ort</label>
        <label class="checkbox-label"><input type="checkbox" id="check-alarm" ${activePlace.security?.alarm ? 'checked' : ''}> 🚨 Alarmanlagen / Bewegungsmelder</label>
        <label class="checkbox-label"><input type="checkbox" id="check-cam" ${activePlace.security?.cameras ? 'checked' : ''}> 📹 Überwachungskameras</label>
        <label class="checkbox-label"><input type="checkbox" id="check-dogs" ${activePlace.security?.dogs ? 'checked' : ''}> 🐕 Wachhunde</label>
      </div>
      <button type="button" class="btn-primary-action" style="margin-top:8px;" onclick="saveSecurityStatus()">Status aktualisieren</button>
    </form>
  `;
  openModal('Sicherheits-Status melden', bodyHtml);
}

function saveSecurityStatus() {
  if (!activePlace) return;
  activePlace.security = {
    security: document.getElementById('check-sec').checked,
    alarm: document.getElementById('check-alarm').checked,
    cameras: document.getElementById('check-cam').checked,
    dogs: document.getElementById('check-dogs').checked
  };
  showDetails(activePlace);
  closeModal();
}

function openPhotoModal() {
  if (!activePlace) return;
  const bodyHtml = `
    <div style="display:flex; flex-direction:column; gap:12px;">
      <p style="font-size:13px; color:var(--text-muted);">Lade ein eigenes Foto zu <b>${activePlace.name}</b> hoch.</p>
      <input type="file" id="photo-file-input" accept="image/png,image/jpeg,image/webp" style="width:100%; padding:9px; border-radius:6px; background:#0c0f14; border:1px solid var(--panel-border); color:var(--text); font-size:12px;">
      <button type="button" class="btn-primary-action" onclick="savePhoto()">Foto hinzufügen</button>
    </div>
  `;
  openModal('Foto hochladen', bodyHtml);
}

function savePhoto() {
  const file = document.getElementById('photo-file-input').files[0];
  if (!file || !activePlace) return;
  if (!canPost('Upload', 60)) { openModal('Bitte kurz warten', '<p style="color:var(--text-muted);font-size:13px">Zum Schutz vor Spam ist ein Bild pro Minute möglich.</p>'); return; }
  if (file.size > 2 * 1024 * 1024) {
    openModal('Bild zu groß', '<p style="color:var(--text-muted);font-size:13px;line-height:1.55;">Bitte wähle ein Bild bis maximal 2 MB.</p>');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const uploads = uploadStore.get();
    uploads.push({ id: String(Date.now()), spot: activePlace.name, url: reader.result, note: 'Foto von der Community-Galerie eingereicht.', status: 'pending' });
    uploadStore.set(uploads);
    grantXP(15);
    openModal('Foto eingereicht', '<p style="color:var(--text-muted);font-size:13px;line-height:1.55;">Danke! Dein Foto wird erst nach der Prüfung durch das Moderationsteam in der Galerie sichtbar.</p>');
  };
  reader.readAsDataURL(file);
}

function toggleSubscription(spotId) {
  const subscriptions = subscriptionStore.get();
  subscriptionStore.set(subscriptions.includes(spotId) ? subscriptions.filter(id => id !== spotId) : [...subscriptions, spotId]);
  showDetails(activePlace);
}

function openAddSpotModal() {
  const categories = Object.entries(CATEGORIES).map(([key, cat]) => `<option value="${key}">${cat.name}</option>`).join('');
  openModal('Neuen Spot vorschlagen', `<form onsubmit="saveNewSpot(event)" class="add-spot-form"><p>Spot-Vorschläge werden vor einer Veröffentlichung geprüft. Teile keine sensiblen Zugangsinformationen.</p><input id="new-spot-name" required maxlength="80" placeholder="Name des Ortes"><select id="new-spot-category">${categories}</select><input id="new-spot-coords" required placeholder="Koordinaten: 51.123, 6.456 oder 51°12'29.3\"N 6°22'22.6\"E"><textarea id="new-spot-desc" required maxlength="300" placeholder="Kurze Beschreibung, keine Zugänge"></textarea><label class="upload-file">📷 Titelbild hinzufügen <input id="new-spot-image" type="file" accept="image/png,image/jpeg,image/webp"></label><fieldset class="security-select"><legend>Sicherheit vor Ort</legend><label><input type="checkbox" name="spot-sec" value="security"> Security</label><label><input type="checkbox" name="spot-sec" value="alarm"> Alarm</label><label><input type="checkbox" name="spot-sec" value="cameras"> Kameras</label><label><input type="checkbox" name="spot-sec" value="dogs"> Wachhunde</label></fieldset><button class="btn-primary-action" type="submit">Spot zur Prüfung einreichen</button></form>`);
}

function parseCoordinates(value) { const decimal = value.match(/^\s*(-?\d+(?:\.\d+)?)\s*[,;\s]\s*(-?\d+(?:\.\d+)?)\s*$/); if (decimal) return [Number(decimal[1]), Number(decimal[2])]; const dms = value.match(/(\d+)°(\d+)'([\d.]+)"?\s*([NS])\s+(\d+)°(\d+)'([\d.]+)"?\s*([EW])/i); if (!dms) return null; const lat=(+dms[1])+(+dms[2])/60+(+dms[3])/3600, lng=(+dms[5])+(+dms[6])/60+(+dms[7])/3600; return [dms[4].toUpperCase()==='S'?-lat:lat,dms[8].toUpperCase()==='W'?-lng:lng]; }
function saveNewSpot(event) { event.preventDefault(); if (!canPost('Spot', 120)) { openModal('Bitte kurz warten', '<p style="color:var(--text-muted);font-size:13px">Spot-Vorschläge sind zum Schutz vor Spam nur alle zwei Minuten möglich.</p>'); return; } const coords=parseCoordinates(document.getElementById('new-spot-coords').value); if(!coords){openModal('Koordinaten prüfen','<p style="color:var(--text-muted);font-size:13px">Bitte nutze Dezimalgrad oder Grad/Minuten/Sekunden.</p>');return;} const selected=[...document.querySelectorAll('input[name="spot-sec"]:checked')].reduce((o,x)=>(o[x.value]=true,o),{}); const create=(image)=>{const spots=spotStore.get();spots.push({id:`user-${Date.now()}`,name:document.getElementById('new-spot-name').value.trim(),category:document.getElementById('new-spot-category').value,latitude:coords[0],longitude:coords[1],description:document.getElementById('new-spot-desc').value.trim(),image:image||'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=700&q=80',security:selected,gallery:[],author:'Felix S.'});spotStore.set(spots);grantXP(30);closeModal();renderMarkers();}; const file=document.getElementById('new-spot-image').files[0];if(file&&file.size<=2*1024*1024){const reader=new FileReader();reader.onload=()=>create(reader.result);reader.readAsDataURL(file)}else create(null); }

function openReportModal(place) { openModal('Spot melden', `<form class="add-spot-form" onsubmit="saveReport(event, '${place.id}')"><p>Missbrauch, falsche Angaben oder sensible Informationen? Das Team prüft jede Meldung.</p><select id="report-reason"><option>Falsche oder veraltete Angaben</option><option>Sensible Zugangsinformationen</option><option>Rechtsverletzung / Eigentumsproblem</option><option>Anderer Grund</option></select><textarea id="report-note" maxlength="500" placeholder="Optionale Erläuterung"></textarea><button class="btn-primary-action">Meldung senden</button></form>`); }
function saveReport(event, spotId) { event.preventDefault(); if(!canPost('Report',60))return; const reports=reportStore.get();reports.push({id:Date.now(),spotId,reason:document.getElementById('report-reason').value,note:document.getElementById('report-note').value,status:'pending'});reportStore.set(reports);openModal('Meldung erhalten','<p style="color:var(--text-muted);font-size:13px">Danke. Das Moderationsteam prüft den Hinweis.</p>'); }

function openModal(title, bodyContent = '') {
  const modal = document.getElementById('modal-overlay');
  document.getElementById('modal-title').innerText = title;
  if (bodyContent) {
    document.getElementById('modal-body').innerHTML = bodyContent;
  } else {
    document.getElementById('modal-body').innerHTML = `<p style="color:var(--text-muted); font-size:13px;">Funktion „${title}“ wird angebunden.</p>`;
  }
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}

window.addEventListener('load', initMap);
