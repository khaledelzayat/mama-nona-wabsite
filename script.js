
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
    weekly_offers: "عروض الأسبوع",
    hungry_title: "جوعانة؟",
    hungry_desc: "اطلب وجبتك المفضلة الآن!",
    location: "الموقع",
    contact_us: "تواصل معنا",
    follow_us: "تابعنا",
    view_map: "عرض على الخريطة",
    footer_desc: "طعام منزلي معمول بحب وطعم أصيل.",
    checkout_title: "تأكيد الطلب",
    customer_info: "بيانات العميل",
    full_name: "الاسم الكامل",
    full_name_placeholder: "أدخل اسمك",
    phone_number: "رقم الهاتف",
    phone_placeholder: "01XXXXXXXXX",
    delivery_address: "عنوان التوصيل",
    address_placeholder: "الشارع - المبنى - الشقة",
    city_area: "المدينة / المنطقة",
    select_city: "اختر المدينة",
    special_notes: "ملاحظات خاصة (اختياري)",
    notes_placeholder: "مثال: بدون بصل، زيادة جبنة",
    delivery_method: "طريقة الاستلام",
    delivery: "التوصيل",
    pickup: "الاستلام من المطعم",
    payment_method: "طريقة الدفع",
    cash_on_delivery: "الدفع عند الاستلام",
    online_payment: "الدفع أونلاين (قريباً)",
    order_summary: "ملخص الطلب",
    subtotal: "الإجمالي الفرعي:",
    delivery_fee: "رسوم التوصيل:",
    tax: "الضريبة:",
    total: "الإجمالي النهائي:",
    minimum_order_warning: "الحد الأدنى للطلب 100 جنيه",
    cancel: "إلغاء",
    confirm_order: "تأكيد الطلب",
    sending: "جاري الإرسال...",
    name_required: "الاسم مطلوب",
    phone_required: "رقم الهاتف مطلوب",
    phone_invalid: "رقم الهاتف غير صحيح",
    address_required: "العنوان مطلوب",
    free: "مجاني",
    added_to_cart: "تمت إضافة",
    to_cart: "إلى السلة",
    product_added: "تمت الإضافة إلى السلة",
    preview_invoice: "معاينة الفاتورة",
    download_invoice: "تحميل PDF"
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
    weekly_offers: "Weekly Offers",
    hungry_title: "Hungry?",
    hungry_desc: "Order your favorite meal now!",
    location: "Location",
    contact_us: "Contact Us",
    follow_us: "Follow Us",
    view_map: "View on Map",
    footer_desc: "Homemade food crafted with love and authentic flavors.",
    checkout_title: "Confirm Order",
    customer_info: "Customer Information",
    full_name: "Full Name",
    full_name_placeholder: "Enter your name",
    phone_number: "Phone Number",
    phone_placeholder: "01XXXXXXXXX",
    delivery_address: "Delivery Address",
    address_placeholder: "Street - Building - Apartment",
    city_area: "City / Area",
    select_city: "Select City",
    special_notes: "Special Notes (Optional)",
    notes_placeholder: "Example: No onions, Extra cheese",
    delivery_method: "Delivery Method",
    delivery: "Delivery",
    pickup: "Pick Up",
    payment_method: "Payment Method",
    cash_on_delivery: "Cash on Delivery",
    online_payment: "Online Payment (Coming Soon)",
    order_summary: "Order Summary",
    subtotal: "Subtotal:",
    delivery_fee: "Delivery Fee:",
    tax: "Tax:",
    total: "Total:",
    minimum_order_warning: "Minimum order is 100 EGP",
    cancel: "Cancel",
    confirm_order: "Confirm Order",
    sending: "Sending...",
    name_required: "Name is required",
    phone_required: "Phone number is required",
    phone_invalid: "Invalid phone number",
    address_required: "Address is required",
    free: "Free",
    added_to_cart: "added to cart",
    to_cart: "to cart",
    product_added: "Product added to cart",
    preview_invoice: "Preview Invoice",
    download_invoice: "Download PDF"
  }
};

/* ================= LANGUAGE ================= */

let currentLang = 'ar';

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

  // Re-render cart UI after language change
  updateCartUI();
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
      <img src="${p.image}" class="food-img" alt="${p.name}" onerror="this.src='assets/images/placeholder.jpg'">
      <div class="food-body">
        <h5>${p.name}</h5>
        <p>${p.desc}</p>
        <div class="sizes">
          <button class="size active" data-price="${p.sizes.S}">S</button>
          <button class="size"        data-price="${p.sizes.M}">M</button>
          <button class="size"        data-price="${p.sizes.L}">L</button>
        </div>
        <div class="price">${p.sizes.S} EGP</div>
        <button class="btn-add-cart" onclick="addToCart(${p.id}, this)">🛒 أضف للسلة</button>
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
  return card.offsetWidth + 20;
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

track?.addEventListener("mouseenter", () => {
  if (autoTimer) clearInterval(autoTimer);
});

track?.addEventListener("mouseleave", () => {
  startAutoSlide();
});

