import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    interfaceContainer: {
        gap: 16,

        [theme.breakpoints.down('sm')]: {
            margin: 16
        }
    },

    main: {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        padding: '20px 0'
    },
    titleLink: {
        textDecoration: 'none'
    },
    titleItemWhite: {
        fontFamily: 'Oxanium',
        fontSize: '1.5em',
        paddingTop: '0.5em',
        paddingLeft: '1em',
        color: 'white',
        textShadow: '0.1em 0.1em 0.1em black'
    },
    titleItemBlack: {
        fontFamily: 'Oxanium',
        fontSize: '1.5em',
        paddingTop: '0.5em',
        paddingLeft: '1em',
        color: '#24292e',
    },
    media: {
        minHeight: 260
    },

    gridApplicationLg: {
        [theme.breakpoints.up('lg')]: {
            width: '20%',
            maxWidth: '20%'
        }
    },
    applicationDisabled: {
        opacity: '0.15',
        pointerEvents: 'none'
    },
    applicationEnabled: {
        opacity: '1',
        pointerEvents: 'initial'
    },
    comingSoon: {
        fontFamily: 'Oxanium',
        fontSize: '1.5em',
        paddingTop: '0.5em',
        paddingLeft: '1em',
        color: '#24292e',
    }
}))

export default useStyles

