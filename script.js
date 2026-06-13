/* ================= TRANSLATIONS ================= */

const translations = {
  ar: {
    home: "الرئيسية",
    menu: "المنيو",
    offers: "العروض",
    contact: "تواصل معنا",
    order: "اطلب الآن",
    menu_section: "قائمة الطعام",
    hero_title: "أكل لذيذ معمول بحب 🍽️",
    hero_desc: "استمتع بأفضل طعم مع ماما نونا",
    hero_btn: "اطلب الآن",
    footer: "© 2026 ماما نونا. جميع الحقوق محفوظة"
  },
  en: {
    home: "Home",
    menu: "Menu",
    offers: "Offers",
    contact: "Contact",
    order: "Order Now",
    menu_section: "Our Menu",
    hero_title: "Delicious Food Made With Love 🍽️",
    hero_desc: "Experience the best taste with Mama Nona",
    hero_btn: "Order Now",
    footer: "© 2026 Mama Nona. All Rights Reserved"
  }
};

/* ================= LANGUAGE ================= */

let currentLang = 'ar'; // Default language is Arabic

function setLang(lang) {
  currentLang = lang;
  const flag = document.getElementById("currentFlag");

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  if (flag) {
    flag.innerText = (lang === "ar") ? "🇸🇦" : "🇺🇸";
  }

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // Reset carousel when language changes
  resetCarousel();
}

/* ================= PRODUCTS ================= */

const products = [
  { id: 1,  name: "كشري",           desc: "طبق مصري شعبي غني بالنكهات",     image: "assets/images/koshary.jpg",     sizes: { S: 40,  M: 55,  L: 70  } },
  { id: 2,  name: "ملوخية",          desc: "ملوخية بيتية بطعم أصلي",          image: "assets/images/molokhia.jpg",    sizes: { S: 35,  M: 50,  L: 65  } },
  { id: 3,  name: "فراخ مشوية",      desc: "دجاج مشوي بتتبيلة خاصة",          image: "assets/images/grilled.jpg",     sizes: { S: 90,  M: 120, L: 150 } },
  { id: 4,  name: "مكرونة بشاميل",   desc: "مكرونة بصوص البشاميل الشهية",     image: "assets/images/pasta.jpg",       sizes: { S: 50,  M: 65,  L: 85  } },
  { id: 5,  name: "كفتة مشوية",      desc: "كفتة مشوية بتتبيلة خاصة",         image: "assets/images/kofta.jpg",       sizes: { S: 60,  M: 80,  L: 100 } },
  { id: 6,  name: "رز بلبن",         desc: "حلوى مصرية تقليدية",              image: "assets/images/ricepudding.jpg", sizes: { S: 25,  M: 35,  L: 45  } },
  { id: 7,  name: "أم علي",          desc: "حلوى شرقية غنية بالمكسرات",       image: "assets/images/omali.jpg",       sizes: { S: 35,  M: 50,  L: 70  } },
  { id: 8,  name: "محشي مشكل",       desc: "محشي ورق عنب وكوسة وباذنجان",     image: "assets/images/stuffed.jpg",     sizes: { S: 55,  M: 75,  L: 95  } },
  { id: 9,  name: "شاورما فراخ",     desc: "شاورما بطعم عربي أصيل",           image: "assets/images/shawarma.jpg",    sizes: { S: 70,  M: 95,  L: 120 } },
  { id: 10, name: "بيتزا ماما نونا", desc: "بيتزا بطابع منزلي مميز",          image: "assets/images/pizza.jpg",       sizes: { S: 80,  M: 110, L: 140 } }
];

/* ================= RENDER PRODUCTS ================= */

const menuContainer = document.getElementById("menuContainer");

function renderProducts() {
  if (!menuContainer) return;

  menuContainer.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML = `
      <img src="${p.image}" class="food-img" alt="${p.name}">
      <div class="food-body">
        <h5>${p.name}</h5>
        <p>${p.desc}</p>
        <div class="sizes">
          <button class="size active" data-price="${p.sizes.S}">S</button>
          <button class="size"        data-price="${p.sizes.M}">M</button>
          <button class="size"        data-price="${p.sizes.L}">L</button>
        </div>
        <div class="price">${p.sizes.S} EGP</div>
        <button class="btn-add-cart">🛒 أضف للسلة</button>
      </div>
    `;

    menuContainer.appendChild(card);
  });
}

