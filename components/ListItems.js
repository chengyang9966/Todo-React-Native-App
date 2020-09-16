import React from 'react'
import { Text, View,StyleSheet, Button, TextInput } from 'react-native'
import ButtonItem from './ButtonItem';


 
    const ListItems=(props)=>{
     const TodoItem=  props.listItems.map((item)=>{
            return( 
                    item.edit?
                    <View style={styles.item}>
                        <TextInput style={styles.text} defaultValue={item.texts}/>
                        <View  style={styles.buttonDelete}>
                        <Button color='red' title="Delete" onPress={()=>props.delete(item.id)}/>
                        </View>
                    </View>:
                <View style={styles.item}>
                <ButtonItem itemId={item.id} onEdit={props.onEdit}/> 
               </View>
            )
       })
        
        if (props.listItems.length!=0){
             return(  
                 <View style={styles.container}>
                        {TodoItem}
 
                 </View>   
                        
            ) }
            else{
              return null
            }
        }    
    
    export default ListItems

const styles=StyleSheet.create({

    buttonDelete:{ 
        position:"absolute",
        right:3,
        width:'10%',
        marginTop:3,
        alignItems:"flex-end",
    },
    container:{
        textAlign:"center",
        width:'85%',
       position:"relative",
    },
    item:{
        borderWidth:1,
        marginTop:10,
        marginBottom:10,
        height:45,
    },
    text:{
        color:"red",  
        paddingTop:10,
        height:45,
        textAlign:"center",
    },


})