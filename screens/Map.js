import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from 'react-native-maps';
import { View, Text, Image } from "react-native";

const Map = () => {

  return (
    <View>
        <MapView style = {styles.map}
          initialRegion={{
          latitude: 30.78825,
          longitude: -100.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,}}>


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