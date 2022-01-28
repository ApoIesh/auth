import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = (props) => {

    return (
        <View style={styles.viewStyle} >
            <Text style={styles.textStyle} >{props.headerText}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#ddd',
        shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 10.9,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20,

    }
});



export { Header };