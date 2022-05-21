import React, {Component, useState, useEffect} from 'react';
import {View, Text, FlatList, Image, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import Filter from '../../../../components/Filter/Filter';


const fileICON ='../../../../img/File.png';


const DATA = [
    {
      id: "1",
      name: "HW16",
      date: "26 of January 2021",
      grade: "10/10",
      sender: "Anton Vlasov",
      work: fileICON,

    },
    {
      id: "2",
      name: "HW16",
      date: "26 of January 2021",
      grade: "10/10",
      sender: "Anton Vlasov",
      work: fileICON,
    },
    {
      id: "3",
      name: "HW16",
      date: "26 of January 2021",
      grade: "10/10",
      sender: "Anton Vlasov",
      work: fileICON,
    },
    
    {
    id: "4",
    name: "HW16",
    date: "26 of January 2021",
    grade: "10/10",
    sender: "Anton Vlasov",
    work: fileICON,

  },
  {
    id: "5",
    name: "HW16",
    date: "26 of January 2021",
    grade: "10/10",
    sender: "Anton Vlasov",
    work: fileICON,
  },
  {
    id: "6",
    name: "HW16",
    date: "26 of January 2021",
    grade: "10/10",
    sender: "Anton Vlasov",
    work: fileICON,
  },
  ];


  

  
export const Grades = () => {

    const filters = {
        subjCategory: [
            {id: 'la', text: 'Linear Algebra'},
            {id: 'ts', text: 'Time Series'},
            {id: 'ecm', text: 'Econometrics'},
            {id: 'de', text: 'Differential Equations'},
            {id: 'db', text: 'Databases'},
            {id: 'ml1', text: 'Machine Learning 1'},
        ],
        selectedItem: {id: 'la', text: 'Linear Algebra'},
    }

    const [filter, setFilter] = useState('');

    const HandleFilter = (value) => {
        setFilter(value)
    }
      

    const Item = ({ item }) => (
        <View style={{flexDirection: 'row', width: 680, height: 45}}>
            <View style={{ width: 160, justifyContent:  'center', alignItems:  'flex-start', padding: 5}}>
                <Text style={{color: 'red'}}>{item.name}</Text>
            </View>

            <View style={{backgroundColor: 'gray', width: 1, height:45,}}/>

            <View style={{ width: 160, justifyContent:  'center', alignItems:   'center', padding: 5}}>
                <Text style={{color: 'red'}}>{item.date}</Text>
            </View>

            <View style={{ backgroundColor: 'gray', width: 1, height:45,}}/>

            <View style={{ width: 80, justifyContent:  'center', alignItems:  'center', padding: 5}}>
                <Text style={{color: 'red'}}>{item.grade}</Text>
            </View>

            <View style={{ backgroundColor: 'gray', width: 1, height:45,}}/>

            <View style={{ width: 160, justifyContent:  'center', alignItems:   'flex-start', padding: 5}}>
                <Text style={{color: 'red'}}>{item.sender}</Text>
            </View>

            <View style={{ backgroundColor: 'gray', width: 1, height:45,}}/>

            <View style={{ width: 80, justifyContent:  'center', alignItems:  'flex-start', padding: 5}}>
                <Image source={require(fileICON)}/>
            </View>
        </View>

    );

    const renderSeparator = () => (
        <View
          style={{
            backgroundColor: 'gray',
            height: 1,
          }}
        />
      );

    console.log(filters)
  
    return (
      <SafeAreaView style={{flexDirection: 'row'}}>
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
        <Filter HandleFilter={HandleFilter} filter={filters}/>
      </SafeAreaView>
    );
  };
  
  