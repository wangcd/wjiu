
                       
                                // add by liuguichun 2011-7-19
                                var buyNumber = {
                                    maxNumber : 20,
                                    minNumber : 1,
                                    defaultNumber : function(){
                                        var defaultnumber = $('#product_num').attr('defaultnumber');
                                        defaultnumber = parseInt(defaultnumber)
                                        if(defaultnumber < 1){
                                            defaultnumber = 1;
                                        }
                                        return defaultnumber;
                                    },
                                                                                                                                    
                                    goodNumber : function(num){
                                        if(typeof(num) == 'number'){
                                            return document.getElementById('product_num').value = num;
                                        }else{
                                            return parseInt(document.getElementById('product_num').value);
                                        }
                                                                                                                                        
                                    },
                                    plus : function(){ 
var num = buyNumber.goodNumber() + buyNumber.defaultNumber(); 
if(num <= buyNumber.maxNumber){ 

buyNumber.goodNumber(num); 
} 
changePrice(); 
}, 
minus : function(){ 
var num = buyNumber.goodNumber() - buyNumber.defaultNumber(); 
if(num >= buyNumber.minNumber){ 
buyNumber.goodNumber(num); 
} 
changePrice(); 
}
                                                                                                                                    
                                }
                         