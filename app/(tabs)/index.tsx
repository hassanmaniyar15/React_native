import { SafeAreaView, StyleSheet, Text, View, Platform , ScrollView } from 'react-native'
import PokemonCard from '@/components/PokemonCard'
import React from 'react'


export default function index() {
const charmendarData = {
  name : "Charmendar",
  image : require("@/assets/images/charmander.png"),
  type: "Fire",
  hp: 39,
  moves: ["Scratch" , "Ember" ,"Growl" ,"Leer"],
  weaknesses: ["Water" ,"Rock"]
};
const squirtleData = {
  name: "Squirtle",
  image: require("@/assets/images/squirtle.png"), // Replace with the actual image path
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  weaknesses: ["Electric", "Grass"],
};
const bulbasaurData = {
  name: "Bulbasaur",
  image: require("@/assets/images/bulbasaur.png"), // Replace with the actual image path
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
};
const pikachuData = {
  name: "Pikachu",
  image: require("@/assets/images/pikachu.png"), // Replace with the actual image path
  type: "Electric",
  hp: 35,
  moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
  weaknesses: ["Ground"],
};


  return (
    <ScrollView>
      <SafeAreaView  style = {styles.container}>
      <PokemonCard {...charmendarData}/>
    <PokemonCard {...squirtleData}/>
    <PokemonCard {...bulbasaurData}/>
    <PokemonCard {...pikachuData}/>
    </SafeAreaView>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? 25 : 0
  }
})