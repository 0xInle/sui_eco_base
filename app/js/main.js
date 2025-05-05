/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
const projects = [{
  name: "Hop",
  category: "DeFi",
  description: "Zero-fee DEX aggregator offering optimal token swap rates",
  site: "https://hop.ag/",
  x: "https://x.com/HopAggregator",
  discord: null,
  logo: "img/logo-hop.webp"
}, {
  name: "FanTV",
  category: "SocialFi",
  description: "AI-powered platform enabling users to create, watch, and earn from content.",
  site: "https://fantv.in/",
  x: "https://x.com/FanTV_official",
  discord: "https://discord.com/invite/U45TV7prJe",
  logo: "img/logo-fantv.webp"
}, {
  name: "Tusky",
  category: "Storage",
  description: "Secure, encrypted decentralized storage with a user-friendly interface.",
  site: "https://app.tusky.io/",
  x: "https://x.com/TuskyTools",
  discord: "https://discord.com/invite/Vsjpghdhb3",
  logo: "img/logo-tusky.webp"
}, {
  name: "Bread Walrus",
  category: "DeFi",
  description: "Liquid staking on the Walrus protocol.",
  site: null,
  x: "https://x.com/BreadWalrusLST",
  discord: null,
  logo: "img/logo-breadwalrus.webp"
}, {
  name: "Winter Walrus",
  category: "DeFi",
  description: "Liquid staking on the Walrus protocol.",
  site: "https://www.winterwalrus.com/",
  x: "https://x.com/WalrusLST",
  discord: null,
  logo: "img/logo-winterwalrus.webp"
}, {
  name: "Steamm",
  category: "DeFi",
  description: "Capital-efficient AMM that lends idle assets to boost LP yields.",
  site: "https://steamm.fi/",
  x: "https://x.com/steammfi",
  discord: null,
  logo: "img/logo-steamm.webp"
}, {
  name: "Volo",
  category: "DeFi",
  description: "Liquid staking platform enhancing liquidity and utility.",
  site: "https://www.volosui.com/",
  x: "https://x.com/volo_sui",
  discord: "https://discord.com/invite/volo-1074826764645314621",
  logo: "img/logo-volo.webp"
}, {
  name: "SpringSui",
  category: "DeFi",
  description: "Liquid staking platform offering instant unstaking and enhanced DeFi integration.",
  site: "https://springsui.com/",
  x: "https://x.com/springsui_",
  discord: null,
  logo: "img/logo-springsui.webp"
}, {
  name: "Magma Finance",
  category: "DeFi",
  description: "AMM DEX integrating ve(3,3) tokenomics for optimized liquidity incentives.",
  site: "https://magmafinance.io/",
  x: "https://x.com/Magma_Finance",
  discord: "https://discord.com/invite/EZ7MFfn7DJ",
  logo: "img/logo-magmafinance.webp"
}, {
  name: "DeepBook",
  category: "DeFi",
  description: "Decentralized order book powering liquidity and trading for apps.",
  site: "https://deepbook.tech/",
  x: "https://x.com/DeepBookonSui",
  discord: "https://discord.com/invite/deepbook",
  logo: "img/logo-deepbook.webp"
}, {
  name: "WinX",
  category: "GambleFi",
  description: "Decentralized casino.",
  site: "https://winx.io/",
  x: "https://x.com/WinX_io",
  discord: "https://discord.com/invite/t6MJFKn633",
  logo: "img/logo-winx.webp"
}, {
  name: "Sudo Finance",
  category: "DeFi",
  description: "Decentralized perpetuals exchange with fast, zero-impact trading.",
  site: "https://www.sudo.finance/",
  x: "https://x.com/sudofinance",
  discord: "https://discord.com/invite/6HYG9S2UyC",
  logo: "img/logo-sudofinance.webp"
}, {
  name: "Suilend",
  category: "DeFi",
  description: "Decentralized lending and borrowing protocol with efficient asset management.",
  site: "https://suilend.fi/",
  x: "https://x.com/suilendprotocol",
  discord: "https://discord.com/invite/suilend",
  logo: "img/logo-suilend.webp"
}, {
  name: "Walrus",
  category: "Storage",
  description: "Decentralized data storage platform.",
  site: "https://www.walrus.xyz/",
  x: "https://x.com/WalrusProtocol",
  discord: "https://discord.com/invite/walrusprotocol",
  logo: "img/logo-walrus.webp"
}, {
  name: "Aftermath Finance",
  category: "DeFi",
  description: "DeFi platform offering DEX, liquid staking, and derivatives trading.",
  site: "https://aftermath.finance/",
  x: "https://x.com/AftermathFi/",
  discord: "https://discord.com/invite/KvVCAauXk5",
  logo: "img/logo-aftermathfinance.webp"
}, {
  name: "Turbos Finance",
  category: "DeFi",
  description: "Non-custodial DEX using a concentrated liquidity model for efficient trading.",
  site: "https://turbos.finance/",
  x: "https://x.com/Turbos_finance/",
  discord: "https://discord.com/invite/xFdDdDzA8W",
  logo: "img/logo-turbosfinance.webp"
}, {
  name: "7K Smart Trading",
  category: "DeFi",
  description: "Smart trading aggregator offering optimal swap routes via AMMs, CLMMs, and order book DEXs with low slippage and gas fees.",
  site: "https://port.7k.ag/",
  x: "https://x.com/7k_ag_",
  discord: "https://discord.com/invite/vNhgKEawXn",
  logo: "img/logo-7k.webp"
}, {
  name: "AlphaFi",
  category: "DeFi",
  description: "Yield optimizer with auto-compounding vaults and liquid staking.",
  site: "https://alphafi.xyz/",
  x: "https://x.com/AlphaFiSUI",
  discord: "https://discord.com/invite/Pn6cKUSqSs",
  logo: "img/logo-alphafi.webp"
}, {
  name: "Bluefin",
  category: "DeFi",
  description: "High-performance DEX for perpetual derivatives with CEX-like experience.",
  site: "https://bluefin.io/",
  x: "https://x.com/bluefinapp",
  discord: "https://discord.com/invite/bluefinapp",
  logo: "img/logo-bluefin.webp"
}, {
  name: "DoubleUp",
  category: "GambleFi",
  description: "Decentralized casino with transparent on-chain games.",
  site: "https://www.doubleup.fun/",
  x: "https://x.com/doubleup_app",
  discord: "https://discord.com/invite/doubleupapp",
  logo: "img/logo-doubleup.webp"
}, {
  name: "Haedal",
  category: "DeFi",
  description: "Liquid staking protocol enabling yield with full token liquidity.",
  site: "https://www.haedal.xyz/",
  x: "https://x.com/haedalprotocol",
  discord: "https://discord.com/invite/haedalprotocol",
  logo: "img/logo-haedal.webp"
}, {
  name: "Scallop",
  category: "DeFi",
  description: "Lending and borrowing protocol with advanced security and tools.",
  site: "https://scallop.io/",
  x: "https://x.com/Scallop_io",
  discord: "https://discord.com/invite/F7umecFArJ",
  logo: "img/logo-scallop.webp"
}, {
  name: "Navi Protocol",
  category: "DeFi",
  description: "Lending and liquid staking platform with leverage strategies.",
  site: "https://naviprotocol.io/",
  x: "https://x.com/navi_protocol",
  discord: "https://discord.com/invite/R6Xkbee8Xq",
  logo: "img/logo-naviprotocol.webp"
}, {
  name: "FlowX Finance",
  category: "DeFi",
  description: "DEX and liquidity aggregator with yield farming and IDO support.",
  site: "https://flowx.finance/",
  x: "https://x.com/FlowX_finance",
  discord: "https://discord.com/invite/flowx-1075716902111936564",
  logo: "img/logo-flowxfinance.webp"
}, {
  name: "Kriya",
  category: "DeFi",
  description: "Comprehensive DeFi protocol offering AMM swaps, limit orders, vaults, and leveraged perpetuals.",
  site: "https://kriya.finance/",
  x: "https://x.com/KriyaDEX",
  discord: "https://discord.com/invite/kriya",
  logo: "img/logo-kriya.webp"
}, {
  name: "Bucket Protocol",
  category: "DeFi",
  description: "Decentralized stablecoin protocol.",
  site: "https://www.bucketprotocol.io/",
  x: "https://x.com/bucket_protocol",
  discord: "https://discord.com/invite/nYCnNJE6Tr",
  logo: "img/logo-bucketprotocol.webp"
}, {
  name: "Sui Name Service",
  category: "SocialFi",
  description: "Decentralized name service. Allows domain registration and linking to wallets and contracts.",
  site: "https://suins.io/",
  x: "https://x.com/suinsdapp",
  discord: "https://discord.com/invite/suins",
  logo: "img/logo-suinameservice.webp"
}, {
  name: "Cetus",
  category: "DeFi",
  description: "Decentralized exchange with concentrated liquidity, enabling efficient trading, range orders, and liquidity as a service.",
  site: "https://www.cetus.zone/",
  x: "https://x.com/CetusProtocol",
  discord: "https://discord.com/invite/cetusprotocol",
  logo: "img/logo-cetus.webp"
}, {
  name: "Full Sail",
  category: "DeFi",
  description: "Decentralized exchange introduces an innovative ve(4,4) tokenomics model.",
  site: "https://www.fullsail.finance/",
  x: "https://x.com/fullsailfi",
  discord: "https://discord.com/invite/fullsailfi",
  logo: "img/logo-fullsail.webp"
}, {
  name: "Soundness",
  category: "Infrastructure",
  description: "Decentralized data verification layer.",
  site: "https://soundness.xyz/",
  x: "https://x.com/SoundnessLabs",
  discord: "https://discord.com/invite/E7YeREX6aU",
  logo: "img/logo-soundness.webp"
}, {
  name: "Sui Bridge",
  category: "Bridge",
  description: "Secure cross-chain asset transfers in the Sui network.",
  site: "https://bridge.sui.io/",
  x: "https://x.com/SuiNetwork",
  discord: "https://discord.com/invite/sui",
  logo: "img/logo-sui.webp"
}, {
  name: "Cosmocadia",
  category: "GameFi",
  description: "Cosmocadia is a cooperative sandbox farming game in which players grow land and trade NFTs.",
  site: "https://www.cosmocadia.io/",
  x: "https://x.com/Cosmocadia",
  discord: "https://discord.com/invite/cosmocadia",
  logo: "img/logo-сosmocadia.webp"
}, {
  name: "TradePort",
  category: "Nft Marketplace",
  description: "Multichain trading platform.",
  site: "https://www.tradeport.xyz/",
  x: "https://x.com/tradeportxyz",
  discord: "https://discord.com/invite/vna9xzdDK4",
  logo: "img/logo-tradeport.webp"
}, {
  name: "Slush Wallet",
  category: "Wallet",
  description: "Multi-platform wallet for NFTs, DeFi, and crypto with zkLogin support..",
  site: "https://slush.app/",
  x: "https://x.com/SlushWallet",
  discord: "https://discord.com/invite/sui",
  logo: "img/logo-slushwallet.webp"
}, {
  name: "Lotus Finance",
  category: "DeFi",
  description: "Trading strategy protocol.",
  site: "https://beta.lotusfinance.io/",
  x: "https://x.com/Lotusfinance_io",
  discord: "https://discord.com/invite/lotusfinance",
  logo: "img/logo-lotus.webp"
}];

