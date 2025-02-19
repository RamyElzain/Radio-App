import { Text, StyleSheet, Image, ScrollView,View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import Header from './header';


const news1 = () => {
    return (
      <View style={{ flex: 1 }}>
    <Header />
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
             <Link href="/prod" style={styles.img}> <Image style={styles.img} source={require('@/assets/images/image 10.png')}  /></Link>
             <View style={styles.textcontainer}>
                <Text style={styles.text}>The 12th edition of the prestigious HiPipo Music Awards (HMA) has recently announced its nominees for 2023, and the excitement is palpable! Celebrating musical excellence across Africa, the awards are set to take place at the Kampala Serena Hotel on November 17th.
The nominations feature a diverse array of talent across thirteen categories, showcasing the rich musical landscape of Uganda, East Africa, and the entire continent. Innocent Kawooya, the CEO of HiPipo, has called upon music enthusiasts to cast their votes, emphasizing the significant role these awards play in recognizing exceptional musical contributions.
The voting phase is currently open and will conclude on November 17th, culminating in an evening dedicated to honouring the best in African music. As the world eagerly awaits the results, the HiPipo Music Awards promises an unforgettable event filled with stellar performances and dazzling highlights.
Categories Open for Public Nominations:
Africa
Africa Best ACT
Ayra Starr – Sability
Bien x DJ Edu – Too Easy
Burna Boy – Rollercoaster (feat. J Balvin)
Davido – UNAVAILABLE Ft. Musa Keys
Diamond Platnumz – Yatapita
Fik Fameica Ft. Cassper Nyovest, Khaligraph Jones & Navio – Mafia Remix
Joshua Baraka – NANA Remix (Feat. Joeboy, King Promise & BIEN)
Jux Ft. Diamond Platnumz – Enjoy
Kizz Daniel, Empire – Cough
Rexxie, Naira Marley & Skiibii – Abracadabra (Remix Ft. Wizkid)
Ruger – Asiwaju
Spyro Ft. Tiwa Savage – Who is your Guy? Remix
Victony & Tempoe – Soweto
Africa Best Video
Afande Miah & Afande OJ – Mambo Bado
Asake – Organise
A’shaan – Problem
Burna Boy – Big 7
Diamond Platnumz Ft. Koffi Olomide – Achii
Kcee – Ojapiano
Kizz Daniel, Empire – Cough
Kuami Eugene, Rotimi – Cryptocurrency
Mbosso – Huyu Hapa
Patoranking – ABOBI
TOOFAN – C’EST PAS NORMAL
Wendy Shay – Habibi
Zuchu Ft Innoss’B – Nani Remix
Africa Number One
Asake
Ayra Starr
Burna Boy
Davido
Diamond Platnumz
Fireboy
Kizz Daniel
Rema
Sheebah
Tiwa Savage
 East Africa
East Africa Super Hit
Bien – Inauma
Billnass Ft Jay Melody – Puuh
Deejay Pius – BONANE Ft Alyn Sano & Bushali Visualiser
Diamond Platnumz – Yatapita
Element EleéeH – FOU DE TOi Feat Ross Kana & Bruce Melodie
</Text>
</View>
        </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    contentContainer: {
      flexGrow: 1,
      alignContent: 'center',
      alignItems:'center',
      backgroundColor: '#171717',
      
      
    },
    text: {
      fontSize: 24,
      marginTop: 5,
      textAlign: 'left',
      padding:10,
      lineHeight: 27,
      color:'white'
      
    },
    img: {
      width: 300,
      height: 180,
      borderRadius:20,
      marginTop:10
    },
    textcontainer:{
      width:'100%',
      height:'100%',
}
});
export default news1;
