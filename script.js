window.onload = () =>{

    document.getElementById("addChallengeFormDiv").style.display = "none";
    document.getElementById("editChallengeFormDiv").style.display = "none";

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
        let cours = document.getElementById("challengeCoursInput").value;
        let session = document.getElementById("challengeSessionInput").value;
        let id =  2;
        id++;

        document.getElementById("challengeList").innerHTML += `

        <div id="${id}" class="card">
        <div class="card-body">
          <i id="${id}" style="float: right; font-size:40px " class="fas fa-trash-alt deleteBtn"></i>
          <h2>${name}</h2>
          <h3>${points}</h3>
          <h4>course: ${cours}</h4>
          <i id="${id}" style="float: right; font-size:40px " class="fas fa-pencil-alt editBtn"></i>
          <h4>${session}</h4>
        </div>
      </div>
        
        `;

        edditBtn();
        deleteBtn();

    });

}