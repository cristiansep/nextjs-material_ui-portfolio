import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default makeStyles((theme )=> ({
    backColor: {
        background: '#0a0a23',
      },
      cardGrid: {
        paddingTop: theme.spacing(14),
        paddingBottom: theme.spacing(14),
      },
      form: {
        width: '100%',
        // marginTop: theme.spacing(0),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        background: '#39c8fa',
        color: '#23233a',
        "&:hover,&.MuiButton-hover":{
          background: '#39c8fa',
          color: '#23233a',
        }
      },
      images: {
        height: 400,
        width: 400,
        position: 'relative',
      },
      espacio: {
        // paddingTop: theme.spacing(4),
        display: 'flex',
        '& > *': {
          margin: theme.spacing(4),
        },
      },
      espacioMobile: {
        display: 'flex',
        '& > *': {
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
        },
      },
      margen: {
        marginBottom: theme.spacing(4),
      },
      margenMobile: {
        // margin:0,
        paddingLeft:0
      },
      tamano: {
        backgroundColor: '#39c8fa',
        width: theme.spacing(6),
        height: theme.spacing(6),
        WebkitTransform: 'perspective(1px) translateZ(0)',
        transform: 'perspective(1px) translateZ(0)',
        WebkitTransitionDuration: '0.3s',
        transitionDuration: '0.3s',
        color: '#23233a',
      },
      tamanoMobile: {
        backgroundColor: '#39c8fa',
        width: theme.spacing(4),
        height: theme.spacing(4),
        WebkitTransform: 'perspective(1px) translateZ(0)',
        transform: 'perspective(1px) translateZ(0)',
        WebkitTransitionDuration: '0.3s',
        transitionDuration: '0.3s',
        color: '#23233a',
      },
      iconAnimation: {
        webkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        webkitTransitionDuration: '0.3s',
        transitionDuration: '0.3s',
        webkitTransitionProperty: 'transform',
        transitionProperty: 'transform',
        webkitTransitionTimingFunction: 'ease-out',
        transitionTimingFunction: 'ease-out',
        "&:hover, &:active, &:focus": {
          webkitTransform: 'scale(1.5) rotate(12deg)',
          transform: 'scale(1.5) rotate(12deg)',
        },
      },
      paperStyle: {
        background: "#44444a",
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
       
      },
      paperStyleMobile: {
        background: "#44444a",
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
       
      },
      textList: {
        color: '#c7c9d1',
      },
      textListMobile: {
        color: '#c7c9d1',
        marginLeft: -10,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
}));



export const InputField = withStyles({
  root: {
      "& label.Mui-focused": {
          color: "#c7c9d1"
      },
      "& label": {
          color: "#c7c9d1",
      },
      "& .MuiOutlinedInput-root": {
          "& fieldset": {
              borderColor: "#c7c9d1"
          },
          "&.MuiOutlinedInput-colorSecondary": {
            color: "#c7c9d1"
          },
          "&.Mui-focused fieldset": {
            borderColor: "#c7c9d1"
          },
          "&:hover fieldset": {
            borderColor: "#23233a"
        },
      },
  },
  
})(TextField);