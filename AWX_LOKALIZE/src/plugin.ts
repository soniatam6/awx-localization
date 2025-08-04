import {
  balanceListOrder,
  balanceListOrder2,
  balanceListOrder3,
  balanceListOrder4,
  euExchangeRate,
  exchangeRate,
  gbExchangeRate,
  paymentMethodIconsCheckOut,
  tableQuantas,
  tableStreamLiveOrder,
  usExchangeRate,
  visa_variant,
} from './logic/regionalData';
/* eslint-disable prettier/prettier */
import {
  regionalData,
  generateBackgroundValues,
  backgroundData,
  findRegionByCurrency,
  tabularData,
  gaHeroOriginalTableOrder,
  gaHeroTableValues,
  flags,
  homepageWalletOriginalTableOrder,
  homepageBankAccountTableOrder,
  currency,
  currencyCode,
  paymentMethodIcons,
  allPaymentVariants,
  cards,
  currencyName,
  auExchangeRate,
} from './logic/regionalData';
import { bankCardData } from './logic/sheetData';
import { UIActionTypes, UIAction, WorkerActionTypes, WorkerAction } from './types';
import contentful from 'contentful';

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
function postMessage({ type, payload }: WorkerAction): void {
  figma.ui.postMessage({ type, payload });
}

const flagValues = {};
const paymentVariants = {};
const cardVariants = {};
const visaVariantDark = {};
const visaVariantLight = {};

