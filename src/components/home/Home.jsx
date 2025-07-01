import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ScreenConstants from '../../navigator/ScreenConstants';
import { logo } from '../../res';
import {
  Comment_Icon, Heart_Icon, Menu_Icon, Search_Icon, Share_Icon, User_Icon
} from '../../res/Icons';
import { height, width } from '../../res/String';

// CATEGORY FUNCTION FOR IMAGES
const getImageByCategory = (category) => {
  switch (category.toLowerCase()) {
    case 'banking':
      return require('../../res/images/appImg/Banking.jpg');
    case 'finance':
      return require('../../res/images/appImg/Fiance.png');
    case 'loans':
      return require('../../res/images/appImg/Loan.png');
    case 'sports':
      return require('../../res/images/appImg/Sport.png');
    case 'entertainment':
      return require('../../res/images/appImg/Tree.jpg');
    case 'lifestyle':
      return require('../../res/images/appImg/mrbean.jpg');
    // case 'technology':
    //   return require('../../assets/technology.png');
    // case 'government':
    //   return require('../../assets/government.png');
    // case 'business':
    //   return require('../../assets/business.png');
    default:
      return require('../../res/images/appImg/Default.png');
  }
};

const categories = [
  { id: '1', title: 'All' },
  { id: '2', title: 'Entertainment' },
  { id: '3', title: 'Lifestyle' },
  { id: '4', title: 'Sports' },
  { id: '5', title: 'Technology' },
  { id: '6', title: 'Government' },
  { id: '7', title: 'Business' },
];

const data = [
  { id: '1', name: 'tupe', location: 'Bishnupur, West Bengal', date: 'Jun 30, 2025', category: 'Banking', views: 8, text: 'hhhhhhuuuuuiiii' },
  { id: '2', name: 'Anonymous', location: 'Kolkata, West Bengal', date: 'Jul 1, 2025', category: 'Finance', views: 12, text: 'sample content 2' },
  { id: '3', name: 'Anonymous', location: 'Delhi, New Delhi', date: 'Jul 2, 2025', category: 'Loans', views: 5, text: 'sample content 3' },
  { id: '4', name: 'Anonymous', location: 'Pune, Maharashtra', date: 'Aug 5, 2025', category: 'Sports', views: 12, text: 'Sports is nice hobbies' },
  { id: '5', name: 'Anonymous', location: 'Mumbai, Maharashtra', date: 'Sep 10, 2025', category: 'entertainment', views: 90, text: 'Looking Awesome' },
  { id: '6', name: 'Anonymous', location: 'Goa, Maharashtra', date: 'Dec 10, 2025', category: 'lifestyle', views: 100, text: 'Beautiful' },
];

const Home = () => {
  const navigation = useNavigation();
  const [followingIds, setFollowingIds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('1');

  const toggleFollow = (id) => {
    if (followingIds.includes(id)) {
      setFollowingIds(followingIds.filter(itemId => itemId !== id));
    } else {
      setFollowingIds([...followingIds, id]);
    }
  };

  const isFollowing = (id) => followingIds.includes(id);

  // ⭐ This is the new filtering method
  const filteredData = selectedCategory === '1'
    ? data
    : data.filter(item =>
        item.category.toLowerCase() ===
        categories.find(cat => cat.id === selectedCategory)?.title.toLowerCase()
      );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Menu_Icon height={height / 15} width={width / 15} />
        <Image style={styles.logo} source={logo()} />
        <TouchableOpacity onPress={() => navigation.navigate(ScreenConstants.SERACH)}>
          <Search_Icon height={height / 15} width={width / 15} />
        </TouchableOpacity>
      </View>

      {/* Horizontal Category List */}
      <View style={{
        backgroundColor: "#eaeded",
        alignItems: "center",
        flexDirection: "row",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      }}>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => {
            const isSelected = selectedCategory === item.id;
            return (
              <TouchableOpacity
                style={[
                  styles.categoryItem,
                  { backgroundColor: isSelected ? '#004B49' : '#fff' }
                ]}
                onPress={() => setSelectedCategory(item.id)}
              >
                <Text style={[
                  styles.categoryText,
                  { color: isSelected ? '#fff' : '#004B49' }
                ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Main Feed */}
      <FlatList
        data={filteredData}  // ✅ using filtered data here
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white', margin: '2%', borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '2%' }}>
              <User_Icon height={height / 18} width={width / 10} />
              <View>
                <Text style={{ color: '#3498db', fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ color: 'black' }}>{item.location}</Text>
              </View>

              <TouchableOpacity
                onPress={() => toggleFollow(item.id)}
                style={{
                  backgroundColor: isFollowing(item.id) ? '#004B49' : 'white',
                  borderWidth: 1,
                  borderColor: '#004B49',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 20
                }}
              >
                <Text style={{ color: isFollowing(item.id) ? 'white' : '#004B49' }}>
                  {isFollowing(item.id) ? 'Following' : 'Follow'}
                </Text>
              </TouchableOpacity>
            </View>

            <Image style={styles.keywordImg} source={getImageByCategory(item.category)} />

            <View style={{ margin: '2%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text>{item.date}</Text>
              <Text>{item.category} | {item.views} Views</Text>
            </View>

            <View style={{ margin: '2%' }}>
              <Text>{item.text}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Heart_Icon height={height / 15} width={width / 15} />
                <Share_Icon height={height / 15} width={width / 15} />
                <Comment_Icon height={height / 15} width={width / 15} />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};


export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6dbdf',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#004B49',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
  },
  logo: {
    width: width * 0.25,
    height: height * 0.05,
    resizeMode: 'contain',
  },
  categoryList: {
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#004B49'
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  keywordImg: {
    width: '100%',
    height: height / 4,
    resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
