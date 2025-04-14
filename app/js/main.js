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
  name: "Lotus",
  category: "DeFi",
  description: "Trading strategy protocol.",
  site: "https://beta.lotusfinance.io/",
  x: "https://x.com/Lotusfinance_io",
  discord: "https://discord.com/invite/lotusfinance",
  logo: "img/logo-lotus.webp"
}, {
  name: "Full Sail",
  category: "DeFi",
  description: "Вecentralized exchange introduces an innovative ve(4,4) tokenomics model.",
  site: "https://www.fullsail.finance/",
  x: "https://x.com/fullsailfi",
  discord: "https://discord.com/invite/fullsailfi",
  logo: "img/logo-fullsail.webp"
}, {
  name: "Soundness",
  category: "DeFi",
  description: "Decentralized data verification layer.",
  site: "https://soundness.xyz/",
  x: "https://x.com/SoundnessLabs",
  discord: "https://discord.com/invite/E7YeREX6aU",
  logo: "img/logo-soundness.webp"
}];

// Функция для генерации карточек
function generateProjectCards(projects) {
  const projectsList = document.querySelector('.project__card-list');
  projectsList.innerHTML = '';

  // Сортировка проектов по имени
  projects.sort((a, b) => a.name.localeCompare(b.name));
  projects.forEach((project, index) => {
    const projectCard = document.createElement('li');
    projectCard.classList.add('project__card-item');
    if (index >= 12) {
      projectCard.classList.add('hidden');
    }
    projectCard.innerHTML = `
      <div class="project__card-wrapper">
        <div class="project__card-logo" style="background-image: url('${project.logo}');"></div>
        <div class="project__card-name">
          ${project.name}
        </div>
        <div class="project__card-category">
          ${project.category}
        </div>
        <div class="project__card-descr">
          ${project.description}
        </div>
      </div>
      <div class="project__social-wrapper">
        <ul class="project__social-list list-reset flex">
          <li class="project__social-item">
            <a href="${project.site}" class="project__social-link link-reset" target="_blank">
              <svg class="project__social-icon">
                <use xlink:href="img/sprite.svg#icon-site"></use>
              </svg>
            </a>
          </li>
          <li class="project__social-item">
            <a href="${project.x}" class="project__social-link link-reset" target="_blank">
              <svg class="project__social-icon">
                <use xlink:href="img/sprite.svg#icon-x"></use>
              </svg>
            </a>
          </li>
          ${project.discord ? `
          <li class="project__social-item">
            <a href="${project.discord}" class="project__social-link link-reset" target="_blank">
              <svg class="project__social-icon">
                <use xlink:href="img/sprite.svg#icon-ds"></use>
              </svg>
            </a>
          </li>
          ` : ''}
        </ul>
      </div>
    `;
    projectsList.appendChild(projectCard);
  });
  const showMoreBtn = document.querySelector('.project__card-btn');
  if (projects.length > 12) {
    showMoreBtn.style.display = 'block';
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
/******/ })()
;
//# sourceMappingURL=main.js.map