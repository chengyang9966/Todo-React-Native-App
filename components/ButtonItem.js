import React, { Component } from 'react'
import { Text, View,Button,StyleSheet } from 'react-native'

export default class ButtonItem extends Component {
    render() {
        const {itemId,onEdit}=this.props

        return (
            <View  style={styles.buttonDelete}>

            <Button color="green" title="Edit" onPress={onEdit(itemId)} />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    buttonEdit:{ 
        position:"absolute",
        right:65,
        width:'10%',
        alignItems:"flex-end",
    },
    buttonDelete:{ 
        position:"absolute",
        right:3,
        width:'10%',
        marginTop:3,
        alignItems:"flex-end",
    },
})