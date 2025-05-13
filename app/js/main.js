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
  description: "Multi-platform wallet for NFTs, DeFi, and crypto with zkLogin support.",
  site: "https://slush.app/",
  x: "https://x.com/SlushWallet",
  discord: "https://discord.com/invite/sui",
  logo: "img/logo-slushwallet.webp"
}, {
  name: "Anima",
  category: "GameFi",
  description: "Web3 studio offering no-code NFT tools for games and virtual worlds.",
  site: "https://anima.nexus/",
  x: "https://x.com/animalabs_io",
  discord: "https://discord.com/invite/7AuvnpqZQe",
  logo: "img/logo-anima.webp"
}, {
  name: "Artfi",
  category: "RWA",
  description: "Platform for investing in fine art through fractional NFTs, bridging physical and digital galleries.",
  site: "https://artfi.world/",
  x: "https://x.com/artfiglobal",
  discord: "https://discord.gg/artfi-997391352369254512",
  logo: "img/logo-artfi.webp"
}, {
  name: "Arttoo",
  category: "RWA",
  description: "Platform for investing in art and owning its digital copies.",
  site: "https://arttoo.co.uk/",
  x: "https://x.com/arttoo_official",
  discord: null,
  logo: "img/logo-arttoo.webp"
}, {
  name: "BlueMove",
  category: "Nft Marketplace",
  description: "NFT platform for buying and selling digital collectibles on the blockchain.",
  site: "https://sui.bluemove.net/",
  x: "https://x.com/BlueMove_OA",
  discord: "https://discord.com/invite/7eXkAnyeCV",
  logo: "img/logo-bluemove.webp"
}, {
  name: "Chirp",
  category: "DePin",
  description: "Decentralized IoT network that collects wireless data via a mobile app.",
  site: "https://chirptoken.io/",
  x: "https://x.com/ChirpDeWi",
  discord: "hhttps://discord.com/invite/zxAaVQgFvs",
  logo: "img/logo-chirp.webp"
}, {
  name: "DeSuiLabs",
  category: "GameFi",
  description: "Web3 competition platform with gamified experiences for a unique user experience.",
  site: "https://www.desuilabs.io/",
  x: "https://x.com/DeSuiLabs",
  discord: "https://discord.com/invite/2Cfm9gpTCu",
  logo: "img/logo-desuilabs.webp"
}, {
  name: "Fewcha Wallet",
  category: "Wallet",
  description: "A non-custodial wallet for Move-based blockchains, supporting Web3 assets and NFTs.",
  site: "https://fewcha.app/",
  x: "https://x.com/fewchawallet",
  discord: null,
  logo: "img/logo-fewchawallet.webp"
}, {
  name: "Ika",
  category: "Infrastructure",
  description: "An ultra-fast MPC network enabling cross-chain coordination and DeFi solutions.",
  site: "https://ika.xyz/",
  x: "https://x.com/ikadotxyz",
  discord: "https://discord.com/invite/ikadotxyz",
  logo: "img/logo-ika.webp"
}, {
  name: "Karrier One",
  category: "Infrastructure",
  description: "Decentralized mobile network enabling users to create and monetize mobile networks through the DePIN model.",
  site: "https://www.karrier.one/",
  x: "https://x.com/karrier_one",
  discord: "https://discord.com/invite/karrierone",
  logo: "img/logo-karrierone.webp"
}, {
  name: "MovePump",
  category: "Launchpad",
  description: "Decentralized platform for meme token creation and trading.",
  site: "https://movepump.com/",
  x: "https://x.com/BlueMove_OA",
  discord: "https://discord.com/invite/7eXkAnyeCV",
  logo: "img/logo-movepump.webp"
}, {
  name: "Nightly Wallet",
  category: "Wallet",
  description: "A multi-chain wallet designed to solve common crypto issues.",
  site: "https://nightly.app/",
  x: "https://x.com/Nightly_app",
  discord: "https://discord.com/invite/7nhFHA6yZq",
  logo: "img/logo-nightlywallet.webp"
}, {
  name: "Polymedia",
  category: "Infrastructure",
  description: "A decentralized app ecosystem offering tools for profile creation, asset exchange, betting, gaming, and community participation.",
  site: "https://polymedia.app/",
  x: "https://x.com/polymedia_app",
  discord: null,
  logo: "img/logo-polymedia.webp"
}, {
  name: "Shadow",
  category: "Nft Marketplace",
  description: "A no-code platform for creating and trading NFTs with a dynamic bonding curve model, where prices adjust based on demand.",
  site: "https://shadow.app/",
  x: "https://x.com/shadow_sui",
  discord: null,
  logo: "img/logo-shadow.webp"
}, {
  name: "Shadow Wallet",
  category: "Wallet",
  description: "A self-custodial Web3 wallet for DeFi and NFTs, offering secure, private transactions with full control over funds.",
  site: null,
  x: "https://x.com/shadow_sui",
  discord: null,
  logo: "img/logo-shadow.webp"
}, {
  name: "Spritz Finance",
  category: "Payments",
  description: "A Web3 platform for paying bills and making purchases using cryptocurrency, supporting over 6,000 bill types and a virtual debit card.",
  site: "https://www.spritz.finance/",
  x: "https://x.com/spritzfinance",
  discord: null,
  logo: "img/logo-spritzfinance.webp"
}, {
  name: "Studio Mirai",
  category: "Infrastructure",
  description: "A creative studio building next-gen digital experiences and NFT collections.",
  site: null,
  x: "https://x.com/_StudioMirai",
  discord: "https://discord.com/invite/studiomirai",
  logo: "img/logo-studiomirai.webp"
}, {
  name: "Suiet",
  category: "Wallet",
  description: "An open-source, self-custodial wallet focused on privacy, security, and user ownership, built to promote transparency and decentralization.",
  site: "https://suiet.app/",
  x: "https://x.com/suiet_wallet",
  discord: "https://discord.com/invite/XQspMzXNXu",
  logo: "img/logo-suiet.webp"
}, {
  name: "SuiPlay",
  category: "Others",
  description: "A handheld gaming device that combines Web3 features with traditional gaming, enabling true digital ownership and seamless access to blockchain games.",
  site: "https://www.suiplay0x1.com/",
  x: "https://x.com/SuiPlay",
  discord: "https://discord.com/invite/suiplay",
  logo: "img/logo-suiplay.webp"
}, {
  name: "Suiscan",
  category: "Analytics",
  description: "A comprehensive blockchain explorer and analytics platform offering real-time data on transactions, tokens, smart contracts, and validator performance.",
  site: "https://suiscan.xyz/",
  x: "https://x.com/suiscanofficial",
  discord: "https://discord.com/invite/UBQ85uSyAU",
  logo: "img/logo-suiscan.webp"
}, {
  name: "SuiVision",
  category: "Analytics",
  description: "A user-friendly blockchain explorer offering detailed insights into transactions, accounts, assets, and validators for easy on-chain analysis.",
  site: "https://suivision.xyz/",
  x: "https://x.com/blockvisionhq",
  discord: "https://discord.com/invite/blockvision",
  logo: "img/logo-suivision.webp"
}, {
  name: "Surf Wallet",
  category: "Wallet",
  description: "A secure, user-friendly crypto wallet offering features like zkLogin, in-wallet staking, and integrated swaps, with no extra fees or data tracking.",
  site: "https://surf.tech/",
  x: "https://x.com/surf_wallet",
  discord: null,
  logo: "img/logo-surfwallet.webp"
}, {
  name: "Typus Finance",
  category: "DeFi",
  description: "A decentralized derivatives platform offering options and perpetuals with real yield, using innovative tools like Dutch auctions and lending strategies.",
  site: "https://typus.finance/",
  x: "https://x.com/TypusFinance",
  discord: "https://discord.com/invite/pzETKp6zvr",
  logo: "img/logo-typusfinance.webp"
}, {
  name: "Recrd",
  category: "SocialFi",
  description: "A platform for monetizing short videos.",
  site: "https://www.recrd.com/",
  x: "https://x.com/RECRDapp",
  discord: null,
  logo: "img/logo-recrd.webp"
}, {
  name: "Momentum",
  category: "DeFi",
  description: "A decentralized finance protocol enabling efficient token swaps, low slippage, and high yields through ve(3,3) and CLMM technologies.",
  site: "https://app.mmt.finance/",
  x: "https://x.com/MMTFinance",
  discord: "https://discord.com/invite/mmtfinance",
  logo: "img/logo-momentum.webp"
}, {
  name: "Pebble",
  category: "GambleFi",
  description: "A gaming platform delivering classic and accessible Web3 games with a focus on quality, transparency, and ease of entry.",
  site: "https://www.pebblestream.io/",
  x: "https://x.com/PebblePlay",
  discord: null,
  logo: "img/logo-pebble.webp"
}, {
  name: "Astros",
  category: "DeFi",
  description: "Decentralized platform for token swaps and perpetual contracts with low fees and high speed.",
  site: "https://astros.ag/",
  x: "https://x.com/astros_ag",
  discord: "https://discord.com/invite/R6Xkbee8Xq",
  logo: "img/logo-astros.webp"
}, {
  name: "Wave",
  category: "DeFi",
  description: "An ecosystem combining DeFi, GameFi, and AI applications in one place, easily accessible via Telegram.",
  site: "https://waveonsui.com/",
  x: "https://x.com/WaveOnSui",
  discord: "https://discord.com/invite/waveonsui",
  logo: "img/logo-wave.webp"
}, {
  name: "Obric",
  category: "DeFi",
  description: "Next-gen AMM with concentrated liquidity, zero loss, and smart pricing via external oracle.",
  site: "https://obric.xyz/",
  x: "https://x.com/poor_obric",
  discord: null,
  logo: "img/logo-obric.webp"
}, {
  name: "Sui Passport",
  category: "Others",
  description: "Decentralized platform for collecting digital stamps for community participation. Rewards for events and content.",
  site: "https://www.suipassport.app/",
  x: "https://x.com/SuiFamOfficial",
  discord: null,
  logo: "img/logo-suipassport.webp"
}, {
  name: "Talentum",
  category: "SocialFi",
  description: "A Web3 platform for earning through tasks, quizzes, and ambassador campaigns with automated rewards.",
  site: "https://talentum.id/",
  x: "https://x.com/TalentumID",
  discord: "https://discord.com/invite/GG3Q4CEv29",
  logo: "img/logo-talentum.webp"
}, {
  name: "RaidenX",
  category: "DeFi",
  description: "Decentralized platform for high-speed trading of tokens and meme coins.",
  site: "https://raidenx.io/",
  x: "https://x.com/raidenx_io",
  discord: null,
  logo: "img/logo-raidenx.webp"
}, {
  name: "Suiswap",
  category: "DeFi",
  description: "A token swapping platform with farming, liquidity, and launchpad features.",
  site: "https://suiswap.app/",
  x: "https://x.com/suiswap_app",
  discord: "https://discord.com/invite/suiswap",
  logo: "img/logo-suiswap.webp"
}, {
  name: "Shio",
  category: "Infrastructure",
  description: "An MEV protection protocol that prevents user losses from arbitrage and sandwich attacks.",
  site: "https://www.getshio.com/",
  x: "https://x.com/ShioLabs",
  discord: null,
  logo: "img/logo-shio.webp"
}, {
  name: "Kai Finance",
  category: "DeFi",
  description: "A passive income platform with leverage for yield farming and automatic interest accrual.",
  site: "https://kai.finance/",
  x: "https://x.com/kai_finance_sui",
  discord: "https://discord.com/invite/XV2xYZjReX",
  logo: "img/logo-shio.webp"
}, {
  name: "Rockee",
  category: "DeFi",
  description: "An AI-driven DeFi protocol that helps users with trading, investments, market analysis, and community sentiment measurement for more informed decision-making.",
  site: "https://rockee.ai/",
  x: "https://x.com/rockeeAI",
  discord: null,
  logo: "img/logo-rockee.webp"
}, {
  name: "ZO",
  category: "DeFi",
  description: "Decentralized perpetual trading protocol offering fast execution, deep liquidity, AI assistant, and support for any collateral.",
  site: "https://zofai.io/",
  x: "https://x.com/zofaiperps",
  discord: "https://discord.com/invite/RRfXR9VTfd",
  logo: "img/logo-zo.webp"
}, {
  name: "Mole",
  category: "DeFi",
  description: "Decentralized protocol with AI management offering passive income through savings, leveraged farming, and automated asset management.",
  site: "https://mole.fi/",
  x: "https://x.com/moledefi",
  discord: "https://discord.com/invite/JfgJzJ8kkK",
  logo: "img/logo-mole.webp"
}, {
  name: "Vram.Ai",
  category: "AI",
  description: "Decentralized platform for launching and evolving AI agents.",
  site: "https://www.vram.ai/",
  x: "https://x.com/vramxai",
  discord: "https://discord.com/invite/G3rvmPmztp",
  logo: "img/logo-vramai.webp"
}, {
  name: "Lotus Finance",
  category: "DeFi",
  description: "Trading strategy protocol.",
  site: "https://beta.lotusfinance.io/",
  x: "https://x.com/Lotusfinance_io",
  discord: "https://discord.com/invite/lotusfinance",
  logo: "img/logo-lotus.webp"
}, {
  name: "Cro.Ag",
  category: "DeFi",
  description: "A full-featured DeFi solution offering swap and lending aggregation, wallet cleanup.",
  site: "https://cro.ag/",
  x: "https://x.com/cro_aggregator",
  discord: "https://discord.com/invite/UG6c7nXr5X",
  logo: "img/logo-croag.webp"
}, {
  name: "Noodles Finance",
  category: "DeFi",
  description: "A multifunctional DeFi protocol combining trading, analytics, and social features.",
  site: "https://noodles.fi/",
  x: "https://x.com/NoodlesFi",
  discord: null,
  logo: "img/logo-noodlesfinance.webp"
}, {
  name: "GiveRep",
  category: "SocialFi",
  description: "A SocialFi platform that rewards your activity on X.",
  site: "https://giverep.com/",
  x: "https://x.com/GiveRep",
  discord: null,
  logo: "img/logo-giverep.webp"
}, {
  name: "Suigar",
  category: "GambleFi",
  description: "A platform with gambling mini-games where users can win tokens and earn rewards for participation.",
  site: "https://suigar.com/",
  x: "https://x.com/Suigar_com",
  discord: "https://discord.com/invite/tAYGd46ZUK",
  logo: "img/logo-suigar.webp"
}, {
  name: "Hokko",
  category: "Nft Marketplace",
  description: "A user-friendly marketplace for buying and selling digital collectibles.",
  site: "https://www.hokko.io/",
  x: "https://x.com/hokko_io",
  discord: null,
  logo: "img/logo-hokko.webp"
}, {
  name: "Bolt Liquidity",
  category: "Infrastructure",
  description: "A decentralized platform for instant, zero-slippage swaps across networks with low fees and no bridges.",
  site: "https://www.boltliquidity.io/",
  x: "https://x.com/BoltLiquidity",
  discord: null,
  logo: "img/logo-boltliquidity.webp"
}, {
  name: "Tugboat.Fi",
  category: "DeFi",
  description: "A protocol for creating decentralized, tokenized crypto investment funds with built-in DAO support and fee-sharing to incentivize fund managers.",
  site: "https://www.tugboat.fi/",
  x: "https://x.com/tugboatdotfi",
  discord: null,
  logo: "img/logo-tugboatfi.webp"
}, {
  name: "Pawtato Finance",
  category: "Analytics",
  description: "A free tool for real-time alerts, wallet tracking, and portfolio management.",
  site: "https://pawtato.finance/",
  x: "https://x.com/PawtatoFinance",
  discord: "https://discord.com/invite/fNEAnHD4RV",
  logo: "img/logo-pawtatofinance.webp"
}, {
  name: "Moonbags",
  category: "Launchpad",
  description: "A platform for launching tokens without code, offering staking rewards and fee-based incentives.",
  site: "https://moonbags.io/",
  x: "https://x.com/moonbags_io",
  discord: null,
  logo: "img/logo-moonbags.webp"
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
    showMoreBtn.textContent = 'Show more';
  } else {
    showMoreBtn.style.display = 'none';
  }
}
generateProjectCards(projects);

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

// Сортировка кнопок по имени
const list = document.querySelector('.project__list');
const items = Array.from(list.children);
const allProjects = items.find(item => item.textContent.trim() === 'All Projects');
const others = items.find(item => item.textContent.trim() === 'Others');
const filteredItems = items.filter(item => item !== allProjects && item !== others);
filteredItems.sort((a, b) => {
  const textA = a.textContent.trim().toLowerCase();
  const textB = b.textContent.trim().toLowerCase();
  return textA.localeCompare(textB);
});
list.innerHTML = '';
if (allProjects) list.appendChild(allProjects);
filteredItems.forEach(item => list.appendChild(item));
if (others) list.appendChild(others);

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
  if (query === "") {
    generateProjectCards(projects);
    filterButtons.forEach(btn => btn.classList.remove('active'));
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