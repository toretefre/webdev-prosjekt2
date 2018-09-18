import React from 'react';
import '../style.css';
import MediaRepresentation from "./MediaRepresentation";
import TabDisplay from "./TabDisplay";

class Randomizer extends React.Component {
    constructor(props){
      super(props);
      this.state={
        selectedCategories : this.props.selectedCategories,
        abstract : ['/images/abstract/abstract1.svg', '/images/abstract/abstract2.svg', '/images/abstract/abstract3.svg', '/images/abstract/abstract4.svg'],
        animals : ['/images/animals/animal1.svg', '/images/animals/animal2.svg', '/images/animals/animal3.svg', '/images/animals/animal4.svg'],
        cars : ['/images/cars/car1.svg', '/images/cars/car2.svg', '/images/cars/car3.svg', '/images/cars/car4.svg'],
        music : ['/sounds/music/1.mp3', '/sounds/music/2.mp3', '/sounds/music/3.mp3', '/sounds/music/4.mp3'],
        instrument : ['/sounds/instruments/bagpipe.mp3', '/sounds/instruments/flute.mp3', '/sounds/instruments/harmonica.mp3', '/sounds/instruments/synth.mp3'],
        weather : ['/sounds/weather/beach.mp3', '/sounds/weather/rain.mp3', '/sounds/weather/thunder.mp3', '/sounds/weather/wind.mp3'],
        trump : ['/text/Trump-quotes/Trump-quote1.json', '/text/Trump-quotes/Trump-quote2.json', '/text/Trump-quotes/Trump-quote3.json', '/text/Trump-quotes/Trump-quote4.json'],
        language : ['/text/Language/French.json', '/text/Language/German.json', '/text/Language/Nynorsk.json', '/text/Language/Spanish.json'],
        oneliners : ['/text/One-liners/One-liner1.json', '/text/One-liners/One-liner2.json', '/text/One-liners/One-liner3.json','/text/One-liners/One-liner4.json']
      };

      this.combo1 = []; this.combo2 = []; this.combo3 = [];this.combo4 = [];
      this.combos=[this.combo1, this.combo2, this.combo3, this.combo4];
      this.imageCategory = [];
      this.soundCategory = [];
      this.textCategory = [];
      this.randomImageIndex = 0;
      this.image1 = 0;
      this.randomTextIndex = 0;
      this.text1 = 0;
      this.randomSoundIndex = 0;
      this.sound1 = 0;

    }

    render(){
        this.state.selectedCategories = this.props.selectedCategories;
        //Some logic
        //Get selected categories
        //Images
        if(this.state.selectedCategories[0]==="Abstrakt"){
            for(let x=0; x<this.state.abstract.length; x++){
                this.imageCategory.push(this.state.abstract[x]);
            }
        }
        else if(this.state.selectedCategories[0]==="Dyr"){
            for(let x=0; x<this.state.animals.length; x++){
                this.imageCategory.push(this.state.animals[x]);
            }
        }
        else if(this.state.selectedCategories[0]==="Biler"){
            for(let x=0; x<this.state.cars.length; x++){
                this.imageCategory.push(this.state.cars[x]);
            }
        }
        //Sounds
        if(this.state.selectedCategories[1]==="Instrumenter"){
            for(let x=0; x<this.state.instrument.length; x++){
                this.soundCategory.push(this.state.instrument[x]);
            }
        }
        else if(this.state.selectedCategories[1]==="Musikk"){
            for(let x=0; x<this.state.music.length; x++){
                this.soundCategory.push(this.state.music[x]);
            }
        }
        else if(this.state.selectedCategories[1]==="Vær"){
            for(let x=0; x<this.state.weather.length; x++){
                this.soundCategory.push(this.state.weather[x]);
            }
        }
        //Text
        if(this.state.selectedCategories[2]==="Språk"){
            for(let x=0; x<this.state.language.length; x++){
                this.textCategory.push(this.state.language[x]);
            }
        }
        else if(this.state.selectedCategories[2]==="One-liners"){
            for(let x=0; x<this.state.oneliners.length; x++){
                this.textCategory.push(this.state.oneliners[x]);
            }
        }
        else if(this.state.selectedCategories[2]==="Trump-quotes"){
            for(let x=0; x<this.state.trump.length; x++){
                this.textCategory.push(this.state.trump[x]);
            }
        }

        //Put random elements in different combinations
        for(let x=0; x<4; x++){
            this.combos[x] = [];
            //Find and add random image to combo
            this.image1 = this.imageCategory[0];
            this.combos[x].push(this.imageCategory[this.imageCategory.length-1]);
            this.imageCategory.pop();
            //Find and add random sound to combo
            this.sound1 = this.soundCategory[this.randomSoundIndex];
            this.combos[x].push(this.soundCategory[this.soundCategory.length-1]);
            this.soundCategory.pop();
            //Find and add random text to combo
            this.text1 = this.textCategory[0];
            this.combos[x].push(this.textCategory[this.textCategory.length-1]);
            this.textCategory.pop();
        }


        this.props.setCategoriesRandomizer(this.combos);
      return(
          null
      )
    }
}
export default Randomizer;