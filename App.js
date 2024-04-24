import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image } from 'react-native';
const imgPerson = require('./assets/person.png')



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHello}>Hello</Text>
        <Text style={styles.textName}>Lee Roy Akbar</Text>
      </View>
      <View style={styles.infoSection}>
        <View>
          <Text style={styles.infoText}>Todo Done</Text>
          <Text style={styles.nextInfoText}>Keep it up</Text>
        </View>
        <View style={styles.circleInfo}>
          <Text style={styles.circleText}>0/1</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    marginLeft: 20,
    marginTop: 30,
    alignItems: 'left',
    justifyContent: 'center',
  },
  textHello: {
    fontSize: 20,
  },
  textName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  infoSection: {
    borderRadius: 8,
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#004169',
    margin: 20
  },
  infoText:{
    fontSize: 20,
    color: 'white'
  },
  nextInfoText: {
    fontSize: 15,
    color: 'white'
  },
  circleInfo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
