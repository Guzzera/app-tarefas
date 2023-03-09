import { StyleSheet } from "react-native";

const estilo = StyleSheet.create ({

    layoutContainer: {
        backgroundColor: '#222f3e',
        padding: 20,
        flex: 2,
        alignItems: 'center',
    },

    itemContainer: {
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    itemTD: {
        color: '#ffff'
    },

    lista: {
        width: '100%'
    },

    botaoNovo: {
        color: '#ffff',
        marginRight: 20,
        fontSize: 16,
    },

    input: {
        width: '90%',
        marginBottom: 8,
        fontSize: 14,
        borderWidth: 2,
        borderColor: '#10ac84',
        height: 36,
        color: '#ffff',
        padding: 6,
        textAlign: 'center',
        borderRadius: 6
    },

    botaoSalvar: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 6,
        marginBottom: 10,
        backgroundColor: '#10ac84',
        width: '60%'
    },

    textoBotao: {
        color: '#ffff',
        textAlign: 'center'
    },

    delete: {
        backgroundColor: '#ee5253',
        padding: 8,
        borderRadius: 6
    },

    textoDelete: {
        color: '#ffff',
        fontWeight: '700'
    },

    botaoAtualizar: {
        padding: 10,
        paddingBottom: 10,
        borderRadius: 6,
        marginBottom: 4,
        backgroundColor: '#e58e26',
        width: '60%'
    },
});

export default estilo;