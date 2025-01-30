import { StatusBar,TouchableOpacity,StyleSheet, Text, View } from 'react-native'
import List from '../components/fruits';  // Import the List component

export default function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the new app</Text>
    <View style={{backgroundColor: "blue", flex: 0.5, alignItems: 'center', justifyContent: "center"}}>
          <TouchableOpacity onPress={()=>{alert("Alert Button pressed")}}>
            <Text style={styles.buttonstyle}>Alert</Text>
          </TouchableOpacity>

        
        </View>
        <View style={{flex:0.5, alignItems: "flex-start", justifyContent: "flex-start"}}> <List/></View>
       
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    buttonstyle: {
      alignSelf:'center',
      textAlign:'center',
      padding: 10,
      width: 80,
      color: 'white',
      backgroundColor: 'red',
      borderRadius:14,
      
    },
    text:{
    fontSize:18,
    color: "blue",
    fontWeight:'bold',
    textDecorationLine:'underline',
    },
    welcomeText: {
      verticalAlign:'middle',
      fontSize: 20,
      fontWeight: 'bold',
      
    },
    liststyling:{

      flexDirection: 'row'

    }
  });