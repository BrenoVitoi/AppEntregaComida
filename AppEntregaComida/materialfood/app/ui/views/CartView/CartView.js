import React from 'react';
import { SafeAreaView } from 'react-native';



export default function CartView(props) {
    return(
        <SafeAreaView>
            <Appbar.Header>
                <Appbar.Content title="Carrinho" />
            </Appbar.Header>
        </SafeAreaView>
    )
}