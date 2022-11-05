import { View, ScrollView, Text, StyleSheet, Button } from "react-native"
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailGroup from "./DetailGroup";
import { caseDetail } from "./data";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useDispatch, useSelector } from 'react-redux';
import { getCase } from '../../../redux/slices/Case';
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { colors } from "../../styles/Theme"
const CaseDetail = () => {
  const {params}= useRoute()
  const {} = useSelector(state => state.case)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCase({id:params.id}))
    
  },[])
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Detalles de caso</Text>
          <Material name="pencil-outline" size={30} style={styles.headerIcon} />
        </View>
        <ScrollView style={styles.bodyDetail}>
          {caseDetail.map((group, index) => {
            let keys = Object.keys(group)
            let values = Object.values(group)
            return <DetailGroup key={index} titles={keys} data={values} />
          })}
          <View style={styles.btnGroup}>
          <Pressable style={[styles.btn, styles.btnDanger]}>
            <Text style={styles.btnLabel}>Eliminar</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnSuccess]}>
            <Text style={styles.btnLabel}>Guardar</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnPrincipal]}>
            <Text style={styles.btnLabel}>Enviar</Text>
          </Pressable>
          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 120
  },
  header: {
    width: 354,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#278AB0",
    height: 50,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  headerTitle: {
    width: "100%",
    textAlign: "center",
    color: colors.WHITE
  },
  headerIcon: {
    transform: [{translateX: -40}],
    color: colors.WHITE
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 13,
    marginBottom: 13
  },
  btn: {
    width: 86,
    height: 33,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center"
  },
  btnLabel: {
    color: colors.WHITE,
    fontWeight: "bold",
    fontSize: 14
  },
  btnSuccess: {
    backgroundColor: "#1DC690"
  },
  btnDanger: {
    backgroundColor: "#BF4B5E"
  },
  btnPrincipal:{
    backgroundColor: colors.PRIMARY
  }
});

export default CaseDetail