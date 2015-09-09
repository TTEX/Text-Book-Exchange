function sellBook(){
    $("#sellBookModal").modal('show');
}

function buyBook(){
    $("#buyBookModal").modal('show');

}

function sell(){
             var departmentName = $("#sellDepartment").val();
             var courseNo = $("#sellCourseNumber").val();
             var bookTitle = $("input[name=sellBookTitle]").val();
             var sellerEmail = $("input[name=sellEmail]").val();
             var bookCondition = $("#sellCondition").val();
             var bookPrice = $("input[name=sellPrice]").val();

         var bookToSell = {
            department: departmentName,
            courseNumber: courseNo,
            title: bookTitle,
            email: sellerEmail,
            condition: bookCondition,
            price: bookPrice

         };

         var req = new XMLHttpRequest;
         var url = "http://130.64.96.76:3000/books"
         var params = "department="+departmentName+"&courseNumber="+courseNo+"&title="+bookTitle+"&email="+sellerEmail+"&condition="+bookCondition+"&price="+bookPrice;
         req.open("POST", url, true);
         req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         req.onreadystatechange = function(){
            if (req.readyState == 4 && req.status == 200){
                console.log("The response is " + req.responseText);
            }
         }

         req.send(params);
         $("#sellBookModal").modal('hide');

}

function searchBook(){
     var departmentName = $("#buyDepartment").val();
     var courseNo = $("#buyCourseNumber").val();

     var bookBeingBought = {
        department: departmentName,
        courseNumber: courseNo
     };

     var req = new XMLHttpRequest;
     var url = "http://130.64.222.9:3000/books?department="+departmentName+"&courseNumber="+courseNo;
     var params = "department="+departmentName+"&courseNumber="+courseNo;
     req.open("GET", url, true);
     req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     req.onreadystatechange = function(){
        if (req.readyState == 4 && req.status == 200){
           console.log("The response is " + req.responseText);
        }
     }

     req.send(params);


    var result = req.responseText;
    displayBooks(result);
}

function displayBooks(result){
    $("#books").DataTable({
        data: text
    });

}
