import {Text, StyleSheet, View,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Header from './header';

const settings = () => {
    return (
      <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.box1}>
        
      <View style={styles.box2}>
        </View>
        
<Text style={styles.text2}>User Name:</Text> 
<Text style={styles.text}>Ramy Elzain</Text>
        </View>


      <View style={styles.contentContainer}>
        <Text style={styles.text1}>Ntifications</Text>
        <View style={styles.box}> 
          <Text style={styles.text}>Allow Push Notifications </Text>
          
          <View><TouchableOpacity>
          <Ionicons size={28} name="chevron-forward-outline"/> 
                </TouchableOpacity>
            </View>
        
        </View>

        <Text style={styles.text1}>About Us</Text>
        <View style={styles.box}> 
          <Text style={styles.text}>Privacy Policy</Text>

          <View><TouchableOpacity>
           <Ionicons size={28} name="chevron-forward-outline"/> 
                </TouchableOpacity>
            </View>
        
        </View>

        
        <View style={styles.box}> 
          <Text style={styles.text}>App Version</Text>
        </View>

            

        
      </View>
      </View>
        

    );
};

const styles= StyleSheet.create({
    contentContainer: {
        flex: 1, 
        alignItems: 'flex-start',
        backgroundColor:'#171717'

      },
      box:{
        width:"100%",
        height:50,
        justifyContent: 'space-between',  
        alignItems: 'center',
        borderColor:'black',
        borderWidth:1,
        flexDirection:'row'
      },
      box1:{
        width:'100%',
        height:'20%',
        backgroundColor:'#FE6245',
        flexDirection:'row',
        alignItems:'center'
        
      },
     box2:{
        width:'25%',
        height:'60%',
        backgroundColor:'white',
        borderRadius:'100%',
        marginLeft:10,

      },
      text:{
        fontSize: 14,
        marginTop: 5,
        marginLeft:5,
        color:'white'
      },
      text1:{
        fontSize: 17,
        marginTop: 30,
        marginLeft:5,
        textAlign: 'center',
        fontWeight:'bold',
        color: '#FE6245',
      },
      text2:{
        fontSize: 14,
        fontWeight:'bold',
        marginLeft:10,
        color:'white'



       
      },


})
export default settings;
