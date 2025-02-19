import {Text, StyleSheet, Image, View, TextInput,TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';


const signin = () => {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/image 1.png')} style={styles.img} />
            <Text style={styles.text1}>Enter Your Account Details</Text>

            <TextInput style={styles.input} placeholder='user name'/>
            <TextInput style={styles.input} placeholder='password'/>

            <TouchableOpacity style={styles.button0} >
                       <Link href="/" style={styles.text2}>Sign in</Link>
                </TouchableOpacity>
                <Text style={styles.text1}>
                       Don't have an account? <Link href="/" style={styles.text3}>Sign Up</Link>
                  </Text>

      <TouchableOpacity style={styles.button0}>
        <Link href="/" style={styles.text2}>
          <Icon name="logo-google" size={20} color="white" /> Sign Up with Google
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button0}>
        <Link href="/" style={styles.text2}>
        <Icon name="logo-apple" size={20} color="color" /> Sign Up with Apple</Link>
      </TouchableOpacity>
        </View>
        
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#171717',

       },
    text1: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white',
    },
    text2: {
      marginTop: '2%',
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 8,
      color:'white',
    },
    text3: {
      marginTop: 40,
      fontSize: 17,
      marginBottom: 8,
      color: '#FE6245',
    },
    img:{
        width: 200,
        height: 200,
    },
    input: {
      height: 60,
      width: 300,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      paddingHorizontal: 8,
      marginTop: 20,
      backgroundColor:'#D9D9D9',
      alignContent:'center',    
    },
    button0: {
      width: 270,
      height: 50,
      backgroundColor: '#61779E',
      marginTop: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
})

export default signin;