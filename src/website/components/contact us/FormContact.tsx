import React from 'react';
import {Input , Stack , Button, Textarea , Box} from '@chakra-ui/react';
import { Formik } from 'formik';
import '../../css/index.css';
import * as yup from 'yup';

interface Props{

}

const FormContact: React.FC<Props> = () => {
    const minValue = 8;
    const EmailRequiredErrorMsg = 'Se necesita escribir e-mail';
    const ValidationSchema = yup.object().shape({
      UserName: yup.string().min(minValue, `minimo para escribir aqui de letras o caracteras ${minValue}`),
      Email: yup.string().email().required(EmailRequiredErrorMsg),
      Telephone: yup.number().positive(),
      Mobile: yup.number().positive(),
      Message: yup.string(),
    });
    return (
        <Box>
        <Formik
          onSubmit={()=>console.log('submitted')}
          initialValues={{ 
            UserName: '',
            Email: '',
            Telephone: '',
            Mobile: '',
            Message: '',
            Nacionalidad: '',
          }}
          validationSchema={ValidationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
            <Stack
            spacing={0}
            justifyContent='space-evenly'
            display={'flex'}
            height='666px'
            >
                    <Input 
                    placeholder='Nombre y apellido'
                    name='UserName'
                    width='400px'
                    border='2.5px solid'
                    borderColor={'black'}
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.UserName}
                    aria-label='UserName'
                    />
                    <Input 
                    width='400px'
                    aria-label='Nacionalidad'
                    name='Nacionalidad'
                    placeholder='Nacionalidad'
                    border='2.5px solid'
                    borderColor={'black'}
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Nacionalidad}
                    />
                    <Input 
                    width='400px'
                    aria-label='Telephone'
                    name='Telephone'
                    placeholder='Numero de Tel.'
                    border='2.5px solid'
                    borderColor={'black'}
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Telephone}
                    />
                    <Input
                    name='Mobile'
                    width='400px'
                    placeholder='Celular'
                    border='2.5px solid'
                    borderColor={'black'}
                    type='text'
                    aria-label='Mobile'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Mobile}
                    />
                    <Input 
                    placeholder='Correo electronico'
                    width='400px'
                    name='Email'
                    border='2.5px solid'
                    borderColor={'black'}
                    type='email'
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Email}
                    aria-label="Email"
                    />
                    <Box
                    p='0px'
                    m='0px'
                    fontSize='20px'
                    color='red'
                    >
              {errors.Email && touched.Email && errors.Email}
                    </Box>
                    <Textarea 
                    resize={'none'}
                    height='222px'
                    placeholder='Mensaje'
                    border='2.5px solid'
                    aria-label='Message'
                    borderColor={'black'}
                    name='Message'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Message}
                    />
                    <Button 
                    justifySelf={'center'} 
                    alignSelf={'center'} 
                    color='dodgerblue' 
                    variant="outlined" 
                    width='100px' 
                    border='2.5px solid'
                    borderColor={'black'}
                    type='submit'
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                    className='focus:border-0 transition duration-500 outline-none focus:outline-none'
                    >
                    Enviar
                    </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    );
}
export default FormContact;