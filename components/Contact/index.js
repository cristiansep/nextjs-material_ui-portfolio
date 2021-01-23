import React, { useState } from 'react';
import Title from '../../components/Title';
import Grid from '@material-ui/core/Grid';
import {withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fade from 'react-reveal/Fade';
import Paper from '@material-ui/core/Paper';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


import useStyles from './styles';
import { emailContact } from '../../helpers/emailContact';



const InputField = withStyles({
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


const initEvent = {
    name: '',
    email: '',
    subject: '',
    msg: ''
}

export default function Album() {
  const classes = useStyles();

  const [contactForm, setContactForm] = useState(initEvent);

  const {name, email, subject, msg} = contactForm;


  const handleInputChange = ({target}) => {
    setContactForm({
        ...contactForm,
        [target.name]: target.value
    });
}


const handleSubmitForm = (e) => {
  e.preventDefault();



  emailContact(e.target);


  


  setContactForm(initEvent);
}

  return (
    <div className={classes.backColor}>
      <Container className={classes.cardGrid} maxWidth="lg" id="contact">
        <Title title="Contacto" />

        <Paper elevation={3} className={classes.paperStyle}>
        <Grid container spacing={10} justify="space-evenly">
          {/*Section 1*/}
          <Fade left cascade>
            <Grid item xs={12} sm={12} md={6} xl={6} className={classes.espacio}>
           
                <List component="div">
                  <ListItem className={classes.margen}>
                    <ListItemAvatar >
                      <Avatar  className={classes.tamano}>
                      <CallIcon className={classes.iconAnimation}/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText className={classes.textList} primary="+56 9 4550 4575" />
                  </ListItem>
                  <ListItem className={classes.margen}>
                     <ListItemAvatar >
                      <Avatar  className={classes.tamano}>
                      <RoomIcon className={classes.iconAnimation}/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText className={classes.textList} primary="Bernardo Ohiggins 234" />
                  </ListItem>
                  <ListItem>
                     <ListItemAvatar>
                      <Avatar className={classes.tamano}>
                      <MailIcon className={classes.iconAnimation}/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText className={classes.textList} primary="cristiansepulvedamendez@gmail.com" />
                  </ListItem>
                </List>
           
            </Grid>
          </Fade>
          {/*Section 2*/}
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <Fade right cascade>
              <div className={classes.paper}>
                <form
                  className={classes.form}
                  // name="contact"
                  // data-netlify="true"
                  onSubmit={handleSubmitForm}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <InputField
                        label="Nombre"
                        required
                        fullWidth
                        variant="outlined"
                        id="name"
                        name="name"
                        value={name || ''}
                        onChange={handleInputChange}
                      />
                    </Grid>
                 
                    <Grid item xs={12}>
                      <InputField
                        label="Correo electronico"
                        autoComplete="email"
                        required
                        fullWidth
                        variant="outlined"
                        id="email"
                        name="email"
                        value={email || ''}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        variant="outlined"
                        required
                        fullWidth
                        name="subject"
                        label="Asunto"
                        type="text"
                        value={subject || ''}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        variant="outlined"
                        required
                        fullWidth
                        name="msg"
                        label="Mensaje"
                        type="text"
                        rows="2"
                        multiline
                        value={msg || ''}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </Fade>
          </Grid>
        </Grid>
        </Paper>
      </Container>
    </div>
  );
}
