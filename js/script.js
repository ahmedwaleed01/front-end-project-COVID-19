var bttn=document.getElementById("butt");
window.onscroll=function(){scrollFunction() }

function scrollFunction() {
    if(document.documentElement.scrollTop > 500 || document.documentElement.scrollTop>500){
      bttn.style.display="block";
    }else{
      bttn.style.display="none";
    }
  }
  
  function topscreen(){
    document.documentElement.scrollTop=0;
    document.documentElement.scrollTop=0;
  }


//   $(window).scroll(function(){
//     let position = $(this).scrollTop();

//     $('.section').each(function(){
//         let target = $(this).offset().top;
//         let id = $(this).attr('id');

//         if(position >= target) {
//             $('#topNav > ul > li > a').removeClass('active');
//                 $('#topNav > ul > li > a [href=#' + id + ']').addClass('active') 
//         } 
//     })



// });
var sel=document.getElementsByClassName("H_l")
var ch=false;
for(let k=0;k<sel.length;k++){
  
  sel[k].addEventListener('click',()=>{
    for(let m=0;m<sel.length;m++){
      sel[m].setAttribute("style","color:#273f6b;")
    }
    sel[k].setAttribute("style","color: #0bc7ba;")
  })
}

var plus=document.querySelectorAll(".plus")
var pls=document.querySelectorAll(".pls")
var open=false;
var check=[false,false,false,false,false];

for(let i=0;i<plus.length;i++){
  
  plus[i].addEventListener('click',()=>{
    if (open==false){
      for(let j=0;j<plus.length;j++){
      plus[j].nextElementSibling.setAttribute("style","display:none;");
      plus[j].lastElementChild.setAttribute("style","display:none;");
      pls[j].style.display="block";
      }
      plus[i].nextElementSibling.setAttribute("style","display:block;");
      plus[i].lastElementChild.setAttribute("style","display:block;");
      pls[i].style.display="none";
      open=true;
      check[i]=true;
     }else{
      plus[i].nextElementSibling.setAttribute("style","display:none;");
      plus[i].lastElementChild.setAttribute("style","display:none;");
      pls[i].style.display="block";
      check[i]=false;
      open=false;
     }
  })
}

var pa=document.querySelector(".P_A");

var pb=document.querySelector(".P_B")
var pc=document.querySelector(".P_C");
var pd=document.querySelector(".P_D");
var pe=document.querySelector(".P_E");
var pf=document.querySelector(".P_F");

function displaypa(){
  pa.setAttribute("style","display:block !important;")
  pb.setAttribute("style","display:none !important;")
  pc.setAttribute("style","display:none !important;")
  pd.setAttribute("style","display:none !important;")
  pe.setAttribute("style","display:none !important;")
  pf.setAttribute("style","display:none !important;")
}

function displaypb(){
  pb.setAttribute("style","display:block !important;")
  pa.setAttribute("style","display:none !important;")
  pc.setAttribute("style","display:none !important;")
  pd.setAttribute("style","display:none !important;")
  pe.setAttribute("style","display:none !important;")
  pf.setAttribute("style","display:none !important;")
}

function displaypc(){
  pc.setAttribute("style","display:block !important;")
  pa.setAttribute("style","display:none !important;")
  pb.setAttribute("style","display:none !important;")
  pd.setAttribute("style","display:none !important;")
  pe.setAttribute("style","display:none !important;")
  pf.setAttribute("style","display:none !important;")
}

function displaypd(){
  pc.setAttribute("style","display:none !important;")
  pa.setAttribute("style","display:none !important;")
  pb.setAttribute("style","display:none !important;")
  pd.setAttribute("style","display:block !important;")
  pe.setAttribute("style","display:none !important;")
  pf.setAttribute("style","display:none !important;")
}

function displaype(){
  pe.setAttribute("style","display:block !important;")
  pf.setAttribute("style","display:none !important;")
  pc.setAttribute("style","display:none !important;")
  pa.setAttribute("style","display:none !important;")
  pb.setAttribute("style","display:none !important;")
  pd.setAttribute("style","display:none !important;")
}
function displaypf(){
  pe.setAttribute("style","display:none !important;")
  pf.setAttribute("style","display:block !important;")
  pc.setAttribute("style","display:none !important;")
  pa.setAttribute("style","display:none !important;")
  pb.setAttribute("style","display:none !important;")
  pd.setAttribute("style","display:none !important;")
}