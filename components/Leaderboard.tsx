import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { StyleSheet } from "react-native";

const sortUsersByScore = (
  users: { id: string; name: string; score: number }[]
) => {
  return [...users].sort((a, b) => b.score - a.score);
};

const Leaderboard = () => {
  const [users, setUsers] = useState([
    { id: "1", name: "Alice", score: 100 },
    { id: "2", name: "Bob", score: 90 },
    { id: "4", name: "Jhon", score: 92 },
    { id: "3", name: "Charlie", score: 80 },
  ]);

  const sortLeaderboard = () => {
    const sortedUsers = sortUsersByScore(users);
    setUsers(sortedUsers);
  };

  return (
    <View>
      <Text style={styles.text}>Leaderboard</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            {item.name}: {item.score}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Sort Leaderboard" onPress={sortLeaderboard} />
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
