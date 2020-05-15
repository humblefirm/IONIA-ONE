var dicKorean = {
    "title": "가장 간편한 블록체인 금융 플랫폼",
    "p2p": "아이오니아는 안전한 개인 간의 토큰 거래 시스템을 제공합니다.<br/>원하는 코인을 원하는 가격으로 자유롭게 거래할 수 있습니다.",
    "Manage": "다양한 거래소 지갑, 아이오니아에서 한번에 관리할 수 있습니다.<br/>간편 송금과 보유한 모든 토큰의 관리가 가능합니다.",
    "Invest": "아이오니아의 투자 시스템은 간편 구매 한번으로 끝나지 않습니다.<br/>팬덤 포인트로 지원하고 커뮤니티로 정보 교환이 가능합니다.",
    "title2": "아이오니아는 안전하고 간편한 블록체인 금융 플랫폼입니다.",
    "title3": "암호화 자산 관리에 필요한 모든 것은 아이오니아에 있습니다.",
    "title4": "완전한 자산 관리를 위한",
    "intro": "여러 거래소를 통해 관리하던 번거로움은 잊으세요.<br/>아이오니아는 암호화 자산 관리의 최적화된 플랫폼입니다.",
    "_multi": "용도에 맞게, 필요에 따라 월렛 만들기!<br/>멀티월렛은 효과적인 자산관리가 가능합니다.",
    "_p2p": "상장하지 않은 토큰도 개인 간 거래를 할 수 있습니다.<br/>안전한 P2P 거래가 가능한 플랫폼을 제공합니다.",
    "_inv": "묻지마 투자는 이제 그만, 팬덤 시스템과 신뢰할 수 있는 투자 상품을 만나보세요.",
    "_simple": "그동안 암호화폐 관리가 어려우셨나요? 멀티월렛과 투자 플랫폼으로 새로운 관리를 경험해보세요.",
    "intro2": "암호화 자산의 성장을 위한 완전한 금융 플랫폼<br/>공정한 거래와 자유로운 투자를 위한 합리적인 시스템을 제공합니다.",
    "end": "블록체인 금융 플랫폼 IONIA<br/>지금 시작하세요."
}
var dicEnglish = {
    "title": "The easiest blockchain financial platform",
    "p2p": "IONIA provides a secure personal token trading system. <br/> You can freely trade the coins you want at any price.",
    "Manage": "Various exchange wallets, which can be managed at one time in IONIA. <br/> Simple remittance and management of all tokens held is possible.",
    "Invest": "IONIA's investment system does not end with a simple purchase. <br/> Support with fandom points and exchange information with the community.",
    "title2": "IONIA is a secure and simple blockchain financial platform.",
    "title3": "Everything you need to manage your crypto assets is in IONIA.",
    "title4": "For complete asset management",
    "intro": "Forget the hassle of managing through multiple exchanges. <br/> IONIA is an optimized platform for managing crypto assets.",
    "_multi": "Make wallets according to your needs and needs! <br/> Multi-wallets enable effective asset management.",
    "_p2p": "Even unlisted tokens can trade between individuals. <br/> Provides a platform for secure P2P transactions.",
    "_inv": "Don't ask, stop investing. Meet the fandom system and trusted investment products.",
    "_simple": "Did you ever have a difficult time managing cryptocurrency? Experience new management with a multi-wallet and investment platform.",
    "intro2": "A complete financial platform for the growth of crypto assets <br/> provides a reasonable system for fair trading and free investment.",
    "end": "Blockchain financial platform IONIA <br/> Start now."
}

var ActiveDic;
var langSel;

if (window.name) {
    langSel = window.name;
}
else {
    langSel = "English";
}

function LangChange() {
    langClass = document.getElementsByClassName("dicRef");
    var i = langClass.length;

    langSel = getLanguage();
    switch(window.location.search){
        case '?kr': 
            langSel="ko-KR";
            break;
        case '?en': 
            langSel="en-EN";
            break;
        default:
            break;
        
    }
    switch (langSel) {
        case "ko-KR":
            langSel = "ko-KR";
            ActiveDic = dicKorean;
            break;
        case "en-EN":
            langSel = "en-EN";
            ActiveDic = dicEnglish;
            break;
        default:
            langSel = "en-EN";
            ActiveDic = dicEnglish;
            break;
    }
    window.name = langSel;

    while (i--)
        langClass[i].innerHTML = ActiveDic[langClass[i].id];

}
function getLanguage() {
    return navigator.language || navigator.userLanguage;
}