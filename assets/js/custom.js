window.onload = function () {

    var vidPlaceholder = document.getElementById('videoPlaceholder'),
        textBlock = document.getElementById('textBlock'),
        vpHeight = vidPlaceholder.clientHeight,
        tbHeight = textBlock.clientHeight,
        formBlock = document.getElementById('formBlock'),
        policyBlock = document.getElementById('influencingPolicy'),
        formHeight = formBlock.clientHeight,
        policyHeight = policyBlock.clientHeight,
        rotating = document.getElementById('rotating'),
        quoteHolder = document.getElementById('quoteHolder');

    var reWords = [
        'invest',
        'focus',
        'analyze',
        'invent',
        'guide',
        'check',
        'balance',
        'define',
        'shape',
        'visit',
        'set',
        'start',
        'boot',
        'tool',
        'fresh',
        'gain',
        'invigorate',
        'imagine',
        'think',
        'write',
        'cast',
        'construct',
        'word',
        'organize',
        'adjust',
        'new',
        'build',
        'assess',
        'scale'
    ],
        i = 0,
        timer,
        z = 0,
        quoteTimer,
        quotes = [
            'Wisconsin’s Aurora Lakeshore Medical Clinic MSSP ACO reduced costs by $200 per beneficiary in 2015',
            'Florida’s Baptist Health Tele-ICU program has reduced ICU mortality by 28% and costs by $92M',
            'North Carolina’s CaroMont Health saved Medicare $14M',
            'Maryland & DC’s Johns Hopkins Medicine Alliance for Patients achieved a 96.2% quality score',
            'Florida’s Memorial Healthcare System experienced a marked reduction in 30-day readmissions',
            'Ohio’s Mercy Health achieved an overall quality score of 97.1%',
            'Texas’s Southwestern Health Resources yielded $30M in savings and achieved a 97% quality score',
            'Pennsylvania’s St. Luke’s University Hospital and Health Network cut 90-day readmissions in half',
            'Texas Health Aetna focusing on consumer experience'
        ];

    var browser = {
        isIe: function () {
            return navigator.appVersion.indexOf("MSIE") != -1;
        },
        navigator: navigator.appVersion,
        getVersion: function () {
            var version = 999; // we assume a sane browser
            if (navigator.appVersion.indexOf("MSIE") != -1)
            // bah, IE again, lets downgrade version number
                version = parseFloat(navigator.appVersion.split("MSIE")[1]);
            return version;
        }
    };

    var browserVers = browser.navigator;

    //    console.log(browserVers);

    setTimeout(function() {
        formHeight = vidPlaceholder.clientHeight;
        if (tbHeight > vpHeight) {
            vidPlaceholder.style.minHeight = tbHeight + 'px';
        }
    }, 2000)
    
    setTimeout(function () {
        formHeight = formBlock.clientHeight;
        if (formHeight > policyHeight) {
            policyBlock.style.minHeight = formHeight + 'px';
        }
    }, 750)

    timer = setInterval(function () {


        if (i === reWords.length) {
            rotating.style.opacity = 0;
            setTimeout(function () {
                rotating.innerHTML = 'RE ' + reWords[0];
                i = 1;
            }, 250);
            setTimeout(function () {
                rotating.style.opacity = 1;
            }, 300)
        } else if (i < reWords.length) {
            rotating.style.opacity = 0;
            setTimeout(function () {
                rotating.innerHTML = 'RE ' + reWords[i];
                i++;
                //                console.log(i);

            }, 250);
            setTimeout(function () {
                rotating.style.opacity = 1;
            }, 300);
        }


    }, 7000);
    
    quoteTimer = setInterval(function() {
        if (z === quotes.length) {
            quoteHolder.style.opacity = 0;
            setTimeout(function() {
                quoteHolder.innerHTML = quotes[0];
                z = 1;
            }, 250);
            setTimeout(function() {
                quoteHolder.style.opacity = 1;
            }, 300)
        } else if (i < quotes.length) {
            quoteHolder.style.opacity = 0;
            setTimeout(function() {
                quoteHolder.innerHTML = quotes[z];
                z++;
            }, 250);
            setTimeout(function() {
                quoteHolder.style.opacity = 1;
            }, 300)
        }
    }, 15000)
        
    $('#play').click(function () {
        $('#videoDrawer').slideDown(500);
        setTimeout(function () {
            //                document.getElementById('mainVideo').playVideo();
            player.playVideo();
        }, 500);
    });
    $('#placeHolderPlayButton').click(function () {
        $('#videoDrawer').slideDown(500);
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        setTimeout(function () {
            player.playVideo();
        }, 500);
        return false;
    });
    $('#drawerClose').click(function () {
        $('#videoDrawer').slideUp(500);
        player.pauseVideo();
    });
    document.getElementById('videoPlaceholder').addEventListener('mouseenter', function () {
        document.getElementById('videoPH').play();
    });
    document.getElementById('videoPlaceholder').addEventListener('mouseleave', function () {
        document.getElementById('videoPH').pause();
    });

//    var asknot = new Audio('./assets/audio/asknot.mp3');
//
//    document.getElementById('asknot').addEventListener('click', function () {
//        asknot.play();
//    });



}

window.onresize = function () {
    var vidPlaceholder = document.getElementById('videoPlaceholder'),
        textBlock = document.getElementById('textBlock'),
        vpHeight = vidPlaceholder.clientHeight,
        tbHeight = textBlock.clientHeight,
        formBlock = document.getElementById('formBlock'),
        policyBlock = document.getElementById('influencingPolicy'),
        formHeight = formBlock.clientHeight,
        policyHeight = policyBlock.clientHeight,
        rotating = document.getElementById('rotating'),
        resizeTime;

    clearTimeout(resizeTime);
    resizeTime = setTimeout(function () {
        if (tbHeight > vpHeight) {
            vidPlaceholder.style.minHeight = tbHeight + 'px';
        } else if (tbHeight < vpHeight) {
            vidPlaceholder.style.minHeight = tbHeight + 'px';
        }
    }, 100);
}