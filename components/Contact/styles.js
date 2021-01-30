import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default makeStyles((theme )=> ({
    backColor: {
        background: '#F9EBEA',
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
        background: '#ff4c60',
        color: 'white',
        "&:hover,&.MuiButton-hover":{
          background: '#DD3A4C',
          color: 'white',
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
      margen: {
        marginBottom: theme.spacing(4),
      },
      tamano: {
        backgroundColor: '#252740',
        width: theme.spacing(6),
        height: theme.spacing(6),
        WebkitTransform: 'perspective(1px) translateZ(0)',
        transform: 'perspective(1px) translateZ(0)',
        WebkitTransitionDuration: '0.3s',
        transitionDuration: '0.3s'
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
        backgroundColor: '#F9EBEA',
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
       
      },
      textList: {
        color: '#7c7d8c',
      }
}));



export const InputField = withStyles({
  root: {
      "& label.Mui-focused": {
          color: "#7c7d8c"
      },
      "& label": {
          color: "#7c7d8c",
      },
      "& .MuiOutlinedInput-root": {
          "& fieldset": {
              borderColor: "#7c7d8c"
          },
          "&.MuiOutlinedInput-colorSecondary": {
            color: "#7c7d8c"
          },
          "&.Mui-focused fieldset": {
            borderColor: "#7c7d8c"
          },
          "&:hover fieldset": {
            borderColor: "#252740"
        },
      },
  },
  
})(TextField);