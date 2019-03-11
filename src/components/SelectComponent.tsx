import React, { Component } from 'react';
import {
    Text
} from 'native-base'
import {
    Picker, StyleSheet, View
} from 'react-native'

import DropdownMenu from 'react-native-dropdown-menu'

export interface Props {
}
export interface State {
    selectedItem: any
}

export default class SelectComponent extends Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: null
        }
    }

    changeActiveSelectItem = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    render() {
        var data = [["Sample 1", "Sample 2", "Sample 3"]]
        return (
            <View>
                <DropdownMenu
                    style={styles.container}
                    bgColor={'black'}
                    tintColor={'#666666'}
                    activityTintColor={'green'}
                    // arrowImg={}      
                    // checkImage={}   
                    // optionTextStyle={{color: '#333333'}}
                    // titleStyle={{color: '#333333'}} 
                    // maxHeight={300} 
                    handler={this.changeActiveSelectItem}
                    data={data}
                >

                    <View style={{ flex: 1 }}>
                        <Text>
                            {this.state.selectedItem} is the best language in the world
                        </Text>
                    </View>
                </DropdownMenu>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#2c2c2c',
        borderRadius: 30,
        backgroundColor: '#fff'
    },
    picker: {
        width: '100%',
        height: 500,
        color: '#fff'
    },
    selectItemLabel: {
        color: '#fff',
        fontSize: 25
    }
});