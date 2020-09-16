import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput,Button } from 'react-native'
import ListItems from './components/ListItems';
import {default as UUID} from "uuid";  
import ButtonItem from './components/ButtonItem';

export default class App extends Component {
  constructor(props){
    super(props)
      this.state={
        listItems:[],
        text:'',
    }
    this.submit=this.submit.bind(this);
    this.delete=this.delete.bind(this);
  }
  
    onEdit=id=>{
      var elementsIndex = this.state.listItems.findIndex(item=>
          item.id===id)
        var NewListItem=[...this.state.listItems];

      NewListItem[elementsIndex]=
      {
        ...NewListItem[elementsIndex],
        edit:!NewListItem[elementsIndex.edit]
      }
       
        this.setState({
          listItems:NewListItem,
        })
    }

    delete=(id)=>{
      var elementsIndex = this.state.listItems.findIndex(item=>
        item.id===id)
        var NewList=[...this.state.listItems];
      var deleteItem=NewList.splice(elementsIndex,1)
        var k=[];

        for(var i=0;i<NewList.length;i++){
          if(NewList[i].id!==deleteItem.id){
            k.push(NewList[i])
          }

        }
        
        this.setState({
          listItems:k
        })


        
        console.log(k)
    }

    submit=()=> {
      const {listItems,text}=this.state;

      var newItem={
        id:UUID.v4(),
        texts:text,
        edit:false,
        delete:false,
      }
      this.setState({
        listItems:[...listItems,newItem],
        text:'',
      })

  }

  render() {
  
    return (
      <View style={styles.container}>
        <Text> To Do List </Text>
        <TextInput style={styles.Input} placeholder="Tasks for Today" 
                   onChangeText={  (text)=>this.setState({text})}
                   clearButtonMode='always'   
                   value={this.state.text}                
                   />
          <Button onPress={this.submit} style={styles.button} title="Submit"/>
  
    <ListItems text={this.state.text} listItems={this.state.listItems} delete={this.delete} onEdit={this.onEdit}/>
    
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
  },
  Input:{
    borderColor:'black',
    borderWidth:0.5,
    height:40,
    marginBottom:10,
    width:'85%',

  },
  button:{
    padding:10,
  },
})