window.addEventListener("resize", () => {
  goTo(index);
});

/* ================= INITIALIZE ================= */

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

function renderFloatingOffers() {
  if (!offersContent || !offersDots) return;

  offersContent.innerHTML = "";
  offersDots.innerHTML = "";

  floatingOffersData.forEach((offer, index) => {
    const offerItem = document.createElement("div");
    offerItem.className = `offer-item ${index === 0 ? "active" : ""}`;
    offerItem.innerHTML = `
      <span class="offer-badge">${offer.tag}</span>
      <img src="${offer.image}" class="offer-img" alt="${offer.name}" onerror="this.src='assets/images/placeholder.jpg'">
      <h5 class="offer-name">${offer.name}</h5>
      <div class="offer-prices">
        <span class="offer-old-price">${offer.oldPrice} EGP</span>
        <span class="offer-new-price">${offer.newPrice} EGP</span>
        <span class="offer-discount">-${offer.discount}%</span>
      </div>
      <button class="offer-btn" onclick="orderFloatingOffer(${offer.id})">Order Now</button>
    `;
    offersContent.appendChild(offerItem);

    const dot = document.createElement("div");
    dot.className = `dot ${index === 0 ? "active" : ""}`;
    dot.onclick = () => goToFloatingOffer(index);
    offersDots.appendChild(dot);
  });
}

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

function startFloatingOffersAutoSlide() {
  floatingOffersAutoTimer = setInterval(() => {
    currentFloatingOfferIndex = (currentFloatingOfferIndex + 1) % floatingOffersData.length;
    goToFloatingOffer(currentFloatingOfferIndex);
  }, 4000);
}

offersWidget?.addEventListener("mouseenter", () => {
  if (floatingOffersAutoTimer) clearInterval(floatingOffersAutoTimer);
});

offersWidget?.addEventListener("mouseleave", () => {
  startFloatingOffersAutoSlide();
});

closeOffersBtn?.addEventListener("click", () => {
  if (offersWidget) {
    offersWidget.classList.add("hidden");
    if (floatingOffersAutoTimer) clearInterval(floatingOffersAutoTimer);
  }
});

// ===== TASK 13.1: ربط Floating Offer بنظام السلة =====
function orderFloatingOffer(offerId) {
  const offer = floatingOffersData.find(o => o.id === offerId);
  if (!offer) return;

  // إنشاء عنصر سلة مطابق للنظام الحالي
  const cartItem = {
    id: Date.now(),
    productId: offer.id,
    name: offer.name,
    size: "م",
    basePrice: offer.newPrice,
    addons: [],
    addonsPrice: 0,
    totalPrice: offer.newPrice,
    notes: "",
    quantity: 1,
    isOffer: true,
    offerPrice: offer.newPrice,
    originalPrice: offer.oldPrice
  };

  // البحث عن نفس المنتج في السلة (حسب الاسم والحجم)
  const existingItem = cart.find(item => 
    item.name === offer.name && 
    item.size === "م"
  );

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(cartItem);
  }

  saveCart();
  updateCartUI();

  // إظهار Toast بدل alert
  const toastMessage = currentLang === 'ar'
    ? `✓ تمت إضافة ${offer.name} إلى السلة`
    : `✓ ${offer.name} added to cart`;
  showToast(toastMessage, 'success');
}

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

document.addEventListener("DOMContentLoaded", () => {
  renderFloatingOffers();
  startFloatingOffersAutoSlide();
});

/* ================= WHY CHOOSE US ================= */

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

document.querySelectorAll(".why-card").forEach(card => {
    card.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0)";
    });
});

/* ================= OFFERS SECTION ================= */

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

