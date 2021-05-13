import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import dictionary from '../database';

export default class HomeScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      text: '',
    }
  }
  
  getWord=(text)=>{
  var text = text.toLowerCase()
  try{
    var word = dictionary [text] ["word"]
    var lexicalCategory = dictionary [text] ["lexicalCategory"]
    var definition = dictionary [text] ["definition"]
    this.state({
      "word": word,
      "lexicalCategory": lexicalCategory,
      "definition": definition,
    })
  }
    catch(err){
      alert("Sorry this word is not avaiable for now")
      this.setState({
        'text': '',
        'isSearchPressed': false,
      })
    }
  }
  render(){
    return(
      <View>
      <TextInput 
       style={styles.inputBox}
        onChangeText={text => {
          this.setState({
            isSearchPressed: false,
            word: "Loading...",  
            lexicalCategory: '',
            examples: [],
            definition: "",
            text:text
          });
        }}
       value={this.state.text}
       
      />
      <TouchableOpacity 
       style={styles.searchButton}
       onPress={()=>{
         this.setState({isSearchPressed: true});
         this.getWord(this.state.text)
       }}>
       <Text style={styles.textStyle}>Go</Text>
       </TouchableOpacity>

      <View style={styles.detailsContainer}>
       <Text style={styles.detailsTitle}>
        Word: {" "}
       </Text>
       <Text style={{fontSize: 18}}>
        {this.state.word}
       </Text>
      </View>

      <View style={styles.detailsContainer}>
       <Text style={styles.detailsTitle}>
        Type: {" "}
       </Text>
       <Text style={{fontSize: 18}}>
        {this.state.lexicalCategory}
       </Text>
      </View>

      <View style={{flexDirections: 'row', flexWrap: 'wrap'}}>
       <Text style={styles.detailsTitle}>
        Definition: {" "}
       </Text>
       <Text style={{fontSize: 18}}>
        {this.state.definition}
       </Text>
      </View>
      </View>

      
    )
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',

  },
  detailsTitle: {
   fontSize: 18,
   fontWeight: 'bold',
  },
   inputBox: {
    width: '80%',
    alignSelf: 'center',
    height:40,
    textAlign: 'center',
    borderWidth: 4,
    marginTop: 20,
  },
  searchButton: {
    width: '30%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }
})