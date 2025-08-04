(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/logic/regionalData.ts":
/*!***********************************!*\
  !*** ./src/logic/regionalData.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allPaymentVariants": () => (/* binding */ allPaymentVariants),
/* harmony export */   "auExchangeRate": () => (/* binding */ auExchangeRate),
/* harmony export */   "backgroundData": () => (/* binding */ backgroundData),
/* harmony export */   "balanceListOrder": () => (/* binding */ balanceListOrder),
/* harmony export */   "balanceListOrder2": () => (/* binding */ balanceListOrder2),
/* harmony export */   "balanceListOrder3": () => (/* binding */ balanceListOrder3),
/* harmony export */   "balanceListOrder4": () => (/* binding */ balanceListOrder4),
/* harmony export */   "cards": () => (/* binding */ cards),
/* harmony export */   "cards_business": () => (/* binding */ cards_business),
/* harmony export */   "cards_commercial": () => (/* binding */ cards_commercial),
/* harmony export */   "cities": () => (/* binding */ cities),
/* harmony export */   "currency": () => (/* binding */ currency),
/* harmony export */   "currencyCode": () => (/* binding */ currencyCode),
/* harmony export */   "currencyName": () => (/* binding */ currencyName),
/* harmony export */   "euExchangeRate": () => (/* binding */ euExchangeRate),
/* harmony export */   "findRegionByCurrency": () => (/* binding */ findRegionByCurrency),
/* harmony export */   "flags": () => (/* binding */ flags),
/* harmony export */   "gaHeroOriginalTableOrder": () => (/* binding */ gaHeroOriginalTableOrder),
/* harmony export */   "gaHeroTableValues": () => (/* binding */ gaHeroTableValues),
/* harmony export */   "gbExchangeRate": () => (/* binding */ gbExchangeRate),
/* harmony export */   "generateBackgroundValues": () => (/* binding */ generateBackgroundValues),
/* harmony export */   "homepageBankAccountTableOrder": () => (/* binding */ homepageBankAccountTableOrder),
/* harmony export */   "homepageWalletOriginalTableOrder": () => (/* binding */ homepageWalletOriginalTableOrder),
/* harmony export */   "paymentMethodIcons": () => (/* binding */ paymentMethodIcons),
/* harmony export */   "paymentMethodIconsCheckOut": () => (/* binding */ paymentMethodIconsCheckOut),
/* harmony export */   "regionalData": () => (/* binding */ regionalData),
/* harmony export */   "tableQuantas": () => (/* binding */ tableQuantas),
/* harmony export */   "tableStreamLiveOrder": () => (/* binding */ tableStreamLiveOrder),
/* harmony export */   "tabularData": () => (/* binding */ tabularData),
/* harmony export */   "usExchangeRate": () => (/* binding */ usExchangeRate),
/* harmony export */   "visa_variant": () => (/* binding */ visa_variant)
/* harmony export */ });
/* harmony import */ var _sheetData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheetData */ "./src/logic/sheetData.ts");
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-ignore
const flags = {
    US: '[US] US United States of America',
    EU: '[EU] European Union',
    GB: '[GB] Great Britain',
    AU: '[AU] Australia',
    HK: '[HK] Hong Kong SAR',
    UK: '[GB] Great Britain',
    SG: '[SG] Singapore',
    CN: '[CN] China',
    MY: '[MY] Malaysia',
    JP: '[JP] Japan',
    NZ: '[NZ] New Zealand',
    CA: '[CA] Canada',
    CH: '[CH] Switzerland',
    ID: '[ID] Indonesia',
};
const currencyName = {
    UK: 'Great Britain Pound',
    AU: 'Australian Dollar',
    SG: 'Singapore Dollar',
    EU: 'Euro',
    US: 'United States Dollar',
    HK: 'Hong Kong Dollar',
    CN: 'Chinese Yuan',
    MY: 'Malaysian Ringit',
    JP: 'Japanese Yen',
    NZ: 'New Zealand Dollar',
    CA: 'Canadian Dollar',
    ID: 'Indonesian Rupiah',
};
const location = {
    UK: 'United Kingdom',
    AU: 'Australia',
    SG: 'Singapore',
    EU: 'Europe',
    US: 'United States',
    HK: 'Hong Kong',
    CN: 'China',
    MY: 'Malaysia',
    JP: 'Japan',
    NZ: 'New Zealand',
    CA: 'Canada',
    ID: 'Indonesia',
};
const cities = {
    AU: 'Melbourne',
    NZ: 'Auckland',
    UK: 'London',
    EU: 'Amsterdam',
    US: 'Los Angeles',
    JP: 'Tokyo',
    CA: 'Toronto',
    SG: 'Singapore',
    HK: 'Hong Kong',
    CN: 'Shanghai',
    MY: 'Kuala Lumpur',
};
const usExchangeRate = {
    US: '1',
    EU: '0.9111',
    UK: '0.79179',
    AU: '1.477454',
    HK: '7.830255',
    SG: '1.326485',
    CN: '6.9271',
    MY: '4.4535',
    JP: '135.17',
    NZ: '1.575585',
    CA: '1.33815',
};
const auExchangeRate = {
    US: '0.67647',
    EU: '0.616710201',
    UK: '0.5359265928',
    AU: '1',
    HK: '5.297540761',
    SG: '0.8976926017',
    CN: '4.687463571',
    MY: '3.012659145',
    JP: '91.5544645',
    NZ: '1.066661278',
    CA: '0.9054449479',
};
const gbExchangeRate = {
    US: '1.24306',
    EU: '1.15037',
    UK: '1',
    AU: '1.869251475',
    HK: '9.730487221',
    SG: '1.673270635',
    CN: '8.764691754',
    MY: '5.66773207',
    JP: '172.506273',
    NZ: '1.977832766',
    CA: '1.677068183',
};
const euExchangeRate = {
    US: '1.09574',
    EU: '1',
    UK: '0.868245',
    AU: '1.622105',
    HK: '8.58288',
    SG: '1.45454',
    CN: '7.587889926',
    MY: '4.88535679',
    JP: '148.1655',
    NZ: '1.73029',
    CA: '1.46723',
};
const currency = {
    US: 'USD',
    EU: 'EUR',
    UK: 'GBP',
    AU: 'AUD',
    HK: 'HKD',
    SG: 'SGD',
    CN: 'CNY',
    MY: 'MYR',
    JP: 'JPY',
    NZ: 'NZD',
    CA: 'CAD',
    ID: 'IDR',
};
const currencyCode = {
    US: '$',
    EU: '€',
    UK: '£',
    AU: '$',
    HK: '$',
    SG: '$',
    CN: '¥',
    MY: 'RM',
    JP: '¥',
    NZ: '$',
    CA: '$',
};
const cards = {
    PHYSICAL_BUSINESS: 'PHYSICAL BUSINESS',
    VIRTUAL_BUSINESS: 'VIRTUAL BUSINESS',
    VIRTUAL_COMMERCIAL: 'VIRTUAL COMMERCIAL',
    PHYSICAL_COMMERCIAL: 'PHYSICAL COMMERCIAL',
};
const cards_commercial = {
    AU: [],
    NZ: [],
    UK: [],
    EU: [],
    US: [],
    JP: [],
    CA: [],
    SG: [],
    HK: [],
    CN: [],
    MY: [],
};
const visa_variant = {
    AU: 'Business',
    NZ: 'Business',
    UK: 'Business',
    EU: 'Business',
    US: 'Commercial',
    JP: 'Commercial',
    CA: 'Commercial',
    SG: 'Business',
    HK: 'Commercial',
    CN: 'Commercial',
    MY: 'N/A',
};
const cards_business = {
    AU: [cards.PHYSICAL_BUSINESS, cards.VIRTUAL_BUSINESS],
    NZ: [cards.VIRTUAL_BUSINESS, cards.VIRTUAL_BUSINESS],
    UK: [cards.PHYSICAL_BUSINESS, cards.VIRTUAL_BUSINESS],
    EU: [cards.VIRTUAL_BUSINESS, cards.VIRTUAL_BUSINESS],
    US: [cards.PHYSICAL_COMMERCIAL, cards.VIRTUAL_COMMERCIAL],
    JP: [cards.VIRTUAL_COMMERCIAL, cards.VIRTUAL_COMMERCIAL],
    CA: [cards.VIRTUAL_COMMERCIAL, cards.VIRTUAL_COMMERCIAL],
    SG: [cards.PHYSICAL_BUSINESS, cards.VIRTUAL_BUSINESS],
    HK: [cards.PHYSICAL_COMMERCIAL, cards.VIRTUAL_COMMERCIAL],
    CN: [cards.PHYSICAL_COMMERCIAL, cards.VIRTUAL_COMMERCIAL],
    MY: [],
};
const countryWithSuffix = {
    AU: 'Australian',
    NZ: '',
    UK: '',
    EU: '',
    US: '',
    JP: '',
    CA: '',
    SG: '',
    HK: '',
    CN: '',
    MY: '',
};
const transferMethod = {
    AU: 'Bank Transfer',
    NZ: 'Direct Credit',
    UK: 'Faster Payments',
    EU: 'SEPA',
    US: 'ACH',
    JP: 'Zengin',
    CA: 'EFT',
    SG: 'GIRO',
    HK: 'ACH',
    CN: 'ACH',
    MY: 'N/A',
};
const payout = {
    AU: 'NPP',
    NZ: '   ',
    UK: 'Faster Payments',
    EU: '',
    US: 'Fedwire',
    JP: 'Zengin',
    CA: 'LVTS',
    SG: 'FAST',
    HK: 'FPS',
    CN: '   ',
    MY: '   ',
    PH: 'EPCS',
};
const bank1 = {
    AU: 'Australia and New Zealand Bank',
    NZ: 'JPMorgan Chase & Co.',
    UK: 'Barclays Bank PLC',
    EU: 'Deutsche Bank AG',
    US: 'JPMorgan Chase & Co.',
    JP: 'JPMorgan Chase & Co.',
    CA: 'Royal Bank of Canada',
    SG: 'JPMorgan Chase & Co.',
    HK: 'JPMorgan Chase & Co.',
    CN: 'JPMorgan Chase & Co.',
    MY: 'JPMorgan Chase & Co.',
};
const bank2 = {
    AU: 'National Australia Bank',
    NZ: 'Citibank, N.A.',
    UK: 'HSBC UK Bank PLC',
    EU: 'Barclays Bank PLC',
    US: 'Citibank, N.A.',
    JP: 'Citibank, N.A.',
    CA: 'Bank of Montreal',
    SG: 'Citibank, N.A.',
    HK: 'Citibank, N.A.',
    CN: 'Citibank, N.A.',
    MY: 'Citibank, N.A.',
    PH: 'Citibank, N.A.',
};
const accountNumbers = {
    EU: '• • • • • • • • • •',
    AU: '• • • • • • • • •',
    UK: '• • • • • • • •',
    NZ: '• • • • • • • - • •',
    CA: '• • • • • • • • •',
    US: '• • • • • • • • • •',
    SG: '• • • • • • • • • •',
    JP: '• • • • • • •',
    ID: '• • • • • • • • • • • •',
    HK: '• • • • • • • • • • •',
    CN: '• • • • • • • • • • •',
};
const getRegionalData = (region) => {
    var _a, _b;
    return Object.assign(Object.assign(Object.assign({}, _sheetData__WEBPACK_IMPORTED_MODULE_0__.sheetData[region]), _sheetData__WEBPACK_IMPORTED_MODULE_0__.transferMethodData[region]), { 'awx-region': region, 'awx-card-1': ((_a = cards_business[region]) === null || _a === void 0 ? void 0 : _a[0]) || ' ', 'awx-card-2': ((_b = cards_business[region]) === null || _b === void 0 ? void 0 : _b[1]) || ' ', 'awx-currency': currency[region] || ' ', 'awx-flag-icon': flags[region] || ' ', 'awx-location': location[region] || ' ', 'awx-demo-company': 'Demo Co. ' + region || 0, 'awx-demo-company-funds': 'Demo Co. ' + region + ' Funds' || 0, 'awx-city': cities[region] || ' ', 'awx-company': 'Awesome Tech ' + region || 0, 'awx-country-with-suffix': countryWithSuffix[region] || ' ', 'awx-country-code': region, 'awx-transfer-method': transferMethod[region] || ' ', 'awx-payout': payout[region] || ' ', 'awx-bank-1': bank1[region] || ' ', 'awx-bank-2': bank2[region] || ' ', 'awx-currency-name': currencyName[region] || ' ', 'awx-payment-methods-icons-checkout-text': ['HK', 'CN'].includes(region)
            ? 'Cards, Alipay HK, and WeChat Pay '
            : 'Cards, Apple Pay, and Google Pay ', 'awx-account-number-title': ['EU'].includes(region) ? 'IBAN' : 'Account No.', 'awx-account-number': accountNumbers[region] });
};
const regionalData = {
    AU: getRegionalData('AU'),
    ID: getRegionalData('ID'),
    NZ: getRegionalData('NZ'),
    UK: getRegionalData('UK'),
    EU: getRegionalData('EU'),
    US: getRegionalData('US'),
    JP: getRegionalData('JP'),
    CA: getRegionalData('CA'),
    SG: getRegionalData('SG'),
    HK: getRegionalData('HK'),
    CN: getRegionalData('CN'),
    MY: getRegionalData('MY'),
};
const backgroundData = {
    AU: ['US', 'UK', 'HK', 'JP', 'SG', 'NZ', 'EU'],
    NZ: ['US', 'UK', 'HK', 'JP', 'SG', 'AU', 'EU'],
    UK: ['US', 'EU', 'HK', 'JP', 'SG', 'AU', 'EU'],
    EU: ['US', 'UK', 'HK', 'JP', 'SG', 'AU', 'NZ'],
    US: ['UK', 'EU', 'HK', 'JP', 'SG', 'AU', 'EU'],
    JP: ['US', 'HK', 'UK', 'NZ', 'SG', 'AU', 'EU'],
    CA: ['US', 'UK', 'HK', 'JP', 'SG', 'AU', 'EU'],
    SG: ['US', 'UK', 'HK', 'JP', 'CA', 'AU', 'EU'],
    HK: ['US', 'UK', 'EU', 'JP', 'SG', 'AU', 'EU'],
    CN: ['US', 'HK', 'UK', 'JP', 'SG', 'AU', 'EU'],
    MY: ['US', 'UK', 'HK', 'JP', 'SG', 'AU', 'EU'],
};
const generateBackgroundValues = (region, index) => {
    const temp = {};
    Object.keys(regionalData[region]).forEach((key) => {
        temp[`${key}-base-${index}`] = regionalData[region][key];
    });
    console.log('OOPOOPO', region, index, temp);
    return temp;
};
const gaHeroOriginalTableOrder = [
    'USD',
    'GBP',
    'AUD',
    'SGD',
    'EUR',
    'HKD',
    // 'GBP',
    // 'AUD',
    // 'SGD',
    // 'EUR',
    // 'USD',
    // 'HKD',
    // 'CAD',
    // 'CNY',
    // 'JPY',
    // 'MYR',
    // 'CHF',
];
// export const tableStreamLiveOrder = ['CAD', 'USD', 'CHF', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR'];
// export const balanceListOrder = ['CAD', 'USD', 'EUR', 'GBP', 'AUD', 'HKD', 'IDR', 'HKD', 'IDR'];
// export const homepageWalletOriginalTableOrder = ['AUD', 'CAD', 'EUR', 'GBP', 'USD', 'HKD', 'CHF'];
// export const homepageBankAccountTableOrder = ['AUD', 'USD', 'GBP', 'HKD', 'SGD', 'EUR', 'CHF'];
// export const balanceListOrder2 = ['AUD', 'USD', 'GBP', 'HKD'];
// export const balanceListOrder3 = ['AUD', 'USD', 'EUR', 'GBP'];
const tableStreamLiveOrder = ['CAD', 'USD', 'CHF', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR'];
const balanceListOrder = ['USD', 'GBP', 'AUD', 'SGD', 'HKD', 'JPY'];
const homepageWalletOriginalTableOrder = ['USD', 'GBP', 'AUD', 'SGD', 'EUR'];
const homepageBankAccountTableOrder = ['USD', 'GBP', 'AUD', 'SGD', 'HKD', 'JPY', 'EUR'];
const balanceListOrder2 = ['USD', 'GBP', 'AUD', 'SGD'];
const balanceListOrder3 = ['AUD', 'USD', 'EUR', 'GBP'];
const balanceListOrder4 = ['USD', 'GBP', 'HKD', 'AUD'];
const tableQuantas = ['USD', 'CAD', 'AUD', 'SGD', 'HKD', 'GBP', 'EUR'];
const gaHeroTableValues = {
    GBP: [
        flags.UK,
        'GBP',
        '1,000.00 GBP',
        'Great Britain Pound',
        'United Kingdom',
        'UK Account',
        '00176921',
    ],
    IDR: [
        flags.ID,
        'IDR',
        'Rp1,000.00 IDR',
        'Indonesian Rupiah',
        'Indonesia',
        'ID Account',
        '00176921',
    ],
    AUD: [
        flags.AU,
        'AUD',
        '1,000.00 AUD',
        'Australian Dollar',
        'Australia',
        'AU Account',
        '612876420',
    ],
    SGD: [
        flags.SG,
        'SGD',
        '1,000.00 SGD',
        'Singapore Dollar',
        'Singapore',
        'SG Account',
        '8852013232',
    ],
    EUR: [flags.EU, 'EUR', '1,000.00 EUR', 'Euro', 'Europe', 'EU Account', '90450239'],
    USD: [
        flags.US,
        'USD',
        '1,000.00 USD',
        'United States Dollar',
        'United States',
        'US Account',
        '8461948214',
    ],
    HKD: [
        flags.HK,
        'HKD',
        '1,000.00 HKD',
        'Hong Kong Dollar',
        'Hong Kong',
        'HK Account',
        '87535507290',
    ],
    CNY: [flags.CN, 'CNY', '1,000.00 CNY', 'Chinese Yuan', 'China', 'CN Account', '87535507290'],
    MYR: [
        flags.MY,
        'MYR',
        '1,000.00 MYR',
        'Malaysian Ringit',
        'Malaysia',
        'MY Account',
        '87535507290',
    ],
    JPY: [flags.JP, 'JPY', '1,000.00 JPY', 'Japanese Yen', 'Japan', 'JP Account', '87535507290'],
    CHF: [flags.CH, 'CHF', '1,000.00 CHF', 'Swiss Franc', 'Switzerland', 'CH Account', '87535507290'],
    NZD: [
        flags.NZ,
        'NZD',
        '1,000.00 NZD',
        'New Zealand Dollar',
        'New Zealand',
        'NZ Account',
        '87535507290',
    ],
    CAD: [flags.CA, 'CAD', '1,000.00 CAD', 'Canadian Dollar', 'Canada', 'CA Account', '87535507290'],
};
const tabularData = {
    AU: ['AUD', 'GBP', 'USD', 'SGD', 'EUR', 'HKD', 'JPY'],
    NZ: ['NZD', 'GBP', 'AUD', 'SGD', 'EUR', 'HKD', 'JPY'],
    UK: ['GBP', 'USD', 'AUD', 'SGD', 'EUR', 'HKD', 'JPY'],
    EU: ['EUR', 'USD', 'GBP', 'AUD', 'SGD', 'HKD', 'JPY'],
    US: ['USD', 'GBP', 'AUD', 'SGD', 'EUR', 'HKD', 'JPY'],
    JP: ['JPY', 'USD', 'GBP', 'AUD', 'SGD', 'EUR', 'HKD'],
    CA: ['CAD', 'GBP', 'USD', 'SGD', 'EUR', 'HKD', 'JPY'],
    SG: ['SGD', 'GBP', 'AUD', 'USD', 'EUR', 'HKD', 'JPY'],
    HK: ['HKD', 'GBP', 'AUD', 'SGD', 'EUR', 'USD', 'JPY'],
    CN: ['CNY', 'USD', 'HKD', 'SGD', 'EUR', 'GBP', 'JPY'],
    MY: ['MYR', 'GBP', 'AUD', 'SGD', 'USD', 'HKD', 'JPY'],
};
const allPaymentVariants = [
    'mastercard',
    'visa',
    'AMEX',
    'unionpay',
    'JCB',
    'google pay',
    'apple pay',
    'paypal',
    'alipay',
    'kakao',
    'wechat',
    'Pay easy',
    'Klarna',
    'grabpay',
    'trustly',
    'paysafecard',
    'alipayhk',
    'FPS',
];
// 'awx-checkout-payment-method-1': 'Apple Pay',
// 'awx-checkout-payment-method-1-icon': 'apple pay',
// 'awx-checkout-payment-method-2': 'Google Pay',
// 'awx-checkout-payment-method-2-icon': 'google pay',
// 'awx-checkout-payment-method-3': 'PayPal',
// 'awx-checkout-payment-method-3-icon': 'paypal',
// 'awx-lmp-payment-method-1': 'Klarna',
// 'awx-lmp-payment-method-1-icon': 'klarna',
// 'awx-lmp-payment-method-2': 'Trustly',
// 'awx-lmp-payment-method-2-icon': 'trustly',
// 'awx-lmp-payment-method-3': 'Paysafecard',
// 'awx-lmp-payment-method-3-icon': 'paysafecard',
// 'awx-lmp-payment-method-4': 'iDEAL',
// 'awx-lmp-payment-method-4-icon': 'ideal',
// 'awx-lmp-payment-method-5': 'Bacs Direct Debit',
// 'awx-lmp-payment-method-5-icon': 'alipay',
// 'awx-lmp-payment-method-6': 'KakaoPay',
// 'awx-lmp-payment-method-6-icon': 'kakaopay',
// 'awx-lmp-payment-method-7': 'GrabPay',
// 'awx-lmp-payment-method-7-icon': 'grabpay',
const paymentMethodIcons = {
    AU: ['mastercard', 'visa', 'AMEX', 'unionpay'],
    NZ: ['mastercard', 'visa'],
    UK: ['mastercard', 'visa', 'AMEX', 'unionpay'],
    EU: ['mastercard', 'visa'],
    US: ['mastercard', 'visa'],
    JP: ['mastercard', 'visa'],
    CA: ['mastercard', 'visa'],
    SG: ['mastercard', 'visa', 'AMEX', 'unionpay', 'JCB'],
    HK: ['mastercard', 'visa', 'AMEX', 'unionpay', 'JCB'],
    CN: ['mastercard', 'visa'],
    MY: [],
};
const paymentMethodIconsCheckOut = {
    AU: [...paymentMethodIcons['AU'], 'apple pay', 'google pay'],
    NZ: [...paymentMethodIcons['NZ'], 'apple pay', 'google pay'],
    UK: [...paymentMethodIcons['UK'], 'apple pay', 'google pay'],
    EU: [...paymentMethodIcons['EU'], 'apple pay', 'google pay'],
    US: [...paymentMethodIcons['US'], 'apple pay', 'google pay'],
    JP: [...paymentMethodIcons['JP'], 'apple pay', 'google pay'],
    CA: [...paymentMethodIcons['CA'], 'apple pay', 'google pay'],
    SG: [...paymentMethodIcons['SG'], 'apple pay', 'google pay'],
    HK: [...paymentMethodIcons['HK'], 'alipayhk', 'wechat'],
    CN: [...paymentMethodIcons['CN'], 'alipay', 'wechat'],
    MY: [],
};
const findRegionByCurrency = (target) => {
    return Object.keys(currency).find((e) => currency[e] == target);
};


/***/ }),

/***/ "./src/logic/sheetData.ts":
/*!********************************!*\
  !*** ./src/logic/sheetData.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bankCardData": () => (/* binding */ bankCardData),