// Функция перемещения к последнему добавленному проекту на сайт
const lastProject = projects[projects.length - 1];
const heroNameEl = document.querySelector('.hero__name');
const textNode = Array.from(heroNameEl.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
if (textNode) {
  textNode.textContent = lastProject.name + ' ';
}
document.querySelector('.hero__btn').addEventListener('click', () => {
  const projectName = document.querySelector('.hero__name').textContent.trim();
  document.querySelectorAll('.project__card-item.hidden').forEach(card => {
    card.classList.remove('hidden');
  });
  const cards = document.querySelectorAll('.project__card-item');
  const targetCard = Array.from(cards).find(card => {
    return card.querySelector('.project__card-name')?.textContent.trim() === projectName;
  });
  if (targetCard) {
    targetCard.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    targetCard.focus();
  }
  const showMoreBtn = document.querySelector('.project__card-btn');
  if (showMoreBtn) {
    showMoreBtn.style.display = 'none';
  }
});

// Функция для генерации карточек
function generateProjectCards(projectsToRender) {
  const projectsList = document.querySelector('.project__card-list');
  const showMoreBtn = document.querySelector('.project__card-btn');
  projectsList.innerHTML = '';
  projectsToRender.sort((a, b) => a.name.localeCompare(b.name));
  projectsToRender.forEach((project, index) => {
    const projectCard = document.createElement('li');
    projectCard.classList.add('project__card-item');
    projectCard.setAttribute('tabindex', '0');
    if (index >= 12) {
      projectCard.classList.add('hidden');
    }
    projectCard.innerHTML = `
  <div class="project__card-wrapper">
    <div class="project__card-logo" style="background-image: url('${project.logo}');"></div>
    <div class="project__card-name">${project.name}</div>
    <div class="project__card-category">${project.category}</div>
    <div class="project__card-descr">${project.description}</div>
  </div>
  <div class="project__social-wrapper">
    <ul class="project__social-list list-reset flex">
      ${project.site ? `
      <li class="project__social-item">
        <a href="${project.site}" class="project__social-link link-reset" target="_blank">
          <svg class="project__social-icon">
            <use xlink:href="img/sprite.svg#icon-site"></use>
          </svg>
        </a>
      </li>` : ''}
      ${project.x ? `
      <li class="project__social-item">
        <a href="${project.x}" class="project__social-link link-reset" target="_blank">
          <svg class="project__social-icon">
            <use xlink:href="img/sprite.svg#icon-x"></use>
          </svg>
        </a>
      </li>` : ''}
      ${project.discord ? `
      <li class="project__social-item">
        <a href="${project.discord}" class="project__social-link link-reset" target="_blank">
          <svg class="project__social-icon">
            <use xlink:href="img/sprite.svg#icon-ds"></use>
          </svg>
        </a>
      </li>` : ''}
    </ul>
  </div>
`;
    projectsList.appendChild(projectCard);
  });
  if (projectsToRender.length > 12) {
    showMoreBtn.style.display = 'block';
  } else {
    showMoreBtn.style.display = 'none';
  }
}
document.querySelector('.project__card-btn').addEventListener('click', function () {
  const hiddenCards = document.querySelectorAll('.project__card-item.hidden');
  for (let i = 0; i < 4 && i < hiddenCards.length; i++) {
    hiddenCards[i].classList.remove('hidden');
  }
  if (document.querySelectorAll('.project__card-item.hidden').length === 0) {
    this.style.display = 'none';
  }
});
generateProjectCards(projects);

// Открытие и закрытие блока контактов
const btnOpen = document.querySelector('.header__btn-contacts');
const btnClose = document.querySelector('.modal__btn-close');
const modal = document.querySelector('.modal');
let removeTrap = null;
function trapFocus(element) {
  const focusableElements = element.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];
  function handleTrap(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
    if (e.key === 'Escape') {
      closeModal();
    }
  }
  element.addEventListener('keydown', handleTrap);
  return () => element.removeEventListener('keydown', handleTrap);
}
function openModal() {
  modal.classList.remove('hidden');
  modal.classList.add('active');
  document.body.classList.add('blurred');
  btnClose.focus();
  removeTrap = trapFocus(modal);
}
function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('active');
  document.body.classList.remove('blurred');
  btnOpen.focus();
  if (removeTrap) removeTrap();
}
btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Сортировка карточек при нажатии на кнопку
const filterButtons = document.querySelectorAll('.project__btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.textContent.trim().toLowerCase();
    if (category === 'all projects') {
      generateProjectCards(projects);
    } else {
      const filteredProjects = projects.filter(p => p.category.toLowerCase() === category);
      generateProjectCards(filteredProjects);
    }
  });
});

