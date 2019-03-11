import React, { Component } from 'react';
import {
    Text, Button
} from 'native-base'
import {
    TouchableOpacity, StyleSheet, View
} from 'react-native'

export interface State {
    activeBtn: any
}
export default class GroupButtonComponent extends Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            activeBtn: 1
        }
    }

    changeActiveButton = (activeBtn) => {
        return () => {
            this.setState({
                activeBtn
            })
        }
    }

    render() {
        const { activeBtn } = this.state
        const leftActive = activeBtn == 1
        const rightActive = activeBtn == 2
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} style={[styles.button, styles.buttonLeft, leftActive ? styles.activeButton : styles.inactiveButton]} onPress={this.changeActiveButton(1)}>
                    <Text style={[styles.label, leftActive ? styles.activeLabel : styles.inactiveLabel]}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={[styles.button, styles.buttonRight, rightActive ? styles.activeButton : styles.inactiveButton]} onPress={this.changeActiveButton(2)}>
                    <Text style={[styles.label, rightActive ? styles.activeLabel : styles.inactiveLabel]}>2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150
    },
    button: {
        backgroundColor: 'black',
        height: 60,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLeft: {
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    buttonRight: {
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
    activeButton: {
        borderWidth: 3,
        borderColor: '#F3B068',
    },
    inactiveButton: {
        borderWidth: 1.5,
        borderColor: '#2c2c2c',
    },
    label: {
        fontSize: 25
    },
    activeLabel: {
        color: '#fff'
    },
    inactiveLabel: {
        color: '#666666'
    }
});