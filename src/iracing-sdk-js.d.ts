declare module '../../iracing-sdk-js/src/iracing-sdk-js.js' {
  const irsdk: {
    init: (...args: any[]) => any;
    getInstance: () => any;
  };
  export = irsdk;
}
// This module declaration allows TypeScript to recognize the iracing-sdk-js module