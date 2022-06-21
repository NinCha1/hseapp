import React, {useState} from 'react';
import { ScrollView, View, Button, TextInput, Text } from 'react-native';
import Colors from '../../common/Colors';

function ModalContent ({data}) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
           <Text style={{color: Colors.primary, fontWeight: '500', fontSize: 12, marginBottom: 12}}>MACHINE LEARNING</Text>
           <Text style={{color: Colors.text_prim, fontWeight: '700', fontSize: 28, marginBottom: 12}}>Venus and Mars</Text>
           <Text style={{color: Colors.text_tret, fontWeight: '600', fontSize: 20,  marginBottom: 24}}>Homework #14</Text>
           <Text style={{color: Colors.text_prim, fontWeight: '500', fontSize: 16, marginBottom: 16}}>Description</Text>
           <Text style={{color: Colors.text_tret, fontSize: 14, fontWeight: '400', marginBottom: 24}}>Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit. Amet, nunc, purus, 
           gravida suspendisse a libero nisl. Ut faucibus 
           elementum diam arcu vel amet, nulla et. Non eget ac a, at. Varius in sit congue 
           dignissim sed arcu. Elementum amet, sagittis a urna. Lacus tempus 
           eget est eu molestie amet. Risus, mi malesuada nunc 
           diam convallis phasellus non. Bibendum sed rhoncus, urna volutpat urna, nunc ipsum. 
           Volutpat arcu quis 
           pulvinar amet ut. Duis semper at sit 
           vel, quis praesent leo consectetur. Mattis eu, vitae 
           sed pharetra, diam nec.</Text>

           <View style={{flexDirection: 'row'}}>
                <Text style={{color: Colors.text_prim, fontWeight: '500', fontSize: 16, marginBottom: 16, marginRight: 16}}>Publication</Text>
                <Text style={{color: Colors.text_tret, fontSize: 16, fontWeight: '500'}}>12.01.22 14:26</Text>
           </View>

           <View style={{flexDirection: 'row'}}>
                <Text style={{color: Colors.text_prim, fontWeight: '500', fontSize: 16, marginBottom: 16, marginRight: 16}}>Deadline</Text>
                <Text style={{color: Colors.text_tret, fontSize: 16, fontWeight: '500'}}>27.01.22 23:59</Text>
           </View>

           <View style={{flexDirection: 'column', marginBottom: 24}}>
                <Text style={{color: Colors.text_prim, fontWeight: '500', fontSize: 16, marginBottom: 10, marginRight: 16}}>Created by</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{borderRadius: 24, width: 36, height: 36, backgroundColor: Colors.text_second, marginRight: 16}}/>
                    <Text style={{color: Colors.text_tret, fontSize: 16, fontWeight: '500'}}>Oleg Melnikov</Text>
                </View>
           </View>

           <View style={{flexDirection: 'column'}}>
                <Text style={{color: Colors.text_prim, fontWeight: '500', fontSize: 16, marginBottom: 16, marginRight: 16}}>Submission</Text>
                <View style={{width: '100%', backgroundColor: Colors.loginBack, borderRadius: 8, padding: 12}}>
                    <Text style={{fontSize: 16, fontWeight: '500', color: Colors.primary}}>HW14_Sharara_Nina.pdf</Text>
                </View>
           </View>
        </ScrollView>
    )
}

export default ModalContent;