function createOfferSectionCard(offer, isWeekly = false) {
  const card = document.createElement("div");
  card.className = `offer-card ${isWeekly ? "weekly-offer" : ""}`;
  card.id = `offer-${offer.id}`;

  const discountText = isWeekly ? "BEST OFFER" : `-${offer.discount}%`;

  card.innerHTML = `
    <div class="offer-card-image">
      <img src="${offer.image}" alt="${offer.name}" onerror="this.src='assets/images/placeholder.jpg'">
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

// ===== TASK 13.1: ربط عروض اليوم والأسبوع بنظام السلة =====
function orderOfferSection(offerId) {
  const allOffers = [...dailyOffers, ...weeklyOffers];
  const offer = allOffers.find(o => o.id === offerId);

  if (!offer) return;

  // إنشاء عنصر سلة مطابق للنظام الحالي
  const cartItem = {
    id: Date.now(),
    productId: offer.id,
    name: offer.name,
    size: offer.isWeekly ? "Bundle" : "م",
    basePrice: offer.newPrice,
    addons: [],
    addonsPrice: 0,
    totalPrice: offer.newPrice,
    notes: "",
    quantity: 1,
    isOffer: true,
    offerPrice: offer.newPrice,
    originalPrice: offer.oldPrice
  };

  // البحث عن نفس المنتج في السلة (حسب الاسم والحجم)
  const existingItem = cart.find(item => 
    item.name === offer.name && 
    item.size === cartItem.size
  );

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(cartItem);
  }

  saveCart();
  updateCartUI();

  // إظهار Toast بدل alert
  const toastMessage = currentLang === 'ar'
    ? `✓ تمت إضافة ${offer.name} إلى السلة`
    : `✓ ${offer.name} added to cart`;
  showToast(toastMessage, 'success');
}

document.addEventListener("DOMContentLoaded", () => {
  renderOffersSection();
});

/* ================= SHOPPING CART ================= */

let cart = [];
const MINIMUM_ORDER = 100;
const FREE_SHIPPING_THRESHOLD = 300;
const RESTAURANT_PHONE = "201001234567";

function loadCart() {
  const saved = localStorage.getItem("kitchen_cart");
  cart = saved ? JSON.parse(saved) : [];
  updateCartUI();
}

function saveCart() {
  localStorage.setItem("kitchen_cart", JSON.stringify(cart));
}

function addToCart(productId, buttonElement) {
  const card = buttonElement.closest(".food-card");
  const product = products.find(p => p.id === productId);
  
  if (!product) return;

  const activeSize = card.querySelector(".size.active");
  const selectedSize = activeSize?.textContent || "M";
  const basePrice = parseFloat(activeSize?.dataset.price || product.sizes.M);

  const addons = [];
  let addonsPrice = 0;
  card.querySelectorAll(".addon-checkbox:checked").forEach(checkbox => {
    addons.push({
      name: checkbox.dataset.addon,
      price: parseFloat(checkbox.dataset.price)
    });
    addonsPrice += parseFloat(checkbox.dataset.price);
  });

  const notes = card.querySelector(".order-notes")?.value || "";
  const totalPrice = basePrice + addonsPrice;

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

  buttonElement.textContent = "✓ تمت الإضافة";
  buttonElement.style.background = "var(--primary-green, #4caf50)";
  setTimeout(() => {
    buttonElement.textContent = "🛒 أضف للسلة";
    buttonElement.style.background = "";
  }, 1500);

  // إظهار Toast
  const toastMessage = currentLang === 'ar'
    ? `✓ تمت إضافة ${product.name} إلى السلة`
    : `✓ ${product.name} added to cart`;
  showToast(toastMessage, 'success');
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  saveCart();
  updateCartUI();
}

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

function calculateTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 50;
  const tax = Math.round(subtotal * 0.14);
  const total = subtotal + shipping + tax;

  return { subtotal, shipping, tax, total };
}

function updateCartUI() {
  const cartCount = document.getElementById("cartCount");
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("subtotal");
  const shippingEl = document.getElementById("shipping");
  const taxEl = document.getElementById("tax");
  const totalEl = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const minimumOrderWarning = document.getElementById("minimumOrderWarning");
  const shippingBar = document.getElementById("shippingBar");
  const shippingText = document.getElementById("shippingText");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) cartCount.textContent = totalItems;

  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = currentLang === 'ar' ? '<p class="empty-cart-msg">السلة فارغة</p>' : '<p class="empty-cart-msg">Cart is empty</p>';
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-header">
            <span class="cart-item-name">${item.name}</span>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
          </div>
          <div class="cart-item-details">
            ${item.isOffer ? '' : 'الحجم: ' + item.size + ' | '}
            ${item.isOffer ? (currentLang === 'ar' ? 'سعر العرض: ' : 'Offer Price: ') + item.basePrice + ' EGP' : (currentLang === 'ar' ? 'السعر الأساسي: ' : 'Base Price: ') + item.basePrice + ' EGP'}
          </div>
          ${item.addons.length > 0 ? `
            <div class="cart-item-addons">
              ${currentLang === 'ar' ? 'إضافات: ' : 'Add-ons: '}${item.addons.map(a => a.name + ' (+' + a.price + ' EGP)').join(", ")}
            </div>
          ` : ""}
          ${item.notes ? `
            <div class="cart-item-notes">
              ${currentLang === 'ar' ? 'ملاحظات: "' + item.notes + '"' : 'Notes: "' + item.notes + '"'}
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
  }

  const { subtotal, shipping, tax, total } = calculateTotals();
  if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2) + " EGP";
  if (shippingEl) shippingEl.textContent = shipping === 0 ? (currentLang === 'ar' ? "مجاني ✓" : "Free ✓") : shipping + " EGP";
  if (taxEl) taxEl.textContent = tax + " EGP";
  if (totalEl) totalEl.textContent = total.toFixed(2) + " EGP";

  if (shippingBar && shippingText) {
    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const percentage = (subtotal / FREE_SHIPPING_THRESHOLD) * 100;
    shippingBar.style.width = Math.min(percentage, 100) + "%";
    
    if (remaining <= 0) {
      shippingText.textContent = currentLang === 'ar' ? "مبروك! حصلت على شحن مجاني 🎉" : "Congrats! You got free shipping 🎉";
    } else {
      shippingText.textContent = currentLang === 'ar' 
        ? `فاضلك ${remaining.toFixed(2)} جنيه للشحن المجاني`
        : `Add ${remaining.toFixed(2)} EGP for free shipping`;
    }
  }

  const isMinimumMet = subtotal >= MINIMUM_ORDER;
  if (checkoutBtn) {
    checkoutBtn.disabled = !isMinimumMet;
  }
  if (minimumOrderWarning) {
    minimumOrderWarning.style.display = isMinimumMet ? "none" : "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadCart();
});

