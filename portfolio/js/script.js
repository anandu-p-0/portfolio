/**
 * Smooth & Simple Portfolio Logic - Anandu P (Unreal Engine 5 Developer)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initProjectFilters();
  initContactForm();
  initScrollSpy();
  initMobileMenu();
});

/* ==========================================================================
   1. SMOOTH TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const titles = [
    'Unreal Engine 5 Game Developer',
    '3D Level Designer & World Builder',
    'Blueprint Gameplay Programmer',
    'Environment Artist & Lighting Specialist'
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 70;
  const deleteSpeed = 35;
  const holdTime = 1800;

  function type() {
    const current = titles[titleIndex];
    if (isDeleting) {
      target.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === current.length) {
      delay = holdTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   2. PROJECT GALLERY & LIGHTBOX MODAL DATA
   ========================================================================== */
const projectData = {
  ganesha: {
    tag: 'UNREAL ENGINE 5 • ENVIRONMENT ART',
    title: 'Sacred Cave Ganesha Shrine',
    image: 'assets/projects/ganesha_shrine.jpg',
    content: `
      <div class="space-y-4">
        <p class="text-xs text-slate-300 leading-relaxed">
          An atmospheric underground shrine crafted in Unreal Engine 5. The scene features a detailed Ganesha statue resting upon a concentric stone platform with surrounding ceremonial pillars inside a naturally sculpted rocky cavern.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-cyan-400 font-bold block mb-1">Key Technical Highlights:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• Directional sunlight through cave crevice</li>
              <li>• High-resolution rock mesh placement</li>
              <li>• Contrast-rich contact shadows</li>
              <li>• Autumn tree & ground foliage scatter</li>
            </ul>
          </div>
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-cyan-400 font-bold block mb-1">Tools & Techniques:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• Unreal Engine 5 Editor</li>
              <li>• Foliage Mode & Painter</li>
              <li>• Post-Process Exposure Management</li>
              <li>• Composition & Camera Focal Length</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  coastal: {
    tag: 'UNREAL ENGINE 5 • LIGHTING & LANDSCAPE',
    title: 'Coastal Cabin & Sunset Flower Haven',
    image: 'assets/projects/coastal_sunset.jpg',
    content: `
      <div class="space-y-4">
        <p class="text-xs text-slate-300 leading-relaxed">
          A tranquil coastal scene designed in Unreal Engine 5 featuring a stilt wooden cabin overlooking a sandy ocean shore, lush floral pathways, ocean water shader, and warm sunset global illumination.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-amber-400 font-bold block mb-1">Key Technical Highlights:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• Golden Hour dynamic atmosphere</li>
              <li>• Dense multi-colored flower bed placement</li>
              <li>• Rocky sea cliff background composition</li>
              <li>• Translucent ocean water reflection</li>
            </ul>
          </div>
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-amber-400 font-bold block mb-1">Tools & Techniques:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• Unreal Engine 5 Landscape System</li>
              <li>• Foliage Density & Cull Distances</li>
              <li>• Directional Sun & Sky Atmosphere</li>
              <li>• Water Shading & Shoreline blending</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  zen: {
    tag: 'UNREAL ENGINE 5 • TERRAIN & ARCHITECTURE',
    title: 'Japanese Zen Garden & Torii Gate Diorama',
    image: 'assets/projects/zen_garden.jpg',
    content: `
      <div class="space-y-4">
        <p class="text-xs text-slate-300 leading-relaxed">
          A stylized Japanese Zen Garden diorama constructed on a raised stone terrace with red Torii gates, a hexagonal pagoda gazebo, stone pathways, and autumn red trees situated in a rugged mountain basin.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-rose-400 font-bold block mb-1">Key Technical Highlights:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• Raised terrace blockout & stone steps</li>
              <li>• Torii entrance alignment & scale</li>
              <li>• Mountain valley terrain sculpting</li>
              <li>• Multi-layer vegetation & bushes</li>
            </ul>
          </div>
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-rose-400 font-bold block mb-1">Tools & Techniques:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• UE5 Landscape Sculpting Tools</li>
              <li>• Static Mesh Assembly</li>
              <li>• Foliage Cluster Paint</li>
              <li>• Lighting & Shadow Quality</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  desert: {
    tag: 'UNREAL ENGINE 5 • BIOME & WATER SHADER',
    title: 'Desert Oasis Island & Water Landscape',
    image: 'assets/projects/desert_oasis.jpg',
    content: `
      <div class="space-y-4">
        <p class="text-xs text-slate-300 leading-relaxed">
          An arid desert biome built in Unreal Engine 5 featuring rolling sand dunes, rocky plateau mesas, and a central circular oasis lagoon surrounded by palm trees and vegetation.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-emerald-400 font-bold block mb-1">Key Technical Highlights:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• Circular water body placement & shader</li>
              <li>• Palm tree and desert brush distribution</li>
              <li>• Smooth sand dune contouring</li>
              <li>• Natural sun glare and specular highlights</li>
            </ul>
          </div>
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-emerald-400 font-bold block mb-1">Tools & Techniques:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• UE5 Landscape Heightmaps</li>
              <li>• Foliage Mode Instancing</li>
              <li>• Directional Light & Skylight</li>
              <li>• Landscape Material Layers</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  village: {
    tag: 'UNREAL ENGINE 5 • LEVEL DESIGN & WORLD BUILDING',
    title: 'Medieval Lakeside Settlement',
    image: 'assets/projects/medieval_village.jpg',
    content: `
      <div class="space-y-4">
        <p class="text-xs text-slate-300 leading-relaxed">
          An expansive medieval settlement layout in Unreal Engine 5 featuring modular timber houses, stone boundary walls, docks with boats, and lush surrounding forests beside a mountain lake.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-purple-400 font-bold block mb-1">Key Technical Highlights:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• Village blockout & building layout</li>
              <li>• Shoreline docks & wooden boats</li>
              <li>• Dense tree canopy framing the lake</li>
              <li>• Natural stone cliff boundaries</li>
            </ul>
          </div>
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-purple-400 font-bold block mb-1">Tools & Techniques:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• Level Design & Spatial Composition</li>
              <li>• Modular Asset Snapping</li>
              <li>• Lake Water & Foliage Painter</li>
              <li>• Lighting Bake & Lumen GI</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  runner: {
    tag: 'UNREAL ENGINE 5 • FLAGSHIP GAMEPLAY',
    title: 'Jungle Run: Ancient Escape (Endless Runner)',
    image: 'assets/projects/jungle_run.jpg',
    content: `
      <div class="space-y-4">
        <p class="text-xs text-slate-300 leading-relaxed">
          <strong>Jungle Run: Ancient Escape</strong> is a fast-paced endless runner game developed in Unreal Engine 5 using Blueprint visual scripting. The game features ancient temple jungle environments, procedural obstacle spawning (stone spikes, ancient ruins, stone golems), dynamic player locomotion, high score persistence, and in-game UI menus.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-cyan-400 font-bold block mb-1">Key Gameplay Systems:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• Player locomotion: responsive jumps & lane movement</li>
              <li>• Dynamic obstacle & spiked hazard spawning</li>
              <li>• Collision hitboxes & game-over death loops</li>
              <li>• Score multiplier & SaveGame high scores</li>
            </ul>
          </div>
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span class="text-cyan-400 font-bold block mb-1">UI & Visual Architecture:</span>
            <ul class="space-y-1 text-slate-400 text-[11px]">
              <li>• UMG Start Menu, HUD & Settings screens</li>
              <li>• Ancient temple & stone golem theme</li>
              <li>• Post-process visual effects & lighting</li>
              <li>• Optimized for 60+ FPS stable frame rates</li>
            </ul>
          </div>
        </div>
      </div>
    `
  }
};

window.openLightbox = function(key) {
  const data = projectData[key];
  if (!data) return;

  document.getElementById('lbTag').textContent = data.tag;
  document.getElementById('lbTitle').textContent = data.title;
  document.getElementById('lbContent').innerHTML = data.content;

  const imgEl = document.getElementById('lbImage');
  const imgContainer = document.getElementById('lbImageContainer');

  if (data.image) {
    imgEl.src = data.image;
    imgEl.alt = data.title;
    imgContainer.classList.remove('hidden');
  } else {
    imgContainer.classList.add('hidden');
  }

  const modal = document.getElementById('projectLightbox');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const modal = document.getElementById('projectLightbox');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
};

document.getElementById('projectLightbox')?.addEventListener('click', (e) => {
  if (e.target.id === 'projectLightbox') {
    window.closeLightbox();
  }
});

/* ==========================================================================
   3. PROJECT FILTER TABS
   ========================================================================== */
function initProjectFilters() {
  const pills = document.querySelectorAll('.filter-pill');
  const items = document.querySelectorAll('.project-item');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || (cat && cat.includes(filter))) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   4. RESUME MODAL HANDLERS
   ========================================================================== */
window.printResumeModal = function() {
  const modal = document.getElementById('resumeModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
};

window.closeResumeModal = function() {
  const modal = document.getElementById('resumeModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
};

document.getElementById('resumeModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'resumeModal') {
    window.closeResumeModal();
  }
});

/* ==========================================================================
   5. CONTACT FORM & CLIPBOARD COPY
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const msg = document.getElementById('messageBody').value.trim();

    if (!name || !email || !msg) {
      showToast('Please fill out all fields!');
      return;
    }

    const mailtoUrl = `mailto:anandu442@gmail.com?subject=${encodeURIComponent('Inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`)}`;
    
    showToast('Transmission received! Opening email...');
    setTimeout(() => {
      window.location.href = mailtoUrl;
      form.reset();
    }, 600);
  });
}

window.copyToClipboard = function(text, successMsg = 'Copied to clipboard!') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
  }).catch(() => {
    showToast('Copy failed: ' + text);
  });
};

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msg = document.getElementById('toastMessage');
  if (!toast || !msg) return;

  msg.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

/* ==========================================================================
   6. SCROLLSPY & MOBILE MENU
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}
