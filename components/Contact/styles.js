import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default makeStyles((theme )=> ({
    backColor: {
        // background: '#0a0a23',
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
        background: 'linear-gradient(90deg, #39c8fa 0%, #7b68ee 100%)',
        color: '#ffffff',
        boxShadow: '0 0 15px rgba(57, 200, 250, 0.4)',
        letterSpacing: '1px',
        fontWeight: 600,
        transition: 'all 0.3s ease',
        "&:hover,&.MuiButton-hover":{
          background: 'linear-gradient(90deg, #7b68ee 0%, #39c8fa 100%)',
          boxShadow: '0 0 25px rgba(57, 200, 250, 0.6)',
          transform: 'translateY(-2px)',
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: '0.85rem',
          letterSpacing: '0.5px',
        },
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
        background: 'linear-gradient(135deg, #39c8fa 0%, #7b68ee 100%)',
        width: theme.spacing(6),
        height: theme.spacing(6),
        WebkitTransform: 'perspective(1px) translateZ(0)',
        transform: 'perspective(1px) translateZ(0)',
        WebkitTransitionDuration: '0.3s',
        transitionDuration: '0.3s',
        color: '#ffffff',
        boxShadow: '0 0 15px rgba(57, 200, 250, 0.4)',
      },
      tamanoMobile: {
        background: 'linear-gradient(135deg, #39c8fa 0%, #7b68ee 100%)',
        width: theme.spacing(4),
        height: theme.spacing(4),
        WebkitTransform: 'perspective(1px) translateZ(0)',
        transform: 'perspective(1px) translateZ(0)',
        WebkitTransitionDuration: '0.3s',
        transitionDuration: '0.3s',
        color: '#ffffff',
        boxShadow: '0 0 10px rgba(57, 200, 250, 0.4)',
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
        '& .MuiListItemText-primary': {
          color: '#c7c9d1',
          letterSpacing: '0.5px',
        },
      },
      textListMobile: {
        marginLeft: -10,
        '& .MuiListItemText-primary': {
          color: '#c7c9d1',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '0.85rem',
          letterSpacing: '0.3px',
        },
      }
}));



export const InputField = withStyles((theme) => ({
  root: {
      "& label.Mui-focused": {
          color: "#39c8fa",
          textShadow: '0 0 8px rgba(57, 200, 250, 0.4)',
      },
      "& label": {
          color: "#c7c9d1",
          [theme.breakpoints.down("sm")]: {
            fontSize: '0.85rem',
          },
      },
      "& .MuiOutlinedInput-root": {
          "& fieldset": {
              borderColor: "#c7c9d1",
              transition: 'all 0.3s ease',
          },
          "&.MuiOutlinedInput-colorSecondary": {
            color: "#c7c9d1"
          },
          "&.Mui-focused fieldset": {
            borderColor: "#39c8fa",
            boxShadow: '0 0 10px rgba(57, 200, 250, 0.3)',
          },
          "&:hover fieldset": {
            borderColor: "#39c8fa",
        },
      },
      "& .MuiOutlinedInput-input": {
          color: "#c7c9d1",
          [theme.breakpoints.down("sm")]: {
            fontSize: '0.85rem',
            padding: '14px',
          },
      },
  },
  
}))(TextField);