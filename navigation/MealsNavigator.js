import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? Colors.primaryColor : "white",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor: Platform.OS === "ios" ? "white" : Colors.primaryColor,
      headerBackTitle: "Back",
    },
  }
);

const FavoriteNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? Colors.primaryColor : "white",
      },
      headerTintColor: Platform.OS === "ios" ? "white" : Colors.primaryColor,
      headerBackTitle: "Back",
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: <Text style={{ fontFamily: "open-sans-bold" }}>Meal</Text>,
    },
  },
  Favorites: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: (
        <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
      ),
    },
  },
};

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    navigationOptions: {
      drawerLabel: "Filters",
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? Colors.primaryColor : "white",
      },
      headerTintColor: Platform.OS === "ios" ? "white" : Colors.primaryColor,
      headerBackTitle: "Back",
    },
  }
);

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        labelStyle: {
          fontFamily: "open-sans-bold",
        },
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