/* harmony export */   "sheetData": () => (/* binding */ sheetData),
/* harmony export */   "transferMethodData": () => (/* binding */ transferMethodData)
/* harmony export */ });
const sheetData = {
    EU: {
        'awx-ga-cards-title-1': 'Location',
        'awx-ga-cards-value-1': 'Europe',
        'awx-ga-cards-title-2': 'IBAN',
        'awx-ga-cards-value-2': '• • • • • • • • • •',
        'awx-ga-cards-title-3': 'SWIFT Code',
        'awx-ga-cards-value-3': '• • • • • • • •',
        'awx-ga-cards-title-4': 'Account Name',
        'awx-ga-cards-value-4': 'EUR Global Account',
        'awx-ga-why-title-1': 'Account Name',
        'awx-ga-why-value-1': 'Makers Supply Limited',
        'awx-ga-why-title-2': 'Location',
        'awx-ga-why-value-2': 'Europe',
        'awx-ga-why-title-3': 'IBAN',
        'awx-ga-why-value-3': '• • • • • • • • • •',
        'awx-ga-why-title-4': 'SWIFT Code',
        'awx-ga-why-value-4': '• • • • • • • •',
        'awx-ga-2-fields-title-1': 'IBAN',
        'awx-ga-2-fields-value-1': '• • • • • • • • • •',
        'awx-ga-2-fields-title-2': 'Location',
        'awx-ga-2-fields-value-2': 'Europe',
        'awx-checkout-payment-method-1': 'Apple Pay',
        'awx-checkout-payment-method-1-icon': 'apple pay',
        'awx-checkout-payment-method-2': 'Google Pay',
        'awx-checkout-payment-method-2-icon': 'google pay',
        'awx-checkout-payment-method-3': 'PayPal',
        'awx-checkout-payment-method-3-icon': 'paypal',
        'awx-lmp-payment-method-1': 'Klarna',
        'awx-lmp-payment-method-1-icon': 'klarna',
        'awx-lmp-payment-method-2': 'Trustly',
        'awx-lmp-payment-method-2-icon': 'trustly',
        'awx-lmp-payment-method-3': 'Paysafecard',
        'awx-lmp-payment-method-3-icon': 'paysafecard',
        'awx-lmp-payment-method-4': 'iDEAL',
        'awx-lmp-payment-method-4-icon': 'ideal',
        'awx-lmp-payment-method-5': 'SEPA Direct Debit',
        'awx-lmp-payment-method-5-icon': 'SEPA',
        'awx-lmp-payment-method-6': 'KakaoPay',
        'awx-lmp-payment-method-6-icon': 'kakaopay',
        'awx-lmp-payment-method-7': 'GrabPay',
        'awx-lmp-payment-method-7-icon': 'grabpay',
    },
    AU: {
        'awx-ga-cards-title-1': 'Location',
        'awx-ga-cards-value-1': 'Australia',
        'awx-ga-cards-title-2': 'Account no. ',
        'awx-ga-cards-value-2': '• • • • • • • • •',
        'awx-ga-cards-title-3': 'BSB Code',
        'awx-ga-cards-value-3': '• • • • • •',
        'awx-ga-cards-title-4': 'Account Type',
        'awx-ga-cards-value-4': 'Current',
        'awx-ga-why-title-1': 'Account Name',
        'awx-ga-why-value-1': 'Makers Supply Limited',
        'awx-ga-why-title-2': 'Location',
        'awx-ga-why-value-2': 'Australia',
        'awx-ga-why-title-3': 'Account no. ',
        'awx-ga-why-value-3': '• • • • • • • • •',
        'awx-ga-why-title-4': 'BSB Code',
        'awx-ga-why-value-4': '• • • • • •',
        'awx-ga-2-fields-title-1': 'Account no. ',
        'awx-ga-2-fields-value-1': '• • • • • • • • •',
        'awx-ga-2-fields-title-2': 'BSB Code',
        'awx-ga-2-fields-value-2': '• • • • • •',
        'awx-checkout-payment-method-1': 'Apple Pay',
        'awx-checkout-payment-method-1-icon': 'apple pay',
        'awx-checkout-payment-method-2': 'Google Pay',
        'awx-checkout-payment-method-2-icon': 'google pay',
        'awx-checkout-payment-method-3': 'PayPal',
        'awx-checkout-payment-method-3-icon': 'paypal',
        'awx-lmp-payment-method-1': 'Alipay',
        'awx-lmp-payment-method-1-icon': 'alipay',
        'awx-lmp-payment-method-2': 'WeChat Pay',
        'awx-lmp-payment-method-2-icon': 'wechat',
        'awx-lmp-payment-method-3': 'KakaoPay',
        'awx-lmp-payment-method-3-icon': 'kakaopay',
        'awx-lmp-payment-method-4': 'GrabPay',
        'awx-lmp-payment-method-4-icon': 'grabpay',
        'awx-lmp-payment-method-5': 'Konbini',
        'awx-lmp-payment-method-5-icon': 'konbini',
        'awx-lmp-payment-method-6': 'Klarna',
        'awx-lmp-payment-method-6-icon': 'klarna',
        'awx-lmp-payment-method-7': 'iDEAL',
        'awx-lmp-payment-method-7-icon': 'ideal',
    },
    UK: {
        'awx-ga-cards-title-1': 'Location',
        'awx-ga-cards-value-1': 'United Kingdom',
        'awx-ga-cards-title-2': 'Account no. ',
        'awx-ga-cards-value-2': '• • • • • • • •',
        'awx-ga-cards-title-3': 'IBAN',
        'awx-ga-cards-value-3': '• • • • • • • • • •',
        'awx-ga-cards-title-4': 'Sort Code',
        'awx-ga-cards-value-4': '• • • • • •',
        'awx-ga-why-title-1': 'Account Name',
        'awx-ga-why-value-1': 'Makers Supply Limited',
        'awx-ga-why-title-2': 'Location',
        'awx-ga-why-value-2': 'United Kingdom',
        'awx-ga-why-title-3': 'Account no. ',
        'awx-ga-why-value-3': '• • • • • • • •',
        'awx-ga-why-title-4': 'Sort Code',
        'awx-ga-why-value-4': '• • • • • •',
        'awx-ga-2-fields-title-1': 'Account no. ',
        'awx-ga-2-fields-value-1': '• • • • • • • •',
        'awx-ga-2-fields-title-2': 'Sort Code',
        'awx-ga-2-fields-value-2': '• • • • • •',
        'awx-checkout-payment-method-1': 'Apple Pay',
        'awx-checkout-payment-method-1-icon': 'apple pay',
        'awx-checkout-payment-method-2': 'Google Pay',
        'awx-checkout-payment-method-2-icon': 'google pay',
        'awx-checkout-payment-method-3': 'PayPal',
        'awx-checkout-payment-method-3-icon': 'paypal',
        'awx-lmp-payment-method-1': 'Klarna',
        'awx-lmp-payment-method-1-icon': 'klarna',
        'awx-lmp-payment-method-2': 'Trustly',
        'awx-lmp-payment-method-2-icon': 'trustly',
        'awx-lmp-payment-method-3': 'Paysafecard',
        'awx-lmp-payment-method-3-icon': 'paysafecard',
        'awx-lmp-payment-method-4': 'iDEAL',
        'awx-lmp-payment-method-4-icon': 'ideal',
        'awx-lmp-payment-method-5': 'Bacs Direct Debit',
        'awx-lmp-payment-method-5-icon': 'BACS',
        'awx-lmp-payment-method-6': 'KakaoPay',
        'awx-lmp-payment-method-6-icon': 'kakaopay',
        'awx-lmp-payment-method-7': 'GrabPay',
        'awx-lmp-payment-method-7-icon': 'grabpay',
    },
    NZ: {
        'awx-ga-cards-title-1': 'Location',
        'awx-ga-cards-value-1': 'New Zealand',
        'awx-ga-cards-title-2': 'Account no. ',
        'awx-ga-cards-value-2': '• • • • • • • - • •',
        'awx-ga-cards-title-3': 'Bank Code',
        'awx-ga-cards-value-3': '• •',
        'awx-ga-cards-title-4': 'Branch Code',
        'awx-ga-cards-value-4': '• • • •',
        'awx-ga-why-title-1': 'Account Name',
        'awx-ga-why-value-1': 'Makers Supply Limited',
        'awx-ga-why-title-2': 'Location',
        'awx-ga-why-value-2': 'New Zealand',
        'awx-ga-why-title-3': 'Account no. ',
        'awx-ga-why-value-3': '• • - • • • • - • • • • • • • - • •',
        'awx-ga-why-title-4': 'Bank Code',
        'awx-ga-why-value-4': '• •',
        'awx-ga-2-fields-title-1': 'Account no. ',
        'awx-ga-2-fields-value-1': '• • - • • • • - • • • • • • • - • •',
        'awx-ga-2-fields-title-2': 'Bank Code',
        'awx-ga-2-fields-value-2': '• •',
        'awx-checkout-payment-method-1': 'Apple Pay',
        'awx-checkout-payment-method-1-icon': 'apple pay',
        'awx-checkout-payment-method-2': 'Google Pay',
        'awx-checkout-payment-method-2-icon': 'google pay',
        'awx-checkout-payment-method-3': 'PayPal',
        'awx-checkout-payment-method-3-icon': 'paypal',
        'awx-lmp-payment-method-1': 'Alipay',
        'awx-lmp-payment-method-1-icon': 'alipay',
        'awx-lmp-payment-method-2': 'WeChat Pay',
        'awx-lmp-payment-method-2-icon': 'wechat',
        'awx-lmp-payment-method-3': 'KakaoPay',
        'awx-lmp-payment-method-3-icon': 'kakaopay',
        'awx-lmp-payment-method-4': 'GrabPay',
        'awx-lmp-payment-method-4-icon': 'grabpay',
        'awx-lmp-payment-method-5': 'Konbini',
        'awx-lmp-payment-method-5-icon': 'konbini',
        'awx-lmp-payment-method-6': 'Klarna',
        'awx-lmp-payment-method-6-icon': 'klarna',
        'awx-lmp-payment-method-7': 'iDEAL',
        'awx-lmp-payment-method-7-icon': 'ideal',
    },
    CA: {
        'awx-ga-cards-title-1': 'Location',
        'awx-ga-cards-value-1': 'Canada',
        'awx-ga-cards-title-2': 'Account no. ',
        'awx-ga-cards-value-2': '• • • • • • • • •',
        'awx-ga-cards-title-3': 'Transit Number',
        'awx-ga-cards-value-3': '• • • • •',
        'awx-ga-cards-title-4': 'Financial Institution Number',
        'awx-ga-cards-value-4': '• • •',
        'awx-ga-why-title-1': 'Account Name',
        'awx-ga-why-value-1': 'Makers Supply Limited',
        'awx-ga-why-title-2': 'Location',
        'awx-ga-why-value-2': 'Canada',
        'awx-ga-why-title-3': 'Account no. ',
        'awx-ga-why-value-3': '• • • • • • • • •',
        'awx-ga-why-title-4': 'Transit Number',
        'awx-ga-why-value-4': '• • • • • •',
        'awx-ga-2-fields-title-1': 'Account no. ',
        'awx-ga-2-fields-value-1': '• • • • • • • • •',
        'awx-ga-2-fields-title-2': 'Transit Number',
        'awx-ga-2-fields-value-2': '• • • • • •',
        'awx-checkout-payment-method-1': 'Apple Pay',
        'awx-checkout-payment-method-1-icon': 'apple pay',
        'awx-checkout-payment-method-2': 'Google Pay',
        'awx-checkout-payment-method-2-icon': 'google pay',
        'awx-checkout-payment-method-3': 'PayPal',
        'awx-checkout-payment-method-3-icon': 'paypal',
        'awx-lmp-payment-method-1': 'Alipay',
        'awx-lmp-payment-method-1-icon': 'alipay',
        'awx-lmp-payment-method-2': 'WeChat Pay',
        'awx-lmp-payment-method-2-icon': 'wechat',
        'awx-lmp-payment-method-3': 'KakaoPay',
        'awx-lmp-payment-method-3-icon': 'kakaopay',
        'awx-lmp-payment-method-4': 'GrabPay',
        'awx-lmp-payment-method-4-icon': 'grabpay',
        'awx-lmp-payment-method-5': 'Konbini',
        'awx-lmp-payment-method-5-icon': 'konbini',
        'awx-lmp-payment-method-6': 'Klarna',
        'awx-lmp-payment-method-6-icon': 'klarna',
        'awx-lmp-payment-method-7': 'iDEAL',
        'awx-lmp-payment-method-7-icon': 'ideal',
    },
    US: {
        'awx-ga-cards-title-1': 'Account no. ',
        'awx-ga-cards-value-1': '• • • • • • • • • •',
        'awx-ga-cards-title-2': 'ACH routing no.',
        'awx-ga-cards-value-2': '• • • • • • • • •',
        'awx-ga-cards-title-3': 'Fedwire routing no.',
        'awx-ga-cards-value-3': '• • • • • • • • •',
        'awx-ga-cards-title-4': 'SWIFT Code',
        'awx-ga-cards-value-4': '• • • • • • • •',
        'awx-ga-why-title-1': 'Account Name',
        'awx-ga-why-value-1': 'Makers Supply Limited',
        'awx-ga-why-title-2': 'Location',
        'awx-ga-why-value-2': 'United States',
        'awx-ga-why-title-3': 'Account no. ',
        'awx-ga-why-value-3': '• • • • • • • • • •',
        'awx-ga-why-title-4': 'Routing number',
        'awx-ga-why-value-4': '• • • • • • • • •',
        'awx-ga-2-fields-title-1': 'Account no. ',
        'awx-ga-2-fields-value-1': '• • • • • • • • • •',
        'awx-ga-2-fields-title-2': 'Routing no.',
        'awx-ga-2-fields-value-2': '• • • • • • • • •',
        'awx-checkout-payment-method-1': 'Apple Pay',
        'awx-checkout-payment-method-1-icon': 'apple pay',
        'awx-checkout-payment-method-2': 'Google Pay',
        'awx-checkout-payment-method-2-icon': 'google pay',
        'awx-checkout-payment-method-3': 'PayPal',
        'awx-checkout-payment-method-3-icon': 'paypal',
        'awx-lmp-payment-method-1': 'ACH Direct Debit',
        'awx-lmp-payment-method-1-icon': 'ACH',
        'awx-lmp-payment-method-2': 'WeChat Pay',
        'awx-lmp-payment-method-2-icon': 'wechat',
        'awx-lmp-payment-method-3': 'KakaoPay',
        'awx-lmp-payment-method-3-icon': 'kakaopay',
        'awx-lmp-payment-method-4': 'GrabPay',
        'awx-lmp-payment-method-4-icon': 'grabpay',
        'awx-lmp-payment-method-5': 'Konbini',
        'awx-lmp-payment-method-5-icon': 'konbini',
        'awx-lmp-payment-method-6': 'Klarna',
        'awx-lmp-payment-method-6-icon': 'klarna',
        'awx-lmp-payment-method-7': 'iDEAL',
        'awx-lmp-payment-method-7-icon': 'ideal',
    },
    SG: {
        'awx-ga-cards-title-1': 'Account no. ',
        'awx-ga-cards-value-1': '• • • • • • • • • •',
        'awx-ga-cards-title-2': 'Bank Code',
        'awx-ga-cards-value-2': '• • • •',
        'awx-ga-cards-title-3': 'Branch Code',
        'awx-ga-cards-value-3': '• • •',
        'awx-ga-cards-title-4': 'SWIFT Code',
        'awx-ga-cards-value-4': '• • • • • • • •',
        'awx-ga-why-title-1': 'Account Name',
        'awx-ga-why-value-1': 'Makers Supply Limited',
        'awx-ga-why-title-2': 'Location',
        'awx-ga-why-value-2': 'Singapore',
        'awx-ga-why-title-3': 'Account no. ',
        'awx-ga-why-value-3': '• • • • • • • • • •',
        'awx-ga-why-title-4': 'Bank Code',
        'awx-ga-why-value-4': '• • • •',
        'awx-ga-2-fields-title-1': 'Account no. ',
        'awx-ga-2-fields-value-1': '• • • • • • • • • •',
        'awx-ga-2-fields-title-2': 'Bank Code',
        'awx-ga-2-fields-value-2': '• • • •',
        'awx-checkout-payment-method-1': 'Apple Pay',
        'awx-checkout-payment-method-1-icon': 'apple pay',
        'awx-checkout-payment-method-2': 'Google Pay',
        'awx-checkout-payment-method-2-icon': 'google pay',
        'awx-checkout-payment-method-3': 'PayPal',
        'awx-checkout-payment-method-3-icon': 'paypal',
        'awx-lmp-payment-method-1': 'GrabPay',
        'awx-lmp-payment-method-1-icon': 'grabpay',
        'awx-lmp-payment-method-2': 'PayNow',
        'awx-lmp-payment-method-2-icon': 'paynow',
        'awx-lmp-payment-method-3': 'WeChat Pay',
        'awx-lmp-payment-method-3-icon': 'wechat',
        'awx-lmp-payment-method-4': 'Alipay',
        'awx-lmp-payment-method-4-icon': 'alipay',
        'awx-lmp-payment-method-5': 'KakaoPay',
        'awx-lmp-payment-method-5-icon': 'kakaopay',
        'awx-lmp-payment-method-6': 'Konbini',
        'awx-lmp-payment-method-6-icon': 'konbini',
        'awx-lmp-payment-method-7': 'Klarna',
        'awx-lmp-payment-method-7-icon': 'klarna',
    },
    JP: {
        'awx-ga-cards-title-1': 'Account no. ',
        'awx-ga-cards-value-1': '• • • • • • •',
        'awx-ga-cards-title-2': 'Bank Code',
        'awx-ga-cards-value-2': '• • • •',
        'awx-ga-cards-title-3': 'Branch Code',
        'awx-ga-cards-value-3': '• • •',
        'awx-ga-cards-title-4': 'Account Type',
        'awx-ga-cards-value-4': 'Ordinary',
        'awx-ga-why-title-1': 'Account Name',
        'awx-ga-why-value-1': 'Makers Supply Limited',
        'awx-ga-why-title-2': 'Location',
        'awx-ga-why-value-2': 'Japan',
        'awx-ga-why-title-3': 'Account no. ',
        'awx-ga-why-value-3': '• • • • • • • • • • •',
        'awx-ga-why-title-4': 'Bank Code',
        'awx-ga-why-value-4': '• • • •',
        'awx-ga-2-fields-title-1': 'Account no. ',
        'awx-ga-2-fields-value-1': '• • • • • • • • • • •',
        'awx-ga-2-fields-title-2': 'Bank Code',
        'awx-ga-2-fields-value-2': '• • • •',
        'awx-checkout-payment-method-1': 'Apple Pay',
        'awx-checkout-payment-method-1-icon': 'apple pay',
        'awx-checkout-payment-method-2': 'Google Pay',
        'awx-checkout-payment-method-2-icon': 'google pay',
        'awx-checkout-payment-method-3': 'PayPal',
        'awx-checkout-payment-method-3-icon': 'paypal',
        'awx-lmp-payment-method-1': 'Konbini',
        'awx-lmp-payment-method-1-icon': 'konbini',
        'awx-lmp-payment-method-2': 'Payeasy',
        'awx-lmp-payment-method-2-icon': 'payeasy',
        'awx-lmp-payment-method-3': 'GrabPay',
        'awx-lmp-payment-method-3-icon': 'grabpay',
        'awx-lmp-payment-method-4': 'WeChat Pay',
        'awx-lmp-payment-method-4-icon': 'wechat',
        'awx-lmp-payment-method-5': 'Alipay',
        'awx-lmp-payment-method-5-icon': 'alipay',
        'awx-lmp-payment-method-6': 'KakaoPay',
        'awx-lmp-payment-method-6-icon': 'kakaopay',
        'awx-lmp-payment-method-7': 'Klarna',
        'awx-lmp-payment-method-7-icon': 'klarna',
    },
    ID: {
        'awx-ga-cards-title-1': 'Account no. ',
        'awx-ga-cards-value-1': '• • • • • • • • • • • •',
        'awx-ga-cards-title-2': 'Account Type',
        'awx-ga-cards-value-2': 'Checking',
        'awx-ga-cards-title-3': 'Location',
        'awx-ga-cards-value-3': 'Indonesia',
        'awx-ga-cards-title-4': 'Account Type',
        'awx-ga-cards-value-4': 'Checking',
        'awx-ga-why-title-1': 'n/a',
        'awx-ga-why-value-1': 'n/a',
        'awx-ga-why-title-2': 'n/a',
        'awx-ga-why-value-2': 'n/a',
        'awx-ga-why-title-3': 'n/a',
        'awx-ga-why-value-3': 'n/a',
        'awx-ga-why-title-4': 'n/a',
        'awx-ga-why-value-4': 'n/a',
        'awx-ga-2-fields-title-1': 'n/a',
        'awx-ga-2-fields-value-1': 'n/a',
        'awx-ga-2-fields-title-2': 'n/a',
        'awx-ga-2-fields-value-2': 'n/a',
    },
    HK: {
        'awx-ga-cards-title-1': 'Account no. ',
        'awx-ga-cards-value-1': '• • • • • • • • • • •',
        'awx-ga-cards-title-2': 'Bank Code',
        'awx-ga-cards-value-2': '• • •',
        'awx-ga-cards-title-3': 'Branch Code',
        'awx-ga-cards-value-3': '• • •',
        'awx-ga-cards-title-4': 'SWIFT Code',
        'awx-ga-cards-value-4': '• • • • • • • •',
        'awx-ga-why-title-1': 'Account Name',
        'awx-ga-why-value-1': 'Makers Supply Limited',
        'awx-ga-why-title-2': 'Location',
        'awx-ga-why-value-2': 'Hong Kong SAR',
        'awx-ga-why-title-3': 'Account no. ',
        'awx-ga-why-value-3': '• • • • • • • • • • • •',
        'awx-ga-why-title-4': 'Bank Code',
        'awx-ga-why-value-4': '• • •',
        'awx-ga-2-fields-title-1': 'Account no. ',
        'awx-ga-2-fields-value-1': '• • • • • • • • • • • •',
        'awx-ga-2-fields-title-2': 'Bank Code',
        'awx-ga-2-fields-value-2': '• • •',
        'awx-checkout-payment-method-1': 'Alipay HK',
        'awx-checkout-payment-method-1-icon': 'alipayhk',
        'awx-checkout-payment-method-2': 'WeChat Pay',
        'awx-checkout-payment-method-2-icon': 'wechat',
        'awx-checkout-payment-method-3': 'FPS',
        'awx-checkout-payment-method-3-icon': 'FPS',
        'awx-lmp-payment-method-1': 'Alipay HK',
        'awx-lmp-payment-method-1-icon': 'alipayhk',
        'awx-lmp-payment-method-2': 'WeChat Pay',
        'awx-lmp-payment-method-2-icon': 'wechat',
        'awx-lmp-payment-method-3': 'FPS',
        'awx-lmp-payment-method-3-icon': 'FPS',
        'awx-lmp-payment-method-4': 'Apple Pay',
        'awx-lmp-payment-method-4-icon': 'apple pay',
        'awx-lmp-payment-method-5': 'Google Pay',
        'awx-lmp-payment-method-5-icon': 'google pay',
        'awx-lmp-payment-method-6': 'PayPal',
        'awx-lmp-payment-method-6-icon': 'paypal',
        'awx-lmp-payment-method-7': 'GrabPay',
        'awx-lmp-payment-method-7-icon': 'grabpay',
    },
    CN: {
        'awx-ga-cards-title-1': 'Account no. ',
        'awx-ga-cards-value-1': '• • • • • • • • • • •',
        'awx-ga-cards-title-2': 'Bank Code',
        'awx-ga-cards-value-2': '• • •',
        'awx-ga-cards-title-3': 'Branch Code',
        'awx-ga-cards-value-3': '• • •',
        'awx-ga-cards-title-4': 'SWIFT Code',
        'awx-ga-cards-value-4': '• • • • • • • •',
        'awx-ga-why-title-1': 'Account Name',
        'awx-ga-why-value-1': 'Makers Supply Limited',
        'awx-ga-why-title-2': 'Location',
        'awx-ga-why-value-2': 'Hong Kong SAR',
        'awx-ga-why-title-3': 'Account no. ',
        'awx-ga-why-value-3': '• • • • • • • • • • • •',
        'awx-ga-why-title-4': 'Bank Code',
        'awx-ga-why-value-4': '• • •',
        'awx-ga-2-fields-title-1': 'Account no. ',
        'awx-ga-2-fields-value-1': '• • • • • • • • • • • •',
        'awx-ga-2-fields-title-2': 'Bank Code',
        'awx-ga-2-fields-value-2': '• • •',
        'awx-checkout-payment-method-1': 'Alipay',
        'awx-checkout-payment-method-1-icon': 'alipay',
        'awx-checkout-payment-method-2': 'WeChat Pay',
        'awx-checkout-payment-method-2-icon': 'wechat',
        'awx-checkout-payment-method-3': 'Kakao Pay',
        'awx-checkout-payment-method-3-icon': 'kakao',
        'awx-lmp-payment-method-1': 'Alipay',
        'awx-lmp-payment-method-1-icon': 'alipay',
        'awx-lmp-payment-method-2': 'WeChat Pay',
        'awx-lmp-payment-method-2-icon': 'wechat',
        'awx-lmp-payment-method-3': 'Kakao Pay',
        'awx-lmp-payment-method-3-icon': 'kakao',
        'awx-lmp-payment-method-4': 'Klarna',
        'awx-lmp-payment-method-4-icon': 'Klarna',
        'awx-lmp-payment-method-5': 'PayPal',
        'awx-lmp-payment-method-5-icon': 'paypal',
        'awx-lmp-payment-method-6': 'Google Pay',
        'awx-lmp-payment-method-6-icon': 'google pay',
        'awx-lmp-payment-method-7': 'Apple Pay',
        'awx-lmp-payment-method-7-icon': 'apple pay',
    },
    MY: {
        'awx-checkout-payment-method-1': 'N/A',
        'awx-checkout-payment-method-1-icon': 'n/a',
        'awx-checkout-payment-method-2': 'N/A',
        'awx-checkout-payment-method-2-icon': 'n/a',
        'awx-checkout-payment-method-3': 'N/A',
        'awx-checkout-payment-method-3-icon': 'n/a',
        'awx-lmp-payment-method-1': '  ',
        'awx-lmp-payment-method-1-icon': '  ',
        'awx-lmp-payment-method-2': '  ',
        'awx-lmp-payment-method-2-icon': '  ',
        'awx-lmp-payment-method-3': '  ',
        'awx-lmp-payment-method-3-icon': '  ',
        'awx-lmp-payment-method-4': '  ',
        'awx-lmp-payment-method-4-icon': '  ',
        'awx-lmp-payment-method-5': '  ',
        'awx-lmp-payment-method-5-icon': '  ',
        'awx-lmp-payment-method-6': '  ',
        'awx-lmp-payment-method-6-icon': '  ',
        'awx-lmp-payment-method-7': '  ',
        'awx-lmp-payment-method-7-icon': '  ',
    },
};
const transferData = {
    US: [
        {
            'awx-transfer-method': 'ACH',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'Bank of America',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 325099196074,
            'awx-bank-detail-title-4': 'ABA Code',
            'awx-bank-detail-value-4': 21000322,
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': '635 Red Bud Lane, Teterboro, New Jersey 07608, United States of America',
        },
        {
            'awx-transfer-method': 'Fedwire',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'Bank of America',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 325099196074,
            'awx-bank-detail-title-4': 'ABA Code',
            'awx-bank-detail-value-4': 21000322,
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': '635 Red Bud Lane, Teterboro, New Jersey 07608, United States of America',
        },
        {
            'awx-transfer-method': 'SWIFT',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'AIB BANK',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account NUmber',
            'awx-bank-detail-value-3': 325099196074,
            'awx-bank-detail-title-4': 'SWIFT Code',
            'awx-bank-detail-value-4': 'AIBKUS3TTMK',
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': '635 Red Bud Lane, Teterboro, New Jersey 07608, United States of America',
        },
    ],
    NZ: [
        {
            'awx-transfer-method': 'Local',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'ANZ Bank New Zealand',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 100017777777333,
            'awx-bank-detail-title-4': '  ',
            'awx-bank-detail-value-4': '  ',
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': '48 Shortland St., Auckland, New Zealand 1010',
        },
        {
            'awx-transfer-method': 'SWIFT',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'SWIFT Code',
            'awx-bank-detail-value-4': 'HSBCXX2S202',
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
    ],
    UK: [
        {
            'awx-transfer-method': 'EUR Local',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'IBAN Code',
            'awx-bank-detail-value-4': 'GB5920708009006378',
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
        {
            'awx-transfer-method': 'GBP Local',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC Britain Branch',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'Sort Code ',
            'awx-bank-detail-value-4': '12-34-56',
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
        {
            'awx-transfer-method': 'SWIFT',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'IBAN Code',
            'awx-bank-detail-value-4': 'XX5920708009006378',
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
    ],
    SG: [
        {
            'awx-transfer-method': 'GIRO',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'Bank Code',
            'awx-bank-detail-value-4': 7171082,
            'awx-bank-detail-title-5': 'SWIFT Code',
            'awx-bank-detail-value-5': 'HSBCSG2S202',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
        {
            'awx-transfer-method': 'RTGS',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'Bank Code',
            'awx-bank-detail-value-4': 7171082,
            'awx-bank-detail-title-5': 'SWIFT Code',
            'awx-bank-detail-value-5': 'HSBCSG2S202',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
        {
            'awx-transfer-method': 'FAST',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'Bank Code',
            'awx-bank-detail-value-4': 7171082,
            'awx-bank-detail-title-5': 'SWIFT Code',
            'awx-bank-detail-value-5': 'HSBCSG2S202',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
        {
            'awx-transfer-method': 'SWIFT',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'SWIFT Code',
            'awx-bank-detail-value-4': 'HSBCXX2S202',
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
    ],
    EU: [
        {
            'awx-transfer-method': 'Local',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'SWIFT Code',
            'awx-bank-detail-value-4': 'HSBCXX2S202',
            'awx-bank-detail-title-5': 'IBAN Code',
            'awx-bank-detail-value-5': 'XX5920708009006378',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
        {
            'awx-transfer-method': 'SWIFT',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'SWIFT Code',
            'awx-bank-detail-value-4': 'HSBCXX2S202',
            'awx-bank-detail-title-5': 'IBAN Code',
            'awx-bank-detail-value-5': 'XX5920708009006378',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
    ],
    JP: [
        {
            'awx-transfer-method': 'Local',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC Japan Branch',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'Zengin Code',
            'awx-bank-detail-value-4': 1234567,
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
        {
            'awx-transfer-method': 'SWIFT',
            'awx-bank-detail-title-1': 'Bank Name',
            'awx-bank-detail-value-1': 'HSBC',
            'awx-bank-detail-title-2': 'Account Name',
            'awx-bank-detail-value-2': 'Thomas Leaver',
            'awx-bank-detail-title-3': 'Account Number',
            'awx-bank-detail-value-3': 123456,
            'awx-bank-detail-title-4': 'SWIFT Code',
            'awx-bank-detail-value-4': 'HSBCXX2S202',
            'awx-bank-detail-title-5': '  ',
            'awx-bank-detail-value-5': '  ',
            'awx-recipient-detail-title-1': 'Name',
            'awx-recipient-detail-value-1': 'Thomas Leaver',
            'awx-recipient-detail-title-2': 'Address',
            'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
        },
    ],
};
const transferMethodData = {
    AU: {
        'awx-transfer-method-1': 'Bank Transfer',
        'awx-speed-1': '0-1 business day',
        'awx-transfer-method-2': 'SWIFT',
        'awx-speed-2': '0-3 business days ',
        'awx-transfer-method-3': '  ',
        'awx-speed-3': '  ',
    },
    NZ: {
        'awx-transfer-method-1': 'Direct Credit',
        'awx-speed-1': '0-1 business day',
        'awx-transfer-method-2': 'SWIFT',
        'awx-speed-2': '0-3 business days ',
        'awx-transfer-method-3': '  ',
        'awx-speed-3': '  ',
    },
    UK: {
        'awx-transfer-method-1': 'Faster Payments',
        'awx-speed-1': '0-1 business day',
        'awx-transfer-method-2': 'BACS',
        'awx-speed-2': '1-2 business days',
        'awx-transfer-method-3': 'CHAPS',
        'awx-speed-3': '0-1 business day',
    },
    EU: {
        'awx-transfer-method-1': 'SEPA',
        'awx-speed-1': '0-1 business day',
        'awx-transfer-method-2': 'SWIFT',
        'awx-speed-2': '0-3 business days ',
        'awx-transfer-method-3': '  ',
        'awx-speed-3': '  ',
    },
    US: {
        'awx-transfer-method-1': 'ACH',
        'awx-speed-1': '1-2 business days',
        'awx-transfer-method-2': 'Fedwire',
        'awx-speed-2': '0-1 business day',
        'awx-transfer-method-3': 'SWIFT',
        'awx-speed-3': '0-3 business days ',
    },
    JP: {
        'awx-transfer-method-1': 'Zengin',
        'awx-speed-1': '0-1 business day',
        'awx-transfer-method-2': 'SWIFT',
        'awx-speed-2': '0-3 business days ',
        'awx-transfer-method-3': '  ',
        'awx-speed-3': '  ',
    },
    CA: {
        'awx-transfer-method-1': 'EFT',
        'awx-speed-1': '0-1 business day',
        'awx-transfer-method-2': 'SWIFT',
        'awx-speed-2': '0-3 business days ',
        'awx-transfer-method-3': '  ',
        'awx-speed-3': '  ',
    },
    SG: {
        'awx-transfer-method-1': 'GIRO',
        'awx-speed-1': '0-1 business day',
        'awx-transfer-method-2': 'MEPS',
        'awx-speed-2': '0-1 business day',
        'awx-transfer-method-3': 'FAST',
        'awx-speed-3': '0-1 business day',
    },
    HK: {
        'awx-transfer-method-1': 'ACH',
        'awx-speed-1': '1-2 business days',
        'awx-transfer-method-2': 'RTGS',
        'awx-speed-2': '0-1 business day',
        'awx-transfer-method-3': 'FPS',
        'awx-speed-3': '0-1 business day',
    },
    CN: {
        'awx-transfer-method-1': 'ACH',
        'awx-speed-1': '1-2 business days',
        'awx-transfer-method-2': 'RTGS',
        'awx-speed-2': '0-1 business day',
        'awx-transfer-method-3': 'FPS',
        'awx-speed-3': '0-1 business day',
    },
    ID: {},
};
const bankCardData = {
    US_ACH: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'Bank of America',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 325099196074,
        'awx-bank-detail-title-4': 'ABA Code',
        'awx-bank-detail-value-4': 21000322,
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': '635 Red Bud Lane, Teterboro, New Jersey 07608, United States of America',
    },
    US_Fedwire: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'Bank of America',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 325099196074,
        'awx-bank-detail-title-4': 'ABA Code',
        'awx-bank-detail-value-4': 21000322,
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': '635 Red Bud Lane, Teterboro, New Jersey 07608, United States of America',
    },
    US_SWIFT: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'AIB BANK',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 325099196074,
        'awx-bank-detail-title-4': 'SWIFT Code',
        'awx-bank-detail-value-4': 'AIBKUS3TTMK',
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': '635 Red Bud Lane, Teterboro, New Jersey 07608, United States of America',
    },
    NZ_Local: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'ANZ Bank New Zealand',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 100017777777333,
        'awx-bank-detail-title-4': '',
        'awx-bank-detail-value-4': '',
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': '48 Shortland St., Auckland, New Zealand 1010',
    },
    NZ_SWIFT: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'SWIFT Code',
        'awx-bank-detail-value-4': 'HSBCXX2S202',
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    UK_EUR_Local: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'IBAN Code',
        'awx-bank-detail-value-4': 'GB5920708009006378',
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    UK_GBP_Local: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC Britain Branch',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'Sort Code',
        'awx-bank-detail-value-4': '12-34-56',
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    UK_SWIFT: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'IBAN Code',
        'awx-bank-detail-value-4': 'XX5920708009006378',
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    SG_GIRO: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'Bank Code',
        'awx-bank-detail-value-4': 7171082,
        'awx-bank-detail-title-5': 'SWIFT Code',
        'awx-bank-detail-value-5': 'HSBCSG2S202',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    SG_RTGS: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'Bank Code',
        'awx-bank-detail-value-4': 7171082,
        'awx-bank-detail-title-5': 'SWIFT Code',
        'awx-bank-detail-value-5': 'HSBCSG2S202',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    SG_FAST: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'Bank Code',
        'awx-bank-detail-value-4': 7171082,
        'awx-bank-detail-title-5': 'SWIFT Code',
        'awx-bank-detail-value-5': 'HSBCSG2S202',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    SG_SWIFT: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'SWIFT Code',
        'awx-bank-detail-value-4': 'HSBCXX2S202',
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    Germany_Local: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'SWIFT Code',
        'awx-bank-detail-value-4': 'HSBCXX2S202',
        'awx-bank-detail-title-5': 'IBAN Code',
        'awx-bank-detail-value-5': 'XX5920708009006378',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    Germany_SWIFT: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'SWIFT Code',
        'awx-bank-detail-value-4': 'HSBCXX2S202',
        'awx-bank-detail-title-5': 'IBAN Code',
        'awx-bank-detail-value-5': 'XX5920708009006378',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    Brazil_Local: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'Banco do Brasil',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 1234567890,
        'awx-bank-detail-title-4': 'Bank Code',
        'awx-bank-detail-value-4': 1234,
        'awx-bank-detail-title-5': 'Branch Code',
        'awx-bank-detail-value-5': 1,
        'awx-bank-detail-title-6': 'Account Type',
        'awx-bank-detail-value-6': 'Savings',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    Brazil_SWIFT: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'SWIFT Code',
        'awx-bank-detail-value-4': 'HSBCXX2S202',
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
    SA_SWIFT: {
        'awx-bank-detail-title-1': 'Bank Name',
        'awx-bank-detail-value-1': 'HSBC',
        'awx-bank-detail-title-2': 'Account Name',
        'awx-bank-detail-value-2': 'Thomas Leaver',
        'awx-bank-detail-title-3': 'Account Number',
        'awx-bank-detail-value-3': 123456,
        'awx-bank-detail-title-4': 'SWIFT Code',
        'awx-bank-detail-value-4': 'HSBCXX2S202',
        'awx-bank-detail-title-5': '',
        'awx-bank-detail-value-5': '',
        'awx-bank-detail-title-6': '',
        'awx-bank-detail-value-6': '',
        'awx-recipient-detail-title-1': 'Name',
        'awx-recipient-detail-value-1': 'Thomas Leaver',
        'awx-recipient-detail-title-2': 'Address',
        'awx-recipient-detail-value-2': 'Level 7/20 William St., Melbourne, VIC 1234, Australia',
    },
};


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIActionTypes": () => (/* binding */ UIActionTypes),
/* harmony export */   "WorkerActionTypes": () => (/* binding */ WorkerActionTypes)
/* harmony export */ });
var UIActionTypes;
(function (UIActionTypes) {
    UIActionTypes["UPLOAD"] = "UPLOAD";
    UIActionTypes["CLOSE"] = "CLOSE";
    UIActionTypes["NOTIFY"] = "NOTIFY";
    UIActionTypes["REGIONAL_ASSETS"] = "REGIONAL_ASSETS";
})(UIActionTypes || (UIActionTypes = {}));
var WorkerActionTypes;
(function (WorkerActionTypes) {
    WorkerActionTypes["REGIONAL_ASSETS_NOTIFY"] = "REGIONAL_ASSETS_NOTIFY";
})(WorkerActionTypes || (WorkerActionTypes = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/plugin.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/regionalData */ "./src/logic/regionalData.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/types.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/* eslint-disable prettier/prettier */


// const countryList = Object.keys(regionalData);
// const countryList = ['AU', 'CA', 'EU', 'UK', 'SG', 'NZ', 'JP', 'HK', 'CN'];
// const countryList = ['AU', 'CA', 'JP', 'HK'];
// const countryList = ['AU', 'CA', 'EU', 'UK', 'SG'];
// const countryList = ['NZ', 'JP', 'HK', 'CN', 'MY'];
const EMFI_X = 10496;
const EMFI_Y = 9062;
const CORE_APIX = 6279;
const COREAPIY = 14696;
const HOMEX = 8733;
const HOMEY = -1294;
const BAX = 10135;
const BAY = 14812;
const X = {
    EMFI: 10496,
    CORE_API: 6279,
    // HOME: 8733,
    // BA: 10135,
    HOME: -9324,
};
const Y = {
    EMFI: 9062,
    CORE_API: 14696,
    // HOME: -1294,
    // BA: 14812,
    HOME: -4340,
};
// Sends a message to the plugin UI
function postMessage({ type, payload }) {
    figma.ui.postMessage({ type, payload });
}
const flagValues = {};
const paymentVariants = {};
const cardVariants = {};
const visaVariantDark = {};
const visaVariantLight = {};
const loadFonts = () => __awaiter(void 0, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: 'CircularXX', style: 'Regular' });
    yield figma.loadFontAsync({ family: 'CircularXX', style: 'Medium' });
    yield figma.loadFontAsync({ family: 'CircularXX', style: 'Bold' });
    yield figma.loadFontAsync({ family: 'SF Mono', style: 'Semibold' });
    yield figma.loadFontAsync({ family: 'Source Code Pro', style: 'SemiBold' });
    yield figma.loadFontAsync({ family: 'Source Code Pro', style: 'Bold' });
    yield figma.loadFontAsync({ family: 'Helvetica', style: 'Bold' });
    yield figma.loadFontAsync({ family: 'Belgrano', style: 'Regular' });
    yield figma.loadFontAsync({ family: 'Montserrat', style: 'Bold' });
    yield figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
    yield figma.loadFontAsync({ family: 'Inter', style: 'Medium' });
    yield figma.loadFontAsync({ family: 'Noto Sans Mono', style: 'SemiBold' });
    yield figma.loadFontAsync({ family: 'Montserrat', style: 'Regular' });
    yield figma.loadFontAsync({ family: 'Manrope', style: 'Bold' });
    yield figma.loadFontAsync({ family: 'Ciutadella', style: 'SemiBold' });
    yield figma.loadFontAsync({ family: 'Ciutadella', style: 'Regular' });
    yield figma.loadFontAsync({ family: 'Ciutadella', style: 'Medium' });
    yield figma.loadFontAsync({ family: 'Poppins', style: 'SemiBold' });
    yield figma.loadFontAsync({ family: 'Poppins', style: 'Medium' });
    yield figma.loadFontAsync({ family: 'SF Pro Text', style: 'Medium' });
    yield figma.loadFontAsync({ family: 'SF Pro Text', style: 'Regular' });
    yield figma.loadFontAsync({ family: 'SF Pro', style: 'Regular' });
    yield figma.loadFontAsync({ family: 'SF Pro', style: 'Medium' });
    console.log('FETCHING MASTER ASSETS');
    // if (!window.figma_master_assets) {
    const nodes = yield figma.root.findAll((node) => {
        var _a, _b, _c, _d;
        return Object.values(_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.flags).includes(node === null || node === void 0 ? void 0 : node.name) ||
            (node.type === 'COMPONENT' &&
                _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.allPaymentVariants.includes((_a = node === null || node === void 0 ? void 0 : node.name) === null || _a === void 0 ? void 0 : _a.replace('method=', ''))) ||
            (node.type === 'COMPONENT' &&
                Object.values(_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.cards).includes((_b = node === null || node === void 0 ? void 0 : node.name) === null || _b === void 0 ? void 0 : _b.replace('Property 1=', ''))) ||
            (node.type === 'COMPONENT' &&
                ['Commercial', 'Business'].includes((_c = node === null || node === void 0 ? void 0 : node.name) === null || _c === void 0 ? void 0 : _c.replace('Color=Light, Comm vs Biz=', ''))) ||
            (node.type === 'COMPONENT' &&
                ['Commercial', 'Business'].includes((_d = node === null || node === void 0 ? void 0 : node.name) === null || _d === void 0 ? void 0 : _d.replace('Color=Dark, Comm vs Biz=', '')));
    });
    console.log(nodes);
    nodes.forEach((node) => {
        if (Object.values(_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.flags).includes(node === null || node === void 0 ? void 0 : node.name) && (node === null || node === void 0 ? void 0 : node.type) === 'INSTANCE') {
            flagValues[node === null || node === void 0 ? void 0 : node.name] = node;
        }
        else if (_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.allPaymentVariants.includes(node === null || node === void 0 ? void 0 : node.name.replace('method=', ''))) {
            paymentVariants[node === null || node === void 0 ? void 0 : node.name.replace('method=', '')] = node;
        }
        else if (Object.values(_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.cards).includes(node === null || node === void 0 ? void 0 : node.name.replace('Property 1=', ''))) {
            cardVariants[node === null || node === void 0 ? void 0 : node.name.replace('Property 1=', '')] = node;
        }
        else if (['Commercial', 'Business'].includes(node === null || node === void 0 ? void 0 : node.name.replace('Color=Light, Comm vs Biz=', ''))) {
            visaVariantLight[node === null || node === void 0 ? void 0 : node.name.replace('Color=Light, Comm vs Biz=', '')] = node;
        }
        else if (['Commercial', 'Business'].includes(node === null || node === void 0 ? void 0 : node.name.replace('Color=Dark, Comm vs Biz=', ''))) {
            visaVariantDark[node === null || node === void 0 ? void 0 : node.name.replace('Color=Dark, Comm vs Biz=', '')] = node;
        }
    });
    console.log('PPPP', flagValues, paymentVariants, cardVariants, visaVariantLight, visaVariantDark);
    //   window.figma_master_assets = {
    //     flagValues,
    //     paymentVariants,
    //     cardVariants,
    //   };
    // } else {
    //   flagValues = window?.figma_master_assets?.flagValues;
    //   paymentVariants = window?.figma_master_assets?.paymentVariants;
    //   cardVariants = window?.figma_master_assets?.cardVariants;
    // }
});
const countDecimals = function (val) {
    var _a;
    console.log('TEST RATE:', val);
    if (typeof val === 'number' && String(val + 0.01).endsWith('.01')) {
        console.log('TEST RATE2:', val);
        return 2;
    }
    console.log('TEST RATE3:', val);
    // if (Math.floor(val) === parseFloat(val)) return 0;
    console.log('TEST RATE4:', val);
    return ((_a = String(val).split('.')[1]) === null || _a === void 0 ? void 0 : _a.length) || 0;
};
const format = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
const fixCurrencyAmount = (node, countryCode, withAmount) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    if (!withAmount) {
        node.characters =
            '' +
                ((_c = (_b = (_a = node.characters) === null || _a === void 0 ? void 0 : _a.replaceAll(/USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currency[countryCode])) === null || _b === void 0 ? void 0 : _b.replaceAll(/\$/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currencyCode[countryCode])) === null || _c === void 0 ? void 0 : _c.replaceAll(/Great Britain Pound|Australian Dollar|Singapore Dollar|Euro|United States Dollar|Hong Kong Dollar|Chinese Yuan|Malaysian Ringit|Japanese Yen|New Zealand Dollar|Canadian Dollar/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currencyName[countryCode]).replaceAll(' undefined', '')) || ' ';
        return;
    }
    const isRate = (_d = node === null || node === void 0 ? void 0 : node.name) === null || _d === void 0 ? void 0 : _d.endsWith('-rate');
    const exchangeRate = _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.usExchangeRate;
    const oldAmount = ((_g = (_f = (_e = node.characters) === null || _e === void 0 ? void 0 : _e.replaceAll(/USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi, '')) === null || _f === void 0 ? void 0 : _f.replaceAll(/\$/gi, '')) === null || _g === void 0 ? void 0 : _g.replaceAll(/Great Britain Pound|Australian Dollar|Singapore Dollar|Euro|United States Dollar|Hong Kong Dollar|Chinese Yuan|Malaysian Ringit|Japanese Yen|New Zealand Dollar|Canadian Dollar/gi, '').replaceAll(' undefined', '').trim()) || ' ';
    const round = countDecimals(oldAmount);
    // console.log(
    //   'AAAA5',
    //   node.name,
    //   isRate,
    //   oldAmount,
    //   parseFloat(oldAmount),
    //   parseFloat(exchangeRate[countryCode]),
    //   round,
    // );
    const newAmount = isRate
        ? parseFloat((parseFloat(oldAmount === null || oldAmount === void 0 ? void 0 : oldAmount.replace(',', '')) * parseFloat(_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.gbExchangeRate.US)) /
            parseFloat(exchangeRate[countryCode])).toFixed(round)
        : format(parseFloat((parseFloat(oldAmount === null || oldAmount === void 0 ? void 0 : oldAmount.replace(',', '')) * parseFloat(exchangeRate[countryCode])) /
            parseFloat(_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.gbExchangeRate.US)).toFixed(round));
    if (isRate) {
        node.characters = '' + ((_h = node.characters) === null || _h === void 0 ? void 0 : _h.replace(oldAmount, newAmount)) || ' ';
        return;
    }
    node.characters =
        '' +
            ((_m = (_l = (_k = (_j = node.characters) === null || _j === void 0 ? void 0 : _j.replaceAll(/USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currency[countryCode])) === null || _k === void 0 ? void 0 : _k.replaceAll(/\$/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currencyCode[countryCode])) === null || _l === void 0 ? void 0 : _l.replaceAll(/Great Britain Pound|Australian Dollar|Singapore Dollar|Euro|United States Dollar|Hong Kong Dollar|Chinese Yuan|Malaysian Ringit|Japanese Yen|New Zealand Dollar|Canadian Dollar/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currencyName[countryCode])) === null || _m === void 0 ? void 0 : _m.replace(oldAmount, newAmount)) || ' ';
};
function partition(array, isValid) {
    return array.reduce(([pass, fail], elem) => {
        return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    }, [[], []]);
}
function generateAssets(payload) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        console.log('PPP', payload);
        const countryList = ['US', 'CA', 'EU', 'UK', 'SG', 'NZ', 'JP', 'HK', 'CN'];
        var start = new Date().getTime();
        let msg = 'Fetching master data and generating assets ...';
        figma.showUI(msg);
        yield loadFonts();
        // figma.showUI('HELLO');
        const selectionAll = figma.currentPage.selection.filter((node) => { var _a; 
        // node.name?.startsWith('BA-') ||
        // node.name?.startsWith('core API-') ||
        // node.name?.startsWith('Core API-') ||
        // node.name?.startsWith('emfi-') ||
        // node.name?.startsWith('mob-') ||
        // node.name?.startsWith('fearured-') ||
        // node.name?.startsWith('featured-') ||
        return (_a = node.name) === null || _a === void 0 ? void 0 : _a.startsWith('awx-'); });
        const pageName = figma.currentPage.name;
        console.log('PPPPP,', pageName);
        let MAIN_X, y;
        // if (pageName.includes('Core')) {
        //   MAIN_X = X.CORE_API;
        //   y = Y.CORE_API;
        // } else if (pageName.includes('Homepages')) {
        //   MAIN_X = X.HOME;
        //   y = Y.HOME;
        // } else if (pageName.includes('BA')) {
        //   MAIN_X = X.BA;
        //   y = Y.BA;
        // } else if (pageName.includes('Emfi')) {
        //   MAIN_X = X.EMFI;
        //   y = Y.EMFI;
        // } else {
        //   MAIN_X = X.HOME;
        //   y = Y.HOME;
        // }
        MAIN_X = 10416;
        y = -10304;
        // const MAIN_X = CORE_APIX;
        // let y = COREAPIY; // -3057;
        let x = MAIN_X; // 8961,
        const [nonMob, mob] = partition(selectionAll, (node) => { var _a; return !((_a = node.name) === null || _a === void 0 ? void 0 : _a.startsWith('awx-mob')); });
        const selection = [...nonMob, ...mob];
        // console.log("PPP", msg.metadata);
        console.log('TOTAL SELECTIONS', selection.length);
        const allDynamicNodes = [];
        figma.currentPage.selection.forEach((x) => x.type === 'FRAME' &&
            allDynamicNodes.push(...x.findAll((node) => node.name.startsWith('awx-'))));
        const allDynamicKeys = allDynamicNodes === null || allDynamicNodes === void 0 ? void 0 : allDynamicNodes.map((x) => x.name);
        console.log('MMM', allDynamicKeys);
        const backgroundValuesCache = {};
        // const y = 5000;
        for (let p = 0; p < selection.length; p++) {
            const selectedComponent = selection[p];
            for (let i = 0; i < countryList.length; i++) {
                msg = `Generated ${(p + 1) * (i + 1)}/${selection.length * countryList.length}`;
                const newComponent = selectedComponent.clone();
                const countryCode = countryList[i];
                console.log('TTTTTT', newComponent);
                newComponent.name =
                    ((_a = selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name) === null || _a === void 0 ? void 0 : _a.replace('-AU-localized', '').replace('-US-localized', '')) +
                        '-' +
                        countryCode.toUpperCase() +
                        '-localized';
                console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'LLLLLL4', countryCode);
                const values = _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.regionalData[countryCode];
                console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'LLLLLL8', countryCode, newComponent);
                const allClonedDynamicNodes = newComponent.findAll((node) => { var _a; return (_a = node === null || node === void 0 ? void 0 : node.name) === null || _a === void 0 ? void 0 : _a.startsWith('awx-'); });
                // Dynamic currencies
                const dynamicCurrencyNodes = allClonedDynamicNodes.filter((node) => { var _a; return (_a = node === null || node === void 0 ? void 0 : node.name) === null || _a === void 0 ? void 0 : _a.startsWith('awx-dynamic-currency'); });
                console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'LLLLLL5', dynamicCurrencyNodes);
                const dynamicCurrencyAmountNodes = allClonedDynamicNodes.filter((node) => { var _a; return (_a = node === null || node === void 0 ? void 0 : node.name) === null || _a === void 0 ? void 0 : _a.startsWith('awx-dynamic-amount'); });
                // const rateNodes = allClonedDynamicNodes.filter((node) => node?.name?.startsWith('awx-rate'));
                const visaNodes = allClonedDynamicNodes.filter((node) => { var _a; return (_a = node === null || node === void 0 ? void 0 : node.name) === null || _a === void 0 ? void 0 : _a.startsWith('awx-visa'); });
                visaNodes === null || visaNodes === void 0 ? void 0 : visaNodes.forEach((node) => {
                    var _a;
                    if (node && node.type === 'INSTANCE') {
                        // const replacementNode = figma.currentPage.findOne((node) => node?.name === values[key]);
                        const visaVariant = ((_a = node === null || node === void 0 ? void 0 : node.name) === null || _a === void 0 ? void 0 : _a.includes('light')) ? visaVariantLight : visaVariantDark;
                        const replacementNode = visaVariant[_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.visa_variant[countryCode]];
                        if (replacementNode) {
                            if (replacementNode.type === 'INSTANCE') {
                                node.swapComponent(replacementNode.mainComponent);
                            }
                            else if (replacementNode.type === 'COMPONENT') {
                                console.log('SWAPPING COMPONENT', node === null || node === void 0 ? void 0 : node.name, replacementNode === null || replacementNode === void 0 ? void 0 : replacementNode.name);
                                node.swapComponent(replacementNode);
                            }
                        }
                    }
                });
                const codeNodes = allClonedDynamicNodes.filter((node) => { var _a; return (_a = node === null || node === void 0 ? void 0 : node.name) === null || _a === void 0 ? void 0 : _a.startsWith('awx-code'); });
                // table
                const tables = [
                    'awx-ba-ga-hero-table',
                    'awx-homepage-wallet-table',
                    'awx-table-bank-account',
                    'awx-table-stream-live',
                    'awx-table-balance-list',
                    'awx-table-balance-list-2',
                    'awx-table-balance-list-3',
                    'awx-table-balance-list-4',
                    // 'awx-table-quantas',
                ];
                const orderArray = [
                    _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.gaHeroOriginalTableOrder,
                    _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.homepageWalletOriginalTableOrder,
                    _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.homepageBankAccountTableOrder,
                    _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.tableStreamLiveOrder,
                    _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.balanceListOrder,
                    _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.balanceListOrder2,
                    _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.balanceListOrder3,
                    _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.balanceListOrder4,
                    // tableQuantas,
                ];
                const tabularNode = (_b = allClonedDynamicNodes.filter((node) => tables.includes(node === null || node === void 0 ? void 0 : node.name))) === null || _b === void 0 ? void 0 : _b[0];
                const tabularNodeRows = tabularNode === null || tabularNode === void 0 ? void 0 : tabularNode.findAll((node) => node === null || node === void 0 ? void 0 : node.name.includes('awx-'));
                if (tabularNodeRows) {
                    for (let p = 0; p < tabularNodeRows.length; p++) {
                        const rowNode = tabularNodeRows[p];
                        console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, p, rowNode === null || rowNode === void 0 ? void 0 : rowNode.name);
                        const curCurrency = (_d = (_c = rowNode === null || rowNode === void 0 ? void 0 : rowNode.name) === null || _c === void 0 ? void 0 : _c.split('-')) === null || _d === void 0 ? void 0 : _d.pop().toUpperCase();
                        const region = countryCode;
                        const index = orderArray[tables.indexOf(tabularNode === null || tabularNode === void 0 ? void 0 : tabularNode.name)].indexOf(curCurrency);
                        const updatedCurrency = _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.tabularData[region][index];
                        console.log('OPPPPPOOO', curCurrency, updatedCurrency, index, region);
                        if (Object.values(_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currency).includes(curCurrency) && curCurrency !== updatedCurrency) {
                            const curValues = _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.gaHeroTableValues[curCurrency];
                            const newValues = _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.gaHeroTableValues[updatedCurrency];
                            console.log(curCurrency, updatedCurrency, curValues, newValues);
                            // Handle Flag
                            const flag = rowNode === null || rowNode === void 0 ? void 0 : rowNode.findOne((node) => node.type === 'INSTANCE' && (node === null || node === void 0 ? void 0 : node.name) === curValues[0]);
                            const replacementNode = flagValues[newValues[0]] ||
                                cardVariants[newValues[0]] ||
                                paymentVariants[newValues[0]];
                            // const replacementNode = figma.currentPage.findOne(
                            //   (node) => node?.name === newValues[0],
                            // );
                            if (flag && replacementNode && replacementNode.type === 'INSTANCE') {
                                flag.swapComponent(replacementNode.mainComponent);
                            }
                            console.log('ZZZ', replacementNode === null || replacementNode === void 0 ? void 0 : replacementNode.name);
                            // Handle Text
                            for (let i = 1; i < curValues.length; i++) {
                                const tempNode = rowNode === null || rowNode === void 0 ? void 0 : rowNode.findOne((node) => node.type === 'TEXT' && node.characters === curValues[i]);
                                console.log('ZZZ1', tempNode === null || tempNode === void 0 ? void 0 : tempNode.characters);
                                if (tempNode) {
                                    tempNode.characters = newValues[i];
                                    tempNode === null || tempNode === void 0 ? void 0 : tempNode.name = newValues[i];
                                }
                            }
                        }
                    }
                    // y += selectedComponent.height + 100;
                }
                codeNodes === null || codeNodes === void 0 ? void 0 : codeNodes.forEach((node) => {
                    if (node.type === 'TEXT') {
                        console.log('AWX_CODE');
                        // const USDIndex = node.characters.indexOf('USD');
                        // if (USDIndex > 0) {
                        //   node.insertCharacters(USDIndex + 3, currency[countryCode]);
                        //   node.deleteCharacters(USDIndex, USDIndex + 3);
                        // }
                        const GBPIndex = node.characters.indexOf('GBP');
                        if (GBPIndex > 0) {
                            node.insertCharacters(GBPIndex + 3, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currency[countryCode]);
                            node.deleteCharacters(GBPIndex, GBPIndex + 3);
                        }
                        // const USIndex = node.characters.indexOf('US');
                        // if (USIndex > 0) {
                        //   node.insertCharacters(USIndex + 2, countryCode);
                        //   node.deleteCharacters(USIndex, USIndex + 2);
                        // }
                    }
                });
                // rateNodes?.forEach((node) => {
                //   if (node.type === 'TEXT') {
                //     if (node?.name === 'awx-rate') {
                //       console.log(
                //         selectedComponent?.name,
                //         'DYNAMIC CURRENCY AMOUNT REPLACEMENT',
                //         node.characters,
                //         currency[countryCode],
                //       );
                //       fixCurrencyAmount(node, countryCode, true, true);
                //     }
                //   }
                // });
                dynamicCurrencyAmountNodes === null || dynamicCurrencyAmountNodes === void 0 ? void 0 : dynamicCurrencyAmountNodes.forEach((node) => {
                    var _a, _b, _c;
                    if (node.type === 'TEXT') {
                        if ((node === null || node === void 0 ? void 0 : node.name) === 'awx-dynamic-amount' || (node === null || node === void 0 ? void 0 : node.name) === 'awx-dynamic-amount-rate') {
                            console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'DYNAMIC CURRENCY AMOUNT REPLACEMENT', node.characters, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currency[countryCode]);
                            const basecurrency = (_a = node === null || node === void 0 ? void 0 : node.name) === null || _a === void 0 ? void 0 : _a.split('-').pop().toUpperCase();
                            fixCurrencyAmount(node, countryCode, true, false, basecurrency);
                        }
                        else {
                            const baseLevel = (_b = node === null || node === void 0 ? void 0 : node.name) === null || _b === void 0 ? void 0 : _b.split('-').pop();
                            node.characters =
                                '' +
                                    ((_c = node.characters) === null || _c === void 0 ? void 0 : _c.replaceAll(/USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.tabularData[countryCode][baseLevel - 1]));
                        }
                    }
                });
                dynamicCurrencyNodes === null || dynamicCurrencyNodes === void 0 ? void 0 : dynamicCurrencyNodes.forEach((node) => {
                    var _a, _b;
                    console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'DYNAMIC CURRENCY REPLACEMENT', node === null || node === void 0 ? void 0 : node.characters, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currency[countryCode]);
                    if (node.type === 'TEXT') {
                        if ((node === null || node === void 0 ? void 0 : node.name) === 'awx-dynamic-currency') {
                            console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'DYNAMIC CURRENCY REPLACEMENT', node.characters, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currency[countryCode]);
                            fixCurrencyAmount(node, countryCode);
                        }
                        else {
                            const baseLevel = (_a = node === null || node === void 0 ? void 0 : node.name) === null || _a === void 0 ? void 0 : _a.split('-').pop();
                            node.characters =
                                '' +
                                    ((_b = node.characters) === null || _b === void 0 ? void 0 : _b.replaceAll(/USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.tabularData[countryCode][baseLevel]));
                        }
                    }
                });
                console.log('LLLLLL6', countryCode, newComponent);
                const valueNodes = allClonedDynamicNodes.filter((node) => Object.keys(values)
                    .filter((key) => allDynamicKeys.includes(key))
                    .includes(node === null || node === void 0 ? void 0 : node.name));
                Object.keys(values)
                    .filter((key) => allDynamicKeys.includes(key))
                    .forEach((key) => __awaiter(this, void 0, void 0, function* () {
                    const nodes = valueNodes.filter((node) => (node === null || node === void 0 ? void 0 : node.name) === key);
                    nodes === null || nodes === void 0 ? void 0 : nodes.forEach((node) => {
                        console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'replacing', countryCode, key, node);
                        if ((node === null || node === void 0 ? void 0 : node.name) === 'awx-flag-icon') {
                            console.log('SSSSS', node === null || node === void 0 ? void 0 : node.name, flagValues);
                        }
                        if (node && node.type === 'TEXT') {
                            console.log('OKKK');
                            node.characters = '' + values[key] || ' ';
                        }
                        else if (node && node.type === 'INSTANCE') {
                            // const replacementNode = figma.currentPage.findOne((node) => node?.name === values[key]);
                            const replacementNode = flagValues[values[key]] ||
                                cardVariants[values[key]] ||
                                paymentVariants[values[key]];
                            console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'Instance value replacement main', replacementNode === null || replacementNode === void 0 ? void 0 : replacementNode.name, values[key]);
                            if (replacementNode) {
                                if (replacementNode.type === 'INSTANCE') {
                                    node.swapComponent(replacementNode.mainComponent);
                                }
                                else if (replacementNode.type === 'COMPONENT') {
                                    console.log('SWAPPING COMPONENT', node === null || node === void 0 ? void 0 : node.name, replacementNode === null || replacementNode === void 0 ? void 0 : replacementNode.name);
                                    node.swapComponent(replacementNode);
                                }
                            }
                        }
                    });
                }));
                console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'LLLLLL7', countryCode);
                // Replace Background Data
                const backgroundRegions = _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.backgroundData[countryCode];
                backgroundRegions.forEach((backgroundRegion, index) => {
                    if (!backgroundValuesCache[backgroundRegion]) {
                        backgroundValuesCache[backgroundRegion] = (0,_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.generateBackgroundValues)(backgroundRegion, index + 1);
                    }
                    const backgroundValues = backgroundValuesCache[backgroundRegion];
                    // const backgroundValues = generateBackgroundValues(backgroundRegion, index + 1);
                    console.log('MNMNMN2', backgroundValues, backgroundRegion, index, countryCode);
                    const tempBackgroundNodes = allClonedDynamicNodes.filter((node) => Object.keys(backgroundValues)
                        .filter((key) => allDynamicKeys.includes(key))
                        .includes(node === null || node === void 0 ? void 0 : node.name));
                    Object.keys(backgroundValues)
                        .filter((key) => allDynamicKeys.includes(key))
                        .forEach((key) => {
                        const nodes = tempBackgroundNodes.filter((node) => (node === null || node === void 0 ? void 0 : node.name) === key);
                        nodes === null || nodes === void 0 ? void 0 : nodes.forEach((node) => {
                            var _a, _b, _c;
                            console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'replacing backgroundValues', backgroundRegion, key, node, node === null || node === void 0 ? void 0 : node.type);
                            if (node && node.type === 'TEXT') {
                                console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'OKKK2', node === null || node === void 0 ? void 0 : node.name, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currency[backgroundRegions[index]], backgroundValues[key]);
                                const level = index + 1;
                                if ((node === null || node === void 0 ? void 0 : node.name) === 'awx-dynamic-currency-base-' + level) {
                                    node.characters =
                                        '' +
                                            ((_c = (_b = (_a = node.characters) === null || _a === void 0 ? void 0 : _a.replaceAll(/USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currency[backgroundRegions[index]])) === null || _b === void 0 ? void 0 : _b.replaceAll(/\$/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currencyCode[backgroundRegions[index]])) === null || _c === void 0 ? void 0 : _c.replaceAll(/Great Britain Pound|Australian Dollar|Singapore Dollar|Euro|United States Dollar|Hong Kong Dollar|Chinese Yuan|Malaysian Ringit|Japanese Yen|New Zealand Dollar|Canadian Dollar/gi, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.currencyName[backgroundRegions[index]])) || ' ';
                                }
                                else {
                                    node.characters = '' + backgroundValues[key] || ' ';
                                }
                            }
                            else if (node && node.type === 'INSTANCE') {
                                const replacementNode = flagValues[backgroundValues[key]] ||
                                    cardVariants[backgroundValues[key]] ||
                                    paymentVariants[backgroundValues[key]];
                                // const replacementNode = figma.currentPage.findOne(
                                //   (node) => node?.name === backgroundValues[key],
                                // );
                                if (replacementNode) {
                                    if (replacementNode.type === 'INSTANCE') {
                                        node.swapComponent(replacementNode.mainComponent);
                                    }
                                    else if (replacementNode.type === 'COMPONENT') {
                                        console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'SWAPPING COMPONENT', node === null || node === void 0 ? void 0 : node.name, replacementNode === null || replacementNode === void 0 ? void 0 : replacementNode.name);
                                        node.swapComponent(replacementNode);
                                    }
                                }
                            }
                        });
                    });
                });
                console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'LLLLLL8', countryCode);
                // fix payment icons
                const paymentIconParents = allClonedDynamicNodes.filter((node) => (node === null || node === void 0 ? void 0 : node.name) === 'awx-payment-methods-icons');
                if (paymentIconParents) {
                    paymentIconParents.forEach((paymentIconParent) => {
                        const tempRow = paymentIconParent.children[0].clone();
                        paymentIconParent.children.forEach((node) => node.remove());
                        const variantList = _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.paymentMethodIcons[countryCode];
                        variantList.forEach((variant) => {
                            const newNode = tempRow.clone();
                            console.log(variant, paymentVariants);
                            newNode.swapComponent(paymentVariants[variant]);
                            try {
                                paymentIconParent.appendChild(newNode);
                            }
                            catch (e) {
                                console.log(variant, paymentVariants);
                                console.log('NOT EXIST', e, paymentIconParent);
                            }
                        });
                    });
                }
                // fix payment icons
                const paymentIconCheckoutParents = allClonedDynamicNodes.filter((node) => (node === null || node === void 0 ? void 0 : node.name) === 'awx-payment-methods-icons-checkout');
                if (paymentIconCheckoutParents) {
                    paymentIconCheckoutParents.forEach((paymentIconParent) => {
                        const tempRow = paymentIconParent.children[0].clone();
                        paymentIconParent.children.forEach((node) => node.remove());
                        const variantList = _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.paymentMethodIconsCheckOut[countryCode];
                        variantList.forEach((variant) => {
                            const newNode = tempRow.clone();
                            console.log(variant);
                            newNode.swapComponent(paymentVariants[variant]);
                            paymentIconParent.appendChild(newNode);
                        });
                    });
                }
                newComponent.y = y;
                newComponent.x = x;
                console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'TRTRTR', newComponent === null || newComponent === void 0 ? void 0 : newComponent.name, selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.width, newComponent === null || newComponent === void 0 ? void 0 : newComponent.x);
                figma.currentPage.appendChild(newComponent);
                x += Math.min(newComponent.width + 300, 1500);
            }
            x = MAIN_X;
            y += selectedComponent.height + 200;
        }
        figma.closePlugin();
        var end = new Date().getTime();
        var time = end - start;
        alert('Execution time: ' + time);
    });
}
function swapSameComponent() {
    return __awaiter(this, void 0, void 0, function* () {
        const countryCode = 'HK';
        var start = new Date().getTime();
        let msg = 'Fetching master data and generating assets ...';
        figma.showUI(msg);
        yield loadFonts();
        const selectionAll = figma.currentPage.selection.filter((node) => { var _a; return (_a = node.name) === null || _a === void 0 ? void 0 : _a.startsWith('awx-'); });
        // const MAIN_X = CORE_APIX;
        // let y = COREAPIY; // -3057;
        // let x = MAIN_X; // 8961,
        const [nonMob, mob] = partition(selectionAll, (node) => { var _a; return !((_a = node.name) === null || _a === void 0 ? void 0 : _a.startsWith('awx-mob')); });
        const selection = [...nonMob, ...mob];
        // console.log("PPP", msg.metadata);
        console.log('TOTAL SELECTIONS', selection.length);
        const nodesToUpdate = [];
        figma.currentPage.selection.forEach((x) => x.type === 'FRAME' &&
            nodesToUpdate.push(...x.findAll((node) => node.name === 'awx-flag-icon')));
        console.log('TTT', nodesToUpdate);
        nodesToUpdate.forEach((node) => {
            // if (node.type === 'INSTANCE') {
            const replacementNode = flagValues[_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.flags[countryCode]];
            if (replacementNode) {
                if (node.type === 'INSTANCE' && replacementNode.type === 'INSTANCE') {
                    node.swapComponent(replacementNode.mainComponent);
                }
                else if (replacementNode.type === 'COMPONENT') {
                    console.log('SWAPPING COMPONENT', node === null || node === void 0 ? void 0 : node.name, replacementNode === null || replacementNode === void 0 ? void 0 : replacementNode.name);
                    node.swapComponent(replacementNode);
                }
            }
            // }
        });
        figma.closePlugin();
    });
}
function generateSimpleReplacements() {
    loadFonts().then(() => {
        const selection = figma.currentPage.selection;
        console.log('TOTAL SELECTIONS', selection.length);
        // const keys = Object.keys(bankCardData);
        const keys = ['CNY', 'EUR', 'USD', 'AUD', 'CAD', 'CHF', 'GBP', 'JPY', 'NZD', 'SGD'];
        const tempFlags = ['CN', 'EU', 'US', 'AU', 'CA', 'CH', 'UK', 'JP', 'NZ', 'SG'];
        // const y = 5000;
        for (let p = 0; p < selection.length; p++) {
            const selectedComponent = selection[p];
            for (let i = 0; i < keys.length; i++) {
                const newComponent = selectedComponent.clone();
                newComponent.name = selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name.replace('HK', 'HK_' + keys[i]);
                const valueNodes = allClonedDynamicNodes.filter((node) => ['awx-flag-icon', 'awx-dynamic-currency'].includes(node === null || node === void 0 ? void 0 : node.name));
                valueNodes.forEach((node) => {
                    if (node.name === 'awx-dynamic-currency') {
                        node.characters = keys[i];
                    }
                    if (node.name === 'awx-flag-icon') {
                        const replacementNode = flagValues[_logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.flags[tempFlags[i]]];
                        console.log(replacementNode, flagValues, _logic_regionalData__WEBPACK_IMPORTED_MODULE_0__.flags[i], keys[i]);
                        node.swapComponent(replacementNode.mainComponent);
                    }
                });
                // const values = bankCardData[keys[i]];
                // const valueNodes = allClonedDynamicNodes.filter((node) => Object.keys(values).includes(node?.name));
                // Object.keys(values).forEach(async (key) => {
                //   const nodes = valueNodes.filter((node) => node?.name === key);
                //   console.log('PPPP3', key);
                //   nodes?.forEach((node) => {
                //     if (node && node.type === 'TEXT') {
                //       console.log('OKKK');
                //       node.characters = '' + values[key] || ' ';
                //     }
                //   });
                // });
                newComponent.y = y;
                newComponent.x = x;
                console.log(selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.name, 'TRTRTR', newComponent === null || newComponent === void 0 ? void 0 : newComponent.name, selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.width, newComponent === null || newComponent === void 0 ? void 0 : newComponent.x);
                figma.currentPage.appendChild(newComponent);
                x += Math.max(newComponent.width + 200, 500);
            }
            x = MAIN_X;
            y += selectedComponent.height + 200;
        }
        figma.closePlugin();
    });
    // postMessage({ type: WorkerActionTypes.REGIONAL_ASSETS_NOTIFY, payload: 'Generated Assets 👍' });
}
// Listen to messages received from the plugin UI (src/ui/ui.ts)
figma.ui.onmessage = function ({ type, payload }) {
    switch (type) {
        case _types__WEBPACK_IMPORTED_MODULE_1__.UIActionTypes.UPLOAD:
            // uploadToContentful(payload);
            break;
        case _types__WEBPACK_IMPORTED_MODULE_1__.UIActionTypes.CLOSE:
            figma.closePlugin();
            break;
        case _types__WEBPACK_IMPORTED_MODULE_1__.UIActionTypes.NOTIFY:
            payload && figma.notify(payload);
            break;
        case _types__WEBPACK_IMPORTED_MODULE_1__.UIActionTypes.REGIONAL_ASSETS:
            generateAssets(payload);
            // generateSimpleReplacements();
            // swapSameComponent();
            break;
    }
};
// Show the plugin interface (https://www.figma.com/plugin-docs/creating-ui/)
// Remove this in case your plugin doesn't need a UI, make network requests, use browser APIs, etc.
// If you need to make network requests you need an invisible UI (https://www.figma.com/plugin-docs/making-network-requests/)
// figma.showUI(__html__, { width: 400, height: 400 });
const mainUI = figma.showUI(`
  <html lang="en" class=""><head>

  <meta charset="UTF-8">
  <title>CodePen Demo</title>

  <meta name="robots" content="noindex">

  <link rel="shortcut icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico">
  <link rel="mask-icon" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-b4b4269c16397ad2f0f7a01bcdf513a1994f4c94b8af2f191c09eb0d601762b1.svg" color="#111">
  <link rel="canonical" href="https://codepen.io/raubaca/pen/PZzpVe">

  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
  
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

  <style id="INLINE_PEN_STYLESHEET_ID">
    @charset "UTF-8";
body {
  color: #2c3e50;
  background: #ecf0f1;
  padding: 0 1em 1em;
}

h1 {
  margin: 0;
  line-height: 2;
  text-align: center;
}

h2 {
  margin: 0 0 0.5em;
  font-weight: normal;
}

.parent-checkbox {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.row {
  display: flex;
}
.row .col {
  flex: 1;
}
.row .col:last-child {
  margin-left: 1em;
}

/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  margin-bottom: 20px;
}

.tab {
  width: 100%;
  color: white;
overflow: auto;
    max-height: 200px;
  }
.tab-label {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: #2c3e50;
  font-weight: bold;
  cursor: pointer;
  color: white;
  /* Icon */
}
.tab-label:hover {
  background: #1a252f;
}
.tab-label::after {
  content: "❯";
  width: 1em;
  height: 1em;
  text-align: center;
  transition: all 0.35s;
}
.tab-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  background: white;
  transition: all 0.35s;
}
.tab-close {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  font-size: 0.75em;
  background: #2c3e50;
  cursor: pointer;
}
.tab-close:hover {
  background: #1a252f;
}

input:checked + .tab-label {
  background: #1a252f;
}
input:checked + .tab-label::after {
  transform: rotate(90deg);
}
input:checked ~ .tab-content {
  max-height: 100vh;
  padding: 1em;
}

    input[type="checkbox"] {
      transform: scale(1.2);
      margin-right: 10px;
    }

.checkbox-container {
  display: flex;
  flex-wrap: wrap;
}

.checkbox-item {
  flex-basis: 20%%;
  
  box-sizing: border-box;
}

.checkbox-container > .checkbox-item {
  padding: 10px;
}

button {padding: 10px 20px;
    margin-top: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
    width: 200px;
        display: block;
    margin-top: 10px;
    }

    .label-row {
      display: flex;
      align-items: center;
      padding: 10px 0;
  }
        .switch {
          position: absolute;
          display: inline-block;
          width: 40px;
          height: 20px;
          right: 10px
      }
  
      #prefixes {
            width: 614px;
      margin-left: 20px;
      height: 40px;
      border-radius: 4px;  
      padding: 0 15px;
      }
      
      .switch input {
          opacity: 0;
          width: 0;
          height: 0;
      }
      
      .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: .4s;
          transition: .4s;
      }
      
      .slider:before {
          position: absolute;
          content: "";
          height: 13px;
          width: 13px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
      }
      
      input:checked + .slider {
          background-color: #2196F3;
      }
      
      input:focus + .slider {
          box-shadow: 0 0 1px #2196F3;
      }
      
      input:checked + .slider:before {
          -webkit-transform: translateX(19px);
          -ms-transform: translateX(19px);
          transform: translateX(19px);
      }
      
      /* Rounded sliders */
      .slider.round {
          border-radius: 34px;
      }
      
      .slider.round:before {
          border-radius: 50%;
      }

  </style>

  
<script src="https://cpwebassets.codepen.io/assets/editor/iframe/iframeConsoleRunner-6bce046e7128ddf9391ccf7acbecbf7ce0cbd7b6defbeb2e217a867f51485d25.js"></script>
<script src="https://cpwebassets.codepen.io/assets/editor/iframe/iframeRefreshCSS-44fe83e49b63affec96918c9af88c0d80b209a862cf87ac46bc933074b8c557d.js"></script>
<script src="https://cpwebassets.codepen.io/assets/editor/iframe/iframeRuntimeErrors-4f205f2c14e769b448bcf477de2938c681660d5038bc464e3700256713ebe261.js"></script>
</head>

<body data-new-gr-c-s-check-loaded="14.1112.0" data-gr-ext-installed="">
  <h1>AWX Asset Localizer</h1>
<div class="row">
  <div class="col">
    <h2><b>Select Regions</b></h2>
    <div class="checkbox-container">
       <div class="checkbox-item">
    <input type="checkbox" id="checkbox1" name="checkbox1" >
    <label for="checkbox1">AU</label>
  </div>
  
  <div class="checkbox-item">
    <input type="checkbox" id="checkbox2" name="checkbox2" >
    <label for="checkbox2">CA</label>
  </div>
  
  <div class="checkbox-item">
    <input type="checkbox" id="checkbox3" name="checkbox3" >
    <label for="checkbox3">UK</label>
  </div>
    <div class="checkbox-item">
    <input type="checkbox" id="checkbox4" name="checkbox4" >
    <label for="checkbox4">EU</label>
  </div>
  
  <div class="checkbox-item">
    <input type="checkbox" id="checkbox5" name="checkbox5" >
    <label for="checkbox5">SG</label>
  </div>
  
  <div class="checkbox-item">
    <input type="checkbox" id="checkbox6" name="checkbox6" >
    <label for="checkbox6">NZ</label>
  </div>
  
  <div class="checkbox-item">
    <input type="checkbox" id="checkbox8" name="checkbox8" >
    <label for="checkbox8">JP</label>
  </div>
  
  <div class="checkbox-item">
    <input type="checkbox" id="checkbox9" name="checkbox9" >
    <label for="checkbox9">HK</label>
  </div>
    <div class="checkbox-item">
    <input type="checkbox" id="checkbox10" name="checkbox10" >
    <label for="checkbox10">CN</label>
  </div>

    </div>

    <div class="label-row">
    <label for="prefixes">Frame Prefixes:</label>
    <input type="text" id="prefixes" placeholder="Enter prefixes (comma-separated)" disabled>     
    <label class="switch">
      <input id="switch" type="checkbox" onchange="toggleText()">
      <span class="slider round"></span>
    </label>
  </div>
    
    <div class="tabs">
        <label class="tab-label" for="chck2">Enable features</label>
      <div class="tab">
        <input type="checkbox" id="chck2" class="parent-checkbox" checked>
 <div class="tab-content checkbox-item full-width-checkbox">
    <input type="checkbox" id="checkbox4" name="checkbox4" checked>
    <label for="checkbox4">Regional Value Replacement (currency symbol, currency code, country name, country code & flags)</label>
  </div>
  
  <div class="tab-content checkbox-item full-width-checkbox">
    <input type="checkbox" id="checkbox5" name="checkbox5" checked>
    <label for="checkbox5">Price Conversion based on US exchange rate for amounts associated with items</label>
  </div>
    <div class="tab-content checkbox-item full-width-checkbox">
    <input type="checkbox" id="checkbox7" name="checkbox5" checked>
    <label for="checkbox7">Fix calculator data (from / to currency, exchange rate & converted amount)</label>
  </div>
    <div class="tab-content checkbox-item full-width-checkbox">
    <input type="checkbox" id="checkbox7" name="checkbox5" checked>
    <label for="checkbox7">First row of table must be regional value (other rows will also change to avoid duplication)</label>
  </div>
    <div class="tab-content checkbox-item full-width-checkbox" >
    <input type="checkbox" id="checkbox7" name="checkbox5" checked>
    <label for="checkbox7">Fix Airwallex Cards based on region: Physical vs Virtual</label>
  </div>
    <div class="tab-content checkbox-item full-width-checkbox" >
    <input type="checkbox" id="checkbox7" name="checkbox5" checked>
    <label for="checkbox7">Fix Airwallex License based on region: Commercial vs Business</label>
  </div>
   <div class="tab-content checkbox-item full-width-checkbox" >
    <input type="checkbox" id="checkbox6" name="checkbox5" checked>
    <label for="checkbox6">Dynamic Currency (currency swap for fields like daily limit, amount will remain same)</label>
  </div>
    <div class="tab-content checkbox-item full-width-checkbox" >
    <input type="checkbox" id="checkbox7" name="checkbox5" checked>
    <label for="checkbox7">Fix checkout payment methods (Array of payment supported methods)</label>
  </div>


    <div class="tab-content checkbox-item full-width-checkbox">
    <input type="checkbox" id="checkbox7" name="checkbox5"  checked>
    <label for="checkbox7">Fix data inside code previews</label>
  </div>


  <div class="tab-content checkbox-item full-width-checkbox">
    <input type="checkbox" id="checkbox7" name="checkbox5" checked>
    <label for="checkbox7">Fix other local information like city, address, bank information, transfer methods, transfer speed, account location, account number, company etc based on regional values</label>
  </div>
    <div class="tab-content checkbox-item full-width-checkbox">
    <input type="checkbox" id="checkbox7" name="checkbox5" checked>
    <label for="checkbox7">Replace background values upto 3 levels</label>
  </div>



      </div>
    </div>
  </div>
</div>
<button id="rectangleBtn" type="button" onclick="generateAssets()">Generate Assets</button>
  
<script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js" ></script>
<script>  

function postMessage({ type, payload }) {
  parent.postMessage({ pluginMessage: { type, payload } }, '*');
}

document.getElementById('prefixes').value = "awx-";

function toggleText() {
var textElement = document.getElementById("prefixList");
var switchElement = document.getElementById("switch");

if (switchElement.checked) {
 document.getElementById('prefixes').disabled = false
} else {
 document.getElementById('prefixes').disabled = true
}
let countryList = []
}

   function generateAssets() {
    postMessage({
      type: 'REGIONAL_ASSETS',
      payload: countryList
    });

  }

  const checkboxes = document.getElementsByClassName('checkbox-container')[0].querySelectorAll('input[type="checkbox"]');

// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    // Get the selected values
    const selectedCheckboxes = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)

      const selectedLabels = selectedCheckboxes.map(checkbox => {
        console.log("AAA",checkbox.id)
        const labelElement = document.getElementsByClassName('checkbox-container')[0].querySelector('label[for='+ checkbox.id + ']');
        return labelElement.textContent;
      });

    // Log the selected values
    console.log('Selected values:', selectedLabels);
    countryList = selectedLabels
  });
});
</script>
</body></html>
  `, {
    width: 850,
    height: 600,
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQzREO0FBQzVEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxFQUFFLGlEQUFTLFdBQVcsMERBQWtCLGFBQWEsNlhBQTZYLENBQUcsK0RBQStELENBQUcsZ0ZBQWdGLENBQUc7QUFDam9CO0FBQ0EsK0tBQStLO0FBQy9LO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLElBQUksUUFBUSxNQUFNO0FBQ2xDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25mTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDdG5DTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNDQUFzQztBQUNoQztBQUNQO0FBQ0E7QUFDQSxDQUFDLDhDQUE4Qzs7Ozs7OztVQ1YvQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNrTjtBQUNsTjtBQUNzVDtBQUM5UTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdDQUF3QztBQUN4RSxnQ0FBZ0MsdUNBQXVDO0FBQ3ZFLGdDQUFnQyxxQ0FBcUM7QUFDckUsZ0NBQWdDLHNDQUFzQztBQUN0RSxnQ0FBZ0MsOENBQThDO0FBQzlFLGdDQUFnQywwQ0FBMEM7QUFDMUUsZ0NBQWdDLG9DQUFvQztBQUNwRSxnQ0FBZ0Msc0NBQXNDO0FBQ3RFLGdDQUFnQyxxQ0FBcUM7QUFDckUsZ0NBQWdDLG1DQUFtQztBQUNuRSxnQ0FBZ0Msa0NBQWtDO0FBQ2xFLGdDQUFnQyw2Q0FBNkM7QUFDN0UsZ0NBQWdDLHdDQUF3QztBQUN4RSxnQ0FBZ0Msa0NBQWtDO0FBQ2xFLGdDQUFnQyx5Q0FBeUM7QUFDekUsZ0NBQWdDLHdDQUF3QztBQUN4RSxnQ0FBZ0MsdUNBQXVDO0FBQ3ZFLGdDQUFnQyxzQ0FBc0M7QUFDdEUsZ0NBQWdDLG9DQUFvQztBQUNwRSxnQ0FBZ0Msd0NBQXdDO0FBQ3hFLGdDQUFnQyx5Q0FBeUM7QUFDekUsZ0NBQWdDLG9DQUFvQztBQUNwRSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFLO0FBQ2xDO0FBQ0EsZ0JBQWdCLDRFQUEyQjtBQUMzQztBQUNBLDhCQUE4QixzREFBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFLO0FBQy9CO0FBQ0E7QUFDQSxpQkFBaUIsNEVBQTJCO0FBQzVDO0FBQ0E7QUFDQSwrQkFBK0Isc0RBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3SkFBd0oseURBQVEsMkVBQTJFLDZEQUFZLHdQQUF3UCw2REFBWTtBQUMzZjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0lBQWdJLGtFQUFvQjtBQUNwSjtBQUNBO0FBQ0EsdUJBQXVCLGtFQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSkFBMEoseURBQVEsMkVBQTJFLDZEQUFZLHdQQUF3UCw2REFBWTtBQUM3ZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0Isd0JBQXdCO0FBQ3hCLGtFQUFrRSxRQUFRLDJGQUEyRjtBQUNySztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BELG1DQUFtQyxrQkFBa0IsR0FBRyxzQ0FBc0M7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZEQUFZO0FBQzNDO0FBQ0EsK0VBQStFLFFBQVEsaUlBQWlJO0FBQ3hOO0FBQ0Esc0ZBQXNGLFFBQVEsaUpBQWlKO0FBQy9PO0FBQ0EsNEZBQTRGLFFBQVEsK0lBQStJO0FBQ25QO0FBQ0EsMkVBQTJFLFFBQVEscUlBQXFJO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsNkRBQVk7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsMkVBQTJFLFFBQVEscUlBQXFJO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlFQUF3QjtBQUM1QyxvQkFBb0IsaUZBQWdDO0FBQ3BELG9CQUFvQiw4RUFBNkI7QUFDakQsb0JBQW9CLHFFQUFvQjtBQUN4QyxvQkFBb0IsaUVBQWdCO0FBQ3BDLG9CQUFvQixrRUFBaUI7QUFDckMsb0JBQW9CLGtFQUFpQjtBQUNyQyxvQkFBb0Isa0VBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNEJBQTRCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsNERBQVc7QUFDM0Q7QUFDQSwwQ0FBMEMseURBQVE7QUFDbEQsOENBQThDLGtFQUFpQjtBQUMvRCw4Q0FBOEMsa0VBQWlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsc0JBQXNCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSx5REFBUTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhMQUE4TCx5REFBUTtBQUN0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdLQUFnSyw0REFBVztBQUMzSztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSwyTkFBMk4seURBQVE7QUFDbk87QUFDQTtBQUNBLHVMQUF1TCx5REFBUTtBQUMvTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnS0FBZ0ssNERBQVc7QUFDM0s7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSwwQ0FBMEMsK0RBQWM7QUFDeEQ7QUFDQTtBQUNBLGtFQUFrRSw2RUFBd0I7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsME1BQTBNLHlEQUFRO0FBQ2xOO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0xBQW9MLHlEQUFRLHdGQUF3Riw2REFBWSxxUUFBcVEsNkRBQVk7QUFDampCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUVBQWtCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJFQUEwQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsUUFBUSxxRkFBcUY7QUFDeks7QUFDQSw2QkFBNkI7QUFDN0IsMkJBQTJCO0FBQzNCLGtFQUFrRSxRQUFRLDJGQUEyRjtBQUNySztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0RBQUs7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxzREFBSztBQUNoRSxpRUFBaUUsc0RBQUs7QUFDdEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLGdGQUFnRjtBQUNyRztBQUNBO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQ7QUFDQSxhQUFhLHdEQUFvQjtBQUNqQztBQUNBO0FBQ0EsYUFBYSx1REFBbUI7QUFDaEM7QUFDQTtBQUNBLGFBQWEsd0RBQW9CO0FBQ2pDO0FBQ0E7QUFDQSxhQUFhLGlFQUE2QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsZUFBZTtBQUN0Qyx1QkFBdUIsaUJBQWlCLGlCQUFpQjtBQUN6RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQVdYWC10ZXN0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BV1hYLXRlc3QvLi9zcmMvbG9naWMvcmVnaW9uYWxEYXRhLnRzIiwid2VicGFjazovL0FXWFgtdGVzdC8uL3NyYy9sb2dpYy9zaGVldERhdGEudHMiLCJ3ZWJwYWNrOi8vQVdYWC10ZXN0Ly4vc3JjL3R5cGVzLnRzIiwid2VicGFjazovL0FXWFgtdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BV1hYLXRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FXWFgtdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FXWFgtdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FXWFgtdGVzdC8uL3NyYy9wbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG5pbXBvcnQgeyBzaGVldERhdGEsIHRyYW5zZmVyTWV0aG9kRGF0YSB9IGZyb20gJy4vc2hlZXREYXRhJztcbi8vQHRzLWlnbm9yZVxuZXhwb3J0IGNvbnN0IGZsYWdzID0ge1xuICAgIFVTOiAnW1VTXSBVUyBVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EnLFxuICAgIEVVOiAnW0VVXSBFdXJvcGVhbiBVbmlvbicsXG4gICAgR0I6ICdbR0JdIEdyZWF0IEJyaXRhaW4nLFxuICAgIEFVOiAnW0FVXSBBdXN0cmFsaWEnLFxuICAgIEhLOiAnW0hLXSBIb25nIEtvbmcgU0FSJyxcbiAgICBVSzogJ1tHQl0gR3JlYXQgQnJpdGFpbicsXG4gICAgU0c6ICdbU0ddIFNpbmdhcG9yZScsXG4gICAgQ046ICdbQ05dIENoaW5hJyxcbiAgICBNWTogJ1tNWV0gTWFsYXlzaWEnLFxuICAgIEpQOiAnW0pQXSBKYXBhbicsXG4gICAgTlo6ICdbTlpdIE5ldyBaZWFsYW5kJyxcbiAgICBDQTogJ1tDQV0gQ2FuYWRhJyxcbiAgICBDSDogJ1tDSF0gU3dpdHplcmxhbmQnLFxuICAgIElEOiAnW0lEXSBJbmRvbmVzaWEnLFxufTtcbmV4cG9ydCBjb25zdCBjdXJyZW5jeU5hbWUgPSB7XG4gICAgVUs6ICdHcmVhdCBCcml0YWluIFBvdW5kJyxcbiAgICBBVTogJ0F1c3RyYWxpYW4gRG9sbGFyJyxcbiAgICBTRzogJ1NpbmdhcG9yZSBEb2xsYXInLFxuICAgIEVVOiAnRXVybycsXG4gICAgVVM6ICdVbml0ZWQgU3RhdGVzIERvbGxhcicsXG4gICAgSEs6ICdIb25nIEtvbmcgRG9sbGFyJyxcbiAgICBDTjogJ0NoaW5lc2UgWXVhbicsXG4gICAgTVk6ICdNYWxheXNpYW4gUmluZ2l0JyxcbiAgICBKUDogJ0phcGFuZXNlIFllbicsXG4gICAgTlo6ICdOZXcgWmVhbGFuZCBEb2xsYXInLFxuICAgIENBOiAnQ2FuYWRpYW4gRG9sbGFyJyxcbiAgICBJRDogJ0luZG9uZXNpYW4gUnVwaWFoJyxcbn07XG5jb25zdCBsb2NhdGlvbiA9IHtcbiAgICBVSzogJ1VuaXRlZCBLaW5nZG9tJyxcbiAgICBBVTogJ0F1c3RyYWxpYScsXG4gICAgU0c6ICdTaW5nYXBvcmUnLFxuICAgIEVVOiAnRXVyb3BlJyxcbiAgICBVUzogJ1VuaXRlZCBTdGF0ZXMnLFxuICAgIEhLOiAnSG9uZyBLb25nJyxcbiAgICBDTjogJ0NoaW5hJyxcbiAgICBNWTogJ01hbGF5c2lhJyxcbiAgICBKUDogJ0phcGFuJyxcbiAgICBOWjogJ05ldyBaZWFsYW5kJyxcbiAgICBDQTogJ0NhbmFkYScsXG4gICAgSUQ6ICdJbmRvbmVzaWEnLFxufTtcbmV4cG9ydCBjb25zdCBjaXRpZXMgPSB7XG4gICAgQVU6ICdNZWxib3VybmUnLFxuICAgIE5aOiAnQXVja2xhbmQnLFxuICAgIFVLOiAnTG9uZG9uJyxcbiAgICBFVTogJ0Ftc3RlcmRhbScsXG4gICAgVVM6ICdMb3MgQW5nZWxlcycsXG4gICAgSlA6ICdUb2t5bycsXG4gICAgQ0E6ICdUb3JvbnRvJyxcbiAgICBTRzogJ1NpbmdhcG9yZScsXG4gICAgSEs6ICdIb25nIEtvbmcnLFxuICAgIENOOiAnU2hhbmdoYWknLFxuICAgIE1ZOiAnS3VhbGEgTHVtcHVyJyxcbn07XG5leHBvcnQgY29uc3QgdXNFeGNoYW5nZVJhdGUgPSB7XG4gICAgVVM6ICcxJyxcbiAgICBFVTogJzAuOTExMScsXG4gICAgVUs6ICcwLjc5MTc5JyxcbiAgICBBVTogJzEuNDc3NDU0JyxcbiAgICBISzogJzcuODMwMjU1JyxcbiAgICBTRzogJzEuMzI2NDg1JyxcbiAgICBDTjogJzYuOTI3MScsXG4gICAgTVk6ICc0LjQ1MzUnLFxuICAgIEpQOiAnMTM1LjE3JyxcbiAgICBOWjogJzEuNTc1NTg1JyxcbiAgICBDQTogJzEuMzM4MTUnLFxufTtcbmV4cG9ydCBjb25zdCBhdUV4Y2hhbmdlUmF0ZSA9IHtcbiAgICBVUzogJzAuNjc2NDcnLFxuICAgIEVVOiAnMC42MTY3MTAyMDEnLFxuICAgIFVLOiAnMC41MzU5MjY1OTI4JyxcbiAgICBBVTogJzEnLFxuICAgIEhLOiAnNS4yOTc1NDA3NjEnLFxuICAgIFNHOiAnMC44OTc2OTI2MDE3JyxcbiAgICBDTjogJzQuNjg3NDYzNTcxJyxcbiAgICBNWTogJzMuMDEyNjU5MTQ1JyxcbiAgICBKUDogJzkxLjU1NDQ2NDUnLFxuICAgIE5aOiAnMS4wNjY2NjEyNzgnLFxuICAgIENBOiAnMC45MDU0NDQ5NDc5Jyxcbn07XG5leHBvcnQgY29uc3QgZ2JFeGNoYW5nZVJhdGUgPSB7XG4gICAgVVM6ICcxLjI0MzA2JyxcbiAgICBFVTogJzEuMTUwMzcnLFxuICAgIFVLOiAnMScsXG4gICAgQVU6ICcxLjg2OTI1MTQ3NScsXG4gICAgSEs6ICc5LjczMDQ4NzIyMScsXG4gICAgU0c6ICcxLjY3MzI3MDYzNScsXG4gICAgQ046ICc4Ljc2NDY5MTc1NCcsXG4gICAgTVk6ICc1LjY2NzczMjA3JyxcbiAgICBKUDogJzE3Mi41MDYyNzMnLFxuICAgIE5aOiAnMS45Nzc4MzI3NjYnLFxuICAgIENBOiAnMS42NzcwNjgxODMnLFxufTtcbmV4cG9ydCBjb25zdCBldUV4Y2hhbmdlUmF0ZSA9IHtcbiAgICBVUzogJzEuMDk1NzQnLFxuICAgIEVVOiAnMScsXG4gICAgVUs6ICcwLjg2ODI0NScsXG4gICAgQVU6ICcxLjYyMjEwNScsXG4gICAgSEs6ICc4LjU4Mjg4JyxcbiAgICBTRzogJzEuNDU0NTQnLFxuICAgIENOOiAnNy41ODc4ODk5MjYnLFxuICAgIE1ZOiAnNC44ODUzNTY3OScsXG4gICAgSlA6ICcxNDguMTY1NScsXG4gICAgTlo6ICcxLjczMDI5JyxcbiAgICBDQTogJzEuNDY3MjMnLFxufTtcbmV4cG9ydCBjb25zdCBjdXJyZW5jeSA9IHtcbiAgICBVUzogJ1VTRCcsXG4gICAgRVU6ICdFVVInLFxuICAgIFVLOiAnR0JQJyxcbiAgICBBVTogJ0FVRCcsXG4gICAgSEs6ICdIS0QnLFxuICAgIFNHOiAnU0dEJyxcbiAgICBDTjogJ0NOWScsXG4gICAgTVk6ICdNWVInLFxuICAgIEpQOiAnSlBZJyxcbiAgICBOWjogJ05aRCcsXG4gICAgQ0E6ICdDQUQnLFxuICAgIElEOiAnSURSJyxcbn07XG5leHBvcnQgY29uc3QgY3VycmVuY3lDb2RlID0ge1xuICAgIFVTOiAnJCcsXG4gICAgRVU6ICfigqwnLFxuICAgIFVLOiAnwqMnLFxuICAgIEFVOiAnJCcsXG4gICAgSEs6ICckJyxcbiAgICBTRzogJyQnLFxuICAgIENOOiAnwqUnLFxuICAgIE1ZOiAnUk0nLFxuICAgIEpQOiAnwqUnLFxuICAgIE5aOiAnJCcsXG4gICAgQ0E6ICckJyxcbn07XG5leHBvcnQgY29uc3QgY2FyZHMgPSB7XG4gICAgUEhZU0lDQUxfQlVTSU5FU1M6ICdQSFlTSUNBTCBCVVNJTkVTUycsXG4gICAgVklSVFVBTF9CVVNJTkVTUzogJ1ZJUlRVQUwgQlVTSU5FU1MnLFxuICAgIFZJUlRVQUxfQ09NTUVSQ0lBTDogJ1ZJUlRVQUwgQ09NTUVSQ0lBTCcsXG4gICAgUEhZU0lDQUxfQ09NTUVSQ0lBTDogJ1BIWVNJQ0FMIENPTU1FUkNJQUwnLFxufTtcbmV4cG9ydCBjb25zdCBjYXJkc19jb21tZXJjaWFsID0ge1xuICAgIEFVOiBbXSxcbiAgICBOWjogW10sXG4gICAgVUs6IFtdLFxuICAgIEVVOiBbXSxcbiAgICBVUzogW10sXG4gICAgSlA6IFtdLFxuICAgIENBOiBbXSxcbiAgICBTRzogW10sXG4gICAgSEs6IFtdLFxuICAgIENOOiBbXSxcbiAgICBNWTogW10sXG59O1xuZXhwb3J0IGNvbnN0IHZpc2FfdmFyaWFudCA9IHtcbiAgICBBVTogJ0J1c2luZXNzJyxcbiAgICBOWjogJ0J1c2luZXNzJyxcbiAgICBVSzogJ0J1c2luZXNzJyxcbiAgICBFVTogJ0J1c2luZXNzJyxcbiAgICBVUzogJ0NvbW1lcmNpYWwnLFxuICAgIEpQOiAnQ29tbWVyY2lhbCcsXG4gICAgQ0E6ICdDb21tZXJjaWFsJyxcbiAgICBTRzogJ0J1c2luZXNzJyxcbiAgICBISzogJ0NvbW1lcmNpYWwnLFxuICAgIENOOiAnQ29tbWVyY2lhbCcsXG4gICAgTVk6ICdOL0EnLFxufTtcbmV4cG9ydCBjb25zdCBjYXJkc19idXNpbmVzcyA9IHtcbiAgICBBVTogW2NhcmRzLlBIWVNJQ0FMX0JVU0lORVNTLCBjYXJkcy5WSVJUVUFMX0JVU0lORVNTXSxcbiAgICBOWjogW2NhcmRzLlZJUlRVQUxfQlVTSU5FU1MsIGNhcmRzLlZJUlRVQUxfQlVTSU5FU1NdLFxuICAgIFVLOiBbY2FyZHMuUEhZU0lDQUxfQlVTSU5FU1MsIGNhcmRzLlZJUlRVQUxfQlVTSU5FU1NdLFxuICAgIEVVOiBbY2FyZHMuVklSVFVBTF9CVVNJTkVTUywgY2FyZHMuVklSVFVBTF9CVVNJTkVTU10sXG4gICAgVVM6IFtjYXJkcy5QSFlTSUNBTF9DT01NRVJDSUFMLCBjYXJkcy5WSVJUVUFMX0NPTU1FUkNJQUxdLFxuICAgIEpQOiBbY2FyZHMuVklSVFVBTF9DT01NRVJDSUFMLCBjYXJkcy5WSVJUVUFMX0NPTU1FUkNJQUxdLFxuICAgIENBOiBbY2FyZHMuVklSVFVBTF9DT01NRVJDSUFMLCBjYXJkcy5WSVJUVUFMX0NPTU1FUkNJQUxdLFxuICAgIFNHOiBbY2FyZHMuUEhZU0lDQUxfQlVTSU5FU1MsIGNhcmRzLlZJUlRVQUxfQlVTSU5FU1NdLFxuICAgIEhLOiBbY2FyZHMuUEhZU0lDQUxfQ09NTUVSQ0lBTCwgY2FyZHMuVklSVFVBTF9DT01NRVJDSUFMXSxcbiAgICBDTjogW2NhcmRzLlBIWVNJQ0FMX0NPTU1FUkNJQUwsIGNhcmRzLlZJUlRVQUxfQ09NTUVSQ0lBTF0sXG4gICAgTVk6IFtdLFxufTtcbmNvbnN0IGNvdW50cnlXaXRoU3VmZml4ID0ge1xuICAgIEFVOiAnQXVzdHJhbGlhbicsXG4gICAgTlo6ICcnLFxuICAgIFVLOiAnJyxcbiAgICBFVTogJycsXG4gICAgVVM6ICcnLFxuICAgIEpQOiAnJyxcbiAgICBDQTogJycsXG4gICAgU0c6ICcnLFxuICAgIEhLOiAnJyxcbiAgICBDTjogJycsXG4gICAgTVk6ICcnLFxufTtcbmNvbnN0IHRyYW5zZmVyTWV0aG9kID0ge1xuICAgIEFVOiAnQmFuayBUcmFuc2ZlcicsXG4gICAgTlo6ICdEaXJlY3QgQ3JlZGl0JyxcbiAgICBVSzogJ0Zhc3RlciBQYXltZW50cycsXG4gICAgRVU6ICdTRVBBJyxcbiAgICBVUzogJ0FDSCcsXG4gICAgSlA6ICdaZW5naW4nLFxuICAgIENBOiAnRUZUJyxcbiAgICBTRzogJ0dJUk8nLFxuICAgIEhLOiAnQUNIJyxcbiAgICBDTjogJ0FDSCcsXG4gICAgTVk6ICdOL0EnLFxufTtcbmNvbnN0IHBheW91dCA9IHtcbiAgICBBVTogJ05QUCcsXG4gICAgTlo6ICcgICAnLFxuICAgIFVLOiAnRmFzdGVyIFBheW1lbnRzJyxcbiAgICBFVTogJycsXG4gICAgVVM6ICdGZWR3aXJlJyxcbiAgICBKUDogJ1plbmdpbicsXG4gICAgQ0E6ICdMVlRTJyxcbiAgICBTRzogJ0ZBU1QnLFxuICAgIEhLOiAnRlBTJyxcbiAgICBDTjogJyAgICcsXG4gICAgTVk6ICcgICAnLFxuICAgIFBIOiAnRVBDUycsXG59O1xuY29uc3QgYmFuazEgPSB7XG4gICAgQVU6ICdBdXN0cmFsaWEgYW5kIE5ldyBaZWFsYW5kIEJhbmsnLFxuICAgIE5aOiAnSlBNb3JnYW4gQ2hhc2UgJiBDby4nLFxuICAgIFVLOiAnQmFyY2xheXMgQmFuayBQTEMnLFxuICAgIEVVOiAnRGV1dHNjaGUgQmFuayBBRycsXG4gICAgVVM6ICdKUE1vcmdhbiBDaGFzZSAmIENvLicsXG4gICAgSlA6ICdKUE1vcmdhbiBDaGFzZSAmIENvLicsXG4gICAgQ0E6ICdSb3lhbCBCYW5rIG9mIENhbmFkYScsXG4gICAgU0c6ICdKUE1vcmdhbiBDaGFzZSAmIENvLicsXG4gICAgSEs6ICdKUE1vcmdhbiBDaGFzZSAmIENvLicsXG4gICAgQ046ICdKUE1vcmdhbiBDaGFzZSAmIENvLicsXG4gICAgTVk6ICdKUE1vcmdhbiBDaGFzZSAmIENvLicsXG59O1xuY29uc3QgYmFuazIgPSB7XG4gICAgQVU6ICdOYXRpb25hbCBBdXN0cmFsaWEgQmFuaycsXG4gICAgTlo6ICdDaXRpYmFuaywgTi5BLicsXG4gICAgVUs6ICdIU0JDIFVLIEJhbmsgUExDJyxcbiAgICBFVTogJ0JhcmNsYXlzIEJhbmsgUExDJyxcbiAgICBVUzogJ0NpdGliYW5rLCBOLkEuJyxcbiAgICBKUDogJ0NpdGliYW5rLCBOLkEuJyxcbiAgICBDQTogJ0Jhbmsgb2YgTW9udHJlYWwnLFxuICAgIFNHOiAnQ2l0aWJhbmssIE4uQS4nLFxuICAgIEhLOiAnQ2l0aWJhbmssIE4uQS4nLFxuICAgIENOOiAnQ2l0aWJhbmssIE4uQS4nLFxuICAgIE1ZOiAnQ2l0aWJhbmssIE4uQS4nLFxuICAgIFBIOiAnQ2l0aWJhbmssIE4uQS4nLFxufTtcbmNvbnN0IGFjY291bnROdW1iZXJzID0ge1xuICAgIEVVOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICBBVTogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICBVSzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgIE5aOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIC0g4oCiIOKAoicsXG4gICAgQ0E6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgVVM6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgIFNHOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICBKUDogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgSUQ6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgSEs6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICBDTjogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxufTtcbmNvbnN0IGdldFJlZ2lvbmFsRGF0YSA9IChyZWdpb24pID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc2hlZXREYXRhW3JlZ2lvbl0pLCB0cmFuc2Zlck1ldGhvZERhdGFbcmVnaW9uXSksIHsgJ2F3eC1yZWdpb24nOiByZWdpb24sICdhd3gtY2FyZC0xJzogKChfYSA9IGNhcmRzX2J1c2luZXNzW3JlZ2lvbl0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgfHwgJyAnLCAnYXd4LWNhcmQtMic6ICgoX2IgPSBjYXJkc19idXNpbmVzc1tyZWdpb25dKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbMV0pIHx8ICcgJywgJ2F3eC1jdXJyZW5jeSc6IGN1cnJlbmN5W3JlZ2lvbl0gfHwgJyAnLCAnYXd4LWZsYWctaWNvbic6IGZsYWdzW3JlZ2lvbl0gfHwgJyAnLCAnYXd4LWxvY2F0aW9uJzogbG9jYXRpb25bcmVnaW9uXSB8fCAnICcsICdhd3gtZGVtby1jb21wYW55JzogJ0RlbW8gQ28uICcgKyByZWdpb24gfHwgJyAnLCAnYXd4LWRlbW8tY29tcGFueS1mdW5kcyc6ICdEZW1vIENvLiAnICsgcmVnaW9uICsgJyBGdW5kcycgfHwgJyAnLCAnYXd4LWNpdHknOiBjaXRpZXNbcmVnaW9uXSB8fCAnICcsICdhd3gtY29tcGFueSc6ICdBd2Vzb21lIFRlY2ggJyArIHJlZ2lvbiB8fCAnICcsICdhd3gtY291bnRyeS13aXRoLXN1ZmZpeCc6IGNvdW50cnlXaXRoU3VmZml4W3JlZ2lvbl0gfHwgJyAnLCAnYXd4LWNvdW50cnktY29kZSc6IHJlZ2lvbiwgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiB0cmFuc2Zlck1ldGhvZFtyZWdpb25dIHx8ICcgJywgJ2F3eC1wYXlvdXQnOiBwYXlvdXRbcmVnaW9uXSB8fCAnICcsICdhd3gtYmFuay0xJzogYmFuazFbcmVnaW9uXSB8fCAnICcsICdhd3gtYmFuay0yJzogYmFuazJbcmVnaW9uXSB8fCAnICcsICdhd3gtY3VycmVuY3ktbmFtZSc6IGN1cnJlbmN5TmFtZVtyZWdpb25dIHx8ICcgJywgJ2F3eC1wYXltZW50LW1ldGhvZHMtaWNvbnMtY2hlY2tvdXQtdGV4dCc6IFsnSEsnLCAnQ04nXS5pbmNsdWRlcyhyZWdpb24pXG4gICAgICAgICAgICA/ICdDYXJkcywgQWxpcGF5IEhLLCBhbmQgV2VDaGF0IFBheSAnXG4gICAgICAgICAgICA6ICdDYXJkcywgQXBwbGUgUGF5LCBhbmQgR29vZ2xlIFBheSAnLCAnYXd4LWFjY291bnQtbnVtYmVyLXRpdGxlJzogWydFVSddLmluY2x1ZGVzKHJlZ2lvbikgPyAnSUJBTicgOiAnQWNjb3VudCBOby4nLCAnYXd4LWFjY291bnQtbnVtYmVyJzogYWNjb3VudE51bWJlcnNbcmVnaW9uXSB9KTtcbn07XG5leHBvcnQgY29uc3QgcmVnaW9uYWxEYXRhID0ge1xuICAgIEFVOiBnZXRSZWdpb25hbERhdGEoJ0FVJyksXG4gICAgSUQ6IGdldFJlZ2lvbmFsRGF0YSgnSUQnKSxcbiAgICBOWjogZ2V0UmVnaW9uYWxEYXRhKCdOWicpLFxuICAgIFVLOiBnZXRSZWdpb25hbERhdGEoJ1VLJyksXG4gICAgRVU6IGdldFJlZ2lvbmFsRGF0YSgnRVUnKSxcbiAgICBVUzogZ2V0UmVnaW9uYWxEYXRhKCdVUycpLFxuICAgIEpQOiBnZXRSZWdpb25hbERhdGEoJ0pQJyksXG4gICAgQ0E6IGdldFJlZ2lvbmFsRGF0YSgnQ0EnKSxcbiAgICBTRzogZ2V0UmVnaW9uYWxEYXRhKCdTRycpLFxuICAgIEhLOiBnZXRSZWdpb25hbERhdGEoJ0hLJyksXG4gICAgQ046IGdldFJlZ2lvbmFsRGF0YSgnQ04nKSxcbiAgICBNWTogZ2V0UmVnaW9uYWxEYXRhKCdNWScpLFxufTtcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kRGF0YSA9IHtcbiAgICBBVTogWydVUycsICdVSycsICdISycsICdKUCcsICdTRycsICdOWicsICdFVSddLFxuICAgIE5aOiBbJ1VTJywgJ1VLJywgJ0hLJywgJ0pQJywgJ1NHJywgJ0FVJywgJ0VVJ10sXG4gICAgVUs6IFsnVVMnLCAnRVUnLCAnSEsnLCAnSlAnLCAnU0cnLCAnQVUnLCAnRVUnXSxcbiAgICBFVTogWydVUycsICdVSycsICdISycsICdKUCcsICdTRycsICdBVScsICdOWiddLFxuICAgIFVTOiBbJ1VLJywgJ0VVJywgJ0hLJywgJ0pQJywgJ1NHJywgJ0FVJywgJ0VVJ10sXG4gICAgSlA6IFsnVVMnLCAnSEsnLCAnVUsnLCAnTlonLCAnU0cnLCAnQVUnLCAnRVUnXSxcbiAgICBDQTogWydVUycsICdVSycsICdISycsICdKUCcsICdTRycsICdBVScsICdFVSddLFxuICAgIFNHOiBbJ1VTJywgJ1VLJywgJ0hLJywgJ0pQJywgJ0NBJywgJ0FVJywgJ0VVJ10sXG4gICAgSEs6IFsnVVMnLCAnVUsnLCAnRVUnLCAnSlAnLCAnU0cnLCAnQVUnLCAnRVUnXSxcbiAgICBDTjogWydVUycsICdISycsICdVSycsICdKUCcsICdTRycsICdBVScsICdFVSddLFxuICAgIE1ZOiBbJ1VTJywgJ1VLJywgJ0hLJywgJ0pQJywgJ1NHJywgJ0FVJywgJ0VVJ10sXG59O1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQmFja2dyb3VuZFZhbHVlcyA9IChyZWdpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHJlZ2lvbmFsRGF0YVtyZWdpb25dKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdGVtcFtgJHtrZXl9LWJhc2UtJHtpbmRleH1gXSA9IHJlZ2lvbmFsRGF0YVtyZWdpb25dW2tleV07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ09PUE9PUE8nLCByZWdpb24sIGluZGV4LCB0ZW1wKTtcbiAgICByZXR1cm4gdGVtcDtcbn07XG5leHBvcnQgY29uc3QgZ2FIZXJvT3JpZ2luYWxUYWJsZU9yZGVyID0gW1xuICAgICdVU0QnLFxuICAgICdHQlAnLFxuICAgICdBVUQnLFxuICAgICdTR0QnLFxuICAgICdFVVInLFxuICAgICdIS0QnLFxuICAgIC8vICdHQlAnLFxuICAgIC8vICdBVUQnLFxuICAgIC8vICdTR0QnLFxuICAgIC8vICdFVVInLFxuICAgIC8vICdVU0QnLFxuICAgIC8vICdIS0QnLFxuICAgIC8vICdDQUQnLFxuICAgIC8vICdDTlknLFxuICAgIC8vICdKUFknLFxuICAgIC8vICdNWVInLFxuICAgIC8vICdDSEYnLFxuXTtcbi8vIGV4cG9ydCBjb25zdCB0YWJsZVN0cmVhbUxpdmVPcmRlciA9IFsnQ0FEJywgJ1VTRCcsICdDSEYnLCAnQ05ZJywgJ0VVUicsICdHQlAnLCAnSEtEJywgJ0lEUiddO1xuLy8gZXhwb3J0IGNvbnN0IGJhbGFuY2VMaXN0T3JkZXIgPSBbJ0NBRCcsICdVU0QnLCAnRVVSJywgJ0dCUCcsICdBVUQnLCAnSEtEJywgJ0lEUicsICdIS0QnLCAnSURSJ107XG4vLyBleHBvcnQgY29uc3QgaG9tZXBhZ2VXYWxsZXRPcmlnaW5hbFRhYmxlT3JkZXIgPSBbJ0FVRCcsICdDQUQnLCAnRVVSJywgJ0dCUCcsICdVU0QnLCAnSEtEJywgJ0NIRiddO1xuLy8gZXhwb3J0IGNvbnN0IGhvbWVwYWdlQmFua0FjY291bnRUYWJsZU9yZGVyID0gWydBVUQnLCAnVVNEJywgJ0dCUCcsICdIS0QnLCAnU0dEJywgJ0VVUicsICdDSEYnXTtcbi8vIGV4cG9ydCBjb25zdCBiYWxhbmNlTGlzdE9yZGVyMiA9IFsnQVVEJywgJ1VTRCcsICdHQlAnLCAnSEtEJ107XG4vLyBleHBvcnQgY29uc3QgYmFsYW5jZUxpc3RPcmRlcjMgPSBbJ0FVRCcsICdVU0QnLCAnRVVSJywgJ0dCUCddO1xuZXhwb3J0IGNvbnN0IHRhYmxlU3RyZWFtTGl2ZU9yZGVyID0gWydDQUQnLCAnVVNEJywgJ0NIRicsICdDTlknLCAnRVVSJywgJ0dCUCcsICdIS0QnLCAnSURSJ107XG5leHBvcnQgY29uc3QgYmFsYW5jZUxpc3RPcmRlciA9IFsnVVNEJywgJ0dCUCcsICdBVUQnLCAnU0dEJywgJ0hLRCcsICdKUFknXTtcbmV4cG9ydCBjb25zdCBob21lcGFnZVdhbGxldE9yaWdpbmFsVGFibGVPcmRlciA9IFsnVVNEJywgJ0dCUCcsICdBVUQnLCAnU0dEJywgJ0VVUiddO1xuZXhwb3J0IGNvbnN0IGhvbWVwYWdlQmFua0FjY291bnRUYWJsZU9yZGVyID0gWydVU0QnLCAnR0JQJywgJ0FVRCcsICdTR0QnLCAnSEtEJywgJ0pQWScsICdFVVInXTtcbmV4cG9ydCBjb25zdCBiYWxhbmNlTGlzdE9yZGVyMiA9IFsnVVNEJywgJ0dCUCcsICdBVUQnLCAnU0dEJ107XG5leHBvcnQgY29uc3QgYmFsYW5jZUxpc3RPcmRlcjMgPSBbJ0FVRCcsICdVU0QnLCAnRVVSJywgJ0dCUCddO1xuZXhwb3J0IGNvbnN0IGJhbGFuY2VMaXN0T3JkZXI0ID0gWydVU0QnLCAnR0JQJywgJ0hLRCcsICdBVUQnXTtcbmV4cG9ydCBjb25zdCB0YWJsZVF1YW50YXMgPSBbJ1VTRCcsICdDQUQnLCAnQVVEJywgJ1NHRCcsICdIS0QnLCAnR0JQJywgJ0VVUiddO1xuZXhwb3J0IGNvbnN0IGdhSGVyb1RhYmxlVmFsdWVzID0ge1xuICAgIEdCUDogW1xuICAgICAgICBmbGFncy5VSyxcbiAgICAgICAgJ0dCUCcsXG4gICAgICAgICcxLDAwMC4wMCBHQlAnLFxuICAgICAgICAnR3JlYXQgQnJpdGFpbiBQb3VuZCcsXG4gICAgICAgICdVbml0ZWQgS2luZ2RvbScsXG4gICAgICAgICdVSyBBY2NvdW50JyxcbiAgICAgICAgJzAwMTc2OTIxJyxcbiAgICBdLFxuICAgIElEUjogW1xuICAgICAgICBmbGFncy5JRCxcbiAgICAgICAgJ0lEUicsXG4gICAgICAgICdScDEsMDAwLjAwIElEUicsXG4gICAgICAgICdJbmRvbmVzaWFuIFJ1cGlhaCcsXG4gICAgICAgICdJbmRvbmVzaWEnLFxuICAgICAgICAnSUQgQWNjb3VudCcsXG4gICAgICAgICcwMDE3NjkyMScsXG4gICAgXSxcbiAgICBBVUQ6IFtcbiAgICAgICAgZmxhZ3MuQVUsXG4gICAgICAgICdBVUQnLFxuICAgICAgICAnMSwwMDAuMDAgQVVEJyxcbiAgICAgICAgJ0F1c3RyYWxpYW4gRG9sbGFyJyxcbiAgICAgICAgJ0F1c3RyYWxpYScsXG4gICAgICAgICdBVSBBY2NvdW50JyxcbiAgICAgICAgJzYxMjg3NjQyMCcsXG4gICAgXSxcbiAgICBTR0Q6IFtcbiAgICAgICAgZmxhZ3MuU0csXG4gICAgICAgICdTR0QnLFxuICAgICAgICAnMSwwMDAuMDAgU0dEJyxcbiAgICAgICAgJ1NpbmdhcG9yZSBEb2xsYXInLFxuICAgICAgICAnU2luZ2Fwb3JlJyxcbiAgICAgICAgJ1NHIEFjY291bnQnLFxuICAgICAgICAnODg1MjAxMzIzMicsXG4gICAgXSxcbiAgICBFVVI6IFtmbGFncy5FVSwgJ0VVUicsICcxLDAwMC4wMCBFVVInLCAnRXVybycsICdFdXJvcGUnLCAnRVUgQWNjb3VudCcsICc5MDQ1MDIzOSddLFxuICAgIFVTRDogW1xuICAgICAgICBmbGFncy5VUyxcbiAgICAgICAgJ1VTRCcsXG4gICAgICAgICcxLDAwMC4wMCBVU0QnLFxuICAgICAgICAnVW5pdGVkIFN0YXRlcyBEb2xsYXInLFxuICAgICAgICAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAgICdVUyBBY2NvdW50JyxcbiAgICAgICAgJzg0NjE5NDgyMTQnLFxuICAgIF0sXG4gICAgSEtEOiBbXG4gICAgICAgIGZsYWdzLkhLLFxuICAgICAgICAnSEtEJyxcbiAgICAgICAgJzEsMDAwLjAwIEhLRCcsXG4gICAgICAgICdIb25nIEtvbmcgRG9sbGFyJyxcbiAgICAgICAgJ0hvbmcgS29uZycsXG4gICAgICAgICdISyBBY2NvdW50JyxcbiAgICAgICAgJzg3NTM1NTA3MjkwJyxcbiAgICBdLFxuICAgIENOWTogW2ZsYWdzLkNOLCAnQ05ZJywgJzEsMDAwLjAwIENOWScsICdDaGluZXNlIFl1YW4nLCAnQ2hpbmEnLCAnQ04gQWNjb3VudCcsICc4NzUzNTUwNzI5MCddLFxuICAgIE1ZUjogW1xuICAgICAgICBmbGFncy5NWSxcbiAgICAgICAgJ01ZUicsXG4gICAgICAgICcxLDAwMC4wMCBNWVInLFxuICAgICAgICAnTWFsYXlzaWFuIFJpbmdpdCcsXG4gICAgICAgICdNYWxheXNpYScsXG4gICAgICAgICdNWSBBY2NvdW50JyxcbiAgICAgICAgJzg3NTM1NTA3MjkwJyxcbiAgICBdLFxuICAgIEpQWTogW2ZsYWdzLkpQLCAnSlBZJywgJzEsMDAwLjAwIEpQWScsICdKYXBhbmVzZSBZZW4nLCAnSmFwYW4nLCAnSlAgQWNjb3VudCcsICc4NzUzNTUwNzI5MCddLFxuICAgIENIRjogW2ZsYWdzLkNILCAnQ0hGJywgJzEsMDAwLjAwIENIRicsICdTd2lzcyBGcmFuYycsICdTd2l0emVybGFuZCcsICdDSCBBY2NvdW50JywgJzg3NTM1NTA3MjkwJ10sXG4gICAgTlpEOiBbXG4gICAgICAgIGZsYWdzLk5aLFxuICAgICAgICAnTlpEJyxcbiAgICAgICAgJzEsMDAwLjAwIE5aRCcsXG4gICAgICAgICdOZXcgWmVhbGFuZCBEb2xsYXInLFxuICAgICAgICAnTmV3IFplYWxhbmQnLFxuICAgICAgICAnTlogQWNjb3VudCcsXG4gICAgICAgICc4NzUzNTUwNzI5MCcsXG4gICAgXSxcbiAgICBDQUQ6IFtmbGFncy5DQSwgJ0NBRCcsICcxLDAwMC4wMCBDQUQnLCAnQ2FuYWRpYW4gRG9sbGFyJywgJ0NhbmFkYScsICdDQSBBY2NvdW50JywgJzg3NTM1NTA3MjkwJ10sXG59O1xuZXhwb3J0IGNvbnN0IHRhYnVsYXJEYXRhID0ge1xuICAgIEFVOiBbJ0FVRCcsICdHQlAnLCAnVVNEJywgJ1NHRCcsICdFVVInLCAnSEtEJywgJ0pQWSddLFxuICAgIE5aOiBbJ05aRCcsICdHQlAnLCAnQVVEJywgJ1NHRCcsICdFVVInLCAnSEtEJywgJ0pQWSddLFxuICAgIFVLOiBbJ0dCUCcsICdVU0QnLCAnQVVEJywgJ1NHRCcsICdFVVInLCAnSEtEJywgJ0pQWSddLFxuICAgIEVVOiBbJ0VVUicsICdVU0QnLCAnR0JQJywgJ0FVRCcsICdTR0QnLCAnSEtEJywgJ0pQWSddLFxuICAgIFVTOiBbJ1VTRCcsICdHQlAnLCAnQVVEJywgJ1NHRCcsICdFVVInLCAnSEtEJywgJ0pQWSddLFxuICAgIEpQOiBbJ0pQWScsICdVU0QnLCAnR0JQJywgJ0FVRCcsICdTR0QnLCAnRVVSJywgJ0hLRCddLFxuICAgIENBOiBbJ0NBRCcsICdHQlAnLCAnVVNEJywgJ1NHRCcsICdFVVInLCAnSEtEJywgJ0pQWSddLFxuICAgIFNHOiBbJ1NHRCcsICdHQlAnLCAnQVVEJywgJ1VTRCcsICdFVVInLCAnSEtEJywgJ0pQWSddLFxuICAgIEhLOiBbJ0hLRCcsICdHQlAnLCAnQVVEJywgJ1NHRCcsICdFVVInLCAnVVNEJywgJ0pQWSddLFxuICAgIENOOiBbJ0NOWScsICdVU0QnLCAnSEtEJywgJ1NHRCcsICdFVVInLCAnR0JQJywgJ0pQWSddLFxuICAgIE1ZOiBbJ01ZUicsICdHQlAnLCAnQVVEJywgJ1NHRCcsICdVU0QnLCAnSEtEJywgJ0pQWSddLFxufTtcbmV4cG9ydCBjb25zdCBhbGxQYXltZW50VmFyaWFudHMgPSBbXG4gICAgJ21hc3RlcmNhcmQnLFxuICAgICd2aXNhJyxcbiAgICAnQU1FWCcsXG4gICAgJ3VuaW9ucGF5JyxcbiAgICAnSkNCJyxcbiAgICAnZ29vZ2xlIHBheScsXG4gICAgJ2FwcGxlIHBheScsXG4gICAgJ3BheXBhbCcsXG4gICAgJ2FsaXBheScsXG4gICAgJ2tha2FvJyxcbiAgICAnd2VjaGF0JyxcbiAgICAnUGF5IGVhc3knLFxuICAgICdLbGFybmEnLFxuICAgICdncmFicGF5JyxcbiAgICAndHJ1c3RseScsXG4gICAgJ3BheXNhZmVjYXJkJyxcbiAgICAnYWxpcGF5aGsnLFxuICAgICdGUFMnLFxuXTtcbi8vICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMSc6ICdBcHBsZSBQYXknLFxuLy8gJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0xLWljb24nOiAnYXBwbGUgcGF5Jyxcbi8vICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMic6ICdHb29nbGUgUGF5Jyxcbi8vICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMi1pY29uJzogJ2dvb2dsZSBwYXknLFxuLy8gJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0zJzogJ1BheVBhbCcsXG4vLyAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTMtaWNvbic6ICdwYXlwYWwnLFxuLy8gJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMSc6ICdLbGFybmEnLFxuLy8gJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMS1pY29uJzogJ2tsYXJuYScsXG4vLyAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0yJzogJ1RydXN0bHknLFxuLy8gJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMi1pY29uJzogJ3RydXN0bHknLFxuLy8gJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMyc6ICdQYXlzYWZlY2FyZCcsXG4vLyAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAncGF5c2FmZWNhcmQnLFxuLy8gJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNCc6ICdpREVBTCcsXG4vLyAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00LWljb24nOiAnaWRlYWwnLFxuLy8gJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNSc6ICdCYWNzIERpcmVjdCBEZWJpdCcsXG4vLyAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC01LWljb24nOiAnYWxpcGF5Jyxcbi8vICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTYnOiAnS2FrYW9QYXknLFxuLy8gJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNi1pY29uJzogJ2tha2FvcGF5Jyxcbi8vICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTcnOiAnR3JhYlBheScsXG4vLyAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC03LWljb24nOiAnZ3JhYnBheScsXG5leHBvcnQgY29uc3QgcGF5bWVudE1ldGhvZEljb25zID0ge1xuICAgIEFVOiBbJ21hc3RlcmNhcmQnLCAndmlzYScsICdBTUVYJywgJ3VuaW9ucGF5J10sXG4gICAgTlo6IFsnbWFzdGVyY2FyZCcsICd2aXNhJ10sXG4gICAgVUs6IFsnbWFzdGVyY2FyZCcsICd2aXNhJywgJ0FNRVgnLCAndW5pb25wYXknXSxcbiAgICBFVTogWydtYXN0ZXJjYXJkJywgJ3Zpc2EnXSxcbiAgICBVUzogWydtYXN0ZXJjYXJkJywgJ3Zpc2EnXSxcbiAgICBKUDogWydtYXN0ZXJjYXJkJywgJ3Zpc2EnXSxcbiAgICBDQTogWydtYXN0ZXJjYXJkJywgJ3Zpc2EnXSxcbiAgICBTRzogWydtYXN0ZXJjYXJkJywgJ3Zpc2EnLCAnQU1FWCcsICd1bmlvbnBheScsICdKQ0InXSxcbiAgICBISzogWydtYXN0ZXJjYXJkJywgJ3Zpc2EnLCAnQU1FWCcsICd1bmlvbnBheScsICdKQ0InXSxcbiAgICBDTjogWydtYXN0ZXJjYXJkJywgJ3Zpc2EnXSxcbiAgICBNWTogW10sXG59O1xuZXhwb3J0IGNvbnN0IHBheW1lbnRNZXRob2RJY29uc0NoZWNrT3V0ID0ge1xuICAgIEFVOiBbLi4ucGF5bWVudE1ldGhvZEljb25zWydBVSddLCAnYXBwbGUgcGF5JywgJ2dvb2dsZSBwYXknXSxcbiAgICBOWjogWy4uLnBheW1lbnRNZXRob2RJY29uc1snTlonXSwgJ2FwcGxlIHBheScsICdnb29nbGUgcGF5J10sXG4gICAgVUs6IFsuLi5wYXltZW50TWV0aG9kSWNvbnNbJ1VLJ10sICdhcHBsZSBwYXknLCAnZ29vZ2xlIHBheSddLFxuICAgIEVVOiBbLi4ucGF5bWVudE1ldGhvZEljb25zWydFVSddLCAnYXBwbGUgcGF5JywgJ2dvb2dsZSBwYXknXSxcbiAgICBVUzogWy4uLnBheW1lbnRNZXRob2RJY29uc1snVVMnXSwgJ2FwcGxlIHBheScsICdnb29nbGUgcGF5J10sXG4gICAgSlA6IFsuLi5wYXltZW50TWV0aG9kSWNvbnNbJ0pQJ10sICdhcHBsZSBwYXknLCAnZ29vZ2xlIHBheSddLFxuICAgIENBOiBbLi4ucGF5bWVudE1ldGhvZEljb25zWydDQSddLCAnYXBwbGUgcGF5JywgJ2dvb2dsZSBwYXknXSxcbiAgICBTRzogWy4uLnBheW1lbnRNZXRob2RJY29uc1snU0cnXSwgJ2FwcGxlIHBheScsICdnb29nbGUgcGF5J10sXG4gICAgSEs6IFsuLi5wYXltZW50TWV0aG9kSWNvbnNbJ0hLJ10sICdhbGlwYXloaycsICd3ZWNoYXQnXSxcbiAgICBDTjogWy4uLnBheW1lbnRNZXRob2RJY29uc1snQ04nXSwgJ2FsaXBheScsICd3ZWNoYXQnXSxcbiAgICBNWTogW10sXG59O1xuZXhwb3J0IGNvbnN0IGZpbmRSZWdpb25CeUN1cnJlbmN5ID0gKHRhcmdldCkgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhjdXJyZW5jeSkuZmluZCgoZSkgPT4gY3VycmVuY3lbZV0gPT0gdGFyZ2V0KTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc2hlZXREYXRhID0ge1xuICAgIEVVOiB7XG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMSc6ICdMb2NhdGlvbicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMSc6ICdFdXJvcGUnLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTInOiAnSUJBTicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMic6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTMnOiAnU1dJRlQgQ29kZScsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMyc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS00JzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtNCc6ICdFVVIgR2xvYmFsIEFjY291bnQnLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS0xJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTEnOiAnTWFrZXJzIFN1cHBseSBMaW1pdGVkJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMic6ICdMb2NhdGlvbicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTInOiAnRXVyb3BlJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMyc6ICdJQkFOJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMyc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS00JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS00JzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXRpdGxlLTEnOiAnSUJBTicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdmFsdWUtMSc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXRpdGxlLTInOiAnTG9jYXRpb24nLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXZhbHVlLTInOiAnRXVyb3BlJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0xJzogJ0FwcGxlIFBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMS1pY29uJzogJ2FwcGxlIHBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMic6ICdHb29nbGUgUGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0yLWljb24nOiAnZ29vZ2xlIHBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMyc6ICdQYXlQYWwnLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTMtaWNvbic6ICdwYXlwYWwnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xJzogJ0tsYXJuYScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTEtaWNvbic6ICdrbGFybmEnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0yJzogJ1RydXN0bHknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0yLWljb24nOiAndHJ1c3RseScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTMnOiAnUGF5c2FmZWNhcmQnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAncGF5c2FmZWNhcmQnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00JzogJ2lERUFMJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNC1pY29uJzogJ2lkZWFsJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNSc6ICdTRVBBIERpcmVjdCBEZWJpdCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUtaWNvbic6ICdTRVBBJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNic6ICdLYWthb1BheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTYtaWNvbic6ICdrYWthb3BheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTcnOiAnR3JhYlBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTctaWNvbic6ICdncmFicGF5JyxcbiAgICB9LFxuICAgIEFVOiB7XG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMSc6ICdMb2NhdGlvbicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMSc6ICdBdXN0cmFsaWEnLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTInOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0yJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS0zJzogJ0JTQiBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0zJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS00JzogJ0FjY291bnQgVHlwZScsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtNCc6ICdDdXJyZW50JyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMSc6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS0xJzogJ01ha2VycyBTdXBwbHkgTGltaXRlZCcsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTInOiAnTG9jYXRpb24nLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS0yJzogJ0F1c3RyYWxpYScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTMnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMyc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTQnOiAnQlNCIENvZGUnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS00JzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy10aXRsZS0xJzogJ0FjY291bnQgbm8uICcsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdmFsdWUtMSc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdGl0bGUtMic6ICdCU0IgQ29kZScsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdmFsdWUtMic6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMSc6ICdBcHBsZSBQYXknLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTEtaWNvbic6ICdhcHBsZSBwYXknLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTInOiAnR29vZ2xlIFBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMi1pY29uJzogJ2dvb2dsZSBwYXknLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTMnOiAnUGF5UGFsJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAncGF5cGFsJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMSc6ICdBbGlwYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xLWljb24nOiAnYWxpcGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMic6ICdXZUNoYXQgUGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMi1pY29uJzogJ3dlY2hhdCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTMnOiAnS2FrYW9QYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAna2FrYW9wYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00JzogJ0dyYWJQYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00LWljb24nOiAnZ3JhYnBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUnOiAnS29uYmluaScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUtaWNvbic6ICdrb25iaW5pJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNic6ICdLbGFybmEnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC02LWljb24nOiAna2xhcm5hJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNyc6ICdpREVBTCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTctaWNvbic6ICdpZGVhbCcsXG4gICAgfSxcbiAgICBVSzoge1xuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTEnOiAnTG9jYXRpb24nLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXZhbHVlLTEnOiAnVW5pdGVkIEtpbmdkb20nLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTInOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0yJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTMnOiAnSUJBTicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMyc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTQnOiAnU29ydCBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS00JzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMSc6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS0xJzogJ01ha2VycyBTdXBwbHkgTGltaXRlZCcsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTInOiAnTG9jYXRpb24nLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS0yJzogJ1VuaXRlZCBLaW5nZG9tJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMyc6ICdBY2NvdW50IG5vLiAnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS0zJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS00JzogJ1NvcnQgQ29kZScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTQnOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXRpdGxlLTEnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy12YWx1ZS0xJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXRpdGxlLTInOiAnU29ydCBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy12YWx1ZS0yJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0xJzogJ0FwcGxlIFBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMS1pY29uJzogJ2FwcGxlIHBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMic6ICdHb29nbGUgUGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0yLWljb24nOiAnZ29vZ2xlIHBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMyc6ICdQYXlQYWwnLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTMtaWNvbic6ICdwYXlwYWwnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xJzogJ0tsYXJuYScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTEtaWNvbic6ICdrbGFybmEnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0yJzogJ1RydXN0bHknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0yLWljb24nOiAndHJ1c3RseScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTMnOiAnUGF5c2FmZWNhcmQnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAncGF5c2FmZWNhcmQnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00JzogJ2lERUFMJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNC1pY29uJzogJ2lkZWFsJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNSc6ICdCYWNzIERpcmVjdCBEZWJpdCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUtaWNvbic6ICdCQUNTJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNic6ICdLYWthb1BheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTYtaWNvbic6ICdrYWthb3BheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTcnOiAnR3JhYlBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTctaWNvbic6ICdncmFicGF5JyxcbiAgICB9LFxuICAgIE5aOiB7XG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMSc6ICdMb2NhdGlvbicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMSc6ICdOZXcgWmVhbGFuZCcsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMic6ICdBY2NvdW50IG5vLiAnLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXZhbHVlLTInOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIC0g4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMyc6ICdCYW5rIENvZGUnLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXZhbHVlLTMnOiAn4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtNCc6ICdCcmFuY2ggQ29kZScsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtNCc6ICfigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS0xJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTEnOiAnTWFrZXJzIFN1cHBseSBMaW1pdGVkJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMic6ICdMb2NhdGlvbicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTInOiAnTmV3IFplYWxhbmQnLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS0zJzogJ0FjY291bnQgbm8uICcsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTMnOiAn4oCiIOKAoiAtIOKAoiDigKIg4oCiIOKAoiAtIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiAtIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS00JzogJ0JhbmsgQ29kZScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTQnOiAn4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdGl0bGUtMSc6ICdBY2NvdW50IG5vLiAnLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXZhbHVlLTEnOiAn4oCiIOKAoiAtIOKAoiDigKIg4oCiIOKAoiAtIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiAtIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXRpdGxlLTInOiAnQmFuayBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy12YWx1ZS0yJzogJ+KAoiDigKInLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTEnOiAnQXBwbGUgUGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0xLWljb24nOiAnYXBwbGUgcGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0yJzogJ0dvb2dsZSBQYXknLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTItaWNvbic6ICdnb29nbGUgcGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0zJzogJ1BheVBhbCcsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMy1pY29uJzogJ3BheXBhbCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTEnOiAnQWxpcGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMS1pY29uJzogJ2FsaXBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTInOiAnV2VDaGF0IFBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTItaWNvbic6ICd3ZWNoYXQnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0zJzogJ0tha2FvUGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMy1pY29uJzogJ2tha2FvcGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNCc6ICdHcmFiUGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNC1pY29uJzogJ2dyYWJwYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC01JzogJ0tvbmJpbmknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC01LWljb24nOiAna29uYmluaScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTYnOiAnS2xhcm5hJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNi1pY29uJzogJ2tsYXJuYScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTcnOiAnaURFQUwnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC03LWljb24nOiAnaWRlYWwnLFxuICAgIH0sXG4gICAgQ0E6IHtcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS0xJzogJ0xvY2F0aW9uJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0xJzogJ0NhbmFkYScsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMic6ICdBY2NvdW50IG5vLiAnLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXZhbHVlLTInOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTMnOiAnVHJhbnNpdCBOdW1iZXInLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXZhbHVlLTMnOiAn4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtNCc6ICdGaW5hbmNpYWwgSW5zdGl0dXRpb24gTnVtYmVyJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS00JzogJ+KAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMSc6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS0xJzogJ01ha2VycyBTdXBwbHkgTGltaXRlZCcsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTInOiAnTG9jYXRpb24nLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS0yJzogJ0NhbmFkYScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTMnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMyc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTQnOiAnVHJhbnNpdCBOdW1iZXInLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS00JzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy10aXRsZS0xJzogJ0FjY291bnQgbm8uICcsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdmFsdWUtMSc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdGl0bGUtMic6ICdUcmFuc2l0IE51bWJlcicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdmFsdWUtMic6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMSc6ICdBcHBsZSBQYXknLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTEtaWNvbic6ICdhcHBsZSBwYXknLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTInOiAnR29vZ2xlIFBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMi1pY29uJzogJ2dvb2dsZSBwYXknLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTMnOiAnUGF5UGFsJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAncGF5cGFsJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMSc6ICdBbGlwYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xLWljb24nOiAnYWxpcGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMic6ICdXZUNoYXQgUGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMi1pY29uJzogJ3dlY2hhdCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTMnOiAnS2FrYW9QYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAna2FrYW9wYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00JzogJ0dyYWJQYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00LWljb24nOiAnZ3JhYnBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUnOiAnS29uYmluaScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUtaWNvbic6ICdrb25iaW5pJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNic6ICdLbGFybmEnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC02LWljb24nOiAna2xhcm5hJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNyc6ICdpREVBTCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTctaWNvbic6ICdpZGVhbCcsXG4gICAgfSxcbiAgICBVUzoge1xuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTEnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0xJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMic6ICdBQ0ggcm91dGluZyBuby4nLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXZhbHVlLTInOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTMnOiAnRmVkd2lyZSByb3V0aW5nIG5vLicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMyc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtNCc6ICdTV0lGVCBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS00JzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS0xJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTEnOiAnTWFrZXJzIFN1cHBseSBMaW1pdGVkJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMic6ICdMb2NhdGlvbicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTInOiAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTMnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMyc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS00JzogJ1JvdXRpbmcgbnVtYmVyJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtNCc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdGl0bGUtMSc6ICdBY2NvdW50IG5vLiAnLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXZhbHVlLTEnOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy10aXRsZS0yJzogJ1JvdXRpbmcgbm8uJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy12YWx1ZS0yJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0xJzogJ0FwcGxlIFBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMS1pY29uJzogJ2FwcGxlIHBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMic6ICdHb29nbGUgUGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0yLWljb24nOiAnZ29vZ2xlIHBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMyc6ICdQYXlQYWwnLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTMtaWNvbic6ICdwYXlwYWwnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xJzogJ0FDSCBEaXJlY3QgRGViaXQnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xLWljb24nOiAnQUNIJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMic6ICdXZUNoYXQgUGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMi1pY29uJzogJ3dlY2hhdCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTMnOiAnS2FrYW9QYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAna2FrYW9wYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00JzogJ0dyYWJQYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00LWljb24nOiAnZ3JhYnBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUnOiAnS29uYmluaScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUtaWNvbic6ICdrb25iaW5pJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNic6ICdLbGFybmEnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC02LWljb24nOiAna2xhcm5hJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNyc6ICdpREVBTCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTctaWNvbic6ICdpZGVhbCcsXG4gICAgfSxcbiAgICBTRzoge1xuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTEnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0xJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMic6ICdCYW5rIENvZGUnLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXZhbHVlLTInOiAn4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS0zJzogJ0JyYW5jaCBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0zJzogJ+KAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS00JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXZhbHVlLTQnOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTEnOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMSc6ICdNYWtlcnMgU3VwcGx5IExpbWl0ZWQnLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS0yJzogJ0xvY2F0aW9uJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMic6ICdTaW5nYXBvcmUnLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS0zJzogJ0FjY291bnQgbm8uICcsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTMnOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtNCc6ICdCYW5rIENvZGUnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS00JzogJ+KAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdGl0bGUtMSc6ICdBY2NvdW50IG5vLiAnLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXZhbHVlLTEnOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy10aXRsZS0yJzogJ0JhbmsgQ29kZScsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdmFsdWUtMic6ICfigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTEnOiAnQXBwbGUgUGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0xLWljb24nOiAnYXBwbGUgcGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0yJzogJ0dvb2dsZSBQYXknLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTItaWNvbic6ICdnb29nbGUgcGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0zJzogJ1BheVBhbCcsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMy1pY29uJzogJ3BheXBhbCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTEnOiAnR3JhYlBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTEtaWNvbic6ICdncmFicGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMic6ICdQYXlOb3cnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0yLWljb24nOiAncGF5bm93JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMyc6ICdXZUNoYXQgUGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMy1pY29uJzogJ3dlY2hhdCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTQnOiAnQWxpcGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNC1pY29uJzogJ2FsaXBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUnOiAnS2FrYW9QYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC01LWljb24nOiAna2FrYW9wYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC02JzogJ0tvbmJpbmknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC02LWljb24nOiAna29uYmluaScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTcnOiAnS2xhcm5hJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNy1pY29uJzogJ2tsYXJuYScsXG4gICAgfSxcbiAgICBKUDoge1xuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTEnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0xJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMic6ICdCYW5rIENvZGUnLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXZhbHVlLTInOiAn4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS0zJzogJ0JyYW5jaCBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0zJzogJ+KAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS00JzogJ0FjY291bnQgVHlwZScsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtNCc6ICdPcmRpbmFyeScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTEnOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMSc6ICdNYWtlcnMgU3VwcGx5IExpbWl0ZWQnLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS0yJzogJ0xvY2F0aW9uJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMic6ICdKYXBhbicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTMnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMyc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtNCc6ICdCYW5rIENvZGUnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS00JzogJ+KAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdGl0bGUtMSc6ICdBY2NvdW50IG5vLiAnLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXZhbHVlLTEnOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdGl0bGUtMic6ICdCYW5rIENvZGUnLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXZhbHVlLTInOiAn4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0xJzogJ0FwcGxlIFBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMS1pY29uJzogJ2FwcGxlIHBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMic6ICdHb29nbGUgUGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0yLWljb24nOiAnZ29vZ2xlIHBheScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMyc6ICdQYXlQYWwnLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTMtaWNvbic6ICdwYXlwYWwnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xJzogJ0tvbmJpbmknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xLWljb24nOiAna29uYmluaScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTInOiAnUGF5ZWFzeScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTItaWNvbic6ICdwYXllYXN5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMyc6ICdHcmFiUGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMy1pY29uJzogJ2dyYWJwYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00JzogJ1dlQ2hhdCBQYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00LWljb24nOiAnd2VjaGF0JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNSc6ICdBbGlwYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC01LWljb24nOiAnYWxpcGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNic6ICdLYWthb1BheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTYtaWNvbic6ICdrYWthb3BheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTcnOiAnS2xhcm5hJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNy1pY29uJzogJ2tsYXJuYScsXG4gICAgfSxcbiAgICBJRDoge1xuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTEnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0xJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS0yJzogJ0FjY291bnQgVHlwZScsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMic6ICdDaGVja2luZycsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMyc6ICdMb2NhdGlvbicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMyc6ICdJbmRvbmVzaWEnLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTQnOiAnQWNjb3VudCBUeXBlJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS00JzogJ0NoZWNraW5nJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMSc6ICduL2EnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS0xJzogJ24vYScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTInOiAnbi9hJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMic6ICduL2EnLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS0zJzogJ24vYScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTMnOiAnbi9hJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtNCc6ICduL2EnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS00JzogJ24vYScsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdGl0bGUtMSc6ICduL2EnLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXZhbHVlLTEnOiAnbi9hJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy10aXRsZS0yJzogJ24vYScsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdmFsdWUtMic6ICduL2EnLFxuICAgIH0sXG4gICAgSEs6IHtcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS0xJzogJ0FjY291bnQgbm8uICcsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMSc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS0yJzogJ0JhbmsgQ29kZScsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMic6ICfigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtMyc6ICdCcmFuY2ggQ29kZScsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdmFsdWUtMyc6ICfigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtY2FyZHMtdGl0bGUtNCc6ICdTV0lGVCBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS00JzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS0xJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTEnOiAnTWFrZXJzIFN1cHBseSBMaW1pdGVkJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMic6ICdMb2NhdGlvbicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXZhbHVlLTInOiAnSG9uZyBLb25nIFNBUicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTMnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMyc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTQnOiAnQmFuayBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtNCc6ICfigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdGl0bGUtMSc6ICdBY2NvdW50IG5vLiAnLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXZhbHVlLTEnOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXRpdGxlLTInOiAnQmFuayBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy12YWx1ZS0yJzogJ+KAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0xJzogJ0FsaXBheSBISycsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMS1pY29uJzogJ2FsaXBheWhrJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0yJzogJ1dlQ2hhdCBQYXknLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTItaWNvbic6ICd3ZWNoYXQnLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTMnOiAnRlBTJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAnRlBTJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMSc6ICdBbGlwYXkgSEsnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xLWljb24nOiAnYWxpcGF5aGsnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0yJzogJ1dlQ2hhdCBQYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0yLWljb24nOiAnd2VjaGF0JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMyc6ICdGUFMnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAnRlBTJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNCc6ICdBcHBsZSBQYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00LWljb24nOiAnYXBwbGUgcGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNSc6ICdHb29nbGUgUGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNS1pY29uJzogJ2dvb2dsZSBwYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC02JzogJ1BheVBhbCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTYtaWNvbic6ICdwYXlwYWwnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC03JzogJ0dyYWJQYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC03LWljb24nOiAnZ3JhYnBheScsXG4gICAgfSxcbiAgICBDTjoge1xuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTEnOiAnQWNjb3VudCBuby4gJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0xJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXRpdGxlLTInOiAnQmFuayBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0yJzogJ+KAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS0zJzogJ0JyYW5jaCBDb2RlJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy12YWx1ZS0zJzogJ+KAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS1jYXJkcy10aXRsZS00JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAnYXd4LWdhLWNhcmRzLXZhbHVlLTQnOiAn4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2Etd2h5LXRpdGxlLTEnOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMSc6ICdNYWtlcnMgU3VwcGx5IExpbWl0ZWQnLFxuICAgICAgICAnYXd4LWdhLXdoeS10aXRsZS0yJzogJ0xvY2F0aW9uJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdmFsdWUtMic6ICdIb25nIEtvbmcgU0FSJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtMyc6ICdBY2NvdW50IG5vLiAnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS0zJzogJ+KAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS13aHktdGl0bGUtNCc6ICdCYW5rIENvZGUnLFxuICAgICAgICAnYXd4LWdhLXdoeS12YWx1ZS00JzogJ+KAoiDigKIg4oCiJyxcbiAgICAgICAgJ2F3eC1nYS0yLWZpZWxkcy10aXRsZS0xJzogJ0FjY291bnQgbm8uICcsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdmFsdWUtMSc6ICfigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoiDigKIg4oCiIOKAoicsXG4gICAgICAgICdhd3gtZ2EtMi1maWVsZHMtdGl0bGUtMic6ICdCYW5rIENvZGUnLFxuICAgICAgICAnYXd4LWdhLTItZmllbGRzLXZhbHVlLTInOiAn4oCiIOKAoiDigKInLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTEnOiAnQWxpcGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0xLWljb24nOiAnYWxpcGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0yJzogJ1dlQ2hhdCBQYXknLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTItaWNvbic6ICd3ZWNoYXQnLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTMnOiAnS2FrYW8gUGF5JyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAna2FrYW8nLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xJzogJ0FsaXBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTEtaWNvbic6ICdhbGlwYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0yJzogJ1dlQ2hhdCBQYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0yLWljb24nOiAnd2VjaGF0JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMyc6ICdLYWthbyBQYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAna2FrYW8nLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00JzogJ0tsYXJuYScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTQtaWNvbic6ICdLbGFybmEnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC01JzogJ1BheVBhbCcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUtaWNvbic6ICdwYXlwYWwnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC02JzogJ0dvb2dsZSBQYXknLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC02LWljb24nOiAnZ29vZ2xlIHBheScsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTcnOiAnQXBwbGUgUGF5JyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNy1pY29uJzogJ2FwcGxlIHBheScsXG4gICAgfSxcbiAgICBNWToge1xuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTEnOiAnTi9BJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0xLWljb24nOiAnbi9hJyxcbiAgICAgICAgJ2F3eC1jaGVja291dC1wYXltZW50LW1ldGhvZC0yJzogJ04vQScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMi1pY29uJzogJ24vYScsXG4gICAgICAgICdhd3gtY2hlY2tvdXQtcGF5bWVudC1tZXRob2QtMyc6ICdOL0EnLFxuICAgICAgICAnYXd4LWNoZWNrb3V0LXBheW1lbnQtbWV0aG9kLTMtaWNvbic6ICduL2EnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0xJzogJyAgJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMS1pY29uJzogJyAgJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtMic6ICcgICcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTItaWNvbic6ICcgICcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTMnOiAnICAnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC0zLWljb24nOiAnICAnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC00JzogJyAgJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNC1pY29uJzogJyAgJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNSc6ICcgICcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTUtaWNvbic6ICcgICcsXG4gICAgICAgICdhd3gtbG1wLXBheW1lbnQtbWV0aG9kLTYnOiAnICAnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC02LWljb24nOiAnICAnLFxuICAgICAgICAnYXd4LWxtcC1wYXltZW50LW1ldGhvZC03JzogJyAgJyxcbiAgICAgICAgJ2F3eC1sbXAtcGF5bWVudC1tZXRob2QtNy1pY29uJzogJyAgJyxcbiAgICB9LFxufTtcbmNvbnN0IHRyYW5zZmVyRGF0YSA9IHtcbiAgICBVUzogW1xuICAgICAgICB7XG4gICAgICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZCc6ICdBQ0gnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnQmFuayBvZiBBbWVyaWNhJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMic6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0yJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0zJzogJ0FjY291bnQgTnVtYmVyJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMyc6IDMyNTA5OTE5NjA3NCxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNCc6ICdBQkEgQ29kZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiAyMTAwMDMyMixcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcgICcsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnICAnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMSc6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnNjM1IFJlZCBCdWQgTGFuZSwgVGV0ZXJib3JvLCBOZXcgSmVyc2V5IDA3NjA4LCBVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZCc6ICdGZWR3aXJlJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0Jhbmsgb2YgQW1lcmljYScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTInOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTMnOiAzMjUwOTkxOTYwNzQsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnQUJBIENvZGUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogMjEwMDAzMjIsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTUnOiAnICAnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS01JzogJyAgJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0xJzogJ05hbWUnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMic6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0yJzogJzYzNSBSZWQgQnVkIExhbmUsIFRldGVyYm9ybywgTmV3IEplcnNleSAwNzYwOCwgVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiAnU1dJRlQnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnQUlCIEJBTksnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOVW1iZXInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMzI1MDk5MTk2MDc0LFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogJ0FJQktVUzNUVE1LJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcgICcsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnICAnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMSc6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnNjM1IFJlZCBCdWQgTGFuZSwgVGV0ZXJib3JvLCBOZXcgSmVyc2V5IDA3NjA4LCBVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgTlo6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiAnTG9jYWwnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnQU5aIEJhbmsgTmV3IFplYWxhbmQnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTAwMDE3Nzc3Nzc3MzMzLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJyAgJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNCc6ICcgICcsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTUnOiAnICAnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS01JzogJyAgJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0xJzogJ05hbWUnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMic6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0yJzogJzQ4IFNob3J0bGFuZCBTdC4sIEF1Y2tsYW5kLCBOZXcgWmVhbGFuZCAxMDEwJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiAnU1dJRlQnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQycsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTInOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTMnOiAxMjM0NTYsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnU1dJRlQgQ29kZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiAnSFNCQ1hYMlMyMDInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS01JzogJyAgJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNSc6ICcgICcsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0xJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTInOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgVUs6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiAnRVVSIExvY2FsJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0hTQkMnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTIzNDU2LFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ0lCQU4gQ29kZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiAnR0I1OTIwNzA4MDA5MDA2Mzc4JyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcgICcsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnICAnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMSc6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnTGV2ZWwgNy8yMCBXaWxsaWFtIFN0LiwgTWVsYm91cm5lLCBWSUMgMTIzNCwgQXVzdHJhbGlhJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiAnR0JQIExvY2FsJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0hTQkMgQnJpdGFpbiBCcmFuY2gnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTIzNDU2LFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ1NvcnQgQ29kZSAnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogJzEyLTM0LTU2JyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcgICcsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnICAnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMSc6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnTGV2ZWwgNy8yMCBXaWxsaWFtIFN0LiwgTWVsYm91cm5lLCBWSUMgMTIzNCwgQXVzdHJhbGlhJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiAnU1dJRlQnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQycsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTInOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTMnOiAxMjM0NTYsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnSUJBTiBDb2RlJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNCc6ICdYWDU5MjA3MDgwMDkwMDYzNzgnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS01JzogJyAgJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNSc6ICcgICcsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0xJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTInOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgU0c6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiAnR0lSTycsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTEnOiAnQmFuayBOYW1lJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMSc6ICdIU0JDJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMic6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0yJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0zJzogJ0FjY291bnQgTnVtYmVyJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMyc6IDEyMzQ1NixcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNCc6ICdCYW5rIENvZGUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogNzE3MTA4MixcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICdTV0lGVCBDb2RlJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNSc6ICdIU0JDU0cyUzIwMicsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0xJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTInOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZCc6ICdSVEdTJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0hTQkMnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTIzNDU2LFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ0JhbmsgQ29kZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiA3MTcxMDgyLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS01JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS01JzogJ0hTQkNTRzJTMjAyJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0xJzogJ05hbWUnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMic6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0yJzogJ0xldmVsIDcvMjAgV2lsbGlhbSBTdC4sIE1lbGJvdXJuZSwgVklDIDEyMzQsIEF1c3RyYWxpYScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kJzogJ0ZBU1QnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQycsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTInOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTMnOiAxMjM0NTYsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnQmFuayBDb2RlJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNCc6IDcxNzEwODIsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTUnOiAnU1dJRlQgQ29kZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnSFNCQ1NHMlMyMDInLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMSc6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnTGV2ZWwgNy8yMCBXaWxsaWFtIFN0LiwgTWVsYm91cm5lLCBWSUMgMTIzNCwgQXVzdHJhbGlhJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiAnU1dJRlQnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQycsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTInOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTMnOiAxMjM0NTYsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnU1dJRlQgQ29kZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiAnSFNCQ1hYMlMyMDInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS01JzogJyAgJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNSc6ICcgICcsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0xJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTInOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgRVU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiAnTG9jYWwnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQycsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTInOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTMnOiAxMjM0NTYsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnU1dJRlQgQ29kZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiAnSFNCQ1hYMlMyMDInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS01JzogJ0lCQU4gQ29kZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnWFg1OTIwNzA4MDA5MDA2Mzc4JyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0xJzogJ05hbWUnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMic6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0yJzogJ0xldmVsIDcvMjAgV2lsbGlhbSBTdC4sIE1lbGJvdXJuZSwgVklDIDEyMzQsIEF1c3RyYWxpYScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kJzogJ1NXSUZUJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0hTQkMnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTIzNDU2LFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogJ0hTQkNYWDJTMjAyJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICdJQkFOIENvZGUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS01JzogJ1hYNTkyMDcwODAwOTAwNjM3OCcsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0xJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTInOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgSlA6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QnOiAnTG9jYWwnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQyBKYXBhbiBCcmFuY2gnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTIzNDU2LFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ1plbmdpbiBDb2RlJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNCc6IDEyMzQ1NjcsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTUnOiAnICAnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS01JzogJyAgJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0xJzogJ05hbWUnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMic6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0yJzogJ0xldmVsIDcvMjAgV2lsbGlhbSBTdC4sIE1lbGJvdXJuZSwgVklDIDEyMzQsIEF1c3RyYWxpYScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kJzogJ1NXSUZUJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0hTQkMnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTIzNDU2LFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogJ0hTQkNYWDJTMjAyJyxcbiAgICAgICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcgICcsXG4gICAgICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnICAnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMSc6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnTGV2ZWwgNy8yMCBXaWxsaWFtIFN0LiwgTWVsYm91cm5lLCBWSUMgMTIzNCwgQXVzdHJhbGlhJyxcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydCBjb25zdCB0cmFuc2Zlck1ldGhvZERhdGEgPSB7XG4gICAgQVU6IHtcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMSc6ICdCYW5rIFRyYW5zZmVyJyxcbiAgICAgICAgJ2F3eC1zcGVlZC0xJzogJzAtMSBidXNpbmVzcyBkYXknLFxuICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZC0yJzogJ1NXSUZUJyxcbiAgICAgICAgJ2F3eC1zcGVlZC0yJzogJzAtMyBidXNpbmVzcyBkYXlzICcsXG4gICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kLTMnOiAnICAnLFxuICAgICAgICAnYXd4LXNwZWVkLTMnOiAnICAnLFxuICAgIH0sXG4gICAgTlo6IHtcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMSc6ICdEaXJlY3QgQ3JlZGl0JyxcbiAgICAgICAgJ2F3eC1zcGVlZC0xJzogJzAtMSBidXNpbmVzcyBkYXknLFxuICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZC0yJzogJ1NXSUZUJyxcbiAgICAgICAgJ2F3eC1zcGVlZC0yJzogJzAtMyBidXNpbmVzcyBkYXlzICcsXG4gICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kLTMnOiAnICAnLFxuICAgICAgICAnYXd4LXNwZWVkLTMnOiAnICAnLFxuICAgIH0sXG4gICAgVUs6IHtcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMSc6ICdGYXN0ZXIgUGF5bWVudHMnLFxuICAgICAgICAnYXd4LXNwZWVkLTEnOiAnMC0xIGJ1c2luZXNzIGRheScsXG4gICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kLTInOiAnQkFDUycsXG4gICAgICAgICdhd3gtc3BlZWQtMic6ICcxLTIgYnVzaW5lc3MgZGF5cycsXG4gICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kLTMnOiAnQ0hBUFMnLFxuICAgICAgICAnYXd4LXNwZWVkLTMnOiAnMC0xIGJ1c2luZXNzIGRheScsXG4gICAgfSxcbiAgICBFVToge1xuICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZC0xJzogJ1NFUEEnLFxuICAgICAgICAnYXd4LXNwZWVkLTEnOiAnMC0xIGJ1c2luZXNzIGRheScsXG4gICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kLTInOiAnU1dJRlQnLFxuICAgICAgICAnYXd4LXNwZWVkLTInOiAnMC0zIGJ1c2luZXNzIGRheXMgJyxcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMyc6ICcgICcsXG4gICAgICAgICdhd3gtc3BlZWQtMyc6ICcgICcsXG4gICAgfSxcbiAgICBVUzoge1xuICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZC0xJzogJ0FDSCcsXG4gICAgICAgICdhd3gtc3BlZWQtMSc6ICcxLTIgYnVzaW5lc3MgZGF5cycsXG4gICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kLTInOiAnRmVkd2lyZScsXG4gICAgICAgICdhd3gtc3BlZWQtMic6ICcwLTEgYnVzaW5lc3MgZGF5JyxcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMyc6ICdTV0lGVCcsXG4gICAgICAgICdhd3gtc3BlZWQtMyc6ICcwLTMgYnVzaW5lc3MgZGF5cyAnLFxuICAgIH0sXG4gICAgSlA6IHtcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMSc6ICdaZW5naW4nLFxuICAgICAgICAnYXd4LXNwZWVkLTEnOiAnMC0xIGJ1c2luZXNzIGRheScsXG4gICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kLTInOiAnU1dJRlQnLFxuICAgICAgICAnYXd4LXNwZWVkLTInOiAnMC0zIGJ1c2luZXNzIGRheXMgJyxcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMyc6ICcgICcsXG4gICAgICAgICdhd3gtc3BlZWQtMyc6ICcgICcsXG4gICAgfSxcbiAgICBDQToge1xuICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZC0xJzogJ0VGVCcsXG4gICAgICAgICdhd3gtc3BlZWQtMSc6ICcwLTEgYnVzaW5lc3MgZGF5JyxcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMic6ICdTV0lGVCcsXG4gICAgICAgICdhd3gtc3BlZWQtMic6ICcwLTMgYnVzaW5lc3MgZGF5cyAnLFxuICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZC0zJzogJyAgJyxcbiAgICAgICAgJ2F3eC1zcGVlZC0zJzogJyAgJyxcbiAgICB9LFxuICAgIFNHOiB7XG4gICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kLTEnOiAnR0lSTycsXG4gICAgICAgICdhd3gtc3BlZWQtMSc6ICcwLTEgYnVzaW5lc3MgZGF5JyxcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMic6ICdNRVBTJyxcbiAgICAgICAgJ2F3eC1zcGVlZC0yJzogJzAtMSBidXNpbmVzcyBkYXknLFxuICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZC0zJzogJ0ZBU1QnLFxuICAgICAgICAnYXd4LXNwZWVkLTMnOiAnMC0xIGJ1c2luZXNzIGRheScsXG4gICAgfSxcbiAgICBISzoge1xuICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZC0xJzogJ0FDSCcsXG4gICAgICAgICdhd3gtc3BlZWQtMSc6ICcxLTIgYnVzaW5lc3MgZGF5cycsXG4gICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kLTInOiAnUlRHUycsXG4gICAgICAgICdhd3gtc3BlZWQtMic6ICcwLTEgYnVzaW5lc3MgZGF5JyxcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMyc6ICdGUFMnLFxuICAgICAgICAnYXd4LXNwZWVkLTMnOiAnMC0xIGJ1c2luZXNzIGRheScsXG4gICAgfSxcbiAgICBDTjoge1xuICAgICAgICAnYXd4LXRyYW5zZmVyLW1ldGhvZC0xJzogJ0FDSCcsXG4gICAgICAgICdhd3gtc3BlZWQtMSc6ICcxLTIgYnVzaW5lc3MgZGF5cycsXG4gICAgICAgICdhd3gtdHJhbnNmZXItbWV0aG9kLTInOiAnUlRHUycsXG4gICAgICAgICdhd3gtc3BlZWQtMic6ICcwLTEgYnVzaW5lc3MgZGF5JyxcbiAgICAgICAgJ2F3eC10cmFuc2Zlci1tZXRob2QtMyc6ICdGUFMnLFxuICAgICAgICAnYXd4LXNwZWVkLTMnOiAnMC0xIGJ1c2luZXNzIGRheScsXG4gICAgfSxcbiAgICBJRDoge30sXG59O1xuZXhwb3J0IGNvbnN0IGJhbmtDYXJkRGF0YSA9IHtcbiAgICBVU19BQ0g6IHtcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMSc6ICdCYW5rIG9mIEFtZXJpY2EnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTInOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0yJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTMnOiAzMjUwOTkxOTYwNzQsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNCc6ICdBQkEgQ29kZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNCc6IDIxMDAwMzIyLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTUnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS01JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNic6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTYnOiAnJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0xJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMic6ICdBZGRyZXNzJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnNjM1IFJlZCBCdWQgTGFuZSwgVGV0ZXJib3JvLCBOZXcgSmVyc2V5IDA3NjA4LCBVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EnLFxuICAgIH0sXG4gICAgVVNfRmVkd2lyZToge1xuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTEnOiAnQmFuayBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0Jhbmsgb2YgQW1lcmljYScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMic6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMyc6IDMyNTA5OTE5NjA3NCxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ0FCQSBDb2RlJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogMjEwMDAzMjIsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS02JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNic6ICcnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICc2MzUgUmVkIEJ1ZCBMYW5lLCBUZXRlcmJvcm8sIE5ldyBKZXJzZXkgMDc2MDgsIFVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScsXG4gICAgfSxcbiAgICBVU19TV0lGVDoge1xuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTEnOiAnQmFuayBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0FJQiBCQU5LJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0zJzogJ0FjY291bnQgTnVtYmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMzI1MDk5MTk2MDc0LFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnU1dJRlQgQ29kZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNCc6ICdBSUJLVVMzVFRNSycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS02JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNic6ICcnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICc2MzUgUmVkIEJ1ZCBMYW5lLCBUZXRlcmJvcm8sIE5ldyBKZXJzZXkgMDc2MDgsIFVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScsXG4gICAgfSxcbiAgICBOWl9Mb2NhbDoge1xuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTEnOiAnQmFuayBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0FOWiBCYW5rIE5ldyBaZWFsYW5kJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0zJzogJ0FjY291bnQgTnVtYmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTAwMDE3Nzc3Nzc3MzMzLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS02JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNic6ICcnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICc0OCBTaG9ydGxhbmQgU3QuLCBBdWNrbGFuZCwgTmV3IFplYWxhbmQgMTAxMCcsXG4gICAgfSxcbiAgICBOWl9TV0lGVDoge1xuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTEnOiAnQmFuayBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0hTQkMnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTInOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0yJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTMnOiAxMjM0NTYsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNCc6ICdTV0lGVCBDb2RlJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogJ0hTQkNYWDJTMjAyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS01JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNSc6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTYnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS02JzogJycsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0xJzogJ05hbWUnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMSc6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTInOiAnQWRkcmVzcycsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0yJzogJ0xldmVsIDcvMjAgV2lsbGlhbSBTdC4sIE1lbGJvdXJuZSwgVklDIDEyMzQsIEF1c3RyYWxpYScsXG4gICAgfSxcbiAgICBVS19FVVJfTG9jYWw6IHtcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMSc6ICdIU0JDJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0zJzogJ0FjY291bnQgTnVtYmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTIzNDU2LFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnSUJBTiBDb2RlJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogJ0dCNTkyMDcwODAwOTAwNjM3OCcsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS02JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNic6ICcnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgIH0sXG4gICAgVUtfR0JQX0xvY2FsOiB7XG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQyBCcml0YWluIEJyYW5jaCcsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMic6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMyc6IDEyMzQ1NixcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ1NvcnQgQ29kZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNCc6ICcxMi0zNC01NicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS02JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNic6ICcnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgIH0sXG4gICAgVUtfU1dJRlQ6IHtcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMSc6ICdIU0JDJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0zJzogJ0FjY291bnQgTnVtYmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTIzNDU2LFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnSUJBTiBDb2RlJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogJ1hYNTkyMDcwODAwOTAwNjM3OCcsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS02JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNic6ICcnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgIH0sXG4gICAgU0dfR0lSTzoge1xuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTEnOiAnQmFuayBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0hTQkMnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTInOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0yJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTMnOiAxMjM0NTYsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNCc6ICdCYW5rIENvZGUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiA3MTcxMDgyLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTUnOiAnU1dJRlQgQ29kZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNSc6ICdIU0JDU0cyUzIwMicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNic6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTYnOiAnJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0xJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMic6ICdBZGRyZXNzJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnTGV2ZWwgNy8yMCBXaWxsaWFtIFN0LiwgTWVsYm91cm5lLCBWSUMgMTIzNCwgQXVzdHJhbGlhJyxcbiAgICB9LFxuICAgIFNHX1JUR1M6IHtcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMSc6ICdIU0JDJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0zJzogJ0FjY291bnQgTnVtYmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTIzNDU2LFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnQmFuayBDb2RlJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogNzE3MTA4MixcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS01JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnSFNCQ1NHMlMyMDInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTYnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS02JzogJycsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0xJzogJ05hbWUnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMSc6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTInOiAnQWRkcmVzcycsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0yJzogJ0xldmVsIDcvMjAgV2lsbGlhbSBTdC4sIE1lbGJvdXJuZSwgVklDIDEyMzQsIEF1c3RyYWxpYScsXG4gICAgfSxcbiAgICBTR19GQVNUOiB7XG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMic6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMyc6IDEyMzQ1NixcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ0JhbmsgQ29kZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNCc6IDcxNzEwODIsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICdTV0lGVCBDb2RlJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS01JzogJ0hTQkNTRzJTMjAyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS02JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNic6ICcnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgIH0sXG4gICAgU0dfU1dJRlQ6IHtcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0xJzogJ0JhbmsgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMSc6ICdIU0JDJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0yJzogJ0FjY291bnQgTmFtZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMic6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS0zJzogJ0FjY291bnQgTnVtYmVyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0zJzogMTIzNDU2LFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTQnOiAnU1dJRlQgQ29kZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNCc6ICdIU0JDWFgyUzIwMicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNSc6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS02JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNic6ICcnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgIH0sXG4gICAgR2VybWFueV9Mb2NhbDoge1xuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTEnOiAnQmFuayBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0hTQkMnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTInOiAnQWNjb3VudCBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0yJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTMnOiAnQWNjb3VudCBOdW1iZXInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTMnOiAxMjM0NTYsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNCc6ICdTV0lGVCBDb2RlJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS00JzogJ0hTQkNYWDJTMjAyJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS01JzogJ0lCQU4gQ29kZScsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtNSc6ICdYWDU5MjA3MDgwMDkwMDYzNzgnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTYnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS02JzogJycsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0xJzogJ05hbWUnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMSc6ICdUaG9tYXMgTGVhdmVyJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTInOiAnQWRkcmVzcycsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0yJzogJ0xldmVsIDcvMjAgV2lsbGlhbSBTdC4sIE1lbGJvdXJuZSwgVklDIDEyMzQsIEF1c3RyYWxpYScsXG4gICAgfSxcbiAgICBHZXJtYW55X1NXSUZUOiB7XG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMic6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMyc6IDEyMzQ1NixcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiAnSFNCQ1hYMlMyMDInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTUnOiAnSUJBTiBDb2RlJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS01JzogJ1hYNTkyMDcwODAwOTAwNjM3OCcsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNic6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTYnOiAnJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0xJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMic6ICdBZGRyZXNzJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnTGV2ZWwgNy8yMCBXaWxsaWFtIFN0LiwgTWVsYm91cm5lLCBWSUMgMTIzNCwgQXVzdHJhbGlhJyxcbiAgICB9LFxuICAgIEJyYXppbF9Mb2NhbDoge1xuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTEnOiAnQmFuayBOYW1lJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS0xJzogJ0JhbmNvIGRvIEJyYXNpbCcsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMic6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMyc6IDEyMzQ1Njc4OTAsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNCc6ICdCYW5rIENvZGUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiAxMjM0LFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTUnOiAnQnJhbmNoIENvZGUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTUnOiAxLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTYnOiAnQWNjb3VudCBUeXBlJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS02JzogJ1NhdmluZ3MnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMSc6ICdOYW1lJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTEnOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC10aXRsZS0yJzogJ0FkZHJlc3MnLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdmFsdWUtMic6ICdMZXZlbCA3LzIwIFdpbGxpYW0gU3QuLCBNZWxib3VybmUsIFZJQyAxMjM0LCBBdXN0cmFsaWEnLFxuICAgIH0sXG4gICAgQnJhemlsX1NXSUZUOiB7XG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMic6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMyc6IDEyMzQ1NixcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiAnSFNCQ1hYMlMyMDInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTUnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS01JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNic6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTYnOiAnJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0xJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMic6ICdBZGRyZXNzJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnTGV2ZWwgNy8yMCBXaWxsaWFtIFN0LiwgTWVsYm91cm5lLCBWSUMgMTIzNCwgQXVzdHJhbGlhJyxcbiAgICB9LFxuICAgIFNBX1NXSUZUOiB7XG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMSc6ICdCYW5rIE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTEnOiAnSFNCQycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMic6ICdBY2NvdW50IE5hbWUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTInOiAnVGhvbWFzIExlYXZlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtMyc6ICdBY2NvdW50IE51bWJlcicsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdmFsdWUtMyc6IDEyMzQ1NixcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC10aXRsZS00JzogJ1NXSUZUIENvZGUnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTQnOiAnSFNCQ1hYMlMyMDInLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXRpdGxlLTUnOiAnJyxcbiAgICAgICAgJ2F3eC1iYW5rLWRldGFpbC12YWx1ZS01JzogJycsXG4gICAgICAgICdhd3gtYmFuay1kZXRhaWwtdGl0bGUtNic6ICcnLFxuICAgICAgICAnYXd4LWJhbmstZGV0YWlsLXZhbHVlLTYnOiAnJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXRpdGxlLTEnOiAnTmFtZScsXG4gICAgICAgICdhd3gtcmVjaXBpZW50LWRldGFpbC12YWx1ZS0xJzogJ1Rob21hcyBMZWF2ZXInLFxuICAgICAgICAnYXd4LXJlY2lwaWVudC1kZXRhaWwtdGl0bGUtMic6ICdBZGRyZXNzJyxcbiAgICAgICAgJ2F3eC1yZWNpcGllbnQtZGV0YWlsLXZhbHVlLTInOiAnTGV2ZWwgNy8yMCBXaWxsaWFtIFN0LiwgTWVsYm91cm5lLCBWSUMgMTIzNCwgQXVzdHJhbGlhJyxcbiAgICB9LFxufTtcbiIsImV4cG9ydCB2YXIgVUlBY3Rpb25UeXBlcztcbihmdW5jdGlvbiAoVUlBY3Rpb25UeXBlcykge1xuICAgIFVJQWN0aW9uVHlwZXNbXCJVUExPQURcIl0gPSBcIlVQTE9BRFwiO1xuICAgIFVJQWN0aW9uVHlwZXNbXCJDTE9TRVwiXSA9IFwiQ0xPU0VcIjtcbiAgICBVSUFjdGlvblR5cGVzW1wiTk9USUZZXCJdID0gXCJOT1RJRllcIjtcbiAgICBVSUFjdGlvblR5cGVzW1wiUkVHSU9OQUxfQVNTRVRTXCJdID0gXCJSRUdJT05BTF9BU1NFVFNcIjtcbn0pKFVJQWN0aW9uVHlwZXMgfHwgKFVJQWN0aW9uVHlwZXMgPSB7fSkpO1xuZXhwb3J0IHZhciBXb3JrZXJBY3Rpb25UeXBlcztcbihmdW5jdGlvbiAoV29ya2VyQWN0aW9uVHlwZXMpIHtcbiAgICBXb3JrZXJBY3Rpb25UeXBlc1tcIlJFR0lPTkFMX0FTU0VUU19OT1RJRllcIl0gPSBcIlJFR0lPTkFMX0FTU0VUU19OT1RJRllcIjtcbn0pKFdvcmtlckFjdGlvblR5cGVzIHx8IChXb3JrZXJBY3Rpb25UeXBlcyA9IHt9KSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgYmFsYW5jZUxpc3RPcmRlciwgYmFsYW5jZUxpc3RPcmRlcjIsIGJhbGFuY2VMaXN0T3JkZXIzLCBiYWxhbmNlTGlzdE9yZGVyNCwgZ2JFeGNoYW5nZVJhdGUsIHBheW1lbnRNZXRob2RJY29uc0NoZWNrT3V0LCB0YWJsZVN0cmVhbUxpdmVPcmRlciwgdXNFeGNoYW5nZVJhdGUsIHZpc2FfdmFyaWFudCwgfSBmcm9tICcuL2xvZ2ljL3JlZ2lvbmFsRGF0YSc7XG4vKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IHsgcmVnaW9uYWxEYXRhLCBnZW5lcmF0ZUJhY2tncm91bmRWYWx1ZXMsIGJhY2tncm91bmREYXRhLCB0YWJ1bGFyRGF0YSwgZ2FIZXJvT3JpZ2luYWxUYWJsZU9yZGVyLCBnYUhlcm9UYWJsZVZhbHVlcywgZmxhZ3MsIGhvbWVwYWdlV2FsbGV0T3JpZ2luYWxUYWJsZU9yZGVyLCBob21lcGFnZUJhbmtBY2NvdW50VGFibGVPcmRlciwgY3VycmVuY3ksIGN1cnJlbmN5Q29kZSwgcGF5bWVudE1ldGhvZEljb25zLCBhbGxQYXltZW50VmFyaWFudHMsIGNhcmRzLCBjdXJyZW5jeU5hbWUsIH0gZnJvbSAnLi9sb2dpYy9yZWdpb25hbERhdGEnO1xuaW1wb3J0IHsgVUlBY3Rpb25UeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuLy8gY29uc3QgY291bnRyeUxpc3QgPSBPYmplY3Qua2V5cyhyZWdpb25hbERhdGEpO1xuLy8gY29uc3QgY291bnRyeUxpc3QgPSBbJ0FVJywgJ0NBJywgJ0VVJywgJ1VLJywgJ1NHJywgJ05aJywgJ0pQJywgJ0hLJywgJ0NOJ107XG4vLyBjb25zdCBjb3VudHJ5TGlzdCA9IFsnQVUnLCAnQ0EnLCAnSlAnLCAnSEsnXTtcbi8vIGNvbnN0IGNvdW50cnlMaXN0ID0gWydBVScsICdDQScsICdFVScsICdVSycsICdTRyddO1xuLy8gY29uc3QgY291bnRyeUxpc3QgPSBbJ05aJywgJ0pQJywgJ0hLJywgJ0NOJywgJ01ZJ107XG5jb25zdCBFTUZJX1ggPSAxMDQ5NjtcbmNvbnN0IEVNRklfWSA9IDkwNjI7XG5jb25zdCBDT1JFX0FQSVggPSA2Mjc5O1xuY29uc3QgQ09SRUFQSVkgPSAxNDY5NjtcbmNvbnN0IEhPTUVYID0gODczMztcbmNvbnN0IEhPTUVZID0gLTEyOTQ7XG5jb25zdCBCQVggPSAxMDEzNTtcbmNvbnN0IEJBWSA9IDE0ODEyO1xuY29uc3QgWCA9IHtcbiAgICBFTUZJOiAxMDQ5NixcbiAgICBDT1JFX0FQSTogNjI3OSxcbiAgICAvLyBIT01FOiA4NzMzLFxuICAgIC8vIEJBOiAxMDEzNSxcbiAgICBIT01FOiAtOTMyNCxcbn07XG5jb25zdCBZID0ge1xuICAgIEVNRkk6IDkwNjIsXG4gICAgQ09SRV9BUEk6IDE0Njk2LFxuICAgIC8vIEhPTUU6IC0xMjk0LFxuICAgIC8vIEJBOiAxNDgxMixcbiAgICBIT01FOiAtNDM0MCxcbn07XG4vLyBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIHBsdWdpbiBVSVxuZnVuY3Rpb24gcG9zdE1lc3NhZ2UoeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGUsIHBheWxvYWQgfSk7XG59XG5jb25zdCBmbGFnVmFsdWVzID0ge307XG5jb25zdCBwYXltZW50VmFyaWFudHMgPSB7fTtcbmNvbnN0IGNhcmRWYXJpYW50cyA9IHt9O1xuY29uc3QgdmlzYVZhcmlhbnREYXJrID0ge307XG5jb25zdCB2aXNhVmFyaWFudExpZ2h0ID0ge307XG5jb25zdCBsb2FkRm9udHMgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnQ2lyY3VsYXJYWCcsIHN0eWxlOiAnUmVndWxhcicgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ0NpcmN1bGFyWFgnLCBzdHlsZTogJ01lZGl1bScgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ0NpcmN1bGFyWFgnLCBzdHlsZTogJ0JvbGQnIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdTRiBNb25vJywgc3R5bGU6ICdTZW1pYm9sZCcgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIHN0eWxlOiAnU2VtaUJvbGQnIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBzdHlsZTogJ0JvbGQnIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdIZWx2ZXRpY2EnLCBzdHlsZTogJ0JvbGQnIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdCZWxncmFubycsIHN0eWxlOiAnUmVndWxhcicgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ01vbnRzZXJyYXQnLCBzdHlsZTogJ0JvbGQnIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdJbnRlcicsIHN0eWxlOiAnUmVndWxhcicgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ0ludGVyJywgc3R5bGU6ICdNZWRpdW0nIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdOb3RvIFNhbnMgTW9ubycsIHN0eWxlOiAnU2VtaUJvbGQnIH0pO1xuICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6ICdNb250c2VycmF0Jywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnTWFucm9wZScsIHN0eWxlOiAnQm9sZCcgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ0NpdXRhZGVsbGEnLCBzdHlsZTogJ1NlbWlCb2xkJyB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnQ2l1dGFkZWxsYScsIHN0eWxlOiAnUmVndWxhcicgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ0NpdXRhZGVsbGEnLCBzdHlsZTogJ01lZGl1bScgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1BvcHBpbnMnLCBzdHlsZTogJ1NlbWlCb2xkJyB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnUG9wcGlucycsIHN0eWxlOiAnTWVkaXVtJyB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnU0YgUHJvIFRleHQnLCBzdHlsZTogJ01lZGl1bScgfSk7XG4gICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogJ1NGIFBybyBUZXh0Jywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnU0YgUHJvJywgc3R5bGU6ICdSZWd1bGFyJyB9KTtcbiAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiAnU0YgUHJvJywgc3R5bGU6ICdNZWRpdW0nIH0pO1xuICAgIGNvbnNvbGUubG9nKCdGRVRDSElORyBNQVNURVIgQVNTRVRTJyk7XG4gICAgLy8gaWYgKCF3aW5kb3cuZmlnbWFfbWFzdGVyX2Fzc2V0cykge1xuICAgIGNvbnN0IG5vZGVzID0geWllbGQgZmlnbWEucm9vdC5maW5kQWxsKChub2RlKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZmxhZ3MpLmluY2x1ZGVzKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lKSB8fFxuICAgICAgICAgICAgKG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCcgJiZcbiAgICAgICAgICAgICAgICBhbGxQYXltZW50VmFyaWFudHMuaW5jbHVkZXMoKF9hID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZXBsYWNlKCdtZXRob2Q9JywgJycpKSkgfHxcbiAgICAgICAgICAgIChub2RlLnR5cGUgPT09ICdDT01QT05FTlQnICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhjYXJkcykuaW5jbHVkZXMoKF9iID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlKCdQcm9wZXJ0eSAxPScsICcnKSkpIHx8XG4gICAgICAgICAgICAobm9kZS50eXBlID09PSAnQ09NUE9ORU5UJyAmJlxuICAgICAgICAgICAgICAgIFsnQ29tbWVyY2lhbCcsICdCdXNpbmVzcyddLmluY2x1ZGVzKChfYyA9IG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucmVwbGFjZSgnQ29sb3I9TGlnaHQsIENvbW0gdnMgQml6PScsICcnKSkpIHx8XG4gICAgICAgICAgICAobm9kZS50eXBlID09PSAnQ09NUE9ORU5UJyAmJlxuICAgICAgICAgICAgICAgIFsnQ29tbWVyY2lhbCcsICdCdXNpbmVzcyddLmluY2x1ZGVzKChfZCA9IG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucmVwbGFjZSgnQ29sb3I9RGFyaywgQ29tbSB2cyBCaXo9JywgJycpKSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cobm9kZXMpO1xuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZmxhZ3MpLmluY2x1ZGVzKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lKSAmJiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLnR5cGUpID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgICAgICBmbGFnVmFsdWVzW25vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lXSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWxsUGF5bWVudFZhcmlhbnRzLmluY2x1ZGVzKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lLnJlcGxhY2UoJ21ldGhvZD0nLCAnJykpKSB7XG4gICAgICAgICAgICBwYXltZW50VmFyaWFudHNbbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUucmVwbGFjZSgnbWV0aG9kPScsICcnKV0gPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE9iamVjdC52YWx1ZXMoY2FyZHMpLmluY2x1ZGVzKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lLnJlcGxhY2UoJ1Byb3BlcnR5IDE9JywgJycpKSkge1xuICAgICAgICAgICAgY2FyZFZhcmlhbnRzW25vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lLnJlcGxhY2UoJ1Byb3BlcnR5IDE9JywgJycpXSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoWydDb21tZXJjaWFsJywgJ0J1c2luZXNzJ10uaW5jbHVkZXMobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUucmVwbGFjZSgnQ29sb3I9TGlnaHQsIENvbW0gdnMgQml6PScsICcnKSkpIHtcbiAgICAgICAgICAgIHZpc2FWYXJpYW50TGlnaHRbbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUucmVwbGFjZSgnQ29sb3I9TGlnaHQsIENvbW0gdnMgQml6PScsICcnKV0gPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFsnQ29tbWVyY2lhbCcsICdCdXNpbmVzcyddLmluY2x1ZGVzKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lLnJlcGxhY2UoJ0NvbG9yPURhcmssIENvbW0gdnMgQml6PScsICcnKSkpIHtcbiAgICAgICAgICAgIHZpc2FWYXJpYW50RGFya1tub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZS5yZXBsYWNlKCdDb2xvcj1EYXJrLCBDb21tIHZzIEJpej0nLCAnJyldID0gbm9kZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdQUFBQJywgZmxhZ1ZhbHVlcywgcGF5bWVudFZhcmlhbnRzLCBjYXJkVmFyaWFudHMsIHZpc2FWYXJpYW50TGlnaHQsIHZpc2FWYXJpYW50RGFyayk7XG4gICAgLy8gICB3aW5kb3cuZmlnbWFfbWFzdGVyX2Fzc2V0cyA9IHtcbiAgICAvLyAgICAgZmxhZ1ZhbHVlcyxcbiAgICAvLyAgICAgcGF5bWVudFZhcmlhbnRzLFxuICAgIC8vICAgICBjYXJkVmFyaWFudHMsXG4gICAgLy8gICB9O1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBmbGFnVmFsdWVzID0gd2luZG93Py5maWdtYV9tYXN0ZXJfYXNzZXRzPy5mbGFnVmFsdWVzO1xuICAgIC8vICAgcGF5bWVudFZhcmlhbnRzID0gd2luZG93Py5maWdtYV9tYXN0ZXJfYXNzZXRzPy5wYXltZW50VmFyaWFudHM7XG4gICAgLy8gICBjYXJkVmFyaWFudHMgPSB3aW5kb3c/LmZpZ21hX21hc3Rlcl9hc3NldHM/LmNhcmRWYXJpYW50cztcbiAgICAvLyB9XG59KTtcbmNvbnN0IGNvdW50RGVjaW1hbHMgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnNvbGUubG9nKCdURVNUIFJBVEU6JywgdmFsKTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiYgU3RyaW5nKHZhbCArIDAuMDEpLmVuZHNXaXRoKCcuMDEnKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnVEVTVCBSQVRFMjonLCB2YWwpO1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1RFU1QgUkFURTM6JywgdmFsKTtcbiAgICAvLyBpZiAoTWF0aC5mbG9vcih2YWwpID09PSBwYXJzZUZsb2F0KHZhbCkpIHJldHVybiAwO1xuICAgIGNvbnNvbGUubG9nKCdURVNUIFJBVEU0OicsIHZhbCk7XG4gICAgcmV0dXJuICgoX2EgPSBTdHJpbmcodmFsKS5zcGxpdCgnLicpWzFdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSB8fCAwO1xufTtcbmNvbnN0IGZvcm1hdCA9ICh2YWwpID0+IHtcbiAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKTtcbn07XG5jb25zdCBmaXhDdXJyZW5jeUFtb3VudCA9IChub2RlLCBjb3VudHJ5Q29kZSwgd2l0aEFtb3VudCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qLCBfaywgX2wsIF9tO1xuICAgIGlmICghd2l0aEFtb3VudCkge1xuICAgICAgICBub2RlLmNoYXJhY3RlcnMgPVxuICAgICAgICAgICAgJycgK1xuICAgICAgICAgICAgICAgICgoX2MgPSAoX2IgPSAoX2EgPSBub2RlLmNoYXJhY3RlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZXBsYWNlQWxsKC9VU0R8RVVSfEdCUHxBVUR8SEtEfFNHRHxDTll8TVlSfEpQWXxOWkR8Q0FEL2dpLCBjdXJyZW5jeVtjb3VudHJ5Q29kZV0pKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVwbGFjZUFsbCgvXFwkL2dpLCBjdXJyZW5jeUNvZGVbY291bnRyeUNvZGVdKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnJlcGxhY2VBbGwoL0dyZWF0IEJyaXRhaW4gUG91bmR8QXVzdHJhbGlhbiBEb2xsYXJ8U2luZ2Fwb3JlIERvbGxhcnxFdXJvfFVuaXRlZCBTdGF0ZXMgRG9sbGFyfEhvbmcgS29uZyBEb2xsYXJ8Q2hpbmVzZSBZdWFufE1hbGF5c2lhbiBSaW5naXR8SmFwYW5lc2UgWWVufE5ldyBaZWFsYW5kIERvbGxhcnxDYW5hZGlhbiBEb2xsYXIvZ2ksIGN1cnJlbmN5TmFtZVtjb3VudHJ5Q29kZV0pLnJlcGxhY2VBbGwoJyB1bmRlZmluZWQnLCAnJykpIHx8ICcgJztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpc1JhdGUgPSAoX2QgPSBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmVuZHNXaXRoKCctcmF0ZScpO1xuICAgIGNvbnN0IGV4Y2hhbmdlUmF0ZSA9IHVzRXhjaGFuZ2VSYXRlO1xuICAgIGNvbnN0IG9sZEFtb3VudCA9ICgoX2cgPSAoX2YgPSAoX2UgPSBub2RlLmNoYXJhY3RlcnMpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5yZXBsYWNlQWxsKC9VU0R8RVVSfEdCUHxBVUR8SEtEfFNHRHxDTll8TVlSfEpQWXxOWkR8Q0FEL2dpLCAnJykpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5yZXBsYWNlQWxsKC9cXCQvZ2ksICcnKSkgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLnJlcGxhY2VBbGwoL0dyZWF0IEJyaXRhaW4gUG91bmR8QXVzdHJhbGlhbiBEb2xsYXJ8U2luZ2Fwb3JlIERvbGxhcnxFdXJvfFVuaXRlZCBTdGF0ZXMgRG9sbGFyfEhvbmcgS29uZyBEb2xsYXJ8Q2hpbmVzZSBZdWFufE1hbGF5c2lhbiBSaW5naXR8SmFwYW5lc2UgWWVufE5ldyBaZWFsYW5kIERvbGxhcnxDYW5hZGlhbiBEb2xsYXIvZ2ksICcnKS5yZXBsYWNlQWxsKCcgdW5kZWZpbmVkJywgJycpLnRyaW0oKSkgfHwgJyAnO1xuICAgIGNvbnN0IHJvdW5kID0gY291bnREZWNpbWFscyhvbGRBbW91bnQpO1xuICAgIC8vIGNvbnNvbGUubG9nKFxuICAgIC8vICAgJ0FBQUE1JyxcbiAgICAvLyAgIG5vZGUubmFtZSxcbiAgICAvLyAgIGlzUmF0ZSxcbiAgICAvLyAgIG9sZEFtb3VudCxcbiAgICAvLyAgIHBhcnNlRmxvYXQob2xkQW1vdW50KSxcbiAgICAvLyAgIHBhcnNlRmxvYXQoZXhjaGFuZ2VSYXRlW2NvdW50cnlDb2RlXSksXG4gICAgLy8gICByb3VuZCxcbiAgICAvLyApO1xuICAgIGNvbnN0IG5ld0Ftb3VudCA9IGlzUmF0ZVxuICAgICAgICA/IHBhcnNlRmxvYXQoKHBhcnNlRmxvYXQob2xkQW1vdW50ID09PSBudWxsIHx8IG9sZEFtb3VudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2xkQW1vdW50LnJlcGxhY2UoJywnLCAnJykpICogcGFyc2VGbG9hdChnYkV4Y2hhbmdlUmF0ZVsnVVMnXSkpIC9cbiAgICAgICAgICAgIHBhcnNlRmxvYXQoZXhjaGFuZ2VSYXRlW2NvdW50cnlDb2RlXSkpLnRvRml4ZWQocm91bmQpXG4gICAgICAgIDogZm9ybWF0KHBhcnNlRmxvYXQoKHBhcnNlRmxvYXQob2xkQW1vdW50ID09PSBudWxsIHx8IG9sZEFtb3VudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2xkQW1vdW50LnJlcGxhY2UoJywnLCAnJykpICogcGFyc2VGbG9hdChleGNoYW5nZVJhdGVbY291bnRyeUNvZGVdKSkgL1xuICAgICAgICAgICAgcGFyc2VGbG9hdChnYkV4Y2hhbmdlUmF0ZVsnVVMnXSkpLnRvRml4ZWQocm91bmQpKTtcbiAgICBpZiAoaXNSYXRlKSB7XG4gICAgICAgIG5vZGUuY2hhcmFjdGVycyA9ICcnICsgKChfaCA9IG5vZGUuY2hhcmFjdGVycykgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLnJlcGxhY2Uob2xkQW1vdW50LCBuZXdBbW91bnQpKSB8fCAnICc7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbm9kZS5jaGFyYWN0ZXJzID1cbiAgICAgICAgJycgK1xuICAgICAgICAgICAgKChfbSA9IChfbCA9IChfayA9IChfaiA9IG5vZGUuY2hhcmFjdGVycykgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLnJlcGxhY2VBbGwoL1VTRHxFVVJ8R0JQfEFVRHxIS0R8U0dEfENOWXxNWVJ8SlBZfE5aRHxDQUQvZ2ksIGN1cnJlbmN5W2NvdW50cnlDb2RlXSkpID09PSBudWxsIHx8IF9rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfay5yZXBsYWNlQWxsKC9cXCQvZ2ksIGN1cnJlbmN5Q29kZVtjb3VudHJ5Q29kZV0pKSA9PT0gbnVsbCB8fCBfbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2wucmVwbGFjZUFsbCgvR3JlYXQgQnJpdGFpbiBQb3VuZHxBdXN0cmFsaWFuIERvbGxhcnxTaW5nYXBvcmUgRG9sbGFyfEV1cm98VW5pdGVkIFN0YXRlcyBEb2xsYXJ8SG9uZyBLb25nIERvbGxhcnxDaGluZXNlIFl1YW58TWFsYXlzaWFuIFJpbmdpdHxKYXBhbmVzZSBZZW58TmV3IFplYWxhbmQgRG9sbGFyfENhbmFkaWFuIERvbGxhci9naSwgY3VycmVuY3lOYW1lW2NvdW50cnlDb2RlXSkpID09PSBudWxsIHx8IF9tID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbS5yZXBsYWNlKG9sZEFtb3VudCwgbmV3QW1vdW50KSkgfHwgJyAnO1xufTtcbmZ1bmN0aW9uIHBhcnRpdGlvbihhcnJheSwgaXNWYWxpZCkge1xuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKFtwYXNzLCBmYWlsXSwgZWxlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXNWYWxpZChlbGVtKSA/IFtbLi4ucGFzcywgZWxlbV0sIGZhaWxdIDogW3Bhc3MsIFsuLi5mYWlsLCBlbGVtXV07XG4gICAgfSwgW1tdLCBbXV0pO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVBc3NldHMocGF5bG9hZCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnUFBQJywgcGF5bG9hZCk7XG4gICAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gWydVUycsICdDQScsICdFVScsICdVSycsICdTRycsICdOWicsICdKUCcsICdISycsICdDTiddO1xuICAgICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IG1zZyA9ICdGZXRjaGluZyBtYXN0ZXIgZGF0YSBhbmQgZ2VuZXJhdGluZyBhc3NldHMgLi4uJztcbiAgICAgICAgZmlnbWEuc2hvd1VJKG1zZyk7XG4gICAgICAgIHlpZWxkIGxvYWRGb250cygpO1xuICAgICAgICAvLyBmaWdtYS5zaG93VUkoJ0hFTExPJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkFsbCA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5maWx0ZXIoKG5vZGUpID0+IHsgdmFyIF9hOyBcbiAgICAgICAgLy8gbm9kZS5uYW1lPy5zdGFydHNXaXRoKCdCQS0nKSB8fFxuICAgICAgICAvLyBub2RlLm5hbWU/LnN0YXJ0c1dpdGgoJ2NvcmUgQVBJLScpIHx8XG4gICAgICAgIC8vIG5vZGUubmFtZT8uc3RhcnRzV2l0aCgnQ29yZSBBUEktJykgfHxcbiAgICAgICAgLy8gbm9kZS5uYW1lPy5zdGFydHNXaXRoKCdlbWZpLScpIHx8XG4gICAgICAgIC8vIG5vZGUubmFtZT8uc3RhcnRzV2l0aCgnbW9iLScpIHx8XG4gICAgICAgIC8vIG5vZGUubmFtZT8uc3RhcnRzV2l0aCgnZmVhcnVyZWQtJykgfHxcbiAgICAgICAgLy8gbm9kZS5uYW1lPy5zdGFydHNXaXRoKCdmZWF0dXJlZC0nKSB8fFxuICAgICAgICByZXR1cm4gKF9hID0gbm9kZS5uYW1lKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3RhcnRzV2l0aCgnYXd4LScpOyB9KTtcbiAgICAgICAgY29uc3QgcGFnZU5hbWUgPSBmaWdtYS5jdXJyZW50UGFnZS5uYW1lO1xuICAgICAgICBjb25zb2xlLmxvZygnUFBQUFAsJywgcGFnZU5hbWUpO1xuICAgICAgICBsZXQgTUFJTl9YLCB5O1xuICAgICAgICAvLyBpZiAocGFnZU5hbWUuaW5jbHVkZXMoJ0NvcmUnKSkge1xuICAgICAgICAvLyAgIE1BSU5fWCA9IFguQ09SRV9BUEk7XG4gICAgICAgIC8vICAgeSA9IFkuQ09SRV9BUEk7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAocGFnZU5hbWUuaW5jbHVkZXMoJ0hvbWVwYWdlcycpKSB7XG4gICAgICAgIC8vICAgTUFJTl9YID0gWC5IT01FO1xuICAgICAgICAvLyAgIHkgPSBZLkhPTUU7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAocGFnZU5hbWUuaW5jbHVkZXMoJ0JBJykpIHtcbiAgICAgICAgLy8gICBNQUlOX1ggPSBYLkJBO1xuICAgICAgICAvLyAgIHkgPSBZLkJBO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKHBhZ2VOYW1lLmluY2x1ZGVzKCdFbWZpJykpIHtcbiAgICAgICAgLy8gICBNQUlOX1ggPSBYLkVNRkk7XG4gICAgICAgIC8vICAgeSA9IFkuRU1GSTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICBNQUlOX1ggPSBYLkhPTUU7XG4gICAgICAgIC8vICAgeSA9IFkuSE9NRTtcbiAgICAgICAgLy8gfVxuICAgICAgICBNQUlOX1ggPSAxMDQxNjtcbiAgICAgICAgeSA9IC0xMDMwNDtcbiAgICAgICAgLy8gY29uc3QgTUFJTl9YID0gQ09SRV9BUElYO1xuICAgICAgICAvLyBsZXQgeSA9IENPUkVBUElZOyAvLyAtMzA1NztcbiAgICAgICAgbGV0IHggPSBNQUlOX1g7IC8vIDg5NjEsXG4gICAgICAgIGNvbnN0IFtub25Nb2IsIG1vYl0gPSBwYXJ0aXRpb24oc2VsZWN0aW9uQWxsLCAobm9kZSkgPT4geyB2YXIgX2E7IHJldHVybiAhKChfYSA9IG5vZGUubmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0YXJ0c1dpdGgoJ2F3eC1tb2InKSk7IH0pO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBbLi4ubm9uTW9iLCAuLi5tb2JdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBQUFwiLCBtc2cubWV0YWRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZygnVE9UQUwgU0VMRUNUSU9OUycsIHNlbGVjdGlvbi5sZW5ndGgpO1xuICAgICAgICBjb25zdCBhbGxEeW5hbWljTm9kZXMgPSBbXTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZvckVhY2goKHgpID0+IHgudHlwZSA9PT0gJ0ZSQU1FJyAmJlxuICAgICAgICAgICAgYWxsRHluYW1pY05vZGVzLnB1c2goLi4ueC5maW5kQWxsKChub2RlKSA9PiBub2RlLm5hbWUuc3RhcnRzV2l0aCgnYXd4LScpKSkpO1xuICAgICAgICBjb25zdCBhbGxEeW5hbWljS2V5cyA9IGFsbER5bmFtaWNOb2RlcyA9PT0gbnVsbCB8fCBhbGxEeW5hbWljTm9kZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsbER5bmFtaWNOb2Rlcy5tYXAoKHgpID0+IHgubmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNTU0nLCBhbGxEeW5hbWljS2V5cyk7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRWYWx1ZXNDYWNoZSA9IHt9O1xuICAgICAgICAvLyBjb25zdCB5ID0gNTAwMDtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBzZWxlY3Rpb24ubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ29tcG9uZW50ID0gc2VsZWN0aW9uW3BdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJ5TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG1zZyA9IGBHZW5lcmF0ZWQgJHsocCArIDEpICogKGkgKyAxKX0vJHtzZWxlY3Rpb24ubGVuZ3RoICogY291bnRyeUxpc3QubGVuZ3RofWA7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29tcG9uZW50ID0gc2VsZWN0ZWRDb21wb25lbnQuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5Q29kZSA9IGNvdW50cnlMaXN0W2ldO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUVFRUVFQnLCBuZXdDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIG5ld0NvbXBvbmVudC5uYW1lID1cbiAgICAgICAgICAgICAgICAgICAgKChfYSA9IHNlbGVjdGVkQ29tcG9uZW50ID09PSBudWxsIHx8IHNlbGVjdGVkQ29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZENvbXBvbmVudC5uYW1lKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVwbGFjZSgnLUFVLWxvY2FsaXplZCcsICcnKS5yZXBsYWNlKCctVVMtbG9jYWxpemVkJywgJycpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeUNvZGUudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnLWxvY2FsaXplZCc7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDb21wb25lbnQgPT09IG51bGwgfHwgc2VsZWN0ZWRDb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQ29tcG9uZW50Lm5hbWUsICdMTExMTEw0JywgY291bnRyeUNvZGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHJlZ2lvbmFsRGF0YVtjb3VudHJ5Q29kZV07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDb21wb25lbnQgPT09IG51bGwgfHwgc2VsZWN0ZWRDb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQ29tcG9uZW50Lm5hbWUsICdMTExMTEw4JywgY291bnRyeUNvZGUsIG5ld0NvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsQ2xvbmVkRHluYW1pY05vZGVzID0gbmV3Q29tcG9uZW50LmZpbmRBbGwoKG5vZGUpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdGFydHNXaXRoKCdhd3gtJyk7IH0pO1xuICAgICAgICAgICAgICAgIC8vIER5bmFtaWMgY3VycmVuY2llc1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5bmFtaWNDdXJyZW5jeU5vZGVzID0gYWxsQ2xvbmVkRHluYW1pY05vZGVzLmZpbHRlcigobm9kZSkgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0YXJ0c1dpdGgoJ2F3eC1keW5hbWljLWN1cnJlbmN5Jyk7IH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29tcG9uZW50ID09PSBudWxsIHx8IHNlbGVjdGVkQ29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZENvbXBvbmVudC5uYW1lLCAnTExMTExMNScsIGR5bmFtaWNDdXJyZW5jeU5vZGVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkeW5hbWljQ3VycmVuY3lBbW91bnROb2RlcyA9IGFsbENsb25lZER5bmFtaWNOb2Rlcy5maWx0ZXIoKG5vZGUpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdGFydHNXaXRoKCdhd3gtZHluYW1pYy1hbW91bnQnKTsgfSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmF0ZU5vZGVzID0gYWxsQ2xvbmVkRHluYW1pY05vZGVzLmZpbHRlcigobm9kZSkgPT4gbm9kZT8ubmFtZT8uc3RhcnRzV2l0aCgnYXd4LXJhdGUnKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlzYU5vZGVzID0gYWxsQ2xvbmVkRHluYW1pY05vZGVzLmZpbHRlcigobm9kZSkgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0YXJ0c1dpdGgoJ2F3eC12aXNhJyk7IH0pO1xuICAgICAgICAgICAgICAgIHZpc2FOb2RlcyA9PT0gbnVsbCB8fCB2aXNhTm9kZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZpc2FOb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS50eXBlID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCByZXBsYWNlbWVudE5vZGUgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kT25lKChub2RlKSA9PiBub2RlPy5uYW1lID09PSB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2aXNhVmFyaWFudCA9ICgoX2EgPSBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKCdsaWdodCcpKSA/IHZpc2FWYXJpYW50TGlnaHQgOiB2aXNhVmFyaWFudERhcms7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSB2aXNhVmFyaWFudFt2aXNhX3ZhcmlhbnRbY291bnRyeUNvZGVdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnROb2RlLnR5cGUgPT09ICdJTlNUQU5DRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zd2FwQ29tcG9uZW50KHJlcGxhY2VtZW50Tm9kZS5tYWluQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVwbGFjZW1lbnROb2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTV0FQUElORyBDT01QT05FTlQnLCBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSwgcmVwbGFjZW1lbnROb2RlID09PSBudWxsIHx8IHJlcGxhY2VtZW50Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVwbGFjZW1lbnROb2RlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN3YXBDb21wb25lbnQocmVwbGFjZW1lbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlTm9kZXMgPSBhbGxDbG9uZWREeW5hbWljTm9kZXMuZmlsdGVyKChub2RlKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3RhcnRzV2l0aCgnYXd4LWNvZGUnKTsgfSk7XG4gICAgICAgICAgICAgICAgLy8gdGFibGVcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICdhd3gtYmEtZ2EtaGVyby10YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICdhd3gtaG9tZXBhZ2Utd2FsbGV0LXRhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2F3eC10YWJsZS1iYW5rLWFjY291bnQnLFxuICAgICAgICAgICAgICAgICAgICAnYXd4LXRhYmxlLXN0cmVhbS1saXZlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2F3eC10YWJsZS1iYWxhbmNlLWxpc3QnLFxuICAgICAgICAgICAgICAgICAgICAnYXd4LXRhYmxlLWJhbGFuY2UtbGlzdC0yJyxcbiAgICAgICAgICAgICAgICAgICAgJ2F3eC10YWJsZS1iYWxhbmNlLWxpc3QtMycsXG4gICAgICAgICAgICAgICAgICAgICdhd3gtdGFibGUtYmFsYW5jZS1saXN0LTQnLFxuICAgICAgICAgICAgICAgICAgICAvLyAnYXd4LXRhYmxlLXF1YW50YXMnLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJBcnJheSA9IFtcbiAgICAgICAgICAgICAgICAgICAgZ2FIZXJvT3JpZ2luYWxUYWJsZU9yZGVyLFxuICAgICAgICAgICAgICAgICAgICBob21lcGFnZVdhbGxldE9yaWdpbmFsVGFibGVPcmRlcixcbiAgICAgICAgICAgICAgICAgICAgaG9tZXBhZ2VCYW5rQWNjb3VudFRhYmxlT3JkZXIsXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlU3RyZWFtTGl2ZU9yZGVyLFxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlTGlzdE9yZGVyLFxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlTGlzdE9yZGVyMixcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZUxpc3RPcmRlcjMsXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2VMaXN0T3JkZXI0LFxuICAgICAgICAgICAgICAgICAgICAvLyB0YWJsZVF1YW50YXMsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJ1bGFyTm9kZSA9IChfYiA9IGFsbENsb25lZER5bmFtaWNOb2Rlcy5maWx0ZXIoKG5vZGUpID0+IHRhYmxlcy5pbmNsdWRlcyhub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgdGFidWxhck5vZGVSb3dzID0gdGFidWxhck5vZGUgPT09IG51bGwgfHwgdGFidWxhck5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYnVsYXJOb2RlLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lLmluY2x1ZGVzKCdhd3gtJykpO1xuICAgICAgICAgICAgICAgIGlmICh0YWJ1bGFyTm9kZVJvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCB0YWJ1bGFyTm9kZVJvd3MubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd05vZGUgPSB0YWJ1bGFyTm9kZVJvd3NbcF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbXBvbmVudCA9PT0gbnVsbCB8fCBzZWxlY3RlZENvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRDb21wb25lbnQubmFtZSwgcCwgcm93Tm9kZSA9PT0gbnVsbCB8fCByb3dOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByb3dOb2RlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyQ3VycmVuY3kgPSAoX2QgPSAoX2MgPSByb3dOb2RlID09PSBudWxsIHx8IHJvd05vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJvd05vZGUubmFtZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNwbGl0KCctJykpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5wb3AoKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnaW9uID0gY291bnRyeUNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IG9yZGVyQXJyYXlbdGFibGVzLmluZGV4T2YodGFidWxhck5vZGUgPT09IG51bGwgfHwgdGFidWxhck5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYnVsYXJOb2RlLm5hbWUpXS5pbmRleE9mKGN1ckN1cnJlbmN5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDdXJyZW5jeSA9IHRhYnVsYXJEYXRhW3JlZ2lvbl1baW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ09QUFBQUE9PTycsIGN1ckN1cnJlbmN5LCB1cGRhdGVkQ3VycmVuY3ksIGluZGV4LCByZWdpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoY3VycmVuY3kpLmluY2x1ZGVzKGN1ckN1cnJlbmN5KSAmJiBjdXJDdXJyZW5jeSAhPT0gdXBkYXRlZEN1cnJlbmN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyVmFsdWVzID0gZ2FIZXJvVGFibGVWYWx1ZXNbY3VyQ3VycmVuY3ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IGdhSGVyb1RhYmxlVmFsdWVzW3VwZGF0ZWRDdXJyZW5jeV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VyQ3VycmVuY3ksIHVwZGF0ZWRDdXJyZW5jeSwgY3VyVmFsdWVzLCBuZXdWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBGbGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxhZyA9IHJvd05vZGUgPT09IG51bGwgfHwgcm93Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcm93Tm9kZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09ICdJTlNUQU5DRScgJiYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lKSA9PT0gY3VyVmFsdWVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSBmbGFnVmFsdWVzW25ld1ZhbHVlc1swXV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFZhcmlhbnRzW25ld1ZhbHVlc1swXV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudFZhcmlhbnRzW25ld1ZhbHVlc1swXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcmVwbGFjZW1lbnROb2RlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIChub2RlKSA9PiBub2RlPy5uYW1lID09PSBuZXdWYWx1ZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZyAmJiByZXBsYWNlbWVudE5vZGUgJiYgcmVwbGFjZW1lbnROb2RlLnR5cGUgPT09ICdJTlNUQU5DRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZy5zd2FwQ29tcG9uZW50KHJlcGxhY2VtZW50Tm9kZS5tYWluQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1paWicsIHJlcGxhY2VtZW50Tm9kZSA9PT0gbnVsbCB8fCByZXBsYWNlbWVudE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlcGxhY2VtZW50Tm9kZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY3VyVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBOb2RlID0gcm93Tm9kZSA9PT0gbnVsbCB8fCByb3dOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByb3dOb2RlLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gJ1RFWFQnICYmIG5vZGUuY2hhcmFjdGVycyA9PT0gY3VyVmFsdWVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1paWjEnLCB0ZW1wTm9kZSA9PT0gbnVsbCB8fCB0ZW1wTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVtcE5vZGUuY2hhcmFjdGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE5vZGUuY2hhcmFjdGVycyA9IG5ld1ZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBOb2RlID09PSBudWxsIHx8IHRlbXBOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZW1wTm9kZS5uYW1lID0gbmV3VmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHkgKz0gc2VsZWN0ZWRDb21wb25lbnQuaGVpZ2h0ICsgMTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2RlTm9kZXMgPT09IG51bGwgfHwgY29kZU5vZGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb2RlTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBV1hfQ09ERScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgVVNESW5kZXggPSBub2RlLmNoYXJhY3RlcnMuaW5kZXhPZignVVNEJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoVVNESW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG5vZGUuaW5zZXJ0Q2hhcmFjdGVycyhVU0RJbmRleCArIDMsIGN1cnJlbmN5W2NvdW50cnlDb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG5vZGUuZGVsZXRlQ2hhcmFjdGVycyhVU0RJbmRleCwgVVNESW5kZXggKyAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEdCUEluZGV4ID0gbm9kZS5jaGFyYWN0ZXJzLmluZGV4T2YoJ0dCUCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEdCUEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaW5zZXJ0Q2hhcmFjdGVycyhHQlBJbmRleCArIDMsIGN1cnJlbmN5W2NvdW50cnlDb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kZWxldGVDaGFyYWN0ZXJzKEdCUEluZGV4LCBHQlBJbmRleCArIDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgVVNJbmRleCA9IG5vZGUuY2hhcmFjdGVycy5pbmRleE9mKCdVUycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKFVTSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG5vZGUuaW5zZXJ0Q2hhcmFjdGVycyhVU0luZGV4ICsgMiwgY291bnRyeUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBub2RlLmRlbGV0ZUNoYXJhY3RlcnMoVVNJbmRleCwgVVNJbmRleCArIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gcmF0ZU5vZGVzPy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKG5vZGU/Lm5hbWUgPT09ICdhd3gtcmF0ZScpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNlbGVjdGVkQ29tcG9uZW50Py5uYW1lLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgJ0RZTkFNSUMgQ1VSUkVOQ1kgQU1PVU5UIFJFUExBQ0VNRU5UJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5vZGUuY2hhcmFjdGVycyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGN1cnJlbmN5W2NvdW50cnlDb2RlXSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vICAgICAgIGZpeEN1cnJlbmN5QW1vdW50KG5vZGUsIGNvdW50cnlDb2RlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIGR5bmFtaWNDdXJyZW5jeUFtb3VudE5vZGVzID09PSBudWxsIHx8IGR5bmFtaWNDdXJyZW5jeUFtb3VudE5vZGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkeW5hbWljQ3VycmVuY3lBbW91bnROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUpID09PSAnYXd4LWR5bmFtaWMtYW1vdW50JyB8fCAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUpID09PSAnYXd4LWR5bmFtaWMtYW1vdW50LXJhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDb21wb25lbnQgPT09IG51bGwgfHwgc2VsZWN0ZWRDb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQ29tcG9uZW50Lm5hbWUsICdEWU5BTUlDIENVUlJFTkNZIEFNT1VOVCBSRVBMQUNFTUVOVCcsIG5vZGUuY2hhcmFjdGVycywgY3VycmVuY3lbY291bnRyeUNvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlY3VycmVuY3kgPSAoX2EgPSBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGl0KCctJykucG9wKCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhDdXJyZW5jeUFtb3VudChub2RlLCBjb3VudHJ5Q29kZSwgdHJ1ZSwgZmFsc2UsIGJhc2VjdXJyZW5jeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlTGV2ZWwgPSAoX2IgPSBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNwbGl0KCctJykucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChfYyA9IG5vZGUuY2hhcmFjdGVycykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnJlcGxhY2VBbGwoL1VTRHxFVVJ8R0JQfEFVRHxIS0R8U0dEfENOWXxNWVJ8SlBZfE5aRHxDQUQvZ2ksIHRhYnVsYXJEYXRhW2NvdW50cnlDb2RlXVtiYXNlTGV2ZWwgLSAxXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZHluYW1pY0N1cnJlbmN5Tm9kZXMgPT09IG51bGwgfHwgZHluYW1pY0N1cnJlbmN5Tm9kZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGR5bmFtaWNDdXJyZW5jeU5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDb21wb25lbnQgPT09IG51bGwgfHwgc2VsZWN0ZWRDb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQ29tcG9uZW50Lm5hbWUsICdEWU5BTUlDIENVUlJFTkNZIFJFUExBQ0VNRU5UJywgbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLmNoYXJhY3RlcnMsIGN1cnJlbmN5W2NvdW50cnlDb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09ICdhd3gtZHluYW1pYy1jdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbXBvbmVudCA9PT0gbnVsbCB8fCBzZWxlY3RlZENvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRDb21wb25lbnQubmFtZSwgJ0RZTkFNSUMgQ1VSUkVOQ1kgUkVQTEFDRU1FTlQnLCBub2RlLmNoYXJhY3RlcnMsIGN1cnJlbmN5W2NvdW50cnlDb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4Q3VycmVuY3lBbW91bnQobm9kZSwgY291bnRyeUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZUxldmVsID0gKF9hID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcGxpdCgnLScpLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2hhcmFjdGVycyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoX2IgPSBub2RlLmNoYXJhY3RlcnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlQWxsKC9VU0R8RVVSfEdCUHxBVUR8SEtEfFNHRHxDTll8TVlSfEpQWXxOWkR8Q0FEL2dpLCB0YWJ1bGFyRGF0YVtjb3VudHJ5Q29kZV1bYmFzZUxldmVsXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xMTExMTDYnLCBjb3VudHJ5Q29kZSwgbmV3Q29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZU5vZGVzID0gYWxsQ2xvbmVkRHluYW1pY05vZGVzLmZpbHRlcigobm9kZSkgPT4gT2JqZWN0LmtleXModmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IGFsbER5bmFtaWNLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBhbGxEeW5hbWljS2V5cy5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gdmFsdWVOb2Rlcy5maWx0ZXIoKG5vZGUpID0+IChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09IGtleSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID09PSBudWxsIHx8IG5vZGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbXBvbmVudCA9PT0gbnVsbCB8fCBzZWxlY3RlZENvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRDb21wb25lbnQubmFtZSwgJ3JlcGxhY2luZycsIGNvdW50cnlDb2RlLCBrZXksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09ICdhd3gtZmxhZy1pY29uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTU1NTUycsIG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lLCBmbGFnVmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ09LS0snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSAnJyArIHZhbHVlc1trZXldIHx8ICcgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUgJiYgbm9kZS50eXBlID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcmVwbGFjZW1lbnROb2RlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZSgobm9kZSkgPT4gbm9kZT8ubmFtZSA9PT0gdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IGZsYWdWYWx1ZXNbdmFsdWVzW2tleV1dIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRWYXJpYW50c1t2YWx1ZXNba2V5XV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudFZhcmlhbnRzW3ZhbHVlc1trZXldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbXBvbmVudCA9PT0gbnVsbCB8fCBzZWxlY3RlZENvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRDb21wb25lbnQubmFtZSwgJ0luc3RhbmNlIHZhbHVlIHJlcGxhY2VtZW50IG1haW4nLCByZXBsYWNlbWVudE5vZGUgPT09IG51bGwgfHwgcmVwbGFjZW1lbnROb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXBsYWNlbWVudE5vZGUubmFtZSwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50Tm9kZS50eXBlID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN3YXBDb21wb25lbnQocmVwbGFjZW1lbnROb2RlLm1haW5Db21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcGxhY2VtZW50Tm9kZS50eXBlID09PSAnQ09NUE9ORU5UJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NXQVBQSU5HIENPTVBPTkVOVCcsIG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lLCByZXBsYWNlbWVudE5vZGUgPT09IG51bGwgfHwgcmVwbGFjZW1lbnROb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXBsYWNlbWVudE5vZGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN3YXBDb21wb25lbnQocmVwbGFjZW1lbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29tcG9uZW50ID09PSBudWxsIHx8IHNlbGVjdGVkQ29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZENvbXBvbmVudC5uYW1lLCAnTExMTExMNycsIGNvdW50cnlDb2RlKTtcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIEJhY2tncm91bmQgRGF0YVxuICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmRSZWdpb25zID0gYmFja2dyb3VuZERhdGFbY291bnRyeUNvZGVdO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZWdpb25zLmZvckVhY2goKGJhY2tncm91bmRSZWdpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYmFja2dyb3VuZFZhbHVlc0NhY2hlW2JhY2tncm91bmRSZWdpb25dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kVmFsdWVzQ2FjaGVbYmFja2dyb3VuZFJlZ2lvbl0gPSBnZW5lcmF0ZUJhY2tncm91bmRWYWx1ZXMoYmFja2dyb3VuZFJlZ2lvbiwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kVmFsdWVzID0gYmFja2dyb3VuZFZhbHVlc0NhY2hlW2JhY2tncm91bmRSZWdpb25dO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBiYWNrZ3JvdW5kVmFsdWVzID0gZ2VuZXJhdGVCYWNrZ3JvdW5kVmFsdWVzKGJhY2tncm91bmRSZWdpb24sIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNTk1OTU4yJywgYmFja2dyb3VuZFZhbHVlcywgYmFja2dyb3VuZFJlZ2lvbiwgaW5kZXgsIGNvdW50cnlDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcEJhY2tncm91bmROb2RlcyA9IGFsbENsb25lZER5bmFtaWNOb2Rlcy5maWx0ZXIoKG5vZGUpID0+IE9iamVjdC5rZXlzKGJhY2tncm91bmRWYWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IGFsbER5bmFtaWNLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFja2dyb3VuZFZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4gYWxsRHluYW1pY0tleXMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gdGVtcEJhY2tncm91bmROb2Rlcy5maWx0ZXIoKG5vZGUpID0+IChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09IGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlcyA9PT0gbnVsbCB8fCBub2RlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29tcG9uZW50ID09PSBudWxsIHx8IHNlbGVjdGVkQ29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZENvbXBvbmVudC5uYW1lLCAncmVwbGFjaW5nIGJhY2tncm91bmRWYWx1ZXMnLCBiYWNrZ3JvdW5kUmVnaW9uLCBrZXksIG5vZGUsIG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbXBvbmVudCA9PT0gbnVsbCB8fCBzZWxlY3RlZENvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRDb21wb25lbnQubmFtZSwgJ09LS0syJywgbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUsIGN1cnJlbmN5W2JhY2tncm91bmRSZWdpb25zW2luZGV4XV0sIGJhY2tncm91bmRWYWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5uYW1lKSA9PT0gJ2F3eC1keW5hbWljLWN1cnJlbmN5LWJhc2UtJyArIGxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNoYXJhY3RlcnMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChfYyA9IChfYiA9IChfYSA9IG5vZGUuY2hhcmFjdGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlcGxhY2VBbGwoL1VTRHxFVVJ8R0JQfEFVRHxIS0R8U0dEfENOWXxNWVJ8SlBZfE5aRHxDQUQvZ2ksIGN1cnJlbmN5W2JhY2tncm91bmRSZWdpb25zW2luZGV4XV0pKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVwbGFjZUFsbCgvXFwkL2dpLCBjdXJyZW5jeUNvZGVbYmFja2dyb3VuZFJlZ2lvbnNbaW5kZXhdXSkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5yZXBsYWNlQWxsKC9HcmVhdCBCcml0YWluIFBvdW5kfEF1c3RyYWxpYW4gRG9sbGFyfFNpbmdhcG9yZSBEb2xsYXJ8RXVyb3xVbml0ZWQgU3RhdGVzIERvbGxhcnxIb25nIEtvbmcgRG9sbGFyfENoaW5lc2UgWXVhbnxNYWxheXNpYW4gUmluZ2l0fEphcGFuZXNlIFllbnxOZXcgWmVhbGFuZCBEb2xsYXJ8Q2FuYWRpYW4gRG9sbGFyL2dpLCBjdXJyZW5jeU5hbWVbYmFja2dyb3VuZFJlZ2lvbnNbaW5kZXhdXSkpIHx8ICcgJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2hhcmFjdGVycyA9ICcnICsgYmFja2dyb3VuZFZhbHVlc1trZXldIHx8ICcgJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlICYmIG5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSBmbGFnVmFsdWVzW2JhY2tncm91bmRWYWx1ZXNba2V5XV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRWYXJpYW50c1tiYWNrZ3JvdW5kVmFsdWVzW2tleV1dIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50VmFyaWFudHNbYmFja2dyb3VuZFZhbHVlc1trZXldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcmVwbGFjZW1lbnROb2RlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAobm9kZSkgPT4gbm9kZT8ubmFtZSA9PT0gYmFja2dyb3VuZFZhbHVlc1trZXldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnROb2RlLnR5cGUgPT09ICdJTlNUQU5DRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN3YXBDb21wb25lbnQocmVwbGFjZW1lbnROb2RlLm1haW5Db21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVwbGFjZW1lbnROb2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDb21wb25lbnQgPT09IG51bGwgfHwgc2VsZWN0ZWRDb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQ29tcG9uZW50Lm5hbWUsICdTV0FQUElORyBDT01QT05FTlQnLCBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSwgcmVwbGFjZW1lbnROb2RlID09PSBudWxsIHx8IHJlcGxhY2VtZW50Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVwbGFjZW1lbnROb2RlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3dhcENvbXBvbmVudChyZXBsYWNlbWVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29tcG9uZW50ID09PSBudWxsIHx8IHNlbGVjdGVkQ29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZENvbXBvbmVudC5uYW1lLCAnTExMTExMOCcsIGNvdW50cnlDb2RlKTtcbiAgICAgICAgICAgICAgICAvLyBmaXggcGF5bWVudCBpY29uc1xuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRJY29uUGFyZW50cyA9IGFsbENsb25lZER5bmFtaWNOb2Rlcy5maWx0ZXIoKG5vZGUpID0+IChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09ICdhd3gtcGF5bWVudC1tZXRob2RzLWljb25zJyk7XG4gICAgICAgICAgICAgICAgaWYgKHBheW1lbnRJY29uUGFyZW50cykge1xuICAgICAgICAgICAgICAgICAgICBwYXltZW50SWNvblBhcmVudHMuZm9yRWFjaCgocGF5bWVudEljb25QYXJlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBSb3cgPSBwYXltZW50SWNvblBhcmVudC5jaGlsZHJlblswXS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudEljb25QYXJlbnQuY2hpbGRyZW4uZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5yZW1vdmUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50TGlzdCA9IHBheW1lbnRNZXRob2RJY29uc1tjb3VudHJ5Q29kZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50TGlzdC5mb3JFYWNoKCh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IHRlbXBSb3cuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYW50LCBwYXltZW50VmFyaWFudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld05vZGUuc3dhcENvbXBvbmVudChwYXltZW50VmFyaWFudHNbdmFyaWFudF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRJY29uUGFyZW50LmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYW50LCBwYXltZW50VmFyaWFudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTk9UIEVYSVNUJywgZSwgcGF5bWVudEljb25QYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZml4IHBheW1lbnQgaWNvbnNcbiAgICAgICAgICAgICAgICBjb25zdCBwYXltZW50SWNvbkNoZWNrb3V0UGFyZW50cyA9IGFsbENsb25lZER5bmFtaWNOb2Rlcy5maWx0ZXIoKG5vZGUpID0+IChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubmFtZSkgPT09ICdhd3gtcGF5bWVudC1tZXRob2RzLWljb25zLWNoZWNrb3V0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHBheW1lbnRJY29uQ2hlY2tvdXRQYXJlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRJY29uQ2hlY2tvdXRQYXJlbnRzLmZvckVhY2goKHBheW1lbnRJY29uUGFyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wUm93ID0gcGF5bWVudEljb25QYXJlbnQuY2hpbGRyZW5bMF0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRJY29uUGFyZW50LmNoaWxkcmVuLmZvckVhY2goKG5vZGUpID0+IG5vZGUucmVtb3ZlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudExpc3QgPSBwYXltZW50TWV0aG9kSWNvbnNDaGVja091dFtjb3VudHJ5Q29kZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50TGlzdC5mb3JFYWNoKCh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IHRlbXBSb3cuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YXJpYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdOb2RlLnN3YXBDb21wb25lbnQocGF5bWVudFZhcmlhbnRzW3ZhcmlhbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50SWNvblBhcmVudC5hcHBlbmRDaGlsZChuZXdOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3Q29tcG9uZW50LnkgPSB5O1xuICAgICAgICAgICAgICAgIG5ld0NvbXBvbmVudC54ID0geDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbXBvbmVudCA9PT0gbnVsbCB8fCBzZWxlY3RlZENvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRDb21wb25lbnQubmFtZSwgJ1RSVFJUUicsIG5ld0NvbXBvbmVudCA9PT0gbnVsbCB8fCBuZXdDb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5ld0NvbXBvbmVudC5uYW1lLCBzZWxlY3RlZENvbXBvbmVudCA9PT0gbnVsbCB8fCBzZWxlY3RlZENvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRDb21wb25lbnQud2lkdGgsIG5ld0NvbXBvbmVudCA9PT0gbnVsbCB8fCBuZXdDb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5ld0NvbXBvbmVudC54KTtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChuZXdDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHggKz0gTWF0aC5taW4obmV3Q29tcG9uZW50LndpZHRoICsgMzAwLCAxNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHggPSBNQUlOX1g7XG4gICAgICAgICAgICB5ICs9IHNlbGVjdGVkQ29tcG9uZW50LmhlaWdodCArIDIwMDtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICB2YXIgZW5kID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB0aW1lID0gZW5kIC0gc3RhcnQ7XG4gICAgICAgIGFsZXJ0KCdFeGVjdXRpb24gdGltZTogJyArIHRpbWUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc3dhcFNhbWVDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgY291bnRyeUNvZGUgPSAnSEsnO1xuICAgICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IG1zZyA9ICdGZXRjaGluZyBtYXN0ZXIgZGF0YSBhbmQgZ2VuZXJhdGluZyBhc3NldHMgLi4uJztcbiAgICAgICAgZmlnbWEuc2hvd1VJKG1zZyk7XG4gICAgICAgIHlpZWxkIGxvYWRGb250cygpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25BbGwgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZmlsdGVyKChub2RlKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IG5vZGUubmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0YXJ0c1dpdGgoJ2F3eC0nKTsgfSk7XG4gICAgICAgIC8vIGNvbnN0IE1BSU5fWCA9IENPUkVfQVBJWDtcbiAgICAgICAgLy8gbGV0IHkgPSBDT1JFQVBJWTsgLy8gLTMwNTc7XG4gICAgICAgIC8vIGxldCB4ID0gTUFJTl9YOyAvLyA4OTYxLFxuICAgICAgICBjb25zdCBbbm9uTW9iLCBtb2JdID0gcGFydGl0aW9uKHNlbGVjdGlvbkFsbCwgKG5vZGUpID0+IHsgdmFyIF9hOyByZXR1cm4gISgoX2EgPSBub2RlLm5hbWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdGFydHNXaXRoKCdhd3gtbW9iJykpOyB9KTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gWy4uLm5vbk1vYiwgLi4ubW9iXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJQUFBcIiwgbXNnLm1ldGFkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1RPVEFMIFNFTEVDVElPTlMnLCBzZWxlY3Rpb24ubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qgbm9kZXNUb1VwZGF0ZSA9IFtdO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZm9yRWFjaCgoeCkgPT4geC50eXBlID09PSAnRlJBTUUnICYmXG4gICAgICAgICAgICBub2Rlc1RvVXBkYXRlLnB1c2goLi4ueC5maW5kQWxsKChub2RlKSA9PiBub2RlLm5hbWUgPT09ICdhd3gtZmxhZy1pY29uJykpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1RUVCcsIG5vZGVzVG9VcGRhdGUpO1xuICAgICAgICBub2Rlc1RvVXBkYXRlLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIC8vIGlmIChub2RlLnR5cGUgPT09ICdJTlNUQU5DRScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IGZsYWdWYWx1ZXNbZmxhZ3NbY291bnRyeUNvZGVdXTtcbiAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnSU5TVEFOQ0UnICYmIHJlcGxhY2VtZW50Tm9kZS50eXBlID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3dhcENvbXBvbmVudChyZXBsYWNlbWVudE5vZGUubWFpbkNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcGxhY2VtZW50Tm9kZS50eXBlID09PSAnQ09NUE9ORU5UJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1dBUFBJTkcgQ09NUE9ORU5UJywgbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUsIHJlcGxhY2VtZW50Tm9kZSA9PT0gbnVsbCB8fCByZXBsYWNlbWVudE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlcGxhY2VtZW50Tm9kZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zd2FwQ29tcG9uZW50KHJlcGxhY2VtZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9KTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlU2ltcGxlUmVwbGFjZW1lbnRzKCkge1xuICAgIGxvYWRGb250cygpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIGNvbnNvbGUubG9nKCdUT1RBTCBTRUxFQ1RJT05TJywgc2VsZWN0aW9uLmxlbmd0aCk7XG4gICAgICAgIC8vIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhiYW5rQ2FyZERhdGEpO1xuICAgICAgICBjb25zdCBrZXlzID0gWydDTlknLCAnRVVSJywgJ1VTRCcsICdBVUQnLCAnQ0FEJywgJ0NIRicsICdHQlAnLCAnSlBZJywgJ05aRCcsICdTR0QnXTtcbiAgICAgICAgY29uc3QgdGVtcEZsYWdzID0gWydDTicsICdFVScsICdVUycsICdBVScsICdDQScsICdDSCcsICdVSycsICdKUCcsICdOWicsICdTRyddO1xuICAgICAgICAvLyBjb25zdCB5ID0gNTAwMDtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBzZWxlY3Rpb24ubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ29tcG9uZW50ID0gc2VsZWN0aW9uW3BdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29tcG9uZW50ID0gc2VsZWN0ZWRDb21wb25lbnQuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBuZXdDb21wb25lbnQubmFtZSA9IHNlbGVjdGVkQ29tcG9uZW50ID09PSBudWxsIHx8IHNlbGVjdGVkQ29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZENvbXBvbmVudC5uYW1lLnJlcGxhY2UoJ0hLJywgJ0hLXycgKyBrZXlzW2ldKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZU5vZGVzID0gYWxsQ2xvbmVkRHluYW1pY05vZGVzLmZpbHRlcigobm9kZSkgPT4gWydhd3gtZmxhZy1pY29uJywgJ2F3eC1keW5hbWljLWN1cnJlbmN5J10uaW5jbHVkZXMobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLm5hbWUpKTtcbiAgICAgICAgICAgICAgICB2YWx1ZU5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gJ2F3eC1keW5hbWljLWN1cnJlbmN5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uYW1lID09PSAnYXd4LWZsYWctaWNvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IGZsYWdWYWx1ZXNbZmxhZ3NbdGVtcEZsYWdzW2ldXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXBsYWNlbWVudE5vZGUsIGZsYWdWYWx1ZXMsIGZsYWdzW2ldLCBrZXlzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3dhcENvbXBvbmVudChyZXBsYWNlbWVudE5vZGUubWFpbkNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB2YWx1ZXMgPSBiYW5rQ2FyZERhdGFba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdmFsdWVOb2RlcyA9IGFsbENsb25lZER5bmFtaWNOb2Rlcy5maWx0ZXIoKG5vZGUpID0+IE9iamVjdC5rZXlzKHZhbHVlcykuaW5jbHVkZXMobm9kZT8ubmFtZSkpO1xuICAgICAgICAgICAgICAgIC8vIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaChhc3luYyAoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICBjb25zdCBub2RlcyA9IHZhbHVlTm9kZXMuZmlsdGVyKChub2RlKSA9PiBub2RlPy5uYW1lID09PSBrZXkpO1xuICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coJ1BQUFAzJywga2V5KTtcbiAgICAgICAgICAgICAgICAvLyAgIG5vZGVzPy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChub2RlICYmIG5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ09LS0snKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICBub2RlLmNoYXJhY3RlcnMgPSAnJyArIHZhbHVlc1trZXldIHx8ICcgJztcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgbmV3Q29tcG9uZW50LnkgPSB5O1xuICAgICAgICAgICAgICAgIG5ld0NvbXBvbmVudC54ID0geDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbXBvbmVudCA9PT0gbnVsbCB8fCBzZWxlY3RlZENvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRDb21wb25lbnQubmFtZSwgJ1RSVFJUUicsIG5ld0NvbXBvbmVudCA9PT0gbnVsbCB8fCBuZXdDb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5ld0NvbXBvbmVudC5uYW1lLCBzZWxlY3RlZENvbXBvbmVudCA9PT0gbnVsbCB8fCBzZWxlY3RlZENvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRDb21wb25lbnQud2lkdGgsIG5ld0NvbXBvbmVudCA9PT0gbnVsbCB8fCBuZXdDb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5ld0NvbXBvbmVudC54KTtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChuZXdDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHggKz0gTWF0aC5tYXgobmV3Q29tcG9uZW50LndpZHRoICsgMjAwLCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeCA9IE1BSU5fWDtcbiAgICAgICAgICAgIHkgKz0gc2VsZWN0ZWRDb21wb25lbnQuaGVpZ2h0ICsgMjAwO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfSk7XG4gICAgLy8gcG9zdE1lc3NhZ2UoeyB0eXBlOiBXb3JrZXJBY3Rpb25UeXBlcy5SRUdJT05BTF9BU1NFVFNfTk9USUZZLCBwYXlsb2FkOiAnR2VuZXJhdGVkIEFzc2V0cyDwn5GNJyB9KTtcbn1cbi8vIExpc3RlbiB0byBtZXNzYWdlcyByZWNlaXZlZCBmcm9tIHRoZSBwbHVnaW4gVUkgKHNyYy91aS91aS50cylcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IGZ1bmN0aW9uICh7IHR5cGUsIHBheWxvYWQgfSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFVJQWN0aW9uVHlwZXMuVVBMT0FEOlxuICAgICAgICAgICAgLy8gdXBsb2FkVG9Db250ZW50ZnVsKHBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlBY3Rpb25UeXBlcy5DTE9TRTpcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSUFjdGlvblR5cGVzLk5PVElGWTpcbiAgICAgICAgICAgIHBheWxvYWQgJiYgZmlnbWEubm90aWZ5KHBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlBY3Rpb25UeXBlcy5SRUdJT05BTF9BU1NFVFM6XG4gICAgICAgICAgICBnZW5lcmF0ZUFzc2V0cyhwYXlsb2FkKTtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlU2ltcGxlUmVwbGFjZW1lbnRzKCk7XG4gICAgICAgICAgICAvLyBzd2FwU2FtZUNvbXBvbmVudCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcbi8vIFNob3cgdGhlIHBsdWdpbiBpbnRlcmZhY2UgKGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9wbHVnaW4tZG9jcy9jcmVhdGluZy11aS8pXG4vLyBSZW1vdmUgdGhpcyBpbiBjYXNlIHlvdXIgcGx1Z2luIGRvZXNuJ3QgbmVlZCBhIFVJLCBtYWtlIG5ldHdvcmsgcmVxdWVzdHMsIHVzZSBicm93c2VyIEFQSXMsIGV0Yy5cbi8vIElmIHlvdSBuZWVkIHRvIG1ha2UgbmV0d29yayByZXF1ZXN0cyB5b3UgbmVlZCBhbiBpbnZpc2libGUgVUkgKGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9wbHVnaW4tZG9jcy9tYWtpbmctbmV0d29yay1yZXF1ZXN0cy8pXG4vLyBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQwMCwgaGVpZ2h0OiA0MDAgfSk7XG5jb25zdCBtYWluVUkgPSBmaWdtYS5zaG93VUkoYFxuICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzcz1cIlwiPjxoZWFkPlxuXG4gIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICA8dGl0bGU+Q29kZVBlbiBEZW1vPC90aXRsZT5cblxuICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXhcIj5cblxuICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCJodHRwczovL2Nwd2ViYXNzZXRzLmNvZGVwZW4uaW8vYXNzZXRzL2Zhdmljb24vZmF2aWNvbi1hZWMzNDk0MGZiYzFhNmU3ODc5NzRkY2QzNjBmMmM2YjYzMzQ4ZDRiMWY0ZTA2Yzc3NzQzMDk2ZDU1NDgwZjMzLmljb1wiPlxuICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiaHR0cHM6Ly9jcHdlYmFzc2V0cy5jb2RlcGVuLmlvL2Fzc2V0cy9mYXZpY29uL2xvZ28tcGluLWI0YjQyNjljMTYzOTdhZDJmMGY3YTAxYmNkZjUxM2ExOTk0ZjRjOTRiOGFmMmYxOTFjMDllYjBkNjAxNzYyYjEuc3ZnXCIgY29sb3I9XCIjMTExXCI+XG4gIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vcmF1YmFjYS9wZW4vUFp6cFZlXCI+XG5cbiAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XG48bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj5cbiAgXG48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDMwMCw3MDBcIj5cbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzUuMC4wL25vcm1hbGl6ZS5taW4uY3NzXCI+XG5cbiAgPHN0eWxlIGlkPVwiSU5MSU5FX1BFTl9TVFlMRVNIRUVUX0lEXCI+XG4gICAgQGNoYXJzZXQgXCJVVEYtOFwiO1xuYm9keSB7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICBwYWRkaW5nOiAwIDFlbSAxZW07XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMCAwIDAuNWVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ucGFyZW50LWNoZWNrYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucm93IC5jb2wge1xuICBmbGV4OiAxO1xufVxuLnJvdyAuY29sOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4vKiBBY2NvcmRpb24gc3R5bGVzICovXG4udGFicyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFiIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbm92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB9XG4udGFiLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxZW07XG4gIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogSWNvbiAqL1xufVxuLnRhYi1sYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxYTI1MmY7XG59XG4udGFiLWxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p2vXCI7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbn1cbi50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbn1cbi50YWItY2xvc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxZW07XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFiLWNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzFhMjUyZjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC50YWItbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjMWEyNTJmO1xufVxuaW5wdXQ6Y2hlY2tlZCArIC50YWItbGFiZWw6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuaW5wdXQ6Y2hlY2tlZCB+IC50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNoZWNrYm94LWl0ZW0ge1xuICBmbGV4LWJhc2lzOiAyMCUlO1xuICBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciA+IC5jaGVja2JveC1pdGVtIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuYnV0dG9uIHtwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAubGFiZWwtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICB9XG4gICAgICAgIC5zd2l0Y2gge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIHJpZ2h0OiAxMHB4XG4gICAgICB9XG4gIFxuICAgICAgI3ByZWZpeGVzIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MTRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4OyAgXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zd2l0Y2ggaW5wdXQge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc2xpZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICAgIHRyYW5zaXRpb246IC40cztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNsaWRlcjpiZWZvcmUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgICAgYm90dG9tOiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTlweCk7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOXB4KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTlweCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xuICAgICAgLnNsaWRlci5yb3VuZCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cblxuICA8L3N0eWxlPlxuXG4gIFxuPHNjcmlwdCBzcmM9XCJodHRwczovL2Nwd2ViYXNzZXRzLmNvZGVwZW4uaW8vYXNzZXRzL2VkaXRvci9pZnJhbWUvaWZyYW1lQ29uc29sZVJ1bm5lci02YmNlMDQ2ZTcxMjhkZGY5MzkxY2NmN2FjYmVjYmY3Y2UwY2JkN2I2ZGVmYmViMmUyMTdhODY3ZjUxNDg1ZDI1LmpzXCI+PC9zY3JpcHQ+XG48c2NyaXB0IHNyYz1cImh0dHBzOi8vY3B3ZWJhc3NldHMuY29kZXBlbi5pby9hc3NldHMvZWRpdG9yL2lmcmFtZS9pZnJhbWVSZWZyZXNoQ1NTLTQ0ZmU4M2U0OWI2M2FmZmVjOTY5MThjOWFmODhjMGQ4MGIyMDlhODYyY2Y4N2FjNDZiYzkzMzA3NGI4YzU1N2QuanNcIj48L3NjcmlwdD5cbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jcHdlYmFzc2V0cy5jb2RlcGVuLmlvL2Fzc2V0cy9lZGl0b3IvaWZyYW1lL2lmcmFtZVJ1bnRpbWVFcnJvcnMtNGYyMDVmMmMxNGU3NjliNDQ4YmNmNDc3ZGUyOTM4YzY4MTY2MGQ1MDM4YmM0NjRlMzcwMDI1NjcxM2ViZTI2MS5qc1wiPjwvc2NyaXB0PlxuPC9oZWFkPlxuXG48Ym9keSBkYXRhLW5ldy1nci1jLXMtY2hlY2stbG9hZGVkPVwiMTQuMTExMi4wXCIgZGF0YS1nci1leHQtaW5zdGFsbGVkPVwiXCI+XG4gIDxoMT5BV1ggQXNzZXQgTG9jYWxpemVyPC9oMT5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgIDxoMj48Yj5TZWxlY3QgUmVnaW9uczwvYj48L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtaXRlbVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94MVwiIG5hbWU9XCJjaGVja2JveDFcIiA+XG4gICAgPGxhYmVsIGZvcj1cImNoZWNrYm94MVwiPkFVPC9sYWJlbD5cbiAgPC9kaXY+XG4gIFxuICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtaXRlbVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94MlwiIG5hbWU9XCJjaGVja2JveDJcIiA+XG4gICAgPGxhYmVsIGZvcj1cImNoZWNrYm94MlwiPkNBPC9sYWJlbD5cbiAgPC9kaXY+XG4gIFxuICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtaXRlbVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94M1wiIG5hbWU9XCJjaGVja2JveDNcIiA+XG4gICAgPGxhYmVsIGZvcj1cImNoZWNrYm94M1wiPlVLPC9sYWJlbD5cbiAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWl0ZW1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja2JveDRcIiBuYW1lPVwiY2hlY2tib3g0XCIgPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDRcIj5FVTwvbGFiZWw+XG4gIDwvZGl2PlxuICBcbiAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWl0ZW1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja2JveDVcIiBuYW1lPVwiY2hlY2tib3g1XCIgPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDVcIj5TRzwvbGFiZWw+XG4gIDwvZGl2PlxuICBcbiAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWl0ZW1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja2JveDZcIiBuYW1lPVwiY2hlY2tib3g2XCIgPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDZcIj5OWjwvbGFiZWw+XG4gIDwvZGl2PlxuICBcbiAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWl0ZW1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja2JveDhcIiBuYW1lPVwiY2hlY2tib3g4XCIgPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDhcIj5KUDwvbGFiZWw+XG4gIDwvZGl2PlxuICBcbiAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWl0ZW1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja2JveDlcIiBuYW1lPVwiY2hlY2tib3g5XCIgPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDlcIj5ISzwvbGFiZWw+XG4gIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1pdGVtXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tib3gxMFwiIG5hbWU9XCJjaGVja2JveDEwXCIgPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDEwXCI+Q048L2xhYmVsPlxuICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImxhYmVsLXJvd1wiPlxuICAgIDxsYWJlbCBmb3I9XCJwcmVmaXhlc1wiPkZyYW1lIFByZWZpeGVzOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcmVmaXhlc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJlZml4ZXMgKGNvbW1hLXNlcGFyYXRlZClcIiBkaXNhYmxlZD4gICAgIFxuICAgIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgPGlucHV0IGlkPVwic3dpdGNoXCIgdHlwZT1cImNoZWNrYm94XCIgb25jaGFuZ2U9XCJ0b2dnbGVUZXh0KClcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInRhYi1sYWJlbFwiIGZvcj1cImNoY2syXCI+RW5hYmxlIGZlYXR1cmVzPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hjazJcIiBjbGFzcz1cInBhcmVudC1jaGVja2JveFwiIGNoZWNrZWQ+XG4gPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IGNoZWNrYm94LWl0ZW0gZnVsbC13aWR0aC1jaGVja2JveFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94NFwiIG5hbWU9XCJjaGVja2JveDRcIiBjaGVja2VkPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDRcIj5SZWdpb25hbCBWYWx1ZSBSZXBsYWNlbWVudCAoY3VycmVuY3kgc3ltYm9sLCBjdXJyZW5jeSBjb2RlLCBjb3VudHJ5IG5hbWUsIGNvdW50cnkgY29kZSAmIGZsYWdzKTwvbGFiZWw+XG4gIDwvZGl2PlxuICBcbiAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IGNoZWNrYm94LWl0ZW0gZnVsbC13aWR0aC1jaGVja2JveFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94NVwiIG5hbWU9XCJjaGVja2JveDVcIiBjaGVja2VkPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDVcIj5QcmljZSBDb252ZXJzaW9uIGJhc2VkIG9uIFVTIGV4Y2hhbmdlIHJhdGUgZm9yIGFtb3VudHMgYXNzb2NpYXRlZCB3aXRoIGl0ZW1zPC9sYWJlbD5cbiAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IGNoZWNrYm94LWl0ZW0gZnVsbC13aWR0aC1jaGVja2JveFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94N1wiIG5hbWU9XCJjaGVja2JveDVcIiBjaGVja2VkPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDdcIj5GaXggY2FsY3VsYXRvciBkYXRhIChmcm9tIC8gdG8gY3VycmVuY3ksIGV4Y2hhbmdlIHJhdGUgJiBjb252ZXJ0ZWQgYW1vdW50KTwvbGFiZWw+XG4gIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCBjaGVja2JveC1pdGVtIGZ1bGwtd2lkdGgtY2hlY2tib3hcIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja2JveDdcIiBuYW1lPVwiY2hlY2tib3g1XCIgY2hlY2tlZD5cbiAgICA8bGFiZWwgZm9yPVwiY2hlY2tib3g3XCI+Rmlyc3Qgcm93IG9mIHRhYmxlIG11c3QgYmUgcmVnaW9uYWwgdmFsdWUgKG90aGVyIHJvd3Mgd2lsbCBhbHNvIGNoYW5nZSB0byBhdm9pZCBkdXBsaWNhdGlvbik8L2xhYmVsPlxuICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnQgY2hlY2tib3gtaXRlbSBmdWxsLXdpZHRoLWNoZWNrYm94XCIgPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94N1wiIG5hbWU9XCJjaGVja2JveDVcIiBjaGVja2VkPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDdcIj5GaXggQWlyd2FsbGV4IENhcmRzIGJhc2VkIG9uIHJlZ2lvbjogUGh5c2ljYWwgdnMgVmlydHVhbDwvbGFiZWw+XG4gIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCBjaGVja2JveC1pdGVtIGZ1bGwtd2lkdGgtY2hlY2tib3hcIiA+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tib3g3XCIgbmFtZT1cImNoZWNrYm94NVwiIGNoZWNrZWQ+XG4gICAgPGxhYmVsIGZvcj1cImNoZWNrYm94N1wiPkZpeCBBaXJ3YWxsZXggTGljZW5zZSBiYXNlZCBvbiByZWdpb246IENvbW1lcmNpYWwgdnMgQnVzaW5lc3M8L2xhYmVsPlxuICA8L2Rpdj5cbiAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCBjaGVja2JveC1pdGVtIGZ1bGwtd2lkdGgtY2hlY2tib3hcIiA+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tib3g2XCIgbmFtZT1cImNoZWNrYm94NVwiIGNoZWNrZWQ+XG4gICAgPGxhYmVsIGZvcj1cImNoZWNrYm94NlwiPkR5bmFtaWMgQ3VycmVuY3kgKGN1cnJlbmN5IHN3YXAgZm9yIGZpZWxkcyBsaWtlIGRhaWx5IGxpbWl0LCBhbW91bnQgd2lsbCByZW1haW4gc2FtZSk8L2xhYmVsPlxuICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnQgY2hlY2tib3gtaXRlbSBmdWxsLXdpZHRoLWNoZWNrYm94XCIgPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94N1wiIG5hbWU9XCJjaGVja2JveDVcIiBjaGVja2VkPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDdcIj5GaXggY2hlY2tvdXQgcGF5bWVudCBtZXRob2RzIChBcnJheSBvZiBwYXltZW50IHN1cHBvcnRlZCBtZXRob2RzKTwvbGFiZWw+XG4gIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnQgY2hlY2tib3gtaXRlbSBmdWxsLXdpZHRoLWNoZWNrYm94XCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tib3g3XCIgbmFtZT1cImNoZWNrYm94NVwiICBjaGVja2VkPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDdcIj5GaXggZGF0YSBpbnNpZGUgY29kZSBwcmV2aWV3czwvbGFiZWw+XG4gIDwvZGl2PlxuXG5cbiAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IGNoZWNrYm94LWl0ZW0gZnVsbC13aWR0aC1jaGVja2JveFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94N1wiIG5hbWU9XCJjaGVja2JveDVcIiBjaGVja2VkPlxuICAgIDxsYWJlbCBmb3I9XCJjaGVja2JveDdcIj5GaXggb3RoZXIgbG9jYWwgaW5mb3JtYXRpb24gbGlrZSBjaXR5LCBhZGRyZXNzLCBiYW5rIGluZm9ybWF0aW9uLCB0cmFuc2ZlciBtZXRob2RzLCB0cmFuc2ZlciBzcGVlZCwgYWNjb3VudCBsb2NhdGlvbiwgYWNjb3VudCBudW1iZXIsIGNvbXBhbnkgZXRjIGJhc2VkIG9uIHJlZ2lvbmFsIHZhbHVlczwvbGFiZWw+XG4gIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCBjaGVja2JveC1pdGVtIGZ1bGwtd2lkdGgtY2hlY2tib3hcIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja2JveDdcIiBuYW1lPVwiY2hlY2tib3g1XCIgY2hlY2tlZD5cbiAgICA8bGFiZWwgZm9yPVwiY2hlY2tib3g3XCI+UmVwbGFjZSBiYWNrZ3JvdW5kIHZhbHVlcyB1cHRvIDMgbGV2ZWxzPC9sYWJlbD5cbiAgPC9kaXY+XG5cblxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxidXR0b24gaWQ9XCJyZWN0YW5nbGVCdG5cIiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cImdlbmVyYXRlQXNzZXRzKClcIj5HZW5lcmF0ZSBBc3NldHM8L2J1dHRvbj5cbiAgXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vY3B3ZWJhc3NldHMuY29kZXBlbi5pby9hc3NldHMvY29tbW9uL3N0b3BFeGVjdXRpb25PblRpbWVvdXQtMmM3ODMxYmI0NGY5OGMxMzkxZDZhNGZmZGEwZTFmZDMwMjUwMzM5MWNhODA2ZTdmY2M3YjliODcxOTdhZWMyNi5qc1wiID48L3NjcmlwdD5cbjxzY3JpcHQ+ICBcblxuZnVuY3Rpb24gcG9zdE1lc3NhZ2UoeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlLCBwYXlsb2FkIH0gfSwgJyonKTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWZpeGVzJykudmFsdWUgPSBcImF3eC1cIjtcblxuZnVuY3Rpb24gdG9nZ2xlVGV4dCgpIHtcbnZhciB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlZml4TGlzdFwiKTtcbnZhciBzd2l0Y2hFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hcIik7XG5cbmlmIChzd2l0Y2hFbGVtZW50LmNoZWNrZWQpIHtcbiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlZml4ZXMnKS5kaXNhYmxlZCA9IGZhbHNlXG59IGVsc2Uge1xuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVmaXhlcycpLmRpc2FibGVkID0gdHJ1ZVxufVxubGV0IGNvdW50cnlMaXN0ID0gW11cbn1cblxuICAgZnVuY3Rpb24gZ2VuZXJhdGVBc3NldHMoKSB7XG4gICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogJ1JFR0lPTkFMX0FTU0VUUycsXG4gICAgICBwYXlsb2FkOiBjb3VudHJ5TGlzdFxuICAgIH0pO1xuXG4gIH1cblxuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hlY2tib3gtY29udGFpbmVyJylbMF0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIGNoZWNrYm94XG5jaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgLy8gR2V0IHRoZSBzZWxlY3RlZCB2YWx1ZXNcbiAgICBjb25zdCBzZWxlY3RlZENoZWNrYm94ZXMgPSBBcnJheS5mcm9tKGNoZWNrYm94ZXMpXG4gICAgICAuZmlsdGVyKGNoZWNrYm94ID0+IGNoZWNrYm94LmNoZWNrZWQpXG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxzID0gc2VsZWN0ZWRDaGVja2JveGVzLm1hcChjaGVja2JveCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUFBXCIsY2hlY2tib3guaWQpXG4gICAgICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoZWNrYm94LWNvbnRhaW5lcicpWzBdLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj0nKyBjaGVja2JveC5pZCArICddJyk7XG4gICAgICAgIHJldHVybiBsYWJlbEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICB9KTtcblxuICAgIC8vIExvZyB0aGUgc2VsZWN0ZWQgdmFsdWVzXG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIHZhbHVlczonLCBzZWxlY3RlZExhYmVscyk7XG4gICAgY291bnRyeUxpc3QgPSBzZWxlY3RlZExhYmVsc1xuICB9KTtcbn0pO1xuPC9zY3JpcHQ+XG48L2JvZHk+PC9odG1sPlxuICBgLCB7XG4gICAgd2lkdGg6IDg1MCxcbiAgICBoZWlnaHQ6IDYwMCxcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9