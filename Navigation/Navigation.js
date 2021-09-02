// Navigation/Navigation.js
import React from 'react'
import {StyleSheet, Image} from 'react-native'

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";
import News from '../Components/News'

import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
  Searchs: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },

  FilmDetail: {

    screen : FilmDetail



  }
})

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Les Derniers Films',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})


const MoviesTabNavigator = createBottomTabNavigator({
  Search: {

    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
          return <Image
              source={require('../Images/ic_search.png')}
              style={styles.icon}/>




      }




    }

  },
  News: {
    screen: NewsStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Images/ic_fiber_new.png')}
          style={styles.icon}/>
      }
    }
  },
  Favorites:{

      screen: Favorites,

      navigationOptions: {
        tabBarIcon: () => {
            return <Image
                source={require('../Images/ic_favorite.png')}
                style={styles.icon}/>
  
  
  
  
        }

      }
  }
}, {

tabBarOptions: { 

showLabel:false,
showIcon: true,
activeBackgroundColor: '#DDDDDD',
inactiveBackgroundColor: '#FFFFFF'


}

}


)

export default createAppContainer(MoviesTabNavigator)



const styles = StyleSheet.create({
      icon:{
          width: 30,
          height:30



      }





  
})