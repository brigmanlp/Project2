$("document").ready(function() {
    function clearGP() {
        $("#greenpoints").empty();
    }
    // on submit
    $("#submitSearch").on("click", function() {
        event.preventDefault();
        clearGP();
        //set variable for the category
        var category = $("#category").val().trim();
        //make a get call for the theme using the category variable 
        $.get("/api/theme/" + category, function(data) {
            data.forEach(function(currItem, idx, origArr) {
                var id = currItem.id;
                var name = currItem.FeatureName;
                var details = currItem.FeatureDetails;
                var imgSrc = "assets/icons/ecopack/ecologism-2.png";
                // build display
                // name 
                var featureName = $("<h2>");
                featureName.html(name);
                // details
                var featureDets = $("<div>");
                featureDets.attr("class", "col-md-6");
                featureDets.attr("align", "right");
                featureDets.append(featureName);
                var link = currItem.Link1Path
                var web = $("<a>")
                web.attr("href", link)
                web.attr("target", "_blank")
                web.attr("style", "display: block")
                web.text("Webpage");
                detailsContainer = $("<p>");
                detailsContainer.html(details);
                detailsContainer.append(web);
                featureDets.append(detailsContainer);
                //id addition to featureDets
                gpID = $("<p>");
                gpID.html(`GreenPoint ID : ${id}`);
                featureDets.append(gpID);
                var points = $("<div>");
                points.attr("class", "well");
                if (currItem.Image1Path && currItem.Image1Path.trim().length > 0) {
                    imgSrc = currItem.Image1Path;
                }
                var imgDiv = $("<div>");
                imgDiv.attr("class", "col-md-6")
                imgDiv.attr("align", "left");
                var img = $(`<img src="${imgSrc}" alt=" ${name}" class="pointsImages" align="left">`);
                imgDiv.append(img);
                var modalBtn = '<button type="button" align="left" class="btn btn-lg" data-toggle="modal" data-target="#myModal">Update GreenPoint</button>';
                points.append(imgDiv);
                points.append(featureDets);
                points.append(modalBtn);
                $("#greenpoints").append(points);
            })
            console.log("data added")
        });
    });

    function toNumber(strNumber) {
        return +strNumber;
    };
    $("#submitID").on("click", function() {
        event.preventDefault();
        clearGP();
        var id = $("#featureid").val();
        //make a get call for the theme using the category variable 
        $.get("/api/id/" + id, function(data) {
            if (data !== null) {
                var currItem = data;
                var id = currItem.id;
                var name = currItem.FeatureName;
                var details = currItem.FeatureDetails;
                var imgSrc = "assets/icons/ecopack/ecologism-2.png";
                // build display
                // name 
                var featureName = $("<h2>");
                featureName.html(name);
                // details
                var featureDets = $("<div>");
                featureDets.attr("class", "col-md-6");
                featureDets.attr("align", "right");
                featureDets.append(featureName);
                var link = currItem.Link1Path
                var web = $("<a>")
                web.attr("href", link)
                web.attr("target", "_blank")
                web.attr("style", "display: block")
                web.text("Webpage");
                detailsContainer = $("<p>");
                detailsContainer.html(details);
                detailsContainer.append(web);
                featureDets.append(detailsContainer);

                //id addition to featureDets
                gpID = $("<p>");
                gpID.html(`GreenPoint ID : ${id}`);
                featureDets.append(gpID);
                var points = $("<div>");
                points.attr("class", "well");
                if (currItem.Image1Path && currItem.Image1Path.trim().length > 0) {
                    imgSrc = currItem.Image1Path;
                }
                var imgDiv = $("<div>");
                imgDiv.attr("class", "col-md-6")
                imgDiv.attr("align", "left");
                var img = $(`<img src="${imgSrc}" alt=" ${name}" class="pointsImages" align="left">`);
                imgDiv.append(img);
                var modalBtn = '<button type="button" align="right" class="btn btn-lg" data-toggle="modal" data-target="#myModal">Update GreenPoint</button>';
                points.append(imgDiv);
                points.append(featureDets);
                points.append(modalBtn);
                $("#greenpoints").append(points);
            } else {
                alert("That ID has no data associated, please try again.");
            }
        });
    });
    $("#modalObjectSubmit").on("click", function() {
        event.preventDefault();
        var updateObj = {
            id: $("#modalfeatureid").val(),
            FeatureName: $("#modaldescription").val(),
            FeatureDetails: $("#modaldescription").val(),
            Image1Path: $("#modalfeatureimageSrc").val(),
            Link1Path: $("#modalfeaturelinkpath").val(),
        };

    });
});


//Future additions
//Adding logic for update
// $.put("/api/updatebyid/" + updateObj.id, function(data) {});

// // This function figures out which point we want to delete and then calls
// deleteGreenPoint
// function handleDelete() {
//     event.preventDefault();
//     var id = $("#featureid").val();
//     deleteGreenPoint(id);
// }
// $("#submitRemoveID").on("click", function() {
//     event.preventDefault();
//     handleDelete();
// });
// // This function does an API call to delete posts
// function deleteGreenPoint(id) {
//     $.ajax({
//             method: "DELETE",
//             url: "/api/removebyid/" + id
//         })
//         .done(function() {
//             alert("Deleted Greenpoint: " + id);
//         });
// };
// function checkforid(id) {
//     $.get("api/id/" + id, function(data) {
//         if (data !== null) {
//             console.log("Failed to Delete");
//         } else {
//             console.log(data);
//         };
//     });
// }