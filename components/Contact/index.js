import React, { useState } from 'react';
import Title from '../widgets/Title';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
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


import useStyles,{InputField} from './styles';
import { emailContact } from '../../helpers/emailContact';
import {contactData} from '../../data'
import { useMediaQuery, useTheme } from '@material-ui/core';




const initEvent = {
    name: '',
    email: '',
    subject: '',
    msg: ''
}

export default function Album() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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

        <Paper elevation={3} className={ isMobile ? classes.paperStyleMobile : classes.paperStyle}>
        <Grid container spacing={{xs:0,md:10}} justify="space-evenly">
          {/*Section 1*/}
          <Fade left cascade>
            <Grid item xs={12} sm={12} md={6} xl={6} className={isMobile ? classes.espacioMobile : classes.espacio}>
           
                  {contactData.map(contact => 
                  
                    <List component="div" key={contact.id}>
                        <ListItem className={ isMobile ? classes.margenMobile : classes.margen}>
                        <ListItemAvatar >
                          <Avatar  className={ isMobile ? classes.tamanoMobile : classes.tamano}>
                          <CallIcon style={{ fontSize: isMobile ? 20 : undefined }} className={classes.iconAnimation}/>
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={ isMobile ? classes.textListMobile : classes.textList} primary={contact.phone} />
                      </ListItem>
                      <ListItem className={ isMobile ? classes.margenMobile : classes.margen}>
                        <ListItemAvatar >
                          <Avatar  className={ isMobile ? classes.tamanoMobile : classes.tamano}>
                          <RoomIcon style={{ fontSize: isMobile ? 20 : undefined }} className={classes.iconAnimation}/>
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={ isMobile ? classes.textListMobile : classes.textList} primary={contact.address} />
                      </ListItem>
                      <ListItem className={ isMobile ? classes.margenMobile : undefined}>
                        <ListItemAvatar>
                          <Avatar className={ isMobile ? classes.tamanoMobile : classes.tamano}>
                          <MailIcon style={{ fontSize: isMobile ? 20 : undefined }} className={classes.iconAnimation}/>
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={ isMobile ? classes.textListMobile : classes.textList} primary={contact.email} />
                      </ListItem>
                    </List>
                  )}
            </Grid>
          </Fade>
          {/*Section 2*/}
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <Fade right cascade>
              <div className={classes.paper}>
                <form
                  className={classes.form}
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
