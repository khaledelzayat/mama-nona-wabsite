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
    footer: "© 2026 ماما نونا. جميع الحقوق محفوظة",
    why_badge: "لماذا اختيارنا",
    why_title: "لماذا تختار ماما نونا؟",
    why_subtitle: "نحن ملتزمون بتقديم أفضل تجربة طعام بجودة وطعم وحب.",
    offers_title: "عروض اليوم الخاصة",
    offers_subtitle: "اكتشف أحدث الخصومات والعروض الحصرية.",
    daily_offers: "عروض اليوم",
    weekly_offers: "عروض الأسبوع"
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
    footer: "© 2026 Mama Nona. All Rights Reserved",
    why_badge: "WHY CHOOSE US",
    why_title: "Why Choose Mama Nona?",
    why_subtitle: "We're committed to delivering the best food experience with quality, taste, and care.",
    offers_title: "Today's Special Offers",
    offers_subtitle: "Discover our latest discounts and exclusive deals.",
    daily_offers: "Daily Offers",
    weekly_offers: "Weekly Offers"
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

/* ================= FLOATING OFFERS WIDGET ================= */

const floatingOffersData = [
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

let currentFloatingOfferIndex = 0;
let floatingOffersAutoTimer = null;

const offersWidget = document.getElementById("offersWidget");
const offersContent = offersWidget?.querySelector(".offers-content");
const offersDots = offersWidget?.querySelector(".offers-dots");
const closeOffersBtn = document.getElementById("closeOffersBtn");

// ---- Render Floating Offers ----
function renderFloatingOffers() {
  if (!offersContent || !offersDots) return;

  offersContent.innerHTML = "";
  offersDots.innerHTML = "";

  floatingOffersData.forEach((offer, index) => {
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
      <button class="offer-btn" onclick="orderFloatingOffer(${offer.id})">Order Now</button>
    `;
    offersContent.appendChild(offerItem);

    // Dot
    const dot = document.createElement("div");
    dot.className = `dot ${index === 0 ? "active" : ""}`;
    dot.onclick = () => goToFloatingOffer(index);
    offersDots.appendChild(dot);
  });
}

// ---- Change Floating Offer ----
function goToFloatingOffer(index) {
  currentFloatingOfferIndex = index;
  
  const items = offersContent?.querySelectorAll(".offer-item");
  const dots = offersDots?.querySelectorAll(".dot");

  items?.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });

  dots?.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// ---- Auto Change Floating Offers ----
function startFloatingOffersAutoSlide() {
  floatingOffersAutoTimer = setInterval(() => {
    currentFloatingOfferIndex = (currentFloatingOfferIndex + 1) % floatingOffersData.length;
    goToFloatingOffer(currentFloatingOfferIndex);
  }, 4000);
}

// ---- Pause on Hover ----
offersWidget?.addEventListener("mouseenter", () => {
  if (floatingOffersAutoTimer) clearInterval(floatingOffersAutoTimer);
});

offersWidget?.addEventListener("mouseleave", () => {
  startFloatingOffersAutoSlide();
});

// ---- Close Button ----
closeOffersBtn?.addEventListener("click", () => {
  if (offersWidget) {
    offersWidget.classList.add("hidden");
    if (floatingOffersAutoTimer) clearInterval(floatingOffersAutoTimer);
  }
});

// ---- Order Function ----
function orderFloatingOffer(offerId) {
  const offer = floatingOffersData.find(o => o.id === offerId);
  if (offer) {
    alert(`تم اختيار: ${offer.name}\nالسعر: ${offer.newPrice} EGP`);
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

// ---- Initialize Floating Offers ----
document.addEventListener("DOMContentLoaded", () => {
  renderFloatingOffers();
  startFloatingOffersAutoSlide();
});

/* ================= WHY CHOOSE US INTERSECTION OBSERVER ================= */

const whyChooseSection = document.getElementById("why-choose-us");

if (whyChooseSection) {
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

    observer.observe(whyChooseSection);
}

/* ================= CARD HOVER EFFECT ================= */

document.querySelectorAll(".why-card").forEach(card => {
    card.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0)";
    });
});

/* ================= OFFERS SECTION DATA ================= */

const dailyOffers = [
  {
    id: 1,
    name: "فراخ مشوية",
    desc: "دجاج مشوي بتتبيلة خاصة",
    image: "assets/images/grilled.jpg",
    oldPrice: 220,
    newPrice: 170,
    discount: 23,
    endsIn: 18000
  },
  {
    id: 2,
    name: "كشري",
    desc: "طبق مصري شعبي غني بالنكهات",
    image: "assets/images/koshary.jpg",
    oldPrice: 70,
    newPrice: 50,
    discount: 28,
    endsIn: 21600
  },
  {
    id: 3,
    name: "ملوخية",
    desc: "ملوخية بيتية بطعم أصلي",
    image: "assets/images/molokhia.jpg",
    oldPrice: 65,
    newPrice: 45,
    discount: 30,
    endsIn: 14400
  }
];

const weeklyOffers = [
  {
    id: 101,
    name: "Family Meal",
    desc: "4 وجبات رئيسية + 4 مشروبات + 2 حلو",
    image: "assets/images/family-meal.jpg",
    oldPrice: 850,
    newPrice: 649,
    discount: 23,
    endsIn: 604800,
    isWeekly: true
  },
  {
    id: 102,
    name: "Couple Special",
    desc: "وجبتان رئيسيتان + 2 مشروب + حلو",
    image: "assets/images/couple-meal.jpg",
    oldPrice: 450,
    newPrice: 329,
    discount: 26,
    endsIn: 604800,
    isWeekly: true
  },
  {
    id: 103,
    name: "Party Pack",
    desc: "6 وجبات متنوعة + 6 مشروبات + 3 حلو",
    image: "assets/images/party-pack.jpg",
    oldPrice: 1200,
    newPrice: 849,
    discount: 29,
    endsIn: 604800,
    isWeekly: true
  }
];

/* ================= RENDER OFFERS SECTION ================= */

function renderOffersSection() {
  const dailyGrid = document.getElementById("dailyOffersGrid");
  const weeklyGrid = document.getElementById("weeklyOffersGrid");

  if (dailyGrid) {
    dailyGrid.innerHTML = "";
    dailyOffers.forEach(offer => {
      dailyGrid.appendChild(createOfferSectionCard(offer, false));
    });
  }

  if (weeklyGrid) {
    weeklyGrid.innerHTML = "";
    weeklyOffers.forEach(offer => {
      weeklyGrid.appendChild(createOfferSectionCard(offer, true));
    });
  }

  startOfferCountdowns();
}

/* ================= CREATE OFFER SECTION CARD ================= */

function createOfferSectionCard(offer, isWeekly = false) {
  const card = document.createElement("div");
  card.className = `offer-card ${isWeekly ? "weekly-offer" : ""}`;
  card.id = `offer-${offer.id}`;

  const discountText = isWeekly ? "BEST OFFER" : `-${offer.discount}%`;

  card.innerHTML = `
    <div class="offer-card-image">
      <img src="${offer.image}" alt="${offer.name}">
      <div class="discount-badge">${discountText}</div>
    </div>
    
    <div class="offer-card-content">
      <h5 class="offer-card-title">${offer.name}</h5>
      <p class="offer-card-desc">${offer.desc}</p>
      
      <div class="offer-prices">
        <span class="offer-old-price">${offer.oldPrice} EGP</span>
        <span class="offer-new-price">${offer.newPrice} EGP</span>
      </div>
      
      <div class="offer-countdown">
        <div style="font-size: 0.8rem; margin-bottom: 4px;">Offer Ends In</div>
        <div class="countdown-timer" data-offer-id="${offer.id}">00:00:00</div>
      </div>
      
      <button class="offer-btn" onclick="orderOfferSection(${offer.id})">
        Order Now
      </button>
    </div>
  `;

  return card;
}

/* ================= COUNTDOWN TIMER ================= */

function startOfferCountdowns() {
  const allOffers = [...dailyOffers, ...weeklyOffers];

  setInterval(() => {
    allOffers.forEach(offer => {
      const timerEl = document.querySelector(`.countdown-timer[data-offer-id="${offer.id}"]`);
      if (!timerEl) return;

      if (offer.endsIn <= 0) {
        timerEl.textContent = "EXPIRED";
        timerEl.style.color = "#999";
        return;
      }

      const hours = Math.floor(offer.endsIn / 3600);
      const minutes = Math.floor((offer.endsIn % 3600) / 60);
      const seconds = offer.endsIn % 60;

      timerEl.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      offer.endsIn--;
    });
  }, 1000);
}

/* ================= ORDER OFFER SECTION ================= */

function orderOfferSection(offerId) {
  const allOffers = [...dailyOffers, ...weeklyOffers];
  const offer = allOffers.find(o => o.id === offerId);

  if (offer) {
    alert(`تم اختيار: ${offer.name}\nالسعر: ${offer.newPrice} EGP`);
  }
}

/* ================= INITIALIZE OFFERS SECTION ================= */

document.addEventListener("DOMContentLoaded", () => {
  renderOffersSection();
});

/* ================= FOOTER TRANSLATIONS ================= */

// في translations.ar أضف:
translations.ar.hungry_title = "جوعانة؟";
translations.ar.hungry_desc = "اطلب وجبتك المفضلة الآن!";
translations.ar.location = "الموقع";
translations.ar.contact = "تواصل معنا";
translations.ar.follow_us = "تابعنا";
translations.ar.view_map = "عرض على الخريطة";
translations.ar.footer_desc = "طعام منزلي معمول بحب وطعم أصيل.";

// في translations.en أضف:
translations.en.hungry_title = "Hungry?";
translations.en.hungry_desc = "Order your favorite meal now!";
translations.en.location = "Location";
translations.en.contact = "Contact";
translations.en.follow_us = "Follow Us";
translations.en.view_map = "View on Map";
translations.en.footer_desc = "Homemade food crafted with love and authentic flavors.";

/* ================= SHOPPING CART SYSTEM ================= */

// Cart Data Structure
let cart = [];
const MINIMUM_ORDER = 100;
const FREE_SHIPPING_THRESHOLD = 300;
const RESTAURANT_PHONE = "201001234567"; // غيّر برقم المطعم

// Load cart from localStorage
function loadCart() {
  const saved = localStorage.getItem("kitchen_cart");
  cart = saved ? JSON.parse(saved) : [];
  updateCartUI();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("kitchen_cart", JSON.stringify(cart));
}

// Add to cart
function addToCart(productId, buttonElement) {
  const card = buttonElement.closest(".food-card");
  const product = products.find(p => p.id === productId);
  
  if (!product) return;

  // Get selected size
  const activeSize = card.querySelector(".size.active");
  const selectedSize = activeSize?.textContent || "M";
  const basePrice = parseFloat(activeSize?.dataset.price || product.sizes.M);

  // Get addons
  const addons = [];
  let addonsPrice = 0;
  card.querySelectorAll(".addon-checkbox:checked").forEach(checkbox => {
    addons.push({
      name: checkbox.dataset.addon,
      price: parseFloat(checkbox.dataset.price)
    });
    addonsPrice += parseFloat(checkbox.dataset.price);
  });

  // Get notes
  const notes = card.querySelector(".order-notes")?.value || "";

  // Calculate total price
  const totalPrice = basePrice + addonsPrice;

  // Create cart item
  const cartItem = {
    id: Date.now(),
    productId: product.id,
    name: product.name,
    size: selectedSize,
    basePrice: basePrice,
    addons: addons,
    addonsPrice: addonsPrice,
    totalPrice: totalPrice,
    notes: notes,
    quantity: 1
  };

  // Check if similar item exists
  const existingItem = cart.find(item => 
    item.productId === productId && 
    item.size === selectedSize && 
    JSON.stringify(item.addons) === JSON.stringify(addons) &&
    item.notes === notes
  );

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(cartItem);
  }

  saveCart();
  updateCartUI();

  // Animation feedback
  buttonElement.textContent = "✓ تمت الإضافة";
  buttonElement.style.background = "var(--primary-green, #4caf50)";
  setTimeout(() => {
    buttonElement.textContent = "🛒 أضف للسلة";
    buttonElement.style.background = "";
  }, 1500);
}

// Remove from cart
function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  saveCart();
  updateCartUI();
}

// Update quantity
function updateQuantity(itemId, change) {
  const item = cart.find(item => item.id === itemId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(itemId);
  } else {
    saveCart();
    updateCartUI();
  }
}

// Calculate totals
function calculateTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 50;
  const total = subtotal + shipping;

  return { subtotal, shipping, total };
}

// Update cart UI
function updateCartUI() {
  const cartCount = document.getElementById("cartCount");
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("subtotal");
  const shippingEl = document.getElementById("shipping");
  const totalEl = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const minimumOrderWarning = document.getElementById("minimumOrderWarning");
  const shippingBar = document.getElementById("shippingBar");
  const shippingText = document.getElementById("shippingText");

  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart items display
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart-msg">السلة فارغة</p>';
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-header">
          <span class="cart-item-name">${item.name}</span>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
        </div>
        <div class="cart-item-details">
          الحجم: ${item.size} | السعر الأساسي: ${item.basePrice} EGP
        </div>
        ${item.addons.length > 0 ? `
          <div class="cart-item-addons">
            إضافات: ${item.addons.map(a => `${a.name} (+${a.price} EGP)`).join(", ")}
          </div>
        ` : ""}
        ${item.notes ? `
          <div class="cart-item-notes">
            ملاحظات: "${item.notes}"
          </div>
        ` : ""}
        <div class="cart-item-controls">
          <div class="quantity-controls">
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
          <span class="item-price">${(item.totalPrice * item.quantity).toFixed(2)} EGP</span>
        </div>
      </div>
    `).join("");
  }

  // Calculate and display totals
  const { subtotal, shipping, total } = calculateTotals();
  subtotalEl.textContent = subtotal.toFixed(2) + " EGP";
  shippingEl.textContent = shipping === 0 ? "مجاني ✓" : shipping + " EGP";
  totalEl.textContent = total.toFixed(2) + " EGP";

  // Update shipping progress bar
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const percentage = (subtotal / FREE_SHIPPING_THRESHOLD) * 100;
  shippingBar.style.width = Math.min(percentage, 100) + "%";
  
  if (remaining <= 0) {
    shippingText.textContent = "مبروك! حصلت على شحن مجاني 🎉";
  } else {
    shippingText.textContent = `فاضلك ${remaining.toFixed(2)} جنيه للشحن المجاني`;
  }

  // Check minimum order
  const isMinimumMet = subtotal >= MINIMUM_ORDER;
  checkoutBtn.disabled = !isMinimumMet;
  minimumOrderWarning.style.display = isMinimumMet ? "none" : "block";
}

// Send order to WhatsApp
function sendOrderToWhatsApp() {
  const name = document.getElementById("customerName").value;
  const address = document.getElementById("customerAddress").value;
  const phone = document.getElementById("customerPhone").value;

  if (!name || !address || !phone) {
    alert("الرجاء ملء جميع البيانات");
    return;
  }

  // Build order message
  let message = `*طلب جديد من ماما نونا*\n\n`;
  message += `*بيانات العميل:*\n`;
  message += `الاسم: ${name}\n`;
  message += `العنوان: ${address}\n`;
  message += `الهاتف: ${phone}\n\n`;
  message += `*الطلب:*\n`;

  cart.forEach(item => {
    message += `${item.name} (${item.size}) x${item.quantity}`;
    if (item.addons.length > 0) {
      message += ` + ${item.addons.map(a => a.name).join(", ")}`;
    }
    message += ` = ${(item.totalPrice * item.quantity).toFixed(2)} EGP\n`;
    if (item.notes) {
      message += `  ملاحظات: ${item.notes}\n`;
    }
  });

  const { subtotal, shipping, total } = calculateTotals();
  message += `\n*الإجمالي:*\n`;
  message += `الفرعي: ${subtotal.toFixed(2)} EGP\n`;
  message += `الشحن: ${shipping === 0 ? "مجاني" : shipping + " EGP"}\n`;
  message += `الإجمالي: ${total.toFixed(2)} EGP`;

  // Send to WhatsApp
  const whatsappUrl = `https://wa.me/${RESTAURANT_PHONE}?text=${encodeURIComponent(message )}`;
  window.open(whatsappUrl, "_blank");

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();
  
  // Close modal
  const modal = bootstrap.Modal.getInstance(document.getElementById("checkoutModal"));
  modal.hide();
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
});