import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export function CreditCard(props: any) {
  return (
    <ThemedView>
        <ThemedText>Card</ThemedText>
    </ThemedView>
  )
}

export function DebitCard(props: any) {
    return (
        <ThemedView>
            <ThemedText>Card</ThemedText>
        </ThemedView>
    )
}

export function OtherCard(props: any) {
    return (
        <ThemedView>
            <ThemedText>Card</ThemedText>
        </ThemedView>
    )
}