/* ================= CHECKOUT FORM ================= */

const checkoutForm = document.getElementById('checkoutForm');
const customerNameInput = document.getElementById('customerName');
const customerPhoneInput = document.getElementById('customerPhone');
const customerAddressInput = document.getElementById('customerAddress');
const customerCityInput = document.getElementById('customerCity');
const customerNotesInput = document.getElementById('customerNotes');
const deliveryMethodRadios = document.querySelectorAll('input[name="deliveryMethod"]');
const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
const confirmOrderBtn = document.getElementById('confirmOrderBtn');
const checkoutModal = document.getElementById('checkoutModal');

function loadSavedCustomerData() {
  const savedData = localStorage.getItem('customerData');
  if (savedData) {
    const data = JSON.parse(savedData);
    if (customerNameInput) customerNameInput.value = data.name || '';
    if (customerPhoneInput) customerPhoneInput.value = data.phone || '';
    if (customerAddressInput) customerAddressInput.value = data.address || '';
    if (customerCityInput) customerCityInput.value = data.city || '';
  }
}

function saveCustomerData() {
  const data = {
    name: customerNameInput.value,
    phone: customerPhoneInput.value,
    address: customerAddressInput.value,
    city: customerCityInput.value
  };
  localStorage.setItem('customerData', JSON.stringify(data));
}

function validatePhoneNumber(phone) {
  const phoneRegex = /^(01|002201)[0-9]{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateCheckoutForm() {
  let isValid = true;
  
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  document.querySelectorAll('.form-control, .form-select').forEach(el => el.classList.remove('is-invalid'));

  if (customerNameInput && !customerNameInput.value.trim()) {
    const nameError = document.getElementById('nameError');
    if (nameError) nameError.textContent = translations[currentLang].name_required;
    customerNameInput.classList.add('is-invalid');
    isValid = false;
  }

  if (customerPhoneInput && !customerPhoneInput.value.trim()) {
    const phoneError = document.getElementById('phoneError');
    if (phoneError) phoneError.textContent = translations[currentLang].phone_required;
    customerPhoneInput.classList.add('is-invalid');
    isValid = false;
  } else if (customerPhoneInput && !validatePhoneNumber(customerPhoneInput.value)) {
    const phoneError = document.getElementById('phoneError');
    if (phoneError) phoneError.textContent = translations[currentLang].phone_invalid;
    customerPhoneInput.classList.add('is-invalid');
    isValid = false;
  }

  if (customerAddressInput && !customerAddressInput.value.trim()) {
    const addressError = document.getElementById('addressError');
    if (addressError) addressError.textContent = translations[currentLang].address_required;
    customerAddressInput.classList.add('is-invalid');
    isValid = false;
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
  const minimumOrderAlert = document.getElementById('minimumOrderAlert');
  if (cartTotal < 100) {
    if (minimumOrderAlert) minimumOrderAlert.style.display = 'flex';
    isValid = false;
  } else {
    if (minimumOrderAlert) minimumOrderAlert.style.display = 'none';
  }

  return isValid;
}

function updateCheckoutSummary() {
  const summaryContainer = document.getElementById('orderSummaryItems');
  
  if (!summaryContainer) return;

  summaryContainer.innerHTML = '';

  cart.forEach(item => {
    const itemTotal = item.totalPrice * item.quantity;

    const itemElement = document.createElement('div');
    itemElement.className = 'order-item';
    itemElement.innerHTML = `
      <div>
        <span class="order-item-name">${item.name}</span>
        <span class="order-item-qty">×${item.quantity}</span>
      </div>
      <span class="order-item-price">${itemTotal.toFixed(2)} EGP</span>
    `;
    summaryContainer.appendChild(itemElement);
  });

  const { subtotal, shipping, tax, total } = calculateTotals();

  const checkoutSubtotal = document.getElementById('checkoutSubtotal');
  const checkoutDeliveryFee = document.getElementById('checkoutDeliveryFee');
  const checkoutTax = document.getElementById('checkoutTax');
  const checkoutTotal = document.getElementById('checkoutTotal');

  if (checkoutSubtotal) checkoutSubtotal.textContent = `${subtotal.toFixed(2)} EGP`;
  if (checkoutDeliveryFee) checkoutDeliveryFee.textContent = shipping === 0 ? (currentLang === 'ar' ? 'مجاني' : 'Free') : `${shipping} EGP`;
  if (checkoutTax) checkoutTax.textContent = `${tax} EGP`;
  if (checkoutTotal) checkoutTotal.textContent = `${total.toFixed(2)} EGP`;

  if (confirmOrderBtn) {
    confirmOrderBtn.disabled = total < 100;
  }
}

if (deliveryMethodRadios.length > 0) {
  deliveryMethodRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (customerAddressInput) {
        const addressField = customerAddressInput.closest('.mb-3');
        if (this.value === 'pickup') {
          if (addressField) addressField.style.display = 'none';
          customerAddressInput.removeAttribute('required');
        } else {
          if (addressField) addressField.style.display = 'block';
          customerAddressInput.setAttribute('required', 'required');
        }
      }
    });
  });
}

