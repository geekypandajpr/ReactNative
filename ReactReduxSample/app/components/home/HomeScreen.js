import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { AppStyle }  from '../../style';
const {
    ScrollView,
    View,
    TextInput,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet,
} = ReactNative;

const HomeScreen = (props) => (
    <View style={AppStyle.scene}>
        <View style={AppStyle.searchSection}>
          <TextInput style={AppStyle.searchInput}
            returnKeyType="search"
            placeholder="Ingredients (comma delimited)"
            onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
            value={props.ingredientsInput}
          />
          <TouchableHighlight style={AppStyle.searchButton} onPress={ () => props.searchPressed() }>
            <Text>Fetch Recipes</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={AppStyle.scrollSection} >
          {!props.searching && props.recipes().map((recipe) => {
            return <TouchableHighlight key={recipe.id}  style={AppStyle.searchButton} >
            <View>
              <Image source={ { uri: recipe.thumbnail } } style={appStyle.resultImage} />
              <Text style={ appStyle.resultText } >{recipe.title}</Text>
            </View>
          </TouchableHighlight>
          })}
          {props.searching ? <Text>Searching...</Text> : null }
        </ScrollView>
      </View>
);

function mapStateToProps(state){
    return {
        recipeCount : state.recipeCount,
        searching: false, 
        ingredientsInput: '',
        recipes : function(){
            return Object.keys(state.searchedRecipes).map(key => state.searchedRecipes[key])
        },
        searchPressed : function() {
            searching = true;
            state.fetchRecipes(ingredientsInput).then( (res) => {
                searching =  false;
            });
        }
    }
}



export default connect(mapStateToProps)(HomeScreen);