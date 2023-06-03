import{auth, signInWithEmailAndPassword,get,ref,db,child} from './firebase.js'



$(document).ready(()=>{


    $('button').on('click',(e)=>{
        e.preventDefault();

        const email = $('#email').val()
        const password = $('#password').val()


       let  emailREGEX = /[a-z]+@[a-z]+\.[a-z]+/
       let  passwordREGEX = /[a-zA-Z0-9]{6,20}/
       if(!emailREGEX.test(email)){
          $('#email').siblings('p').css('display', 'block')
          console.log('email should be in correct format!')
          
       }else if(!passwordREGEX.test(password)){
            $('#password').siblings('p').css('display', 'block')
            console.log('password should be in correct format!') 

       }else{

     
         signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const userKey = user.uid
          // save into database or read the database we used (get)
          const dbRef = ref(db);

          get(child(dbRef, `Users/${userKey}`))
            .then((snapshot) => {

                if (snapshot.exists()) {
                      
                    let Name = snapshot.val().userName
                    let Bd = snapshot.val().birthDay
                    console.log(Name)
                    
                      localStorage.setItem('name', Name)
                      localStorage.setItem('birthday', Bd)

                     window.location.href='birthDay.html'

                } else {
                    console.log("No data available");
                }
            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        })




       }
    })
})