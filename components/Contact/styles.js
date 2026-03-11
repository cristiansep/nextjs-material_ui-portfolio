import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default makeStyles((theme )=> ({
    backColor: {},
      cardGrid: {
        paddingTop: theme.spacing(14),
        paddingBottom: theme.spacing(14),
      },
      form: {
        width: '100%',
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        background: 'linear-gradient(135deg, #39c8fa 0%, #a78bfa 100%)',
        color: '#ffffff',
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 600,
        letterSpacing: '2px',
        fontSize: '0.85rem',
        borderRadius: '10px',
        padding: '12px',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        "&:hover,&.MuiButton-hover":{
          background: 'linear-gradient(135deg, #a78bfa 0%, #39c8fa 100%)',
          transform: 'translateY(-3px)',
          boxShadow: '0 10px 30px rgba(57, 200, 250, 0.25)',
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: '0.8rem',
          letterSpacing: '1px',
        },
      },
      images: {
        height: 400,
        width: 400,
        position: 'relative',
      },
      espacio: {
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
        marginBottom: theme.spacing(3),
      },
      margenMobile: {
        paddingLeft:0
      },
      tamano: {
        background: 'linear-gradient(135deg, #39c8fa 0%, #a78bfa 100%)',
        width: theme.spacing(6),
        height: theme.spacing(6),
        transition: 'all 0.3s ease',
        color: '#ffffff',
      },
      tamanoMobile: {
        background: 'linear-gradient(135deg, #39c8fa 0%, #a78bfa 100%)',
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
        transition: 'all 0.3s ease',
        color: '#ffffff',
      },
      iconAnimation: {
        transition: 'all 0.3s ease',
        "&:hover, &:active, &:focus": {
          transform: 'scale(1.2)',
        },
      },
      paperStyle: {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '20px',
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
      },
      paperStyleMobile: {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '16px',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
      textList: {
        '& .MuiListItemText-primary': {
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'Outfit, sans-serif',
          letterSpacing: '0.5px',
        },
      },
      textListMobile: {
        marginLeft: -10,
        '& .MuiListItemText-primary': {
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'Outfit, sans-serif',
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
      },
      "& label": {
          color: "rgba(255, 255, 255, 0.4)",
          fontFamily: 'Outfit, sans-serif',
          letterSpacing: '0.5px',
          [theme.breakpoints.down("sm")]: {
            fontSize: '0.85rem',
          },
      },
      "& .MuiOutlinedInput-root": {
          borderRadius: '10px',
          transition: 'all 0.3s ease',
          "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.08)",
              transition: 'all 0.3s ease',
          },
          "&.MuiOutlinedInput-colorSecondary": {
            color: "rgba(255, 255, 255, 0.7)"
          },
          "&.Mui-focused fieldset": {
            borderColor: "rgba(57, 200, 250, 0.5)",
            boxShadow: '0 0 20px rgba(57, 200, 250, 0.08)',
          },
          "&:hover fieldset": {
            borderColor: "rgba(57, 200, 250, 0.3)",
        },
      },
      "& .MuiOutlinedInput-input": {
          color: "rgba(255, 255, 255, 0.8)",
          fontFamily: 'Outfit, sans-serif',
          [theme.breakpoints.down("sm")]: {
            fontSize: '0.85rem',
            padding: '14px',
          },
      },
  },

}))(TextField);
