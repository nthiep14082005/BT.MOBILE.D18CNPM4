import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 54 : (StatusBar.currentHeight || 0);

export default function BTLastCoreComponents() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  // ✅ Validation: đúng 10 số & bắt đầu bằng 0
  const validatePhone = (value) => {
    if (value.length === 0) {
      setError('');
      return false;
    }

    if (!/^\d+$/.test(value)) {
      setError('Số điện thoại chỉ được chứa chữ số');
      return false;
    }

    if (!value.startsWith('0')) {
      setError('Số không đúng định dạng');
      return false;
    }

    if (value.length !== 10) {
      setError('Số điện thoại phải đúng 10 chữ số');
      return false;
    }

    setError('');
    return true;
  };

  // ✅ Logic kiểm tra KHÔNG setState
  const isValid =
    phoneNumber.length === 10 &&
    /^\d+$/.test(phoneNumber) &&
    phoneNumber.startsWith('0');

  const handleChangeText = (value) => {
    setPhoneNumber(value);
    validatePhone(value);
  };

  const handlePress = () => {
    if (!validatePhone(phoneNumber)) {
      Alert.alert('Lỗi', error || 'Số điện thoại không hợp lệ');
      return;
    }

    Alert.alert('Thông báo', `Đăng nhập với số: ${phoneNumber}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" />

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>✕</Text>
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Đăng nhập</Text>
            <View style={{ width: 40 }} />
          </View>

          {/* Body */}
          <View style={styles.body}>
            <Text style={styles.title}>Nhập số điện thoại</Text>
            <Text style={styles.description}>
              Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
            </Text>

            <View
              style={[
                styles.inputContainer,
                isFocused && styles.inputContainerFocused,
                error && styles.inputContainerError,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại của bạn"
                keyboardType="number-pad"
                maxLength={10}
                value={phoneNumber}
                onChangeText={handleChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />

              {phoneNumber.length > 0 && (
                <TouchableOpacity onPress={() => setPhoneNumber('')}>
                  <View style={styles.clearBtn}>
                    <Text style={styles.clearBtnText}>✕</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>

            {error !== '' && <Text style={styles.errorText}>{error}</Text>}
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.button, !isValid && styles.buttonDisabled]}
              disabled={!isValid}
              onPress={handlePress}
            >
              <Text
                style={[
                  styles.buttonText,
                  !isValid && styles.buttonTextDisabled,
                ]}
              >
                Tiếp tục
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 50,
  },

  iconButton: {
    width: 40,
  },

  iconText: {
    fontSize: 24,
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },

  body: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    color: '#666',
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 10,
    alignItems: 'center',
  },

  inputContainerFocused: {
    borderBottomColor: '#2D9CDB',
    borderBottomWidth: 2,
  },

  inputContainerError: {
    borderBottomColor: '#EB5757',
    borderBottomWidth: 2,
  },

  input: {
    flex: 1,
    fontSize: 18,
  },

  clearBtn: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  clearBtnText: {
    color: '#fff',
    fontSize: 10,
  },

  errorText: {
    marginTop: 8,
    color: '#EB5757',
    fontSize: 13,
  },

  footer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },

  button: {
    backgroundColor: '#2D9CDB',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonDisabled: {
    backgroundColor: '#F2F2F2',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  buttonTextDisabled: {
    color: '#BDBDBD',
  },
});
