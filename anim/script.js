
// function resume(){
//     const doc= new jsPDF();
//     // perosnal info
//     doc.setFont("times","bold");
//     doc.text(document.getElementById("name").value,20,20)
//     doc.setFont("times","normal")
//     doc.setFontSize(12)
//     doc.text(document.getElementById("address").value,20,42)
//     doc.setFont("times","bold");
//     doc.text(document.getElementById("email").value,20,30)
//     doc.text(document.getElementById("phone").value,20,36)
//     doc.text(document.getElementById("linkedIn").value,20,48)

//     // summary
//     doc.setFont("times","bold");
//     doc.setFontSize(16)
//     doc.text("Summary",20,60)
//     doc.setFont("times","normal")
//     doc.setFontSize(12)
//     doc.text(document.getElementById("summary").value,20,68)

//     //work experience
//     doc.setFont("times","bold");
//     doc.setFontSize(16)
//     doc.text("work Experience",20,80)
//     doc.setFont("times","normal")
//     doc.setFontSize(12)
//     doc.text(document.getElementById("experience").value,20,88)
//     doc.text(document.getElementById("experience_dates").value,20,96)
//     doc.text(document.getElementById("location").value,20,104)
//     doc.text(document.getElementById("description").value,20,112)
    
//     //education
//     doc.setFont("times","bold");
//     doc.setFontSize(16)
//     doc.text("Education",20,122)
//     doc.setFont("times","normal")
//     doc.setFontSize(12)
//     doc.text(document.getElementById("education").value,20,130)
//     doc.text(document.getElementById("edu_date").value,20,138)

//     //Extra-curricular Experience
//     doc.setFont("times","bold");
//     doc.setFontSize(16)
//     doc.text("Extra-curricular Experience",20,148)
//     doc.setFont("times","normal")
//     doc.setFontSize(12)
//     doc.text(document.getElementById("hobby").value,20,156)
//     // any other
//     doc.setFont("times","bold");
//     doc.setFontSize(16)
//     doc.text("Any other certificates, Awards",20,166)
//     doc.setFont("times","normal")
//     doc.setFontSize(12)
//     doc.text(document.getElementById("other").value,20,174)





//     doc.save("output.pdf")
//     console.log(doc)
// }



const addBtn = document.getElementById('add-education');
const delBtn = document.getElementById('remove-education');

function handleAddEd(){
    const edList = document.querySelector('#edList');
    console.log(edList)
   
    const input=document.createElement('input')
    input.setAttribute("type","text")
    input.setAttribute("class","form-control")
    input.setAttribute("id","experience")
    input.setAttribute("name","experience")
    

    console.log(input);
    edList.appendChild(input);
}

addBtn.addEventListener('click',handleAddEd);



function handleDelEd(){

    const rev=document.getElementById('edList')
    let i= rev.childElementCount-1
    console.log(i)
    rev.removeChild(rev.childNodes[i])
}
delBtn.addEventListener('click',handleDelEd);



const addExpBtn=document.getElementById('add-exp')
const delExpBtn=document.getElementById('remove-exp')

function handleAddExp(){
    // const inputExp=document.getElementById('experience')
    const list=document.getElementById('expList')
    // const input=inputExp.cloneNode(false)
    const input=document.createElement('input')
    input.setAttribute("type","text")
    input.setAttribute("class","form-control")
    input.setAttribute("id","experience")
    input.setAttribute("name","experience_1")
    console.log(input)
    

    list.appendChild(input)
}

function handleRevExp(){
    const rev=document.getElementById('expList')
    let i = rev.childElementCount-1
    rev.removeChild(rev.childNodes[i])
}

addExpBtn.addEventListener('click',handleAddExp)
delExpBtn.addEventListener('click',handleRevExp)


document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('myform').addEventListener('submit',handleForm)
})

// const generateBtn= document.getElementById('btn-generate')

function handleForm(e){
    e.preventDefault()
    let myForm=e.target
    console.log(myForm)
    let formData = new FormData(myForm)
    console.log(formData)


    function convertFD2JSON(formData) {
        let obj = {};
        for (let key of formData.keys()) {
          obj[key] = formData.get(key);
          console.log(formData.get(key))
        }
        // return JSON.stringify(obj);
        return obj
      }
        
    let json= convertFD2JSON(formData)
    
    console.log(json)
    // console.log(json.keys())
    // creating docx
    const doc = new docx.Document();
    // for()
    doc.addSection({
        properties: {},
        children: [
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["name"],
                        bold: true,   
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text:"",
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["email"],
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["phone"],
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["address"],
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["linkedIn"],
                      
                    }),    
                ],
            }),
            //summary

            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text:"",
                    }),    
                ],
            }),

            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Summary",
                        bold: true,   
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text:"",
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["summary"],
                    }),    
                ],
            }),

            //Work experience

            new docx.Paragraph({
                children: [
                    new docx.TextRun({    //sapce
                        text: "",
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Wrok Experience",
                        bold: true,   
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({ //space
                        text:"",
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["experience"],
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["experience_dates"],
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["location"],
                    }),    
                ],
            }),

            // Education
            
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "",
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Education",
                        bold: true,
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({  //spave
                        text:"",
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["education"],
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["edu_date"],
                    }),    
                ],
            }),

            // Extra-curricular 
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text:"",
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Extra-curricular Experience",
                        bold: true,   
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({          //space
                        text:"",
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["hobby"],
                    }),    
                ],
            }),
            // Awards
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text:"",
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Any other certificates,Awards",
                        bold: true,   
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text:"",         //space
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: json["other"],
                    }),    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "experience_1",
                        bold: true,   
                    }),    
                ],
            }),
        ],
    });

   
    docx.Packer.toBlob(doc).then(blob => {
        console.log(blob);
        saveAs(blob, "example.docx");
        console.log("Document created successfully");
    });

}

// generateBtn.addEventListener('click',handleForm)
