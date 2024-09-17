"use strict";
$(document).ready(function () {

    $("#me").click(function (e) {
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($("#imputme").val()) == "") {
                let vall = $("#inputme").val()
                let newH3 = $('<h3> </h3>');
                let newDiv = $('<div class="line"> </div>')
                let bigDiv = $(`<div> ${myclass} </div>`)
                $(newH3).append(vall) // <h3>vall</h3> 
                $(newDiv).append(newH3) // <div class="line"> <h3>vall</h3> </div>
                $(bigDiv).append(newDiv)
                return bigDiv
            }
            else {
                return
            }
        }
        $("#messageyou").append(myel())
        $("#messageme").append(myel('class = "end"'))
        $("#inputme").val("")

        document.querySelector("#messageme").scrollTo(0,document.querySelector("#messageme").scrollHeight)
        document.querySelector("#messageyou").scrollTo(0,document.querySelector("#messageyou").scrollHeight)
    });


    $("#you").click(function (e) {
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($("#imputyou").val()) == "") {
                let vall = $("#inputyou").val()
                let newH3 = $('<h3> </h3>')
                let newDiv = $('<div class="line"> </div>');
                let bigDiv = $(`<div> ${myclass} </div>`)
                $(newH3).append(vall)
                $(newDiv).append(newH3)
                $(bigDiv).append(newDiv)
                return bigDiv
            }
            else {
                return
            }
        }
        $("#messageme").append(myel())
        $("#messageyou").append(myel('class = "end"'))
        $("#inputyou").val("")

        document.querySelector("#messageme").scrollTo(0,document.querySelector("#messageme").scrollHeight)
        document.querySelector("#messageyou").scrollTo(0,document.querySelector("#messageyou").scrollHeight)
    });

});