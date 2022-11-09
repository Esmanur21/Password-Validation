var is_visible=false;

function see(){
    var input=document.querySelector('#password');
    var see=document.querySelector('#see');
    var saw=document.querySelector('#saw');
    if(is_visible){
input.type='password';
is_visible=false;
see.style.color="gray";
see.style.display="block";
saw.style.display="none";
    }else{
        input.type='text';
        is_visible=true;
        see.style.display="none";
        saw.style.display="block";
    };
}

function check()
{
     var input=document.querySelector("#password").value;
    // document.querySelector('#count').innerText="Length: "+input.length;

  if(input.length>=5){
document.querySelector('#check0').style.color="green";
  }else{
    document.querySelector('#check0').style.color="red";
  }
 
  if(input.length<=15){
    document.querySelector('#check1').style.color="green";
  }else{
    document.querySelector('#check1').style.color='red';
  }


  if(input.match(/[0-9]/i)){
    document.querySelector('#check2').style.color='green';
  }else{
    document.querySelector('#check2').style.color='red';
  }

  if(input.match(/[^A-Za-z0-9-'']/i)){
    document.querySelector('#check3').style.color='green';
  }else{
    document.querySelector('#check3').style.color='red';
  }

  if(input.match(' ')){
    document.querySelector('#check4').style.color='red';
  }else{
    document.querySelector('#check4').style.color='green';
  }


}
