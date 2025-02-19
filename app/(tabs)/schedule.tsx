import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import React from 'react';
import Header from './header';

const Schedule = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />

                <View style={styles.contentContainer}>
                <Text style={styles.text1}>Weekly Schedule </Text>

                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={true} 
                    contentContainerStyle={styles.scrollContainer}>

                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                        <View key={index} style={styles.box1}>          
                            <View style={styles.textContainer}>
                                <Text style={styles.text2}>{day}</Text>            
                            </View> 
                        </View>
                    ))}
                </ScrollView>
                    
                    <View style={styles.box}>          
                    <Text style={styles.text}>Monday</Text>
                    
                    <View style={styles.textContainer1}>
                        <Text style={styles.text3}>8:00 AM</Text>            
                        <Text style={styles.text3}>Morning Mediation & Plannind</Text>
                           </View>

                    <View style={styles.textContainer1}>
                        <Text style={styles.text3}>12:00 PM</Text>            
                        <Text style={styles.text3}>Work on Design</Text>
                    </View>

                    <View style={styles.textContainer1}>
                           <Text style={styles.text3}>5:00 PM</Text>            
                           <Text style={styles.text3}>Code Review</Text>
                    </View>
                     
                    <View style={styles.textContainer1}>
                           <Text style={styles.text3}>8:00 PM</Text>            
                           <Text style={styles.text3}>Relax & Read a Book</Text>
                    </View>
                    
                    </View>
                    </View>
 
                    </View>
        )}
    
    export default Schedule;

    const styles = StyleSheet.create({
        contentContainer: {
            flex: 1, 
            alignItems: 'center',
            backgroundColor: '#171717', 
        },
        text1: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FE6245',  
        },



        scrollContainer: {
            marginTop:30 ,
       },
        box1: {
            width: 100, 
            height: 50, 
            backgroundColor: '#FE6245',
            marginHorizontal: 5, 
            borderRadius: 9,
        },
        text2: {
            fontWeight: 'bold',
            fontSize: 15,
            color: 'white',
            
        },
        textContainer: {
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
            marginLeft:5
        },



        box: {
            width: '80%',
            height: 250,
            borderRadius: 20,
            borderColor: 'black',
            borderWidth: 1,
            backgroundColor: '#1F1F1F',

        },
        textContainer1: {
            flex: 1,
        },
        text: {
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
            marginLeft:10
        },
        text3: {
            fontWeight: 'bold',
            fontSize: 14,
            color: 'white',
            marginLeft:30,
            lineHeight:20
        },
    });
