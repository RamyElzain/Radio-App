import { Text, StyleSheet, Image, TouchableOpacity, ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import Header from './header';



const news = () => {
  return (
    <View style={{ flex: 1 }}>  
    <Header />
    
<ScrollView 
      contentContainerStyle={styles.contentContainer} 
      showsVerticalScrollIndicator={false}
    >
      <Image source={require('@/assets/images/image 2.png')} style={styles.img} />

      <TouchableOpacity style={styles.button}>
        <Link href="/" style={styles.text3}>LOCAL</Link>
      </TouchableOpacity>

      <Image source={require('@/assets/images/image 6.png')} style={styles.img1} />
        <Text style={styles.text}>Private Sector Foundation Uganda (PSFU) commits to supporting the Arts and Creative Industry</Text>
      <Image source={require('@/assets/images/image 7.png')} style={styles.img1} />
        <Text style={styles.text}>Private Sector Foundation Uganda (PSFU) commits to supporting the Arts and Creative Industry</Text>
      

      <TouchableOpacity style={styles.button}>
        <Link href="/" style={styles.text3}>Business</Link>
      </TouchableOpacity>

      <Image source={require('@/assets/images/image 8.png')} style={styles.img1} />
      <Text style={styles.text}>Private Sector Foundation Uganda (PSFU) commits to supporting the Arts and Creative Industry</Text>
      <Image source={require('@/assets/images/image 9.png')} style={styles.img1} />
      <Text style={styles.text}>Private Sector Foundation Uganda (PSFU) commits to supporting the Arts and Creative Industry</Text>


      <TouchableOpacity style={styles.button}>
        <Link href="/" style={styles.text3}>ENTERTAINMENT</Link>
      </TouchableOpacity>

      <Link href="/" style={styles.img1}> <Image source={require('@/assets/images/image 10.png')} /></Link>
      <Text style={styles.text}>Private Sector Foundation Uganda (PSFU) commits to supporting the Arts and Creative Industry</Text>

      <Image source={require('@/assets/images/image 11.png')} style={styles.img1} />
      <Text style={styles.text}>Private Sector Foundation Uganda (PSFU) commits to supporting the Arts and Creative Industry</Text>


      <TouchableOpacity style={styles.button}>
        <Link href="/" style={styles.text3}>Global</Link>
      </TouchableOpacity>

      <Image source={require('@/assets/images/image 3.png')} style={styles.img1} />
      <Text style={styles.text}>Private Sector Foundation Uganda (PSFU) commits to supporting the Arts and Creative Industry</Text>


    </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 50, 
    backgroundColor:'#171717'

  },
  text: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    color: 'white',

  },
  text3: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover',
  },
  img1: {
    width: '85%',
    height: 150,
    marginTop: 10,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#FE6245',
    width: '40%', 
    height: 50, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5, 
  }
});

export default news;
