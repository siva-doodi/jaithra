document.getElementById("year").textContent = new Date().getFullYear();
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const startAttr = counter.getAttribute('data-start');
  const start = startAttr && startAttr !== '' ? +startAttr : Math.floor(target / 2);
  let current = start;

  const totalFrames = 100; 
  const increment = (target - start) / totalFrames;

  counter.style.minWidth = `${target.toLocaleString().length}ch`;
  counter.style.display = "inline-block";
  counter.style.textAlign = "right";

  const updateCount = () => {
    if (current < target) {
      current += increment;
      if (current > target) current = target;
      counter.innerText = Math.round(current).toLocaleString();
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      updateCount();
      observer.disconnect();
    }
  }, { threshold: 0.3 });

  observer.observe(counter);
});


const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('shadow-[0_10px_25px_rgba(0,0,0,0.1),0_4px_10px_rgba(183,41,96,0.2)]');
  } else {
    header.classList.remove('shadow-[0_10px_25px_rgba(0,0,0,0.1),0_4px_10px_rgba(183,41,96,0.2)]');
  }
});
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

document.getElementById("year").textContent = new Date().getFullYear();
const data = [
  { id: "1", lang: "telugu", name: "Anamika TV Atha Kodalu", url1: "https://www.youtube.com/@anamikatvathakodalu",img:"C:/Jaithra/pages/images/img1000039661.jpg" },
  { id: "2", lang: "telugu", name: "Anjali TV Atha Kodalu", url1: "https://www.youtube.com/@anjalitvathakodalu",img:"C:/Jaithra/pages/images/img1000039661.jpg"  },
  { id: "3", lang: "telugu", name: "Avani Stories telugu", url1: "https://www.youtube.com/@avanistoriestelugu",img:"C:/Jaithra/pages/images/img1000039661.jpg"  },
  { id: "4", lang: "telugu", name: "PSR Moral Stories Telugu", url1: "https://www.youtube.com/@psrmoralstories",img:"C:/Jaithra/pages/images/img1000039661.jpg"  },
  { id: "5", lang: "telugu", name: "PSR God stories", url1: "https://www.youtube.com/@psrgodsstories",img:"C:/Jaithra/pages/images/img1000039661.jpg"  },
  { id: "6", lang: "telugu", name: "PSR Sister Stories", url1: "https://www.youtube.com/@psrsisterstories",img:"C:/Jaithra/pages/images/img1000039661.jpg"  },
  { id: "8", lang: "telugu", name: "PSR Birds", url1: "https://www.youtube.com/@psrbirdstelugu",img:"C:/Jaithra/pages/images/img1000039661.jpg"  },
  { id: "9", lang: "telugu", name: "Stories Dunia", url1: "https://www.youtube.com/@storiesduniatelugu",img:"C:/Jaithra/pages/images/img1000039661.jpg"  },
  { id: "10", lang: "telugu", name: "Best moral stories", url1: "https://www.youtube.com/@bestmoralstoriestelugu",img:"C:\Jaithra\pages\animation.html" },
  { id: "11", lang: "telugu", name: "Jabilli Kathalu", url1: "https://www.youtube.com/@Jabillikathal",img:"C:\Jaithra\pages\animation.html" },
  { id: "12", lang: "telugu", name: "Bommala Kathalu", url1: "https://www.youtube.com/@bommalakathalu1",img:"C:\Jaithra\pages\animation.html" },
  { id: "13", lang: "telugu", name: "JM TV Telugu", url1: "https://www.youtube.com/@jmtelugumoralstories",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "14", lang: "telugu", name: "Jaitra TV Telugu", url1: "https://www.youtube.com/@JaitratvTelugu",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "15", lang: "telugu", name: "Telugu Birds Stories", url1: "https://www.youtube.com/@telugubirdsstories",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "16", lang: "telugu", name: "Riya Fairy tales", url1: "https://www.youtube.com/@riyafairytalestelugu",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "17", lang: "telugu", name: "Sitara TV Telugu", url1: "https://www.youtube.com/@Sitaratvtelugu1",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "19", lang: "tamil", name: "Anamika TV Mamiyar Marumagal", url1: "https://www.youtube.com/@AnamikaTVMamiyarMarumagal",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "20", lang: "tamil", name: "Anjali TV Mamiyar marumagal", url1: "https://www.youtube.com/channel/UC3yMI6WFjUkVnT3bHzACzjA",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "21", lang: "tamil", name: "Avani Stories Tamil", url1: "https://www.youtube.com/@avanistoriestamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "22", lang: "tamil", name: "PSR Moral stories Tamil", url1: "https://www.youtube.com/@psrmoralstoriestamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "23", lang: "tamil", name: "PSR Birds Tamil", url1: "https://www.youtube.com/@psrbirdstamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "24", lang: "tamil", name: "Stories Dunia", url1: "https://www.youtube.com/@storiesduniatamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "25", lang: "tamil", name: "Best moral stories Tamil", url1: "https://www.youtube.com/@bestmoralstoriestamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "26", lang: "tamil", name: "PSR Moral stories Tamil", url1: "https://www.youtube.com/@psrmoralstoriestamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "27", lang: "tamil", name: "PSR Birds Tamil", url1: "https://www.youtube.com/@psrbirdstamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "28", lang: "tamil", name: "Jabilli Kadhaigal", url1: "https://www.youtube.com/channel/UCwyAGGt3DCvz34invXmAh_A",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "29", lang: "tamil", name: "Bommai Kathaigal", url1: "https://www.youtube.com/channel/UCRp8wAZfZzlUXsgQEhTp-qw",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "30", lang: "tamil", name: "Tamil Kataikal", url1: "https://www.youtube.com/@tamilkataikal",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "31", lang: "tamil", name: "Jaitra TV Tamil", url1: "https://www.youtube.com/@JaitratvTamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "32", lang: "tamil", name: "Tamil Birds Stories", url1: "https://www.youtube.com/@tamilbirdsstories",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "33", lang: "tamil", name: "Riya Fairy tales Tamil", url1: "https://www.youtube.com/@riyafairytalestamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "34", lang: "tamil", name: "grandma Tv Tamil", url1: "https://www.youtube.com/@grandmatamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "35", lang: "tamil", name: "Choti Tv Tamil", url1: "https://www.youtube.com/@chotitamil",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "kanada", name: "Anamika TV Atte Sose", url1: "https://www.youtube.com/@AnamikaTVAtteSose",img:"C:\Jaithra\pages\images\img1000039661.jpg"},
  { id: "36", lang: "kanada", name: "Anjali TV Atte Sose", url1: "https://www.youtube.com/channel/UCYUor5THOb7_ypYzQKwo2hw/",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "kanada", name: "Avani Stories Kannada", url1: "https://www.youtube.com/@avanistorieskannada",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "kanada", name: "PSR Birds Kannada", url1: "https://www.youtube.com/@psrbirdskannada",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "kanada", name: "Stories Dunia", url1: "https://www.youtube.com/@storiesduniakannada",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "kanada", name: "JM TV Kannada", url1: "https://www.youtube.com/@jmkannadamoralstories",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "kanada", name: "Jaitra TV Kannada", url1: "https://www.youtube.com/@JaitratvKannada",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "kanada", name: "Kananda Birds Stories", url1: "https://www.youtube.com/@kannadabirdsstories",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "kanada", name: "kannada Cartoon Stories Tv", url1: "https://www.youtube.com/@kannadacartoonstoriestv",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "english", name: "Riya Fairy tales English", url1: "https://www.youtube.com/@JaitratvKannada",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "hindi", name: "Anamika Tv Saas Vs Bahu", url1: "https://www.youtube.com/@AnamikaTVSaasVsBahu",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
  { id: "36", lang: "hindi", name: "Stories Dunia Hindi", url1: "https://www.youtube.com/@storiesdunia",img:"C:\Jaithra\pages\images\img1000039661.jpg" },
];

function renderCards(items) {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = "";
  items.forEach(item => {
    container.innerHTML += `
      <div>
        <div class="bg-white shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col group">
          <a href="${item.url1}" target="_blank">
            <img src="${item.img}" alt="Thumbnail" class="w-full h-[200px] object-cover group-hover:scale-105 transition duration-300" />
          </a>
        </div>
        <div class="bg-gray-200 p-3">
          <span>${item.name}</span>
        </div>
      </div>
    `;
  });
}


function filterData(lang) {
  // Filter and render
  if (lang === 'all') {
    renderCards(data);
  } else {
    const filtered = data.filter(item => item.lang === lang);
    renderCards(filtered);
  }

  // Update desktop buttons
  const buttons = document.querySelectorAll('aside button');
  buttons.forEach(btn => {
    btn.classList.remove('bg-[#FFBCBC]', 'text-[#b72960]', 'font-medium');
    btn.classList.add('hover:bg-[#f3f4f6]');
  });
  const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(`'${lang}'`));
  if (activeBtn) {
    activeBtn.classList.add('bg-[#FFBCBC]', 'text-[#b72960]', 'font-medium');
    activeBtn.classList.remove('hover:bg-[#f3f4f6]');
  }

  // Update select value if needed
  const select = document.getElementById('mobileCategorySelect');
  if (select && select.value !== lang) {
    select.value = lang;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Mobile select event
  const mobileSelect = document.getElementById('mobileCategorySelect');
  if (mobileSelect) {
    mobileSelect.addEventListener('change', function () {
      filterData(this.value);
    });
  }
  
  // Initial load
  filterData('all');
});
