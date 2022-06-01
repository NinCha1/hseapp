import React, {FC, useState, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, FlatList, Animated} from 'react-native';


const Dropdown = ({label, data, onSelect}) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const showUp = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000
        }).start();
    };

    const DropdownButton = useRef();
    // const [dropdownTop, setDropdownTop] = useState(0);
    const DropdownIcon = require('../../../assets/img/dropdown.png')
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(undefined);

    const toggleDropdown = () => {
        visible ? setVisible(false) : openDropdown();
    };

    const openDropdown = () => {
        // DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
        //     setDropdownTop(py + h);
        // });
        setVisible(true);
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onItemPress(item)} style={{padding: (0, 0, 0, 16), alignItems: 'flex-start'}}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>{item.label}</Text>
        </TouchableOpacity>
    )

    const onItemPress = (item) => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    }

    const renderDropdown = () => {
        if (visible) {
            return (
                    <TouchableOpacity 
                        style={{ backgroundColor: '#F5F5F5', border: 2, borderColor: ' rgba(0, 0, 0, 0.08)', flexDirection: 'row', alignItems: 'flex-start'}} 
                        onPress={() => {setVisible(false);  showUp}}
                    >
                        <Animated.View>
                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                />
                        </Animated.View>
                    </TouchableOpacity>
            );
        }
    };

    return (
        <TouchableOpacity onPress={toggleDropdown} style={{marginRight: 16, border: 2, borderColor: ' rgba(0, 0, 0, 0.08)'}}>
            <View style={{borderRadius: 8}}>
                <View style={{ paddingLeft: 16, height: 48,  backgroundColor: '#F5F5F5', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'rgba(0, 0, 0, 0.3)', marginRight: 32, fontSize: 16, fontWeight: '500'}}> {(selected && selected.label) || label}</Text>
                    <View style={{width: 20, height: 20, alignContent: 'center', justifyContent: 'center'}}>
                        <Image source={DropdownIcon}/>
                    </View>
                </View>
                {renderDropdown()}
            </View>
        </TouchableOpacity>
    );
}

export default Dropdown;
