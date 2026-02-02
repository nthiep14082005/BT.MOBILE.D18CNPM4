import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

/* ===== Component Button (Props + Callback) ===== */
function ColorButton({ title, color, onPress }) {
  const handlePress = () => {
    Alert.alert('Thông báo', `Bạn đã chọn màu ${title}`);
    onPress(color, title);
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.buttonText,
          { color: title === 'YELLOW' ? 'black' : 'white' },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

/* ===== Component Chính ===== */
export default function BTState() {
  const [bgColor, setBgColor] = useState('#fff');
  const [title, setTitle] = useState('CHỌN MÀU');

  const handleChangeColor = (color, text) => {
    setBgColor(color);
    setTitle(text);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>{title}</Text>

      <ColorButton title="GREEN" color="green" onPress={handleChangeColor} />
      <ColorButton title="BLUE" color="blue" onPress={handleChangeColor} />
      <ColorButton title="BROWN" color="brown" onPress={handleChangeColor} />
      <ColorButton title="YELLOW" color="yellow" onPress={handleChangeColor} />
      <ColorButton title="RED" color="red" onPress={handleChangeColor} />
      <ColorButton title="BLACK" color="black" onPress={handleChangeColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 6,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
