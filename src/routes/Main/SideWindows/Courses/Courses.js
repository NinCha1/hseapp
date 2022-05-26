import { element } from 'prop-types';
import React, {Component, useState} from 'react';
import {View, Text, ScrollView, TextInput, SafeAreaView, FlatList, Image} from 'react-native';
import Filter from '../../../../components/Filter/Filter';

const DATA = [
    {
        id: 'la',
        courseDesc: 'The course introduces students to the elements of linear algebra and analytic geometry, provides the foundations for understanding some of the main concepts of modern mathematics. There is a strong emphasis in this course on complete proofs of almost all results. \n\nWe will approach the subject from both a practical point of view (learning methods and acquiring computational skills relevant for problem solving) and a theoretical point of view (learning a more abstract and theoretical approach that focuses on achieving a deep understanding of the different abstract concepts). \n\nTopics covered include: matrix algebra, systems of linear equations, permutations, determinants, complex numbers, fields, abstract vector spaces, bilinear and quadratic forms, Euclidean spaces, some elements of analytic geometry, linear operators. It took mathematicians at least two hundred years to comprehend these objects. We plan to accomplish this in one year.',
        gradeFormula: '0.25*(0.3*Exam1 + 0.7*(0.3125*Oral1 + 0.25*W1 + 0.25*Q1 + 0.1875*H1)) +  0.75*(0.3*Exam2 + 0.7*(0.3125*Oral2 + 0.25*W2 + 0.25*Q2 + 0.1875*H2)))',
        teachers: [
            {
                name: 'Andrey Mazhuga',
                role: 'Lecturer / Seminarist',
                group: '191',

            },
            {
                name: 'Galina Kaleeva',
                role: 'Seminarist',
                group: '192',

            },
            {
                name: 'Nikita Medved',
                role: 'Seminarist',
                group: '193',

            },
        ]
    }
    
]

export const Courses = () => {
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

    const Item = ({item}) => (
        <View>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#000000', marginBottom: 16}}>Course description</Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'rgba(0, 0, 0, 0.5)', marginBottom: 20}}>{item.courseDesc}</Text>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#000000', marginBottom: 16}}>Grading Formula</Text>
            <View style={{ backgroundColor: '#F5F5F5', padding: 12, borderRadius: 8, marginBottom: 20}}>
                <Text style={{color: '#000000', fontSize: 14, fontWeight: '500'}}>{item.gradeFormula}</Text>
            </View>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#000000', marginBottom: 16}}>Teaching Staff</Text>
            <View style={{flexDirection: 'row', marginBottom: 100}}>
            {
                item.teachers.map((element) => {
                    return (
                    <View style={{padding: 12, alignItems: 'center', flexDirection: 'row'}}>
                        <View>
                            <Image style={{width: 48, height: 48, marginRight: 8}} source={require('../../../../img/profile.png')}/>
                        </View>
                        <View>
                            <Text style={{color: '#000000', fontSize: 16, fontWeight: '500'}}>{element.name}</Text>
                            <Text style={{color: '#1F4EC7', fontSize: 12, fontWeight: '500'}}>{element.role} · {element.group}</Text>
                        </View>
                    </View>
                    
                    )
                })
            }
            </View>
        </View>
    )

        return (
            <View>
                <View style={{height: 106, justifyContent: 'flex-end', flexDirection: 'column',width: '100%'}}>
                    <Text style={{color: "black", fontSize: 28, fontWeight: '700', padding: (48, 60, 40)}}>Courses · Linear Algebra</Text>
                </View>
                <View style={{flexDirection: 'row'}}>

                    <View style={{width: 700, padding: 40}}>
                        <FlatList
                        data={DATA}
                        ListHeaderComponent={
                            <View>
                                <TextInput placeholder="Search" placeholderTextColor = "rgba(0, 0, 0, 0.5)" style={{height: 48, backgroundColor: '#F5F5F5', borderRadius: 12, padding: (12, 16), alignItems: 'center'}}/>
                            </View>
                        }
                        keyExtractor={(item, index) => index}
                        renderItem={Item}
                        showsVerticalScrollIndicator={false}
                        /> 
                    

                    </View>
                    <View style={{}}>
                        <Filter filter={filters} HandleFilter={HandleFilter}/>
                    </View>
                </View>
            </View>
        )
}