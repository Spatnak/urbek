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
let selectedCategories = new Set();
let pendingCategories = new Set();
let searchQuery = '';
let map, clusterGroup;
let activePlace = null;

function initMap() {
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
  const allActive = pendingCategories.size === Object.keys(CATEGORIES).length ? ' active' : '';
  let html = `<button onclick="setCategory('all')" id="cat-btn-all" class="cat-item-btn${allActive}" style="grid-column: span 2;"><span class="cat-item-icon cat-item-icon-all" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.5 4.2 5.5 4.2 9S14.8 18.5 12 21c-2.8-2.5-4.2-5.5-4.2-9S9.2 5.5 12 3z"/></svg></span><span>Alle Kategorien</span></button>`;
  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const isActive = pendingCategories.has(key) ? ' active' : '';
    html += `<button onclick="setCategory('${key}')" id="cat-btn-${key}" class="cat-item-btn${isActive}"><span class="cat-item-icon" style="color:${cat.color};" aria-hidden="true">${cat.icon}</span><span>${cat.name}</span></button>`;
  });
  html += `<button onclick="confirmCategories()" class="btn-confirm-categories">Auswahl bestätigen</button>`;
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
  if (catKey === 'all') {
    const categoryKeys = Object.keys(CATEGORIES);
    pendingCategories = pendingCategories.size === categoryKeys.length
      ? new Set()
      : new Set(categoryKeys);
  } else if (pendingCategories.has(catKey)) {
    pendingCategories.delete(catKey);
  } else {
    pendingCategories.add(catKey);
  }

  renderFilterDropdown();
  applyCategorySelection();
}

function applyCategorySelection() {
  selectedCategories = new Set(pendingCategories);
  const label = selectedCategories.size === 0
    ? 'Keine Kategorien'
    : selectedCategories.size === Object.keys(CATEGORIES).length
      ? 'Alle Kategorien'
    : selectedCategories.size === 1
      ? CATEGORIES[[...selectedCategories][0]].name
      : `${selectedCategories.size} Kategorien`;
  document.getElementById('selected-cat-label').innerText = label;
  renderMarkers();
}

function confirmCategories() {
  closeCategoryMenu();
}

function createCustomPinSVG(color, iconSvg) {
  return `
    <div class="custom-urbex-pin">
      <svg class="pin-svg-wrapper" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 10.5 13.8 24.6 15.1 25.8a1.2 1.2 0 001.8 0C18.2 40.6 32 26.5 32 16 32 7.163 24.837 0 16 0z" fill="#0c0f14"/>
        <path d="M16 2C8.268 2 2 8.268 2 16c0 9.2 12.4 22.4 14 24 1.6-1.6 14-14.8 14-24C30 8.268 23.732 2 16 2z" fill="#1a2028"/>
        <circle cx="16" cy="16" r="10" fill="${color}" fill-opacity="0.25" stroke="${color}" stroke-width="1.5"/>
      </svg>
      <div class="pin-icon-container">${iconSvg}</div>
    </div>
  `;
}

function renderMarkers() {
  clusterGroup.clearLayers();
  const filtered = MOCK_PLACES.filter(place => {
    const matchesCat = selectedCategories.size > 0 && selectedCategories.has(place.category);
    const matchesSearch = !searchQuery || place.name.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  filtered.forEach(place => {
    const cat = CATEGORIES[place.category] || { color: "#3d9a6a", icon: SVG_ICONS.industrial };
    const pinHtml = createCustomPinSVG(cat.color, cat.icon);
    const icon = L.divIcon({
      html: pinHtml,
      className: '',
      iconSize: [32, 42],
      iconAnchor: [16, 42]
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

  updateSecurityBadge('sec-security', place.security?.security);
  updateSecurityBadge('sec-alarm', place.security?.alarm);
  updateSecurityBadge('sec-cameras', place.security?.cameras);
  updateSecurityBadge('sec-dogs', place.security?.dogs);

  const galleryList = document.getElementById('gallery-list');
  let galleryHtml = '';
  if (place.gallery && place.gallery.length > 0) {
    place.gallery.forEach(imgUrl => {
      galleryHtml += `<img class="gallery-thumb" src="${imgUrl}" onclick="openModal('Foto Ansicht', '<img src=\\'${imgUrl}\\' style=\\'width:100%; border-radius:6px;\\'>')" />`;
    });
  }
  galleryHtml += `<button class="btn-add-photo" onclick="openPhotoModal()"><span>📷</span><span>+ Foto</span></button>`;
  galleryList.innerHTML = galleryHtml;

  document.getElementById('detail-route-btn').onclick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`, '_blank');
  };

  panel.style.display = 'flex';
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
      <input type="text" id="photo-url-input" placeholder="Bild-URL einfügen (z. B. Imgur…)" style="width:100%; padding:9px 11px; border-radius:6px; background:#0c0f14; border:1px solid var(--panel-border); color:var(--text); outline:none; font-size:13px;">
      <button type="button" class="btn-primary-action" onclick="savePhoto()">Foto hinzufügen</button>
    </div>
  `;
  openModal('Foto hochladen', bodyHtml);
}

function savePhoto() {
  const url = document.getElementById('photo-url-input').value;
  if (url && activePlace) {
    if (!activePlace.gallery) activePlace.gallery = [];
    activePlace.gallery.push(url);
    showDetails(activePlace);
  }
  closeModal();
}

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
