let previousSelection=0;
let processcount=0;

document.querySelectorAll('#selection-menu > #selections-body > .selection > .selection-title > .radio-button').forEach((item)=>{
    item.addEventListener('click', function(){
        if(this.querySelector('div').style.display=='none')
        {
            this.querySelector('div').style.display='block';
            processcount+=1;
        }
        else if(this.querySelector('div').style.display=='block')
        {
            this.querySelector('div').style.display='none';
            processcount-=1;
        }
        else
        {
            this.querySelector('div').style.display='block';
            processcount+=1;
        }  
        document.querySelector('#count').innerHTML=processcount;
        document.querySelector('progress').value=processcount*20; 
})});
document.querySelectorAll('#selection-menu > #selections-body > .selection').forEach(element => {
    element.addEventListener('click',function (){
    if(previousSelection==0)
    {
        previousSelection=this;
        this.style.backgroundColor='#E3E3E3';
        this.querySelector('.selection-hidden').style.display='flex';
    }
    else
    {
    previousSelection.querySelector('.selection-hidden').style.display='none';
    previousSelection.style.backgroundColor="white";
    this.style.backgroundColor='#E3E3E3';
    this.querySelector('.selection-hidden').style.display='flex';
    previousSelection=this;
    }})
});

document.querySelector('nav > #notifications').addEventListener('click',(e)=>{
    let noti_popup=document.querySelector('#popup-noti').style.display;
    if(noti_popup=='none')
    {
        document.querySelector('#popup-noti').style.display='block';
    }
    else if (noti_popup=='block')
    {
        document.querySelector('#popup-noti').style.display='none';
    }
    else
    {
        document.querySelector('#popup-noti').style.display='block';
    }
});

document.querySelector('#up-down-icon').addEventListener('click',(e)=>{
    if(document.querySelector('#selections-body').style.display!='none')
    {
     let selectionHeadHeight=document.querySelector('#selection-head').offsetHeight;
     document.querySelector('#selections-body').style.display='none';
     document.querySelector('#selection-menu').style.height=selectionHeadHeight.toString()+"px";
     document.querySelector('#up-down-icon img').src='./icons/down.png';
    }
    else
    {
        document.querySelector('#selections-body').style.display='flex';
        document.querySelector('#selection-menu').style.height='800px';
        document.querySelector('#up-down-icon img').src='./icons/up-icon.png';
    }
});

document.querySelector('nav > #account').addEventListener('click',(e)=>{
    let popupProfile=document.querySelector('#popup-profile').style.display;
    if(popupProfile=='none')
    {
        document.querySelector('#popup-profile').style.display='block';
    }
    else if(popupProfile=='block')
    {
        document.querySelector('#popup-profile').style.display='none';
    }
    else
    {
        document.querySelector('#popup-profile').style.display='block';
    }
});
document.querySelector('#info-box > #close-icon').addEventListener('click',()=>{
    document.querySelector('#info-box').style.opacity=0;
    document.querySelector('#info-box').style.visibility='hidden';
});
//=======================Below of codes are for making application keyboard-friendly==================================
let parser=new DOMParser();
let fitleredElements=[];
allElements.forEach((element)=>{
    if(element.tagName=='div')
    {
        if(element.className=="selection" || element.className=="a-selection" || element.className=="import")
        {
            fitleredElements.push(element);
        }
    }
    else
    {
        fitleredElements.push(fitleredElements);
    }
});
console.log(fitleredElements);