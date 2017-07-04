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

 class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { searching: false, ingredientsInput: '' }
    }

    searchPressed() {
        this.setState({ searching: true })
        this.props.fetchRecipes(this.state.ingredientsInput).then( (res) => {
            this.setState({searching: false })
        });
    }

    recipes() {
        return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
    }


    render() {
        return (
        <View style={AppStyle.scene}>
            <View style={AppStyle.searchSection}>
            <TextInput style={AppStyle.searchInput}
                returnKeyType="search"
                placeholder="Ingredients (comma delimited)"
                onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
                value={this.state.ingredientsInput}
            />
            <TouchableHighlight style={AppStyle.searchButton} onPress={ () => this.searchPressed() }>
                <Text>Fetch Recipes</Text>
            </TouchableHighlight>
            </View>
            <ScrollView style={AppStyle.scrollSection} >
            {!this.state.searching && this.recipes().map((recipe) => {
                return <TouchableHighlight key={recipe.id}  style={AppStyle.searchButton} onPress={ () => this.props.navigate({ key: 'Detail', id: recipe.id}) }>
                <View>
                <Image source={ { uri: recipe.thumbnail } } style={appStyle.resultImage} />
                <Text style={ appStyle.resultText } >{recipe.title}</Text>
                </View>
            </TouchableHighlight>
            })}
            {this.state.searching ? <Text>Searching...</Text> : null }
            </ScrollView>
        </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchedRecipes: state.searchedRecipes
    };
}



export default connect(mapStateToProps)(HomeScreen);