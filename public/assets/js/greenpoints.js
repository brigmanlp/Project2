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
                var name = currItem.FeatureName;
                var featureName = $("<h2>")
                featureName.html(name);
                var details = currItem.FeatureDetails;
                var featureDets = $("<p>")
                featureDets.html(details);
                var points = $("<div>");
                var imgSrc = "/../icons/ecopack/ecologism-2.png";
                points.attr("class", "well");
                if (currItem.Image1Path && currItem.Image1Path.trim().length > 0) {
                    imgSrc = currItem.Image1Path;
                }
                var img = $(`<img src="${imgSrc}" alt=" ${name}" class="pointsImages" align="left">`);
                points.append(img);
                points.append(featureName);
                points.append(featureDets);
                $("#greenpoints").append(points);
                console.log("data added")
            } else {
                alert("That ID has no data associated, please try again.");
            }
        });
    });
});