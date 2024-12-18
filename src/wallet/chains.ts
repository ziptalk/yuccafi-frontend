import { defineChain } from 'viem';

export const botanixTestnet = defineChain({
  id: 3636,
  name: 'Botanix Testnet',
  nativeCurrency: {
    name: 'BOTANIX',
    symbol: 'BTC',
    decimals: 6,
  },
  rpcUrls: {
    default: {
      http: ['https://node.botanixlabs.dev'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Botanix Explorer',
      url: 'https://blockscout.botanixlabs.dev',
    },
  },
  testnet: true,
});

export const KaiaTestnet = defineChain({
  id: 1001,
  name: 'Kaia Testnet Kairos',
  nativeCurrency: {
    name: 'KAIRO',
    symbol: 'KAIA',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://public-en-kairos.node.kaia.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Kaia Testnet Explorer',
      url: 'https://kaia-kairos.blockpi.network/v1/rpc/public',
    },
  },
  testnet: true,
});

export const KaiaMainnet = defineChain({
  id: 8217,
  name: 'Kaia Mainnet',
  nativeCurrency: {
    name: 'KLAY',
    symbol: 'KLAY',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://public-en.node.kaia.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Kaia Testnet Explorer',
      url: 'https://kaiascope.com',
    },
  },
  testnet: true,
});
