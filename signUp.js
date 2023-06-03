import{auth,createUserWithEmailAndPassword,db,set,ref} from './firebase.js'

$(document).ready(()=>{




    $('#signUp-btn').on('click',(e)=>{
        e.preventDefault();



        const  Email = $($('#email')).val()
        const Password = $($('#password')).val()
        const Birthday = $($('#birthDay')).val()
        const UserName = $($('#name')).val()
        //validation
        let  emailREGEX = /[a-z]+@[a-z]+\.[a-z]+/
        let  passwordREGEX = /[a-zA-Z0-9]{6,20}/

       if(!emailREGEX.test(Email)){
          $('#email').siblings('p').css('display', 'block')
          console.log('email should be in correct format!')

        }else if(!passwordREGEX.test( Password)){
            $('#password').siblings('p').css('display', 'block')
            console.log('password should be in correct format!') 
        } else{

            //this is object of input data
            const userData = {email: Email, password: Password, 
                userName: UserName, birthDay: Birthday
                }

            createUserWithEmailAndPassword(auth, Email, Password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const userKey = user.uid
                    // save into database or we can say write the info into database we used (set)
                    
                    set(ref(db, 'Users/' + userKey), userData)
                    .then(()=>{
                        localStorage.setItem('name',  UserName )
                        localStorage.setItem('birthday', Birthday)
                        window.location.href = "./birthDay.html"
                    })

                })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage)
                    });


           



               
                
            }
        

    } )

})