if (confirmOrderBtn) {
  confirmOrderBtn.addEventListener('click', function() {
    if (!validateCheckoutForm()) {
      return;
    }

    const btnText = this.querySelector('.btn-text');
    const btnLoader = this.querySelector('.btn-loader');
    if (btnText) btnText.style.display = 'none';
    if (btnLoader) btnLoader.style.display = 'flex';
    this.disabled = true;

    saveCustomerData();

    const { subtotal, shipping, tax, total } = calculateTotals();
    const orderData = {
      customer: {
        name: customerNameInput?.value || '',
        phone: customerPhoneInput?.value || '',
        address: customerAddressInput?.value || '',
        city: customerCityInput?.value || '',
        notes: customerNotesInput?.value || ''
      },
      delivery: {
        method: document.querySelector('input[name="deliveryMethod"]:checked')?.value || 'delivery',
        fee: shipping === 0 ? (currentLang === 'ar' ? 'مجاني' : 'Free') : `${shipping} EGP`
      },
      payment: {
        method: document.querySelector('input[name="paymentMethod"]:checked')?.value || 'cash'
      },
      items: cart,
      totals: {
        subtotal: subtotal.toFixed(2),
        tax: tax,
        total: total.toFixed(2)
      }
    };

    localStorage.setItem('orderData', JSON.stringify(orderData));

    setTimeout(() => {
      if (btnText) btnText.style.display = 'inline';
      if (btnLoader) btnLoader.style.display = 'none';
      this.disabled = false;

      if (checkoutModal) {
        const modal = bootstrap.Modal.getInstance(checkoutModal);
        if (modal) modal.hide();
      }
      
      sendOrderToWhatsApp();
    }, 1500);
  });
}

