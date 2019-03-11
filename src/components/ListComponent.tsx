import React, { Component } from 'react';
import {
    Text
} from 'native-base'
import {
    Image, FlatList, TouchableOpacity, StyleSheet, View
} from 'react-native'

export interface Props {
    list: any; // Accepts array of object {name, image} (other keys can be added)
}
export interface State { }
export default class ListComponent extends Component<Props, State> {
    onSelectItem = (item) => {
        return () => {
            console.log("item selected here", item)
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.columnContainer} onPress={this.onSelectItem(item)}>
                <View style={styles.column}>
                    <Image source={{ uri: item["image"] }} style={styles.image} />
                    <Text style={styles.label}>
                        {item["name"].toUpperCase()}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={this.props.list}
                keyExtractor={(item, idx) => idx.toString()}
                renderItem={this.renderItem}
                numColumns={2}
            />
        )
    }
}

const styles: any = StyleSheet.create({
    columnContainer: {
        flex: 0.5,
        padding: 20
    },
    column: {
        height: 350,
        alignItems: 'center'
    },
    label: {
        color: '#fff',
        paddingTop: 20,
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: '80%',
        // flex: 1,
        alignSelf: 'stretch'
    }
});