
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

 let n=0
function handleAddEd(){

    n++

    const colg=['college_1','college_2','college_3','college_4','college_5'
    ,'college_6','college_7','college_8','college_9']

    const ed=['education_1','education_2','education_3','education_4','education_5',
    'education_6','education_7','education_8','education_9']

    const loc=['eduLocation_1','eduLocation_2','eduLocation_3','eduLocation_4','eduLocation_5',
    'eduLocation_6','eduLocation_7','eduLocation_8','eduLocation_9']

    const date=['eduStartDate_1','eduStartDate_2','eduStartDate_3','eduStartDate_4',
    'eduStartDate_5','eduStartDate_6','eduStartDate_7','eduStartDate_8','eduStartDate_9']

    const endDate=['eduEndDate_1','eduEndDate_2','eduEndDate_3','eduEndDate_4','eduEndDate_5',
    'eduEndDate_6','eduEndDate_7','eduEndDate_8','eduEndDate_9']


    const edList = document.querySelector('#edList');
    console.log(edList)
    const input=document.createElement('input')
    const brInput=document.createElement('br')
    input.setAttribute("type","text")
    input.setAttribute("class","form-control")
    input.setAttribute("id","education")
    input.setAttribute("name",ed[n])
     console.log(input);
    edList.appendChild(brInput)
    edList.appendChild(input);

    const edCol=document.getElementById('col')
    const col=document.createElement('input')
    const brcol=document.createElement('br')
    col.setAttribute('type','text')
    col.setAttribute('class','form-control')
    col.setAttribute('id','college')
    col.setAttribute('name',colg[n])
    edCol.appendChild(brcol)
    edCol.appendChild(col)

    const edloc=document.getElementById('edloc')
    const dloc=document.createElement('input')
    const brloc=document.createElement('br')
    dloc.setAttribute('type','text')
    dloc.setAttribute('class','form-control')
    dloc.setAttribute('id','eduLocation')
    dloc.setAttribute('name',loc[i])
    edloc.appendChild(brloc)
    edloc.appendChild(dloc)

    const edDate=document.getElementById('eduDate')
    const eddate=document.createElement('input')
    const brdate=document.createElement('br')
    eddate.setAttribute('type','date')
    eddate.setAttribute('class','form-control')
    eddate.setAttribute('id','eduStartDate')
    eddate.setAttribute('name',date[n])
    edDate.appendChild(brdate)
    edDate.appendChild(eddate)
    

    const end_date=document.getElementById('endEnd')
    const day=document.createElement('input')
    const bd=document.createElement('br')
    day.setAttribute('type','date')
    day.setAttribute('class','form-control')
    day.setAttribute('id','eduEndDate')
    day.setAttribute('name',endDate[n])
    end_date.appendChild(bd)
    end_date.appendChild(day)
}

addBtn.addEventListener('click',handleAddEd);



function handleDelEd(){

    const rev=document.getElementById('edList')
    let i= rev.childElementCount-1
    console.log(i)
    rev.removeChild(rev.childNodes[i])

    const edloc=document.getElementById('edloc')
    let loc= edloc.childElementCount-1
    edloc.removeChild(edloc.childNodes[loc])

    const eduDate=document.getElementById('eduDate')
    let date = eduDate.childElementCount-1
    eduDate.removeChild(eduDate.childNodes[date])

    const endEnd=document.getElementById('endEnd')
    let end= endEnd.childElementCount-1
    endEnd.removeChild(endEnd.childNodes[end])

    const col=document.getElementById('col')
    let c= col.childElementCount-1
    col.removeChild(col.childNodes[c])
}
delBtn.addEventListener('click',handleDelEd);



const addExpBtn=document.getElementById('add-exp')
const delExpBtn=document.getElementById('remove-exp')
let i=0
function handleAddExp(){

    i++
    const exp=["exp_1","exp_2","exp_3","exp_4",
                "exp_5","exp_6","exp_7","exp_8","exp_9"]
    const expLoc=["exp_loc_1","exp_loc_2","exp_loc_3","exp_loc_4","exp_loc_5","exp_loc_6",
    "exp_loc_7","exp_loc_8","exp_loc_9"]

    const expStartDate=["experience_dates_1","experience_dates_2","experience_dates_3","experience_dates_4",
    "experience_dates_5","experience_dates_6","experience_dates_7","experience_dates_8","experience_dates_9"]

    const expEndDate=["edu_date_1","edu_date_2","edu_date_3","edu_date_4",
    "edu_date_5","edu_date6","edu_date_7","edu_date_8","edu_date_9"]

    const Des=["description_1","description_2","description_3","description_4","description_5",
    "description_6","description_7","description_9"]

    console.log(exp.length) 
    

        // const inputExp=document.getElementById('experience')
        const list=document.getElementById('expList')
        // const input=inputExp.cloneNode(false)
        const input=document.createElement('input')
        const brInput=document.createElement('br')
        input.setAttribute("type","text")
        input.setAttribute("class","form-control")
        input.setAttribute("id","experience")
        input.setAttribute("name",exp[i])
        list.appendChild(brInput)
        list.appendChild(input)
        console.log(list)

        const exLoc=document.getElementById('expLoc')
        const expLocation=document.createElement("input")
        const brLocation=document.createElement('br')
        expLocation.setAttribute("type","text")
        expLocation.setAttribute("class","form-control")
        expLocation.setAttribute("id","location")
        expLocation.setAttribute("name",expLoc[i])
        exLoc.appendChild(brLocation)
        exLoc.appendChild(expLocation)
        
        const expDate=document.getElementById("expDate")
        const startDate=document.createElement("input")
        const br_date=document.createElement('br')
        startDate.setAttribute("type",'date')
        startDate.setAttribute('class', 'form-control')
        startDate.setAttribute('id','experience_dates')
        startDate.setAttribute('name',expStartDate[i])
        expDate.appendChild(br_date)
        expDate.appendChild(startDate)

        const endDate=document.getElementById("endDate")
        const date=document.createElement('input')
        const brDate=document.createElement('br')
        date.setAttribute("type",'date')
        date.setAttribute('class','form-control')
        date.setAttribute('id',"expEndDate")
        date.setAttribute('name',expEndDate[i])
        endDate.appendChild(brDate)
        endDate.appendChild(date)


        const expDes=document.getElementById("expDes")
        const desc=document.createElement('textarea')
        const brDes=document.createElement('br')
        desc.setAttribute('class','form-control')
        desc.setAttribute('id','description')
        desc.setAttribute('name',Des[i])
        expDes.appendChild(brDes)
        expDes.appendChild(desc)


        

    
    
}