if (checkoutModal) {
  checkoutModal.addEventListener('show.bs.modal', function() {
    loadSavedCustomerData();
    updateCheckoutSummary();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  loadSavedCustomerData();
});

/* ================= WHATSAPP INTEGRATION ================= */

function generateOrderId() {
  const now = new Date();
  const timestamp = now.getTime().toString().slice(-6);
  return `#${timestamp}`;
}

function getFormattedDateTime() {
  const now = new Date();
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return now.toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', options);
}

function getEstimatedDeliveryTime() {
  return currentLang === 'ar' ? '30 دقيقة' : '30 Minutes';
}

function buildArabicMessage(orderData) {
  const orderId = generateOrderId();
  const dateTime = getFormattedDateTime();
  const deliveryTime = getEstimatedDeliveryTime();

  let message = `━━━━━━━━━━━━━━━━━━\n`;
  message += `🍽️ ماما نونا\n`;
  message += `طلب جديد\n`;
  message += `━━━━━━━━━━━━━━━━━━\n\n`;

  message += `📋 رقم الطلب: ${orderId}\n`;
  message += `📅 التاريخ والوقت: ${dateTime}\n\n`;

  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 بيانات العميل\n`;
  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `الاسم: ${orderData.customer.name}\n`;
  message += `الهاتف: ${orderData.customer.phone}\n`;

  if (orderData.delivery.method === 'delivery') {
    message += `📍 العنوان: ${orderData.customer.address}\n`;
    message += `المنطقة: ${orderData.customer.city}\n`;
  } else {
    message += `📍 الاستلام من المطعم\n`;
  }
  message += `\n`;

  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `🛒 تفاصيل الطلب\n`;
  message += `━━━━━━━━━━━━━━━━━━\n`;

  orderData.items.forEach((item, index) => {
    const itemTotal = item.totalPrice * item.quantity;
    message += `${index + 1}️⃣ ${item.name}\n`;
    message += `   الكمية: ${item.quantity}\n`;
    message += `   السعر: ${item.totalPrice} EGP\n`;
    message += `   الإجمالي: ${itemTotal.toFixed(2)} EGP\n`;
    if (item.addons && item.addons.length > 0) {
      message += `   إضافات: ${item.addons.map(a => a.name).join(', ')}\n`;
    }
    message += `\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `الإجمالي الفرعي: ${orderData.totals.subtotal} EGP\n`;
  message += `رسوم التوصيل: ${orderData.delivery.fee}\n`;
  message += `الضريبة: ${orderData.totals.tax} EGP\n`;
  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 الإجمالي النهائي: ${orderData.totals.total} EGP\n`;
  message += `━━━━━━━━━━━━━━━━━━\n\n`;

  message += `🚚 طريقة الاستلام: ${orderData.delivery.method === 'delivery' ? 'توصيل' : 'استلام من المطعم'}\n`;
  message += `⏱️ وقت التوصيل المتوقع: ${deliveryTime}\n\n`;

  message += `💳 طريقة الدفع: ${orderData.payment.method === 'cash' ? 'الدفع عند الاستلام' : 'الدفع أونلاين'}\n\n`;

  if (orderData.customer.notes && orderData.customer.notes.trim()) {
    message += `📝 ملاحظات خاصة:\n`;
    message += `${orderData.customer.notes}\n\n`;
  } else {
    message += `📝 ملاحظات: لا توجد\n\n`;
  }

  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `شكراً لك ❤️\n`;
  message += `━━━━━━━━━━━━━━━━━━`;

  return message;
}

function buildEnglishMessage(orderData) {
  const orderId = generateOrderId();
  const dateTime = getFormattedDateTime();
  const deliveryTime = getEstimatedDeliveryTime();

  let message = `━━━━━━━━━━━━━━━━━━\n`;
  message += `🍽️ Mama Nona\n`;
  message += `NEW ORDER\n`;
  message += `━━━━━━━━━━━━━━━━━━\n\n`;

  message += `📋 Order ID: ${orderId}\n`;
  message += `📅 Date & Time: ${dateTime}\n\n`;

  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 Customer Information\n`;
  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `Name: ${orderData.customer.name}\n`;
  message += `Phone: ${orderData.customer.phone}\n`;

  if (orderData.delivery.method === 'delivery') {
    message += `📍 Address: ${orderData.customer.address}\n`;
    message += `Area: ${orderData.customer.city}\n`;
  } else {
    message += `📍 Pick Up from Restaurant\n`;
  }
  message += `\n`;

  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `🛒 Order Details\n`;
  message += `━━━━━━━━━━━━━━━━━━\n`;

  orderData.items.forEach((item, index) => {
    const itemTotal = item.totalPrice * item.quantity;
    message += `${index + 1}️⃣ ${item.name}\n`;
    message += `   Qty: ${item.quantity}\n`;
    message += `   Price: ${item.totalPrice} EGP\n`;
    message += `   Total: ${itemTotal.toFixed(2)} EGP\n`;
    if (item.addons && item.addons.length > 0) {
      message += `   Extras: ${item.addons.map(a => a.name).join(', ')}\n`;
    }
    message += `\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `Subtotal: ${orderData.totals.subtotal} EGP\n`;
  message += `Delivery Fee: ${orderData.delivery.fee}\n`;
  message += `Tax: ${orderData.totals.tax} EGP\n`;
  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 Grand Total: ${orderData.totals.total} EGP\n`;
  message += `━━━━━━━━━━━━━━━━━━\n\n`;

  message += `🚚 Delivery Method: ${orderData.delivery.method === 'delivery' ? 'Delivery' : 'Pick Up'}\n`;
  message += `⏱️ Estimated Delivery: ${deliveryTime}\n\n`;

  message += `💳 Payment Method: ${orderData.payment.method === 'cash' ? 'Cash on Delivery' : 'Online Payment'}\n\n`;

  if (orderData.customer.notes && orderData.customer.notes.trim()) {
    message += `📝 Special Notes:\n`;
    message += `${orderData.customer.notes}\n\n`;
  } else {
    message += `📝 Notes: None\n\n`;
  }

  message += `━━━━━━━━━━━━━━━━━━\n`;
  message += `Thank you ❤️\n`;
  message += `━━━━━━━━━━━━━━━━━━`;

  return message;
}

function sendOrderToWhatsApp() {
  const orderData = JSON.parse(localStorage.getItem('orderData'));

  if (!orderData || !orderData.customer.name || !orderData.customer.phone) {
    showToast('الرجاء ملء جميع البيانات المطلوبة', 'error');
    return;
  }

  if (cart.length === 0) {
    showToast('السلة فارغة', 'error');
    return;
  }

  let message;
  if (currentLang === 'ar') {
    message = buildArabicMessage(orderData);
  } else {
    message = buildEnglishMessage(orderData);
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${RESTAURANT_PHONE}?text=${encodedMessage}`;

  showToast(currentLang === 'ar' ? 'جاري فتح واتساب...' : 'Opening WhatsApp...', 'success');

  const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
  orderHistory.push({
    id: generateOrderId(),
    date: new Date().toISOString(),
    data: orderData,
    message: message
  });
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

  setTimeout(() => {
    window.open(whatsappUrl, '_blank');

    cart = [];
    saveCart();
    updateCartUI();

    if (checkoutModal) {
      const modal = bootstrap.Modal.getInstance(checkoutModal);
      if (modal) modal.hide();
    }

    const cartOffcanvas = document.getElementById('cartOffcanvas');
    if (cartOffcanvas) {
      const offcanvas = bootstrap.Offcanvas.getInstance(cartOffcanvas);
      if (offcanvas) offcanvas.hide();
    }
  }, 1500);
}

/* ================= TOAST NOTIFICATION ================= */

function showToast(message, type = 'info') {
  const toastId = 'toast-' + Date.now();
  const toastHTML = `
    <div id="${toastId}" class="toast-notification toast-${type}">
      <div class="toast-content">
        <i class="bi bi-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', toastHTML);

  setTimeout(() => {
    const toastEl = document.getElementById(toastId);
    if (toastEl) {
      toastEl.classList.add('fade-out');
      setTimeout(() => toastEl.remove(), 300);
    }
  }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
  window.sendOrderToWhatsApp = sendOrderToWhatsApp;
});

// ================= INVOICE GENERATOR - TASK 13 =================

// Generate unique Order ID
function generateInvoiceOrderId() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Get current date and time
function getCurrentDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const time = now.toLocaleTimeString('ar-EG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  return { date, time };
}

// Generate Invoice HTML
function generateInvoiceHTML(orderData) {
  const { date, time } = getCurrentDateTime();
  const orderId = generateInvoiceOrderId();
  
  // استخدام السلة الحالية (kitchen_cart) بدلاً من localStorage.getItem('cart')
  const subtotal = cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
  const deliveryFee = subtotal >= 300 ? 0 : 50;
  const tax = Math.round(subtotal * 0.14);
  const grandTotal = subtotal + deliveryFee + tax;
  
  let itemsHTML = '';
  cart.forEach(item => {
    itemsHTML += `
      <div class="invoice-item">
        <div class="invoice-item-name">🍽️ ${item.name}</div>
        <div class="invoice-item-details">
          <span>${currentLang === 'ar' ? 'الكمية: ' : 'Qty: '}${item.quantity}</span>
          <span>${item.totalPrice} EGP</span>
          <span>${currentLang === 'ar' ? 'الإجمالي: ' : 'Total: '}${(item.totalPrice * item.quantity).toFixed(2)} EGP</span>
        </div>
      </div>
    `;
  });
  
  const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value === 'delivery' ? (currentLang === 'ar' ? 'توصيل' : 'Delivery') : (currentLang === 'ar' ? 'استلام من المطعم' : 'Pick Up');
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value === 'cash' ? (currentLang === 'ar' ? 'الدفع عند الاستلام' : 'Cash on Delivery') : (currentLang === 'ar' ? 'الدفع أونلاين' : 'Online Payment');
  
  return `
    <div class="invoice-container">
      <div class="invoice-header">
        <div class="invoice-logo">🍽️ MAMA NONA</div>
        <div class="invoice-subtitle">${currentLang === 'ar' ? 'مطعم الطعام المنزلي' : 'Homemade Food Restaurant'}</div>
      </div>
      
      <div class="invoice-divider"></div>
      
      <div class="invoice-section">
        <div class="invoice-section-title">${currentLang === 'ar' ? 'الفاتورة' : 'Invoice'}</div>
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'رقم الطلب:' : 'Order ID:'}</span>
          <span>#${orderId}</span>
        </div>
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'التاريخ:' : 'Date:'}</span>
          <span>${date}</span>
        </div>
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'الوقت:' : 'Time:'}</span>
          <span>${time}</span>
        </div>
      </div>
      
      <div class="invoice-divider"></div>
      
      <div class="invoice-section">
        <div class="invoice-section-title">${currentLang === 'ar' ? 'بيانات العميل' : 'Customer Information'}</div>
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'الاسم:' : 'Name:'}</span>
          <span>${orderData.name}</span>
        </div>
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'الهاتف:' : 'Phone:'}</span>
          <span>${orderData.phone}</span>
        </div>
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'المدينة:' : 'City:'}</span>
          <span>${orderData.city}</span>
        </div>
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'العنوان:' : 'Address:'}</span>
          <span>${orderData.address}</span>
        </div>
      </div>
      
      <div class="invoice-divider"></div>
      
      <div class="invoice-section">
        <div class="invoice-section-title">${currentLang === 'ar' ? 'المنتجات' : 'Items'}</div>
        ${itemsHTML}
      </div>
      
      <div class="invoice-divider"></div>
      
      <div class="invoice-section">
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'الإجمالي الفرعي:' : 'Subtotal:'}</span>
          <span>${subtotal.toFixed(2)} EGP</span>
        </div>
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'رسوم التوصيل:' : 'Delivery Fee:'}</span>
          <span>${deliveryFee === 0 ? (currentLang === 'ar' ? 'مجاني' : 'Free') : deliveryFee + ' EGP'}</span>
        </div>
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'الضريبة:' : 'Tax:'}</span>
          <span>${tax} EGP</span>
        </div>
        <div class="invoice-row total-row">
          <span>${currentLang === 'ar' ? 'الإجمالي النهائي:' : 'Grand Total:'}</span>
          <span>${grandTotal.toFixed(2)} EGP</span>
        </div>
      </div>
      
      <div class="invoice-divider"></div>
      
      <div class="invoice-section">
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'طريقة الدفع:' : 'Payment:'}</span>
          <span>${paymentMethod}</span>
        </div>
        <div class="invoice-row">
          <span>${currentLang === 'ar' ? 'طريقة الاستلام:' : 'Delivery:'}</span>
          <span>${deliveryMethod}</span>
        </div>
        ${orderData.notes ? `
          <div class="invoice-row">
            <span>${currentLang === 'ar' ? 'ملاحظات:' : 'Notes:'}</span>
            <span>${orderData.notes}</span>
          </div>
        ` : ''}
      </div>
      
      <div class="invoice-divider"></div>
      
      <div class="invoice-footer">
        <p>${currentLang === 'ar' ? 'شكراً لك ❤️' : 'Thank You ❤️'}</p>
        <p>Mama Nona</p>
      </div>
    </div>
  `;
}

// Preview Invoice
document.getElementById('previewInvoiceBtn')?.addEventListener('click', function() {
  const orderData = {
    name: document.getElementById('customerName').value,
    phone: document.getElementById('customerPhone').value,
    address: document.getElementById('customerAddress').value,
    city: document.getElementById('customerCity').value,
    notes: document.getElementById('customerNotes').value
  };
  
  const invoiceHTML = generateInvoiceHTML(orderData);
  document.getElementById('invoiceContent').innerHTML = invoiceHTML;
  
  const modal = new bootstrap.Modal(document.getElementById('invoicePreviewModal'));
  modal.show();
});

// Download Invoice as PDF
document.getElementById('downloadInvoiceBtn')?.addEventListener('click', function() {
  const orderData = {
    name: document.getElementById('customerName').value,
    phone: document.getElementById('customerPhone').value,
    address: document.getElementById('customerAddress').value,
    city: document.getElementById('customerCity').value,
    notes: document.getElementById('customerNotes').value
  };
  
  const invoiceHTML = generateInvoiceHTML(orderData);
  const element = document.createElement('div');
  element.innerHTML = invoiceHTML;
  
  // Using html2pdf library
  const opt = {
    margin: 10,
    filename: `MamaNona_Order_${Date.now()}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
  };
  
  // If html2pdf is not available, show toast instead of alert
  if (typeof html2pdf !== 'undefined') {
    html2pdf().set(opt).from(element).save();
  } else {
    showToast(currentLang === 'ar' ? 'مكتبة PDF غير متاحة. الرجاء تحديث الصفحة.' : 'PDF library not available. Please refresh the page.', 'error');
  }
});

// Print Invoice
document.getElementById('printInvoiceBtn')?.addEventListener('click', function() {
  window.print();
});

// Generate WhatsApp Receipt Message
function generateWhatsAppReceipt(orderData) {
  const { date, time } = getCurrentDateTime();
  const orderId = generateInvoiceOrderId();
  
  const subtotal = cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
  const deliveryFee = subtotal >= 300 ? 0 : 50;
  const tax = Math.round(subtotal * 0.14);
  const grandTotal = subtotal + deliveryFee + tax;
  
  let itemsText = '';
  cart.forEach(item => {
    itemsText += `\n🍔 ${item.name}\n${currentLang === 'ar' ? 'الكمية: ' : 'Qty: '}${item.quantity} | ${currentLang === 'ar' ? 'السعر: ' : 'Price: '}${item.totalPrice} EGP\n${currentLang === 'ar' ? 'الإجمالي: ' : 'Total: '}${(item.totalPrice * item.quantity).toFixed(2)} EGP\n`;
  });
  
  const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value === 'delivery' ? (currentLang === 'ar' ? 'توصيل' : 'Delivery') : (currentLang === 'ar' ? 'استلام من المطعم' : 'Pick Up');
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value === 'cash' ? (currentLang === 'ar' ? 'الدفع عند الاستلام' : 'Cash on Delivery') : (currentLang === 'ar' ? 'الدفع أونلاين' : 'Online Payment');
  
  const message = `
╔══════════════════════════════╗
        🍽️ MAMA NONA
          ORDER RECEIPT
╚══════════════════════════════╝

📋 Invoice: #${orderId}
📅 ${date} | ⏰ ${time}

──────────────────────────────
👤 CUSTOMER
${orderData.name}
📞 ${orderData.phone}

──────────────────────────────
📍 ADDRESS
${orderData.city}
${orderData.address}

──────────────────────────────
🛒 ITEMS
${itemsText}
──────────────────────────────
💰 PRICING

Subtotal: ${subtotal.toFixed(2)} EGP
Delivery: ${deliveryFee === 0 ? 'FREE' : deliveryFee + ' EGP'}
Tax: ${tax} EGP

══════════════════════════════
💵 GRAND TOTAL: ${grandTotal.toFixed(2)} EGP
══════════════════════════════

💳 Payment: ${paymentMethod}
📦 Delivery: ${deliveryMethod}
${orderData.notes ? `📝 Notes: ${orderData.notes}` : ''}

⏱ Estimated Delivery: 30 Minutes

══════════════════════════════
Thank You ❤️
Mama Nona
`;
  
  return message;
}
