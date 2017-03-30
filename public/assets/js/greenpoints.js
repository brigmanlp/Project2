$("document").ready(function() {
    // on submit
    $("#submitSearch").on("click", function() {
        event.preventDefault();
        //set variable for the category
        var category = $("#category").val().trim();
        //make a get call for the theme using the category variable 
        $.get("/api/theme/" + category, function(data) {
            data.forEach(function(currItem, idx, origArr) {
                var name = currItem.FeatureName;
                var featureName = $("<h2>")
                featureName.html(name);
                var details = currItem.FeatureDetails;
                var featureDets = $("<p>")
                featureDets.html(details);
                var points = $("<div>");
                var imgSrc = "/assets/icons/ecopack/ecologism-2.png";
                points.attr("class", "well");
                if (currItem.Image1Path && currItem.Image1Path.trim().length > 0) {
                    imgSrc = currItem.Image1Path;
                }
                var img = $(`<img src="${imgSrc}" alt=" ${name}" class="pointsImages" align="left">`);
                points.append(img);
                points.append(featureName);
                points.append(featureDets);
                $("#greenpoints").append(points);
            })
            console.log("data added")
        });
    });

    function toNumber(strNumber) {
        return +strNumber;
    }
    $("#submitID").on("click", function() {
        event.preventDefault();
        //set variable for the category
        var id = $("#featureid").val();
        id = toNumber(id);
        //make a get call for the theme using the category variable 
        $.get("/api/id/" + id, function(data) {
            if (data !== null) {
                var currItem = data;
                var id = currItem.id;
                var name = currItem.FeatureName;
                var details = currItem.FeatureDetails;
                var details = currItem.FeatureDetails;
                var imgSrc = "/../icons/ecopack/ecologism-2.png";
                // build display
                // name 
                var featureName = $("<h2>")
                featureName.html(name);
                //description details
                var featureDets = $("<div>");
                detailsContainer = $("<p>");
                detailsContainer.html(details)
                featureDets.append(detailsContainer);
                //id addition to featureDets
                gpID = $("<p>");
                gpID.html(`GreenPoint ID = ${id}`);
                featureDets.append(gpID)
                var points = $("<div>");
                points.attr("class", "well");
                if (currItem.Image1Path && currItem.Image1Path.trim().length > 0) {
                    imgSrc = currItem.Image1Path;
                }
                var img = $(`<img src="${imgSrc}" alt=" ${name}" class="pointsImages" align="left">`);
                var modalBtn = '<button type="button" align="right" class="btn btn-lg" data-toggle="modal" data-target="#myModal">Update GreenPoint</button>';
                points.append(img);
                points.append(featureName);
                points.append(featureDets);
                points.append(modalBtn);
                $("#greenpoints").append(points);
                console.log("data added")
            } else {
                alert("That ID has no data associated, please try again.");
            }
        });
        $("#modalObjectSubmit").on("click", function() {
            event.preventDefault();
            var updateObj = {
                id: $("#modalfeatureid").val(),
                FeatureName: $("#modaldescription").val(),
                FeatureDetails: $("#modaldescription").val(),
                Image1Path: $("#modalfeatureimageSrc").val(),
                Link1Path: $("#modalfeaturelinkpath").val(),
            }
            console.log(updateObj);
        });
    });
});