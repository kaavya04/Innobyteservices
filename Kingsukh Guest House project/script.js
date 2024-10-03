function welcome() {
    window.open("https://wa.me/ 9007062180 ");
}


function map(){
    window.open("https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5863193,86.8597854,18z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D")
}

function call(){

let myboole=confirm("hi subscriber"); 
console.log(myboole);
}


function call(){
   

     var chechbox=document.getElementById('Allow this site to open the tel link?').ariaChecked;

        if(chechbox){
        alert=confirm("choose an application to open the tel link");
        }
       else{
        alert("checkbox is not checked")
       }
   }
   

   function confirmalert(){
    let userselection=confirm("Allow this site to open the tel link?                                                           you'll need to  choose an application");//yes/no we use confrim//
    
    if (userselection == true){
        alert("you just select the file");
      }
    else{
        alert("please select the file");
    }    
    }