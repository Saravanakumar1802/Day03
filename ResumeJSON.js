
// 2.) create your own resume data in JSON format


let myresume= {
   
    objective:["To obtain a fresher position as a software engineer in a fast-paced organized where technical skills and creative thinking are useful. A highly motivated software   engineer , seeking to get a position in a reputed company  where I can use my skills and knowledge to learn new things and grow as a software developer"
  
    ],
   QUALIFICATION:{
        
       Department     : "B.E computer science Engineering",

       INSTITUTION    :"Mookambigai College of Engineering, Keeranur, Pudukkottai.",

       UNIVERSITY     :" Anna University Chennai",

       YEAROFPASSING  :"2021",

       CGPA           :   "7.2 "   ,

    },

    HigherSecondaryCertificate:{

        INSTITUTION     : " Government Model Higher Secondary school , Pudukkottai",

        BOARD           : "State board ",

        YEAROFPASSING   :"2017",

        PERCENTAGE      : "70.8%",

    },

    
    SecondarySchoolLeavingCertificate:{

        INSTITUTION     : " Government Model Higher Secondary school , Pudukkottai",

        BOARD           : "State board ",

        YEAROFPASSING   :"2015",

        PERCENTAGE      : "70.02%",

},

    TECHNICALSKILLS:[

        "=> JavaScript",
        "=> Python",
        "=> HTML",
        "=> Css",
        "=> c and c++",

    ],                         
    
    CERTIFICATION:[
          "=> Completed  Diploma in, “Web Animation In CSE Softview” (2012)",
    ],

    PROJECTS:["=> Main Project-Augmented Based Menu Cards for Restaurants.",],

    ExtraCurricularActivities:[

       "=> Participated  District  Level Competition  In Silambam (2014)",

       "=> Playing  Football , Volleyball  , Settle Cock and   Carrom",
    ],
   
    HOBBIES:[ "=> Playing  Game In Playstation (PS4)",],
   
    PERSONALDETAILS:{
        name                  : "S.Saravanakumar",

        Age                   : "22",

        Email                 : "saravana1802kumar@gmail.com",
         
        FathersName           :	"Mr. G.SANMUGAM",

        DOB                   : "18.02.2000",

        Gender                : "MALE",

        Religion	          :	"HINDU",

        MaritalStatus	      :"SINGLE",

        LanguageKnown	      :	"TAMIL, ENGLISH",

        PermanentAddress	  :	"2873, Kannan nagar , Machuvadi,Pudukkottai , 622001.",

    }                                                                                                                                  
}



let JSONdata=JSON.stringify(myresume);
console.log(JSONdata);

let objdata=JSON.parse(JSONdata);
console.log(objdata);