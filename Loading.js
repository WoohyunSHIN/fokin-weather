import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return <View style={styles.constainer}>
        <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
}

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        justifyContent:"flex-end",
        
        /*
        css 는 없는 것이지만 
        paddingHorizontal
        paddingVertical 
        을 사용하여 원하는 것의 위치값을 줄 수 있다.
        */
        paddingHorizontal:30,
        paddingVertical: 100,
        backgroundColor:"#FDF6AA"
    },
    text:{
        color:"#2c2c2c",
        fontSize: 30
    }
});