"use strict";
exports.id = 562;
exports.ids = [562];
exports.modules = {

/***/ 8149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5156);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function Contact() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default().contact),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
      className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default().contact__title),
      children: ["Any questions? ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default().colored),
        children: "Contact us."
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default().contact__paragraph),
      children: "Were looking forward to hearing from you. Feel free to contact us if you have any questions!"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      href: "#",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        children: "Contact Us"
      })
    })]
  });
}

/***/ }),

/***/ 9821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5156);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function Footer() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default().footer),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: ["Vivekanand Educational Societys Institute of Technology", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default().footer__left),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: "https://github.com/Samiksha1603/collaborative_shopping",
          children: "Github"
        })
      })]
    })
  });
}

/***/ }),

/***/ 6593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ProductList)
});

// EXTERNAL MODULE: ../../../../AppData/Roaming/npm/node_modules/next/router.js
var router = __webpack_require__(405);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(5156);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "react-bootstrap/Card"
var Card_ = __webpack_require__(6810);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: ../../../../AppData/Roaming/npm/node_modules/next/link.js
var next_link = __webpack_require__(4488);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Product.tsx







// <h2 className={styles.product__title}>{props.product.name}</h2>
// <p className={styles.product__description}>{props.product.description}</p>
// <img src={props.product.image} alt="" className={styles.product__image}/>
// <div className={styles.product__price_button_container}>
//   <div className={styles.product__price}>${props.product.price.toFixed(2)}</div>
//   <button
//     className="snipcart-add-item product__button"
//     data-item-id={props.product.id}
//     data-item-name={props.product.name}
//     data-item-price={props.product.price}
//     data-item-url={props.router.pathname}
//     data-item-image={props.product.image}>
//     Add to cart
//   </button>
// </div>
const Product = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Home_module_default()).productArea,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Card_default()), {
      style: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: '5%',
        marginTop: '5%'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((Card_default()).Img, {
        style: {
          width: '20%'
        },
        src: props.product.image
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Card_default()).Body, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((Card_default()).Title, {
          children: props.product.name
        }), /*#__PURE__*/jsx_runtime_.jsx((Card_default()).Text, {
          children: props.product.description
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "snipcart-add-item product__button",
          "data-item-id": props.product.id,
          "data-item-name": props.product.name,
          "data-item-price": props.product.price,
          "data-item-url": props.router.pathname,
          "data-item-image": props.product.image,
          children: "Add to cart"
        }), " ", ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (Home_module_default()).button,
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/productDetails",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Home_module_default()).Link,
              children: "Details"
            })
          })
        }), " ", ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (Home_module_default()).button,
          children: "Suggest"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Home_module_default()).product__price,
          children: ["$", props.product.price.toFixed(2)]
        })]
      })]
    })
  });
};

/* harmony default export */ const components_Product = ((0,router.withRouter)(Product));
;// CONCATENATED MODULE: ./components/ProductList.tsx




const ProductList = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Home_module_default()).product_list,
    children: props.products?.map((product, index) => /*#__PURE__*/jsx_runtime_.jsx(components_Product, {
      product: product
    }, index))
  });
};

/* harmony default export */ const components_ProductList = (ProductList);

/***/ }),

/***/ 6367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(908);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5156);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6368);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8140);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9821);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8149);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6593);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app__WEBPACK_IMPORTED_MODULE_3__]);
_app__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


 // import '../styles/index.module.css';










function Home(props) {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: messages,
    1: setMessages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  let allMessages = [];

  if (false) {}

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (pusher_js__WEBPACK_IMPORTED_MODULE_2___default().logToConsole) = true;
    const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_2___default())('361f7ef1d7f18076912c', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('test');
    channel.bind('message', function (data) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  });

  const submit = async e => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        message
      })
    });
    console.log(response);
    setMessage('');
  }; //deleted :
  // <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
  // <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
  // <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().fullbody),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("title", {
        children: "Colab"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("meta", {
        name: "theme-color",
        content: "#000000"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("script", {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js",
      async: true
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("script", {
      src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
      "data-api-key": "ZDI1MWZjMjktMmU0My00Y2FkLWI0NjUtZTJiMDQyY2Y3MWQ1NjM4MDI2MjMyNDY4MDU1MTc1",
      id: "snipcart",
      async: true
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("link", {
      href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
      rel: "stylesheet",
      type: "text/css"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("noscript", {
      children: "You need to enable JavaScript to run this app."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
        crossOrigin: "anonymous"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bg),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().chat),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().chatdecoration),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().chattop),
                children: "Enter username :"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input),
                placeholder: "  Username",
                value: username,
                onChange: e => setUsername(e.target.value)
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().chatarea),
              style: {
                minHeight: "300px"
              },
              children: messages.map(message => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().message),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("strong", {
                      children: message.username
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                      className: "col-10 mb-1 small",
                      children: message.message
                    })]
                  })
                });
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
              onSubmit: submit,
              className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().chatbottom),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input),
                placeholder: "Enter your message",
                value: message,
                onChange: e => setMessage(e.target.value)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
                type: "submit",
                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button),
                children: " Send "
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          products: props.products
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("script", {
      children: "var Alert = ReactBootstrap.Alert;"
    })]
  });
}

Home.getInitialProps = async () => {
  return {
    products: [{
      id: "nextjs_halfmoon",
      name: "Halfmoon Betta",
      price: 25.00,
      image: "../static/photo.webp",
      description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees."
    }, {
      id: "nextjs_dragonscale",
      name: "Dragon Scale Betta",
      price: 35,
      image: "../static/brown.jpg",
      description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor."
    }, {
      id: "nextjs_crowntail",
      name: "Crowntail Betta",
      price: 7.50,
      image: "../static/smart.jpg",
      description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb."
    }, {
      id: "nextjs_veiltail",
      name: "Veiltail Betta",
      price: 5.00,
      image: "../static/rolex.jpeg",
      description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards."
    }]
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6033);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6367);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5049);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Home__WEBPACK_IMPORTED_MODULE_1__, react_aria__WEBPACK_IMPORTED_MODULE_2__]);
([_Home__WEBPACK_IMPORTED_MODULE_1__, react_aria__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


 // import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// <Cardsss/>



function App() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_aria__WEBPACK_IMPORTED_MODULE_2__.SSRProvider, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_0__/* .Navigation */ .W, {})
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;