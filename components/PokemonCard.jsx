import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };
  

export default function PokemonCard({
name,
image,
type,
hp,
moves,
weaknesses,
}

) {
const {borderColor , emoji} = getTypeDetails(type)

  return (
    <View style = {styles.Card}>
     <View style = {styles.nameContainer}  >
        <Text style = {styles.name}>{name}</Text>
        <Text style = {styles.hp}>❤️HP: {hp}</Text>
     </View>
      <Image source={image} 
      style = {styles.image}
      accessibilityLabel={`${name}pokemon`}
      resizeMode= "contain"
      /> 
     <View style = {styles.typeContainer}  >
        <View style = {[styles.badge , {borderColor}]}  >
        <Text style = {styles.typeemoji}>{emoji}</Text>
        <Text style = {styles.typeText}>{type}</Text>
        </View>
     </View>
     <View style = {styles.movesContainer}  >
        <Text style = {styles.movesText}  >
            Moves: {moves.join(" , ")}
        </Text>
     </View>
     <View style = {styles.weaknessContainer}  >
        <Text style = {styles.weaknessText} >
            Weaknesses: {weaknesses.join(" , ")}
        </Text>
     </View>
    </View>

  )
}

const styles = StyleSheet.create({
    Card:{
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 15,
        margin: 15,
    },
    nameContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
    },
    name:{
        fontSize: 30,
        fontWeight: "bold",

    },
    hp: {
        fontSize: 22,
    },
    image:{
        width: "100%",
        height: 200,
        marginBottom: 16
    },
    typeContainer: {
        marginBottom: 40,
        alignItems: "center"
    },
    badge:{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    typeemoji:{
        fontSize: 30,
        marginRight: 12
    },
    typeText:{
        fontSize: 22,
        fontWeight: "bold",
    },
    movesContainer:{
        marginBottom: 16,
    },
    movesText:{
        fontSize: 22,
        fontWeight: "bold"
    },
    weaknessContainer:{
marginBottom: 8,
    },
    weaknessText:{
fontSize: 22,
fontWeight: "bold"
    }

})
