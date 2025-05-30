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
  category: "DeFi, Aggregator",
  description: "Zero-fee DEX aggregator offering optimal token swap rates",
  site: "https://hop.ag/",
  x: "https://x.com/HopAggregator",
  discord: null,
  logo: "img/logo-hop.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "FanTV",
  category: "SocialFi",
  description: "AI-powered platform enabling users to create, watch, and earn from content.",
  site: "https://fantv.in/",
  x: "https://x.com/FanTV_official",
  discord: "https://discord.com/invite/U45TV7prJe",
  logo: "img/logo-fantv.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Tusky",
  category: "Storage",
  description: "Secure, encrypted decentralized storage with a user-friendly interface.",
  site: "https://app.tusky.io/",
  x: "https://x.com/TuskyTools",
  discord: "https://discord.com/invite/Vsjpghdhb3",
  logo: "img/logo-tusky.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Bread Walrus",
  category: "DeFi, LST",
  description: "Liquid staking on the Walrus protocol.",
  site: null,
  x: "https://x.com/BreadWalrusLST",
  discord: null,
  logo: "img/logo-breadwalrus.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Winter Walrus",
  category: "DeFi, LST",
  description: "Liquid staking on the Walrus protocol.",
  site: "https://www.winterwalrus.com/",
  x: "https://x.com/WalrusLST",
  discord: null,
  logo: "img/logo-winterwalrus.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Steamm",
  category: "DeFi",
  description: "Capital-efficient AMM that lends idle assets to boost LP yields.",
  site: "https://steamm.fi/",
  x: "https://x.com/steammfi",
  discord: null,
  logo: "img/logo-steamm.webp",
  drop: null,
  testnet: null,
  points: "Points",
  soon: null,
  date: "2024-04-01"
}, {
  name: "Volo",
  category: "DeFi, LST",
  description: "Liquid staking platform enhancing liquidity and utility.",
  site: "https://www.volosui.com/",
  x: "https://x.com/volo_sui",
  discord: "https://discord.com/invite/volo-1074826764645314621",
  logo: "img/logo-volo.webp",
  drop: null,
  testnet: null,
  points: "Points",
  soon: null,
  date: "2024-04-01"
}, {
  name: "SpringSui",
  category: "DeFi, LST",
  description: "Liquid staking platform offering instant unstaking and enhanced DeFi integration.",
  site: "https://springsui.com/",
  x: "https://x.com/springsui_",
  discord: null,
  logo: "img/logo-springsui.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Magma Finance",
  category: "DeFi, Aggregator",
  description: "AMM DEX integrating ve(3,3) tokenomics for optimized liquidity incentives.",
  site: "https://magmafinance.io/",
  x: "https://x.com/Magma_Finance",
  discord: "https://discord.com/invite/EZ7MFfn7DJ",
  logo: "img/logo-magmafinance.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "DeepBook",
  category: "DeFi",
  description: "Decentralized order book powering liquidity and trading for apps.",
  site: "https://deepbook.tech/",
  x: "https://x.com/DeepBookonSui",
  discord: "https://discord.com/invite/deepbook",
  logo: "img/logo-deepbook.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "WinX",
  category: "GambleFi",
  description: "Decentralized casino.",
  site: "https://winx.io/",
  x: "https://x.com/WinX_io",
  discord: "https://discord.com/invite/t6MJFKn633",
  logo: "img/logo-winx.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Sudo Finance",
  category: "DeFi, Perpetual",
  description: "Decentralized perpetuals exchange with fast, zero-impact trading.",
  site: "https://www.sudo.finance/",
  x: "https://x.com/sudofinance",
  discord: "https://discord.com/invite/6HYG9S2UyC",
  logo: "img/logo-sudofinance.webp",
  drop: null,
  testnet: null,
  points: "Points",
  soon: null,
  date: "2024-04-01"
}, {
  name: "Suilend",
  category: "DeFi, Lending",
  description: "Decentralized lending and borrowing protocol with efficient asset management.",
  site: "https://suilend.fi/",
  x: "https://x.com/suilendprotocol",
  discord: "https://discord.com/invite/suilend",
  logo: "img/logo-suilend.webp",
  drop: "Drop",
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Walrus",
  category: "Storage",
  description: "Decentralized data storage platform.",
  site: "https://www.walrus.xyz/",
  x: "https://x.com/WalrusProtocol",
  discord: "https://discord.com/invite/walrusprotocol",
  logo: "img/logo-walrus.webp",
  drop: "Drop",
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Aftermath Finance",
  category: "DeFi, LST, Aggregator",
  description: "DeFi platform offering DEX, liquid staking, and derivatives trading.",
  site: "https://aftermath.finance/",
  x: "https://x.com/AftermathFi/",
  discord: "https://discord.com/invite/KvVCAauXk5",
  logo: "img/logo-aftermathfinance.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Turbos Finance",
  category: "DeFi, Launchpad",
  description: "Non-custodial DEX using a concentrated liquidity model for efficient trading.",
  site: "https://turbos.finance/",
  x: "https://x.com/Turbos_finance/",
  discord: "https://discord.com/invite/xFdDdDzA8W",
  logo: "img/logo-turbosfinance.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "7K Smart Trading",
  category: "DeFi, Aggregator, Launchpad",
  description: "Smart trading aggregator offering optimal swap routes via AMMs, CLMMs, and order book DEXs with low slippage and gas fees.",
  site: "https://port.7k.ag/",
  x: "https://x.com/7k_ag_",
  discord: "https://discord.com/invite/vNhgKEawXn",
  logo: "img/logo-7k.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "AlphaFi",
  category: "DeFi, LST, Yield Aggregator",
  description: "Yield optimizer with auto-compounding vaults and liquid staking.",
  site: "https://alphafi.xyz/",
  x: "https://x.com/AlphaFiSUI",
  discord: "https://discord.com/invite/Pn6cKUSqSs",
  logo: "img/logo-alphafi.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Bluefin",
  category: "DeFi, Perpetual",
  description: "High-performance DEX for perpetual derivatives with CEX-like experience.",
  site: "https://bluefin.io/",
  x: "https://x.com/bluefinapp",
  discord: "https://discord.com/invite/bluefinapp",
  logo: "img/logo-bluefin.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "DoubleUp",
  category: "GambleFi, Launchpad",
  description: "Decentralized casino with transparent on-chain games.",
  site: "https://www.doubleup.fun/",
  x: "https://x.com/doubleup_app",
  discord: "https://discord.com/invite/doubleupapp",
  logo: "img/logo-doubleup.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Haedal",
  category: "DeFi, LST",
  description: "Liquid staking protocol enabling yield with full token liquidity.",
  site: "https://www.haedal.xyz/",
  x: "https://x.com/haedalprotocol",
  discord: "https://discord.com/invite/haedalprotocol",
  logo: "img/logo-haedal.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Scallop",
  category: "DeFi, Lending",
  description: "Lending and borrowing protocol with advanced security and tools.",
  site: "https://scallop.io/",
  x: "https://x.com/Scallop_io",
  discord: "https://discord.com/invite/F7umecFArJ",
  logo: "img/logo-scallop.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Navi Protocol",
  category: "DeFi, Lending",
  description: "Lending and liquid staking platform with leverage strategies.",
  site: "https://naviprotocol.io/",
  x: "https://x.com/navi_protocol",
  discord: "https://discord.com/invite/R6Xkbee8Xq",
  logo: "img/logo-naviprotocol.webp",
  drop: null,
  testnet: null,
  points: "Points",
  soon: null,
  date: "2024-04-01"
}, {
  name: "FlowX Finance",
  category: "DeFi, Aggregator",
  description: "DEX and liquidity aggregator with yield farming and IDO support.",
  site: "https://flowx.finance/",
  x: "https://x.com/FlowX_finance",
  discord: "https://discord.com/invite/flowx-1075716902111936564",
  logo: "img/logo-flowxfinance.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Kriya",
  category: "DeFi, Aggregator",
  description: "Comprehensive DeFi protocol offering AMM swaps, limit orders, vaults, and leveraged perpetuals.",
  site: "https://kriya.finance/",
  x: "https://x.com/KriyaDEX",
  discord: "https://discord.com/invite/kriya",
  logo: "img/logo-kriya.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Bucket Protocol",
  category: "DeFi",
  description: "Decentralized stablecoin protocol.",
  site: "https://www.bucketprotocol.io/",
  x: "https://x.com/bucket_protocol",
  discord: "https://discord.com/invite/nYCnNJE6Tr",
  logo: "img/logo-bucketprotocol.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Sui Name Service",
  category: "SocialFi, Infrastructure",
  description: "Decentralized name service. Allows domain registration and linking to wallets and contracts.",
  site: "https://suins.io/",
  x: "https://x.com/suinsdapp",
  discord: "https://discord.com/invite/suins",
  logo: "img/logo-suinameservice.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Cetus",
  category: "DeFi, Aggregator, Launchpad",
  description: "Decentralized exchange with concentrated liquidity, enabling efficient trading, range orders, and liquidity as a service.",
  site: "https://www.cetus.zone/",
  x: "https://x.com/CetusProtocol",
  discord: "https://discord.com/invite/cetusprotocol",
  logo: "img/logo-cetus.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Full Sail",
  category: "DeFi",
  description: "Decentralized exchange introduces an innovative ve(4,4) tokenomics model.",
  site: "https://www.fullsail.finance/",
  x: "https://x.com/fullsailfi",
  discord: "https://discord.com/invite/fullsailfi",
  logo: "img/logo-fullsail.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Soundness",
  category: "Infrastructure",
  description: "Decentralized data verification layer.",
  site: "https://soundness.xyz/",
  x: "https://x.com/SoundnessLabs",
  discord: "https://discord.com/invite/E7YeREX6aU",
  logo: "img/logo-soundness.webp",
  drop: null,
  testnet: "Testnet",
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Sui Bridge",
  category: "Bridge",
  description: "Secure cross-chain asset transfers in the Sui network.",
  site: "https://bridge.sui.io/",
  x: "https://x.com/SuiNetwork",
  discord: "https://discord.com/invite/sui",
  logo: "img/logo-sui.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Cosmocadia",
  category: "Gaming",
  description: "Cosmocadia is a cooperative sandbox farming game in which players grow land and trade NFTs.",
  site: "https://www.cosmocadia.io/",
  x: "https://x.com/Cosmocadia",
  discord: "https://discord.com/invite/cosmocadia",
  logo: "img/logo-сosmocadia.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "TradePort",
  category: "Nft Marketplace",
  description: "Multichain trading platform.",
  site: "https://www.tradeport.xyz/",
  x: "https://x.com/tradeportxyz",
  discord: "https://discord.com/invite/vna9xzdDK4",
  logo: "img/logo-tradeport.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Slush Wallet",
  category: "Wallet",
  description: "Multi-platform wallet for NFTs, DeFi, and crypto with zkLogin support.",
  site: "https://slush.app/",
  x: "https://x.com/SlushWallet",
  discord: "https://discord.com/invite/sui",
  logo: "img/logo-slushwallet.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Anima",
  category: "Gaming",
  description: "Web3 studio offering no-code NFT tools for games and virtual worlds.",
  site: "https://anima.nexus/",
  x: "https://x.com/animalabs_io",
  discord: "https://discord.com/invite/7AuvnpqZQe",
  logo: "img/logo-anima.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Artfi",
  category: "RWA",
  description: "Platform for investing in fine art through fractional NFTs, bridging physical and digital galleries.",
  site: "https://artfi.world/",
  x: "https://x.com/artfiglobal",
  discord: "https://discord.gg/artfi-997391352369254512",
  logo: "img/logo-artfi.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Arttoo",
  category: "RWA",
  description: "Platform for investing in art and owning its digital copies.",
  site: "https://arttoo.co.uk/",
  x: "https://x.com/arttoo_official",
  discord: null,
  logo: "img/logo-arttoo.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "BlueMove",
  category: "Nft Marketplace",
  description: "NFT platform for buying and selling digital collectibles on the blockchain.",
  site: "https://sui.bluemove.net/",
  x: "https://x.com/BlueMove_OA",
  discord: "https://discord.com/invite/7eXkAnyeCV",
  logo: "img/logo-bluemove.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Chirp",
  category: "DePin",
  description: "Decentralized IoT network that collects wireless data via a mobile app.",
  site: "https://chirptoken.io/",
  x: "https://x.com/ChirpDeWi",
  discord: "hhttps://discord.com/invite/zxAaVQgFvs",
  logo: "img/logo-chirp.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "DeSuiLabs",
  category: "Gaming",
  description: "Web3 competition platform with gamified experiences for a unique user experience.",
  site: "https://www.desuilabs.io/",
  x: "https://x.com/DeSuiLabs",
  discord: "https://discord.com/invite/2Cfm9gpTCu",
  logo: "img/logo-desuilabs.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Doonies",
  category: "NFT",
  description: "A collection of 4,444 skate-punk–themed PFP NFTs. Grants access to a community clubhouse, events, merch, and digital hangouts.",
  site: "https://doonies.xyz/",
  x: "https://x.com/LosDoonies",
  discord: "https://discord.com/invite/doonies",
  logo: "img/logo-doonies.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Prime Machin",
  category: "NFT",
  description: "A collection of 3,333 4K manga-style robots. Each NFT can own other digital assets and has a unique name via the Sui Name Service.",
  site: "https://prime.nozomi.world/",
  x: "https://x.com/LosDoonies",
  discord: "https://discord.com/invite/studiomirai",
  logo: "img/logo-primemachin.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Mystic Yetis",
  category: "NFT",
  description: "A unique collection of handcrafted yeti characters, each radiating wisdom and mystery. These NFTs grant access to a growing ecosystem of community, collaborations, and experiences.",
  site: "https://lofitheyeti.com/",
  x: "https://x.com/lofitheyeti",
  discord: null,
  logo: "img/logo-mysticyetis.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Tallys",
  category: "NFT",
  description: "A collection of 5,555 unique digital characters, each with individual traits, granting access to the community and ecosystem governance.",
  site: "https://tallys.talus.network/",
  x: "https://x.com/TallysNFT",
  discord: "https://discord.com/invite/talusnetwork",
  logo: "img/logo-tallys.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Rootlets",
  category: "NFT",
  description: "A collection of steampunk-inspired digital characters, each with unique designs and charisma.",
  site: "https://rootlets.io/",
  x: "https://x.com/rootlets_nft",
  discord: null,
  logo: "img/logo-rootlets.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Puggies",
  category: "NFT",
  description: "A collection of digital pugs with unique traits and charisma. Each NFT grants access to the community and participation in ecosystem governance.",
  site: "https://pugwifsui.com/",
  x: "https://x.com/SuiPugwif",
  discord: "https://discord.com/invite/puggies",
  logo: "img/logo-puggies.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Kumo",
  category: "NFT",
  description: "A collection of 2,222 customizable digital avatars featuring a cloud-cat character. Each NFT grants access to an ecosystem with games, merchandise, and upcoming airdrops.",
  site: "https://lucky-kat.com/",
  x: "https://x.com/Kumo_TheKat",
  discord: "https://discord.com/invite/quyJk6vjau",
  logo: "img/logo-kumo.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Theers",
  category: "NFT",
  description: "A collection of 9,998 unique digital avatars, each forming a complete artwork when paired. The project offers access to exclusive events, private lounges, and premium services.",
  site: "https://www.theers.org/",
  x: "https://x.com/theers_nft",
  discord: "https://discord.com/invite/DwXtyHtxNr",
  logo: "img/logo-theers.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: "Soon",
  date: "2024-04-01"
}, {
  name: "Stratton Labs",
  category: "Gaming",
  description: "A studio specializing in the development of games that combine DeFi and GameFi.",
  site: null,
  x: "https://x.com/Strattonweb3",
  discord: null,
  logo: "img/logo-strattonlabs.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "ONE Fight Arena",
  category: "Gaming",
  description: "A mobile Web3 match-3 game with MMA-style PvP battles.",
  site: "https://onefightarena.com/",
  x: "https://x.com/onefightarena",
  discord: "https://discord.com/invite/Unr2CECBJc",
  logo: "img/logo-onefightarena.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Fewcha Wallet",
  category: "Wallet",
  description: "A non-custodial wallet for Move-based blockchains, supporting Web3 assets and NFTs.",
  site: "https://fewcha.app/",
  x: "https://x.com/fewchawallet",
  discord: null,
  logo: "img/logo-fewchawallet.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Ika",
  category: "Infrastructure",
  description: "An ultra-fast MPC network enabling cross-chain coordination and DeFi solutions.",
  site: "https://ika.xyz/",
  x: "https://x.com/ikadotxyz",
  discord: "https://discord.com/invite/ikadotxyz",
  logo: "img/logo-ika.webp",
  drop: "Drop",
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Karrier One",
  category: "Infrastructure",
  description: "Decentralized mobile network enabling users to create and monetize mobile networks through the DePIN model.",
  site: "https://www.karrier.one/",
  x: "https://x.com/karrier_one",
  discord: "https://discord.com/invite/karrierone",
  logo: "img/logo-karrierone.webp",
  drop: "Drop",
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "MovePump",
  category: "Launchpad",
  description: "Decentralized platform for meme token creation and trading.",
  site: "https://movepump.com/",
  x: "https://x.com/BlueMove_OA",
  discord: "https://discord.com/invite/7eXkAnyeCV",
  logo: "img/logo-movepump.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Nightly Wallet",
  category: "Wallet",
  description: "A multi-chain wallet designed to solve common crypto issues.",
  site: "https://nightly.app/",
  x: "https://x.com/Nightly_app",
  discord: "https://discord.com/invite/7nhFHA6yZq",
  logo: "img/logo-nightlywallet.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Polymedia",
  category: "Infrastructure",
  description: "A decentralized app ecosystem offering tools for profile creation, asset exchange, betting, gaming, and community participation.",
  site: "https://polymedia.app/",
  x: "https://x.com/polymedia_app",
  discord: null,
  logo: "img/logo-polymedia.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Shadow",
  category: "Nft Marketplace",
  description: "A no-code platform for creating and trading NFTs with a dynamic bonding curve model, where prices adjust based on demand.",
  site: "https://shadow.app/",
  x: "https://x.com/shadow_sui",
  discord: null,
  logo: "img/logo-shadow.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Shadow Wallet",
  category: "Wallet",
  description: "A self-custodial Web3 wallet for DeFi and NFTs, offering secure, private transactions with full control over funds.",
  site: null,
  x: "https://x.com/shadow_sui",
  discord: null,
  logo: "img/logo-shadow.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Spritz Finance",
  category: "Payments",
  description: "A Web3 platform for paying bills and making purchases using cryptocurrency, supporting over 6,000 bill types and a virtual debit card.",
  site: "https://www.spritz.finance/",
  x: "https://x.com/spritzfinance",
  discord: null,
  logo: "img/logo-spritzfinance.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Studio Mirai",
  category: "Infrastructure",
  description: "A creative studio building next-gen digital experiences and NFT collections.",
  site: null,
  x: "https://x.com/_StudioMirai",
  discord: "https://discord.com/invite/studiomirai",
  logo: "img/logo-studiomirai.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "Suiet",
  category: "Wallet",
  description: "An open-source, self-custodial wallet focused on privacy, security, and user ownership, built to promote transparency and decentralization.",
  site: "https://suiet.app/",
  x: "https://x.com/suiet_wallet",
  discord: "https://discord.com/invite/XQspMzXNXu",
  logo: "img/logo-suiet.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-01"
}, {
  name: "SuiPlay",
  category: "Others",
  description: "A handheld gaming device that combines Web3 features with traditional gaming, enabling true digital ownership and seamless access to blockchain games.",
  site: "https://www.suiplay0x1.com/",
  x: "https://x.com/SuiPlay",
  discord: "https://discord.com/invite/suiplay",
  logo: "img/logo-suiplay.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-02"
}, {
  name: "Suiscan",
  category: "Analytics",
  description: "A comprehensive blockchain explorer and analytics platform offering real-time data on transactions, tokens, smart contracts, and validator performance.",
  site: "https://suiscan.xyz/",
  x: "https://x.com/suiscanofficial",
  discord: "https://discord.com/invite/UBQ85uSyAU",
  logo: "img/logo-suiscan.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-03"
}, {
  name: "SuiVision",
  category: "Analytics",
  description: "A user-friendly blockchain explorer offering detailed insights into transactions, accounts, assets, and validators for easy on-chain analysis.",
  site: "https://suivision.xyz/",
  x: "https://x.com/blockvisionhq",
  discord: "https://discord.com/invite/blockvision",
  logo: "img/logo-suivision.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-04"
}, {
  name: "Surf Wallet",
  category: "Wallet",
  description: "A secure, user-friendly crypto wallet offering features like zkLogin, in-wallet staking, and integrated swaps, with no extra fees or data tracking.",
  site: "https://surf.tech/",
  x: "https://x.com/surf_wallet",
  discord: null,
  logo: "img/logo-surfwallet.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-05"
}, {
  name: "Typus Finance",
  category: "DeFi",
  description: "A decentralized derivatives platform offering options and perpetuals with real yield, using innovative tools like Dutch auctions and lending strategies.",
  site: "https://typus.finance/",
  x: "https://x.com/TypusFinance",
  discord: "https://discord.com/invite/pzETKp6zvr",
  logo: "img/logo-typusfinance.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-06"
}, {
  name: "Recrd",
  category: "SocialFi",
  description: "A platform for monetizing short videos.",
  site: "https://www.recrd.com/",
  x: "https://x.com/RECRDapp",
  discord: null,
  logo: "img/logo-recrd.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-07"
}, {
  name: "Momentum",
  category: "DeFi",
  description: "A decentralized finance protocol enabling efficient token swaps, low slippage, and high yields through ve(3,3) and CLMM technologies.",
  site: "https://app.mmt.finance/",
  x: "https://x.com/MMTFinance",
  discord: "https://discord.com/invite/mmtfinance",
  logo: "img/logo-momentum.webp",
  drop: null,
  testnet: null,
  points: "Points",
  soon: null,
  date: "2024-04-08"
}, {
  name: "Pebble",
  category: "GambleFi",
  description: "A gaming platform delivering classic and accessible Web3 games with a focus on quality, transparency, and ease of entry.",
  site: "https://www.pebblestream.io/",
  x: "https://x.com/PebblePlay",
  discord: null,
  logo: "img/logo-pebble.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-09"
}, {
  name: "Astros",
  category: "DeFi, Aggregator",
  description: "Decentralized platform for token swaps and perpetual contracts with low fees and high speed.",
  site: "https://astros.ag/",
  x: "https://x.com/astros_ag",
  discord: "https://discord.com/invite/R6Xkbee8Xq",
  logo: "img/logo-astros.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-10"
}, {
  name: "Wave",
  category: "DeFi, GameFi",
  description: "An ecosystem combining DeFi, GameFi, and AI applications in one place, easily accessible via Telegram.",
  site: "https://waveonsui.com/",
  x: "https://x.com/WaveOnSui",
  discord: "https://discord.com/invite/waveonsui",
  logo: "img/logo-wave.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-11"
}, {
  name: "Obric",
  category: "DeFi",
  description: "Next-gen AMM with concentrated liquidity, zero loss, and smart pricing via external oracle.",
  site: "https://obric.xyz/",
  x: "https://x.com/poor_obric",
  discord: null,
  logo: "img/logo-obric.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-12"
}, {
  name: "Sui Passport",
  category: "Others",
  description: "Decentralized platform for collecting digital stamps for community participation. Rewards for events and content.",
  site: "https://www.suipassport.app/",
  x: "https://x.com/SuiFamOfficial",
  discord: null,
  logo: "img/logo-suipassport.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-13"
}, {
  name: "Talentum",
  category: "SocialFi",
  description: "A Web3 platform for earning through tasks, quizzes, and ambassador campaigns with automated rewards.",
  site: "https://talentum.id/",
  x: "https://x.com/TalentumID",
  discord: "https://discord.com/invite/GG3Q4CEv29",
  logo: "img/logo-talentum.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-14"
}, {
  name: "RaidenX",
  category: "DeFi",
  description: "Decentralized platform for high-speed trading of tokens and meme coins.",
  site: "https://raidenx.io/",
  x: "https://x.com/raidenx_io",
  discord: null,
  logo: "img/logo-raidenx.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-15"
}, {
  name: "Suiswap",
  category: "DeFi",
  description: "A token swapping platform with farming, liquidity, and launchpad features.",
  site: "https://suiswap.app/",
  x: "https://x.com/suiswap_app",
  discord: "https://discord.com/invite/suiswap",
  logo: "img/logo-suiswap.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-16"
}, {
  name: "Shio",
  category: "Infrastructure",
  description: "An MEV protection protocol that prevents user losses from arbitrage and sandwich attacks.",
  site: "https://www.getshio.com/",
  x: "https://x.com/ShioLabs",
  discord: null,
  logo: "img/logo-shio.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-17"
}, {
  name: "Kai Finance",
  category: "DeFi, Yield Aggregator",
  description: "A passive income platform with leverage for yield farming and automatic interest accrual.",
  site: "https://kai.finance/",
  x: "https://x.com/kai_finance_sui",
  discord: "https://discord.com/invite/XV2xYZjReX",
  logo: "img/logo-kaifinance.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-18"
}, {
  name: "Rockee",
  category: "DeFi",
  description: "An AI-driven DeFi protocol that helps users with trading, investments, market analysis, and community sentiment measurement for more informed decision-making.",
  site: "https://rockee.ai/",
  x: "https://x.com/rockeeAI",
  discord: null,
  logo: "img/logo-rockee.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-19"
}, {
  name: "ZO",
  category: "DeFi, Perpetual",
  description: "Decentralized perpetual trading protocol offering fast execution, deep liquidity, AI assistant, and support for any collateral.",
  site: "https://zofai.io/",
  x: "https://x.com/zofaiperps",
  discord: "https://discord.com/invite/RRfXR9VTfd",
  logo: "img/logo-zo.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-20"
}, {
  name: "Mole",
  category: "DeFi",
  description: "Decentralized protocol with AI management offering passive income through savings, leveraged farming, and automated asset management.",
  site: "https://mole.fi/",
  x: "https://x.com/moledefi",
  discord: "https://discord.com/invite/JfgJzJ8kkK",
  logo: "img/logo-mole.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-21"
}, {
  name: "Vram.Ai",
  category: "AI",
  description: "Decentralized platform for launching and evolving AI agents.",
  site: "https://www.vram.ai/",
  x: "https://x.com/vramxai",
  discord: "https://discord.com/invite/G3rvmPmztp",
  logo: "img/logo-vramai.webp",
  drop: "Drop",
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-22"
}, {
  name: "Lotus Finance",
  category: "DeFi",
  description: "Trading strategy protocol.",
  site: "https://beta.lotusfinance.io/",
  x: "https://x.com/Lotusfinance_io",
  discord: "https://discord.com/invite/lotusfinance",
  logo: "img/logo-lotus.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-23"
}, {
  name: "Suigar",
  category: "GambleFi",
  description: "A platform with gambling mini-games where users can win tokens and earn rewards for participation.",
  site: "https://suigar.com/",
  x: "https://x.com/Suigar_com",
  discord: "https://discord.com/invite/tAYGd46ZUK",
  logo: "img/logo-suigar.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-24"
}, {
  name: "Hokko",
  category: "Nft Marketplace",
  description: "A user-friendly marketplace for buying and selling digital collectibles.",
  site: "https://www.hokko.io/",
  x: "https://x.com/hokko_io",
  discord: null,
  logo: "img/logo-hokko.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-25"
}, {
  name: "Bolt Liquidity",
  category: "Infrastructure",
  description: "A decentralized platform for instant, zero-slippage swaps across networks with low fees and no bridges.",
  site: "https://www.boltliquidity.io/",
  x: "https://x.com/BoltLiquidity",
  discord: null,
  logo: "img/logo-boltliquidity.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-26"
}, {
  name: "Tugboat.Fi",
  category: "DeFi",
  description: "A protocol for creating decentralized, tokenized crypto investment funds with built-in DAO support and fee-sharing to incentivize fund managers.",
  site: "https://www.tugboat.fi/",
  x: "https://x.com/tugboatdotfi",
  discord: null,
  logo: "img/logo-tugboatfi.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-27"
}, {
  name: "Pawtato Finance",
  category: "Analytics",
  description: "A free tool for real-time alerts, wallet tracking, and portfolio management.",
  site: "https://pawtato.finance/",
  x: "https://x.com/PawtatoFinance",
  discord: "https://discord.com/invite/fNEAnHD4RV",
  logo: "img/logo-pawtatofinance.webp",
  drop: null,
  testnet: null,
  points: "Points",
  soon: null,
  date: "2024-04-28"
}, {
  name: "SuiBets",
  category: "GambleFi",
  description: "A decentralized betting platform with a Telegram bot for real-time odds and easy crypto bets.",
  site: "https://suibets.com/",
  x: "https://x.com/Sui_Bets/",
  discord: null,
  logo: "img/logo-suibets.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-29"
}, {
  name: "CoinDrip",
  category: "Others",
  description: "A protocol for real-time token distribution with customizable streams, enabling transparent payments, vesting, and tradable NFTs.",
  site: "https://coindrip.finance/",
  x: "https://x.com/CoinDripHQ",
  discord: null,
  logo: "img/logo-coindrip.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-04-30"
}, {
  name: "Atoma",
  category: "AI",
  description: "Private and verifiable AI execution network on decentralized GPUs with data protection and OpenAI API support.",
  site: "https://atoma.network/",
  x: "https://x.com/Atoma_Network",
  discord: "https://discord.com/invite/atoma",
  logo: "img/logo-atoma.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-01"
}, {
  name: "xPortal",
  category: "Wallet",
  description: "A smart crypto wallet for asset storage, exchange, and management with DeFi, NFT support, and instant fiat conversion.",
  site: "https://xportal.com/",
  x: "https://x.com/xPortalApp",
  discord: null,
  logo: "img/logo-xportal.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-02"
}, {
  name: "Birds",
  category: "AI, Gaming",
  description: "A platform that combines gaming, artificial intelligence, and creative tools. It streamlines AI integration and supports content creation.",
  site: "https://thebirds.ai/",
  x: "https://x.com/TheBirdsDogs",
  discord: null,
  logo: "img/logo-birds.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-03"
}, {
  name: "Mogul",
  category: "Others",
  description: "A fantasy-style platform where users can create virtual film studios by selecting actors, directors, and movies to compete for points and prizes.",
  site: "https://mogul.moviepass.com/",
  x: "https://x.com/mogulxmoviepass",
  discord: "https://discord.com/invite/MoviePass",
  logo: "img/logo-mogul.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-04"
}, {
  name: "MoviePass",
  category: "Others",
  description: "A subscription service for watching movies in US theaters with flexible plans and a user-friendly app.",
  site: "https://www.moviepass.com/",
  x: "https://x.com/MoviePass",
  discord: "https://discord.com/invite/moviepass",
  logo: "img/logo-moviepass.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-05"
}, {
  name: "Metastable",
  category: "DeFi, LST",
  description: "A decentralized financial platform focused on simplifying stablecoin usage and providing unified liquidity.",
  site: "https://mstable.io/",
  x: "https://x.com/MetaStables",
  discord: null,
  logo: "img/logo-metastable.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-06"
}, {
  name: "Takibi",
  category: "Infrastructure",
  description: "A platform for fast development of decentralized games and apps.",
  site: null,
  x: "https://x.com/TakibiProtocol",
  discord: null,
  logo: "img/logo-takibi.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-07"
}, {
  name: "Cro.Ag",
  category: "DeFi, Aggregator",
  description: "A full-featured DeFi solution offering swap and lending aggregation, wallet cleanup.",
  site: "https://cro.ag/",
  x: "https://x.com/cro_aggregator",
  discord: "https://discord.com/invite/UG6c7nXr5X",
  logo: "img/logo-croag.webp",
  drop: null,
  testnet: null,
  points: "Points",
  soon: null,
  date: "2024-05-08"
}, {
  name: "Noodles Finance",
  category: "DeFi, Analytics",
  description: "A multifunctional DeFi protocol combining trading, analytics, and social features.",
  site: "https://noodles.fi/",
  x: "https://x.com/NoodlesFi",
  discord: null,
  logo: "img/logo-noodlesfinance.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-08"
}, {
  name: "GiveRep",
  category: "SocialFi",
  description: "A SocialFi platform that rewards your activity on X.",
  site: "https://giverep.com/",
  x: "https://x.com/GiveRep",
  discord: null,
  logo: "img/logo-giverep.webp",
  drop: null,
  testnet: null,
  points: "Points",
  soon: null,
  date: "2024-05-10"
}, {
  name: "Moonbags",
  category: "Launchpad",
  description: "A platform for launching tokens without code, offering staking rewards and fee-based incentives.",
  site: "https://moonbags.io/",
  x: "https://x.com/moonbags_io",
  discord: null,
  logo: "img/logo-moonbags.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-12"
}, {
  name: "Deeptrade",
  category: "DeFi",
  description: "Decentralized orderbook exchange with zero fees for token holders, swap aggregation, and market analytics.",
  site: "https://deeptrade.io/",
  x: "https://x.com/_deeptrade",
  discord: null,
  logo: "img/logo-deeptrade.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-13"
}, {
  name: "PinataBot",
  category: "Others",
  description: "Decentralized OTC for pre-launch token trading, secured by deposits.",
  site: "https://market.pinatabot.com/",
  x: "https://x.com/PinataBotOnSui",
  discord: null,
  logo: "img/logo-pinatabot.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-14"
}, {
  name: "Mitsui Protocol",
  category: "DeFi",
  description: "An innovative desktop app for trading and asset management, combining AI automation with a modular interface and high flexibility.",
  site: "https://www.mitsuiprotocol.ai/",
  x: "https://x.com/MitsuiProtocol",
  discord: null,
  logo: "img/logo-mitsuiprotocol.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-19"
}, {
  name: "Splash",
  category: "Launchpad",
  description: "A fair token launch platform with no intermediaries. Includes tools for trading, analytics, and security.",
  site: "https://splash.xyz/",
  x: "https://x.com/splash_xyz",
  discord: null,
  logo: "img/logo-splash.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-20"
}, {
  name: "Patara",
  category: "Analytics",
  description: "A simple and intuitive Web3 platform for managing crypto assets. Features include swaps, portfolio tracking, lending, NFTs, and more.",
  site: "https://alpha.patara.app/",
  x: "https://x.com/PataraApp",
  discord: null,
  logo: "img/logo-patara.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-21"
}, {
  name: "Smithii Tools",
  category: "Infrastructure",
  description: "Decentralized platform with tools to launch and manage Web3 projects.",
  site: "https://tools.smithii.io/",
  x: "https://x.com/SmithiiTools",
  discord: "https://discord.com/invite/3AFfGDfmk7",
  logo: "img/logo-smithiitools.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: null,
  date: "2024-05-24"
}, {
  name: "Alpha4",
  category: "DeFi, Infrastructure",
  description: "An innovative Web3 protocol that enables secure and seamless liquidity movement across blockchains without the use of bridges, wrapped tokens, or synthetic assets.",
  site: "https://alpha4.io/",
  x: "https://x.com/alpha4_io",
  discord: "https://discord.com/invite/VuF5NmC9Dg",
  logo: "img/logo-alpha4.webp",
  drop: null,
  testnet: "Testnet",
  points: null,
  soon: null,
  date: "2024-05-24"
}, {
  name: "Ganbitera",
  category: "Launchpad, Nft Marketplace, AI",
  description: "An AI-powered NFT launchpad and marketplace. The platform enables no-code NFT creation and provides smart trading and analysis tools.",
  site: "https://ganbitera.io/",
  x: "https://x.com/ganbitera",
  discord: null,
  logo: "img/logo-ganbitera.webp",
  drop: null,
  testnet: null,
  points: null,
  soon: "Soon",
  date: new Date().toISOString().split('T')[0]
}];