function handleRevExp(){
    const rev=document.getElementById('expList')
    let i = rev.childElementCount-1
    rev.removeChild(rev.childNodes[i])

    const rev_expLoc=document.getElementById('expLoc')
    let loc=rev_expLoc.childElementCount-1
    rev_expLoc.removeChild(rev_expLoc.childNodes[loc])

    const rev_expDate=document.getElementById('expDate')
    let d=rev_expDate.childElementCount-1
    rev_expDate.removeChild(rev_expDate.childNodes[d])

    const rev_endDate=document.getElementById('endDate')
    let end = rev_endDate.childElementCount-1
    rev_endDate.removeChild(rev_endDate.childNodes[end])
    
    const rev_expDes=document.getElementById('expDes')
    let des= rev_expDes.childElementCount-1
    rev_expDes.removeChild(rev_expDes.childNodes[des])

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
    // doc.addSection({
    //     properties: {},
    //     children: [
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["name"],
    //                     bold: true,   
    //                     heading: docx.HeadingLevel.HEADING_2,
    //                     alignment: docx.AlignmentType.CENTER,
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text:"",
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["email"],
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["phone"],
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["address"],
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["linkedIn"],
                      
    //                 }),    
    //             ],
    //         }),
    //         //summary

    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text:"",
    //                 }),    
    //             ],
    //         }),

    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: "Summary",
    //                     bold: true,   
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text:"",
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["summary"],
    //                 }),    
    //             ],
    //         }),

    //         //Work experience

    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({    //sapce
    //                     text: "",
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: "Wrok Experience",
    //                     bold: true,   
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({ //space
    //                     text:"",
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["experience"],
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["experience_dates"],
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["location"],
    //                 }),    
    //             ],
    //         }),

    //         // Education
            
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: "",
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: "Education",
    //                     bold: true,
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({  //spave
    //                     text:"",
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["education"],
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["edu_date"],
    //                 }),    
    //             ],
    //         }),

    //         // Extra-curricular 
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text:"",
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: "Extra-curricular Experience",
    //                     bold: true,   
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({          //space
    //                     text:"",
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["hobby"],
    //                 }),    
    //             ],
    //         }),
    //         // Awards
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text:"",
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: "Any other certificates,Awards",
    //                     bold: true,   
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text:"",         //space
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: json["other"],
    //                 }),    
    //             ],
    //         }),
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun({
    //                     text: "experience_1",
    //                     bold: true,   
    //                 }),    
    //             ],
    //         }),
    //     ],
    // });

    const Name = new docx.Paragraph({
       
        text:json['name'],
        // heading: docx.HeadingLevel.HEADING_1,
        alignment: docx.AlignmentType.CENTER,
        bold:true,
        font:"Times Now Roman",
        size:12,
        

  });

    // const address= new docx.Paragraph({
    //     text:json['address'],
    //     font:"Times Now Roman",
    // })

    const PersonalInfo=new docx.Paragraph({
        children:[
            new docx.TextRun({
                text:json['address'],
                
                // heading: docx.HeadingLevel.HEADING_1,
                
                // bold:true,
                 font:"Times Now Roman",
                }),
            new docx.TextRun({
                text:" | "+json['phone'],
                font:"Times Now Roman",
            }),
            new docx.TextRun({
                text:" | "+json['email']
            }),

            new docx.TextRun({
                text:" | "+json['linkedIn']
            })
        ]
        , alignment:docx.AlignmentType.RIGHT
        })
    
    const work = new docx.Paragraph({
        children:[
            new docx.TextRun({
                text:json["college"],
                bold:true,
                size:26,
            }),
            new docx.TextRun({
                text:json["edulocation"],
                alignment: docx.AlignmentType.RIGHT,
                bold:true,
                size:26

            })
        ]
    })
            



    doc.addSection({
        children: [
        Name,
        PersonalInfo,
        work
        ],
    });
    docx.Packer.toBlob(doc).then(blob => {
        console.log(blob);
        saveAs(blob, "example.docx");
        console.log("Document created successfully");
    });

}

// generateBtn.addEventListener('click',handleForm)
