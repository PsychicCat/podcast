$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: 'http://joeroganexp.joerogan.libsynpro.com/rss',
        dataType: 'xml',
        crossDomain: true
    }).success(function (data) {
            //$(data).find('channel').each(function(){
            //    $(this).find("link");
            //    var episode = $(this).text();
            //    console.log(episode);
            //    });
        console.log(data);
        //var parseString = require('xml2js');
        //var xml = data;
        //parseString(xml, function (err, result) {
        //    console.log(result);
            //console.dir(result);
        })
    }).error(function (jqXHR, textStatus, errorThrown) {
        console.log('Ajax failed: ', textStatus, errorThrown);
    })
});