import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';

const settingsOptions = [
  { id: '1', title: 'Language' },
  { id: '2', title: 'My Profile' },
  { id: '3', title: 'Contact Us' },
  { id: '4', title: 'Change Password' },
  { id: '5', title: 'Privacy Policy' },
];

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />

      <Text style={[styles.header, isDarkMode && styles.darkHeader]}>Settings</Text>

      <View style={styles.listContainer}>
        {settingsOptions.map((item) => (
          <TouchableOpacity key={item.id} style={[styles.option, isDarkMode && styles.darkOption]}>
            <Text style={[styles.optionText, isDarkMode && styles.darkOptionText]}>{item.title}</Text>
            <AntDesign name="right" size={20} color={isDarkMode ? 'white' : 'gray'} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.themeContainer]}>
        <Text style={[styles.themeText, isDarkMode && styles.darkThemeText]}>Theme</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  darkContainer: {
    backgroundColor: '#100d18',
  },
  header: {
    paddingBottom: 35,
    fontSize: 28,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 20,
  },
  darkHeader: {
    color: 'white',
  },
  listContainer: {
    paddingBottom: 30,
  },
  option: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  darkOption: {
    backgroundColor: '#100d18',
    borderBottomColor: '#444',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  darkOptionText: {
    color: 'white',
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 320,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 0,
    borderTopColor: '#ccc',
  },
  themeText: {
    fontSize: 25,
    fontWeight: '600',
  },
  darkThemeText: {
    color: 'white',
  },
});

export default SettingsScreen;
