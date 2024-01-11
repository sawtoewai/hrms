import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Alert, Image, ImageBackground, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function CustomDrawer(props) {
    return (
      <View style={{flex:1}}>
        <DrawerContentScrollView 
          {...props} 
          contentContainerStyle={{backgroundColor: 'black'}}>
          <ImageBackground 
            source={require('../../assets/images/background.jpg')} 
            style={{paddingHorizontal: 10, paddingVertical: 25}}
          >
            <Image 
              source={require('../../assets/images/employee2.jpeg')} 
              style={{height:60, width:60, borderRadius: 60/2, marginBottom: 10}}
            />
            <Text style={{color: '#fff', fontSize: 15}}>Sport</Text>
            <Text style={{color: '#fff', fontSize: 12}}>sport@gmail.com</Text>
          </ImageBackground>
          <View style={{flex: 1, backgroundColor: "#fff", paddingTop: 10}}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View style={{padding: 2, borderTopWidth: 1, borderTopColor: '#ccc'}}>
          <DrawerItem label="Log Out" onPress={() => props.navigation.navigate('Login')} icon={()=>(<Ionicons name="home-outline" size={22} />)}/>
          <DrawerItem label="Help" icon={()=>(<Ionicons name="home-outline" size={22} />)}/>
        </View>
      </View>
    );
  }

export default CustomDrawer