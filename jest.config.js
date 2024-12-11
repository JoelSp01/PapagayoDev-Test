module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@class/(.*)$': '<rootDir>/src/class/$1',  // Mapeamos la carpeta 'class'
    },
  };
  