renderProducts();

/* ================= SIZE CHANGE ================= */

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("size")) {
    const card = e.target.closest(".food-card");
    if (!card) return;

    const priceEl = card.querySelector(".price");
    const sizes   = card.querySelectorAll(".size");

    sizes.forEach(s => s.classList.remove("active"));
    e.target.classList.add("active");
    priceEl.textContent = e.target.dataset.price + " EGP";
  }
});

/* ================= SLIDER ================= */

let index = 0;
let itemsPerPage = 5;
let autoTimer = null;

const track   = document.getElementById("menuContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function getItemsPerPage() {
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1200) return 2;
  return 5;
}

function getCardStep() {
  const card = track.querySelector(".food-card");
  if (!card) return 300;
  return card.offsetWidth + 20; // 20 = gap
}

function maxIndex() {
  itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(products.length / itemsPerPage);
  return Math.max(0, totalPages - 1);
}

function goTo(i) {
  index = Math.max(0, Math.min(i, maxIndex()));
  const cardStep = getCardStep();
  const direction = currentLang === 'ar' ? 1 : -1;
  track.style.transform = `translateX(${direction * index * itemsPerPage * cardStep}px)`;
}

function resetCarousel() {
  index = 0;
  goTo(0);
}

prevBtn?.addEventListener("click", () => goTo(index - 1));
nextBtn?.addEventListener("click", () => goTo(index + 1));

function startAutoSlide() {
  autoTimer = setInterval(() => {
    if (index >= maxIndex()) {
      goTo(0);
    } else {
      goTo(index + 1);
    }
  }, 3000);
}

startAutoSlide();

/* ---- وقف عند hover ---- */
track?.addEventListener("mouseenter", () => {
  if (autoTimer) clearInterval(autoTimer);
});

track?.addEventListener("mouseleave", () => {
  startAutoSlide();
});

/* ---- تحديث عند تغيير حجم الشاشة ---- */
window.addEventListener("resize", () => {
  goTo(index);
});

/* ================= INITIALIZE ================= */

// Set Arabic as default language on page load
document.addEventListener("DOMContentLoaded", function() {
  setLang('ar');
});

/* ================= ABOUT SECTION TRANSLATIONS ================= */

// أضف هذه الترجمات إلى كائن translations الموجود:

// في translations.ar أضف:
translations.ar.about_title = "طعام منزلي معمول بحب";
translations.ar.about_desc = "نحن نقدم أطباقاً مصرية أصيلة معدة بحب من مكونات طازجة يومياً. كل طبق يعكس تراثنا وشغفنا بالطعام الحقيقي.";
translations.ar.about_btn = "اطلب الآن";

// في translations.en أضف:
translations.en.about_title = "Homemade Food, Made With Love";
translations.en.about_desc = "We offer authentic Egyptian dishes prepared with love from fresh ingredients daily. Every dish reflects our heritage and passion for real food.";
translations.en.about_btn = "Order Now";

/* ================= ABOUT SECTION INTERSECTION OBSERVER ================= */

// للتحكم بالـ Animations عند الوصول للـ Section

const aboutSection = document.getElementById("about");

if (aboutSection) {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(aboutSection);
}


/* ================= FLOATING OFFERS WIDGET ================= */

const offersData = [
  {
    id: 1,
    name: "كشري",
    image: "assets/images/koshary.jpg",
    oldPrice: 70,
    newPrice: 50,
    discount: 28,
    tag: "Today Offer"
  },
  {
    id: 2,
    name: "ملوخية",
    image: "assets/images/molokhia.jpg",
    oldPrice: 65,
    newPrice: 45,
    discount: 30,
    tag: "Weekly Deal"
  },
  {
    id: 3,
    name: "فراخ مشوية",
    image: "assets/images/grilled.jpg",
    oldPrice: 150,
    newPrice: 120,
    discount: 20,
    tag: "Limited Offer"
  },
  {
    id: 4,
    name: "مكرونة بشاميل",
    image: "assets/images/pasta.jpg",
    oldPrice: 85,
    newPrice: 65,
    discount: 23,
    tag: "Flash Sale"
  },
  {
    id: 5,
    name: "شاورما فراخ",
    image: "assets/images/shawarma.jpg",
    oldPrice: 120,
    newPrice: 90,
    discount: 25,
    tag: "Today Offer"
  }
];

