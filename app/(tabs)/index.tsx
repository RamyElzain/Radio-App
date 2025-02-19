import {Text, StyleSheet, Image, ScrollView, View} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Header from './header';

const index = () => {
  return (
    <View>
    <Header />

    <ScrollView 
      contentContainerStyle={styles.contentContainer} 
      showsVerticalScrollIndicator={false}
    >
      <Image source={require('@/assets/images/image 2.png')} style={styles.img}/>  
      <Link href="/settings" style={styles.text1}>97.7 Record FM - Tusabula its all day</Link>
        <View style={styles.line} />

      <Image source={require('@/assets/images/image.png')} style={styles.img1}/>  
      <Text style={styles.text1}>News</Text>
      <View style={styles.line} />

      <View style={styles.box}> 
        <Image source={require('@/assets/images/image 3.png')} style={styles.img2}/>  
        <Text style={styles.text}>Women Creating Wealth Graduates tipped on having...</Text>
      </View>

      <Text style={styles.text1}>Listen To Our Podcast</Text>
      <View style={styles.line} />


      <View style={styles.box2}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.box3}>
            <Image source={require('@/assets/images/image 6.png')} style={styles.img1}/>   
            <Text style={styles.text}>Gospel Singer Levixone Talks Copyright, Parenting, Woes</Text>
          </View>
        ))}
      </View>
     
  <Image source={require('@/assets/images/image 9.png')} style={styles.img} />
  <Text style={styles.text}>Private Sector Foundation Uganda (PSFU) commits to supporting the Arts and Creative Industry</Text>


  <Text style={styles.text1}>Our Best Shows</Text>
  <View style={styles.line} />



  <View style={styles.box2}>
        {[...Array(3)].map((_, index) => (
          <View key={index} style={styles.box4}>
            <Image source={require('@/assets/images/image 11.png')} style={styles.img1}/>   
            <Text style={styles.text}>Gospel Singer Levixone Talks Copyright, Parenting, Woes</Text>
          </View>
           ))}
      </View>
          



    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 2, 
    alignItems: 'center',
    paddingBottom: 50, 
    backgroundColor:'#171717'
  },
  box:{
    width: '70%',
    height: 200,
  },
  box2:{
    width: '100%',
    flexDirection: 'row',
    justifyContent:'center',
   },
  box3:{
    width: '25%',
    marginBottom: 10,
},
box4:{
  width: '30%',
  marginBottom: 10,
  
  
},
  text: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    color:'white'
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FE6245',
    marginTop: 20,
    marginBottom: 10,

  },
  img:{
    width: '100%',
    height: 200,
    resizeMode: 'cover',

  },
  img1:{
    width: '85%',
    height: 140,
    resizeMode: 'cover',
    marginTop:10,
    borderRadius:20

  },
  img2:{
    width: '100%',
    height: 150,
    borderRadius:20
  },
  line: {
    backgroundColor:'#FE6245',
    width: '80%',
    height:1,
    marginVertical: 5,
    marginBottom:20
  },
});

export default index;
