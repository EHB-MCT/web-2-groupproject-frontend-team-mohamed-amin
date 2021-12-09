window.onload = () =>{

    document.getElementById("addChallengeFormDiv").style.display = "none";
    document.getElementById("editChallengeFormDiv").style.display = "none";


    

    fetch("https://groep-web2-backend.herokuapp.com/challenges")
   .then(response => response.json())
   .then(data => printChallengesHtml(data))

  
    
    


   function printChallengesHtml(challenges) 
   {
    document.getElementById("challengeList").innerHTML ="";
       challenges.forEach(challenge =>{
           console.log(challenge)

           document.getElementById("challengeList").innerHTML +=`
           <div id="${challenge._id}" class="card">
            <div class="card-body">
             <i id=${challenge._id}" style="float: right; font-size:40px " class="fas fa-trash-alt deleteBtn"></i>
             <h2>${challenge.name}</h2>
             <h3>${challenge.points}</h3>
             <h4>${challenge.course}</h4>
             <i id="${challenge._id}" style="float: right; font-size:40px " class="fas fa-pencil-alt editBtn"></i>
             <h4>${challenge.session}</h4>
            </div>
           </div>
           
           `;
       })

   }

    let addFormBool = true;

    document.getElementById("addChallenge").addEventListener("click", function(){
        if(addFormBool)
        {
            document.getElementById("addChallengeFormDiv").style.display = "block";
            addFormBool = false;

        }else{
            document.getElementById("addChallengeFormDiv").style.display = "none";
            addFormBool = true;
        }
        

    });


    function edditBtn()
    {
     let editBtns = document.getElementsByClassName("editBtn");

     for(let editBtn of editBtns)
     {
        editBtn.onclick = () =>{

            document.getElementById("editChallengeFormDiv").style.display = "block";
           
        }
     }
    }
    edditBtn();

   function deleteBtn(){

    let deleteBtns = document.getElementsByClassName("deleteBtn");

     for(let deleteBtn of deleteBtns)
    {
        deleteBtn.onclick = () =>{

         document.getElementById(deleteBtn.id).remove();
           
        }
    }  
   }
   deleteBtn();
   


    document.getElementById("addChallengeForm").addEventListener('submit', e => {
        e.preventDefault();
       
        let name = document.getElementById("challengeNameInput").value;
        let points = document.getElementById("challengePointsInput").value;
        let course = document.getElementById("challengeCoursInput").value;
        let session = document.getElementById("challengeSessionInput").value;
    

        fetch('https://groep-web2-backend.herokuapp.com/challenges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, points, course, session
            })
        }).then(data => {
            return data.json()
        })
        
        edditBtn();
        deleteBtn();

    });

}