import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <View >
        <Image
          source={require('../assets/pookarma-logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 40,
    
  },
  signUpButton: {
    flex: 1,
    backgroundColor: '#8B4513',
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 15,
  },
  signInButton: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#F5DEB3',
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B4513',
    padding: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Splash;
