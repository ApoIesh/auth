import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.containerS} >
            <Text style={styles.labelS}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.inputs}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )

};
const styles =StyleSheet.create ({
    inputs: {
        flex: 3.5,
        fontSize: 18,
        // borderWidth:1,
        alignItems: 'center'
        

       
    },
    labelS: {
        paddingLeft: 5,
        fontSize: 18,
        flex: 1,
        alignItems: 'center'


    },
    containerS: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});


export { Input };