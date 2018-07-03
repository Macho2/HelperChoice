var screenWidth = window.screen.width;
        var lf = screenWidth/2-200;
       
        $('.btn-frame').on('click',function(){
            window.open('https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fplugins%2Ferror%2Fconfirm%2Flike%3Fiframe_referer%3Dhttps%253A%252F%252Fwww.helperchoice.com%252F%26kid_directed_site%3Dfalse%26secure%3Dtrue%26plugin%3Dlike%26return_params%3D%257B%2522action%2522%253A%2522like%2522%252C%2522appId%2522%253A%2522179934945514356%2522%252C%2522height%2522%253A%252228%2522%252C%2522href%2522%253A%2522https%253A%252F%252Fwww.facebook.com%252Fhelperchoice%2522%252C%2522layout%2522%253A%2522button_count%2522%252C%2522share%2522%253A%2522false%2522%252C%2522show_faces%2522%253A%2522false%2522%252C%2522size%2522%253A%2522large%2522%252C%2522width%2522%253A%2522120%2522%252C%2522ret%2522%253A%2522sentry%2522%252C%2522act%2522%253A%2522like%2522%257D','frame',
            'height=400,width=500,left=560,top=200');
        });
        $('#changeLanguage').change(function(){
           var selectedLang=$('#changeLanguage').val();
           if(selectedLang =='English'){
               window.open('https://www.helperchoice.com/','_self');
           }else if(selectedLang=='zh-hans'){
               window.open('https://zh-hans.helperchoice.com/','_self');
           }else if(selectedLang == 'zh-hant'){
               window.open('https://zh-hant.helperchoice.com/','_self');
           }
        
           
        });
        function verifySeal(){
            window.open('https://seal.godaddy.com/verifySeal?sealID=59c2QpjrcsEEsoyMVStuNxcoDa3Tmzy55uuDxkFVUnSA3SWNRaq78VcEfLVj','godaddy','height=700,width=600');
        }
       