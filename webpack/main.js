// import "@babel/polyfill"; // IE対応する場合、コメント解除

// ブラウザ（デバイス）分岐処理
import UaParser from "ua-parser-js";
const uaParser = new UaParser();
const browser = uaParser.getBrowser().name;

// sleep処理
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const init = async () => {
  // sleep処理
  // await sleep(100);

  // 共通処理
  // require("./init/observer").observer();

  // ブラウザ（デバイス）分岐処理
  const HtmlElement = document.querySelector("html");
  switch (browser) {
    case "Chrome":
      HtmlElement.classList.add("is-chrome");
      break;
    case "Safari":
      HtmlElement.classList.add("is-safari");
      break;
    // IE対応する場合、コメント解除
    // case "IE":
    //   require("./init/ie").ie();
    //   break;
    default:
  }
  // ページ分岐処理
  // switch (pageId) {
  //   case 'index':
  //     break;
  //   default:
  // }
};

init();
