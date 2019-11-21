import React from 'react';
import {
    View, Text, ScrollView, StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground,
    ActivityIndicator, Platform, Image
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { PhoneComponent, data } from '../../../utils';

export default class Procedures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.flexArr = [1, 1]
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, }} contentContainerStyle={{ alignItems: 'center' }} >
                <View style={{
                    width: '85%', marginVertical: scale(15),
                    alignItems: 'center'
                }} >

                    <Text></Text>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    head: { height: scale(40), backgroundColor: '#f1f8ff' },
    title: {
        textDecorationLine: 'underline',
        fontSize: scale(24), color: '#4b5320',
        marginVertical: scale(15),
        alignSelf: 'center'
    },
    row: { height: scale(60), },
    text: { textAlign: 'center' }
})
