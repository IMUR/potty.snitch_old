// jest.setup.js
global.window.google = {
    maps: {
      Map: class {
        constructor() {
          return {
            addListener: jest.fn(),
            setCenter: jest.fn(),
          };
        }
      },
      Marker: class {
        constructor() {
          return {
            addListener: jest.fn(),
          };
        }
      },
      InfoWindow: class {
        constructor() {
          return {
            open: jest.fn(),
            close: jest.fn(),
          };
        }
      },
    },
  };