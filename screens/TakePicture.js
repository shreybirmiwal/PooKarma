import {Camera} from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, ImageBackground } from 'react-native';

const TakePicture = ({navigation}) =>{
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        (async () => {
          const cameraPermission = await Camera.requestCameraPermissionsAsync();
          setHasCameraPermission(cameraPermission.status === "granted");
        })();
      }, []);

    if(hasCameraPermission === undefined){
        return <Text> Requesting Permissions</Text>
    } else if(!hasCameraPermission){
        return <Text> Permissions for camera not granted. Please change in settings.</Text>
    }

        let takePic = async () => {
            let options = {
            quality: 1,
            base64: true,
            exif: false
        };
    
        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
      };

      if (photo) {
        let sendPhoto = () => {

            setPhoto(undefined);

            navigation.navigate("Spotted Poops 👀")
        };

        return (
            <ImageBackground style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }}>



                <View style={styles.container1}>
      <TouchableOpacity style={styles.closeButton1} onPress={() => setPhoto(undefined)}>
        <Text style={styles.closeButtonText1} >X</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.publishButton1} onPress={() => sendPhoto()}>
        <Text style={styles.publishButtonText1}>Publish Poop!</Text>
      </TouchableOpacity>
    </View>

                
            </ImageBackground>
        );
      }

    return(
        <Camera ref={cameraRef} style={styles.container}>
            <Text style={styles.topText}> Take a picture of the 💩 </Text>
            <Text style={styles.bottom}> Don't forget to dispose of the poop afterwards! </Text>

            <TouchableOpacity style={styles.picButton} onPress={takePic}/>
        </Camera>
    )
    

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
        alignSelf: 'stretch'
    },
    picButton:{
        height: 120,
        width: 120,
        borderRadius: 1000,
        backgroundColor: '#FFFF',
        position: 'absolute',
        bottom: 0,
        marginBottom: 75,
    },
    topText:{
        color: '#FFFF',
        flex: 1,
        marginTop: 50
    },
    bottom:{
      color: '#FFFF',
      marginBottom : 25
    },
    
    preview:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },

    container1: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 20,
    },
    closeButton1: {
      position: 'absolute',
      top: 20,
      left: 20,
      backgroundColor: 'transparent',
      borderRadius: 20,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButtonText1: {
      fontSize: 24,
      color: '#7A5901',
      fontWeight: 'bold',
    },
    publishButton1: {
      backgroundColor: '#7A5901',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    publishButtonTex1t: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    
})

export default TakePicture
