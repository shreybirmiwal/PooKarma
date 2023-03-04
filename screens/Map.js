import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from 'react-native-maps';
import { View, Text } from "react-native";

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
                <Text> RAA </Text>
                <Text> HI TEST POOP </Text>
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
	}
})

export default Map;