//Start Form Handling Code Ready Fct

$(
    function () {
    $(":text").change(function () {
        var $premise1 = $("#premise1").val();
        var $antecedent = $("#antecedent").val().trim();
        var $consequent = $("#consequent").val().trim();
        var output = "Premise 1: " + $premise1+" "+$antecedent+ " are "+ $consequent+" . " ;
        
        // console.log($premise1);
        // console.log($antecedent);
        // console.log($consequent);


        console.log(output);
        $("#output").append("<p>"+output+"</p>")
        
    });



    }
);//End Form Handling Code Ready Fct