const hiddenMenu = document.getElementById("hiddenmenu");
const allSections = document.querySelectorAll("section");



function hamBurger(){
   hiddenMenu.classList.toggle("hidden");
}


const observer = new IntersectionObserver((entries) =>{
   entries.forEach((entry) =>{
      if (entry.isIntersecting){
      entry.target.classList.remove("opacity-0", "translate-x-8", "scale-90", "translate-y-7");
      entry.target.classList.add("opacity-100", "translate-x-0", "scale-100", "translate-y-0");
   }
   })
   
}, {threshold: 0.15})

const section = document.querySelectorAll(".reveal");
section.forEach(sec => observer.observe(sec));



const contactDetails = {
   name: "",
   email: "",
   message: ""
}



function submitMessage() {

   const contactEmail = document.getElementById("contactemail").value.trim();
   const contactName = document.getElementById("contactname").value.trim();
   const contactMessage = document.getElementById("contactmessage").value.trim();
   
   contactDetails.name = contactName;
   contactDetails.email = contactEmail;
   contactDetails.message = contactMessage;

   if(contactDetails.name === "" || contactDetails.email === "" || contactDetails.message === ""){
      alert("All field are required")
      return;
   } else{
       alert("Your message has been sent")
       console.log(contactDetails);
   }

   document.getElementById("contactemail").value = ""
   document.getElementById("contactname").value = ""
   document.getElementById("contactmessage").value = ""
   
  
}