// Сортировка кнопок по имени
const list = document.querySelector('.project__list');
const items = Array.from(list.children);

// Сортируем по тексту кнопки
items.sort((a, b) => {
  const textA = a.textContent.trim().toLowerCase();
  const textB = b.textContent.trim().toLowerCase();
  return textA.localeCompare(textB);
});
items.forEach(item => list.appendChild(item));

// Поиск по карточкам
const searchInput = document.querySelector('.header__search');
const headerError = document.querySelector('.header__error');
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const value = searchInput.value.trim();
    const isValid = /^[a-zA-Z0-9 ]+$/.test(value);
    if (!isValid) {
      searchInput.classList.add('input--invalid');
      headerError.style.opacity = "0";
      return;
    } else {
      searchInput.classList.remove('input--invalid');
      headerError.style.opacity = "0";
    }
    const query = value.toLowerCase();
    document.querySelectorAll('.project__card-item.hidden').forEach(card => {
      card.classList.remove('hidden');
    });
    const cards = document.querySelectorAll('.project__card-item');
    const targetCard = Array.from(cards).find(card => {
      const name = card.querySelector('.project__card-name')?.textContent.trim().toLowerCase();
      return name === query;
    });
    if (targetCard) {
      const showMoreBtn = document.querySelector('.project__card-btn');
      if (showMoreBtn) showMoreBtn.style.display = 'none';
      targetCard.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      targetCard.focus();
      headerError.style.opacity = "0";
    } else {
      searchInput.classList.add('input--invalid');
      headerError.style.opacity = "1";
    }
  }
});
searchInput.addEventListener('input', () => {
  const value = searchInput.value;
  const isValid = /^[a-zA-Z0-9 ]*$/.test(value);
  if (!isValid) {
    searchInput.classList.add('input--invalid');
    headerError.style.opacity = "0";
  } else {
    searchInput.classList.remove('input--invalid');
    headerError.style.opacity = "0";
  }
});

