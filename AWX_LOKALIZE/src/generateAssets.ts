import {
  regionalData,
  visa_variant,
  gaHeroOriginalTableOrder,
  homepageWalletOriginalTableOrder,
  homepageBankAccountTableOrder,
  tableStreamLiveOrder,
  balanceListOrder,
  balanceListOrder2,
  balanceListOrder3,
  balanceListOrder4,
  tabularData,
  currency,
  gaHeroTableValues,
  backgroundData,
  generateBackgroundValues,
  currencyCode,
  currencyName,
  paymentMethodIcons,
  paymentMethodIconsCheckOut,
  gbExchangeRate,
  usExchangeRate,
} from './logic/regionalData';
import eachOf from 'async/eachOf';

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const countryList = ['US', 'CA', 'EU', 'UK', 'SG', 'NZ', 'JP', 'HK', 'CN', 'MY'];

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
  console.log('AAAA4', node.characters);
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
  console.log('AAAA2', node.characters + 'SSS');
  console.log(
    'AAAA5',
    node.name,
    isRate,
    oldAmount,
    parseFloat(oldAmount),
    parseFloat(exchangeRate[countryCode]),
    round,
  );

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

export const operate = async (selectedComponent, key, global) => {
  const { flagValues, paymentVariants, cardVariants, visaVariantDark, visaVariantLight, x, y } =
    global;

  console.log('KKKEY', key);
  await sleep(3000);
  console.log('KKKEY2', key);
  const opearateCountry = async (countryCode, key) => {
    // console.log('KKKEY-int', countryCode, key);
    // // await sleep(10000);
    // console.log('KKKEY2-int', countryCode, key);
    const newComponent = selectedComponent.clone();
    console.log('TTTTTT', newComponent);

    newComponent.name =
      selectedComponent?.name?.replace('-AU-localized', '').replace('-US-localized', '') +
      '-' +
      countryCode.toUpperCase() +
      '-localized';

    console.log(selectedComponent?.name, 'LLLLLL4', countryCode);
    const values = regionalData[countryCode as keyof typeof regionalData];

    console.log(selectedComponent?.name, 'LLLLLL8', countryCode, newComponent);

    // Dynamic currencies
    const dynamicCurrencyNodes = newComponent?.findAll((node) =>
      node?.name?.startsWith('awx-dynamic-currency'),
    );
    console.log(selectedComponent?.name, 'LLLLLL5', dynamicCurrencyNodes);

    const dynamicCurrencyAmountNodes = newComponent?.findAll((node) =>
      node?.name?.startsWith('awx-dynamic-amount'),
    );

    // const rateNodes = newComponent?.findAll((node) => node?.name?.startsWith('awx-rate'));
    const visaNodes = newComponent?.findAll((node) => node?.name?.startsWith('awx-visa'));
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

    const codeNodes = newComponent?.findAll((node) => node?.name?.startsWith('awx-code'));

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

    const tabularNode = newComponent?.findOne((node) => tables.includes(node?.name));

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
          console.log('YYY', rowNode, flag);
          const replacementNode =
            flagValues[newValues[0]] || cardVariants[newValues[0]] || paymentVariants[newValues[0]];

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

    const valueNodes = newComponent?.findAll((node) => Object.keys(values).includes(node?.name));

    Object.keys(values).forEach(async (key) => {
      const nodes = valueNodes.filter((node) => node?.name === key);
      nodes?.forEach((node) => {
        console.log(selectedComponent?.name, 'replacing', countryCode, key, node);
        if (node && node.type === 'TEXT') {
          console.log('OKKK');
          node.characters = '' + values[key] || ' ';
        } else if (node && node.type === 'INSTANCE') {
          // const replacementNode = figma.currentPage.findOne((node) => node?.name === values[key]);

          const replacementNode =
            flagValues[values[key]] || cardVariants[values[key]] || paymentVariants[values[key]];
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
    // const backgroundRegions = backgroundData[countryCode];
    // backgroundRegions.forEach((backgroundRegion, index) => {
    //   const backgroundValues = generateBackgroundValues(backgroundRegion, index + 1);
    //   const tempBackgroundNodes = newComponent?.findAll((node) =>
    //     Object.keys(backgroundValues).includes(node?.name),
    //   );
    //   Object.keys(backgroundValues).forEach((key) => {
    //     const nodes = tempBackgroundNodes.filter((node) => node?.name === key);
    //     nodes?.forEach((node) => {
    //       console.log(
    //         selectedComponent?.name,
    //         'replacing backgroundValues',
    //         backgroundRegion,
    //         key,
    //         node,
    //         node?.type,
    //       );
    //       if (node && node.type === 'TEXT') {
    //         console.log(
    //           selectedComponent?.name,
    //           'OKKK2',
    //           node?.name,
    //           currency[backgroundRegions[index]],
    //           backgroundValues[key],
    //         );
    //         const level = index + 1;
    //         if (node?.name === 'awx-dynamic-currency-base-' + level) {
    //           node.characters =
    //             '' +
    //               node.characters
    //                 ?.replaceAll(
    //                   /USD|EUR|GBP|AUD|HKD|SGD|CNY|MYR|JPY|NZD|CAD/gi,
    //                   currency[backgroundRegions[index]],
    //                 )
    //                 ?.replaceAll(/\$/gi, currencyCode[backgroundRegions[index]])
    //                 ?.replaceAll(
    //                   /Great Britain Pound|Australian Dollar|Singapore Dollar|Euro|United States Dollar|Hong Kong Dollar|Chinese Yuan|Malaysian Ringit|Japanese Yen|New Zealand Dollar|Canadian Dollar/gi,
    //                   currencyName[backgroundRegions[index]],
    //                 ) || ' ';
    //         } else {
    //           node.characters = '' + backgroundValues[key] || ' ';
    //         }
    //       } else if (node && node.type === 'INSTANCE') {
    //         const replacementNode =
    //           flagValues[backgroundValues[key]] ||
    //           cardVariants[backgroundValues[key]] ||
    //           paymentVariants[backgroundValues[key]];

    //         // const replacementNode = figma.currentPage.findOne(
    //         //   (node) => node?.name === backgroundValues[key],
    //         // );
    //         if (replacementNode) {
    //           if (replacementNode.type === 'INSTANCE') {
    //             node.swapComponent(replacementNode.mainComponent);
    //           } else if (replacementNode.type === 'COMPONENT') {
    //             console.log(
    //               selectedComponent?.name,
    //               'SWAPPING COMPONENT',
    //               node?.name,
    //               replacementNode?.name,
    //             );
    //             node.swapComponent(replacementNode);
    //           }
    //         }
    //       }
    //     });
    //   });
    // });

    console.log(selectedComponent?.name, 'LLLLLL8', countryCode);

    // fix payment icons
    const paymentIconParents = newComponent?.findAll(
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
          paymentIconParent.appendChild(newNode);
        });
      });
    }

    // fix payment icons
    const paymentIconCheckoutParents = newComponent?.findAll(
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
    x += Math.max(newComponent.width + 200, 1500);
  };

  //   eachOf(countryList, opearateCountry, (err) => console.log(err));

  const countryPromises = countryList.map(async (item, index) => {
    await opearateCountry(item, index);
  });

  await Promise.all(countryPromises)
    .then(() => {
      console.log('All operations completed.');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });

  //   x = MAIN_X;
  //   y += selectedComponent.height + 200;
};
