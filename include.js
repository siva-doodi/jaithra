document.getElementById("year").textContent = new Date().getFullYear();
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let current = Math.floor(target / 2);

      const updateCount = () => {
        const increment = (target - current) / 40;
        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current).toLocaleString();
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
            { id: "1", lang: "telugu", name: "Anamika TV Atha Kodalu", url1: "https://www.youtube.com/@anamikatvathakodalu" },
            { id: "2", lang: "telugu", name: "Anjali TV Atha Kodalu", url1: "https://www.youtube.com/@anjalitvathakodalu" },
            { id: "3", lang: "telugu", name: "Avani Stories telugu", url1: "https://www.youtube.com/@avanistoriestelugu" },
            { id: "4", lang: "telugu", name: "PSR Moral Stories Telugu", url1: "https://www.youtube.com/@psrmoralstories" },
            { id: "5", lang: "telugu", name: "PSR God stories", url1: "https://www.youtube.com/@psrgodsstories" },
            { id: "6", lang: "telugu", name: "PSR Sister Stories", url1: "https://www.youtube.com/@psrsisterstories" },
            { id: "8", lang: "telugu", name: "PSR Birds", url1: "https://www.youtube.com/@psrbirdstelugu" },
            { id: "9", lang: "telugu", name: "Stories Dunia", url1: "https://www.youtube.com/@storiesduniatelugu" },
            { id: "10", lang: "telugu", name: "Best moral stories", url1: "https://www.youtube.com/@bestmoralstoriestelugu" },
            { id: "11", lang: "telugu", name: "Jabilli Kathalu", url1: "https://www.youtube.com/@Jabillikathal" },
            { id: "12", lang: "telugu", name: "Bommala Kathalu", url1: "https://www.youtube.com/@bommalakathalu1" },
            { id: "13", lang: "telugu", name: "JM TV Telugu", url1: "https://www.youtube.com/@jmtelugumoralstories" },
            { id: "14", lang: "telugu", name: "Jaitra TV Telugu", url1: "https://www.youtube.com/@JaitratvTelugu" },
            { id: "15", lang: "telugu", name: "Telugu Birds Stories", url1: "https://www.youtube.com/@telugubirdsstories" },
            { id: "16", lang: "telugu", name: "Riya Fairy tales", url1: "https://www.youtube.com/@riyafairytalestelugu" },
            { id: "17", lang: "telugu", name: "Sitara TV Telugu", url1: "https://www.youtube.com/@Sitaratvtelugu1" },
            { id: "19", lang: "tamil", name: "Anamika TV Mamiyar Marumagal", url1: "https://www.youtube.com/@AnamikaTVMamiyarMarumagal" },
            { id: "20", lang: "kanada", name: "Anamika TV Atte Sose", url1: "https://www.youtube.com/@AnamikaTVAtteSose" },
        ];

        function renderCards(items) {
            const container = document.getElementById('cardsContainer');
            container.innerHTML = "";

            items.forEach(item => {
                container.innerHTML += `
          <div>
            <div class="bg-white shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col group">
              <a href="${item.url1}" target="_blank">
                <img src="https://via.placeholder.com/250x200.png?text=${encodeURIComponent(item.name)}" 
                  alt="Thumbnail" class="w-[250px] h-[200px] object-cover group-hover:scale-105 transition duration-300" />
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
            if (lang === 'all') {
                renderCards(data);
            } else {
                const filtered = data.filter(item => item.lang === lang);
                renderCards(filtered);
            }
        }

        renderCards(data);