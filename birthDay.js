import{auth,signOut } from './firebase.js'

$(document).ready(()=>{

    let name = localStorage.getItem('name')
    let userBirthday = localStorage.getItem('birthday') 
    let parentdiv= document.getElementById('parent')

   
    
    if(name && userBirthday){

        var bday = new Date(userBirthday)

        var today = new Date();
// birthday calculation
        //Set current year 
            bday.setFullYear(today.getFullYear());
            bday.setDate(bday.getDate()+1)
            // If the birthday has already passed this year, set the year to next year
            if (today > bday ) {
                bday.setFullYear(today.getFullYear() + 1);
            }
            //Calculate difference between days
            let dayLeft = Math.floor((bday  - today) / (1000*60*60*24))
            
//end calculation


//function to get data 
            const url = 'https://type.fit/api/quotes'
            const getQuate = async(url)=>{
                try{
                    const response = await fetch(url, {catch :"no-catch"});
                    if (response.ok){
                        const jsonResponse = await response.json();
                        return jsonResponse
                    }
                }
                catch(error){
                    console.log(error)
                }
            }
            function displayQuotes(allQoutes){
                const length = allQoutes.length;
                const randomNum = Math.floor(Math.random()* length);
                const randomQuote= allQoutes[randomNum]
                 return randomQuote;

            }

            //insert to the page
            if(today.getDate() == bday.getDate() && today.getMonth() == bday.getMonth() ){
                getQuate (url) 
                .then((response)=>{
                    displayQuotes(response);
                    let QouteText = displayQuotes(response)['text'];
                    let qouteAuthor = displayQuotes(response)['author'];
                    if(qouteAuthor== null){
                        qouteAuthor ='Unknown'
                    }
                    parentdiv.innerHTML =`
                    <div class="message">
                        <h2>Happy Birth Day, ${name}</h2>
                    </div>
                    <div class="Qoute">
                        <p>${QouteText}</p>
                        <em>${qouteAuthor}</em>
                   </div>
                   `
                });
            }else{
                parentdiv.innerHTML =`
                <div class="message">
                    <h2>${dayLeft} DAYS LEFT</h2>
                    <h3>UNTIL YOUR BIRTHDAY!</h3>
                </div>
 
               `
            }

            
            


    }



        //log out

    $('#logOut-btn').on('click',(e)=>{

        signOut(auth).then(() => {
            // Sign-out successful.
            window.location.href = './logIn.html'
          }).catch((error) => {
            // An error happened.
          });
          

    })

})