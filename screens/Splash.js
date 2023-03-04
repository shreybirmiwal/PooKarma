import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/pookarma-logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.spinnerContainer}>
        <FontAwesomeIcon icon={faSpinner} size={80} color="#8B4513" spin />
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
    backgroundColor: '#F5DEB3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  spinnerContainer: {
    marginTop: 50,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 30,
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
