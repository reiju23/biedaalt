import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Search from '../screen/Search';
import library from '../screen/library';
import profile from '../screen/profile';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const AppNavigator=()=>{

    return (<Tab.Navigator>
        <Tab.Screen name='Home' component={Home} options={
            {tabBarIcon : ({color,size}) =>{
                return <Entypo name="home" size={size} color={color} />
            }
            }
        }/>
        <Tab.Screen name='Search' component={Search} options={
            {tabBarIcon : ({color,size}) =>{
                return<AntDesign name="search1" size={size} color={color}  />
            }
            }
          }  />
        <Tab.Screen name='library' component={library}options={
            {tabBarIcon : ({color,size}) =>{
                return<Entypo name="folder-music"size={size} color={color}  />
            }
            }
          } />
        <Tab.Screen name='profile' component={profile}options={
            {tabBarIcon : ({color,size}) =>{
                return<AntDesign name="profile"size={size} color={color} />
            }
            }
          } />
    </Tab.Navigator>
    );
};
    export default AppNavigator;

