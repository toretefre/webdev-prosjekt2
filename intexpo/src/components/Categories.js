import React from 'react';
import '../style.css';
import CategoryButton from "./CategoryButton";
import Randomizer from "./Randomizer";

class Categories extends React.Component {
    constructor(props){
        super(props);

        //One state for each image, sound and text.
        //listToRandomizer is the list that will be given to the randomizer, which creates combinations
        //Initially the list have the first option in each category
        this.state = {
            listToRandomizer : ["Abstrakt", "Instrumenter", "Språk"],
        };

        this.setImage = this.setImage.bind(this);
        this.setSound = this.setSound.bind(this);
        this.setText = this.setText.bind(this);
        this.setCombos = this.setCombos.bind(this);
        }



    //Functions to set the state of image, sound and text
    //The parameters are being sent from CategoryButton.js
    setImage(chosenCategory){
        this.props.setImg(chosenCategory);
    }

    setSound(chosenCategory){
        this.props.setSound(chosenCategory);
    }

    setText(chosenCategory){
        this.props.setText(chosenCategory);
    }

    setCombos(comboList){
        console.log(comboList);
        this.props.setCombosCategories(comboList);
    }

    render(){
        return(
            <React.Fragment>
                {/*Adding three CategoryButton components
                   Each button has its own function that are being passed from Categories to CategoryButton
                   Also setting props for CategoryButton*/}
                {/*<Randomizer setCategoriesRandomizer={this.setCombos} selectedCategories = {this.state.listToRandomizer}/>*/}
                <CategoryButton setImage = {this.setImage} category1Name="Abstrakt" category2Name="Dyr" category3Name="Biler" categoryType="Bilder"/>
                <CategoryButton setSound = {this.setSound} category1Name="Instrumenter" category2Name="Musikk" category3Name="Vær" categoryType="Lyd"/>
                <CategoryButton setText = {this.setText} category1Name="Språk" category2Name="One-liners" category3Name="Trump-quotes" categoryType="Tekst"/>
            </React.Fragment>
        )
    }
}

export default Categories;