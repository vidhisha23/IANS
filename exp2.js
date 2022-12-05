function Mono_Encrypt() {
    plaintext = document.getElementById("p").value.toLowerCase();  
    key = document.getElementById("key").value.toLowerCase().replace(/[^a-z]/g,""); 
    if(plaintext.length < 1){ alert("please enter some plaintext (letters and numbers only)"); return; }    
    if(key.length != 26){ alert("key must be 26 characters in length"); return; }
    ciphertext = ""; var re = /[a-z]/; 
    for(i=0; i<plaintext.length; i++){ 
        if(re.test(plaintext.charAt(i))) ciphertext += key.charAt(plaintext.charCodeAt(i)-97); 
        else  ciphertext += plaintext.charAt(i); 
    } 
    if(document.getElementById("punc").checked) 
        document.getElementById("c").value = ciphertext.replace(/[^a-z]/g,"").replace(/([a-z]{5})/g,"$1 "); 
    else 
        document.getElementById("c").value = ciphertext; 
} 
 
function Mono_Decrypt(f){ 
    ciphertext = document.getElementById("c").value.toLowerCase();  
    key = document.getElementById("key").value.toLowerCase().replace(/[^a-z]/g, ""); 
    if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
    if(key.length != 26){ alert("key must be 26 characters in length"); return; }
    plaintext = ""; var re = /[a-z]/; 
    for(i=0; i<ciphertext.length; i++){ 
        if(re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode(key.indexOf(ciphertext.charAt(i))+97); 
        else  plaintext += ciphertext.charAt(i); 
    } 
    document.getElementById("p").value = plaintext; 
} 
 
function Mono_GenRandKey(){ 
    var keychars = "abcdefghijklmnopqrstuvwxyz"; 
    var chars = keychars.split(""); 
    ret=""; lim = chars.length; 
    for(i=0; i<lim; i++){ 
        index = Math.floor(chars.length*Math.random()); 
        ret += chars[index]; 
        chars.splice(index,1); 
    } 
    document.getElementById("key").value = ret; 
}
