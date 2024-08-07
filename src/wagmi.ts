import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  haqqMainnet, haqqTestedge2
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Barakah App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    haqqMainnet, haqqTestedge2
  ],
  ssr: true
});