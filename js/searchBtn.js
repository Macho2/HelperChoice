$('#searchBtn').click(function(){
    var location = $('#location').val();
    console.log(location);
    if(location==null){
        window.open('./assets/domestic/domestic.html','_self');
        console.log(1);
    }else if(location == 'HongKong'){
        window.open('https://www.helperchoice.com/hong-kong/domestic-helpers','_self');
    }else if(location == 'Macau'){
        window.open('https://www.helperchoice.com/mo/domestic-helpers','_self');
    }else if(location == 'Singapore'){
        window.open('https://www.helperchoice.com/singapore/domestic-helpers','_self');
    }else if(location == 'Philippines'){
        window.open('https://www.helperchoice.com/ph/domestic-helpers','_self');
    }else if(location == 'U.A.E.'){
        window.open('https://www.helperchoice.com/dubai/domestic-helpers','_self');
    }else if(location == 'SaudiArabia'){
        window.open('https://www.helperchoice.com/saudi-arabia/domestic-helpers','_self');
    }else if(location == 'Kuwait'){
        window.open('https://www.helperchoice.com/kuwait/domestic-helpers','_self');
    }else if(location == 'Qatar'){
        window.open('https://www.helperchoice.com/qatar/domestic-helpers','_self');
    }
})