let currentOfferIndex = 0;
let offersAutoTimer = null;
let isOffersHovered = false;

const offersWidget = document.getElementById("offersWidget");
const offersContent = offersWidget?.querySelector(".offers-content");
const offersDots = offersWidget?.querySelector(".offers-dots");
const closeOffersBtn = document.getElementById("closeOffersBtn");

// ---- Render Offers ----
function renderOffers() {
  if (!offersContent || !offersDots) return;

  offersContent.innerHTML = "";
  offersDots.innerHTML = "";

  offersData.forEach((offer, index) => {
    // Offer Item
    const offerItem = document.createElement("div");
    offerItem.className = `offer-item ${index === 0 ? "active" : ""}`;
    offerItem.innerHTML = `
      <span class="offer-badge">${offer.tag}</span>
      <img src="${offer.image}" class="offer-img" alt="${offer.name}">
      <h5 class="offer-name">${offer.name}</h5>
      <div class="offer-prices">
        <span class="offer-old-price">${offer.oldPrice} EGP</span>
        <span class="offer-new-price">${offer.newPrice} EGP</span>
        <span class="offer-discount">-${offer.discount}%</span>
      </div>
      <button class="offer-btn" onclick="orderOffer(${offer.id})">Order Now</button>
    `;
    offersContent.appendChild(offerItem);

    // Dot
    const dot = document.createElement("div");
    dot.className = `dot ${index === 0 ? "active" : ""}`;
    dot.onclick = () => goToOffer(index);
    offersDots.appendChild(dot);
  });
}

// ---- Change Offer ----
function goToOffer(index) {
  currentOfferIndex = index;
  
  const items = offersContent?.querySelectorAll(".offer-item");
  const dots = offersDots?.querySelectorAll(".dot");

  items?.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });

  dots?.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// ---- Auto Change Offers ----
function startOffersAutoSlide() {
  offersAutoTimer = setInterval(() => {
    currentOfferIndex = (currentOfferIndex + 1) % offersData.length;
    goToOffer(currentOfferIndex);
  }, 4000);
}

// ---- Pause on Hover ----
offersWidget?.addEventListener("mouseenter", () => {
  isOffersHovered = true;
  if (offersAutoTimer) clearInterval(offersAutoTimer);
});

offersWidget?.addEventListener("mouseleave", () => {
  isOffersHovered = false;
  startOffersAutoSlide();
});

// ---- Close Button ----
closeOffersBtn?.addEventListener("click", () => {
  if (offersWidget) {
    offersWidget.classList.add("hidden");
    if (offersAutoTimer) clearInterval(offersAutoTimer);
  }
});

// ---- Order Function ----
function orderOffer(offerId) {
  const offer = offersData.find(o => o.id === offerId);
  if (offer) {
    // يمكن تغيير هذا للفتح في واتساب أو إضافة للسلة
    alert(`تم اختيار: ${offer.name}\nالسعر: ${offer.newPrice} EGP`);
    // مثال: window.open(`https://wa.me/...?text=أريد ${offer.name}` );
  }
}

// ---- Hide Widget When Scroll Past Hero ----
window.addEventListener("scroll", () => {
  const heroSection = document.getElementById("hero");
  if (!heroSection || !offersWidget) return;

  const heroBottom = heroSection.offsetHeight;
  if (window.scrollY > heroBottom) {
    offersWidget.style.opacity = "0.3";
    offersWidget.style.pointerEvents = "none";
  } else {
    offersWidget.style.opacity = "1";
    offersWidget.style.pointerEvents = "auto";
  }
});

// ---- Initialize ----
document.addEventListener("DOMContentLoaded", () => {
  renderOffers();
  startOffersAutoSlide();
});