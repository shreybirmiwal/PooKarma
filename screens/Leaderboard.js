import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 89 },
    { name: 'Dave', score: 71 },
    { name: 'Eve', score: 68 },
    { name: 'Alice', score: 52 },
    { name: 'Steven', score: 46 },
    { name: 'Zoe', score: 10 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💩's picked</Text>

      <View style={styles.KINGROW}>
          <View style={styles.playerIcon}>
            <MaterialCommunityIcons name="account-circle-outline" size={36} color="black" />
          </View>
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>Shrey Birmiwal</Text>
            <Text style={styles.playerScore}>999 points</Text>
          </View>
          <View style={styles.rankBadge}>
            <Text style={styles.rankText}>1</Text>
          </View>
        </View>


      {leaderboardData.map((player, index) => (
        <View key={index} style={styles.playerRow}>
          <View style={styles.playerIcon}>
            <MaterialCommunityIcons name="account-circle-outline" size={36} color="black" />
          </View>
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.playerScore}>{player.score} points</Text>
          </View>
          <View style={styles.rankBadge}>
            <Text style={styles.rankText}>{index + 1}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    width: '100%',
  },
  KINGROW: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    width: '100%',
    backgroundColor:"gold", 
    borderRadius : 20
  },
  playerIcon: {
    marginRight: 16,
  },
  playerInfo: {
    flex: 1,
    marginRight: 16,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  playerScore: {
    fontSize: 16,
    color: '#999999',
  },
  rankBadge: {
    width: 36,
    height: 36,
    backgroundColor: '#7A5901',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Leaderboard;
