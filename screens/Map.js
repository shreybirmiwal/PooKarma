import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from 'react-native-maps';
import { View, Text, Image } from "react-native";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth, db } from '../firebase';
import { useState } from "react";
import { Button } from "react-native/Libraries/Components/Button";

const getData = async () => {

  const querySnapshot = await getDocs(collection(db, "poops"));
  var row = []

  querySnapshot.forEach((doc) => {

    //console.warn(doc.data().long, " ", doc.data().lat , " " , doc.data());
    row.push({lat : doc.data().lat, long : doc.data().long, poster : doc.data().poster, image : doc.data().image})
  
  });

  
  return row

}


const Map = () => {

  //const [data, setData] = useState([]);
  //const [loaded, setLoading] = useState(false);

  //useEffect(() => {
    //setData(getData())
    //setData([{lat: 0, long:1, poster:"s", image:"s"}])
    //setLoading(true)

  //}, []);

  const [mapPoints, setMapPoints] = useState([{lat: 0, long:1, poster:"s", image:"s"}, {lat: 0, long:1, poster:"s", image:"s"}, {lat: 0, long:1, poster:"s", image:"s"},{lat: 0, long:1, poster:"s", image:"s"},{lat: 0, long:1, poster:"s", image:"s"}])


  return (
    <View>

      <Button
        title="testing"
        onPress = {checkStatus()}
      />
      
        <MapView style = {styles.map}
          initialRegion={{
          latitude: 30.78825,
          longitude: -100.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          >


          <Marker coordinate={{ latitude : 30 , longitude : -100 }}>
            <Callout>
              <View>
                <Image source={{uri: 'https://www.pinclipart.com/picdir/big/52-527957_dog-health-monitoring-by-keeping-track-of-poop.png'}} style={styles.picture}/>
                <Text styles={styles.poster}> Shrey Birmiwal </Text>

              </View>
            </Callout>
          </Marker>
            

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