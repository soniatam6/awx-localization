import { UIActionTypes, UIAction, WorkerActionTypes, WorkerAction } from './types';
// import contentful from 'contentful';

import './ui.css';

// Sends a message to the plugin worker
function postMessage({ type, payload }: UIAction): void {
  parent.postMessage({ pluginMessage: { type, payload } }, '*');
}

// Listen to messages received from the plugin worker (src/plugin/plugin.ts)
function listenToPluginMessages(): void {
  window.onmessage = function (event: MessageEvent): void {
    const pluginMessage = event.data.pluginMessage as WorkerAction;
    const { type, payload } = pluginMessage;

    switch (type) {
      case WorkerActionTypes.REGIONAL_ASSETS_NOTIFY:
        payload && alert(payload);
        break;
    }
  };
}

// Close the plugin if pressing Esc key when the input is not focused
function closeWithEscapeKey(): void {
  const tagExceptions = ['input', 'textarea'];

  document.addEventListener('keydown', function (event: KeyboardEvent) {
    try {
      const target = event.target as HTMLElement;

      if (
        event.code.toString().toLowerCase() === 'escape' &&
        !tagExceptions.includes(target.tagName.toLowerCase())
      ) {
        postMessage({ type: UIActionTypes.CLOSE });
      }
    } catch (error) {
      console.error(error);
    }
  });
}

// const uploadContentful = async () => {
//   console.log('HHHH', contentful);
//   const client = await contentful.createClient({
//     accessToken: 'CFPAT-UanMbfzskutbiiryYlpyQX91G3XjNEJs8MWPYT--AuU',
//     space: 'sxag7u4cz1re',
//     environment: 'prashant',
//   });
//   console.log('NNN', client);
//   // await client.getCurrentUser().then((res) => console.log(res));
//   console.log('PPP4');
// };

// Attach event listeners (for this specific demo)
function buttonListeners(): void {
  document.addEventListener('click', function (event: MouseEvent) {
    const target = event.target as HTMLElement;
    console.log('AAA', target);

    switch (target.id) {
      case 'rectangleBtn':
        postMessage({ type: UIActionTypes.REGIONAL_ASSETS });
        break;
      case 'notificationBtn':
        postMessage({ type: UIActionTypes.NOTIFY, payload: { test: 'WWW' } });
        break;
      case 'uploadBtn':
        // uploadContentful();
        postMessage({ type: UIActionTypes.UPLOAD, payload: { test: 'KKKK' } });
        break;
      case 'closeBtn':
        postMessage({ type: UIActionTypes.CLOSE });
        break;
    }
  });
}

// Initialize all the things
listenToPluginMessages();
closeWithEscapeKey();
buttonListeners();
