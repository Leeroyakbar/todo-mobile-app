import { Button, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from './app/screen/HomeScreen/HomeScreen.js'
import { SafeAreaView } from 'react-native-safe-area-context'

const data = [
  {
    id: 1,
    name: "F150",
    price: 500000000,
    stock: 1,
    url: "https://www.butlertire.com/images/trending/2018/9/21/Ford_Raptor_with_22in_Grid_Off-road_GF2_Wheels_and_Toyo_Open_Country_MT_Tires_and_4in_BDS_Lift_12018921_large.jpeg"
  },
  {
    id: 2,
    name: "Civic",
    price: 300000000,
    stock: 10,
    url: "https://cdn.carshowroom.com.au/media/21488027/2018-honda-civic-type-r-fk8-39.jpg"
  },
  {
    id: 3,
    name: "Hilux",
    price: 500000000,
    stock: 7,
    url: "https://paultan.org/image/2021/09/Toyota-Hilux-Rad-widebody-5-BM-630x354.jpeg"
  },
  {
    id: 4,
    name: "Triton",
    price: 300000000,
    stock: 13,
    url: "https://img-ik.cars.co.za/news-site-za/images/2020/06/Mitsubishi-TritonXtreme-3.jpg?tr=w-1200,h-800"
  },
  {
    id: 5,
    name: "Palisade",
    price: 100000000,
    stock: 15,
    url: "https://cdni.autocarindia.com/ExtraImages/20220414061536_Hyundai_Palisade_facelift_front.jpg"
  }
]

export default function App() {

  const[count, setCount] = useState(0)
  const[products, setProducts] = useState(data)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleMin = () => {
    if(count <= 0) return;
    setCount(count -1)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style= {{flex: 1}}>
        <HomeScreen/>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonAdd} onPress={handleMin}>
          <Text style={styles.textButton}>Add</Text>
        </Pressable>
        <Text style={styles.textCount}>{count}</Text>
        <Pressable style={styles.buttonAdd} onPress={handleAdd}>
          <Text style={styles.textButton}>Add</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.listContainer}>
        {products.map((product) => {
          return(
            <View key={product.id} style={styles.productItems}>
                <Image
                  source={{uri : `${product.url}`}}
                  style={styles.productImages}
                />
              <View style={styles.description}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Name: {product.name}</Text>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>${product.price}</Text>
                <Text>{product.stock} Units</Text>
              </View>
            </View>
          )
        } )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#fffffe",
    paddingTop: 24
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  buttonAdd: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#5BBCFF",
    alignItems: "center",
    justifyContent: "center",
    color: "#fffffe",
    borderRadius: 5,
    
  },
  textButton: {
    color: "#fffffe",
    fontSize: 15,
  },
  textCount: {
    fontSize: 30,
    paddingHorizontal: 30,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  productItems: {
    flexDirection: "row",
    justifyContent: 'space-around',
    backgroundColor: "#5BBCFF",
    borderWidth: 1,
    marginBottom: 12,
    
  },
  productImages:{
    width: 200,
    height: 150,
    borderRadius: 10,
    marginVertical: 20,
    borderWidth: 4,
    padding: 4,
    borderColor: "#FFD1E3",
    
  },
  description: {
    justifyContent: 'center'
  }
})