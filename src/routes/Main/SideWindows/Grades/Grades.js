import React, {useState} from 'react';
import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import Dropdown from '../../../../components/DropDown/DropDown';
import Filter from '../../../../components/Filter/Filter';
import gradesDATA from './gradesDATA';


const fileICON ='../../../../img/File.png';


const semesters = [
  {label: 'Semester 1&2', value: '1'},
  {label: 'Semester 1', value: '2'},
  {label: 'Semester 2', value: '3'}
]

const modules = [
  {label: 'Module 1', value: '1'},
  {label: 'Module 2', value: '2'},
  {label: 'Module 3', value: '3'},
  {label: 'Model 4', value: '4'}
]
  
const types = [
  {label: 'Exam', value: '1'},
  {label: 'Midterm', value: '2'},
  {label: 'Homework', value: '3'}
]
  
  
  
export const Grades = () => {
    const [selected1, setSelected1] = useState(undefined);

    const filters = {
        subjCategory: [
            {id: 'la', text: 'Linear Algebra'},
            {id: 'ts', text: 'Time Series'},
            {id: 'ecm', text: 'Econometrics'},
            {id: 'de', text: 'Differential Equations'},
            {id: 'db', text: 'Databases'},
            {id: 'ml1', text: 'Machine Learning 1'},
        ],
        selectedItem: 'la',
    }

    const [filter, setFilter] = useState('');

    const HandleFilter = (value) => {
        setFilter(value)
    }
      

    const Item = ({ item }) => (
        <View style={{flexDirection: 'row', width: 640, height: 45}}>
            <View style={{ width: 160, justifyContent:  'center', alignItems:  'flex-start', padding: 5}}>
                <Text style={{color: 'black'}}>{item.name}</Text>
            </View>

            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.08)', width: 1, height:45,}}/>

            <View style={{ width: 160, justifyContent:  'center', alignItems:   'flex-start', padding: 5}}>
                <Text style={{color: 'black'}}>{item.date}</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.08)', width: 1, height:45,}}/>

            <View style={{ width: 80, justifyContent:  'center', alignItems:  'flex-start', padding: 5}}>
                <Text style={{color: 'black'}}>{item.grade}</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.08)', width: 1, height:45,}}/>

            <View style={{ width: 160, justifyContent:  'center', alignItems:   'flex-start', padding: 5}}>
                <Text style={{color: 'black'}}>{item.sender}</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.08)', width: 1, height:45,}}/>

            <View style={{ width: 80, justifyContent:  'center', alignItems:  'flex-start', padding: 5}}>
                <Image source={require(fileICON)}/>
            </View>
        </View>

    );

    const renderSeparator = () => (
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            height: 1,
          }}
        />
      );

    const ListHeader = () => {
      return (
        <View>
          <View style={{flexDirection: 'row', width: 640, height: 45}}>
              <View style={{ width: 160, justifyContent:  'center', alignItems:  'flex-start', padding: 5}}>
                  <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>Name</Text>
              </View>

              <View style={{backgroundColor: 'rgba(0, 0, 0, 0.08)', width: 1, height:45,}}/>

              <View style={{ width: 160, justifyContent:  'center', alignItems:   'flex-start', padding: 5}}>
                  <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>Date</Text>
              </View>

              <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.08)', width: 1, height:45,}}/>

              <View style={{ width: 80, justifyContent:  'center', alignItems:  'flex-start', padding: 5}}>
                  <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>Grade</Text>
              </View>

              <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.08)', width: 1, height:45,}}/>

              <View style={{ width: 160, justifyContent:  'center', alignItems:   'flex-start', padding: 5}}>
                  <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>Graded by</Text>
              </View>

              <View style={{ backgroundColor: 'background: rgba(0, 0, 0, 0.08)', width: 1, height:45,}}/>

              <View style={{ width: 80, justifyContent:  'center', alignItems:  'flex-start', padding: 5}}>
                  <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>See work</Text>
              </View>
          </View>
          <View style={{backgroundColor: 'rgba(0, 0, 0, 0.08)', height: 1,}}/>
        </View>
      )
    }
  
    return (
      <View>
        <View style={{height: 106, justifyContent: 'flex-end', flexDirection: 'column'}}> 
          <Text style={{color: "black", fontSize: 28, fontWeight: '700', padding: (48, 60, 40)}}>Grades</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <View style={{flexDirection: 'row',  paddingLeft: 40}}>
              <Dropdown label={'Semester'} data={semesters} onSelect={setSelected1}/>
              <Dropdown label={'Module'} data={modules} onSelect={setSelected1}/>
              <Dropdown label={'Type'} data={types} onSelect={setSelected1}/>
            </View>

            <SafeAreaView style={{flexDirection: 'row', paddingLeft: 40, paddingTop: 24, paddingRight: 40}}>
              <FlatList
                data={gradesDATA.DATA}
                renderItem={Item}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={renderSeparator}
                ListHeaderComponent={ListHeader}
                showsVerticalScrollIndicator={false}
             />
            </SafeAreaView>
          </View>

          <View style={{alignItems: 'center'}}>
            <Filter HandleFilter={HandleFilter} filter={filters}/>
          </View>
        </View>
      </View>
    );
  };
  
  