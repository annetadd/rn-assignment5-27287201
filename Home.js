import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useTheme } from "./ThemeContext";
import { lightTheme, darkTheme } from "./themes";





export default function App() {
  const transactions = [
    { id: 1, name: 'Apple Store', category: 'Entertainment', amount: '-$5,99', icon: require('./assets/apple.png') },
    { id: 2, name: 'Spotify', category: 'Music', amount: '-$12,99', icon: require('./assets/spotify.png') },
    { id: 3, name: 'Money Transfer', category: 'Transaction', amount: '$300', icon: require('./assets/moneyTransfer.png'), positive: true },
    { id: 4, name: 'Grocery', category: '', amount: '-$88', icon: require('./assets/grocery.png') },
  ];

  const Home = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
}

  return (
    <ScrollView style={styles.container}>

      
      <View style={styles.profileSection}>
        <Image style={styles.profileImage} source={require('./assets/profile.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.homeTitle}>Welcome back,</Text>
          <Text style={styles.subText}>Eric Atsu</Text>
        </View>
        <View style={styles.searchContainer}>
        <View style={styles.searchIcon}>
          <Image source={require('./assets/search.png')}/>
        </View>
      </View>
      </View>

      
      <View style={styles.cardContainer}>
        <Image source={require('./assets/Card.png')} style={styles.cardImage} />
      </View>

      
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
           <Image source={require('./assets/send.png')}/>
         </View>
         
          <View style={styles.button}>
            <Image source={require('./assets/receive.png')}/>
        </View>
        
       
          <View style={styles.button}>
            <Image source={require('./assets/loan.png')}/>
        </View>
        
        
          <View style={styles.button}>
            <Image source={require('./assets/topUp.png')} />
        </View>
         
        </View>   

        <View style={styles.buttonLabel}>
            <Text style={styles.buttonLabel}>Sent</Text>
            <Text style={styles.buttonLabel}>Received</Text>
            <Text style={styles.buttonLabel}>Loan</Text>
            <Text style={styles.buttonLabel}>Topup</Text>
          

        </View>
      
      
      
      <View style={styles.transactionSection}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Transaction</Text>
          <TouchableOpacity>
            <Text style={styles.sellAllText}>Sell All</Text>
          </TouchableOpacity>
        </View>

        {transactions.map((transaction) => (
          <View style={styles.transactionItem} key={transaction.id}>
            <View style={styles.transactionIcon}>
              <Image source={transaction.icon} style={styles.transactionIconImage} />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>{transaction.name}</Text>
              <Text style={styles.transactionCategory}>{transaction.category}</Text>
            </View>
            <Text
              style={[
                styles.transactionAmount,
                transaction.positive ? styles.positiveAmount : styles.negativeAmount,
              ]}
            >
              {transaction.amount}
            </Text>
          </View>
        ))}
      </View>
        <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
    backgroundColor: '#F9F9F9',
    paddingTop:100,
    paddingLeft: 10,
   
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    padding: 1,
    marginLeft: 20,
    borderRadius: 25,
    

  },
  textContainer: {
    marginLeft: 10,
  },
  homeTitle: {
    color: 'gray',
    fontSize: 14,
    paddingTop: 10,
  },
  subText: {
    padding: 20,
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 10,
    paddingLeft: '10',
    paddingTop: 10,
  },
  searchContainer: {
    
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',


  },
  searchIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    paddingLeft: 135,

  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    
  },
  cardImage: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'auto',
    borderRadius: 25,
    marginRight: 15,
    marginLeft: 15,
  },
 
  buttonContainer: {
    gap: 40,
    paddingLeft: 15,
    
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
   



  },
  button: {
    flexDirection: 'row',
    padding: 20,
    gap: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 55,
    height: 60,
    width: 60,
    backgroundColor: '#E8E8E8',

    
    
  },
  buttonLabel: {
    paddingLeft: 18,
    gap: 40,
    flexDirection: 'row',
    marginTop: 2, 
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
    
},
  
    
    

  
  
 
  
  
  transactionSection: {
    padding: 10,
  },
  transactionHeader: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  transactionTitle: {
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  sellAllText: {
    padding: 10,
    fontSize: 15,
    fontWeight: 600,
    color: '#1E90FF',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginLeft: 15,
    
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  transactionIconImage: {
    width: 13,
    height: 15,
     
  },
  transactionDetails: {
    flex: 1,
    paddingTop: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  transactionCategory: {
    fontSize: 12,
    color: 'gray',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  positiveAmount: {
    color: '#1E90FF',
  },
  negativeAmount: {
    color: 'black',
    fontWeight: 600
  },
});
