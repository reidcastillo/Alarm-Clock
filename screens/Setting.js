import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles, textStyles } from '../styles/styles'; // Adjust the path as needed
import { StatusBar } from 'expo-status-bar';
import FooterTab from '../components/FooterTab';



function Setting() {
  const [toggle, setToggle] = useState(false);

  const toggleSwitch = () => setToggle((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={textStyles.titleText}>Settings</Text>
      <Switch onValueChange={toggleSwitch} value={toggle} />

      <StatusBar />
      <FooterTab />
    </View>
  );
}

export default Setting;