// new Date().toISOString().split('T')[0]

// Функция перемещения к последнему добавленному проекту на сайт
const lastProject = projects[projects.length - 1];
const heroNameEl = document.querySelector('.hero__name');
const textNode = Array.from(heroNameEl.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
if (textNode) {
  textNode.textContent = lastProject.name + ' ';
}
document.querySelector('.hero__btn').addEventListener('click', () => {
  const projectName = document.querySelector('.hero__name').textContent.trim();
  const cards = document.querySelectorAll('.project__card-item');
  let found = false;
  cards.forEach(card => {
    const name = card.querySelector('.project__card-name')?.textContent.trim();
    const isMatch = name === projectName;
    card.classList.toggle('hidden', !isMatch);
    if (isMatch) {
      card.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      card.focus();
      found = true;
    }
  });
  const showMoreBtn = document.querySelector('.project__card-btn');
  if (showMoreBtn) {
    showMoreBtn.style.display = 'none';
  }
  filterButtons.forEach(btn => btn.classList.remove('active'));
  searchInput.value = '';
  searchInput.classList.remove('input--invalid');
  headerError.style.opacity = '0';
});

// Функция для генерации карточек
function generateProjectCards(projectsToRender) {
  const projectsList = document.querySelector('.project__card-list');
  const showMoreBtn = document.querySelector('.project__card-btn');
  projectsList.innerHTML = '';
  projectsToRender.forEach((project, index) => {
    const projectCard = document.createElement('li');
    projectCard.classList.add('project__card-item');
    projectCard.setAttribute('tabindex', '0');
    if (index >= 12) {
      projectCard.classList.add('hidden');
    }
    projectCard.innerHTML = `
      <div class="project__card-wrapper">
      <div class="project__card-wrapper flex">
        <div class="project__card-logo" style="background-image: url('${project.logo}');"></div>
        ${project.drop ? `<div class="project__card-drop">${project.drop}</div>` : ''}
        ${project.testnet ? `<div class="project__card-drop">${project.testnet}</div>` : ''}
        ${project.points ? `<div class="project__card-drop">${project.points}</div>` : ''}
        ${project.soon ? `<div class="project__card-drop">${project.soon}</div>` : ''}
      </div>
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
    showMoreBtn.textContent = 'Show more';
  } else {
    showMoreBtn.style.display = 'none';
  }
}
let filteredProjects = [...projects].sort((a, b) => a.name.localeCompare(b.name));
generateProjectCards(filteredProjects);

// Фильтрация карточек по категориям
const filterButtons = document.querySelectorAll('.project__btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.textContent.trim().toLowerCase();
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    if (category === 'all projects') {
      filteredProjects = [...projects];
    } else {
      filteredProjects = projects.filter(p => {
        const categories = p.category.toLowerCase().split(',').map(c => c.trim());
        return categories.includes(category);
      });
    }
    filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
    generateProjectCards(filteredProjects);
    searchInput.value = '';
    searchInput.classList.remove('input--invalid');
    headerError.style.opacity = '0';
    const cards = document.querySelectorAll('.project__card-item');
    cards.forEach((card, index) => {
      card.classList.toggle('hidden', index >= 12);
    });
    if (cards.length > 12 && showMoreBtn) {
      showMoreBtn.style.display = 'block';
    } else if (showMoreBtn) {
      showMoreBtn.style.display = 'none';
    }
  });
});

// Сортировка карточек
const sortButtons = document.querySelectorAll('.project__sort-btn');
let lastOneTimeSort = null;
sortButtons.forEach(button => {
  button.isAsc = false;
  const sortType = button.dataset.sort;
  button.addEventListener('click', () => {
    if (sortType === 'name') {
      if (lastOneTimeSort) return;
      filteredProjects.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return button.isAsc ? -1 : 1;
        if (nameA > nameB) return button.isAsc ? 1 : -1;
        return 0;
      });
      button.isAsc = !button.isAsc;
      generateProjectCards(filteredProjects);
      lastOneTimeSort = null;
    } else if (sortType === 'date') {
      if (lastOneTimeSort) return;
      filteredProjects.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return button.isAsc ? dateA - dateB : dateB - dateA;
      });
      button.isAsc = !button.isAsc;
      generateProjectCards(filteredProjects);
      lastOneTimeSort = null;
    } else if (['drop', 'points', 'testnet', 'soon'].includes(sortType)) {
      if (lastOneTimeSort === sortType) return;
      filterButtons.forEach(item => item.classList.remove('active'));
      filteredProjects = projects.filter(p => p[sortType]);
      filteredProjects.sort((a, b) => {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
      generateProjectCards(filteredProjects);
      lastOneTimeSort = sortType;
    }
  });
  if (['drop', 'points', 'testnet', 'soon'].includes(sortType)) {
    button.addEventListener('blur', () => {
      lastOneTimeSort = null;
    });
  }
});

// Функция для отображения скрытых карточек
document.querySelector('.project__card-btn').addEventListener('click', function () {
  const allCards = document.querySelectorAll('.project__card-item');
  const hiddenCards = document.querySelectorAll('.project__card-item.hidden');
  if (hiddenCards.length > 0) {
    const cardsToShow = [];
    for (let i = 0; i < 4 && i < hiddenCards.length; i++) {
      hiddenCards[i].classList.remove('hidden');
      cardsToShow.push(hiddenCards[i]);
    }
    if (cardsToShow.length > 0) {
      cardsToShow[0].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (document.querySelectorAll('.project__card-item.hidden').length === 0) {
      this.textContent = 'Show less';
    }
  } else {
    allCards.forEach((card, index) => {
      if (index >= 12) {
        card.classList.add('hidden');
      }
    });
    this.textContent = 'Show more';
    if (allCards.length > 0) {
      allCards[0].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

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

// Сортировка кнопок по имени
const list = document.querySelector('.project__list');
const items = Array.from(list.children);
const allProjects = items.find(item => item.textContent.trim() === 'All Projects');
const others = items.find(item => item.textContent.trim() === 'Others');
const selectItem = items.find(item => item.classList.contains('project__item-select'));
const filteredItems = items.filter(item => item !== allProjects && item !== others && item !== selectItem);
filteredItems.sort((a, b) => {
  const textA = a.textContent.trim().toLowerCase();
  const textB = b.textContent.trim().toLowerCase();
  return textA.localeCompare(textB);
});
list.innerHTML = '';
if (allProjects) list.appendChild(allProjects);
filteredItems.forEach(item => list.appendChild(item));
if (others) list.appendChild(others);
if (selectItem) list.appendChild(selectItem);

// Поиск по карточкам
const searchInput = document.querySelector('.header__search');
const headerError = document.querySelector('.header__error');
const cards = document.querySelectorAll('.project__card-item');
const showMoreBtn = document.querySelector('.project__card-btn');
searchInput.addEventListener('input', () => {
  const value = searchInput.value.trim();
  const isValid = /^[a-zA-Z0-9 ]*$/.test(value);
  if (!isValid) {
    searchInput.classList.add('input--invalid');
    headerError.style.opacity = "1";
    return;
  } else {
    searchInput.classList.remove('input--invalid');
    headerError.style.opacity = "0";
  }
  const query = value.toLowerCase();
  function resetSortStates() {
    sortButtons.forEach(button => {
      button.isAsc = false;
    });
    lastOneTimeSort = null;
  }
  if (query === "") {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    filteredProjects = [...projects].sort((a, b) => a.name.localeCompare(b.name));
    generateProjectCards(filteredProjects);
    resetSortStates();
    if (showMoreBtn) {
      showMoreBtn.style.display = filteredProjects.length > 12 ? 'block' : 'none';
    }
    return;
  }
  const cards = document.querySelectorAll('.project__card-item');
  let hasMatches = false;
  cards.forEach(card => {
    const name = card.querySelector('.project__card-name')?.textContent.trim().toLowerCase();
    const match = name.startsWith(query);
    card.classList.toggle('hidden', !match);
    if (match) hasMatches = true;
  });
  if (showMoreBtn) showMoreBtn.style.display = 'none';
  headerError.style.opacity = hasMatches ? "0" : "1";
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