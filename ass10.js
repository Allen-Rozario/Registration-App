var slidename=document.getElementById("name-of-the-slide");
var numberofslide=document.getElementById("number-of-slide");
var slideactiveradio=document.getElementById("active-radio");
var slideinactiveradio=document.getElementById("inactive-radio");
var slidedescription=document.getElementById("slide-description");
var slidecategory=document.getElementById("slide-details");
var Details=document.getElementById("details");
var popnotification = document.getElementById("pop-notification");
var sldno = []
function saveDetails()
{
    var _radio = null;
    if (slideactiveradio.checked === true){
        _radio = "Active";
        
    }
    else
    {
        _radio = "Inactive"
    }

    var slideitem = {
        slnm : slidename.value,
        noofsl : numberofslide.value,
        sldesc : slidedescription.value,
        slcat : slidecategory.value,
        update : _radio,
};
        sldno.push(slideitem);
        slidename.value = " ";
        numberofslide.value = " ";
        slidedescription.value = " ";
        slidecategory.value = " ";
        popnotification.style.display ="flex";
        console.log(sldno);
        printdetails();

}

function printdetails(){
    var x = sldno.length;
    var data = " ";
    for( var i = 0; i < x ; i++){
        var rowdown = sldno[i];
        console.log(rowdown);
        data +=  ` <tr>
                    <td>${i + 1}</td>
                    <td>${rowdown.slnm}</td>
                    <td>${rowdown.noofsl}</td>
                    <td>${rowdown.sldesc}</td>
                    <td>${rowdown.slcat}</td>
                    <td>${rowdown.update}</td>
                    <td><button class="" onclick="removedetails(${i})">Remove</button></td>
                    </tr>`;

    }
    Details.innerHTML = data;
}
function removedetails(i){
    sldno.splice(i,1);
    printdetails()


}

function removepop(){
    popnotification.style.display = "none";

    
}








