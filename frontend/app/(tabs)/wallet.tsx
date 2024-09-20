import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native'

import { CreditCard } from '@/components/wallet/cards'

export default function WalletTab() {
  return (
    <SafeAreaView style={ {flex: 1} }>
        <ThemedView style={styles.header}>
            <ThemedText type='subtitle'>Wallet</ThemedText>
        </ThemedView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
