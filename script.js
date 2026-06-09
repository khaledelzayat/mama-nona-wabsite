const translations = {
  ar: {
    home: "الرئيسية",
    menu: "المنيو",
    offers: "العروض",
    contact: "تواصل معنا",
    order: "اطلب الآن",
    hero: "قسم البطل",
    about: "من نحن",
    menu_section: "قائمة الطعام",
    contact_section: "تواصل معنا",
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
    hero: "Hero Section",
    about: "About Section",
    menu_section: "Menu Section",
    contact_section: "Contact Section",
    hero_title: "Delicious Food Made With Love 🍽️",
    hero_desc: "Experience the best taste with Mama Nona",
    hero_btn: "Order Now",
    footer: "© 2026 Mama Nona. All Rights Reserved"
  }
};

function setLang(lang) {

  const flag = document.getElementById("currentFlag");

  // حفظ اللغة في المتغير
  document.documentElement.lang = lang;

  if (lang === "ar") {
    document.documentElement.dir = "rtl";
    flag.innerText = "🇸🇦";
  } else {
    document.documentElement.dir = "ltr";
    flag.innerText = "🇺🇸";
  }

  // 🔥 تغيير النصوص في الصفحة
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}