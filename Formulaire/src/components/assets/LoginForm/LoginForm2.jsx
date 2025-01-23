
import React, { useState } from 'react';
import './LoginForm.css'
import { FaLock,FaUser ,FaMobileAlt  } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";




  // prénom
  // nom de famille
  // âge
  // e-mail
  // numéro de téléphone
  // mot de passe
  // Répéter le mot de passe


export const LoginForm2 = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] =useState('')
  const [ageprofil, setAgeprofil]= useState('')
  const [emailprofil, setEmailprofil]= useState('')
  const [numberprofil, setNumberprofil]= useState('')
  const [password, setPassword] = useState('');
  const[confirmpassword, setConfirmpassword]=useState('')
  const[avantvalidation ,setAvantvalidation]= useState(true)
  const [valData, setValData]= useState([])
  // const[  testeconst,       setTestcons ]   = useState("VAL")
  //        nom de const  | appel pour changer | valeur de départ
     
      // Verification des condition des input pour qu'il sois valider
      const validateForm = () => {
        const isUsernameValid = username.trim().length >= 3 && username.trim().length <= 15;
        const isFirstnameValid = firstname.trim().length >= 3 && firstname.trim().length <= 15;
          const isAgeValid = !isNaN(ageprofil) && ageprofil > 8 && ageprofil < 101;  
          const isEmailValid = emailprofil.trim().length > 3 && emailprofil.trim().length <= 20 && /@/.test(emailprofil);
          const isNumberValid = !isNaN(numberprofil) && numberprofil.trim().length >= 6 && numberprofil.trim().length <= 10;  
          const isPasswordValid = password.trim().length >= 6;
          const isConfirmPasswordValid = password === confirmpassword; 
    
        
        return isUsernameValid &&isFirstnameValid&&isAgeValid&& isEmailValid&&isNumberValid  && isPasswordValid && isConfirmPasswordValid ;
      };

      const handleSubmit = (event) => {
        event.preventDefault();
    // bloque l'event submit si il y a une erreur
    setAvantvalidation(false)
        if (!validateForm()) {
          alert("Veuillez remplir correctement tous les champs !");
          return; 
        }
    
        // Si tout est valide rajoute les valeur
        setValData([{ username, firstname, ageprofil, emailprofil, numberprofil, password, confirmpassword }]);
        console.log("Formulaire soumis avec succès", valData);
      
    // Remet les champs vide apres validation.
    setUsername('')
    setFirstname('')
    setAgeprofil('')
    setEmailprofil('')
    setNumberprofil('')
    setPassword('')
    setConfirmpassword('')

    
  };



// --------------------------------------------Partie HTML----------------------------------------
  return (
    <div className='wrapper'>
<form action="" onSubmit={handleSubmit}>
  <h1>Register</h1>
  {/* -----------------1--------------- */}
  {/*  avec partie ternaire pour limiter le nombre de caractére */}

  <div className={`input-box ${avantvalidation  ? false: (username.trim().length >= 3 && username.trim().length <= 15 ? 'valide':'invalide')}`}>
    <input type="text"  placeholder='Prénom'    value={username} onChange={(event) =>setUsername(event.target.value)} />
    <FaUser className='icon' />
  </div>
  {/* -----------------2--------------- */}
  <div className={`input-box ${avantvalidation ? false:(firstname.length >3|| firstname.length> 10 ? 'valide' : 'invalide')}`}>
    <input type="text" placeholder='Nom de famille'   value={firstname} onChange={(event) => setFirstname(event.target.value)}/>
    <FaUser className='icon'/>  
  </div>
{/* -----------------3--------------- */}
<div className={`input-box ${ avantvalidation? false:(ageprofil.length <4 && ageprofil.length > 0 ? 'valide' : 'invalide')}`}>
    <input type="number" placeholder='Age'   value={ageprofil} onChange={(event) => setAgeprofil(event.target.value)}/>
    <FaUser className='icon'/>  
  </div>
  {/* -----------------4--------------- */}

  <div className={`input-box ${avantvalidation? false:(emailprofil.length > 3 && emailprofil.length <= 20 && /@/.test(emailprofil) ? 'valide' : 'invalide')}`}>
    <input type="email" placeholder='Email'   value={emailprofil} onChange={(event) => setEmailprofil(event.target.value)}/>
    <MdAlternateEmail className='icon'/>  
  </div>
  {/* -----------------5--------------- */}
  <div className={`input-box ${avantvalidation? false:(numberprofil.length >3|| numberprofil.length> 10 ? 'valide' : 'invalide')}`}>
    <input type="number" placeholder='Numero de téléphone '  value={numberprofil} onChange={(event) => setNumberprofil(event.target.value)}/>
    <FaMobileAlt className='icon'/>  
  </div>



{/* -----------------6--------------- */}
{/*  avec partie ternaire pour valider si Mot de passe et confirme si il sont identique*/}


<div className={`input-box ${avantvalidation? false:(password.length === password.length ? 'valide' : 'invalide')}`}>
    <input type="password" placeholder='Mot de passe'   value={password} onChange={(event) => event.target.value.length <= 8
    ? setPassword(event.target.value)
    : null
}/>
    <FaLock className='icon'/>  
  </div>


{/* -----------------7--------------- */}


<div className={`input-box ${avantvalidation? false:(confirmpassword.length === password.length ? 'valide' : 'invalide')}`}>
    <input type="password" placeholder='Confirmer mot de passe'   value={confirmpassword} onChange={(event) => event.target.value.length <= 8
    ? setConfirmpassword(event.target.value)===setPassword(value)
    : null
}/>
    <FaLock className='icon'/>  
  </div>


  <div className="remember-forgot">
    <label ><input type="checkbox" />Se souvenir </label>
    {/* <a href="#">Mot de passe oublier ?</a> */}






  </div>





  <button type="submit">Connection</button><br />
  <div className="register-link"></div><br />
  <p>Vous avez un compte ?<a href="#">Login</a></p>




</form>
<div className="data-return"><br />
<h2>Donnée d'utilisateurs:</h2>
<ul>





  {valData.map((data,index)=> (
    <li key={index}>
     <li> <strong>Prénom :</strong> {data.username}</li>
    <li>  <strong>Nom de famille :</strong> {data.firstname}</li>
     <li> <strong>Age :</strong> {data.ageprofil}</li>
     <li> <strong>Email :</strong> {data.emailprofil}</li>
     <li><strong>Numero de telephone :</strong> {data.numberprofil}</li>
    <li> <strong>Mot de passe :</strong> {data.password}</li>
   <li> <strong>Confirmation mot de passe:</strong> {data.confirmpassword}</li>
    </li>
  ))}
</ul>


</div>

    </div>
    
  )
}

