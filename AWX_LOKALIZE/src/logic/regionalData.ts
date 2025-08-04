/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { sheetData, transferMethodData } from './sheetData';

//@ts-ignore
export const flags = {
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

export const currencyName = {
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

export const cities = {
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

export const usExchangeRate = {
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

export const auExchangeRate = {
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

export const gbExchangeRate = {
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

export const euExchangeRate = {
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

export const currency = {
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
export const currencyCode = {
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

export const cards = {
  PHYSICAL_BUSINESS: 'PHYSICAL BUSINESS',
  VIRTUAL_BUSINESS: 'VIRTUAL BUSINESS',
  VIRTUAL_COMMERCIAL: 'VIRTUAL COMMERCIAL',
  PHYSICAL_COMMERCIAL: 'PHYSICAL COMMERCIAL',
};

export const cards_commercial = {
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

export const visa_variant = {
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

export const cards_business = {
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
const getRegionalData = (region: any) => {
  return {
    ...sheetData[region],
    ...transferMethodData[region],
    'awx-region': region,
    'awx-card-1': cards_business[region]?.[0] || ' ',
    'awx-card-2': cards_business[region]?.[1] || ' ',
    'awx-currency': currency[region] || ' ',
    'awx-flag-icon': flags[region] || ' ',
    'awx-location': location[region] || ' ',
    'awx-demo-company': 'Demo Co. ' + region || ' ',
    'awx-demo-company-funds': 'Demo Co. ' + region + ' Funds' || ' ',
    'awx-city': cities[region] || ' ',
    'awx-company': 'Awesome Tech ' + region || ' ',
    'awx-country-with-suffix': countryWithSuffix[region] || ' ',
    'awx-country-code': region,
    'awx-transfer-method': transferMethod[region] || ' ',
    'awx-payout': payout[region] || ' ',
    'awx-bank-1': bank1[region] || ' ',
    'awx-bank-2': bank2[region] || ' ',
    'awx-currency-name': currencyName[region] || ' ',
    'awx-payment-methods-icons-checkout-text': ['HK', 'CN'].includes(region)
      ? 'Cards, Alipay HK, and WeChat Pay '
      : 'Cards, Apple Pay, and Google Pay ',
    'awx-account-number-title': ['EU'].includes(region) ? 'IBAN' : 'Account No.',
    'awx-account-number': accountNumbers[region],
  };
};

export const regionalData = {
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

export const backgroundData = {
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

export const generateBackgroundValues = (region: keyof typeof regionalData, index) => {
  const temp = {};
  Object.keys(regionalData[region]).forEach((key) => {
    temp[`${key}-base-${index}`] = regionalData[region][key];
  });
  console.log('OOPOOPO', region, index, temp);
  return temp;
};

export const gaHeroOriginalTableOrder = [
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

export const tableStreamLiveOrder = ['CAD', 'USD', 'CHF', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR'];
export const balanceListOrder = ['USD', 'GBP', 'AUD', 'SGD', 'HKD', 'JPY'];
export const homepageWalletOriginalTableOrder = ['USD', 'GBP', 'AUD', 'SGD', 'EUR'];
export const homepageBankAccountTableOrder = ['USD', 'GBP', 'AUD', 'SGD', 'HKD', 'JPY', 'EUR'];
export const balanceListOrder2 = ['USD', 'GBP', 'AUD', 'SGD'];
export const balanceListOrder3 = ['AUD', 'USD', 'EUR', 'GBP'];
export const balanceListOrder4 = ['USD', 'GBP', 'HKD', 'AUD'];
export const tableQuantas = ['USD', 'CAD', 'AUD', 'SGD', 'HKD', 'GBP', 'EUR'];

export const gaHeroTableValues = {
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

export const tabularData = {
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

export const allPaymentVariants = [
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

export const paymentMethodIcons = {
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

export const paymentMethodIconsCheckOut = {
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

export const findRegionByCurrency = (target: string) => {
  return Object.keys(currency).find((e) => currency[e as keyof typeof currency] == target);
};
