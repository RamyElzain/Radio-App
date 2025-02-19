import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

const header = () => {
  return (
    <View style={styles.header}>
      

     

         <Link href="./news1" ><Icon name="notifications-outline" size={30} color="#FE6245" ></Icon></Link>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#171717',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:37,
    borderBottomColor:'white',
    borderBottomWidth:0.5
  },
  logo: {
    width: 50,
    height: 30,
  },
});

export default header;
