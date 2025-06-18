import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.iusegales.walletmanager',
  appName: 'Wallet Manager',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