const loadMasterData = async () => {
  await figma.loadFontAsync({ family: 'CircularXX', style: 'Regular' });
  await figma.loadFontAsync({ family: 'CircularXX', style: 'Medium' });
  await figma.loadFontAsync({ family: 'CircularXX', style: 'Bold' });
  await figma.loadFontAsync({ family: 'SF Mono', style: 'Semibold' });
  await figma.loadFontAsync({ family: 'Source Code Pro', style: 'SemiBold' });
  await figma.loadFontAsync({ family: 'Source Code Pro', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Helvetica', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Belgrano', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Montserrat', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });
  await figma.loadFontAsync({ family: 'Noto Sans Mono', style: 'SemiBold' });
  await figma.loadFontAsync({ family: 'Montserrat', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Manrope', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Ciutadella', style: 'SemiBold' });
  await figma.loadFontAsync({ family: 'Ciutadella', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Ciutadella', style: 'Medium' });
  await figma.loadFontAsync({ family: 'Poppins', style: 'SemiBold' });
  await figma.loadFontAsync({ family: 'Poppins', style: 'Medium' });
  await figma.loadFontAsync({ family: 'SF Pro Text', style: 'Medium' });
  await figma.loadFontAsync({ family: 'SF Pro Text', style: 'Regular' });
  await figma.loadFontAsync({ family: 'SF Pro', style: 'Regular' });
  await figma.loadFontAsync({ family: 'SF Pro', style: 'Medium' });
  console.log('FETCHING MASTER ASSETS');
  // if (!window.figma_master_assets) {
  const nodes = await figma.root.findAll(
    (node) =>
      Object.values(flags).includes(node?.name) ||
      (node.type === 'COMPONENT' &&
        allPaymentVariants.includes(node?.name?.replace('method=', ''))) ||
      (node.type === 'COMPONENT' &&
        Object.values(cards).includes(node?.name?.replace('Property 1=', ''))) ||
      (node.type === 'COMPONENT' &&
        ['Commercial', 'Business'].includes(
          node?.name?.replace('Color=Light, Comm vs Biz=', ''),
        )) ||
      (node.type === 'COMPONENT' &&
        ['Commercial', 'Business'].includes(node?.name?.replace('Color=Dark, Comm vs Biz=', ''))),
  );
  console.log(nodes);
  nodes.forEach((node) => {
    if (Object.values(flags).includes(node?.name) && node?.type === 'INSTANCE') {
      flagValues[node?.name] = node;
    } else if (allPaymentVariants.includes(node?.name.replace('method=', ''))) {
      paymentVariants[node?.name.replace('method=', '')] = node;
    } else if (Object.values(cards).includes(node?.name.replace('Property 1=', ''))) {
      cardVariants[node?.name.replace('Property 1=', '')] = node;
    } else if (
      ['Commercial', 'Business'].includes(node?.name.replace('Color=Light, Comm vs Biz=', ''))
    ) {
      visaVariantLight[node?.name.replace('Color=Light, Comm vs Biz=', '')] = node;
    } else if (
      ['Commercial', 'Business'].includes(node?.name.replace('Color=Dark, Comm vs Biz=', ''))
    ) {
      visaVariantDark[node?.name.replace('Color=Dark, Comm vs Biz=', '')] = node;
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
};

const countDecimals = function (val) {
  console.log('TEST RATE:', val);
  if (typeof val === 'number' && String(val + 0.01).endsWith('.01')) {
    console.log('TEST RATE2:', val);
    return 2;
  }
  console.log('TEST RATE3:', val);
  // if (Math.floor(val) === parseFloat(val)) return 0;
  console.log('TEST RATE4:', val);
  return String(val).split('.')[1]?.length || 0;
};

const format = (val) => {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const fixCurrencyAmount = (node: any, countryCode: string, withAmount: boolean) => {
  if (!withAmount) {
    node.characters =
      '' +
        node.characters
          ?.replaceAll(/USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi, currency[countryCode])
          ?.replaceAll(/\$/gi, currencyCode[countryCode])
          ?.replaceAll(
            /Great Britain Pound|Australian Dollar|Singapore Dollar|Euro|United States Dollar|Hong Kong Dollar|Chinese Yuan|Malaysian Ringit|Japanese Yen|New Zealand Dollar|Canadian Dollar/gi,
            currencyName[countryCode],
          )
          .replaceAll(' undefined', '') || ' ';
    return;
  }

  const isRate = node?.name?.endsWith('-rate');

  const exchangeRate = usExchangeRate;
  const oldAmount =
    node.characters
      ?.replaceAll(/USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi, '')
      ?.replaceAll(/\$/gi, '')
      ?.replaceAll(
        /Great Britain Pound|Australian Dollar|Singapore Dollar|Euro|United States Dollar|Hong Kong Dollar|Chinese Yuan|Malaysian Ringit|Japanese Yen|New Zealand Dollar|Canadian Dollar/gi,
        '',
      )
      .replaceAll(' undefined', '')
      .trim() || ' ';

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
    ? parseFloat(
        (parseFloat(oldAmount?.replace(',', '')) * parseFloat(gbExchangeRate['US'])) /
          parseFloat(exchangeRate[countryCode]),
      ).toFixed(round)
    : format(
        parseFloat(
          (parseFloat(oldAmount?.replace(',', '')) * parseFloat(exchangeRate[countryCode])) /
            parseFloat(gbExchangeRate['US']),
        ).toFixed(round),
      );

  if (isRate) {
    node.characters = '' + node.characters?.replace(oldAmount, newAmount) || ' ';
    return;
  }
  node.characters =
    '' +
      node.characters
        ?.replaceAll(/USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi, currency[countryCode])
        ?.replaceAll(/\$/gi, currencyCode[countryCode])
        ?.replaceAll(
          /Great Britain Pound|Australian Dollar|Singapore Dollar|Euro|United States Dollar|Hong Kong Dollar|Chinese Yuan|Malaysian Ringit|Japanese Yen|New Zealand Dollar|Canadian Dollar/gi,
          currencyName[countryCode],
        )
        ?.replace(oldAmount, newAmount) || ' ';
};

function partition(array, isValid) {
  return array.reduce(
    ([pass, fail], elem) => {
      return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    },
    [[], []],
  );
}

async function generateAssets(payload): void {
  const countryList = ['US', 'CA', 'EU', 'UK', 'SG', 'NZ', 'JP', 'HK', 'CN'];
  var start = new Date().getTime();
  let msg = 'Fetching master data and generating assets ...';
  figma.showUI(msg);
  await loadMasterData(); // 5 sec

  // figma.showUI('HELLO');
  const selectionAll = figma.currentPage.selection.filter((node) =>
    // node.name?.startsWith('BA-') ||
    // node.name?.startsWith('core API-') ||
    // node.name?.startsWith('Core API-') ||
    // node.name?.startsWith('emfi-') ||
    // node.name?.startsWith('mob-') ||
    // node.name?.startsWith('fearured-') ||
    // node.name?.startsWith('featured-') ||
    node.name?.startsWith('awx-'),
  );

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

  const [nonMob, mob] = partition(selectionAll, (node) => !node.name?.startsWith('awx-mob'));
  const selection = [...nonMob, ...mob];
  // console.log("PPP", msg.metadata);
  console.log('TOTAL SELECTIONS', selection.length);

  const allDynamicNodes = [];
  figma.currentPage.selection.forEach(
    (x) =>
      x.type === 'FRAME' &&
      allDynamicNodes.push(...x.findAll((node) => node.name.startsWith('awx-'))),
  );
  const allDynamicKeys = allDynamicNodes?.map((x) => x.name);
  console.log('MMM', allDynamicKeys);
  const backgroundValuesCache = {};
  // const y = 5000;

  for (let p = 0; p < selection.length; p++) {
    const selectedComponent = selection[p];
    for (let i = 0; i < countryList.length; i++) {
      msg = `Generated ${(p + 1) * (i + 1)}/${selection.length * countryList.length}`;

      const newComponent = selectedComponent.clone();
      const countryCode = countryList[i];

      newComponent.name =
        selectedComponent?.name?.replace('-AU-localized', '').replace('-US-localized', '') +
        '-' +
        countryCode.toUpperCase() +
        '-localized';

      console.log(selectedComponent?.name, 'LLLLLL4', countryCode);
      const values = regionalData[countryCode as keyof typeof regionalData];

      console.log(selectedComponent?.name, 'LLLLLL8', countryCode, newComponent);

      const allClonedDynamicNodes = newComponent.findAll((node) => node?.name?.startsWith('awx-'));

      // Dynamic currencies
      const dynamicCurrencyNodes = allClonedDynamicNodes.filter((node) =>
        node?.name?.startsWith('awx-dynamic-currency'),
      );
      console.log(selectedComponent?.name, 'LLLLLL5', dynamicCurrencyNodes);

      const dynamicCurrencyAmountNodes = allClonedDynamicNodes.filter((node) =>
        node?.name?.startsWith('awx-dynamic-amount'),
      );

      // const rateNodes = allClonedDynamicNodes.filter((node) => node?.name?.startsWith('awx-rate'));
      const visaNodes = allClonedDynamicNodes.filter((node) => node?.name?.startsWith('awx-visa'));
      visaNodes?.forEach((node) => {
        if (node && node.type === 'INSTANCE') {
          // const replacementNode = figma.currentPage.findOne((node) => node?.name === values[key]);

          const visaVariant = node?.name?.includes('light') ? visaVariantLight : visaVariantDark;
          const replacementNode = visaVariant[visa_variant[countryCode]];

          if (replacementNode) {
            if (replacementNode.type === 'INSTANCE') {
              node.swapComponent(replacementNode.mainComponent);
            } else if (replacementNode.type === 'COMPONENT') {
              console.log('SWAPPING COMPONENT', node?.name, replacementNode?.name);
              node.swapComponent(replacementNode);
            }
          }
        }
      });

      const codeNodes = allClonedDynamicNodes.filter((node) => node?.name?.startsWith('awx-code'));

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
        'awx-table-quantas',
      ];
      const orderArray = [
        gaHeroOriginalTableOrder,
        homepageWalletOriginalTableOrder,
        homepageBankAccountTableOrder,
        tableStreamLiveOrder,
        balanceListOrder,
        balanceListOrder2,
        balanceListOrder3,
        balanceListOrder4,
        // tableQuantas,
      ];

      const tabularNode = allClonedDynamicNodes.filter((node) => tables.includes(node?.name))?.[0];

      const tabularNodeRows = tabularNode?.findAll((node) => node?.name.includes('awx-'));
      if (tabularNodeRows) {
        for (let p = 0; p < tabularNodeRows.length; p++) {
          const rowNode = tabularNodeRows[p];
          console.log(selectedComponent?.name, p, rowNode?.name);

          const curCurrency = rowNode?.name?.split('-')?.pop().toUpperCase();
          const region = countryCode;

          const index = orderArray[tables.indexOf(tabularNode?.name)].indexOf(curCurrency);
          const updatedCurrency = tabularData[region as keyof typeof tabularData][index];
          console.log('OPPPPPOOO', curCurrency, updatedCurrency, index, region);

          if (Object.values(currency).includes(curCurrency) && curCurrency !== updatedCurrency) {
            const curValues = gaHeroTableValues[curCurrency as any];
            const newValues = gaHeroTableValues[updatedCurrency as any];
            console.log(curCurrency, updatedCurrency, curValues, newValues);
            // Handle Flag
            const flag = rowNode?.findOne(
              (node) => node.type === 'INSTANCE' && node?.name === curValues[0],
            );
            const replacementNode =
              flagValues[newValues[0]] ||
              cardVariants[newValues[0]] ||
              paymentVariants[newValues[0]];

            // const replacementNode = figma.currentPage.findOne(
            //   (node) => node?.name === newValues[0],
            // );
            if (flag && replacementNode && replacementNode.type === 'INSTANCE') {
              flag.swapComponent(replacementNode.mainComponent);
            }
            console.log('ZZZ', replacementNode?.name);
            // Handle Text
            for (let i = 1; i < curValues.length; i++) {
              const tempNode = rowNode?.findOne(
                (node) => node.type === 'TEXT' && node.characters === curValues[i],
              );
              console.log('ZZZ1', tempNode?.characters);
              if (tempNode) {
                tempNode.characters = newValues[i];
                tempNode?.name = newValues[i];
              }
            }
          }
        }
        // y += selectedComponent.height + 100;
      }

      codeNodes?.forEach((node) => {
        if (node.type === 'TEXT') {
          console.log('AWX_CODE');
          // const USDIndex = node.characters.indexOf('USD');
          // if (USDIndex > 0) {
          //   node.insertCharacters(USDIndex + 3, currency[countryCode]);
          //   node.deleteCharacters(USDIndex, USDIndex + 3);
          // }

          const GBPIndex = node.characters.indexOf('GBP');
          if (GBPIndex > 0) {
            node.insertCharacters(GBPIndex + 3, currency[countryCode]);
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

      dynamicCurrencyAmountNodes?.forEach((node) => {
        if (node.type === 'TEXT') {
          if (node?.name === 'awx-dynamic-amount' || node?.name === 'awx-dynamic-amount-rate') {
            console.log(
              selectedComponent?.name,
              'DYNAMIC CURRENCY AMOUNT REPLACEMENT',
              node.characters,
              currency[countryCode],
            );

            const basecurrency = node?.name?.split('-').pop().toUpperCase();

            fixCurrencyAmount(node, countryCode, true, false, basecurrency);
          } else {
            const baseLevel = node?.name?.split('-').pop();
            node.characters =
              '' +
              node.characters?.replaceAll(
                /USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi,
                tabularData[countryCode][baseLevel - 1],
              );
          }
        }
      });

      dynamicCurrencyNodes?.forEach((node) => {
        console.log(
          selectedComponent?.name,
          'DYNAMIC CURRENCY REPLACEMENT',
          node?.characters,
          currency[countryCode],
        );
        if (node.type === 'TEXT') {
          if (node?.name === 'awx-dynamic-currency') {
            console.log(
              selectedComponent?.name,
              'DYNAMIC CURRENCY REPLACEMENT',
              node.characters,
              currency[countryCode],
            );

            fixCurrencyAmount(node, countryCode);
          } else {
            const baseLevel = node?.name?.split('-').pop();
            node.characters =
              '' +
              node.characters?.replaceAll(
                /USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi,
                tabularData[countryCode][baseLevel],
              );
          }
        }
      });

      console.log('LLLLLL6', countryCode, newComponent);

      const valueNodes = allClonedDynamicNodes.filter((node) =>
        Object.keys(values)
          .filter((key) => allDynamicKeys.includes(key))
          .includes(node?.name),
      );

      Object.keys(values)
        .filter((key) => allDynamicKeys.includes(key))
        .forEach(async (key) => {
          const nodes = valueNodes.filter((node) => node?.name === key);
          nodes?.forEach((node) => {
            console.log(selectedComponent?.name, 'replacing', countryCode, key, node);
            if (node?.name === 'awx-flag-icon') {
              console.log('SSSSS', node?.name, flagValues);
            }

            if (node && node.type === 'TEXT') {
              console.log('OKKK');
              node.characters = '' + values[key] || ' ';
            } else if (node && node.type === 'INSTANCE') {
              // const replacementNode = figma.currentPage.findOne((node) => node?.name === values[key]);

              const replacementNode =
                flagValues[values[key]] ||
                cardVariants[values[key]] ||
                paymentVariants[values[key]];
              console.log(
                selectedComponent?.name,
                'Instance value replacement main',
                replacementNode?.name,
                values[key],
              );

              if (replacementNode) {
                if (replacementNode.type === 'INSTANCE') {
                  node.swapComponent(replacementNode.mainComponent);
                } else if (replacementNode.type === 'COMPONENT') {
                  console.log('SWAPPING COMPONENT', node?.name, replacementNode?.name);
                  node.swapComponent(replacementNode);
                }
              }
            }
          });
        });

      console.log(selectedComponent?.name, 'LLLLLL7', countryCode);

      // Replace Background Data
      const backgroundRegions = backgroundData[countryCode];
      backgroundRegions.forEach((backgroundRegion, index) => {
        if (!backgroundValuesCache[backgroundRegion]) {
          backgroundValuesCache[backgroundRegion] = generateBackgroundValues(
            backgroundRegion,
            index + 1,
          );
        }

        const backgroundValues = backgroundValuesCache[backgroundRegion];
        // const backgroundValues = generateBackgroundValues(backgroundRegion, index + 1);
        console.log('MNMNMN2', backgroundValues, backgroundRegion, index, countryCode);

        const tempBackgroundNodes = allClonedDynamicNodes.filter((node) =>
          Object.keys(backgroundValues)
            .filter((key) => allDynamicKeys.includes(key))
            .includes(node?.name),
        );
        Object.keys(backgroundValues)
          .filter((key) => allDynamicKeys.includes(key))
          .forEach((key) => {
            const nodes = tempBackgroundNodes.filter((node) => node?.name === key);
            nodes?.forEach((node) => {
              console.log(
                selectedComponent?.name,
                'replacing backgroundValues',
                backgroundRegion,
                key,
                node,
                node?.type,
              );
              if (node && node.type === 'TEXT') {
                console.log(
                  selectedComponent?.name,
                  'OKKK2',
                  node?.name,
                  currency[backgroundRegions[index]],
                  backgroundValues[key],
                );
                const level = index + 1;
                if (node?.name === 'awx-dynamic-currency-base-' + level) {
                  node.characters =
                    '' +
                      node.characters
                        ?.replaceAll(
                          /USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi,
                          currency[backgroundRegions[index]],
                        )
                        ?.replaceAll(/\$/gi, currencyCode[backgroundRegions[index]])
                        ?.replaceAll(
                          /Great Britain Pound|Australian Dollar|Singapore Dollar|Euro|United States Dollar|Hong Kong Dollar|Chinese Yuan|Malaysian Ringit|Japanese Yen|New Zealand Dollar|Canadian Dollar/gi,
                          currencyName[backgroundRegions[index]],
                        ) || ' ';
                } else {
                  node.characters = '' + backgroundValues[key] || ' ';
                }
              } else if (node && node.type === 'INSTANCE') {
                const replacementNode =
                  flagValues[backgroundValues[key]] ||
                  cardVariants[backgroundValues[key]] ||
                  paymentVariants[backgroundValues[key]];

                // const replacementNode = figma.currentPage.findOne(
                //   (node) => node?.name === backgroundValues[key],
                // );
                if (replacementNode) {
                  if (replacementNode.type === 'INSTANCE') {
                    node.swapComponent(replacementNode.mainComponent);
                  } else if (replacementNode.type === 'COMPONENT') {
                    console.log(
                      selectedComponent?.name,
                      'SWAPPING COMPONENT',
                      node?.name,
                      replacementNode?.name,
                    );
                    node.swapComponent(replacementNode);
                  }
                }
              }
            });
          });
      });

      console.log(selectedComponent?.name, 'LLLLLL8', countryCode);

      // fix payment icons
      const paymentIconParents = allClonedDynamicNodes.filter(
        (node) => node?.name === 'awx-payment-methods-icons',
      );
      if (paymentIconParents) {
        paymentIconParents.forEach((paymentIconParent) => {
          const tempRow = paymentIconParent.children[0].clone();
          paymentIconParent.children.forEach((node) => node.remove());
          const variantList = paymentMethodIcons[countryCode];
          variantList.forEach((variant) => {
            const newNode = tempRow.clone();
            console.log(variant, paymentVariants);
            newNode.swapComponent(paymentVariants[variant]);
            try {
              paymentIconParent.appendChild(newNode);
            } catch (e) {
              console.log(variant, paymentVariants);

              console.log('NOT EXIST', e, paymentIconParent);
            }
          });
        });
      }

      // fix payment icons
      const paymentIconCheckoutParents = allClonedDynamicNodes.filter(
        (node) => node?.name === 'awx-payment-methods-icons-checkout',
      );
      if (paymentIconCheckoutParents) {
        paymentIconCheckoutParents.forEach((paymentIconParent) => {
          const tempRow = paymentIconParent.children[0].clone();
          paymentIconParent.children.forEach((node) => node.remove());
          const variantList = paymentMethodIconsCheckOut[countryCode];
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
      console.log(
        selectedComponent?.name,
        'TRTRTR',
        newComponent?.name,
        selectedComponent?.width,
        newComponent?.x,
      );
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

  // postMessage({ type: WorkerActionTypes.REGIONAL_ASSETS_NOTIFY, payload: 'Generated Assets 👍' });
}

async function swapSameComponent(): void {
  const countryCode = 'HK';
  var start = new Date().getTime();
  let msg = 'Fetching master data and generating assets ...';
  figma.showUI(msg);
  await loadMasterData();

  const selectionAll = figma.currentPage.selection.filter((node) => node.name?.startsWith('awx-'));

  // const MAIN_X = CORE_APIX;
  // let y = COREAPIY; // -3057;

  // let x = MAIN_X; // 8961,

  const [nonMob, mob] = partition(selectionAll, (node) => !node.name?.startsWith('awx-mob'));
  const selection = [...nonMob, ...mob];
  // console.log("PPP", msg.metadata);
  console.log('TOTAL SELECTIONS', selection.length);

  const nodesToUpdate = [];
  figma.currentPage.selection.forEach(
    (x) =>
      x.type === 'FRAME' &&
      nodesToUpdate.push(...x.findAll((node) => node.name === 'awx-flag-icon')),
  );

  console.log('TTT', nodesToUpdate);

  nodesToUpdate.forEach((node) => {
    // if (node.type === 'INSTANCE') {
    const replacementNode = flagValues[flags[countryCode]];
    if (replacementNode) {
      if (node.type === 'INSTANCE' && replacementNode.type === 'INSTANCE') {
        node.swapComponent(replacementNode.mainComponent);
      } else if (replacementNode.type === 'COMPONENT') {
        console.log('SWAPPING COMPONENT', node?.name, replacementNode?.name);
        node.swapComponent(replacementNode);
      }
    }
    // }
  });
  figma.closePlugin();
}

function generateSimpleReplacements(): void {
  loadMasterData().then(() => {
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
        newComponent.name = selectedComponent?.name.replace('HK', 'HK_' + keys[i]);
        const valueNodes = allClonedDynamicNodes.filter((node) =>
          ['awx-flag-icon', 'awx-dynamic-currency'].includes(node?.name),
        );

        valueNodes.forEach((node) => {
          if (node.name === 'awx-dynamic-currency') {
            node.characters = keys[i];
          }
          if (node.name === 'awx-flag-icon') {
            const replacementNode = flagValues[flags[tempFlags[i]]];
            console.log(replacementNode, flagValues, flags[i], keys[i]);
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
        console.log(
          selectedComponent?.name,
          'TRTRTR',
          newComponent?.name,
          selectedComponent?.width,
          newComponent?.x,
        );
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
figma.ui.onmessage = function ({ type, payload }: UIAction): void {
  switch (type) {
    case UIActionTypes.UPLOAD:
      // uploadToContentful(payload);
      break;
    case UIActionTypes.CLOSE:
      figma.closePlugin();
      break;
    case UIActionTypes.NOTIFY:
      payload && figma.notify(payload);
      break;
    case UIActionTypes.REGIONAL_ASSETS:
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

const mainUI = figma.showUI(
  `
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
  `,
  {
    width: 850,
    height: 600,
  },
);
