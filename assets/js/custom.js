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
    setTimeout(function(){
        formHeight = formBlock.clientHeight;
        if (formHeight > policyHeight) {
        policyBlock.style.minHeight = formHeight + 'px';
    }
    }, 750)
    
    timer = setInterval(function () {
        rotating.style.opacity = 0;
        i++;
        setTimeout(function() {
            rotating.innerHTML = 're ' + reWords[i];
        }, 250);
        setTimeout(function() {
            rotating.style.opacity = 1;
        }, 300)
        if (i === reWords.length) {
            clearInterval(timer);
            rotating.innerHTML = 're: ' + reWords[0];
        }
    }, 7000);
    $('#play').click(function() {
        $('#videoDrawer').slideDown(500);
        setTimeout(function() {
            document.getElementById('mainVideo').play();
        }, 500)
    });
    $('#drawerClose').click(function() {
        $('#videoDrawer').slideUp(500);
        if(!document.getElementById('mainVideo').paused) {
            document.getElementById('mainVideo').pause();
        }
    })
}