// Функионал кнопки с донатами
const donateBtn = document.getElementById('donateBtn');
const walletAddress = '0xfc6b1e4fa152b77edbac464dfd444ec275206f77f245eab0328e99e85a75ff77';
let copiedTimeout;
let isMobileTapToReveal = false;
function isMobileDevice() {
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}
if (!isMobileDevice()) {
  donateBtn.addEventListener('mouseenter', () => {
    if (!donateBtn.classList.contains('show-copied')) {
      donateBtn.classList.add('show-wallet');
    }
  });
  donateBtn.addEventListener('mouseleave', () => {
    if (!donateBtn.classList.contains('show-copied')) {
      donateBtn.classList.remove('show-wallet');
    }
  });
  donateBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      donateBtn.classList.remove('show-wallet');
      donateBtn.classList.add('show-copied');
      clearTimeout(copiedTimeout);
      copiedTimeout = setTimeout(() => {
        donateBtn.classList.remove('show-copied');
        donateBtn.classList.add('show-wallet');
      }, 1000);
    }).catch(err => {
      console.error('Clipboard copy failed:', err);
    });
  });
} else {
  donateBtn.addEventListener('click', () => {
    if (!donateBtn.classList.contains('show-wallet') && !donateBtn.classList.contains('show-copied')) {
      donateBtn.classList.add('show-wallet');
      isMobileTapToReveal = true;
      setTimeout(() => {
        if (isMobileTapToReveal) {
          donateBtn.classList.remove('show-wallet');
          donateBtn.blur();
          isMobileTapToReveal = false;
        }
      }, 3000);
      return;
    }
    if (isMobileTapToReveal) {
      navigator.clipboard.writeText(walletAddress).then(() => {
        donateBtn.classList.remove('show-wallet');
        donateBtn.classList.add('show-copied');
        copiedTimeout = setTimeout(() => {
          donateBtn.classList.remove('show-copied');
        }, 1000);
        donateBtn.blur();
        donateBtn.classList.remove('show-wallet');
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
      isMobileTapToReveal = false;
    }
  });
  document.addEventListener('click', event => {
    if (!donateBtn.contains(event.target)) {
      donateBtn.classList.remove('show-wallet');
      donateBtn.blur();
      isMobileTapToReveal = false;
    }
  });
}
if (!isMobileDevice()) {
  donateBtn.addEventListener('mouseenter', () => {
    if (!donateBtn.classList.contains('show-copied')) {
      donateBtn.classList.add('show-wallet');
    }
  });
  donateBtn.addEventListener('mouseleave', () => {
    if (!donateBtn.classList.contains('show-copied')) {
      donateBtn.classList.remove('show-wallet');
    }
  });
  donateBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      donateBtn.classList.remove('show-wallet');
      donateBtn.classList.add('show-copied');
      clearTimeout(copiedTimeout);
      copiedTimeout = setTimeout(() => {
        donateBtn.classList.remove('show-copied');
        donateBtn.classList.remove('show-wallet');
        donateBtn.blur();
      }, 1000);
    }).catch(err => {
      console.error('Clipboard copy failed:', err);
    });
  });
}

// Изменение числа проектов на странице при добавлении в массив
document.addEventListener("DOMContentLoaded", () => {
  const projectCount = projects.length;
  const countElement = document.querySelector(".hero__number");
  if (countElement) {
    countElement.textContent = projectCount;
  }
});

// Изменение цветовой схемы
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.header__btn-theme');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
});
/******/ })()
;
//# sourceMappingURL=main.js.map