import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from 'react-native-maps';
import { View, Text, Image } from "react-native";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth, db } from '../firebase';
import { useState } from "react";
import { Button } from "react-native/Libraries/Components/Button";

const Map = () => {


  const [mapPoints, setMapPoints] = useState([{lat: 30.283985 , long:-97.729723, poster:"Shrey Birmiwal", image:"https://www.pinclipart.com/picdir/big/52-527957_dog-health-monitoring-by-keeping-track-of-poop.png"},
   {lat: 30.297678, long:-97.724702, poster:"John Doe", image:"s"},
   {lat: 30.280631 , long:-97.734830, poster:"Mario Smith", image:"s"},
   {lat: 30.284078,  long:-97.725775, poster:"Edwin Newman", image:"s"},
   {lat: 30.293602,  long:-97.739122, poster:"Ellie Taylor", image:"s"},
   {lat: 30.294565,  long:-97.708394, poster:"Elise James", image:"s"},
   {lat: 30.282447,  long:-97.729208, poster:"Kylie Reyes", image:"s"},
   {lat: 27.8223,  long:-97.749378, poster:"Fiona Long", image:"s"},
   {lat:  30.282299, long:-97.753155, poster:"Palmer Wright ", image:"s"},
  
   {lat: 30.265256,  long:-97.723210, poster:"Elise James", image:"s"},
   {lat:  30.258913,  long:-97.723210, poster:"Kylie Reyes", image:"s"},
   {lat: 30.259542,  long:-97.739414, poster:"Fiona Long", image:"s"},
   {lat:  30.272909, long:-97.735226, poster:"Palmer Wright ", image:"s"}
  
  ])

  //30.265256, -97.726669
  //30.258913, -97.723210
  //30.259542, -97.740749
  //30.272909, -97.739414
  //30.272909, -97.735226



  //30.280631, -97.734830
  //30.284078, -97.725775
  //30.293602, -97.739122
  //30.294565, -97.708394
  //30.282447, -97.729208
 // 30.278223, -97.749378
  //30.282299, -97.753155


  return (
    
    <View>
      
        <MapView style = {styles.map}
          initialRegion={{
          latitude: 30.283985,
          longitude: -97.729723,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}
          >
                  
          <View>
            {mapPoints.map(arrayKey => {
              return (
                
                <Marker coordinate={{ latitude : arrayKey.lat , longitude : arrayKey.long }}>
                  <Callout>
                    <View>
                      <Image source={{uri: arrayKey.image }} style={styles.picture}/>

                      <Text styles={styles.poster}> {arrayKey.poster} </Text>
      
                    </View>
                  </Callout>
               </Marker>

              );
            })}
          </View>

      
            

        </MapView>
        
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	map: {
		width: "100%",
		height: "100%"
	},
  picture: {
    width: 90,
    height: 90,
  },
  poster : {
    marginTop: "10px",

  }
})

export default Map;