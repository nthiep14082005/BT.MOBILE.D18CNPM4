import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
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
    content:
      'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    time: '20/08/2020, 06:00',
    type: 'user',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    content:
      'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    time: '20/08/2020, 06:00',
    type: 'user',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    type: 'check',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    content:
      'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    time: '20/08/2020, 06:00',
    type: 'check',
  },
];

export default function BT3() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {/* ICON */}
      <View
        style={[
          styles.icon,
          item.type === 'check' ? styles.iconCheck : styles.iconUser,
        ]}
      >
        <Text style={styles.iconText}>
          {item.type === 'check' ? '✓' : '👥'}
        </Text>
      </View>

      {/* CONTENT */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* STATUS BAR */}
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>

      {/* LIST */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* BOTTOM TAB */}
      <View style={styles.bottomTab}>
        <Text style={styles.tabText}>Trang chủ</Text>
        <Text style={styles.tabText}>Khám phá</Text>

        <View style={styles.addButton}>
          <Text style={styles.addText}>＋</Text>
        </View>

        <Text style={[styles.tabText, styles.activeTab]}>Thông báo</Text>
        <Text style={styles.tabText}>Tài khoản</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* HEADER */
  header: {
    height: 50,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },

  /* ITEM */
  item: {
    flexDirection: 'row',
    paddingHorizontal: 16,
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
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  content: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
  time: {
    fontSize: 11,
    color: '#999',
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginLeft: 64,
  },

  /* BOTTOM TAB */
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    fontSize: 11,
    color: '#999',
  },
  activeTab: {
    color: '#1A237E',
    fontWeight: '600',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1A237E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 24,
  },
});
