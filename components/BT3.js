import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    content: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    type: 'check',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    content: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    type: 'user',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    type: 'user',
  },
  {
    id: '4',
    title: 'Công việc sắp đến hạn trong hôm nay',
    content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    type: 'check',
  },
];

export default function BT3() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        {/* Icon giả */}
        <View style={[
          styles.icon,
          item.type === 'check' ? styles.iconCheck : styles.iconUser
        ]}>
          <Text style={styles.iconText}>
            {item.type === 'check' ? '✓' : '👥'}
          </Text>
        </View>

        {/* Nội dung */}
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.content}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconCheck: {
    backgroundColor: '#E3F2FD',
  },
  iconUser: {
    backgroundColor: '#E8F5E9',
  },
  iconText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  desc: {
    fontSize: 13,
    color: '#555555',
    marginBottom: 4,
  },
  time: {
    fontSize: 11,
    color: '#999999',
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
  },
});
