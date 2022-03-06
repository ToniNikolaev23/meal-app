import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

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
      headerTintColor: Platform.OS === "ios" ? "white" : Colors.primaryColor,
      headerBackTitle: "Back",
    },
  }
);

export default createAppContainer(MealsNavigator);
