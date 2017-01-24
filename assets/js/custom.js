window.onload = function () {
    var vidPlaceholder = document.getElementById('videoPlaceholder'),
        textBlock = document.getElementById('textBlock'),
        vpHeight = vidPlaceholder.clientHeight,
        tbHeight = textBlock.clientHeight,
        formBlock = document.getElementById('formBlock'),
        policyBlock = document.getElementById('influencingPolicy'),
        formHeight = formBlock.clientHeight,
        policyHeight = policyBlock.clientHeight,
        rotating = document.getElementById('rotating');

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
        timer;

    if (tbHeight > vpHeight) {
        vidPlaceholder.style.minHeight = tbHeight + 'px';
    }
    setTimeout(function () {
        formHeight = formBlock.clientHeight;
        if (formHeight > policyHeight) {
            policyBlock.style.minHeight = formHeight + 'px';
        }
    }, 750)

    timer = setInterval(function () {
        

        if (i === reWords.length) {
            rotating.style.opacity = 0;
            clearInterval(timer);
            setTimeout(function () {
                rotating.innerHTML = 'RE ' + reWords[0];
            }, 250);
            setTimeout(function() {
                rotating.style.opacity = 1;
            }, 300)
        } else if (i < reWords.length) {
            rotating.style.opacity = 0;
            setTimeout(function () {
                rotating.innerHTML = 'RE ' + reWords[i];
                i++;
                console.log(i);

            }, 250);
            setTimeout(function () {
                rotating.style.opacity = 1;
            }, 300);
        }


    }, 7000);
    $('#play').click(function () {
        $('#videoDrawer').slideDown(500);
        setTimeout(function () {
            document.getElementById('mainVideo').play();
        }, 500);
    });
    $('#placeHolderPlayButton').click(function () {
        $('#videoDrawer').slideDown(500);
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        setTimeout(function () {
            document.getElementById('mainVideo').play();
        }, 500);
        return false;
    });
    $('#drawerClose').click(function () {
        $('#videoDrawer').slideUp(500);
        if (!document.getElementById('mainVideo').paused) {
            document.getElementById('mainVideo').pause();
        }
    });
    document.getElementById('videoPlaceholder').addEventListener('mouseenter', function () {
        document.getElementById('videoPH').play();
    });
    document.getElementById('videoPlaceholder').addEventListener('mouseleave', function () {
        document.getElementById('videoPH').pause();
    });

    var asknot = new Audio('./assets/audio/asknot.mp3');

    document.getElementById('asknot').addEventListener('click', function () {
        asknot.play();
    });
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