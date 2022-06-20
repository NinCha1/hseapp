import React, { useContext, useState } from 'react';
import { View, SectionList, Text, Animated, SafeAreaView, Image, Button, FlatList, Easing, Platform } from 'react-native';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Calendar from '../../../../../../components/Calendar/Calendar';
import styles from './styles';
import useApi from '../../../../../../hooks/useApi';
import scheduleAPI from '../../../../../../API/scheduleAPI';
import Spinner from '../../../../../../components/Spinner/Spinner'
import { AuthContext } from '../../../../../../API/AuthContext';
import { AxiosContext } from '../../../../../../API/AxiosProvider';
import CustomModal from '../../../../../../components/CustomModal/CustomModal';
import axios from 'axios';
import { dateMonthHandler, dateTimeHandler, dateDateHandler } from '../../../../../../common/dateFormater'
import { connect } from 'react-redux';

// const Item = ({item}) => (
//     <View style={styles.item}>
//         <View style={styles.timeCont}>
//             <Text style={styles.timeStart}>{item.timeStart}</Text>
//             <Text style={styles.timeEnd}>{item.timeEnd}</Text>
//         </View>
//         <View style={styles.delimeter}/>
//         <View style={styles.infoCont}>
//             <Text style={styles.type}>{item.type}</Text>
//             <Text style={styles.subjectName}>{item.subjectName}</Text>
//             <Text style={styles.visitType}>{item.visitType}</Text>
//             <Image style={styles.icon} source={require('../../../../../../../assets/img/online.png')}/>
//         </View>
//     </View>
// );

const Item = ({item}) => (

    <View style={styles.item}>
        <View style={styles.timeCont}>
            <Text style={styles.timeStart}>{dateTimeHandler(item.timeStart)}</Text>
            <Text style={styles.timeEnd}>{dateTimeHandler(item.timeEnd)}</Text>
        </View>
        <View style={styles.delimeter}/>
        <View style={styles.infoCont}>
            <Text style={styles.type}>{item.lessonType}</Text>
            <Text style={styles.subjectName} selectable={true}>{item.lessonName}</Text>
            <Text style={styles.visitType} selectable={true}>{item.zoomLink}</Text>
            <Image style={styles.icon} source={require('../../../../../../../assets/img/online.png')}/>
        </View>
    </View>
);


const Timetable = (props) => {
    const axiosContext = useContext(AxiosContext);
    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState('loading');
    const [formatedData, setFormatedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalNum, setTotalNum] = useState(1)

    const state = { scale: new Animated.Value(1), opacity: new Animated.Value(1)}

    const yourConfig = {
        headers: {
           Authorization: "Bearer " + authContext.authState.accessToken
        }
    }

    console.log(authContext.authState.accessToken)

    function toggleModal () {
        if (props.action === 'openModel') {
            Animated.timing(state.scale, {
                toValue: 0.9,
                duration: 300,
                easing: Easing.in()
              }).start();

            Animated.spring(state.opacity, {
                toValue: 0.5
            }).start();
        }

        if (props.action === 'closeModal') {
            Animated.timing(state.scale, {
              toValue: 1,
              duration: 300,
              easing: Easing.in()
            }).start();
            Animated.spring(state.opacity, {
              toValue: 1
            }).start();
        }

    }

    const fetchData = () => {
        if (currentPage > totalNum) {
            return
        } 
        loadData()
    }

    useEffect(() => {
        toggleModal()
    }, [props])

    console.log(props)

    const loadData = async () => {
        setStatus('loading');
        try {
            console.log(currentPage)
            const response = await axios.get(`https://hse-backend-test.herokuapp.com/schedule?page=${currentPage}`, yourConfig);
            console.log(currentPage)
            processData(response.data.timeTable)
            setTotalNum(response.data.pageNum)
            setStatus('success');
            
        } catch (error) {
            setStatus('error');
        }
    }
    

    const processData = (dict) => {
        const keys = Object.keys(dict);
        keys.sort(function(lhs, rhs){
            return new Date(lhs) - new Date(rhs); 
        })

        const object = {
            title: undefined,
            data: undefined
        }

        
        const data = keys.map(key => {
            const obj = Object.create(object)
            obj.title = key
            obj.data = dict[key]

            return obj
        })
        var newData = formatedData.concat(data)
        setFormatedData(newData)
    }

    useEffect(() => {
        fetchData();
    }, []);

    function handleScroll() {
        setCurrentPage(currentPage => currentPage + 1);
        fetchData()
    }

    if (status === 'loading') {

        return (
            <View style={styles.container}>
                <Spinner/>
            </View>
            )
    } else {
        return (
        <View style={styles.container}>
            <Animated.View style={[styles.container, {
            transform: [{ scale: state.scale }],
            opacity: state.opacity
          }]}>
                    <SectionList
                        style={{marginLeft: 30}}
                        sections={formatedData}
                        renderItem={Item}
                        renderSectionHeader={({section}) => (
                            <Text style={styles.header}>{dateMonthHandler(section.title)}</Text>
                        )} 
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        onEndReached={handleScroll}
                    />
                    {/* <View style={{minWidth: '30%'}}>
                        <Calendar style={styles.components}/>
                    </View> */}
                    <Button title='Yes' color="#841584" onPress={props.openModal}/>
            </Animated.View>
            <CustomModal/>
        </View>
        )
    }

    // return (
        // <SafeAreaView style={styles.container}>
        //     {getTimetableApi.loading ? <Spinner/> : (
        //         <View style={styles.container}>
        //             <SectionList
        //                 style={{marginLeft: 30}}
        //                 sections={getTimetableApi.data}
        //                 renderItem={Item}
        //                 renderSectionHeader={({section}) => (
        //                     <Text style={styles.header}>{section.title}</Text>
        //                 )} 
        //                 keyExtractor={(item, index) => index.toString()}
        //                 showsVerticalScrollIndicator={false}
        //             />
        //             <View style={{minWidth: '30%'}}>
        //                 {/* <Calendar style={styles.components}/> */}
        //             </View>
        //         </View>
        //             )}
        // </SafeAreaView>
        // <View></View>
    // )
}

function mapStateToProps(state) {
    return { action: state.action };
}
  
function mapDispatchToProps(dispatch) {
    return {
      openModal: () =>
        dispatch({
          type: 'OPEN_MODAL'
        })
    };
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Timetable);
