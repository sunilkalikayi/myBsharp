/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends React.Component {
  render() {
    return (
      <View style={styles.card}>
       <View style={styles.image}><Text>image</Text></View>
       <View style={styles.flex}>
         <Text style={styles.language}>Telugu</Text>
         <Text style={styles.courseName}>Guitar Course</Text>
         <Text style={styles.courseCost}>$59</Text>
       </View>
       <View>
         <Text style={styles.details}>
            Some text to tell about the course. This should ideally
          be around 3 to 4 lines but the maximum it can go is upto
          6 lines but it should have at least 3 lines. This is the bare
          Minimum so added another line to make it 4.
         </Text>
       </View>
       <View style={styles.flex} >
         <Text style={styles.registerBtn}>Register</Text>
         <Text style={styles.teacherBtn}>Teacher</Text>

         
       </View>
       

       
    </View>
    );
  }
}

export default App;


const styles= StyleSheet.create({
  card:{
    height:523,
    width:'85%',
    margin:10,
    borderWidth:0.2,
    borderColor:'lightgrey',
    borderRadius:10,
    alignContent:'center',
    margin:25
  },
  image:{
    width:'100%',
    height:295,
    backgroundColor:"lightgrey",
    justifyContent:'center',
    borderTopStartRadius:15,
    borderTopRightRadius:15,
    alignContent:'center',
    alignItems:'center'
  },
  flex:{
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    marginLeft:15,
  },
  language:{
    backgroundColor:'lightgrey',
    height:10,
    width:30,
    textAlign:'center',
    alignContent:'center',
    borderRadius:8,
    fontSize:7,
    fontFamily:'poppins',
    marginTop:5,
    backgroundColor:'#EEEEEE'
    
  },

  courseName:{
    fontFamily:'Raleway',
    fontSize:15,
    fontWeight:'700',
    left:25,
    color:'#292629',

  },
  courseCost:{
    fontSize:9,
    left:125,
    marginTop:5,
    color:'#292629'

  },
  details:{
    marginTop:10,
    marginLeft:16,
    fontFamily:'Raleway',
    color:'#292629',
    width:'90%',
    fontSize:12,
    lineHeight:20


  },
 
  registerBtn:{
    color:'#fff',
    fontSize:11,
    fontFamily:'Poppins',
    height:28,
    width:82,
    backgroundColor:'#292929',
    borderRadius:6,
    textAlign:'center',
    textAlignVertical:'center',


  },
  teacherBtn:{
    color:'#292929',
    fontSize:11,
    fontFamily:'Poppins',
    height:28,
    width:82,
    backgroundColor:'#EEEEEE',
    left:5,
    borderRadius:6,
    textAlign:'center',
    textAlignVertical:'center',

    

  },
  
})